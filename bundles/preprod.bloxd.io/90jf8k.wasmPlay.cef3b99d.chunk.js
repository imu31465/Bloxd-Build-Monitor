export const id = 52;
export const ids = [52, 122];
export const modules = {
  8144: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    const CF = new Set(["chunkBorders"])
  },
  35334: (FF, WF, SF) => {
    function CF(FF, WF) {
      FF instanceof Promise ? FF.then(WF).catch((FF => {
        console.error("Couldn't open the preview", FF)
      })) : WF(FF)
    }
    SF.d(WF, {
      e: () => hF
    });
    class AF {
      constructor(FF) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height), null !== this.view && FF.show(this.view))
        }))
      }
      show(FF) {
        var WF;
        this.view = FF, null === (WF = this.opened) || void 0 === WF || WF.show(FF)
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    class uF {
      constructor(FF) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(FF).then((FF => FF.ready)), CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var FF, WF;
        return null !== (FF = null === (WF = this.opened) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
      }
      setCosmetic(FF, WF) {
        var SF;
        null === (SF = this.opened) || void 0 === SF || SF.setCosmetic(FF, WF)
      }
      playEmote(FF) {
        var WF;
        null === (WF = this.opened) || void 0 === WF || WF.playEmote(FF)
      }
      async untilDrawn(FF) {
        var WF;
        await this.ready, await (null === (WF = this.opened) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    const hF = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(FF) {
        this.host = FF
      }
      setDefaultHost(FF) {
        this.makeDefault = FF
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(FF) {
        return new AF(this.current().openMob(FF))
      }
      openPet(FF) {
        return new AF(this.current().openPet(FF))
      }
      openMobLineup(FF) {
        return new AF(this.current().openMobLineup(FF))
      }
      openCharacter(FF) {
        return new uF(this.current().openCharacter(FF))
      }
    }
  },
  37570: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => iW,
      g: () => eF
    });
    var CF = SF(138),
      AF = SF(1323),
      uF = SF(1315),
      hF = SF(2418),
      bW = SF(1336),
      dF = SF(34993),
      PF = SF(958),
      RF = SF(37547);

    function iW(FF) {
      (0, hF.h)("matchmake_failed", FF, CF.f[CF.f.SHADER_PACK])
    }
    async function eF(FF, WF) {
      var SF;
      const CF = null === (SF = await RF.shaderPackPage.preload()) || void 0 === SF ? void 0 : SF.listing,
        hF = (0, dF.c)();
      CF && null !== hF && await bW.b.reportShaderPackSession(FF, {
        packId: CF.packId,
        sourceHash: CF.sourceHash,
        game: (0, uF.g)(WF, AF.r, "other"),
        playSessionId: hF,
        visitSessionId: (0, PF.b)()
      })
    }
  },
  5630: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(33);
    const AF = "shaderPack";
    async function uF() {
      var FF;
      let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (FF = await CF.f.getItem(AF, WF)) && void 0 !== FF ? FF : null
    }
  },
  37560: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    let CF = !1;
    async function AF(FF, WF) {
      if (!CF) {
        CF = !0;
        try {
          const [{
            reloadBloxd: CF
          }, {
            NotificationProvider: AF
          }] = await Promise.all([Promise.resolve().then((() => SF(1510))), Promise.resolve().then((() => SF(1189)))]);
          if (!FF || !0 === await AF.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void CF(WF)
        } catch (AF) {
          console.error("Leaving the replay failed", AF)
        }
        CF = !1
      }
    }
  },
  5458: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      h: () => hF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      FF.signal.aborted || CF.set(FF.signal, WF), FF.abort(WF)
    }

    function uF(FF) {
      var WF;
      const SF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.reason) && void 0 !== WF ? WF : FF && CF.get(FF);
      if (void 0 !== SF && null !== SF) return SF;
      const AF = new DOMException("signal is aborted without reason", "AbortError");
      return null !== FF && void 0 !== FF && FF.aborted && CF.set(FF, AF), AF
    }

    function hF(FF) {
      if (null !== FF && void 0 !== FF && FF.aborted) throw uF(FF)
    }
  },
  37445: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    var CF = SF(5458);

    function AF(FF, WF) {
      return new Promise(((SF, AF) => {
        if (null !== WF && void 0 !== WF && WF.aborted) return void AF((0, CF.b)(WF));
        const uF = () => {
            clearTimeout(hF), AF((0, CF.b)(WF))
          },
          hF = setTimeout((() => {
            null === WF || void 0 === WF || WF.removeEventListener("abort", uF), SF()
          }), FF);
        null === WF || void 0 === WF || WF.addEventListener("abort", uF, {
          once: !0
        })
      }))
    }
  },
  38900: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF
    });
    var CF = SF(1526);
    const AF = 33177600,
      uF = 3e4;
    let hF = !1;

    function bW(FF, WF, SF) {
      if (!FF.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (hF) return Promise.reject(new Error("A screenshot is already being taken"));
      hF = !0;
      const CF = function(FF, WF, SF) {
        const CF = Math.max(1, FF),
          uF = Math.max(1, WF),
          hF = Math.min(1, SF / Math.max(CF, uF), Math.sqrt(AF / (CF * uF)));
        return {
          width: Math.max(1, Math.floor(CF * hF)),
          height: Math.max(1, Math.floor(uF * hF))
        }
      }(WF, SF, FF.maxTextureSize);
      return FF.resize(CF.width, CF.height), new Promise(((WF, SF) => {
        let CF, AF = 2,
          bW = null;
        const dF = () => {
          var WF;
          hF = !1, null === (WF = bW) || void 0 === WF || WF(), clearTimeout(CF), FF.restoreSize()
        };
        CF = setTimeout((() => {
          dF(), SF(new Error("No frame was drawn to capture"))
        }), uF), bW = FF.onFrameDrawn((() => {
          if (AF--, AF > 0) return;
          const {
            canvas: CF
          } = FF, uF = {
            width: CF.width,
            height: CF.height
          };
          try {
            CF.toBlob((FF => {
              FF ? WF({
                blob: FF,
                ...uF
              }) : SF(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (hF) {
            SF(hF)
          } finally {
            dF()
          }
        }))
      }))
    }
    async function dF(FF, WF, SF) {
      try {
        const AF = await bW(FF, WF, SF);
        (0, CF.b)(AF.blob, `bloxd-screenshot-${AF.width}x${AF.height}-${Date.now()}.png`)
      } catch (AF) {
        console.error("Error taking screenshot:", AF)
      }
    }
  },
  37439: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(161),
      AF = SF(37445),
      uF = SF(5458);
    const hF = [250, 500, 1e3, 2e3, 1250],
      bW = 406;

    function dF(FF) {
      if ("object" !== typeof FF || null === FF) return !1;
      const {
        code: WF,
        message: SF
      } = FF, AF = CF.e.duplicateLobbyNameError;
      return (WF === AF.code || WF === bW) && (SF === AF.text || SF === AF.text + CF.j)
    }
    async function PF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.c;
      for (let AF = 0;; AF++) {
        let bW;
        (0, uF.h)(WF);
        try {
          return await FF()
        } catch (CF) {
          if (bW = hF[AF], void 0 === bW || !dF(CF)) throw CF
        }
        await SF(bW, WF)
      }
    }
  },
  37161: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => dF,
      g: () => bW,
      i: () => hF
    });
    const CF = "A valid external Instance reference no longer exists.",
      AF = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const uF = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function hF(FF, WF) {
      return FF ? "frames_refused" : function(FF) {
        var WF;
        const SF = null !== (WF = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(FF)) && void 0 !== WF ? WF : /failed with ([A-Z][A-Z0-9_]+)/.exec(FF);
        return SF ? SF[1] : FF.includes(CF) ? "gpu_process_lost" : "other"
      }(WF)
    }

    function bW(FF) {
      return `${(null===FF||void 0===FF?void 0:FF.vendor)||"unknown vendor"} ${(null===FF||void 0===FF?void 0:FF.architecture)||"unknown architecture"}`
    }

    function dF(FF) {
      var WF;
      const SF = AF.find((WF => {
        let [SF] = WF;
        return FF < SF
      }));
      return null !== (WF = null === SF || void 0 === SF ? void 0 : SF[1]) && void 0 !== WF ? WF : "30m+"
    }
  },
  37503: (FF, WF, SF) => {
    function CF(FF, WF) {
      const SF = FF || 4;
      return SF <= 6 ? 1 : SF <= 8 || WF ? 2 : 3
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  37500: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(220),
      AF = SF(132),
      uF = SF(33);

    function hF() {
      uF.h.setItem(CF.Jb, uF.h.getItem(CF.Jb) + 1), (0, AF.l)() && uF.h.setItem(CF.Ib, uF.h.getItem(CF.Ib) + 1)
    }
  },
  34993: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF,
      e: () => RF,
      f: () => EF,
      i: () => iW
    });
    var CF = SF(271),
      AF = SF(244),
      uF = SF(964),
      hF = SF(33);
    const bW = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      dF = "playSessionGameNameWithVariation",
      PF = "wasMatchmakePlayer";

    function RF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k;
      (0, uF.h)(FF, bW)
    }

    function iW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).setItem(PF, !0)
    }

    function eF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k;
      return (0, uF.c)(FF, bW)
    }

    function EF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hF.k;
      const SF = (0, uF.c)(WF, bW),
        RF = function(FF) {
          const WF = FF.getItem(dF);
          return "string" !== typeof WF ? null : WF
        }(WF),
        iW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).getItem(PF)
        }(WF);
      let eF;
      return eF = null !== SF && null !== RF && (0, uF.d)(WF, bW) && function(FF, WF, SF) {
          const AF = (0, CF.Yb)(FF),
            uF = (0, CF.Yb)(WF),
            hF = (0, CF.Ub)(FF),
            bW = (0, CF.Ub)(WF);
          return !(AF !== uF || !SF) || AF === uF && hF === bW
        }(RF, FF, iW) ? SF : (0, AF.c)(), (0, uF.i)(WF, bW, eF), WF.setItem(dF, FF),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hF.k).removeItem(PF)
        }(WF), eF
    }
  },
  34989: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => rW,
      h: () => gW
    });
    var CF = SF(874),
      AF = SF(247),
      uF = SF(271),
      hF = SF(882),
      bW = SF(3607),
      dF = SF(89),
      PF = SF(132),
      RF = SF(1510),
      iW = SF(107),
      eF = SF(34993),
      EF = SF(33),
      QF = SF(958);

    function rW() {
      var FF, WF;
      return [...null !== (FF = navigator.languages) && void 0 !== FF ? FF : [null !== (WF = navigator.language) && void 0 !== WF ? WF : "none"], "en-Gb"]
    }

    function gW(FF, WF, SF, gW, tW) {
      const TF = (0, CF.j)(WF) ? (0, CF.o)(WF) : null,
        aW = {
          cookies: (0, RF.getAllCookiesForGameNameWithVariation)(WF),
          isMobile: (0, dF.isMobile)(),
          isUsingCustomGameTexturePack: null !== TF && tW(TF),
          generalCookies: {
            joinDiscord: !!EF.h.getItem("DiscordPressed"),
            newGo: bW.e,
            ...FF.getMetricsCookies(),
            trafficCode: gW,
            compliance: dF.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, dF.getBrowserName)(),
            version: (0, dF.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, dF.getPlatformType)(),
            deviceType: (0, iW.c)()
          },
          isLoggedIn: FF.isLoggedIn(),
          lobbyName: SF,
          languages: rW(),
          version: AF.c,
          siteUsed: PF.s,
          subsiteUsed: PF.z,
          playSessionId: (0, eF.f)(WF),
          visitSessionId: (0, QF.b)()
        };
      return null !== TF && (0, uF.zc)(TF) ? (aW.lobbyName = (0, CF.g)(TF, (0, CF.l)(WF), SF), {
        roomName: `classic_${hF.h}`,
        joinOptions: aW
      }) : {
        roomName: WF,
        joinOptions: aW
      }
    }
  },
  37579: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    const CF = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  8196: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      f: () => bW,
      i: () => hF,
      k: () => RF,
      o: () => iW,
      r: () => PF
    });
    var CF = SF(161);
    const AF = 33554432,
      uF = 6144,
      hF = 4608,
      bW = 512,
      dF = 4;

    function PF(FF) {
      return "number" === typeof FF && FF < dF
    }

    function RF(FF) {
      return Math.floor(AF * FF / uF)
    }

    function iW(FF) {
      const WF = FF - Math.floor(FF / 6);
      let SF = CF.h.maxChunkHorizAddDistance,
        AF = CF.h.maxChunkVertAddDistance;
      if (eF(SF + 1, AF + 1) <= WF) return null;
      for (; eF(SF + 1, AF + 1) > WF && (SF > 0 || AF > 0);) SF > AF ? SF-- : AF--;
      return {
        horizontal: SF,
        vertical: AF
      }
    }

    function eF(FF, WF) {
      const SF = Math.max(FF, WF);
      let CF = 0;
      for (let AF = -SF; AF <= SF; AF++)
        for (let uF = -SF; uF <= SF; uF++)
          for (let hF = -SF; hF <= SF; hF++) EF(FF, WF, AF, uF, hF) && CF++;
      return CF
    }

    function EF(FF, WF, SF, CF, AF) {
      const uF = SF * SF + AF * AF;
      return FF === WF ? uF + CF * CF <= FF * FF : FF > WF ? Math.abs(CF) <= WF && uF + CF * CF <= FF * FF : uF <= FF * FF && uF + CF * CF <= WF * WF
    }
  },
  38725: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF,
      g: () => bW,
      i: () => RF,
      k: () => dF,
      o: () => hF
    });
    var CF = SF(161);
    const AF = 3e3,
      uF = 15e3;

    function hF(FF) {
      const WF = FF.endsWith(CF.j);
      return {
        text: (WF ? FF.slice(0, -CF.j.length) : FF) || null,
        dropsCache: WF
      }
    }
    const bW = "Either your internet isn't working or this is a bug.";

    function dF(FF, WF) {
      const SF = RF(FF);
      return null !== SF.name && "" === CF.e[SF.name].text && null !== WF ? WF : SF.reason
    }
    const PF = "You were removed from the game.";

    function RF(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const AF = null !== (WF = Object.keys(CF.e).find((WF => CF.e[WF].code === FF))) && void 0 !== WF ? WF : null;
      if (null === AF) return {
        code: FF,
        name: AF,
        reason: null !== SF && void 0 !== SF ? SF : `${bW}\nCode: ${FF}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: uF,
        canReconnect: hF = !1
      } = CF.e[AF], dF = FF === CF.e.outdatedVersion.code || FF === CF.e.loadRecaptchaError.code;
      return {
        code: FF,
        name: AF,
        reason: "" !== uF ? uF : null !== SF && void 0 !== SF ? SF : FF === CF.e.gameOrPluginKick.code ? PF : `Code: ${FF}`,
        canReconnect: hF,
        automaticallyReconnect: FF === CF.e.customGameUpdated.code || FF === CF.e.duplicateLobbyNameError.code,
        requiresRefresh: dF
      }
    }
  },
  38847: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    const CF = {
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
  38811: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF,
      f: () => rW,
      i: () => eF,
      j: () => iW
    });
    const CF = 2e3,
      AF = "unavailable";
    let uF = () => Promise.resolve().then((() => SF(2426))),
      hF = null,
      bW = null,
      dF = PF();

    function PF() {
      let FF = () => {};
      return {
        promise: new Promise((WF => {
          FF = () => {
            WF(null)
          }
        })),
        resolve: FF
      }
    }

    function RF() {
      if (null === hF) {
        const FF = uF();
        hF = FF, FF.then((WF => {
          hF === FF && (bW = WF)
        }), (() => {
          hF === FF && (hF = null)
        }))
      }
      return hF
    }

    function iW() {
      RF().catch((() => {}))
    }

    function eF() {
      dF.resolve()
    }

    function EF(FF, WF, SF, CF) {
      if (null === FF) return {
        errorKind: WF,
        fingerprint: AF,
        dedupe: `${WF}|${CF}`
      };
      const {
        fingerprint: uF
      } = FF.clientErrorKey(WF, SF, CF);
      return {
        errorKind: WF,
        fingerprint: uF,
        dedupe: uF
      }
    }

    function QF(FF, WF, SF, CF) {
      return null === bW ? CF ? (iW(), EF(null, FF, WF, SF)) : null : EF(bW, FF, WF, SF)
    }
    async function rW(FF, WF, SF) {
      let AF;
      const uF = new Promise((FF => {
        AF = setTimeout((() => {
          FF(null)
        }), CF)
      }));
      try {
        return EF(await Promise.race([RF(), uF, dF.promise]), FF, WF, SF)
      } catch {
        return EF(null, FF, WF, SF)
      } finally {
        clearTimeout(AF)
      }
    }
  },
  38806: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BUILT_IN_ANIMATIONS_SITE: () => FW,
      CORE_ERRORS_SITE: () => KF,
      EVENT_OVERFLOW_SITE: () => lF,
      JOIN_SITE: () => XF,
      LEAVE_SITE: () => UF,
      MODEL_FEED_SITE: () => BF,
      MODEL_POOL_SITE: () => jW,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => CW,
      NON_FATAL_REPORTS_PER_SESSION: () => TW,
      PREVIEW_ANIMATIONS_SITE: () => pF,
      RENDER_RELOAD_SITE: () => JF,
      TEXTURE_NAMES_SITE: () => vW,
      TEXTURE_PACK_FEED_SITE: () => WW,
      TurnstilePageError: () => KW,
      WASM_LOAD_SITE: () => wF,
      crashError: () => NW,
      crashReportsSettled: () => ZW,
      flushCrashReports: () => OW,
      joinFailureCode: () => wW,
      lokiTransport: () => hW,
      modelFailureCode: () => JW,
      readTrap: () => MW,
      renderLossDetail: () => iC,
      reportCoreErrors: () => YW,
      reportCountedLoadFallback: () => nW,
      reportCrash: () => DW,
      reportDataLoadFailure: () => rC,
      reportDisconnect: () => vS,
      reportDracoDecoderFailure: () => FS,
      reportEventOverflow: () => CS,
      reportMemoryShed: () => hS,
      reportModelFailure: () => pW,
      reportModelPoolFailure: () => lW,
      reportPageJoinFailure: () => UW,
      reportRenderReload: () => eS,
      reportReplayFault: () => dS,
      reportStaleBuildReload: () => tC,
      reportStoppedCore: () => IW,
      reportTerrainTextureFailure: () => ES,
      reportTexturePackFeedLoadFailure: () => SS,
      reportUnstreamedCoreLoad: () => HW,
      reportUnsupportedFallback: () => sW,
      reportUnusedSeat: () => jS,
      reportWorkerLost: () => AS,
      reportWorkerStartTimeout: () => bC,
      reportWorldgenGaveUp: () => uS,
      reportWorldgenLoadFailure: () => WS,
      resetCrashReports: () => oW,
      setCrashBackend: () => EW,
      setCrashScreen: () => iS,
      setCrashTransport: () => PW,
      showCrash: () => zS,
      showJoinFailure: () => XW,
      showUnsupported: () => yS
    });
    var CF = SF(948),
      AF = SF(2435),
      uF = SF(38811),
      hF = SF(3786),
      bW = SF(3793);
    const dF = {
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
      PF = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      RF = {
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
      iW = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function eF(FF) {
      return String(FF).replace(/\d/g, (FF => String.fromCharCode(97 + Number(FF))))
    }

    function EF(FF, WF) {
      var SF;
      return null !== (SF = FF[WF]) && void 0 !== SF ? SF : eF(WF)
    }

    function QF(FF, WF) {
      switch (FF) {
        case bW.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${EF(RF,WF)}`, instance: String(WF), group: String(FF)
          };
        case bW.f.RenderChunkMeshNotDrawn: {
          const SF = 0 === (128 & WF) ? "" : " shortage",
            CF = WF >>> 8;
          return {
            words: ` ${EF(iW,127&WF)}${SF}${0===CF?"":` kind ${eF(CF)}`}`,
            instance: String(WF),
            group: String(FF)
          }
        }
        case bW.f.RenderInternal: {
          const SF = EF(PF, 255 & WF),
            CF = WF >>> 8 & 255;
          if (0 === CF) return {
            words: ` ${SF}`,
            instance: String(WF),
            group: String(FF)
          };
          const AF = EF(dF, CF),
            uF = WF >>> 16;
          return {
            words: ` ${SF} ${AF} program ${eF(uF)}`,
            instance: `${SF} ${AF}`,
            group: "program",
            program: {
              programFailure: AF,
              program: String(uF)
            }
          }
        }
        default:
          return null
      }
    }
    const rW = 2,
      gW = new Map;

    function tW(FF) {
      let {
        group: WF,
        instance: SF
      } = FF, CF = gW.get(WF);
      return void 0 === CF && (CF = [], gW.set(WF, CF)), !CF.includes(SF) && (CF.length >= rW || (CF.push(SF), !1))
    }
    var TF = SF(37161);

    function aW(FF) {
      return 1006 === FF || 1001 === FF
    }

    function kW(FF) {
      return FF < 1e3 ? "<1s" : FF < 5e3 ? "1-5s" : FF < 3e4 ? "5-30s" : FF < 3e5 ? "30s-5m" : ">5m"
    }

    function qW() {
      return {
        online: "undefined" === typeof navigator ? "" : String(navigator.onLine),
        visibility: "undefined" === typeof document ? "" : document.visibilityState
      }
    }
    var VF = SF(38693),
      NF = SF(38792),
      DF = SF(38527),
      LF = SF(38733),
      mW = SF(2038),
      OF = SF(38725),
      xW = SF(38755);
    const ZF = "seat reservation expired.",
      oF = "early_leave";

    function YF(FF) {
      if (FF instanceof LF.n) return FF.networkLost ? "expected" : "unrecognised";
      if (FF instanceof LF.b) {
        if ("closed" === FF.stage && (0 === FF.code || aW(FF.code))) return "expected";
        if ("roomError" === FF.stage && (FF.serverText === ZF || FF.serverText === oF)) return "expected"
      }
      return FF instanceof LF.b || FF instanceof LF.l ? null === (0, OF.i)(FF.code).name ? "unrecognised" : "known" : (0, mW.f)(FF) ? "expected" : FF instanceof LF.q || FF instanceof xW.b ? "known" : "unrecognised"
    }
    var MF = SF(2903),
      cW = SF(2906),
      GF = SF(38819),
      zW = SF(38834),
      IF = SF(38851),
      fF = SF(2441),
      yW = SF(38784),
      sF = SF(38698),
      nF = SF(38700);
    const HF = "[bloxd-wasm-client]",
      KF = "coreErrors",
      wF = "wasmLoad",
      XF = "join",
      UF = "AC",
      BF = "modelFeed",
      jW = "modelWorkerPool",
      vW = "textureNames",
      JF = "renderReload",
      pF = "previewAnimations",
      lF = "eventOverflow",
      FW = "builtInAnimations",
      WW = "texturePackFeed",
      SW = 300,
      CW = 8;
    let AW = 0;
    const uW = new Set,
      hW = (FF, WF) => {
        const SF = QW[FF.kind];
        if (null === SF) return void bS(FF, WF, eW, null);
        const CF = (0, uF.b)(SF, FF.message, FF.code, FF.fatal);
        if (null !== CF) return void bS(FF, WF, eW, CF);
        const AF = eW;
        mS("Loki", (async () => {
          bS(FF, WF, AF, await (0, uF.f)(SF, FF.message, FF.code))
        }))
      };

    function bS(FF, WF, SF, uF) {
      const {
        kind: hF,
        code: bW,
        site: dF,
        fatal: PF,
        details: RF
      } = FF;
      if (!PF)
        if (null === uF || (0, AF.c)(uF.errorKind) || uW.has(uF.dedupe)) {
          if (AW >= CW) return;
          AW++
        } else uW.add(uF.dedupe);
      const iW = {
        ...RF,
        kind: hF,
        code: bW,
        site: dF,
        fatal: String(PF),
        backend: SF
      };
      null !== uF && (iW.errorKind = uF.errorKind, iW.fingerprint = uF.fingerprint), WF instanceof Error && "string" === typeof WF.stack && (iW.causeStack = WF.stack.slice(0, 2e3)), (0, CF.ZA)(NW(FF, WF), iW)
    }
    let dW = hW;

    function PW(FF) {
      const WF = dW;
      return dW = FF, WF
    }
    let RW = () => {};

    function iS(FF) {
      const WF = RW;
      return RW = FF, WF
    }
    let eW = "unpicked";

    function EW(FF) {
      eW = FF
    }
    const QW = {
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
      rS = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load"
      },
      gS = new Set(["unstreamedLoad"]);
    let tS = !1;
    const TW = 20,
      aS = new Map;
    let kS = 0,
      qS = 0;
    const VW = new Set;

    function NW(FF, WF) {
      return Object.assign(new Error(`${FF.code}: ${FF.message}`), {
        name: "WasmClientCrash",
        cause: null !== WF && void 0 !== WF ? WF : void 0
      })
    }

    function DW(FF) {
      var WF, CF;
      const {
        kind: AF,
        code: uF,
        site: hF,
        fatal: bW,
        message: dF,
        error: PF
      } = FF, RF = !1 !== FF.toTransport && !gS.has(AF), iW = !bW && RF, eF = {
        kind: AF,
        code: uF,
        site: hF,
        fatal: bW,
        message: dF,
        details: null !== (WF = FF.details) && void 0 !== WF ? WF : {}
      }, EF = `${uF}@${hF}${void 0===FF.instance?"":`#${FF.instance}`}${bW?"!":""}`, QF = (null !== (CF = aS.get(EF)) && void 0 !== CF ? CF : 0) + 1;
      if (aS.set(EF, QF), QF > 1 ? 0 === (QF & QF - 1) && LW((() => {
          console.warn(`${HF} ${uF} at ${hF} reported ${QF} times`)
        })) : iW && kS >= TW ? LW((() => {
          console.warn(`${HF} ${AF} ${uF} at ${hF}: ${dF} (not sent: the session's ${TW} went)`, eF.details, null !== PF && void 0 !== PF ? PF : "")
        })) : (iW && kS++, function(FF, WF, CF) {
          var AF, uF;
          const {
            kind: hF,
            code: bW,
            site: dF,
            fatal: PF,
            message: RF,
            details: iW
          } = FF;
          LW((() => {
            (PF ? console.error : console.warn)(`${HF} ${hF} ${bW} at ${dF}: ${RF}`, iW, null !== WF && void 0 !== WF ? WF : "")
          }));
          const eF = rS[hF],
            EF = null !== (AF = null !== (uF = QW[hF]) && void 0 !== uF ? uF : eF) && void 0 !== AF ? AF : null;
          null !== EF && mS("counts", (async () => {
            const {
              peekVisitSessionId: FF
            } = await Promise.resolve().then((() => SF(958)));
            if (null !== FF()) {
              const {
                reportCappedWasmFailure: FF,
                reportWasmFailure: WF
              } = await SF.e(187).then((() => SF(34886)));
              (void 0 === eF ? WF : FF)(EF, RF, bW), tS = !0
            }
          }));
          CF && LW((() => {
            dW(FF, WF)
          }))
        }(eF, PF, RF)), bW) {
        var rW;
        const WF = null !== (rW = FF.screen) && void 0 !== rW ? rW : {
          text: (0, IF.h)(eF, !0),
          reload: !0
        };
        LW((() => {
          RW(WF)
        }))
      }
      return eF
    }

    function LW(FF) {
      try {
        FF()
      } catch (WF) {
        try {
          console.warn(`${HF} could not send a report`, WF)
        } catch {}
      }
    }

    function mS(FF, WF) {
      try {
        const SF = WF().catch((WF => {
          console.warn(`${HF} could not send the report to ${FF}`, WF)
        })).finally((() => {
          VW.delete(SF)
        }));
        VW.add(SF)
      } catch (SF) {
        console.warn(`${HF} could not send the report to ${FF}`, SF)
      }
    }
    async function OW(FF) {
      let WF;
      (0, uF.i)();
      const SF = new Promise((SF => {
        WF = setTimeout(SF, FF)
      }));
      await Promise.race([xS(), SF]), clearTimeout(WF)
    }
    async function xS() {
      if (await Promise.allSettled([...VW]), tS) try {
        const {
          flushClientAnalyticsEvents: FF
        } = await Promise.resolve().then((() => SF(1328)));
        await FF()
      } catch (FF) {
        console.warn(`${HF} could not send the counts`, FF)
      }
    }
    async function ZW() {
      for (; VW.size > 0;) await Promise.allSettled([...VW])
    }

    function oW() {
      aS.clear(), kS = 0, tS = !1, AW = 0, uW.clear(), qS = 0, gW.clear()
    }

    function YW(FF, WF, SF, CF) {
      qS += WF;
      for (const {
          code: bW,
          detail: dF
        }
        of FF) {
        var AF, uF;
        const FF = (0, hF.Jd)(bW),
          WF = QF(bW, dF),
          PF = Array.from(null !== (AF = null === CF || void 0 === CF ? void 0 : CF(bW, dF)) && void 0 !== AF ? AF : "").slice(0, SW).join(""),
          RF = `core error ${FF}${null!==(uF=null===WF||void 0===WF?void 0:WF.words)&&void 0!==uF?uF:""}${PF?`: ${PF}`:""}`,
          iW = {
            errorCode: String(bW),
            detail: String(dF),
            droppedBefore: String(qS),
            wasmBuild: SF.wasm,
            clientVersion: SF.client,
            ...null === WF || void 0 === WF ? void 0 : WF.program
          };
        null !== WF && tW(WF) ? LW((() => {
          console.warn(`${HF} coreError CORE-${FF}: ${RF} (not sent: the session's render warnings of its kind went)`, iW)
        })) : DW({
          kind: bW === hF.I.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${FF}`,
          site: KF,
          fatal: !1,
          message: RF,
          details: iW,
          instance: null === WF || void 0 === WF ? void 0 : WF.instance
        })
      }
    }

    function MW(FF) {
      return (0, yW.f)(FF instanceof sF.d ? FF.trap : FF, MF.J, MF.bb)
    }
    const cS = "declined=js";

    function GW(FF) {
      return FF ? {
        labels: [cS],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function zS(FF, WF, SF) {
      return fW(FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function IW(FF, WF, SF) {
      return fW(FF, WF, SF, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function fW(FF, WF, SF, CF, AF) {
      let {
        memoryDetails: uF = {},
        declined: hF = !1
      } = CF;
      const {
        code: bW,
        details: dF,
        message: PF
      } = (0, NF.I)(FF, WF), RF = [];
      null !== SF && (dF.trapKind = SF.kind, null !== SF.panic && (dF.panic = (0, yW.e)(SF.panic)), SF.refusedBytes > 0 && (dF.refusedAllocation = String(SF.refusedBytes)), RF.push((0, yW.h)(SF.kind, SF.refusedBytes)));
      const iW = GW(hF);
      return DW({
        kind: "crash",
        code: bW,
        site: FF.site,
        fatal: AF,
        message: [...RF, ...iW.labels, PF].join("; "),
        details: {
          ...dF,
          ...iW.details,
          ...uF
        },
        error: FF.error
      })
    }

    function yS(FF, WF, SF) {
      return DW({
        kind: "unsupported",
        code: WF,
        site: wF,
        fatal: !0,
        message: SF,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: FF,
          status: WF
        },
        screen: {
          text: (0, IF.v)(FF),
          reload: "download" === FF
        }
      })
    }

    function sW(FF, WF) {
      return DW({
        kind: "unsupportedFallback",
        code: "unsupported",
        site: wF,
        fatal: !1,
        message: WF,
        details: {
          ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          cause: FF,
          status: "unsupported",
          fallback: "js"
        }
      })
    }

    function nW(FF, WF, SF, CF) {
      const AF = GW(CF);
      return DW({
        kind: "unsupported",
        code: WF,
        site: wF,
        fatal: !1,
        message: [...AF.labels, SF].join("; "),
        details: {
          cause: FF,
          status: WF,
          fallback: "js",
          ...AF.details
        }
      })
    }

    function HW() {
      const {
        code: FF,
        message: WF
      } = fF.e;
      return DW({
        kind: "unstreamedLoad",
        code: FF,
        site: wF,
        fatal: !1,
        message: WF
      })
    }
    class KW extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function wW(FF) {
      return FF instanceof LF.l ? 0 === FF.code ? "JOIN-matchmake" : `JOIN-${FF.code}` : FF instanceof LF.b ? 0 === FF.code ? `JOIN-${FF.stage}` : `JOIN-${FF.stage}-${FF.code}` : FF instanceof DF.c ? "JOIN-gameCode" : FF instanceof KW ? "JOIN-turnstilePage" : FF instanceof LF.q ? "JOIN-trafficCheck" : "JOIN-network"
    }

    function XW(FF, WF) {
      const SF = (0, nF.e)(FF),
        CF = {
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        },
        AF = FF instanceof KW ? {
          text: (0, IF.o)(),
          reload: !1
        } : void 0,
        uF = YF(FF),
        hF = "expected" !== uF;
      return DW({
        kind: "join",
        code: wW(FF),
        site: XF,
        fatal: !0,
        message: SF,
        details: CF,
        error: FF,
        screen: AF,
        toTransport: hF,
        instance: uF
      })
    }

    function UW(FF, WF, SF) {
      var CF;
      const AF = YF(FF),
        uF = {
          cause: (FF instanceof LF.b || FF instanceof LF.l) && null !== (CF = FF.serverText) && void 0 !== CF ? CF : "",
          sinceJoinStart: kW(SF.sinceJoinStartMs),
          game: SF.game,
          ...qW(),
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        };
      return DW({
        kind: "pageJoin",
        code: wW(FF),
        site: XF,
        fatal: !1,
        message: (0, nF.e)(FF),
        details: uF,
        error: FF,
        toTransport: "unrecognised" === AF,
        instance: AF
      })
    }
    const BW = {
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

    function jS(FF, WF) {
      let {
        unused: SF,
        answered: CF,
        heldMs: AF
      } = FF;
      const {
        code: uF,
        message: hF
      } = BW[SF], bW = {
        unused: SF,
        answered: String(CF),
        heldMs: String(AF),
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "seat",
        code: uF,
        site: XF,
        fatal: !1,
        message: hF,
        details: bW
      })
    }

    function vS(FF, WF, SF) {
      var CF;
      const AF = {
          closeCode: String(FF.code),
          recognised: String(null !== FF.name),
          closeReason: SF.closeReason,
          sinceJoined: kW(SF.sinceJoinedMs),
          game: SF.game,
          ...qW(),
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        },
        uF = null !== (CF = FF.name) && void 0 !== CF ? CF : String(FF.code),
        hF = null === FF.name && !aW(FF.code);
      return DW({
        kind: "disconnect",
        code: uF,
        site: UF,
        fatal: !1,
        message: "Left room",
        details: AF,
        toTransport: hF
      })
    }

    function JW(FF) {
      return FF.error instanceof cW.f ? `MODEL-${FF.error.status}` : FF.error instanceof GF.k ? "MODEL-ring" : "MODEL-network"
    }

    function pW(FF, WF) {
      const SF = JW(FF),
        CF = `model file ${FF.file} ${FF.startup?"(startup) ":""}could not load`,
        AF = {
          file: String(FF.file),
          url: FF.url,
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        };
      return DW({
        kind: FF.startup ? "model" : "modelLate",
        code: SF,
        site: BF,
        fatal: FF.startup,
        message: CF,
        details: AF,
        error: FF.error
      })
    }

    function lW(FF, WF) {
      const SF = {
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: jW,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: SF,
        error: FF
      })
    }

    function FS(FF, WF) {
      const SF = {
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: jW,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: SF,
        error: FF
      })
    }

    function WS(FF, WF) {
      const SF = {
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: NF.D,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: SF,
        error: FF
      })
    }

    function SS(FF, WF) {
      const SF = {
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: WW,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: SF,
        error: FF
      })
    }

    function CS(FF, WF) {
      const {
        frames: SF,
        acks: CF,
        mask: AF,
        outcome: uF
      } = FF, hF = {
        frames: String(SF),
        acks: String(CF),
        mask: String(AF),
        outcome: null !== uF && void 0 !== uF ? uF : "resynced",
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "recovered",
        code: "rejoined" === uF ? "CORE-eventOverflowRejoin" : "failed" === uF ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: lF,
        fatal: !1,
        message: `the event buffer refused records in ${SF} frames`,
        details: hF
      })
    }

    function AS(FF, WF, SF) {
      return DW({
        kind: "recovered",
        code: "CORE-workerLost",
        site: FF,
        fatal: !1,
        message: `a ${FF} worker was lost`,
        details: {
          reason: WF,
          wasmBuild: SF.wasm,
          clientVersion: SF.client
        }
      })
    }

    function uS(FF, WF) {
      const SF = {
        lastReason: FF,
        wasmBuild: WF.wasm,
        clientVersion: WF.client
      };
      return DW({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: NF.D,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: SF
      })
    }

    function hS(FF, WF) {
      return DW({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: NF.p,
        fatal: !1,
        message: "wasm memory was refused: the session shed load",
        details: {
          ...FF,
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        }
      })
    }

    function bC(FF, WF, SF) {
      return DW({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: FF,
        fatal: !1,
        message: `a ${FF} worker did not start`,
        details: {
          waitedMs: String(Math.round(WF)),
          wasmBuild: SF.wasm,
          clientVersion: SF.client
        }
      })
    }

    function dS(FF, WF, SF) {
      return DW({
        kind: "recovered",
        code: "CORE-replayFault",
        site: FF,
        fatal: !1,
        message: `the replay's ${FF} failed`,
        details: {
          wasmBuild: SF.wasm,
          clientVersion: SF.client
        },
        error: WF
      })
    }
    const PS = {
        lost: "render device was lost",
        frames_refused: "render device refused a frame",
        start_failed: "renderer couldn't start"
      },
      RS = {
        adapter: null,
        boundAtMs: null
      };

    function iC(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const AF = null === WF || void 0 === WF ? void 0 : WF.message,
        uF = WF instanceof VF.d ? "timeout" : (0, TF.i)("frames_refused" === FF, "string" === typeof AF ? AF : ""),
        hF = null === SF.boundAtMs ? "unbound" : `up${(0,TF.f)(CF-SF.boundAtMs)}`,
        bW = null === SF.adapter ? "no adapter" : (0, TF.g)(SF.adapter);
      return `${uF} ${(0,VF.e)()?"hidden":"visible"} ${hF} ${bW}`
    }

    function eS(FF, WF, CF) {
      let {
        cause: AF = "lost",
        error: uF,
        context: hF = RS
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bW = iC(AF, uF, hF),
        dF = {
          losses: String(WF),
          cause: AF,
          detail: bW,
          wasmBuild: CF.wasm,
          clientVersion: CF.client
        },
        PF = `the ${FF} ${PS[AF]}`,
        RF = DW({
          kind: "recovered",
          code: "CORE-renderLost",
          site: JF,
          fatal: !1,
          message: PF,
          details: dF,
          error: uF
        });
      return mS("ga", (async () => {
        const {
          logError: WF
        } = await Promise.resolve().then((() => SF(2241))), CF = `${TF.c["webgpu"===FF?"WebGPU":"WebGL2"]}\n Error: ${bW}`;
        WF("warning", CF), WF("error", CF)
      })), RF
    }

    function ES(FF, WF) {
      var SF, CF;
      const AF = null === FF.name ? "TEXTURE-sources" : null === FF.url ? "TEXTURE-nourl" : FF.error instanceof zW.e ? `TEXTURE-${FF.error.status}` : "TEXTURE-network",
        uF = null === FF.name ? "terrain textures could not load" : `terrain texture ${FF.name} could not load`,
        hF = {
          texture: null !== (SF = FF.name) && void 0 !== SF ? SF : "",
          url: null !== (CF = FF.url) && void 0 !== CF ? CF : "",
          wasmBuild: WF.wasm,
          clientVersion: WF.client
        };
      return DW({
        kind: "terrainTexture",
        code: AF,
        site: NF.A,
        fatal: !1,
        message: uF,
        details: hF,
        error: FF.error
      })
    }
    const QS = {
      previewAnimations: {
        site: pF,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: FW,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function rC(FF, WF, SF, CF) {
      const {
        site: AF,
        prefix: uF,
        name: hF
      } = QS[FF], {
        stage: bW,
        error: dF
      } = SF;
      return DW({
        kind: FF,
        code: "decode" === bW ? null === dF ? `${uF}-decode` : `${uF}-trap` : dF instanceof cW.f ? `${uF}-${dF.status}` : `${uF}-network`,
        site: AF,
        fatal: !1,
        message: "decode" === bW ? `${hF} did not decode` : `${hF} could not load`,
        details: {
          url: WF,
          wasmBuild: CF.wasm,
          clientVersion: CF.client
        },
        error: dF
      })
    }
    const gC = "staleBuild";

    function tC(FF, WF, SF) {
      const CF = {
          failedSite: FF.site,
          url: FF.url,
          from: FF.from,
          sameBuild: String(FF.from === WF),
          reloadMs: String(Math.max(0, Date.now() - FF.at)),
          wasmBuild: SF.wasm,
          clientVersion: SF.client
        },
        AF = `reloaded into a newer build after ${FF.site} failed to load: ${FF.error}`;
      return DW({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: gC,
        fatal: !1,
        message: AF,
        details: CF
      })
    }
  },
  38895: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      d: () => uF
    });
    var CF = SF(2357),
      AF = SF(874);

    function uF(FF, WF) {
      return null !== FF.gameSource && (0, CF.n)(WF, FF.gameSource)
    }

    function hF(FF, WF) {
      if (null === FF.gameSource || "" === FF.gameSource || null === WF) return !0;
      const SF = (0, AF.j)(WF) ? (0, AF.o)(WF) : null;
      return null !== SF && uF(FF, SF)
    }
  },
  38880: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      h: () => rW,
      i: () => PF,
      k: () => RF,
      o: () => QF
    });
    var CF = SF(38821),
      AF = SF(38883);
    const uF = 396,
      hF = 1,
      bW = 2,
      dF = 3,
      PF = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      RF = {
        File: 0,
        Item: 1
      },
      iW = 0,
      eF = 1,
      EF = 2;

    function QF(FF) {
      const WF = (0, CF.q)();
      WF.catch((() => {}));
      let AF = null;
      return {
        glbUrl: FF,
        lifeformAtlasUrl: async FF => (await WF).lifeformAtlasUrl(FF),
        armourAtlasUrl: async () => (await SF.e(182).then((() => SF(32982)))).armourAtlasUrl,
        capeUrl: async FF => (await WF).capeUrl(FF),
        attachmentImageUrl: async FF => (await WF).attachmentImageUrl(FF),
        blockImageUrl: async FF => (await WF).blockImageUrl(FF),
        groupAtlasUrl: async FF => (await WF).groupAtlasUrl(FF),
        particleTextureUrl: async FF => (await WF).particleTextureUrl(FF),
        particleItemUrl: async FF => (AF ??= SF.e(32).then((() => SF(49454))).catch((FF => {
          throw AF = null, FF
        })), (await AF).particleItemUrl(FF))
      }
    }
    class rW {
      constructor(FF, WF) {
        var SF, uF, hF;
        let bW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = FF, this.onFailure = WF, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.DC = !1, this.load = null !== (SF = bW.load) && void 0 !== SF ? SF : (FF, WF) => (0, AF.k)(FF, bW.fetchImage, WF), this.release = null !== (uF = bW.release) && void 0 !== uF ? uF : AF.q, this.fetchFile = null !== (hF = bW.fetchFile) && void 0 !== hF ? hF : FF => (0, CF.l)(FF)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(FF, WF) {
        this.glbWrittenImages.set(FF, VF(WF))
      }
      glbTaken(FF, WF) {
        const SF = this.glbWrittenImages.get(FF);
        this.glbWrittenImages.delete(FF), WF && this.setGlbImages(FF, void 0 !== SF && SF.length > 0 ? SF : void 0)
      }
      setGlbImages(FF, WF) {
        var SF;
        this.glbTakenCount.set(FF, (null !== (SF = this.glbTakenCount.get(FF)) && void 0 !== SF ? SF : 0) + 1), void 0 === WF ? this.glbImages.delete(FF) : this.glbImages.set(FF, WF);
        const CF = [];
        for (const {
            key: AF
          }
          of this.loading.values()) AF.kind === PF.Glb && AF.word === FF && CF.push(AF);
        for (let AF = this.ready.length - 1; AF >= 0; AF--) {
          const {
            key: WF,
            id: SF
          } = this.ready[AF];
          WF.kind === PF.Glb && WF.word === FF && (this.ready.splice(AF, 1), null !== SF && (this.answered.delete(SF), this.release(SF)), CF.push(WF))
        }
        this.loadAgain(CF)
      }
      onEvent(FF) {
        if (this.DC) return;
        const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
        for (let SF = 0; SF + 8 <= FF.byteLength; SF += 8) {
          const FF = WF.getUint8(SF),
            CF = WF.getUint32(SF + 4, !0);
          if (FF === dF) {
            this.answered.delete(CF), this.release(CF);
            continue
          }
          const AF = {
            kind: WF.getUint8(SF + 1),
            index: WF.getUint8(SF + 2),
            word: CF
          };
          FF === hF ? this.want(AF) : FF === bW && this.loading.delete(gW(AF))
        }
      }
      reload(FF, WF) {
        const SF = SF => FF.includes(SF.kind) && (void 0 === WF || WF(SF)),
          CF = new Map;
        for (const AF of this.answered.values()) SF(AF) && CF.set(gW(AF), AF);
        for (const [AF, {
            key: uF
          }] of this.loading) SF(uF) && CF.set(AF, uF);
        this.loadAgain(CF.values())
      }
      loadAgain(FF) {
        for (const WF of FF) this.loading.delete(gW(WF)), this.want(WF)
      }
      drain(FF) {
        if (null !== FF)
          for (; this.ready.length > 0;) {
            if (!FF(uF, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.DC = !0, this.loading.clear(), this.ready.length = 0;
        for (const FF of this.answered.keys()) this.release(FF);
        this.answered.clear()
      }
      want(FF) {
        const WF = gW(FF);
        if (this.loading.has(WF)) return;
        const SF = {
          key: FF
        };
        this.loading.set(WF, SF), this.loadKey(FF).then((CF => {
          this.DC || this.loading.get(WF) !== SF ? this.release(CF.id) : (this.loading.delete(WF), this.answered.set(CF.id, FF), this.ready.push({
            record: TF(FF, iW, CF),
            key: FF,
            id: CF.id
          }))
        }), (CF => {
          if (this.DC || this.loading.get(WF) !== SF) return;
          this.loading.delete(WF), this.onFailure({
            key: FF,
            error: CF
          });
          const uF = CF instanceof AF.d && "decode" === CF.stage ? eF : EF;
          this.ready.push({
            record: TF(FF, uF, null),
            key: FF,
            id: null
          })
        }))
      }
      async loadKey(FF) {
        switch (FF.kind) {
          case PF.Glb:
            return this.load(await this.glbImage(FF), "none");
          case PF.LifeformAtlas:
            return this.load(tW(await this.sources.lifeformAtlasUrl(FF.word), FF), "none");
          case PF.ArmourAtlas:
            return this.load(tW(await this.sources.armourAtlasUrl(), FF), "none");
          case PF.Cape:
            return this.load(tW(await this.sources.capeUrl(FF.word), FF), "none");
          case PF.AttachmentImage:
            return this.load(tW(await this.sources.attachmentImageUrl(FF.word), FF), "none");
          case PF.GroupAtlas:
            return this.load(tW(await this.sources.groupAtlasUrl(FF.word), FF), "none");
          case PF.BlockImage:
            return this.load(tW(await this.sources.blockImageUrl(FF.word), FF), "none");
          case PF.Particle: {
            const WF = await (FF.index === RF.Item ? this.sources.particleItemUrl(FF.word) : this.sources.particleTextureUrl(FF.word));
            return this.load(tW(WF, FF), "flipY")
          }
          default:
            throw new AF.d("fetch", `image kind ${FF.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(FF) {
        var WF;
        let SF = this.glbImages.get(FF.word);
        if (void 0 === SF) {
          const WF = this.glbTakenCount.get(FF.word),
            CF = tW(await this.sources.glbUrl(FF.word), FF);
          try {
            SF = VF(await this.fetchFile(CF))
          } catch (uF) {
            throw new AF.d("fetch", CF, {
              cause: uF
            })
          }
          this.glbTakenCount.get(FF.word) === WF && this.glbImages.set(FF.word, SF)
        }
        const CF = null === (WF = SF) || void 0 === WF ? void 0 : WF[FF.index];
        if (!CF) throw new AF.d("decode", `image ${FF.index} of file ${2147483647&FF.word}`, {
          cause: null
        });
        return CF
      }
    }

    function gW(FF) {
      let {
        kind: WF,
        index: SF,
        word: CF
      } = FF;
      return `${WF}:${SF}:${CF}`
    }

    function tW(FF, WF) {
      if (null === FF) throw new AF.d("fetch", `no URL for image ${gW(WF)}`, {
        cause: null
      });
      return FF
    }

    function TF(FF, WF, SF) {
      var CF, AF, uF;
      const hF = new Uint8Array(16),
        bW = new DataView(hF.buffer);
      return bW.setUint8(0, FF.kind), bW.setUint8(1, FF.index), bW.setUint8(2, WF), bW.setUint32(4, FF.word, !0), bW.setUint32(8, null !== (CF = null === SF || void 0 === SF ? void 0 : SF.id) && void 0 !== CF ? CF : 0, !0), bW.setUint16(12, Math.min(null !== (AF = null === SF || void 0 === SF ? void 0 : SF.width) && void 0 !== AF ? AF : 0, 65535), !0), bW.setUint16(14, Math.min(null !== (uF = null === SF || void 0 === SF ? void 0 : SF.height) && void 0 !== uF ? uF : 0, 65535), !0), hF
    }
    const aW = 1179937895,
      kW = 1313821514,
      qW = 5130562;

    function VF(FF) {
      var WF;
      const SF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      if (FF.byteLength < 20 || SF.getUint32(0, !0) !== aW || SF.getUint32(16, !0) !== kW) return [];
      let CF, AF = 20 + SF.getUint32(12, !0);
      try {
        CF = JSON.parse((new TextDecoder).decode(FF.subarray(20, AF)))
      } catch {
        return []
      }
      for (; AF + 8 <= FF.byteLength && SF.getUint32(AF + 4, !0) !== qW;) AF += 8 + SF.getUint32(AF, !0);
      const uF = null !== (WF = CF.images) && void 0 !== WF ? WF : [];
      if (0 === uF.length || AF + 8 > FF.byteLength) return uF.map((() => null));
      const hF = FF.subarray(AF + 8, Math.min(FF.byteLength, AF + 8 + SF.getUint32(AF, !0)));
      return uF.map((FF => {
        var WF, SF, AF;
        const uF = void 0 === FF.bufferView || null === (WF = CF.bufferViews) || void 0 === WF ? void 0 : WF[FF.bufferView];
        if (!uF || 0 !== (null !== (SF = uF.buffer) && void 0 !== SF ? SF : 0) || void 0 === uF.byteLength) return null;
        const bW = null !== (AF = uF.byteOffset) && void 0 !== AF ? AF : 0,
          dF = bW + uF.byteLength;
        return dF <= hF.byteLength ? hF.slice(bW, dF) : null
      }))
    }
  },
  35105: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      f: () => PF,
      i: () => hF
    });
    var CF = SF(1939),
      AF = SF(1943),
      uF = SF(1949);

    function hF(FF, WF) {
      return (!(0, uF.d)() || 0 === FF && 0 === WF) && (0, AF.t)(CF.i.Joystick, 0, FF, WF, 0)
    }
    const bW = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function dF(FF) {
      return {
        x: FF.left + FF.width / 2,
        y: FF.top + FF.height / 2,
        radius: Math.min(FF.width, FF.height) / 2
      }
    }
    const PF = new class {
      constructor(FF) {
        this.write = FF, this.elements = new Map
      }
      set(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WF ? this.elements.set(FF, {
          element: WF,
          hidden: SF
        }) : this.elements.delete(FF), this.measureOne(FF)
      }
      measure() {
        for (const FF of this.elements.keys()) this.measureOne(FF)
      }
      hitZone(FF, WF) {
        let SF = null,
          CF = 1;
        for (const AF of this.elements.keys()) {
          const uF = this.shownRect(AF);
          if (!uF) continue;
          const hF = dF(uF),
            bW = Math.max(0, uF.width / 2 - hF.radius),
            PF = Math.max(0, uF.height / 2 - hF.radius),
            RF = Math.max(0, Math.abs(FF - hF.x) - bW),
            iW = Math.max(0, Math.abs(WF - hF.y) - PF),
            eF = Math.hypot(RF, iW) / hF.radius;
          eF < CF && (SF = {
            code: AF,
            element: this.elements.get(AF).element,
            ...hF
          }, CF = eF)
        }
        return SF
      }
      measureOne(FF) {
        const WF = this.shownRect(FF);
        if (!WF) return void this.write(CF.i.TouchZone, FF, 0, 0, 0);
        const SF = dF(WF);
        this.write(CF.i.TouchZone, FF, SF.x, SF.y, (0, AF.m)(SF.radius))
      }
      shownRect(FF) {
        const WF = this.elements.get(FF),
          SF = WF && !WF.hidden ? WF.element.getBoundingClientRect() : null;
        return !SF || SF.width <= 0 || SF.height <= 0 ? null : SF
      }
    }(AF.t)
  },
  38733: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => dF,
      e: () => uF,
      g: () => hF,
      h: () => AF,
      l: () => iW,
      n: () => RF,
      q: () => PF,
      r: () => bW
    });
    var CF = SF(37579);
    const AF = new Uint8Array([12]),
      uF = 2e3,
      hF = 257;

    function bW(FF) {
      const WF = new Uint8Array(4);
      return new DataView(WF.buffer).setUint32(0, FF, !0), WF
    }
    class dF extends Error {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(FF), this.stage = WF, this.code = SF, this.serverText = CF, this.name = "JoinError"
      }
    }
    class PF extends Error {
      constructor() {
        super(CF.e), this.name = "TrafficCheckError"
      }
    }
    class RF extends Error {
      constructor(FF, WF, SF) {
        super(FF, {
          cause: SF
        }), this.networkLost = WF, this.name = "SeatRequestError"
      }
    }
    class iW extends Error {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(FF), this.code = WF, this.serverText = SF, this.name = "MatchmakeError"
      }
    }
  },
  38741: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      h: () => bW
    });
    var CF = SF(38747),
      AF = SF(34989),
      uF = SF(38733);
    const hF = CF.e.timeForPlayerToConnect - 1e4;
    async function bW(FF, WF, SF) {
      const CF = await FF.getTrafficCode().then((FF => null !== FF && void 0 !== FF ? FF : null), (FF => (console.error("[bloxd-wasm-client] could not get a traffic code", FF), null)));
      if (null === CF) throw new uF.q;
      const {
        gameNameWithVariation: hF,
        lobbyName: bW
      } = WF, {
        roomName: dF,
        joinOptions: PF
      } = (0, AF.h)(FF, hF, bW, CF, (FF => {
        var WF;
        return null !== (WF = null === SF || void 0 === SF ? void 0 : SF.isUsingCustomGameTexturePack(FF)) && void 0 !== WF && WF
      }));
      return PF.wasmClient = !0, {
        endpoint: WF.endpoint,
        roomName: dF,
        joinOptions: PF,
        session: {
          gameNameWithVariation: hF,
          lobbyName: bW,
          playerDbId: FF.whamm
        }
      }
    }
  },
  38819: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      g: () => bW,
      i: () => iW,
      k: () => PF
    });
    var CF = SF(3786),
      AF = SF(38821),
      uF = SF(38825);
    const hF = 395,
      bW = 2147483648,
      dF = new Uint8Array(0);
    class PF extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class RF extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class iW {
      constructor(FF, WF, SF) {
        var CF, uF, hF, bW;
        let dF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = FF, this.build = WF, this.onFailure = SF, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.kept = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (CF = dF.fetchFile) && void 0 !== CF ? CF : FF => (0, AF.l)(FF), this.onWritten = null !== (uF = dF.onWritten) && void 0 !== uF ? uF : null, this.onTaken = null !== (hF = dF.onTaken) && void 0 !== hF ? hF : null, this.onPackFileFailed = null !== (bW = dF.onPackFileFailed) && void 0 !== bW ? bW : null, this.startupLeft = new Set(FF.startup);
        for (const AF of FF.startup) this.request(AF)
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
      drawnUrl(FF) {
        return this.drawn.get(FF)
      }
      request(FF) {
        const WF = this.pending.get(FF);
        if (!0 === (null === WF || void 0 === WF ? void 0 : WF.ask)) return;
        const SF = this.aC(FF, !0);
        SF.recheck = void 0 !== WF;
        const CF = this.drawn.get(FF);
        if (void 0 !== CF) return SF.yS = !0, SF.recheck = !0, void this.fetch(FF, SF, CF);
        this.fetchWanted(FF, SF)
      }
      async refresh() {
        const FF = ++this.refreshes,
          WF = new Set;
        for (const hF of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const FF of hF) 0 === (FF & AF.i) && WF.add(FF);
        const SF = [...WF];
        let CF;
        try {
          CF = await Promise.all(SF.map((FF => this.wanted(FF))))
        } catch {
          return null
        }
        if (FF !== this.refreshes) return null;
        const uF = {
          resent: 0,
          refetched: 0,
          delivered: SF.filter((FF => this.drawn.has(FF))).length
        };
        return SF.forEach(((FF, WF) => {
          const {
            url: SF,
            inPlaceOf: AF
          } = CF[WF], hF = this.pending.get(FF);
          if (void 0 !== hF) {
            if (hF.yS || void 0 === hF.url) return void(hF.recheck = !0);
            if (hF.url === SF) return;
            uF.refetched++;
            const WF = this.aC(FF, hF.ask);
            return WF.recheck = hF.recheck, void this.fetch(FF, WF, SF, AF)
          }
          const bW = this.written.get(FF);
          void 0 === bW ? this.drawn.get(FF) !== (null !== SF && void 0 !== SF ? SF : void 0) && (uF.resent++, this.fetch(FF, this.aC(FF, !1), SF, AF)) : bW.url !== (null !== SF && void 0 !== SF ? SF : "") && (bW.attempt.recheck = !0)
        })), uF
      }
      taken(FF, WF) {
        const SF = new Set,
          CF = new Set;
        for (const AF of Array.from(WF)) 0 === (AF & bW) ? SF.add(AF) : CF.add((AF & ~bW) >>> 0);
        for (const [AF, uF] of this.written) uF.seq > FF || (this.written.delete(AF), SF.has(uF.seq) ? this.refusedFile(AF, uF) : this.takenFile(AF, uF, !uF.empty && !CF.has(uF.seq)))
      }
      takenFile(FF, WF, SF) {
        const {
          attempt: CF
        } = WF;
        if (SF) {
          var AF;
          this.drawn.set(FF, WF.url), this.undrawn.delete(FF), void 0 !== CF.inPlaceOf ? this.refusedPack.set(FF, CF.inPlaceOf) : CF.yS || this.refusedPack.delete(FF), null === (AF = this.onTaken) || void 0 === AF || AF.call(this, FF, !0);
          const SF = this.pending.get(FF);
          if (!0 === (null === SF || void 0 === SF ? void 0 : SF.yS) && SF.url !== WF.url) {
            const SF = this.aC(FF, !0);
            SF.yS = !0, SF.recheck = !0, this.fetch(FF, SF, WF.url)
          }
        } else {
          var uF;
          this.drawn.has(FF) || this.undrawn.add(FF), null === (uF = this.onTaken) || void 0 === uF || uF.call(this, FF, !1)
        }
        CF.recheck && this.resendIfChanged(FF)
      }
      refusedFile(FF, WF) {
        var SF, CF;
        if (null === (SF = this.onTaken) || void 0 === SF || SF.call(this, FF, !1), this.refusedPack.set(FF, WF.url), this.pending.has(FF)) return void(null === (CF = this.onPackFileFailed) || void 0 === CF || CF.call(this, FF, eF(WF.url)));
        const AF = this.aC(FF, WF.attempt.ask);
        AF.recheck = WF.attempt.recheck, this.afterRefusal(FF, AF, WF.url)
      }
      async afterRefusal(FF, WF, SF) {
        var CF;
        let AF;
        try {
          AF = await this.wanted(FF)
        } catch (uF) {
          return void(this.pending.get(FF) === WF && this.giveUp(FF, WF, SF, uF))
        }
        this.pending.get(FF) === WF && (AF.inPlaceOf !== SF ? WF.ask || (null !== (CF = AF.url) && void 0 !== CF ? CF : void 0) !== this.drawn.get(FF) ? this.fetch(FF, WF, AF.url, AF.inPlaceOf) : this.pending.delete(FF) : this.fallBack(FF, WF, SF, eF(SF)))
      }
      aC(FF, WF) {
        const SF = {
          url: void 0,
          ask: WF,
          yS: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(FF, SF);
        for (let CF = this.ready.length - 1; CF >= 0; CF--) this.ready[CF].file === FF && this.ready.splice(CF, 1);
        return SF
      }
      async wanted(FF) {
        const WF = await this.files.url(FF);
        return null !== WF && this.refusedPack.get(FF) === WF ? {
          url: await this.files.shippedUrl(FF),
          inPlaceOf: WF
        } : {
          url: WF,
          inPlaceOf: void 0
        }
      }
      fetchWanted(FF, WF) {
        const SF = this.files.url(FF);
        SF instanceof Promise ? SF.then((SF => {
          this.fetchFound(FF, WF, SF)
        }), (SF => {
          this.pending.get(FF) === WF && this.giveUp(FF, WF, "", SF)
        })) : this.fetchFound(FF, WF, SF)
      }
      fetchFound(FF, WF, SF) {
        null !== SF && this.refusedPack.get(FF) === SF ? Promise.resolve(this.files.shippedUrl(FF)).then((CF => {
          this.fetch(FF, WF, CF, SF)
        }), (CF => {
          this.pending.get(FF) === WF && this.giveUp(FF, WF, SF, CF)
        })) : this.fetch(FF, WF, SF)
      }
      fetch(FF, WF, SF, CF) {
        this.pending.get(FF) === WF && (WF.url = SF, WF.inPlaceOf = CF, null !== SF ? this.load(FF, WF, SF) : this.buildFile(FF, WF, "", dF))
      }
      load(FF, WF, SF) {
        const CF = this.kept.get(FF);
        (null === CF || void 0 === CF ? void 0 : CF.url) !== SF ? this.fetchFile(SF).then((CF => {
          var AF, uF;
          this.pending.get(FF) === WF && (this.keptTotal += CF.byteLength - (null !== (AF = null === (uF = this.kept.get(FF)) || void 0 === uF ? void 0 : uF.glb.byteLength) && void 0 !== AF ? AF : 0), this.kept.set(FF, {
            url: SF,
            glb: CF
          }), this.buildFile(FF, WF, SF, CF))
        }), (CF => {
          this.pending.get(FF) === WF && this.fallBack(FF, WF, SF, CF)
        })) : this.buildFile(FF, WF, SF, CF.glb)
      }
      buildFile(FF, WF, SF, hF) {
        let bW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dF = hF.byteLength > 0 && (0, AF.p)(SF) ? (FF | AF.e) >>> 0 : FF;
        this.build(dF, hF).then((AF => {
          if (this.pending.get(FF) !== WF) return;
          if (CF.u + (0, CF.$d)(AF.byteLength) > CF.ic) return void this.ringRefused(FF, WF, SF, new PF(`${EF(SF)}'s record is ${AF.byteLength-uF.c} bytes, past the cmd ring's ${CF.ic}`), bW);
          const dF = {
            file: FF,
            url: SF,
            payload: AF,
            glb: hF,
            attempt: WF
          };
          bW ? this.ready.unshift(dF) : this.ready.push(dF)
        }))
      }
      async fallBack(FF, WF, SF, CF) {
        var AF;
        let uF = null,
          hF = CF;
        try {
          uF = await this.files.shippedUrl(FF)
        } catch (bW) {
          hF = bW
        }
        this.pending.get(FF) === WF && (null !== uF && uF !== SF ? (null === (AF = this.onPackFileFailed) || void 0 === AF || AF.call(this, FF, CF), WF.ask || this.drawn.get(FF) !== uF ? (WF.url = uF, WF.inPlaceOf = SF, this.load(FF, WF, uF)) : this.pending.delete(FF)) : this.giveUp(FF, WF, SF, hF))
      }
      ringRefused(FF, WF, SF, CF) {
        let uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, AF.p)(SF) ? this.fallBack(FF, WF, SF, CF): this.giveUp(FF, WF, SF, CF, uF)
      }
      giveUp(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: FF,
          url: EF(SF),
          error: CF,
          startup: this.startupLeft.has(FF)
        }), WF.ask || !this.drawn.has(FF) ? this.buildFile(FF, WF, SF, dF, AF) : this.pending.delete(FF)
      }
      async resendIfChanged(FF) {
        var WF;
        if (0 !== (FF & AF.i)) return;
        let SF;
        try {
          SF = await this.wanted(FF)
        } catch {
          return
        }(null !== (WF = SF.url) && void 0 !== WF ? WF : void 0) === this.drawn.get(FF) || this.pending.has(FF) || this.written.has(FF) || this.fetch(FF, this.aC(FF, !1), SF.url, SF.inPlaceOf)
      }
      drain(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === FF) return;
        let SF = 0,
          CF = 0;
        for (; CF < this.ready.length && SF < 262144;) {
          const RF = this.ready[CF];
          if (this.written.has(RF.file)) {
            CF++;
            continue
          }
          const iW = this.nextSeq;
          new DataView(RF.payload.buffer, RF.payload.byteOffset, RF.payload.byteLength).setUint32(uF.f, iW, !0);
          const eF = RF.attempt.yS && RF.glb.byteLength > 0 && this.drawn.get(RF.file) === RF.url;
          if (FF(hF, eF ? 1 : 0, RF.payload)) {
            if (this.nextSeq = iW >= bW - 1 ? 1 : iW + 1, this.ready.splice(CF, 1), SF += RF.payload.byteLength, this.pending.delete(RF.file), this.startupLeft.delete(RF.file), this.written.set(RF.file, {
                seq: iW,
                url: RF.url,
                empty: 0 === RF.glb.byteLength,
                attempt: RF.attempt
              }), RF.glb.byteLength > 0) try {
              var AF;
              null === (AF = this.onWritten) || void 0 === AF || AF.call(this, RF.file, RF.glb)
            } catch (dF) {
              console.warn("ModelFeed: reading the file's images failed", dF)
            }
          } else {
            if (null === WF || 0 === RF.glb.byteLength || WF(RF.payload.byteLength)) return;
            this.ready.splice(CF, 1);
            const FF = new PF(`${EF(RF.url)}'s record is ${RF.payload.byteLength-uF.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(RF.file, RF.attempt, RF.url, FF, !0)
          }
        }
      }
    }

    function eF(FF) {
      return new RF(`presentation refused ${EF(FF)}`)
    }

    function EF(FF) {
      return FF.startsWith("data:") ? `${FF.slice(0,Math.min(Math.max(FF.indexOf(","),5),64))},...` : FF
    }
  },
  38821: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      i: () => uF,
      l: () => RF,
      p: () => bW,
      q: () => PF,
      r: () => dF
    });
    var CF = SF(2906),
      AF = SF(2392);
    const uF = 2147483648,
      hF = 1073741824;

    function bW(FF) {
      return FF.startsWith("data:")
    }

    function dF(FF) {
      let {
        onTableFailed: WF,
        packUrl: SF
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const CF = PF();
      CF.catch((FF => {
        null === WF || void 0 === WF || WF(FF)
      }));
      const AF = async WF => (await CF).fileUrl((WF & ~uF) >>> 0, FF);
      return {
        startup: [],
        url: async FF => {
          if (SF && 0 === (FF & uF)) {
            const WF = await CF,
              AF = WF.filePackName(FF),
              uF = null === AF || "lifeform" === WF.fileSource(FF) ? null : SF(AF);
            if (null !== uF) return uF
          }
          return AF(FF)
        },
        shippedUrl: AF
      }
    }

    function PF() {
      return SF.e(35).then((() => SF(41230)))
    }
    async function RF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return FF.startsWith("data:") ? (0, AF.b)(FF.slice(FF.indexOf(",") + 1), WF) : (0, CF.A)(FF, {
        spare: WF
      })
    }
  },
  38825: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF,
      f: () => PF,
      j: () => eF,
      m: () => QF,
      n: () => iW,
      p: () => EF
    });
    const CF = 826427981,
      AF = 1,
      uF = 2,
      hF = 44,
      bW = 46,
      dF = 8,
      PF = 4;

    function RF(FF, WF, SF) {
      const AF = (new TextEncoder).encode(SF),
        uF = dF + 4 * (WF.length + 2),
        hF = new Uint8Array(uF + (AF.byteLength + 3 & -4)),
        bW = new DataView(hF.buffer);
      return bW.setUint32(0, FF, !0), bW.setUint32(dF, CF, !0), WF.forEach(((FF, WF) => {
        bW.setUint32(dF + 4 * (WF + 1), FF, !0)
      })), bW.setUint32(uF - 4, AF.byteLength, !0), hF.set(AF, uF), hF
    }

    function iW(FF, WF) {
      return RF(FF, [uF], WF)
    }

    function eF(FF, WF) {
      return RF(FF, [AF, bW], WF)
    }

    function EF(FF, WF) {
      return RF(FF, [AF, hF], WF)
    }

    function QF(FF) {
      const WF = dF;
      if (FF.byteLength < WF + 12) return !1;
      const SF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      return SF.getUint32(WF, !0) === CF && SF.getUint32(WF + 4, !0) === AF && SF.getUint32(WF + 8, !0) === hF
    }
  },
  38887: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      e: () => uF,
      f: () => iW,
      i: () => hF
    });
    var CF = SF(38880),
      AF = SF(38821);
    const uF = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(FF) {
        this.change((() => {
          this.page = FF
        }))
      }
      setSessionFiles(FF) {
        const WF = void 0 !== this.session && void 0 === FF;
        if (this.change((() => {
            this.session = FF
          })), WF)
          for (const SF of [...this.pageListeners]) SF()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(FF) {
        return this.pageListeners.add(FF), () => {
          this.pageListeners.delete(FF)
        }
      }
      setFollower(FF) {
        this.follower = FF, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const FF of [...this.wantedListeners]) FF();
        this.startFollower()
      }
      onWanted(FF) {
        return this.wantedListeners.add(FF), () => {
          this.wantedListeners.delete(FF)
        }
      }
      onChange(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      startFollower() {
        const FF = this.follower;
        this.isWanted && null !== FF && (this.follower = null, FF((() => {
          this.follower = FF
        })))
      }
      change(FF) {
        const WF = this.current;
        if (FF(), this.current !== WF)
          for (const SF of this.listeners) SF()
      }
    };

    function hF(FF, WF) {
      return {
        ...FF,
        armourAtlasUrl: () => {
          var SF, CF;
          return null !== (SF = null === (CF = WF()) || void 0 === CF ? void 0 : CF.armourAtlasUrl()) && void 0 !== SF ? SF : FF.armourAtlasUrl()
        },
        lifeformAtlasUrl: SF => dF(WF(), (FF => FF.LIFEFORM_ATLAS_PATHS[SF]), (() => FF.lifeformAtlasUrl(SF))),
        groupAtlasUrl: SF => dF(WF(), (FF => FF.GROUP_ATLAS_PATHS[SF]), (() => FF.groupAtlasUrl(SF))),
        particleItemUrl: CF => PF(WF(), (async () => {
          const FF = await SF.e(32).then((() => SF(49454))).catch((() => null));
          return (null === FF || void 0 === FF ? void 0 : FF.particleItemSprite(CF)) || null
        }), (() => FF.particleItemUrl(CF))),
        blockImageUrl: SF => PF(WF(), (async () => {
          var FF, WF;
          return null !== (FF = null === (WF = await bW()) || void 0 === WF ? void 0 : WF.blockImageName(SF)) && void 0 !== FF ? FF : null
        }), (() => FF.blockImageUrl(SF)))
      }
    }

    function bW() {
      return (0, AF.q)().catch((() => null))
    }

    function dF(FF, WF, SF) {
      return PF(FF, (async () => {
        var FF;
        const SF = await bW(),
          CF = null === SF ? null : WF(SF),
          AF = null !== (FF = null === CF || void 0 === CF ? void 0 : CF.slice(CF.lastIndexOf("/") + 1)) && void 0 !== FF ? FF : null;
        return "Player_Atlas" === AF ? null : AF
      }), SF)
    }
    async function PF(FF, WF, SF) {
      if (null !== FF) {
        const SF = await WF(),
          CF = null === SF ? null : FF.textureUrl(SF);
        if (null !== CF) return CF
      }
      return SF()
    }
    const RF = 0;

    function iW(FF) {
      const WF = [CF.i.ArmourAtlas, CF.i.LifeformAtlas, CF.i.GroupAtlas, CF.i.BlockImage, CF.i.Particle];
      FF.reload(WF, (FF => {
        switch (FF.kind) {
          case CF.i.Particle:
            return FF.index === CF.k.Item;
          case CF.i.LifeformAtlas:
            return FF.word !== RF;
          default:
            return !0
        }
      }))
    }
  },
  38771: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      d: () => hF,
      f: () => uF,
      g: () => AF
    });
    const CF = 1e3;

    function AF() {
      bW((() => {
        window.location.reload()
      }))
    }

    function uF(FF) {
      bW((() => {
        window.location.replace(FF(window.location.href))
      }))
    }

    function hF(FF) {
      Promise.resolve().then((() => SF(101))).then((WF => {
        let {
          currentUrl: SF
        } = WF;
        uF((() => SF.mergeSearchParamsInto(FF)))
      }), (() => {
        uF((() => FF))
      }))
    }

    function bW(FF) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => SF(1510))).then((WF => {
        let {
          prepareForUnloadWithoutConfirmation: SF
        } = WF;
        try {
          SF()
        } catch (CF) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", CF), window.onbeforeunload = null
        }
        FF()
      }), (() => {
        window.onbeforeunload = null, FF()
      })) : FF()
    }
  },
  38869: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF,
      g: () => eF
    });
    var CF = SF(37445),
      AF = SF(5458),
      uF = SF(37439),
      hF = SF(38725),
      bW = SF(38733);
    const dF = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      PF = 3,
      RF = [500, 1500];

    function iW(FF) {
      const WF = new URL(FF);
      return {
        secure: "https:" === WF.protocol || "wss:" === WF.protocol,
        host: WF.host,
        pathname: WF.pathname.replace(/\/+$/, ""),
        search: WF.searchParams.toString()
      }
    }

    function eF(FF, WF) {
      var SF;
      const CF = null !== (SF = WF.protocol) && void 0 !== SF ? SF : "ws";
      if ("ws" !== CF) throw new Error(`seat reservation asks for the ${CF} transport`);
      const {
        secure: AF,
        host: uF,
        pathname: hF,
        search: bW
      } = iW(FF), dF = new URLSearchParams(bW);
      dF.append("sessionId", WF.sessionId), WF.reconnectionToken && dF.append("reconnectionToken", WF.reconnectionToken);
      return `${AF?"wss":"ws"}://${WF.room.publicAddress||`${uF}${hF}`}/${WF.room.processId}/${WF.room.roomId}?${dF.toString()}`
    }

    function EF(FF, WF, SF) {
      var eF;
      let EF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const tW = null !== (eF = EF.sleep) && void 0 !== eF ? eF : CF.c;
      return (0, uF.c)((() => async function(FF, WF, SF, CF) {
        var uF, eF;
        const {
          signal: EF,
          sleep: tW
        } = CF, TF = null !== (uF = CF.fetch) && void 0 !== uF ? uF : fetch, aW = function(FF, WF, SF) {
          const {
            secure: CF,
            host: AF,
            pathname: uF,
            search: hF
          } = iW(FF);
          return `${CF?"https":"http"}://${AF}${uF}/matchmake/${WF}/${encodeURIComponent(SF)}${hF?`?${hF}`:""}`
        }(FF, "joinOrCreate", WF), kW = JSON.stringify(SF);
        let qW = null;
        for (let iW = 0; iW < PF; iW++) {
          var VF;
          if (iW > 0) await tW(null !== (VF = RF[iW - 1]) && void 0 !== VF ? VF : 1500, EF);
          let FF;
          (0, AF.h)(EF);
          try {
            FF = await TF(aW, {
              method: "POST",
              headers: {
                ...dF,
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: kW,
              credentials: "include",
              signal: EF
            })
          } catch (DF) {
            (0, AF.h)(EF), qW = QF(DF);
            continue
          }
          const {
            answer: WF,
            lost: SF
          } = await rW(FF), uF = null !== WF && "string" === typeof WF.error ? WF.error : null;
          var NF;
          if (null !== uF) null === (NF = CF.onRefusal) || void 0 === NF || NF.call(CF);
          if ((0, AF.h)(EF), null === SF) {
            if (null !== uF) throw new bW.l(uF, "number" === typeof(null === WF || void 0 === WF ? void 0 : WF.code) ? WF.code : 0, (0, hF.o)(uF).text);
            if (FF.ok && null !== WF && gW(WF)) return WF;
            qW = new bW.n(`seat request answered HTTP ${FF.status}${null===WF?" without JSON":" without a seat"}`, !1)
          } else qW = QF(SF.error)
        }
        throw null !== (eF = qW) && void 0 !== eF ? eF : new bW.n("seat request made no attempt", !1)
      }(FF, WF, SF, {
        ...EF,
        sleep: tW
      })), EF.signal, tW)
    }

    function QF(FF) {
      return new bW.n(FF instanceof Error ? FF.message : String(FF), !0, FF)
    }
    async function rW(FF) {
      try {
        const WF = await FF.json();
        return {
          answer: "object" === typeof WF && null !== WF ? WF : null,
          lost: null
        }
      } catch (WF) {
        return {
          answer: null,
          lost: WF instanceof SyntaxError ? null : {
            error: WF
          }
        }
      }
    }

    function gW(FF) {
      const WF = FF.room;
      return "string" === typeof FF.sessionId && "object" === typeof WF && null !== WF && "string" === typeof WF.roomId && "string" === typeof WF.processId && "string" === typeof WF.name
    }
  },
  38755: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => gW,
      d: () => rW,
      e: () => kW
    });
    var CF = SF(5619),
      AF = SF(20),
      uF = SF(3479),
      hF = SF(3793),
      bW = SF(5610),
      dF = SF(38764);
    const PF = 0,
      RF = 1,
      iW = 2,
      eF = "shaderPack:failedToCompile",
      EF = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      QF = new Set(["not_requested", "off_after_loss", "gpu_class_webgl", "windows_firefox"]);

    function rW(FF, WF) {
      var SF;
      const CF = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.reason) && void 0 !== SF ? SF : "none";
      return EF.has(CF) ? {
        messageKey: WF ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === CF && "override" === (null === FF || void 0 === FF ? void 0 : FF.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: QF.has(CF) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    class gW extends Error {
      constructor(FF) {
        super(`the shader pack can't run in this game: ${FF}`), this.messageKey = FF, this.name = "ShaderPackJoinError"
      }
    }
    const tW = "strict";
    class TF {
      constructor(FF) {
        this.deps = FF, this.pagePack = void 0, this.loaded = null, this.RC = tW, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = FF.load().catch((WF => (FF.warn("the shader pack could not load: the game draws without it", WF), {
          status: "none"
        }))).then((FF => (this.loaded = FF, "active" === FF.status && null !== FF.harnessPolicy && (this.RC = FF.harnessPolicy, this.handOver()), FF)))
      }
      async join(FF) {
        this.AC();
        const WF = this.game,
          [SF, AF] = await Promise.all([this.pagePack, this.policyOf(FF)]);
        if (WF !== this.game || "none" === SF.status) return null;
        const uF = "active" === SF.status ? SF.pack.variants : SF.variants,
          hF = (0, CF.j)(uF, AF);
        if (hF && "active" === SF.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (hF) {
          const FF = this.cantRun(SF, AF);
          if (null !== FF) return FF
        } else if ("blocked" === SF.status || null === this.deps.core) return null;
        return this.RC = AF, this.handOver(), hF && this.refused ? eF : (this.joined = !0, this.offInThisGame = !hF, null)
      }
      async replay(FF) {
        const WF = await this.join(FF);
        null === WF ? this.playable() : this.deps.failInGame(WF)
      }
      cantRun(FF, WF) {
        const {
          core: SF,
          noWebGpu: CF
        } = this.deps;
        if ("blocked" === FF.status) {
          return "shaderPack:failedUnchecked" === FF.messageKey && null === SF && CF.noAdapter ? CF.messageKey : FF.messageKey
        }
        return this.refused || this.failedPolicies.has(WF) ? eF : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(eF) : (null !== this.couldntRun ? this.notify(uF.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.RC) && this.notifyModelFallback()))
      }
      AC() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(FF) {
        for (const {
            code: WF,
            detail: SF
          }
          of FF)
          if (WF === hF.f.RenderShaderPackNotRun) switch (255 & SF) {
            case PF:
              this.refused = !0, this.failed();
              break;
            case RF:
              this.failedPolicies.add(this.RC), this.failed();
              break;
            case iW:
              this.failedModelPolicies.add(this.RC), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(eF) : this.failedWhileJoining = !0)
      }
      fail(FF) {
        this.AC(), this.deps.failInGame(FF)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(FF, WF) {
        const SF = this.game;
        this.deps.notify(FF, (() => SF === this.game && this.joined), WF)
      }
      handOver() {
        var FF;
        const {
          core: WF
        } = this.deps;
        null !== WF && "active" === (null === (FF = this.loaded) || void 0 === FF ? void 0 : FF.status) && (function(FF, WF) {
          const SF = (0, bW.d)(WF.variants);
          return FF.setShaderPack(SF.variantFlags, SF.hooks, SF.moduleCodes, (0, dF.v)(WF.layers), dF.m[WF.RC], WF.keepCircleShadows)
        }(WF, {
          ...this.loaded.pack,
          RC: this.RC
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      policyOf(FF) {
        return this.deps.policyOf(FF).catch((FF => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", FF), tW)))
      }
    }
    const aW = "wasmShaderPackNotice";

    function kW(FF, WF, SF) {
      return AF.j.subscribe(aW, (FF => {
        let {
          translationKey: WF,
          stillCurrent: SF,
          reasonKey: CF
        } = FF;
        SF() && AF.j.Uu("chat", (0, uF.i)(WF, CF))
      })), new TF({
        load: qW,
        policyOf: VF,
        core: FF,
        noWebGpu: WF,
        notify: (FF, WF, SF) => {
          const CF = {
            translationKey: FF,
            stillCurrent: WF,
            reasonKey: SF
          };
          AF.j.Uu(aW, CF, !0)
        },
        failInGame: FF => {
          AF.j.Uu(uF.f, FF)
        },
        warn: SF
      })
    }
    async function qW() {
      const [{
        shaderPackPage: FF,
        harnessShaderPackMode: WF
      }, {
        shaderPackTextures: CF
      }] = await Promise.all([Promise.resolve().then((() => SF(37547))), Promise.resolve().then((() => SF(5603)))]), AF = await FF.load();
      return "active" !== AF.status ? AF : {
        status: "active",
        pack: {
          variants: AF.pack.variants,
          layers: CF().layers,
          keepCircleShadows: AF.pack.keepCircleShadows
        },
        harnessPolicy: WF()
      }
    }
    async function VF(FF) {
      var WF;
      const [{
        harnessShaderPackMode: CF
      }, {
        getShaderPackPolicy: AF
      }] = await Promise.all([Promise.resolve().then((() => SF(37547))), SF.e(74).then((() => SF(41151)))]);
      return null !== (WF = CF()) && void 0 !== WF ? WF : AF(FF)
    }
  },
  38834: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW,
      f: () => gW,
      h: () => dF,
      i: () => PF,
      l: () => RF,
      p: () => eF
    });
    var CF = SF(38838),
      AF = SF(38847);
    const uF = "atlas:",
      hF = 3e4;
    class bW extends Error {
      constructor(FF, WF) {
        super(`fetching ${FF} answered HTTP ${WF}`), this.url = FF, this.status = WF, this.name = "TerrainTextureFetchError"
      }
    }

    function dF(FF) {
      if (!FF.startsWith(uF)) return null;
      const WF = Number(FF.slice(uF.length));
      return Number.isInteger(WF) && WF >= 0 ? WF : null
    }
    async function PF() {
      const FF = await SF.e(182).then((() => SF(32982)));
      return {
        atlasSheets: FF.blockAtlasUrls,
        texture: WF => {
          var SF, CF, uF;
          return null !== (SF = null !== (CF = null !== (uF = FF.animatedBlockTextures[WF]) && void 0 !== uF ? uF : FF.rotatedBlockTextures[WF]) && void 0 !== CF ? CF : AF.b[WF]) && void 0 !== SF ? SF : null
        }
      }
    }
    async function RF(FF) {
      const WF = new AbortController,
        SF = setTimeout((() => {
          WF.abort(new DOMException(`${FF} took over ${hF} ms`, "TimeoutError"))
        }), hF);
      let CF;
      try {
        const SF = await fetch(FF, {
          signal: WF.signal
        });
        if (!SF.ok) throw new bW(FF, SF.status);
        CF = await SF.blob()
      } finally {
        clearTimeout(SF)
      }
      const AF = await createImageBitmap(CF, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return eF(AF)
      } finally {
        AF.close()
      }
    }
    const iW = 8192;

    function eF(FF) {
      const {
        width: WF,
        height: SF
      } = FF, AF = Math.max(1, Math.min(SF, iW)), uF = (0, CF.h)(WF, AF, {
        willReadFrequently: !0
      });
      if (!uF) throw new Error("no 2D context to read the texture back");
      uF.globalCompositeOperation = "copy";
      const hF = new Uint8Array(WF * SF * 4);
      for (let CF = 0; CF < SF; CF += AF) {
        const bW = Math.min(AF, SF - CF);
        uF.drawImage(FF, 0, CF, WF, bW, 0, 0, WF, bW), hF.set(uF.getImageData(0, 0, WF, bW).data, CF * WF * 4)
      }
      return {
        width: WF,
        height: SF,
        pixels: hF
      }
    }
    async function EF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RF;
      const CF = [],
        AF = await Promise.all(FF.map((async FF => {
          var AF, hF;
          const bW = null !== (AF = null === (hF = WF.decoded) || void 0 === hF ? void 0 : hF.call(WF, FF)) && void 0 !== AF ? AF : null,
            PF = null === bW ? function(FF, WF) {
              if (FF.startsWith(uF)) {
                var SF;
                const CF = dF(FF);
                return null === CF ? null : null !== (SF = WF.atlasSheets[CF]) && void 0 !== SF ? SF : null
              }
              return WF.texture(FF)
            }(FF, WF) : null,
            RF = null !== bW && void 0 !== bW ? bW : null === PF ? null : SF(PF);
          if (null === RF) return CF.push({
            name: FF,
            url: PF,
            error: new Error(`no URL for terrain texture ${FF}`)
          }), null;
          try {
            const WF = await RF;
            if (WF.pixels.byteLength !== WF.width * WF.height * 4) throw new Error(`decoded ${WF.pixels.byteLength} bytes for ${WF.width}x${WF.height} texels`);
            return {
              name: FF,
              texture: WF
            }
          } catch (iW) {
            return CF.push({
              name: FF,
              url: PF,
              error: iW
            }), null
          }
        }))),
        hF = AF.filter((FF => null !== FF)),
        bW = new Uint8Array(hF.reduce(((FF, WF) => {
          let {
            texture: SF
          } = WF;
          return FF + SF.pixels.byteLength
        }), 0)),
        PF = new Uint32Array(2 * hF.length);
      let iW = 0;
      hF.forEach(((FF, WF) => {
        let {
          texture: SF
        } = FF;
        bW.set(SF.pixels, iW), iW += SF.pixels.byteLength, PF[2 * WF] = SF.width, PF[2 * WF + 1] = SF.height
      }));
      return {
        handOver: {
          names: hF.map((FF => {
            let {
              name: WF
            } = FF;
            return WF
          })),
          bytes: bW,
          sizes: PF
        },
        failures: CF
      }
    }
    const QF = [2e3, 1e4, 3e4, 6e4, 12e4];

    function rW() {}
    class gW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QF,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = FF, this.retryMs = WF, this.keepBelow = SF, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PF,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const CF = ++this.started,
          AF = {
            decode: SF.decode,
            wholeAtlas: SF.wholeAtlas
          };
        return this.loadAndHandOver(WF, AF, FF, (() => {
          var FF;
          return CF < this.landed || !1 === (null === (FF = SF.wanted) || void 0 === FF ? void 0 : FF.call(SF))
        }), {
          onTaken: (FF, SF) => {
            this.landed = CF;
            const uF = null !== FF && FF.bytes.byteLength < this.keepBelow ? FF : null;
            this.current = {
              mine: CF,
              sources: WF,
              load: AF,
              kept: uF,
              failed: SF
            }
          }
        })
      }
      restore(FF) {
        var WF;
        const SF = this.current;
        if (null === SF) return Promise.resolve(null);
        if ((null === (WF = this.restoring) || void 0 === WF ? void 0 : WF.mine) === SF.mine) return this.restoring.done;
        const CF = {
          mine: SF.mine,
          done: this.restoreLanded(SF, FF).finally((() => {
            this.restoring === CF && (this.restoring = null)
          }))
        };
        return this.restoring = CF, CF.done
      }
      async restoreLanded(FF, WF) {
        const SF = () => this.landed !== FF.mine,
          {
            kept: CF
          } = FF;
        if (null !== CF) return this.stopped() ? null : this.core.setTerrainTextures(CF.names, CF.bytes, CF.sizes);
        let AF = WF;
        for (let uF = 0;; uF++) {
          const WF = this.retryMs.at(uF),
            CF = {
              allOrNothingExcept: void 0 === WF ? void 0 : FF.failed
            },
            hF = await this.loadAndHandOver(FF.sources, FF.load, AF, SF, CF);
          if (!1 !== hF || void 0 === WF || this.stopped()) return hF;
          if (AF = rW, await new Promise((FF => {
              setTimeout(FF, WF)
            })), SF()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const uF = this.core.terrainTextureNames();
        var hF;
        if (0 === uF.length) return null === (hF = AF.onTaken) || void 0 === hF || hF.call(AF, null, new Set), !0;
        let bW;
        try {
          bW = await EF(uF, await FF(), WF.decode)
        } catch (QF) {
          return CF() ? null : (SF({
            name: null,
            url: null,
            error: QF
          }), !1)
        }
        if (CF() || this.stopped()) return null;
        for (const dF of bW.failures) SF(dF);
        const PF = AF.allOrNothingExcept;
        if (void 0 !== PF && bW.failures.some((FF => {
            let {
              name: WF
            } = FF;
            return null === WF || !PF.has(WF)
          })) || !0 === WF.wholeAtlas && bW.failures.some((FF => {
            let {
              name: WF
            } = FF;
            return null === WF || null !== dF(WF)
          }))) return !1;
        const {
          handOver: RF
        } = bW, iW = this.core.setTerrainTextures(RF.names, RF.bytes, RF.sizes);
        if (iW) {
          var eF;
          const FF = new Set(bW.failures.flatMap((FF => {
            let {
              name: WF
            } = FF;
            return null === WF ? [] : [WF]
          })));
          null === (eF = AF.onTaken) || void 0 === eF || eF.call(AF, RF, FF)
        }
        return iW
      }
    }
  },
  38851: (FF, WF, SF) => {
    function CF(FF) {
      return "fetch" === FF || "timeout" === FF || "integrity" === FF ? "download" : "browser"
    }
    SF.d(WF, {
      e: () => AF,
      h: () => hF,
      k: () => dF,
      o: () => bW,
      s: () => CF,
      v: () => uF
    });
    const AF = "https://discord.gg/playbloxd";

    function uF(FF) {
      return "download" === FF ? {
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

    function hF(FF, WF) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: WF ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: FF.code
        },
        discordLink: WF,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function bW() {
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

    function dF(FF, WF, SF) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: SF ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: FF.reason
        },
        discordLink: null === FF.name,
        confirm: WF ? "general:reconnect" : FF.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  38723: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      followPageUiPack: () => od,
      packForGame: () => ud,
      playWasmGame: () => Hd,
      prefetchWasmPreviews: () => ub,
      setGamePackConfirm: () => Ad,
      startWasmPlay: () => zP,
      startWasmPreviews: () => Ab
    });
    var CF = SF(161),
      AF = SF(1110),
      uF = SF(138),
      hF = SF(37454),
      bW = SF(1576),
      dF = SF(20),
      PF = SF(3690),
      RF = SF(1168),
      iW = SF(1175),
      eF = SF(37560),
      EF = SF(37570),
      QF = SF(37500),
      rW = SF(34993),
      gW = SF(38520),
      tW = SF(3773),
      TF = SF(38527),
      aW = SF(38615),
      kW = SF(38596);
    const qW = {
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

    function VF(FF) {
      const WF = {
        ...aW.e[FF]
      };
      for (const SF of Object.keys(qW[FF])) delete WF[SF];
      return WF
    }

    function NF() {
      var FF, WF;
      return null === (FF = null === (WF = (0, TF.j)()) || void 0 === WF ? void 0 : WF.localPlayerAlive()) || void 0 === FF || FF
    }

    function DF() {
      var FF, WF;
      return null !== (FF = null === (WF = (0, TF.j)()) || void 0 === WF ? void 0 : WF.localDeaths()) && void 0 !== FF ? FF : null
    }
    const LF = {
        current: NF,
        watch: FF => {
          let WF = NF(),
            SF = DF();
          return (0, tW.w)((() => {
            const CF = NF(),
              AF = DF(),
              uF = null !== AF && null !== SF && AF !== SF;
            SF = AF, uF ? (WF || FF(!0), FF(!1), CF && FF(!0), WF = CF) : CF !== WF && (WF = CF, FF(CF))
          }))
        }
      },
      mW = {
        states: {
          ...VF("states"),
          localPlayerAlive: LF
        },
        events: {
          ...VF("events"),
          localPlayerAliveSet: {
            watch: LF.watch
          }
        },
        commands: {
          ...VF("commands"),
          respawn: () => {
            var FF;
            null === (FF = (0, TF.j)()) || void 0 === FF || FF.respawn()
          },
          playEmote: FF => {
            var WF;
            null === (WF = (0, TF.j)()) || void 0 === WF || WF.send(kW.b.PlayEmote, (0, kW.z)({
              RL: FF
            }))
          },
          applyTemporaryThirdPerson: FF => {
            var WF;
            let {
              durationMs: SF
            } = FF;
            null === (WF = (0, TF.j)()) || void 0 === WF || WF.thirdPersonFor(SF)
          },
          bindCustomButtonKeys: FF => {
            var WF;
            null === (WF = (0, TF.j)()) || void 0 === WF || WF.bindCustomButtonKeys(FF)
          },
          pressCustomButton: FF => {
            var WF;
            let {
              id: SF,
              down: CF
            } = FF;
            null === (WF = (0, TF.j)()) || void 0 === WF || WF.pressCustomButton(SF, CF)
          },
          setLookSensitivity: () => {},
          wakeUp: FF => {
            const WF = (0, kW.L)({
                Fy: FF
              }),
              SF = () => {
                const FF = (0, TF.j)();
                return !(null !== FF && void 0 !== FF && FF.isSessionLive) || FF.send(kW.b.StopSleeping, WF)
              };
            if (!SF()) {
              const FF = (0, tW.w)((() => {
                SF() && FF()
              }))
            }
          },
          setCameraZoom: FF => {
            var WF;
            null === (WF = (0, TF.j)()) || void 0 === WF || WF.setCameraZoom(FF)
          }
        },
        queries: VF("queries"),
        lookups: {
          ...VF("lookups"),
          cameraZoom: () => {
            var FF, WF;
            return null !== (FF = null === (WF = (0, TF.j)()) || void 0 === WF ? void 0 : WF.cameraZoom()) && void 0 !== FF ? FF : 0
          }
        }
      };
    var OF = SF(38725),
      xW = SF(38733),
      ZF = SF(38741),
      oF = SF(1118),
      YF = SF(101),
      MF = SF(3607),
      cW = SF(2927),
      GF = SF(1001);
    const zW = {
      RD: () => (0, oF.d)(),
      inbuiltOverwritten: () => MF.f,
      reflectApplyHit: () => GF.b,
      definerHit: () => YF.currentUrl.c,
      emitReplaced: () => (0, dF.d)(),
      confirmMesh: () => (0, cW.d)()
    };
    var IF = SF(38755),
      fF = SF(38771);
    var yW = SF(11),
      sF = SF(1580),
      nF = SF(1621),
      HF = SF(1481),
      KF = SF(1656),
      wF = SF(1046),
      XF = SF(1115);

    function UF() {
      return XF.h.get().getCurrentLanguageCode()
    }

    function BF(FF) {
      const WF = () => {
        FF({
          translate: (FF, WF) => (0, wF.s)(UF(), FF, WF),
          keyBindingText: FF => {
            const WF = (0, nF.v)(FF, yW.b.get("isTouchScreen"));
            return null !== WF ? (0, wF.w)(UF(), WF.translationKey, WF.params) : (0, nF.o)((0, nF.s)(FF))
          },
          isFriend: KF.f,
          hiddenNames: sF.b.shown
        })
      };
      let SF = !1;
      const CF = () => {
          const FF = UF();
          (0, wF.l)(FF).then((() => {
            SF || FF !== UF() || WF()
          }))
        },
        AF = () => HF.e.getSocialState().friends.map((FF => FF.name.toLowerCase())).sort().join(" ");
      let uF = AF();
      WF(), CF();
      const hF = [(0, XF.k)((() => {
        WF(), CF()
      })), (0, dF.l)("customBindingsChanged", WF), (0, dF.l)("appManagerUpdated|isTouchScreen", WF), (0, KF.c)((() => {
        const FF = AF();
        FF !== uF && (uF = FF, WF())
      })), sF.b.subscribe(WF)];
      return () => {
        SF = !0;
        for (const FF of hF) FF()
      }
    }
    var jW = SF(247),
      vW = SF(874),
      JF = SF(220),
      pF = SF(2903),
      lF = SF(34921),
      FW = SF(2906),
      WW = SF(37127),
      SW = SF(5597),
      CW = SF(38665),
      AW = SF(234),
      uW = SF(1594),
      hW = SF(2935),
      bS = SF(2474);
    let dW = null;
    var PW = SF(1056),
      RW = SF(5458),
      iS = SF(37503),
      eW = SF(2587),
      EW = SF(42),
      QW = SF(211),
      rS = SF(38620),
      gS = SF(3780);
    class tS {
      constructor(FF, WF) {
        this.showView = FF, this.holdForAd = WF
      }
      pointerUnlockRequestsChanged() {
        (0, rS.D)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, rS.t)())
        }]
      }
      setGameViewShown(FF) {
        this.showView(FF)
      }
      videoAdHold(FF, WF) {
        this.holdForAd(FF, WF)
      }
    }
    class TW {
      AC(FF) {
        ! function(FF) {
          if (null !== (0, iW.e)().websocketUrl) try {
            (0, tW.I)().leaveGame(FF)
          } finally {
            (0, iW.w)({
              websocketUrl: null
            })
          }
        }(FF)
      }
      isReplay() {
        return !1
      }
    }
    class aS {
      watchFrameStarts(FF) {
        return (0, tW.s)(FF)
      }
      watchFrames(FF) {
        return (0, tW.q)(FF)
      }
      watchTicks(FF) {
        return (0, tW.w)(FF)
      }
    }
    var kS = SF(1153),
      qS = SF(38778);

    function VW(FF) {
      return FF >= 0 ? Math.min(1, FF) : 0
    }

    function NW(FF, WF) {
      const {
        fade: SF
      } = FF;
      return null === SF || WF - SF.at >= SF.ms ? FF.volume : SF.from + (FF.volume - SF.from) * Math.max(0, (WF - SF.at) / SF.ms)
    }

    function DW(FF) {
      const WF = Object.entries(FF),
        SF = new Uint32Array(WF.length);
      let CF = 0;
      for (const [hF, [, bW]] of WF.entries()) SF[hF] = bW.length, CF += bW.length;
      const AF = new Float64Array(3 * CF);
      let uF = 0;
      for (const [, hF] of WF)
        for (const FF of hF) AF.set(FF, uF), uF += 3;
      return {
        blocks: WF.map((FF => {
          let [WF] = FF;
          return WF
        })).join("\0"),
        counts: SF,
        values: AF
      }
    }
    class LW {
      constructor(FF, WF) {
        this.core = FF, this.warn = WF, this.latest = 0
      }
      async feed() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mS;
        const WF = ++this.latest;
        let SF;
        try {
          SF = await FF()
        } catch (CF) {
          return void(this.core.isStopped || WF !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", CF))
        }
        WF === this.latest && (this.core.setBlockColours(SF) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function mS() {
      return DW((await SF.e(182).then((() => SF(32982)))).averageColors)
    }
    var OW = SF(3786),
      xS = SF(38585),
      ZW = SF(38784),
      oW = SF(38710),
      YW = SF(565),
      MW = SF(35508),
      cS = SF(562),
      GW = SF(271),
      zS = SF(38698);
    const IW = [3e4, 12e4, 3e5];
    class fW extends Error {}
    const yS = {
      mobTypes: YW.n,
      vehicleTypes: MW.e,
      mobAiStates: YW.l,
      playerPoses: cS.k
    };
    var sW = SF(38682),
      nW = SF(38792),
      HW = SF(8196),
      KW = SF(89),
      wW = SF(3521),
      XW = SF(241);
    const UW = 1048576,
      BW = 1024 * UW,
      jS = 400 * UW,
      vS = 147456,
      JW = .5,
      pW = 1.5 * BW,
      lW = 768 * UW,
      FS = new Set(["428x926@3", "393x852@3", "430x932@3", "402x874@3", "440x956@3", "420x912@3"]),
      WS = 600,
      SS = 8;

    function CS(FF) {
      return jS + FF * vS
    }

    function AS(FF, WF, SF) {
      var AF, uF;
      let {
        footprintBytes: hF,
        basis: bW
      } = function(FF) {
        const {
          os: WF,
          deviceMemory: SF
        } = FF;
        if ("ios" === WF) {
          const WF = Math.min(FF.screenWidth, FF.screenHeight),
            SF = Math.max(FF.screenWidth, FF.screenHeight);
          return WF >= WS ? FF.hardwareConcurrency >= SS ? {
            footprintBytes: CS(HW.d),
            basis: "ipad-m"
          } : {
            footprintBytes: lW,
            basis: "ipad"
          } : FS.has(`${WF}x${SF}@${FF.devicePixelRatio}`) ? {
            footprintBytes: pW,
            basis: "iphone-6gb"
          } : {
            footprintBytes: lW,
            basis: "iphone"
          }
        }
        return "number" === typeof SF && Number.isFinite(SF) && SF > 0 ? {
          footprintBytes: SF * BW * JW,
          basis: `memory-${SF}`
        } : "android" === WF ? {
          footprintBytes: lW,
          basis: "android"
        } : {
          footprintBytes: CS(HW.i),
          basis: "unreported"
        }
      }(FF);
      if (SF) {
        const FF = Math.min(hF, CS(HW.d));
        hF = jS + Math.max(0, FF - jS) / 2, bW += "+killed"
      }
      null !== WF && CS(WF) < hF && (hF = CS(WF), bW += "+learned");
      const dF = function(FF) {
          const WF = Math.floor((FF - jS) / vS);
          return Math.min(HW.d, Math.max(HW.f, WF))
        }(hF),
        PF = (0, HW.o)(dF);
      return {
        footprintBytes: hF,
        chunkCap: dF,
        maxHorizDistance: null !== (AF = null === PF || void 0 === PF ? void 0 : PF.horizontal) && void 0 !== AF ? AF : CF.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (uF = null === PF || void 0 === PF ? void 0 : PF.vertical) && void 0 !== uF ? uF : CF.h.maxChunkVertAddDistance,
        basis: bW
      }
    }
    let uS = null;

    function hS() {
      return uS ??= AS({
        os: (0, KW.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio,
        hardwareConcurrency: navigator.hardwareConcurrency
      }, (0, wW.h)(), (0, XW.y)("wasm").length > 0), uS
    }
    var bC = SF(3594),
      dS = SF(2459),
      PS = SF(38636),
      RS = SF(3589),
      iC = SF(33),
      eS = SF(38806),
      ES = SF(3541),
      QS = SF(1943),
      rC = SF(1475),
      gC = SF(1144),
      tC = SF(107),
      TS = SF(1949),
      aC = SF(3810),
      kC = SF(3812);
    const qC = new Set([OW.hb.KeyDown, OW.hb.MouseMove, OW.hb.MouseDown, OW.hb.Wheel, OW.hb.TouchStart, OW.hb.TouchMove]);

    function VS(FF) {
      return (FF.shiftKey ? OW.rb.Shift : 0) | (FF.ctrlKey ? OW.rb.Ctrl : 0) | (FF.altKey ? OW.rb.Alt : 0) | (FF.metaKey ? OW.rb.Meta : 0) | ("repeat" in FF && FF.repeat ? OW.rb.Repeat : 0) | (FF.isTrusted ? 0 : OW.rb.Untrusted)
    }

    function NS(FF) {
      return "touchOnly" !== (0, tC.c)() && "function" === typeof FF.requestPointerLock
    }

    function DS(FF) {
      return 0 === FF.button ? FF.altKey ? aC.i["Alt+Left Click"] : aC.i.Mouse1 : 1 === FF.button ? aC.i.Mouse2 : aC.i.Mouse3
    }
    const LS = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      mC = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      OS = 32768,
      xC = 1;

    function ZS(FF) {
      return Math.min(Math.max(Math.round(FF), 0), 65535)
    }

    function oS(FF, WF, SF) {
      const CF = [],
        AF = (FF, WF, SF, AF) => {
          const uF = SF;
          FF.addEventListener(WF, uF, AF), CF.push((() => {
            FF.removeEventListener(WF, uF, AF)
          }))
        },
        uF = {
          capture: !0,
          passive: !0
        },
        hF = (FF, SF, CF, AF, uF) => (!(0, TS.d)() || !qC.has(FF)) && (WF(FF, SF, CF, AF, uF), !0),
        bW = () => document.pointerLockElement === FF,
        dF = function() {
          try {
            return window.self !== window.top
          } catch {
            return !0
          }
        }(),
        PF = FF => {
          FF.ctrlKey && SF.ctrlCombosAreGames() && !(0, kC.d)(FF.target) && FF.preventDefault()
        },
        RF = (FF, CF) => {
          SF.inspect(FF, CF, !1), WF(OW.hb.KeyUp, CF, 0, 0, (0, QS.r)(VS(FF), FF.timeStamp)), SF.keyReleased(CF)
        },
        iW = new Map,
        eF = (FF, WF, SF) => FF[SF] || ("AltRight" === WF || "ControlLeft" === WF) && FF.getModifierState("AltGraph"),
        EF = FF => {
          for (const [WF, SF] of iW) eF(FF, WF, SF) || (iW.delete(WF), RF(FF, aC.i[WF]))
        };
      FF.tabIndex = -1;
      let QF = 0,
        rW = 0;
      const gW = () => {
        const WF = FF.getBoundingClientRect();
        QF = WF.left, rW = WF.top
      };
      let tW = "mouse";
      const TF = () => !bW() && ("mouse" === tW || !SF.touchUiShown()),
        aW = (FF, WF, SF) => {
          const CF = (ZS(FF.clientX - QF) | ZS(FF.clientY - rW) << 16) >>> 0;
          hF(OW.hb.MouseMove, OW.ub.Point, WF, SF, CF)
        };
      let kW = !1,
        qW = 0;
      const VF = () => {
        kW && (kW = !1, SF.viewShown() && (0, rS.U)())
      };
      CF.push((() => {
        clearTimeout(qW)
      })), AF(window, "keydown", (FF => {
        "Escape" === FF.key ? (0, rS.I)(!0) : FF.repeat || (0, kC.d)(FF.target) || (kW = !0, clearTimeout(qW), qW = window.setTimeout(VF, 0))
      }), uF), AF(window, "keydown", (FF => {
        VF(), PF(FF), EF(FF);
        const WF = aC.i[FF.code];
        if ("number" !== typeof WF || !SF.viewShown()) return;
        const CF = (0, kC.d)(FF.target);
        CF || !SF.prevents(WF) && !LS.has(FF.code) || FF.preventDefault(), FF.repeat || SF.inspect(FF, WF, !0);
        const AF = mC.get(FF.code);
        hF(OW.hb.KeyDown, WF, 0, 0, (0, QS.r)(VS(FF), FF.timeStamp)) && void 0 !== AF && iW.set(FF.code, AF), CF || SF.keyPressed(WF)
      }), {
        capture: !1,
        passive: !1
      }), AF(window, "keyup", (FF => {
        "Escape" === FF.key && (0, rS.I)(!1), PF(FF), iW.delete(FF.code), EF(FF);
        const WF = aC.i[FF.code];
        "number" === typeof WF && RF(FF, WF)
      }), {
        capture: !0,
        passive: !1
      }), AF(window, "mousemove", (FF => {
        EF(FF), "mouse" === tW && TF() ? aW(FF, FF.movementX, FF.movementY) : hF(OW.hb.MouseMove, 0, FF.movementX, FF.movementY, 0)
      }), uF);
      let NF = 0,
        DF = 0;
      const LF = [];
      let mW = !1,
        OF = !1;
      AF(FF, "mousedown", (FF => {
        if ((0, TS.d)()) return;
        EF(FF);
        const CF = 1 << FF.button;
        if (!bW() && (0, rS.Q)() && (0, rS.e)() && (OF = !0, !mW)) return void(NF |= CF);
        NF &= ~CF;
        const AF = FF.button <= 2 ? DS(FF) : void 0;
        void 0 !== AF && (LF[FF.button] = AF, SF.inspect(FF, AF, !0)), TF() && aW(FF, 0, 0), WF(OW.hb.MouseDown, FF.button, FF.clientX, FF.clientY, (0, QS.r)(VS(FF), FF.timeStamp)), DF |= CF, void 0 !== AF && SF.keyPressed(AF)
      }), uF), AF(window, "mouseup", (FF => {
        var CF;
        EF(FF);
        const AF = 1 << FF.button,
          uF = 0 !== (NF & ~DF & AF);
        if (NF &= ~AF, DF &= ~AF, uF) return;
        const hF = FF.button <= 2 ? null !== (CF = LF[FF.button]) && void 0 !== CF ? CF : DS(FF) : void 0;
        void 0 !== hF && SF.inspect(FF, hF, !1), WF(OW.hb.MouseUp, FF.button, FF.clientX, FF.clientY, (0, QS.r)(VS(FF), FF.timeStamp)), void 0 !== hF && SF.keyReleased(hF)
      }), uF), AF(FF, "contextmenu", (FF => {
        FF.preventDefault()
      }), {
        passive: !1
      });
      const xW = FF => {
        (bW() || (0, rS.q)() && (0, gC.k)()) && (FF.ctrlKey || dF && !document.fullscreenElement) && FF.preventDefault()
      };
      AF(FF, "wheel", (FF => {
        xW(FF), EF(FF), hF(OW.hb.Wheel, FF.deltaMode, FF.deltaX, FF.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const ZF = {
          capture: !0,
          passive: !1
        },
        oF = FF => {
          FF ? window.addEventListener("wheel", xW, ZF) : window.removeEventListener("wheel", xW, ZF)
        };
      oF((0, rS.q)()), CF.push((0, rS.w)(oF)), CF.push((() => {
        oF(!1)
      }));
      const YF = new Map,
        MF = new Set,
        cW = FF => {
          const WF = "stylus" === FF.touchType;
          for (const SF of YF.values())
            if (!SF.touched && (WF || Math.abs(FF.clientX - SF.x) <= xC && Math.abs(FF.clientY - SF.y) <= xC)) return SF.touched = !0, !0;
          return !1
        },
        GF = FF => WF => {
          const SF = (0, QS.r)(VS(WF), WF.timeStamp),
            CF = WF.changedTouches;
          for (let AF = 0; AF < CF.length; AF++) {
            const WF = CF[AF];
            FF === OW.hb.TouchStart && cW(WF) && MF.add(WF.identifier), MF.has(WF.identifier) ? FF !== OW.hb.TouchEnd && FF !== OW.hb.TouchCancel || MF.delete(WF.identifier) : hF(FF, 32767 & WF.identifier, WF.clientX, WF.clientY, SF)
          }
        },
        zW = GF(OW.hb.TouchStart);
      AF(FF, "touchstart", (FF => {
        FF.preventDefault(), (0, TS.d)() || (SF.touchStarting(), zW(FF))
      }), {
        passive: !1
      }), AF(FF, "touchmove", GF(OW.hb.TouchMove), uF), AF(FF, "touchend", GF(OW.hb.TouchEnd), uF), AF(FF, "touchcancel", GF(OW.hb.TouchCancel), uF);
      const IF = (FF, WF) => {
        hF(FF, OS | 32767 & WF.pointerId, WF.clientX, WF.clientY, (0, QS.r)(VS(WF), WF.timeStamp))
      };
      AF(window, "pointerdown", (WF => {
        tW = WF.pointerType, "mouse" === WF.pointerType && WF.target !== FF && SF.viewShown() && (0, rS.X)()
      }), uF), AF(FF, "pointerdown", (FF => {
        "pen" === FF.pointerType && 0 === FF.button && (0, rS.q)() && (0, gC.k)() && (FF.preventDefault(), (0, TS.d)() || (YF.set(FF.pointerId, {
          x: FF.clientX,
          y: FF.clientY,
          touched: !1
        }), SF.touchStarting(), IF(OW.hb.TouchStart, FF)))
      }), {
        passive: !1
      }), AF(window, "pointermove", (FF => {
        tW = FF.pointerType, YF.has(FF.pointerId) && IF(OW.hb.TouchMove, FF), "mouse" !== FF.pointerType && TF() && aW(FF, 0, 0)
      }), uF);
      const fF = FF => WF => {
        YF.delete(WF.pointerId) && IF(FF, WF)
      };
      AF(window, "pointerup", fF(OW.hb.TouchEnd), uF), AF(window, "pointercancel", fF(OW.hb.TouchCancel), uF);
      let yW = 0;
      const sF = () => {
          yW = 0, gW(), SF.resized()
        },
        nF = () => {
          const FF = SF.sizeCanvas();
          null !== FF && WF(OW.hb.Resize, 0, FF.cssWidth, FF.cssHeight, (0, QS.m)(FF.renderScale)), gW(), SF.resized(), 0 === yW && (yW = requestAnimationFrame(sF))
        };
      AF(window, "resize", nF, uF), CF.push(SF.watchRenderScale(nF)), CF.push((() => {
        cancelAnimationFrame(yW)
      })), AF(window, "focus", (FF => {
        FF.isTrusted && (WF(OW.hb.Focus, 0, 0, 0, 0), SF.viewShown() && (0, rS.X)())
      }), {
        passive: !0
      });
      const HF = () => {
          (0, rS.I)(!1), NF = 0
        },
        KF = () => {
          YF.clear(), MF.clear()
        };
      let wF = 0;
      AF(window, "blur", (CF => {
        HF(), (0, rS.m)(), CF.isTrusted && (WF(OW.hb.Blur, 0, 0, 0, 0), KF()), clearTimeout(wF), wF = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, gC.k)() && SF.viewShown() && FF.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), CF.push((() => {
        clearTimeout(wF)
      })), CF.push((0, TS.h)((() => {
        HF(), WF(OW.hb.Blur, OW.r.Release, 0, 0, 0), SF.keysReleased(), iW.clear(), DF = 0, KF(), WF(OW.hb.Joystick, 0, 0, 0, 0), document.hasFocus() && WF(OW.hb.Focus, 0, 0, 0, 0)
      })));
      const XF = !SF.canLock(),
        UF = () => XF && !(0, rS.q)() ? OW.Qb.Lockless : OW.Qb.Released,
        BF = () => {
          bW() && (mW = !1, OF = !1), WF(OW.hb.PointerLock, bW() ? OW.Qb.Locked : UF(), 0, 0, 0), (0, rS.M)(bW())
        };
      return AF(document, "pointerlockchange", BF, {
        passive: !0
      }), AF(document, "pointerlockerror", (() => {
        mW ||= OF, OF = !1, (0, rS.v)()
      }), {
        passive: !0
      }), XF && CF.push((0, rS.w)((() => {
        WF(OW.hb.PointerLock, UF(), 0, 0, 0)
      }))), nF(), WF(document.hasFocus() ? OW.hb.Focus : OW.hb.Blur, 0, 0, 0, 0), BF(), () => {
        for (const FF of CF.splice(0)) FF()
      }
    }
    var YS = SF(38853),
      MS = SF(8178),
      cC = SF(1625);
    const GS = new Map(aC.b.map(((FF, WF) => [FF, WF]))),
      zC = ["jump", "primary-fire", "alt-fire"],
      IS = ["primary-fire", "alt-fire"];

    function fS(FF) {
      return `${cC.c}${FF}`
    }
    const yC = ["forward", "backward", "left", "right", "sprint", "jump"];

    function sS(FF) {
      const WF = [];
      for (const SF of FF) {
        const FF = "string" === typeof SF ? aC.i[SF] : void 0;
        "number" === typeof FF && WF.push(FF)
      }
      return WF
    }
    class nS {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [FF, WF] of Object.entries(aC.f)) this.keys.set(FF, WF);
        this.updateKeySets()
      }
      prevents(FF) {
        return this.preventKeys.has(FF)
      }
      moves(FF) {
        return this.movementKeys.has(FF)
      }
      checks(FF, WF) {
        return (WF ? this.checkedDown : this.checkedUp).has(FF)
      }
      sync(FF, WF) {
        for (const [SF, CF] of this.keys) {
          const AF = FF(fS(SF)),
            uF = Array.isArray(AF) ? sS(AF) : aC.f[SF];
          (uF.length !== CF.length || uF.some(((FF, WF) => FF !== CF[WF]))) && this.bind(SF, uF, WF)
        }
      }
      bind(FF, WF, SF) {
        const CF = GS.get(FF);
        if (void 0 !== CF) {
          SF(OW.hb.Binding, 0, 0, 0, CF | OW.p.Clear << 8);
          for (const uF of [...WF, ...null !== (AF = aC.g[FF]) && void 0 !== AF ? AF : []]) {
            var AF;
            SF(OW.hb.Binding, uF, 0, 0, CF | OW.p.Add << 8)
          }
          this.keys.set(FF, WF), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const CF of aC.k)
          for (const WF of null !== (FF = this.keys.get(aC.b[CF])) && void 0 !== FF ? FF : []) {
            var FF;
            this.preventKeys.add(WF)
          }
        this.movementKeys.clear();
        for (const CF of yC)
          for (const FF of null !== (WF = this.keys.get(CF)) && void 0 !== WF ? WF : []) {
            var WF;
            this.movementKeys.add(FF)
          }
        for (const [CF, AF] of [
            [this.checkedDown, zC],
            [this.checkedUp, IS]
          ]) {
          CF.clear();
          for (const FF of AF)
            for (const WF of null !== (SF = this.keys.get(FF)) && void 0 !== SF ? SF : []) {
              var SF;
              CF.add(WF)
            }
        }
      }
    }
    var HS = SF(3802),
      KS = SF(35105);
    const wS = "[bloxd-wasm-client]";

    function XS() {
      return "inGame" === yW.b.get("gameState") && !(0, rC.n)()
    }
    let US = null;

    function BS(FF, WF) {
      US && WF.writePendingInput() && US.push(function(FF, WF) {
        let SF = "";
        for (const CF of WF) SF += CF.toString(16).padStart(2, "0");
        return SF ? `${FF} ${SF}` : String(FF)
      }(FF, WF.rings.input.written()))
    }
    const jC = [];

    function vC(FF, WF, SF, CF) {
      FF === OW.R.InputAction && CF === OW.eb && jC.push(WF.getUint32(SF, !0))
    }
    var JS = SF(38860),
      pS = SF(1051),
      lS = SF(38851);
    const FC = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Reconnect"
      },
      wasmScreens: pS.wasmScreens
    };

    function WC(FF) {
      var WF, SF;
      let CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [AF, uF] = FF.split(":");
      return (null !== (WF = null === (SF = FC[AF]) || void 0 === SF ? void 0 : SF[uF]) && void 0 !== WF ? WF : FF).replace(/\{\{(\w+)\}\}/g, ((FF, WF) => {
        var SF;
        return null !== (SF = CF[WF]) && void 0 !== SF ? SF : FF
      }))
    }

    function SC(FF, WF) {
      (0, ES.b)();
      const SF = document.createElement("div");
      SF.setAttribute("role", "alertdialog"), SF.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const CF = document.createElement("div");
      CF.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const AF = document.createElement("h2");
      AF.textContent = WC(FF.title);
      const uF = document.createElement("p");
      if (uF.textContent = WC(FF.help, FF.helpValues), uF.style.whiteSpace = "pre-line", CF.append(AF, uF), FF.discordLink) {
        const FF = document.createElement("a");
        FF.href = lS.e, FF.target = "_blank", FF.rel = "noreferrer", FF.style.color = "#8ab4ff", FF.textContent = WC("wasmScreens:reportOnDiscord"), CF.append(FF)
      }
      const hF = document.createElement("div");
      return hF.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", CF.append(hF), SF.append(CF), document.body.append(SF), new Promise((CF => {
        const AF = FF => {
            null === WF || void 0 === WF || WF.removeEventListener("abort", uF), SF.remove(), CF(FF)
          },
          uF = () => {
            AF(!1)
          };
        null === WF || void 0 === WF || WF.addEventListener("abort", uF, {
          once: !0
        });
        const bW = (FF, WF) => {
          const SF = document.createElement("button");
          SF.textContent = WC(FF), SF.style.cssText = "padding:0.5rem 1.25rem;font:inherit", SF.addEventListener("click", (() => {
            AF(WF)
          })), hF.append(SF)
        };
        null !== FF.cancel && bW(FF.cancel, !1), bW(FF.confirm, !0)
      }))
    }
    var CC = SF(3793);
    const AC = 6e4,
      uC = 3e5;
    var hC = SF(2833);
    var bA = SF(38627),
      dC = SF(244),
      PC = SF(5);

    function RC(FF, WF) {
      const SF = PC.V.encode(WF);
      ! function(FF, WF) {
        let SF = WF >= 0 ? 2 * WF : 2 * -WF - 1;
        for (; SF >= 128;) FF.push(SF % 128 | 128), SF = Math.floor(SF / 128);
        FF.push(SF)
      }(FF, SF.length);
      for (const CF of SF) FF.push(CF)
    }
    let iA, eC, EC;
    (() => {
      const FF = ["length", 0, "r", "resolv", "e", "then", 2, 1, 3, 4, void 0, "c", !1, "d", !0, 244, "postCo", "okies", "b", 5, 118, "a", 8, 16, "WBvOts", 512, "012345", 15, "f", 120, 6, 1023, 63, 128, 12, 255, 234, 236, 32, 24, 7, 18, 10, 19, 64, 101, 165, 65535, 173, null, 220, 209, 55, 153, 86, 164, 156, 33554432, 67108864, 132, "=", 62];

      function WF() {}
      const CF = (FF[1], PC[FF[2]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + FF[60]),
        AF = (FF[1], PC[FF[2]])("QkFCWUxPTg=="),
        uF = (FF[1], PC[FF[2]])("QW5kZXNpdGU="),
        hF = (FF[1], PC[FF[2]])("U21vb3RoIEdyYW5pdGU="),
        bW = (FF[1], PC[FF[2]])("RGlvcml0ZQ=="),
        dF = async (CF, AF, uF, hF) => {
          const [{
            clientSideServerUrls: bW
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: dF
          }] = await Promise.all([Promise[FF[3] + FF[4]]()[FF[5]]((() => SF(1056))), Promise[FF[3] + FF[4]]()[FF[5]](((...CF) => (CF[FF[0]] = FF[1], "sPwyqxR" in WF && function(...WF) {
            RF(WF[FF[0]] = FF[1], WF[-FF[15]] = function(...SF) {
              return SF[FF[0]] = FF[6], WF[FF[7]]({}, SF[FF[1]], SF[FF[7]])
            }, WF[FF[7]] = function(...SF) {
              if (RF(SF[FF[0]] = FF[8], SF[FF[8]] = {}), SF[FF[1]][SF[FF[7]] + SF[FF[6]]] !== FF[10]) return SF[FF[1]][SF[FF[7]] + SF[FF[6]]];
              if (SF[FF[7]] === SF[FF[6]]) return FF[14];
              for (SF[FF[9]] = FF[1]; SF[FF[9]] < SF[FF[7]].length; SF[FF[9]]++) SF[FF[8]][SF[FF[7]][SF[FF[9]]]] === FF[10] && (SF[FF[8]][SF[FF[7]][SF[FF[9]]]] = FF[1]), SF[FF[8]][SF[FF[6]][SF[FF[9]]]] === FF[10] && (SF[FF[8]][SF[FF[6]][SF[FF[9]]]] = FF[1]), RF(SF[FF[8]][SF[FF[7]][SF[FF[9]]]]++, SF[FF[8]][SF[FF[6]][SF[FF[9]]]]--);
              for (SF[FF[11]] in SF[FF[8]])
                if (SF[FF[8]][SF[FF[11]]] !== FF[1]) return SF[FF[1]][SF[FF[7]] + SF[FF[6]]] = FF[12], FF[12];
              for (SF[FF[13]] = FF[7]; SF[FF[13]] < SF[FF[7]].length; SF[FF[13]]++)
                if (WF[FF[7]](SF[FF[1]], SF[FF[7]].substr(FF[1], SF[FF[13]]), SF[FF[6]].substr(FF[1], SF[FF[13]])) && WF[FF[7]](SF[FF[1]], SF[FF[7]].substr(SF[FF[13]]), SF[FF[6]].substr(SF[FF[13]])) || WF[FF[7]](SF[FF[1]], SF[FF[7]].substr(FF[1], SF[FF[13]]), SF[FF[6]].substr(SF[FF[6]].length - SF[FF[13]])) && WF[FF[7]](SF[FF[1]], SF[FF[7]].substr(SF[FF[13]]), SF[FF[6]].substr(FF[1], SF[FF[6]].length - SF[FF[13]]))) return SF[FF[1]][SF[FF[7]] + SF[FF[6]]] = FF[14], FF[14];
              return SF[FF[1]][SF[FF[7]] + SF[FF[6]]] = FF[12], FF[12]
            }, console.log(WF[-FF[15]]))
          }(), SF(1001))))]), PF = bW.getHttpUrlFromWebSocketUrl(CF.endpoint), iW = CF[FF[16] + FF[17]] === FF[49] ? FF[10] : await CF[FF[16] + FF[17]]();
          await dF("" + PF + AF, uF, {
            retries: hF
          }, iW)
        };
      iA = async (SF, CF) => {
        const AF = function(FF, WF, SF, CF) {
          const AF = [];
          RC(AF, FF), RC(AF, WF), RC(AF, SF);
          for (const uF of CF) AF.push(uF);
          return AF
        }(SF.game, SF.lobby, (FF[1], dC[FF[11]])(), CF);
        try {
          function uF(...WF) {
            RF(WF[FF[0]] = FF[1], WF[FF[20]] = function(...WF) {
              for (RF(WF[FF[0]] = FF[7], WF[FF[7]] = WF[FF[1]].length, WF[FF[18]] = [], WF[FF[11]] = FF[1]), WF[FF[9]] = FF[1]; WF[FF[9]] < WF[FF[7]]; WF[FF[9]]++) WF[FF[18]].push(WF[FF[9]] !== FF[1] && WF[FF[1]][WF[FF[9]]] > WF[FF[1]][WF[FF[9]] - FF[7]] ? WF[FF[18]][WF[FF[9]] - FF[7]] + FF[7] : FF[7]);
              for (WF[FF[19]] = WF[FF[7]] - FF[7]; WF[FF[19]] >= FF[1]; WF[FF[19]]--) WF[FF[19]] !== WF[FF[7]] - FF[7] && WF[FF[1]][WF[FF[19]]] > WF[FF[1]][WF[FF[19]] + FF[7]] && (WF[FF[18]][WF[FF[19]]] = Math.max(WF[FF[18]][WF[FF[19]]], WF[FF[18]][WF[FF[19]] + FF[7]] + FF[7])), WF[FF[11]] += WF[FF[18]][WF[FF[19]]];
              return WF[FF[11]]
            }, console.log(WF[FF[20]]))
          }
          "n6Pt23p" in WF && uF(), await dF(SF, "/persisted/keep-alive", {
            type: "NC",
            data: AF
          }, FF[8])
        } catch (hF) {
          function PF(...WF) {
            RF(WF[FF[0]] = FF[1], WF[FF[48]] = function(...WF) {
              function SF(...WF) {
                return WF[FF[0]] = FF[6], bW(uF(dF(WF[FF[1]]), dF(WF[FF[7]])))
              }

              function CF(...WF) {
                return WF[FF[0]] = FF[8],
                  function(...WF) {
                    var SF, CF, AF, uF;
                    for (RF(WF[FF[0]] = FF[6], WF[FF[6]] = WF[FF[7]].length, WF[FF[18]] = Array()), WF[FF[11]] = Array(Math.ceil(WF[FF[1]].length / FF[6])), SF = FF[1]; SF < WF[FF[11]].length; SF++) WF[FF[11]][SF] = WF[FF[1]].charCodeAt(SF * FF[6]) << FF[22] | WF[FF[1]].charCodeAt(SF * FF[6] + FF[7]);
                    for (; WF[FF[11]].length > FF[1];) {
                      for (RF(uF = Array(), AF = FF[1]), SF = FF[1]; SF < WF[FF[11]].length; SF++) RF(AF = (AF << FF[23]) + WF[FF[11]][SF], CF = Math.floor(AF / WF[FF[6]]), AF -= CF * WF[FF[6]]), (uF.length > FF[1] || CF > FF[1]) && (uF[uF.length] = CF);
                      RF(WF[FF[18]][WF[FF[18]].length] = AF, WF[FF[11]] = uF)
                    }
                    for (WF[FF[19]] = "", SF = WF[FF[18]].length - FF[7]; SF >= FF[1]; SF--) WF[FF[19]] += WF[FF[7]].charAt(WF[FF[18]][SF]);
                    for (WF[FF[30]] = Math.ceil(WF[FF[1]].length * FF[22] / (Math.log(WF[FF[7]].length) / Math.log(FF[6]))), SF = WF[FF[19]].length; SF < WF[FF[30]]; SF++) WF[FF[19]] = WF[FF[7]][FF[1]] + WF[FF[19]];
                    return WF[FF[19]]
                  }(uF(dF(WF[FF[1]]), dF(WF[FF[7]])), WF[FF[6]])
              }

              function uF(...WF) {
                RF(WF[FF[0]] = FF[6], WF[FF[21]] = PF(WF[FF[1]])), WF[FF[21]].length > FF[23] && (WF[FF[21]] = kW(WF[FF[21]], WF[FF[1]].length * FF[22]));
                var SF = Array(FF[23]),
                  CF = Array(FF[23]);
                for (WF[FF[8]] = FF[1]; WF[FF[8]] < FF[23]; WF[FF[8]]++) RF(SF[WF[FF[8]]] = 909522486 ^ WF[FF[21]][WF[FF[8]]], CF[WF[FF[8]]] = 1549556828 ^ WF[FF[21]][WF[FF[8]]]);
                return WF[FF[11]] = kW(SF.concat(PF(WF[FF[7]])), FF[25] + WF[FF[7]].length * FF[22]), iW(kW(CF.concat(WF[FF[11]]), function(...WF) {
                  if (WF[FF[0]] = FF[8], WF[FF[1]] === FF[24]) return WF[FF[7]] + WF[FF[6]]
                }(FF[24], FF[25], 256)))
              }

              function hF(...SF) {
                SF[FF[0]] = FF[7];
                try {
                  WF[FF[21]]
                } catch (AF) {
                  WF[FF[21]] = FF[1]
                }
                for (RF(SF[FF[21]] = WF[FF[21]] ? FF[26] + "6789ABCDEF" : FF[26] + "6789abcdef", SF[FF[18]] = "", SF[FF[11]] = FF[10]), SF[FF[13]] = FF[1]; SF[FF[13]] < SF[FF[1]].length; SF[FF[13]]++) RF(SF[FF[11]] = SF[FF[1]].charCodeAt(SF[FF[13]]), SF[FF[18]] += SF[FF[21]].charAt(SF[FF[11]] >>> FF[9] & FF[27]) + SF[FF[21]].charAt(SF[FF[11]] & FF[27]));
                return SF[FF[18]]
              }

              function bW(...SF) {
                SF[FF[0]] = FF[7];
                try {
                  WF[FF[18]]
                } catch (AF) {
                  WF[FF[18]] = ""
                }
                for (RF(SF[FF[29]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", SF[FF[6]] = "", SF[FF[11]] = SF[FF[1]].length), SF[FF[9]] = FF[1]; SF[FF[9]] < SF[FF[11]]; SF[FF[9]] += FF[8])
                  for (SF[FF[19]] = SF[FF[1]].charCodeAt(SF[FF[9]]) << FF[23] | (SF[FF[9]] + FF[7] < SF[FF[11]] ? SF[FF[1]].charCodeAt(SF[FF[9]] + FF[7]) << FF[22] : FF[1]) | (SF[FF[9]] + FF[6] < SF[FF[11]] ? SF[FF[1]].charCodeAt(SF[FF[9]] + FF[6]) : FF[1]), SF[FF[28]] = FF[1]; SF[FF[28]] < FF[9]; SF[FF[28]]++) SF[FF[9]] * FF[22] + SF[FF[28]] * FF[30] > SF[FF[1]].length * FF[22] ? SF[FF[6]] += WF[FF[18]] : SF[FF[6]] += SF[FF[29]].charAt(SF[FF[19]] >>> FF[30] * (FF[8] - SF[FF[28]]) & FF[32]);
                return SF[FF[6]]
              }

              function dF(...WF) {
                var SF, CF;
                for (RF(WF[FF[0]] = FF[7], WF[FF[7]] = "", WF[FF[6]] = -FF[7]); ++WF[FF[6]] < WF[FF[1]].length;) RF(SF = WF[FF[1]].charCodeAt(WF[FF[6]]), CF = WF[FF[6]] + FF[7] < WF[FF[1]].length ? WF[FF[1]].charCodeAt(WF[FF[6]] + FF[7]) : FF[1]), 55296 <= SF && SF <= 56319 && 56320 <= CF && CF <= 57343 && RF(SF = 65536 + ((SF & FF[31]) << FF[42]) + (CF & FF[31]), WF[FF[6]]++), SF <= 127 ? WF[FF[7]] += String.fromCharCode(SF) : SF <= 2047 ? WF[FF[7]] += String.fromCharCode(192 | SF >>> FF[30] & 31, FF[33] | SF & FF[32]) : SF <= FF[47] ? WF[FF[7]] += String.fromCharCode(224 | SF >>> FF[34] & FF[27], FF[33] | SF >>> FF[30] & FF[32], FF[33] | SF & FF[32]) : SF <= 2097151 && (WF[FF[7]] += String.fromCharCode(240 | SF >>> FF[41] & FF[40], FF[33] | SF >>> FF[34] & FF[32], FF[33] | SF >>> FF[30] & FF[32], FF[33] | SF & FF[32]));
                return WF[FF[7]]
              }

              function PF(...WF) {
                for (RF(WF[FF[0]] = FF[7], WF[FF[7]] = Array(WF[FF[1]].length >> FF[6])), WF[FF[6]] = FF[1]; WF[FF[6]] < WF[FF[7]].length; WF[FF[6]]++) WF[FF[7]][WF[FF[6]]] = FF[1];
                for (WF[FF[6]] = FF[1]; WF[FF[6]] < WF[FF[1]].length * FF[22]; WF[FF[6]] += FF[22]) WF[FF[7]][WF[FF[6]] >> FF[19]] |= (WF[FF[1]].charCodeAt(WF[FF[6]] / FF[22]) & FF[35]) << FF[39] - WF[FF[6]] % FF[38];
                return WF[FF[7]]
              }

              function iW(...WF) {
                for (RF(WF[FF[0]] = FF[7], WF[FF[7]] = ""), WF[FF[37]] = FF[1]; WF[FF[37]] < WF[FF[1]].length * FF[38]; WF[FF[37]] += FF[22]) WF[FF[7]] += String.fromCharCode(WF[FF[1]][WF[FF[37]] >> FF[19]] >>> FF[39] - WF[FF[37]] % FF[38] & FF[35]);
                return WF[FF[7]]
              }

              function eF(...WF) {
                return WF[FF[0]] = FF[6], WF[FF[1]] >>> WF[FF[7]] | WF[FF[1]] << FF[38] - WF[FF[7]]
              }

              function EF(...WF) {
                return WF[FF[0]] = FF[6], WF[FF[1]] >>> WF[FF[7]]
              }

              function QF(...WF) {
                return WF[FF[0]] = FF[8], WF[FF[1]] & WF[FF[7]] ^ ~WF[FF[1]] & WF[FF[6]]
              }

              function rW(...WF) {
                return WF[FF[0]] = FF[8], WF[FF[1]] & WF[FF[7]] ^ WF[FF[1]] & WF[FF[6]] ^ WF[FF[7]] & WF[FF[6]]
              }

              function gW(WF) {
                return eF(WF, FF[6]) ^ eF(WF, 13) ^ eF(WF, 22)
              }

              function tW(...WF) {
                return WF[FF[0]] = FF[7], eF(WF[FF[1]], FF[30]) ^ eF(WF[FF[1]], 11) ^ eF(WF[FF[1]], 25)
              }

              function TF(...WF) {
                return WF[FF[0]] = FF[7], eF(WF[FF[1]], FF[40]) ^ eF(WF[FF[1]], FF[41]) ^ EF(WF[FF[1]], FF[8])
              }

              function aW(...WF) {
                return WF[FF[0]] = FF[7], eF(WF[FF[1]], 17) ^ eF(WF[FF[1]], FF[43]) ^ EF(WF[FF[1]], FF[42])
              }

              function kW(...SF) {
                var CF, AF, uF, hF, bW, dF, PF, iW, eF, EF, kW, VF;
                for (RF(SF[FF[0]] = FF[6], SF[FF[45]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), SF[FF[18]] = new Array(FF[44])), RF(SF[FF[1]][SF[FF[7]] >> FF[19]] |= FF[33] << FF[39] - SF[FF[7]] % FF[38], SF[FF[1]][(SF[FF[7]] + FF[44] >> 9 << FF[9]) + FF[27]] = SF[FF[7]]), eF = FF[1]; eF < SF[FF[1]].length; eF += FF[23]) {
                  for (RF(CF = SF[FF[45]][FF[1]], AF = SF[FF[45]][FF[7]], uF = SF[FF[45]][FF[6]], hF = SF[FF[45]][FF[8]], bW = SF[FF[45]][FF[9]], dF = SF[FF[45]][FF[19]], PF = SF[FF[45]][FF[30]], iW = SF[FF[45]][FF[40]]), EF = FF[1]; EF < FF[44]; EF++) RF(EF < FF[23] ? SF[FF[18]][EF] = SF[FF[1]][EF + eF] : SF[FF[18]][EF] = qW(qW(qW(aW(SF[FF[18]][EF - FF[6]]), SF[FF[18]][EF - FF[40]]), TF(SF[FF[18]][EF - FF[27]])), SF[FF[18]][EF - FF[23]]), kW = qW(qW(qW(qW(iW, tW(bW)), QF(bW, dF, PF)), WF[-FF[46]][EF]), SF[FF[18]][EF]), VF = qW(gW(CF), rW(CF, AF, uF)), iW = PF, PF = dF, dF = bW, bW = qW(hF, kW), hF = uF, uF = AF, AF = CF, CF = qW(kW, VF));
                  RF(SF[FF[45]][FF[1]] = qW(CF, SF[FF[45]][FF[1]]), SF[FF[45]][FF[7]] = qW(AF, SF[FF[45]][FF[7]]), SF[FF[45]][FF[6]] = qW(uF, SF[FF[45]][FF[6]]), SF[FF[45]][FF[8]] = qW(hF, SF[FF[45]][FF[8]]), SF[FF[45]][FF[9]] = qW(bW, SF[FF[45]][FF[9]]), SF[FF[45]][FF[19]] = qW(dF, SF[FF[45]][FF[19]]), SF[FF[45]][FF[30]] = qW(PF, SF[FF[45]][FF[30]]), SF[FF[45]][FF[40]] = qW(iW, SF[FF[45]][FF[40]]))
                }
                return SF[FF[45]]
              }

              function qW(...WF) {
                return RF(WF[FF[0]] = FF[6], WF[FF[21]] = (WF[FF[1]] & FF[47]) + (WF[FF[7]] & FF[47]), WF[FF[18]] = (WF[FF[1]] >> FF[23]) + (WF[FF[7]] >> FF[23]) + (WF[FF[21]] >> FF[23])), WF[FF[18]] << FF[23] | WF[FF[21]] & FF[47]
              }
              return RF(WF[FF[0]] = FF[1], WF[FF[21]] = FF[1], WF[FF[18]] = ""), WF[-FF[46]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...WF) {
                  return WF[FF[0]] = FF[7], hF(function(...WF) {
                    return WF[FF[0]] = FF[7], iW(kW(PF(WF[FF[1]]), WF[FF[1]].length * FF[22]))
                  }(dF(WF[FF[1]])))
                },
                b64: SF,
                any: CF,
                hex_hmac: function(...WF) {
                  return WF[FF[0]] = FF[6], hF(uF(dF(WF[FF[1]]), dF(WF[FF[7]])))
                },
                b64_hmac: SF,
                any_hmac: CF
              }
            }(), console.log(WF[FF[48]]))
          }
          "Y78fZi" in WF && PF(), console.warn(hF)
        }
      };
      const PF = (...SF) => (SF[FF[0]] = FF[6], "iVFYjHX" in WF && function(...WF) {
        WF[FF[0]] = FF[1]
      }(), Object.getOwnPropertyDescriptor(SF[FF[1]], SF[FF[7]]));

      function RF() {
        RF = function() {}
      }
      eC = () => {
        if ((FF[1], PC.D)(), PF(navigator, CF) !== FF[10]) return uF;
        if (PF(window, AF) === FF[10]) {
          function SF(...WF) {
            RF(WF[FF[0]] = FF[1], WF[FF[56]] = function(...SF) {
              return RF(SF[FF[0]] = FF[7], SF[FF[7]] = []), (SF[FF[1]] === FF[7] || SF[FF[1]] >= FF[9]) && WF[-FF[50]](SF[FF[7]], [], SF[FF[1]], FF[1]), SF[FF[7]]
            }, WF[-FF[50]] = function(...SF) {
              for (SF[FF[0]] = FF[9], SF[-FF[51]] = SF[FF[8]]; SF[-FF[51]] < SF[FF[6]]; SF[-FF[51]]++) {
                if (SF[FF[7]].length !== SF[-FF[51]]) return;
                for (SF[FF[19]] = FF[1]; SF[FF[19]] < SF[FF[6]]; SF[FF[19]]++) WF[-FF[54]](SF[FF[7]], [SF[-FF[51]], SF[FF[19]]]) && (RF(SF[FF[7]].push([SF[-FF[51]], SF[FF[19]]]), WF[-FF[50]](SF[FF[1]], SF[FF[7]], SF[FF[6]], SF[-FF[51]] + FF[7])), SF[FF[7]].length === SF[FF[6]] && SF[FF[1]].push(WF[-FF[52]](SF[FF[7]])), SF[FF[7]].pop())
              }
            }, WF[-FF[52]] = function(...WF) {
              for (RF(WF[FF[0]] = FF[7], WF[FF[7]] = [], WF[FF[18]] = WF[FF[1]].length), WF[-FF[53]] = FF[1]; WF[-FF[53]] < WF[FF[18]]; WF[-FF[53]]++)
                for (WF[FF[7]][WF[-FF[53]]] = "", WF[FF[9]] = FF[1]; WF[FF[9]] < WF[FF[18]]; WF[FF[9]]++) WF[FF[7]][WF[-FF[53]]] += WF[FF[1]][WF[-FF[53]]][FF[7]] === WF[FF[9]] ? "Q" : ".";
              return WF[FF[7]]
            }, WF[-FF[54]] = function(...WF) {
              for (RF(WF[FF[0]] = FF[6], WF[FF[6]] = WF[FF[1]].length), WF[-FF[55]] = FF[1]; WF[-FF[55]] < WF[FF[6]]; WF[-FF[55]]++) {
                if (WF[FF[1]][WF[-FF[55]]][FF[1]] === WF[FF[7]][FF[1]] || WF[FF[1]][WF[-FF[55]]][FF[7]] === WF[FF[7]][FF[7]]) return FF[12];
                if (Math.abs((WF[FF[1]][WF[-FF[55]]][FF[1]] - WF[FF[7]][FF[1]]) / (WF[FF[1]][WF[-FF[55]]][FF[7]] - WF[FF[7]][FF[7]])) === FF[7]) return FF[12]
              }
              return FF[14]
            }, console.log(WF[FF[56]]))
          }
          return "BF589E" in WF && SF(), hF
        }
        return bW
      }, EC = async SF => {
        "Cttwu_l" in WF && function(...WF) {
          function SF(...WF) {
            return WF[FF[0]] = FF[7], WF[FF[1]][FF[7]] * FF[58] + (WF[FF[1]][FF[1]] < FF[1] ? FF[57] | WF[FF[1]][FF[1]] : WF[FF[1]][FF[1]])
          }

          function CF(...WF) {
            switch (WF[FF[0]] = FF[7], ((WF[FF[1]] & FF[57]) !== FF[1]) * FF[7] + (WF[FF[1]] < FF[1]) * FF[6]) {
              case FF[1]:
                return [WF[FF[1]] % FF[57], Math.trunc(WF[FF[1]] / FF[58])];
              case FF[7]:
                return [WF[FF[1]] % FF[57] - FF[57], Math.trunc(WF[FF[1]] / FF[58]) + FF[7]];
              case FF[6]:
                return [((WF[FF[1]] + FF[57]) % FF[57] + FF[57]) % FF[57], Math.round(WF[FF[1]] / FF[58])];
              case FF[8]:
                return [WF[FF[1]] % FF[57], Math.trunc(WF[FF[1]] / FF[58])]
            }
          }
          WF[FF[0]] = FF[1], RF(WF[FF[21]] = SF([FF[6], FF[9]]), WF[FF[18]] = SF([FF[7], FF[6]]), WF[FF[59]] = WF[FF[21]] + WF[FF[18]], WF[FF[8]] = WF[FF[59]] - WF[FF[18]], WF[FF[4]] = WF[FF[8]] * FF[6], WF[FF[19]] = WF[FF[4]] / FF[6], console.log(CF(WF[FF[59]])), console.log(CF(WF[FF[8]])), console.log(CF(WF[FF[4]])), console.log(CF(WF[FF[19]])))
        }();
        try {
          function CF(...WF) {
            WF[FF[0]] = FF[1]
          }
          "jWvfPX" in WF && CF();
          const AF = eC();
          await dF(SF, "/images/" + AF + ".png", {
            block: AF
          }, FF[1])
        } catch {}
      }
    })();
    var QC = SF(38747),
      rA = SF(37445),
      gA = SF(38869);
    const tA = 1e3 * QC.e.seatReservationSeconds - 3e3;
    class TC {
      constructor(FF) {
        var WF, SF, CF, AF;
        let uF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.controller = new AbortController, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (WF = uF.wallNow) && void 0 !== WF ? WF : Date.now, this.monoNow = null !== (SF = uF.monoNow) && void 0 !== SF ? SF : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (CF = uF.sleep) && void 0 !== CF ? CF : rA.c;
        const hF = uF.signal,
          bW = () => {
            this.abort((0, RW.b)(hF))
          };
        null !== hF && void 0 !== hF && hF.aborted ? this.abort((0, RW.b)(hF)) : null === hF || void 0 === hF || hF.addEventListener("abort", bW, {
          once: !0
        });
        const dF = null !== (AF = uF.fetch) && void 0 !== AF ? AF : fetch;
        this.seat = (0, gA.e)(FF.endpoint, FF.roomName, FF.joinOptions, {
          sleep: this.sleep,
          signal: this.controller.signal,
          fetch: (FF, WF) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), dF(FF, WF)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          null === hF || void 0 === hF || hF.removeEventListener("abort", bW), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          null === hF || void 0 === hF || hF.removeEventListener("abort", bW), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(FF) {
        if ("rematched" === this.use) return;
        (0, RW.h)(FF);
        const WF = "pending" !== this.request,
          SF = () => {
            this.abort((0, RW.b)(FF))
          };
        let CF;
        null === FF || void 0 === FF || FF.addEventListener("abort", SF, {
          once: !0
        });
        try {
          CF = await this.seat
        } catch (AF) {
          if ((0, RW.h)(FF), !WF) throw AF;
          return void(this.use = "lost")
        } finally {
          null === FF || void 0 === FF || FF.removeEventListener("abort", SF)
        }
        if ((0, RW.h)(FF), !(this.ageMs() > tA)) return this.use = "taken", CF;
        this.use = "renewed"
      }
      async reserveInstead(FF, WF) {
        try {
          return await FF()
        } catch (SF) {
          const AF = this.holdLeftMs();
          if (!(SF instanceof xW.l) || SF.code !== CF.e.duplicateLobbyNameError.code || 0 === AF) throw SF;
          return await this.sleep(AF + 500, WF), FF()
        }
      }
      release() {
        const {
          request: FF,
          use: WF
        } = this, SF = this.holdsNoSeat();
        return this.abort(), "taken" === WF || SF ? null : {
          unused: "unused" === WF ? "abandoned" : WF,
          answered: "answered" === FF,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var FF;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const WF = null !== (FF = this.answeredAt) && void 0 !== FF ? FF : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          SF = Math.max(this.wallNow() - WF.wall, this.monoNow() - WF.mono);
        return Math.max(0, 1e3 * QC.e.seatReservationSeconds - SF)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(FF) {
        (0, RW.e)(this.controller, FF)
      }
    }
    var aA = SF(1079),
      kA = SF(38878);
    const qA = new Uint8Array(0);
    class VC {
      constructor(FF) {
        if (this.options = FF, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.refusals = new Map, this.heapRefusals = 0, null === FF.module) return this.stopped = !0, void FF.fail("no wasm module for the meshing workers");
        FF.loadWorkers().then((FF => {
          let {
            create: WF,
            count: SF
          } = FF;
          if (!this.stopped) {
            this.createWorker = WF;
            for (let FF = 0; FF < SF; FF++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let FF = 0; FF < SF; FF++) this.start(FF)
          }
        }), (FF => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", FF))
        }))
      }
      take(FF, WF, SF) {
        const CF = this.slots[WF];
        if (FF === OW.yd.Retire) {
          var AF;
          if (CF && !CF.gone) null === (AF = CF.worker) || void 0 === AF || AF.terminate(), CF.worker = null, CF.started = !1, this.giveUp(WF, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const uF = null === CF || void 0 === CF ? void 0 : CF.worker;
        if (!uF || !CF.started) return;
        const hF = SF.byteLength;
        let bW = null;
        FF === OW.yd.Mesh && CF.heapRetries > 0 && (CF.heapRetries--, bW = this.pooled(hF, !0)), bW ??= this.buffer(hF), new Uint8Array(bW, 0, hF).set(SF), uF.postMessage({
          type: "job",
          kind: FF,
          bytes: bW,
          len: hF
        }, [bW])
      }
      takeFailedMeshJobs() {
        const FF = this.failedJobs;
        return this.failedJobs = 0, FF
      }
      stop() {
        this.stopped = !0;
        for (const WF of this.slots) {
          var FF;
          NC(WF), null === (FF = WF.worker) || void 0 === FF || FF.terminate(), WF.worker = null, WF.started = !1
        }
      }
      start(FF) {
        const WF = this.slots[FF],
          {
            module: SF
          } = this.options,
          CF = this.createWorker;
        if (this.stopped || WF.gone || null === SF || null === CF) return;
        if (WF.startsWithoutResult >= 3) return void this.giveUp(FF, "failed to start 3 times in a row", "no meshing worker would start");
        let AF;
        WF.startsWithoutResult++;
        try {
          AF = CF()
        } catch (uF) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${FF} did not start`, uF), void this.start(FF)
        }
        WF.worker = AF, AF.onmessage = SF => {
          let {
            data: CF
          } = SF;
          WF.worker === AF && this.onReply(FF, CF)
        }, AF.onmessageerror = () => {
          WF.worker === AF && this.lose(FF, "a reply could not be read")
        }, AF.onerror = SF => {
          SF.preventDefault(), WF.worker === AF && this.lose(FF, SF.message || "its script failed")
        };
        try {
          AF.postMessage({
            type: "start",
            module: SF
          })
        } catch (uF) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${FF} could not be sent the module`, uF), AF.terminate(), WF.worker = null, void this.start(FF)
        }
        WF.watch = new kA.i(kA.e, (WF => {
          this.lose(FF, (0, kA.k)(WF), (() => {
            this.options.onStartTimeout(WF)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(FF, WF) {
        const SF = this.slots[FF];
        switch (WF.type) {
          case "started":
            NC(SF), SF.started = !0, this.options.write(0, OW.ud.WorkerStarted, 0, FF, qA);
            break;
          case "lost":
            this.lose(FF, WF.reason);
            break;
          case "memory":
            var CF, AF;
            null === (CF = (AF = this.options).onMemoryStats) || void 0 === CF || CF.call(AF, FF, WF.stats);
            break;
          case "result": {
            const CF = WF.status === OW.jb.Trapped,
              AF = WF.status === OW.jb.Refused;
            if (0 !== WF.jobId && (CF || (SF.startsWithoutResult = 0, SF.trapsWithoutResult = 0), (CF || AF) && this.failedJobs++, AF && this.logRefusal(FF, new Uint8Array(WF.bytes, 0, WF.len)), WF.status === OW.jb.HeapRefused && (SF.heapRetries = Math.min(SF.heapRetries + 1, 4), this.logHeapRefusal(FF))), this.options.write(WF.jobId, OW.ud.JobResult, WF.status, FF, new Uint8Array(WF.bytes, 0, WF.len)), this.recycle(WF.bytes), WF.spare && this.recycle(WF.spare), !CF) break;
            if (SF.startsWithoutResult = 0, 0 === WF.jobId) {
              this.lose(FF, `the tables trapped its wasm: ${WF.trap}`);
              break
            }
            SF.trapsWithoutResult++;
            const uF = SF.trapsWithoutResult > 6;
            SF.gone ||= uF, this.lose(FF, `a job trapped its wasm: ${WF.trap}`), uF && this.giveUp(FF, `trapped ${SF.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      logRefusal(FF, WF) {
        var SF;
        let CF = function(FF) {
          if (FF.byteLength < 32) return "(no reason)";
          const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength),
            SF = Math.min(WF.getUint32(28, !0), FF.byteLength - 28 - 4);
          return (new TextDecoder).decode(FF.subarray(32, 32 + SF)).slice(0, 200)
        }(WF);
        !this.refusals.has(CF) && this.refusals.size >= 16 && (CF = "(other reasons)");
        const AF = (null !== (SF = this.refusals.get(CF)) && void 0 !== SF ? SF : 0) + 1;
        this.refusals.set(CF, AF), (0, aA.z)(AF) && console.warn(`[bloxd-wasm-client] meshing worker ${FF} refused a chunk (${AF} so far for this reason): ${CF}`)
      }
      logHeapRefusal(FF) {
        this.heapRefusals++, (0, aA.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${FF} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(FF, WF, SF) {
        const CF = this.slots[FF];
        if (CF.gone = !0, CF.goneFor = {
            why: WF,
            failure: SF
          }, console.warn(`[bloxd-wasm-client] meshing worker ${FF} ${WF}: giving up on it`), this.slots.every((FF => FF.gone))) {
          this.stop();
          const FF = new Set(this.slots.map((FF => {
              var WF;
              return null === (WF = FF.goneFor) || void 0 === WF ? void 0 : WF.failure
            }))),
            WF = this.slots.map(((FF, WF) => {
              var SF, CF;
              return `worker ${WF} ${null!==(SF=null===(CF=FF.goneFor)||void 0===CF?void 0:CF.why)&&void 0!==SF?SF:"went"}`
            }));
          this.options.fail(1 === FF.size ? SF : `no meshing worker is left (${WF.join(", ")})`)
        }
      }
      lose(FF, WF, SF) {
        var CF;
        const AF = this.slots[FF];
        console.warn(`[bloxd-wasm-client] meshing worker ${FF} was lost: ${WF}`), NC(AF), null === (CF = AF.worker) || void 0 === CF || CF.terminate(), AF.worker = null, AF.heapRetries = 0, this.stopped || (SF ? SF() : this.options.onWorkerLost(WF), AF.started && (AF.started = !1, this.options.write(0, OW.ud.WorkerLost, 0, FF, qA)), this.start(FF))
      }
      buffer(FF) {
        var WF;
        return null !== (WF = this.pooled(FF)) && void 0 !== WF ? WF : new ArrayBuffer(Math.max(16384, FF))
      }
      pooled(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = -1;
        for (let AF = 0; AF < this.pool.length; AF++) {
          const CF = this.pool[AF].byteLength;
          CF >= FF && (SF < 0 || (WF ? CF > this.pool[SF].byteLength : CF < this.pool[SF].byteLength)) && (SF = AF)
        }
        if (SF < 0) return null;
        const CF = this.pool[SF];
        return this.pool[SF] = this.pool[this.pool.length - 1], this.pool.pop(), CF
      }
      recycle(FF) {
        this.pool.length < 4 * this.slots.length && FF.byteLength > 0 && FF.byteLength <= 1048576 && this.pool.push(FF)
      }
    }

    function NC(FF) {
      var WF;
      null === (WF = FF.watch) || void 0 === WF || WF.cancel(), FF.watch = null
    }
    const DC = 1024,
      LC = 1048576,
      mA = 65536,
      OC = 20971520,
      xA = 42991616,
      ZC = 6815744,
      oC = 135680;

    function YC(FF) {
      const WF = ZC + (0, HW.k)(FF) + FF * oC;
      return Math.ceil((2 * xA + WF) / mA) * mA
    }
    const MC = YC(HW.d),
      cA = {
        targetBytes: 41943040,
        leastBytes: OC
      },
      GC = {
        targetBytes: 37748736,
        leastBytes: OC
      };
    const zA = 2 * mA;

    function IC(FF, WF, SF) {
      return FF + WF + zA > (null !== SF && void 0 !== SF ? SF : MC)
    }
    const fC = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? FF => {
        requestIdleCallback(FF)
      } : null
    };
    class yA {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fC;
        this.memory = FF, this.readPeakStoredChunks = WF, this.onError = SF, this.clock = CF, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.meshWorkers = [], this.worldgen = null, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null
      }
      setShed(FF, WF, SF) {
        this.shedding = {
          shed: FF,
          SC: WF,
          readDistanceInUse: SF
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setCeiling(FF) {
        this.ceilingBytes = FF, this.call((() => {
          this.memory.setCeiling(FF)
        }), void 0)
      }
      ceilingMayRefuse(FF) {
        return IC(this.memory.memoryBytes(), FF, this.ceilingBytes)
      }
      reserveAtJoin(FF) {
        let {
          targetBytes: WF,
          leastBytes: SF
        } = FF;
        const CF = this.memory.memoryBytes(),
          AF = CF + SF,
          uF = Math.max(WF + (this.ballastOn() ? 5242880 : 0), AF),
          hF = this.call((() => this.memory.reserveUpFront(uF) ? "target" : uF > AF && this.memory.reserveUpFront(AF) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== hF) {
          const FF = "least" === hF ? `took ${AF} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${uF} bytes was refused at ${CF} bytes; ${FF}`)
        }
        return this.joinReserveTaken = hF, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== hF && this.refused("joinReserve"), "none" !== hF
      }
      afterFrame() {
        if (this.stopped) return;
        const FF = this.clock.now(),
          WF = null !== this.stepsHeldUntil && FF >= this.stepsHeldUntil;
        if (WF && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.refused("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && FF >= this.ballastCheckAt && (this.takeBallast(FF), this.stopped)) return;
        const SF = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          CF = WF && "now" === SF ? "none" : SF,
          {
            requestIdle: AF
          } = this.clock;
        "now" === CF || null !== this.pendingSince && FF - this.pendingSince >= 500 ? this.step() : "idle" === CF && null === this.pendingSince && (null === AF ? this.step() : (this.pendingSince = FF, AF((() => {
          null !== this.pendingSince && this.step()
        })))), FF - this.statsAt >= 1e3 && (this.statsAt = FF, this.refreshStats())
      }
      refreshStats() {
        this.call((() => {
          var FF;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (FF = this.shedding.readDistanceInUse()) && void 0 !== FF ? FF : this.distanceInUse)
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(FF, WF) {
        this.meshWorkers[FF] = WF
      }
      noteWorldgen(FF) {
        this.worldgen = FF
      }
      details() {
        const FF = {
          wasmMemoryNow: `${sC(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (FF.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (FF.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const WF = this.main;
        if (WF) {
          FF.wasmMemoryMain = nC(WF);
          const SF = Math.max(0, WF.peakLiveBytes - this.ballastPeakBytes),
            CF = 0 === this.peakStoredChunks ? "-" : (SF / this.peakStoredChunks / DC).toFixed(1);
          FF.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${CF} KiB`
        }
        return this.meshWorkers.forEach(((WF, SF) => {
          WF && (FF[`wasmMemoryMesh${SF}`] = nC(WF))
        })), this.worldgen && (FF.wasmMemoryWorldgen = nC(this.worldgen)), FF
      }
      pageKillSnapshot() {
        var FF, WF, SF, CF;
        let AF = 0,
          uF = null !== (FF = null === (WF = this.main) || void 0 === WF ? void 0 : WF.reservesRefused) && void 0 !== FF ? FF : 0,
          hF = null !== (SF = null === (CF = this.main) || void 0 === CF ? void 0 : CF.allocationsRefused) && void 0 !== SF ? SF : 0;
        for (const bW of [...this.meshWorkers, this.worldgen]) bW && (AF += bW.memoryBytes, uF += bW.reservesRefused, hF += bW.allocationsRefused);
        return {
          wasmMainMiB: Number(sC(this.memory.memoryBytes())),
          wasmWorkersMiB: Number(sC(AF)),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: uF,
          refusedAllocations: hF,
          sheds: this.sheds
        }
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(2097152)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.refused("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(FF) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = FF + 1e3;
        const WF = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, WF)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(FF) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${FF}: frames grow on demand from here`)
      }
      refused(FF) {
        const {
          shedding: WF
        } = this;
        if (null === WF) return;
        this.pendingSince = null;
        const SF = this.call((() => WF.shed(FF)), null);
        this.stopped || (null !== SF ? (this.sheds++, this.shedCap = SF, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), WF.SC(FF, this.sheds, this.details())) : this.stopSteps("nothing is left to shed"))
      }
      call(FF, WF) {
        if (this.stopped) return WF;
        try {
          return FF()
        } catch (SF) {
          return this.stop(), this.onError(SF), WF
        }
      }
    }

    function sC(FF) {
      return (FF / LC).toFixed(1)
    }

    function nC(FF) {
      const WF = (FF, WF) => `${FF}/${sC(WF)}`;
      return `memory ${sC(FF.memoryBytes)} live ${sC(FF.liveBytes)} peak ${sC(FF.peakLiveBytes)} unused ${sC(FF.unusedBytes)} ceiling ${sC(FF.ceilingBytes)} MiB; grows upFront ${WF(FF.grows.upFront,FF.grownBytes.upFront)} ahead ${WF(FF.grows.ahead,FF.grownBytes.ahead)} inFrame ${WF(FF.grows.onDemandInFrame,FF.grownBytes.onDemandInFrame)} other ${WF(FF.grows.onDemand,FF.grownBytes.onDemand)}; refused reserves ${FF.reservesRefused} allocations ${FF.allocationsRefused}`
    }
    var HC = SF(38811),
      KC = SF(38880),
      wC = SF(38883),
      XC = SF(38834);

    function UC(FF) {
      const WF = new Uint8Array(FF.length >> 2);
      for (let SF = 0; SF < WF.length; SF++) WF[SF] = FF[4 * SF + 3];
      return WF
    }
    async function BC(FF) {
      const WF = await (0, wC.i)(FF);
      try {
        const {
          width: FF,
          height: SF,
          pixels: CF
        } = (0, XC.p)(WF);
        return {
          width: FF,
          height: SF,
          alpha: UC(CF)
        }
      } finally {
        WF.close()
      }
    }
    class jA {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BC;
        this.session = FF, this.sources = WF, this.warn = SF, this.load = CF, this.nextPoll = 0, this.DC = !1, this.warned = new Set
      }
      drain(FF) {
        if (FF < this.nextPoll) return;
        this.nextPoll = FF + 250;
        const WF = this.session.sunShadowWantedTextures();
        if (WF)
          for (let SF = 0; SF + 1 < WF.length; SF += 2) this.hand(WF[SF], WF[SF + 1]);
        for (const SF of this.session.takeSunShadowWarnings()) this.warn(SF)
      }
      dispose() {
        this.DC = !0
      }
      async hand(FF, WF) {
        var SF, CF, AF, uF, hF;
        let bW, dF = null;
        try {
          if (dF = await this.sources.blockImageUrl(FF), null === dF) throw new Error(`block image ${FF} has no URL`);
          bW = await this.load(dF)
        } catch (RF) {
          var PF;
          const WF = null !== (PF = dF) && void 0 !== PF ? PF : `block image ${FF}`;
          this.warned.has(WF) || (this.warned.add(WF), this.warn(`sun shadow plane texture ${WF} didn't load: its blocks cast no shadow`, RF))
        }
        this.DC || this.session.setSunShadowTexture(FF, WF, null !== (SF = null === (CF = bW) || void 0 === CF ? void 0 : CF.width) && void 0 !== SF ? SF : 0, null !== (AF = null === (uF = bW) || void 0 === uF ? void 0 : uF.height) && void 0 !== AF ? AF : 0, null === (hF = bW) || void 0 === hF ? void 0 : hF.alpha)
      }
    }
    var vA = SF(38819),
      JC = SF(38887),
      pC = SF(38895);
    const lC = new class {
      constructor(FF) {
        this.pack = FF, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, FF.onWanted((() => {
          this.release()
        }))
      }
      setGame(FF) {
        void 0 !== FF || null === this.hold ? (this.hold = null, this.endedWhileHeld = !1, this.game = FF, this.update()) : this.endedWhileHeld = !0
      }
      unwantedLeave(FF) {
        FF && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(FF) {
        null !== FF && FF === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const FF = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, FF && this.setGame(void 0)
      }
      setSettled(FF) {
        this.settle = FF, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, pC.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(JC.e);
    var FA = SF(38821),
      WA = SF(38825),
      SA = SF(35334),
      CA = SF(8144),
      AA = SF(38900);
    const uA = 8192,
      hA = new Set;
    const bu = new Set([...CA.d, "sceneDownload"]);
    var dA = SF(38707),
      PA = SF(38533);
    const RA = new Uint8Array(0);
    let iu = null;

    function eA(FF) {
      return {
        aux: OW.Ib.AdStart | (FF ? OW.Ib.PreventMovement : 0),
        payload: RA
      }
    }
    var EA = SF(2205);
    const QA = "__bloxdSceneCapture";
    var ru = SF(1529),
      gu = SF(2252);
    let tu = null,
      TA = null,
      au = !1;

    function ku() {
      tu ??= performance.now()
    }
    var qu = SF(38902);
    class VA {
      constructor(FF) {
        var WF, SF;
        this.host = FF, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((FF => {
          this.landRequest = FF
        })), this.follow = FF => {
          let WF = FF;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const FF = null === this.requested && null !== WF;
            var SF;
            FF && (null === (SF = WF) || void 0 === SF || SF(null));
            const CF = await this.landing;
            var AF;
            null === CF && FF || (null === (AF = WF) || void 0 === AF || AF(CF))
          })), () => {
            WF = null
          }
        }, this.startRead = (SF = FF.store, SF.keys().then((FF => ({
          own: FF.includes(dS.b),
          oneShot: FF.includes(dS.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((FF => {
          let {
            own: WF,
            oneShot: SF
          } = FF;
          this.oneShotStored = SF, (WF || SF) && this.request()
        })), this.channel = (null !== (WF = FF.openChannel) && void 0 !== WF ? WF : dS.t)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var FF;
        if (null !== this.requested) return this.requested;
        null === (FF = this.channel) || void 0 === FF || FF.close(), this.channel = null;
        const WF = this.oneShotStored;
        return this.requested = function(FF, WF, SF) {
          return new Promise((WF => {
            WF(FF())
          })).catch((FF => (null !== WF && (0, dS.n)(WF), SF(FF), null)))
        }((() => this.host.load(WF).then((FF => (FF.setGamePackConfirm(this.confirm), this.landed = FF, FF)))), WF ? this.host.store : null, this.host.SC), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var FF;
          return null !== (FF = this.requested) && void 0 !== FF ? FF : null
        }))
      }
      setGamePackConfirm(FF) {
        var WF;
        this.confirm = FF, null === (WF = this.landed) || void 0 === WF || WF.setGamePackConfirm(FF)
      }
    }
    var NA = SF(2441);
    const DA = new Uint8Array(0);
    class LA {
      constructor(FF) {
        this.options = FF, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.yS = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== FF.module ? FF.write(0, OW.ud.WorldgenStarted, 0, DA) : this.giveUp()
      }
      take(FF, WF) {
        if (!(this.gone || null === this.worker && null === this.yS))
          if (FF === OW.yd.WorldgenSeed) {
            const FF = 0 === WF.byteLength ? null : this.options.decodeSettings(WF);
            null === FF || function(FF, WF) {
              if ((null === FF || void 0 === FF ? void 0 : FF.byteLength) !== WF.byteLength) return !1;
              for (let SF = 0; SF < FF.byteLength; SF++)
                if (FF[SF] !== WF[SF]) return !1;
              return !0
            }(this.seed, WF) || (this.seed = WF.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: FF
            }, []), null !== FF && this.load()
          } else if (FF === OW.yd.Generate) {
          var SF;
          const FF = new DataView(WF.buffer, WF.byteOffset, OW.jd),
            CF = null !== (SF = this.pool.pop()) && void 0 !== SF ? SF : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: FF.getUint32(0, !0),
            x: FF.getInt32(4, !0),
            y: FF.getInt32(8, !0),
            z: FF.getInt32(12, !0),
            bytes: CF
          }, [CF])
        }
      }
      stop() {
        var FF;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (FF = this.worker) || void 0 === FF || FF.terminate(), this.worker = null
      }
      post(FF, WF) {
        var SF;
        null !== this.yS ? this.yS.push({
          message: FF,
          transfer: WF
        }) : null === (SF = this.worker) || void 0 === SF || SF.postMessage(FF, WF)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((FF => {
          this.createWorker = FF, this.start()
        }), (FF => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(FF))
        })))
      }
      start() {
        const {
          module: FF
        } = this.options, WF = this.createWorker;
        if (this.gone || null === FF || null === WF) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let SF;
        this.startsWithoutResult++;
        try {
          SF = WF()
        } catch (AF) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", AF), this.lastLoss = `it did not start (${String(AF)})`, void this.start()
        }
        this.worker = SF, SF.onmessage = FF => {
          let {
            data: WF
          } = FF;
          this.worker === SF && this.onReply(SF, WF)
        }, SF.onerror = FF => {
          FF.preventDefault(), this.worker === SF && this.lose(FF.message || "its script failed")
        };
        try {
          SF.postMessage({
            type: "start",
            module: FF,
            MC: CF.h.MC
          })
        } catch (AF) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", AF), this.lastLoss = `it could not be sent the module (${String(AF)})`, SF.terminate(), this.worker = null, void this.start()
        }
        this.watch = new kA.i(kA.h, (FF => {
          this.lose((0, kA.k)(FF), (() => {
            this.options.onStartTimeout(FF)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(FF, WF) {
        switch (WF.type) {
          case "started": {
            this.endWatch();
            const WF = this.yS;
            if (null === WF) {
              this.options.write(0, OW.ud.WorldgenStarted, 0, DA);
              break
            }
            this.yS = null;
            for (const {
                message: SF,
                transfer: CF
              }
              of WF) FF.postMessage(SF, CF);
            break
          }
          case "lost":
            this.lose(WF.reason);
            break;
          case "memory":
            var SF, CF;
            null === (SF = (CF = this.options).onMemoryStats) || void 0 === SF || SF.call(CF, WF.stats);
            break;
          case "result":
            WF.status !== OW.jb.Trapped && (this.startsWithoutResult = 0), this.options.write(WF.ticket, OW.ud.WorldgenResult, WF.status, new Uint8Array(WF.bytes, 0, WF.len)), this.recycle(WF.bytes), WF.spare && this.recycle(WF.spare)
        }
      }
      lose(FF, WF) {
        var SF;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${FF}`), this.lastLoss = FF, this.endWatch(), null === (SF = this.worker) || void 0 === SF || SF.terminate(), this.worker = null, this.gone || (WF ? WF() : this.options.onWorkerLost(FF), this.dropHeld(), this.yS = null, this.options.write(0, OW.ud.WorldgenLost, OW.Cd.Lost, DA), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, OW.ud.WorldgenLost, OW.Cd.Gone, DA)
      }
      endWatch() {
        var FF;
        null === (FF = this.watch) || void 0 === FF || FF.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.yS) {
          for (const {
              message: FF
            }
            of this.yS) "generate" === FF.type && this.recycle(FF.bytes);
          this.yS.length = 0
        }
      }
      recycle(FF) {
        this.pool.length < 16 && FF.byteLength > 0 && FF.byteLength <= 16384 && this.pool.push(FF)
      }
    }

    function mu(FF) {
      return "string" !== typeof FF || 2 !== FF.length && ":" !== FF[2] ? null : FF[0] + FF[1]
    }

    function OA(FF) {
      const WF = mu(FF);
      return "op" === WF || "ep" === WF || "wi" === WF || "pp" === WF || "fp:call" === FF || "fp:t" === FF
    }

    function xu(FF) {
      if ("string" !== typeof FF) return !1;
      return "o" === FF[0] && "p" === FF[1] && (2 === FF.length || ":" === FF[2]) || "fp:call" === FF || "2" === FF || "t" === FF || "a" === FF
    }
    var ZA = SF(2918),
      oA = SF(38911),
      YA = SF(38798);
    const MA = (FF, WF) => FF.includes(WF),
      cu = FF => {
        try {
          return FF()
        } catch {
          return !1
        }
      },
      GA = -1,
      zu = FF => {
        try {
          return FF()
        } catch {
          return GA
        }
      };

    function IA(FF, WF) {
      return {
        probe: (SF, CF, AF) => {
          try {
            return ((SF, CF, AF) => {
              switch (SF) {
                case OW.Sb.StackCheck:
                  return WF.stackCheck() ? 1 : 0;
                case OW.Sb.ConfirmMesh:
                  return WF.confirmMesh();
                case OW.Sb.IndexPassReplaced:
                  return WF.indexPassReplaced() ? 1 : 0;
                case OW.Sb.ProductSubChanged:
                  return WF.productSubChanged() ? 1 : 0;
                case OW.Sb.RenderStatus:
                  return WF.dC();
                case OW.Sb.Held:
                  return WF.yS();
                case OW.Sb.PlayerKilledSubs:
                  return WF.playerKilledSubs();
                case OW.Z: {
                  const SF = WF.getComplete();
                  return null === SF ? 0 : (0, PC.o)(PC.v, PC.V, [SF, new PC.e((0, PC.B)(FF()), CF, AF)]).written
                }
                default:
                  return 0
              }
            })(SF, CF, AF)
          } catch {
            return OW.Nb
          }
        }
      }
    }
    class fA {
      constructor(FF) {
        this.write = FF, this.flagsWritten = 0, this.written = (0, PC.q)(null)
      }
      lF(FF) {
        let {
          flags: WF,
          values: SF
        } = FF;
        for (let CF = 0; CF < SF.length; CF++) this.value(SF[CF][0], SF[CF][1]);
        this.setFlags(WF | OW.g.Ready)
      }
      value(FF, WF) {
        this.written[FF] !== WF && this.write(FF, WF, 0) && (this.written[FF] = WF)
      }
      setFlags(FF) {
        const WF = FF & ~this.flagsWritten;
        0 !== WF && this.write(OW.j.Flags, WF, WF) && (this.flagsWritten |= WF)
      }
      originStackHit() {
        return this.write(OW.j.Flags, OW.g.OriginStackHit, OW.g.OriginStackHit)
      }
    }
    const yu = {
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
      sA = 1e3;

    function nA(FF, WF) {
      const SF = new fA(WF);
      let CF = !1;
      SF.lF(FF.lF());
      const AF = (0, PC.R)((() => {
          SF.lF(FF.lF())
        }), sA),
        uF = () => {
          FF.checks.stackCheck() && (CF = !0)
        };
      return (0, oA.i)(uF), {
        onInput: WF => {
          (function(FF) {
            switch (FF) {
              case OW.hb.KeyDown:
              case OW.hb.KeyUp:
              case OW.hb.MouseDown:
              case OW.hb.MouseUp:
              case OW.hb.Wheel:
              case OW.hb.TouchStart:
              case OW.hb.TouchEnd:
              case OW.hb.TouchButton:
                return !0;
              default:
                return !1
            }
          })(WF) && FF.checks.stackCheck() && (CF = !0)
        },
        onSend: uF,
        beforeFrame: () => {
          CF && SF.originStackHit() && (CF = !1)
        },
        onEvent: WF => {
          const CF = FF.checkEvent(WF);
          SF.value(OW.j.ProbeUsedProp, FF.usedProp()), 0 !== CF && SF.setFlags(CF)
        },
        stop: () => {
          (0, PC.S)(AF), (0, oA.h)(uF)
        }
      }
    }
    let HA;
    const KA = [1, "length", void 0, 2, 109, 0, null, 3, "r", "c3RhY2", "cw==", 212, "c", 211, 7, "f", 60, "k", 9, "j", "a", 124, 4, 5, "d", 100, 191, 155, !1, 1e5, "b", 11, 127, 90, 10, 199, !0, "q", 6, 234, 177, 223, 62, "string", 8, 16, "_RhQdU", "i", 512, 256, 47, "012345", 15, 121, 206, 88, 147, 1023, 63, 128, 12, 140, 255, 32, 24, 18, 19, 64, 65535, 85, 169, 178, 55296, 56319, 56320, 65536, 192, 113, 57343, 31, 224, 240, "Invalid byte index", "Invalid continuation byte", 174, 82, 222, 22, "g", 157, 137, 226, "__GLOB", "AL__HE", "LPERS_", "_", "functi", "on", "o", 249, 94, "protot", "ype", "decode", "I=", "eTR5bm", "t", 228, "e", "z", "$c", "s", "K", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "O", "None", 71, 13, "En", "tOverw", "ritten", "plete", "p"];

    function wA() {}

    function XA() {
      XA = function() {}
    }
    HA = function(FF) {
      let WF = arguments[KA[1]] > KA[0] && arguments[KA[0]] !== KA[2] ? arguments[KA[0]] : () => KA[6],
        SF = arguments[KA[1]] > KA[3] && arguments[KA[3]] !== KA[2] ? arguments[KA[3]] : KA[6],
        CF = arguments[KA[1]] > KA[7] && arguments[KA[7]] !== KA[2] ? arguments[KA[7]] : "";
      const AF = window,
        uF = (0, PC[KA[8]])("RXJyb3" + KA[104]),
        hF = (0, PC[KA[8]])(KA[9] + "s="),
        bW = (0, PC[KA[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        PF = (0, PC[KA[8]])(KA[9] + "tUcmFjZUxpbWl0"),
        RF = (0, PC[KA[8]])("bmF0aXZl"),
        iW = [(0, PC[KA[8]])("bWFpbi5qcw=="), (0, PC[KA[8]])("aW5kZXguanM="), (0, PC[KA[8]])("dXNlcnNjcmlwdA=="), (0, PC[KA[8]])("Y29udGVudC5q" + KA[10]), (0, PC[KA[8]])("b3B0aW9ucy5q" + KA[10]), (0, PC[KA[8]])("cG9wdXAuanM="), (0, PC[KA[8]])("LnVzZXIuanM="), (0, PC[KA[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        eF = (...FF) => {
          FF[KA[1]] = KA[0], "xB3qsZZ" in wA && function() {
            var FF = function(...FF) {
              if (XA(FF[KA[1]] = KA[0], FF[KA[0]] = FF[KA[5]].length), FF[KA[0]] < KA[3]) return KA[5];
              if (XA(FF[-KA[11]] = Math.max(...FF[KA[5]]), FF[KA[12]] = Math.min(...FF[KA[5]])), FF[-KA[11]] === FF[KA[12]]) return KA[5];
              for (XA(FF[KA[3]] = Array(FF[KA[0]] - KA[0]).fill(Number.MAX_SAFE_INTEGER), FF[-KA[16]] = Array(FF[KA[0]] - KA[0]).fill(Number.MIN_SAFE_INTEGER), FF[KA[15]] = Math.ceil((FF[-KA[11]] - FF[KA[12]]) / (FF[KA[0]] - KA[0])), FF[KA[14]] = KA[5]), FF[KA[13]] = KA[5]; FF[KA[13]] < FF[KA[0]]; FF[KA[13]]++) FF[KA[5]][FF[KA[13]]] !== FF[KA[12]] && FF[KA[5]][FF[KA[13]]] !== FF[-KA[11]] && XA(FF[KA[14]] = Math.floor((FF[KA[5]][FF[KA[13]]] - FF[KA[12]]) / FF[KA[15]]), FF[KA[3]][FF[KA[14]]] = Math.min(FF[KA[3]][FF[KA[14]]], FF[KA[5]][FF[KA[13]]]), FF[-KA[16]][FF[KA[14]]] = Math.max(FF[-KA[16]][FF[KA[14]]], FF[KA[5]][FF[KA[13]]]));
              for (XA(FF[KA[18]] = Number.MIN_SAFE_INTEGER, FF[KA[19]] = FF[KA[12]]), FF[KA[17]] = KA[5]; FF[KA[17]] < FF[KA[0]] - KA[0]; FF[KA[17]]++) FF[KA[3]][FF[KA[17]]] === Number.MAX_SAFE_INTEGER && FF[-KA[16]][FF[KA[17]]] === Number.MIN_SAFE_INTEGER || XA(FF[KA[18]] = Math.max(FF[KA[18]], FF[KA[3]][FF[KA[17]]] - FF[KA[19]]), FF[KA[19]] = FF[-KA[16]][FF[KA[17]]]);
              return FF[KA[18]] = Math.max(FF[KA[18]], FF[-KA[11]] - FF[KA[19]]), FF[KA[18]]
            };
            console.log(FF)
          }();
          const WF = AF[uF],
            SF = WF;
          if (SF[PF] < KA[29]) {
            function rW(...FF) {
              XA(FF[KA[1]] = KA[5], FF[KA[20]] = function(...WF) {
                return XA(WF[KA[1]] = KA[0], WF[KA[20]] = []), (WF[KA[5]] === KA[0] || WF[KA[5]] >= KA[22]) && FF[KA[21]](WF[KA[20]], [], WF[KA[5]], KA[5]), WF[KA[20]]
              }, FF[KA[21]] = function(...WF) {
                for (WF[KA[1]] = KA[22], WF[KA[22]] = WF[KA[7]]; WF[KA[22]] < WF[KA[3]]; WF[KA[22]]++) {
                  if (WF[KA[0]].length !== WF[KA[22]]) return;
                  for (WF[KA[23]] = KA[5]; WF[KA[23]] < WF[KA[3]]; WF[KA[23]]++) FF[KA[3]](WF[KA[0]], [WF[KA[22]], WF[KA[23]]]) && (XA(WF[KA[0]].push([WF[KA[22]], WF[KA[23]]]), FF[KA[21]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[22]] + KA[0])), WF[KA[0]].length === WF[KA[3]] && WF[KA[5]].push(FF[KA[24]](WF[KA[0]])), WF[KA[0]].pop())
                }
              }, FF[KA[24]] = function(...FF) {
                for (XA(FF[KA[1]] = KA[0], FF[-KA[26]] = [], FF[KA[25]] = FF[KA[5]].length), FF[KA[12]] = KA[5]; FF[KA[12]] < FF[KA[25]]; FF[KA[12]]++)
                  for (FF[-KA[26]][FF[KA[12]]] = "", FF[KA[22]] = KA[5]; FF[KA[22]] < FF[KA[25]]; FF[KA[22]]++) FF[-KA[26]][FF[KA[12]]] += FF[KA[5]][FF[KA[12]]][KA[0]] === FF[KA[22]] ? "Q" : ".";
                return FF[-KA[26]]
              }, FF[KA[3]] = function(...FF) {
                for (XA(FF[KA[1]] = KA[3], FF[KA[20]] = FF[KA[5]].length), FF[-KA[27]] = KA[5]; FF[-KA[27]] < FF[KA[20]]; FF[-KA[27]]++) {
                  if (FF[KA[5]][FF[-KA[27]]][KA[5]] === FF[KA[0]][KA[5]] || FF[KA[5]][FF[-KA[27]]][KA[0]] === FF[KA[0]][KA[0]]) return KA[28];
                  if (Math.abs((FF[KA[5]][FF[-KA[27]]][KA[5]] - FF[KA[0]][KA[5]]) / (FF[KA[5]][FF[-KA[27]]][KA[0]] - FF[KA[0]][KA[0]])) === KA[0]) return KA[28]
                }
                return KA[36]
              }, console.log(FF[KA[20]]))
            }
            "u9qmu_" + KA[30] in wA && rW(), SF[PF] = KA[29]
          }
          const CF = "string" === typeof(eF = (new WF)[hF]) ? eF : `${eF}`,
            dF = {},
            RF = SF[bW];
          var eF;
          if (typeof RF === KA[96] + KA[97]) {
            function gW(...FF) {
              function WF() {}
              FF[KA[1]] = KA[5], XA(FF[KA[35]] = function(...FF) {
                for (XA(FF[KA[1]] = KA[3], FF[KA[20]] = KA[5], FF[KA[30]] = KA[5], FF[-KA[31]] = new WF(KA[5]), FF[KA[33]] = FF[-KA[31]], FF[KA[32]] = FF[KA[5]], FF[KA[14]] = FF[KA[0]]); FF[KA[32]] !== KA[6] || FF[KA[14]] !== KA[6];) XA(FF[KA[30]] = (FF[KA[32]] ? FF[KA[32]].val : KA[5]) + (FF[KA[14]] ? FF[KA[14]].val : KA[5]) + FF[KA[20]], FF[KA[20]] = Math.floor(FF[KA[30]] / KA[34]), FF[KA[33]].next = new WF(FF[KA[30]] % KA[34]), FF[KA[33]] = FF[KA[33]].next, FF[KA[32]] = FF[KA[32]] ? FF[KA[32]].next : KA[6], FF[KA[14]] = FF[KA[14]] ? FF[KA[14]].next : KA[6]);
                return FF[KA[20]] && (FF[KA[33]].next = new WF(FF[KA[20]])), FF[-KA[31]].next
              }, console.log(FF[KA[35]]))
            }
            "Q34_8w" + KA[125] in wA && gW(), (0, PC[KA[98]])(RF, WF, [dF])
          }
          const EF = dF[hF],
            QF = FF[KA[5]] ? iW[KA[1]] : iW[KA[1]] - KA[0];
          for (let tW = KA[5]; tW < QF; tW++) {
            function TF(...FF) {
              FF[KA[1]] = KA[5];
              const WF = require("big-integer");
              XA(FF[KA[20]] = class {
                static randomPrime(FF) {
                  const SF = WF.one.shiftLeft(FF - KA[0]),
                    CF = WF.one.shiftLeft(FF).prev();
                  for (; KA[36];) {
                    let FF = WF.randBetween(SF, CF);
                    if (FF.isProbablePrime(KA[49])) return FF
                  }
                }
                static generate(FF) {
                  const SF = WF(65537);
                  let CF, AF, uF;
                  do {
                    XA(CF = this.randomPrime(FF / KA[3]), AF = this.randomPrime(FF / KA[3]), uF = WF.lcm(CF.prev(), AF.prev()))
                  } while (WF.gcd(SF, uF).notEquals(KA[0]) || CF.minus(AF).abs().shiftRight(FF / KA[3] - KA[25]).isZero());
                  return {
                    e: SF,
                    n: CF.multiply(AF),
                    d: SF.modInv(uF)
                  }
                }
                static encrypt(...FF) {
                  return FF[KA[1]] = KA[7], WF(FF[KA[5]]).modPow(FF[KA[3]], FF[KA[0]])
                }
                static decrypt(...FF) {
                  return FF[KA[1]] = KA[7], WF(FF[KA[5]]).modPow(FF[KA[0]], FF[KA[3]])
                }
                static encode(...FF) {
                  FF[KA[1]] = KA[0];
                  const SF = FF[KA[5]].split("").map((FF => FF.charCodeAt())).join("");
                  return WF(SF)
                }
                static decode(...FF) {
                  FF[KA[1]] = KA[0];
                  const WF = FF[KA[5]].toString();
                  FF[KA[0]] = "";
                  for (let SF = KA[5]; SF < WF.length; SF += KA[3]) {
                    let CF = Number(WF.substr(SF, KA[3]));
                    CF <= 30 ? (FF[KA[0]] += String.fromCharCode(Number(WF.substr(SF, KA[7]))), SF++) : FF[KA[0]] += String.fromCharCode(CF)
                  }
                  return FF[KA[0]]
                }
              }, module.exports = FF[KA[20]])
            }
            if ("aEph8H" in wA && TF(), MA(CF, iW[tW]) || typeof EF === KA[43] && MA(EF, iW[tW])) {
              function aW(...FF) {
                FF[KA[1]] = KA[5]
              }
              return "xLA2Db" in wA && aW(), KA[36]
            }
          }
          return KA[28]
        },
        EF = (...FF) => {
          FF[KA[1]] = KA[0], "x9n3Ui" in wA && function(...FF) {
            XA(FF[KA[1]] = KA[5], FF[-KA[18]] = function(FF) {
              var WF, SF, CF, AF, uF = FF.length;
              for (XA(WF = [], SF = KA[5]), CF = KA[5]; CF < uF; CF++) WF.push(CF !== KA[5] && FF[CF] > FF[CF - KA[0]] ? WF[CF - KA[0]] + KA[0] : KA[0]);
              for (AF = uF - KA[0]; AF >= KA[5]; AF--) AF !== uF - KA[0] && FF[AF] > FF[AF + KA[0]] && (WF[AF] = Math.max(WF[AF], WF[AF + KA[0]] + KA[0])), SF += WF[AF];
              return SF
            }, console.log(FF[-KA[18]]))
          }();
          try {
            function WF(...FF) {
              XA(FF[KA[1]] = KA[5], FF[KA[12]] = function(FF) {
                var WF, SF, CF, AF, uF = FF.length;
                for (XA(WF = [], SF = KA[5]), CF = KA[5]; CF < uF; CF++) WF.push(CF !== KA[5] && FF[CF] > FF[CF - KA[0]] ? WF[CF - KA[0]] + KA[0] : KA[0]);
                for (AF = uF - KA[0]; AF >= KA[5]; AF--) AF !== uF - KA[0] && FF[AF] > FF[AF + KA[0]] && (WF[AF] = Math.max(WF[AF], WF[AF + KA[0]] + KA[0])), SF += WF[AF];
                return SF
              }, console.log(FF[KA[12]]))
            }
            return "X2W1va" + KA[112] in wA && WF(), FF[KA[5]]()
          } catch {
            function SF() {
              function FF(...WF) {
                if (WF[KA[1]] = KA[0], !WF[KA[5]]) return -KA[0];
                const SF = FF(WF[KA[5]].left),
                  CF = FF(WF[KA[5]].right),
                  AF = Math.abs(SF - CF);
                if (SF === 1 / 0 || CF === 1 / 0 || AF > KA[0]) return 1 / 0;
                return Math.max(SF, CF) + KA[0]
              }
              window[KA[92] + KA[93] + KA[94] + KA[95]] = {
                buildCharacterMap: function(...FF) {
                  FF[KA[1]] = KA[0];
                  const WF = {};
                  for (let SF of FF[KA[5]].replace(/[^w]/g, "").toLowerCase()) WF[SF] = WF[SF] + KA[0] || KA[0];
                  return WF
                },
                isAnagrams: function(FF, WF) {
                  const SF = buildCharMap(FF),
                    CF = buildCharMap(WF);
                  for (let AF in SF)
                    if (SF[AF] !== CF[AF]) return KA[28];
                  return Object.keys(SF).length !== Object.keys(CF).length ? KA[28] : KA[36]
                },
                isBalanced: function(...WF) {
                  return WF[KA[1]] = KA[0], FF(WF[KA[5]]) !== 1 / 0
                },
                getHeightBalanced: FF
              }
            }
            return "Cqw__j" in wA && SF(), KA[36]
          }
        };
      let QF = KA[28];
      const rW = () => {
          !QF && (0, PC[KA[106]])() && (QF = KA[36])
        },
        gW = FF => {
          try {
            return FF()
          } catch {
            return KA[2]
          }
        },
        tW = (...FF) => {
          FF[KA[1]] = KA[0];
          try {
            function WF(...FF) {
              XA(FF[KA[1]] = KA[5], FF[KA[20]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", FF[KA[30]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", FF[KA[12]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", FF[KA[20]].match(FF[KA[30]] + FF[KA[12]]))
            }
            return "xlktuc" in wA && WF(), FF[KA[5]](), KA[36]
          } catch {
            return KA[28]
          }
        },
        TF = (0, PC[KA[8]])("a29qbzYzb25i"),
        aW = (0, PC[KA[37]])(KA[6]);
      let kW = KA[6],
        qW = KA[28],
        VF = KA[28];
      const NF = (0, PC[KA[37]])(KA[6]);
      let DF = KA[5];
      const LF = (0, PC[KA[37]])(KA[6]);
      let mW = KA[5];
      const OF = (0, PC[KA[37]])(KA[6]);
      let xW = KA[28],
        ZF = KA[28];
      const oF = (...WF) => {
          if (WF[KA[1]] = KA[3], WF[KA[5]] === FF) {
            if (kW === KA[6]) {
              function uF(...FF) {
                XA(FF[KA[1]] = KA[5], FF[KA[20]] = function(WF, SF, CF) {
                  return CF.length !== WF.length + SF.length ? KA[28] : FF[KA[0]](WF, SF, CF, KA[5], KA[5], KA[5], {})
                }, FF[KA[0]] = function(...WF) {
                  return XA(WF[KA[1]] = KA[14], WF[KA[14]] = KA[28]), WF[KA[23]] >= WF[KA[3]].length ? KA[36] : WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] !== KA[2] ? WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] : (WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] && WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] ? WF[KA[14]] = FF[KA[0]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) || FF[KA[0]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] ? WF[KA[14]] = FF[KA[0]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] && (WF[KA[14]] = FF[KA[0]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]])), WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] = WF[KA[14]], WF[KA[14]])
                }, console.log(FF[KA[20]]))
              }
              "J7sJhY" in wA && uF(), kW = typeof WF[KA[0]] === KA[121] ? WF[KA[0]] : -KA[0]
            } else qW = KA[36];
            return
          }
          const SF = aW[WF[KA[5]]];
          if (!WF[KA[0]]) return void(SF && (VF = KA[36]));
          if (WF[KA[5]] !== TF) {
            function hF(...FF) {
              XA(FF[KA[1]] = KA[5], FF[KA[20]] = function(...WF) {
                return XA(WF[KA[1]] = KA[3], WF[-KA[39]] = [], WF[KA[30]] = WF[KA[5]].length, WF[KA[5]].sort(((FF, WF) => FF - WF)), FF[-KA[40]](WF[-KA[39]], [], KA[5], WF[KA[30]], WF[KA[5]], WF[KA[0]])), WF[-KA[39]]
              }, FF[-KA[40]] = function(...WF) {
                if (XA(WF[KA[1]] = KA[38], WF[KA[42]] = KA[6]), !(WF[KA[23]] < KA[5])) {
                  if (WF[KA[23]] === KA[5]) return WF[KA[5]].push(WF[KA[0]]);
                  for (WF[KA[41]] = WF[KA[3]]; WF[KA[41]] < WF[KA[7]] && !(WF[KA[22]][WF[KA[41]]] > WF[KA[23]]); WF[KA[41]]++) WF[KA[41]] > WF[KA[3]] && WF[KA[22]][WF[KA[41]]] === WF[KA[22]][WF[KA[41]] - KA[0]] || XA(WF[KA[42]] = Array.from(WF[KA[0]]), WF[KA[42]].push(WF[KA[22]][WF[KA[41]]]), FF[-KA[40]](WF[KA[5]], WF[KA[42]], WF[KA[41]] + KA[0], WF[KA[7]], WF[KA[22]], WF[KA[23]] - WF[KA[22]][WF[KA[41]]]))
                }
              }, console.log(FF[KA[20]]))
            }
            return "OexOQX" in wA && hF(), void(aW[WF[KA[5]]] = WF[KA[0]])
          }
          aW[WF[KA[5]]] = KA[36];
          const CF = typeof WF[KA[0]] === KA[43] ? WF[KA[0]] : "" + WF[KA[0]];
          if (OF[CF]) {
            function bW(...FF) {
              XA(FF[KA[1]] = KA[5], FF[-KA[69]] = function(...FF) {
                function WF(...FF) {
                  return FF[KA[1]] = KA[3], hF(AF(bW(FF[KA[5]]), bW(FF[KA[0]])))
                }

                function CF(...FF) {
                  return FF[KA[1]] = KA[7],
                    function(...FF) {
                      var WF, SF, CF, AF;
                      for (XA(FF[KA[1]] = KA[3], FF[KA[3]] = FF[KA[0]].length, FF[KA[7]] = Array()), FF[-KA[56]] = Array(Math.ceil(FF[KA[5]].length / KA[3])), WF = KA[5]; WF < FF[-KA[56]].length; WF++) FF[-KA[56]][WF] = FF[KA[5]].charCodeAt(WF * KA[3]) << KA[44] | FF[KA[5]].charCodeAt(WF * KA[3] + KA[0]);
                      for (; FF[-KA[56]].length > KA[5];) {
                        for (XA(AF = Array(), CF = KA[5]), WF = KA[5]; WF < FF[-KA[56]].length; WF++) XA(CF = (CF << KA[45]) + FF[-KA[56]][WF], SF = Math.floor(CF / FF[KA[3]]), CF -= SF * FF[KA[3]]), (AF.length > KA[5] || SF > KA[5]) && (AF[AF.length] = SF);
                        XA(FF[KA[7]][FF[KA[7]].length] = CF, FF[-KA[56]] = AF)
                      }
                      for (FF[KA[23]] = "", WF = FF[KA[7]].length - KA[0]; WF >= KA[5]; WF--) FF[KA[23]] += FF[KA[0]].charAt(FF[KA[7]][WF]);
                      for (FF[KA[38]] = Math.ceil(FF[KA[5]].length * KA[44] / (Math.log(FF[KA[0]].length) / Math.log(KA[3]))), WF = FF[KA[23]].length; WF < FF[KA[38]]; WF++) FF[KA[23]] = FF[KA[0]][KA[5]] + FF[KA[23]];
                      return FF[KA[23]]
                    }(AF(bW(FF[KA[5]]), bW(FF[KA[0]])), FF[KA[3]])
                }

                function AF(...FF) {
                  XA(FF[KA[1]] = KA[3], FF[KA[3]] = dF(FF[KA[5]])), FF[KA[3]].length > KA[45] && (FF[KA[3]] = TF(FF[KA[3]], FF[KA[5]].length * KA[44]));
                  var WF = Array(KA[45]),
                    SF = Array(KA[45]);
                  for (FF[KA[30]] = KA[5]; FF[KA[30]] < KA[45]; FF[KA[30]]++) XA(WF[FF[KA[30]]] = 909522486 ^ FF[KA[3]][FF[KA[30]]], SF[FF[KA[30]]] = 1549556828 ^ FF[KA[3]][FF[KA[30]]]);
                  return FF[KA[22]] = TF(WF.concat(dF(FF[KA[0]])), KA[48] + FF[KA[0]].length * KA[44]), PF(TF(SF.concat(FF[KA[22]]), function(FF, WF, SF) {
                    if (FF === KA[46] + KA[47]) return WF + SF
                  }(KA[46] + KA[47], KA[48], KA[49])))
                }

                function uF(WF) {
                  var SF, CF, uF, hF;
                  try {
                    FF[-KA[50]]
                  } catch (AF) {
                    FF[-KA[50]] = KA[5]
                  }
                  for (XA(SF = FF[-KA[50]] ? KA[51] + "6789ABCDEF" : KA[51] + "6789abcdef", CF = "", uF = void 0), hF = KA[5]; hF < WF.length; hF++) XA(uF = WF.charCodeAt(hF), CF += SF.charAt(uF >>> KA[22] & KA[52]) + SF.charAt(uF & KA[52]));
                  return CF
                }

                function hF(...WF) {
                  WF[KA[1]] = KA[0];
                  try {
                    FF[-KA[53]]
                  } catch (SF) {
                    FF[-KA[53]] = ""
                  }
                  for (XA(WF[KA[55]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", WF[KA[30]] = "", WF[-KA[54]] = WF[KA[5]].length), WF[KA[24]] = KA[5]; WF[KA[24]] < WF[-KA[54]]; WF[KA[24]] += KA[7])
                    for (WF[KA[0]] = WF[KA[5]].charCodeAt(WF[KA[24]]) << KA[45] | (WF[KA[24]] + KA[0] < WF[-KA[54]] ? WF[KA[5]].charCodeAt(WF[KA[24]] + KA[0]) << KA[44] : KA[5]) | (WF[KA[24]] + KA[3] < WF[-KA[54]] ? WF[KA[5]].charCodeAt(WF[KA[24]] + KA[3]) : KA[5]), WF[KA[38]] = KA[5]; WF[KA[38]] < KA[22]; WF[KA[38]]++) WF[KA[24]] * KA[44] + WF[KA[38]] * KA[38] > WF[KA[5]].length * KA[44] ? WF[KA[30]] += FF[-KA[53]] : WF[KA[30]] += WF[KA[55]].charAt(WF[KA[0]] >>> KA[38] * (KA[7] - WF[KA[38]]) & KA[58]);
                  return WF[KA[30]]
                }

                function bW(FF) {
                  var WF, SF, CF, AF = "";
                  for (WF = -KA[0]; ++WF < FF.length;) XA(SF = FF.charCodeAt(WF), CF = WF + KA[0] < FF.length ? FF.charCodeAt(WF + KA[0]) : KA[5]), KA[72] <= SF && SF <= KA[73] && KA[74] <= CF && CF <= KA[78] && XA(SF = KA[75] + ((SF & KA[57]) << KA[34]) + (CF & KA[57]), WF++), SF <= KA[32] ? AF += String.fromCharCode(SF) : SF <= 2047 ? AF += String.fromCharCode(KA[76] | SF >>> KA[38] & KA[79], KA[59] | SF & KA[58]) : SF <= KA[68] ? AF += String.fromCharCode(KA[80] | SF >>> KA[60] & KA[52], KA[59] | SF >>> KA[38] & KA[58], KA[59] | SF & KA[58]) : SF <= 2097151 && (AF += String.fromCharCode(KA[81] | SF >>> KA[65] & KA[14], KA[59] | SF >>> KA[60] & KA[58], KA[59] | SF >>> KA[38] & KA[58], KA[59] | SF & KA[58]));
                  return AF
                }

                function dF(...FF) {
                  for (XA(FF[KA[1]] = KA[0], FF[KA[20]] = Array(FF[KA[5]].length >> KA[3])), FF[KA[30]] = KA[5]; FF[KA[30]] < FF[KA[20]].length; FF[KA[30]]++) FF[KA[20]][FF[KA[30]]] = KA[5];
                  for (FF[KA[30]] = KA[5]; FF[KA[30]] < FF[KA[5]].length * KA[44]; FF[KA[30]] += KA[44]) FF[KA[20]][FF[KA[30]] >> KA[23]] |= (FF[KA[5]].charCodeAt(FF[KA[30]] / KA[44]) & KA[62]) << KA[64] - FF[KA[30]] % KA[63];
                  return FF[KA[20]]
                }

                function PF(...FF) {
                  for (XA(FF[KA[1]] = KA[0], FF[KA[21]] = ""), FF[KA[3]] = KA[5]; FF[KA[3]] < FF[KA[5]].length * KA[63]; FF[KA[3]] += KA[44]) FF[KA[21]] += String.fromCharCode(FF[KA[5]][FF[KA[3]] >> KA[23]] >>> KA[64] - FF[KA[3]] % KA[63] & KA[62]);
                  return FF[KA[21]]
                }

                function RF(FF, WF) {
                  return FF >>> WF | FF << KA[63] - WF
                }

                function iW(...FF) {
                  return FF[KA[1]] = KA[3], FF[KA[5]] >>> FF[KA[0]]
                }

                function eF(...FF) {
                  return FF[KA[1]] = KA[7], FF[KA[5]] & FF[KA[0]] ^ ~FF[KA[5]] & FF[KA[3]]
                }

                function EF(...FF) {
                  return FF[KA[1]] = KA[7], FF[KA[5]] & FF[KA[0]] ^ FF[KA[5]] & FF[KA[3]] ^ FF[KA[0]] & FF[KA[3]]
                }

                function QF(...FF) {
                  return FF[KA[1]] = KA[0], RF(FF[KA[5]], KA[3]) ^ RF(FF[KA[5]], KA[128]) ^ RF(FF[KA[5]], KA[87])
                }

                function rW(...FF) {
                  return FF[KA[1]] = KA[0], RF(FF[KA[5]], KA[38]) ^ RF(FF[KA[5]], KA[31]) ^ RF(FF[KA[5]], 25)
                }

                function gW(...FF) {
                  return FF[KA[1]] = KA[0], RF(FF[KA[5]], KA[14]) ^ RF(FF[KA[5]], KA[65]) ^ iW(FF[KA[5]], KA[7])
                }

                function tW(FF) {
                  return RF(FF, 17) ^ RF(FF, KA[66]) ^ iW(FF, KA[34])
                }

                function TF(WF, SF) {
                  var CF, AF, uF, hF, bW, dF, PF, RF, iW, TF, kW, qW, VF, NF = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                  for (CF = new Array(KA[67]), XA(WF[SF >> KA[23]] |= KA[59] << KA[64] - SF % KA[63], WF[(SF + KA[67] >> KA[18] << KA[22]) + KA[52]] = SF), TF = KA[5]; TF < WF.length; TF += KA[45]) {
                    for (XA(AF = NF[KA[5]], uF = NF[KA[0]], hF = NF[KA[3]], bW = NF[KA[7]], dF = NF[KA[22]], PF = NF[KA[23]], RF = NF[KA[38]], iW = NF[KA[14]]), kW = KA[5]; kW < KA[67]; kW++) XA(CF[kW] = kW < KA[45] ? WF[kW + TF] : aW(aW(aW(tW(CF[kW - KA[3]]), CF[kW - KA[14]]), gW(CF[kW - KA[52]])), CF[kW - KA[45]]), qW = aW(aW(aW(aW(iW, rW(dF)), eF(dF, PF, RF)), FF[KA[3]][kW]), CF[kW]), VF = aW(QF(AF), EF(AF, uF, hF)), iW = RF, RF = PF, PF = dF, dF = aW(bW, qW), bW = hF, hF = uF, uF = AF, AF = aW(qW, VF));
                    XA(NF[KA[5]] = aW(AF, NF[KA[5]]), NF[KA[0]] = aW(uF, NF[KA[0]]), NF[KA[3]] = aW(hF, NF[KA[3]]), NF[KA[7]] = aW(bW, NF[KA[7]]), NF[KA[22]] = aW(dF, NF[KA[22]]), NF[KA[23]] = aW(PF, NF[KA[23]]), NF[KA[38]] = aW(RF, NF[KA[38]]), NF[KA[14]] = aW(iW, NF[KA[14]]))
                  }
                  return NF
                }

                function aW(...FF) {
                  return XA(FF[KA[1]] = KA[3], FF[KA[20]] = (FF[KA[5]] & KA[68]) + (FF[KA[0]] & KA[68]), FF[KA[30]] = (FF[KA[5]] >> KA[45]) + (FF[KA[0]] >> KA[45]) + (FF[KA[20]] >> KA[45])), FF[KA[30]] << KA[45] | FF[KA[20]] & KA[68]
                }
                return XA(FF[KA[1]] = KA[5], FF[-KA[50]] = KA[5], FF[-KA[53]] = ""), FF[KA[3]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(FF) {
                    return uF(function(FF) {
                      return PF(TF(dF(FF), FF.length * KA[44]))
                    }(bW(FF)))
                  },
                  b64: WF,
                  any: CF,
                  hex_hmac: function(...FF) {
                    return FF[KA[1]] = KA[3], uF(AF(bW(FF[KA[5]]), bW(FF[KA[0]])))
                  },
                  b64_hmac: WF,
                  any_hmac: CF
                }
              }(), console.log(FF[-KA[69]]))
            }
            "OxlwCWN" in wA && bW()
          } else {
            if ("fp" === mu(AF = CF) && !OA(AF)) {
              function dF(...FF) {
                XA(FF[KA[1]] = KA[5], FF[-KA[70]] = function(FF) {
                  var WF, SF, CF, AF, uF = FF.length;
                  for (XA(WF = [], SF = KA[5], CF = KA[5], FF.sort(((FF, WF) => FF - WF))), AF = KA[5]; AF < uF; AF++)
                    if (!(AF > KA[5] && FF[AF] === FF[AF - KA[0]]))
                      for (XA(SF = AF + KA[0], CF = uF - KA[0]); SF < CF;)
                        if (FF[AF] + FF[SF] + FF[CF] < KA[5]) SF++;
                        else if (FF[AF] + FF[SF] + FF[CF] > KA[5]) CF--;
                  else {
                    for (WF.push([FF[AF], FF[SF], FF[CF]]); SF < CF && FF[SF] === FF[SF + KA[0]];) SF++;
                    for (; SF < CF && FF[CF] === FF[CF - KA[0]];) CF--;
                    XA(SF++, CF--)
                  }
                  return WF
                }, console.log(FF[-KA[70]]))
              }
              return "h_iM35" in wA && dF(), void(ZF = KA[36])
            }
            var AF;
            if (OA(CF)) {
              function PF(...FF) {
                XA(FF[KA[1]] = KA[5], FF[KA[20]] = function(...WF) {
                  return XA(WF[KA[1]] = KA[7], WF[KA[71]] = {}), WF[KA[3]].length !== WF[KA[5]].length + WF[KA[0]].length ? KA[28] : FF[KA[58]](WF[KA[5]], WF[KA[0]], WF[KA[3]], KA[5], KA[5], KA[5], WF[KA[71]])
                }, FF[KA[58]] = function(...WF) {
                  return XA(WF[KA[1]] = KA[14], WF[KA[14]] = KA[28]), WF[KA[23]] >= WF[KA[3]].length ? KA[36] : WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] !== KA[2] ? WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] : (WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] && WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] ? WF[KA[14]] = FF[KA[58]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) || FF[KA[58]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] ? WF[KA[14]] = FF[KA[58]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] && (WF[KA[14]] = FF[KA[58]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]])), WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] = WF[KA[14]], WF[KA[14]])
                }, console.log(FF[KA[20]]))
              }
              if ("vLamhU9" in wA && PF(), DF < 8) XA(OF[CF] = KA[36], NF[DF++] = CF, xW ||= xu(CF));
              else {
                function RF() {
                  ! function(...FF) {
                    function WF(...FF) {
                      for (XA(FF[KA[1]] = KA[0], FF[KA[0]] = [], FF[KA[3]] = KA[5], FF[KA[12]] = FF[KA[5]].length, FF[KA[24]] = KA[2], FF[KA[23]] = KA[2]); FF[KA[3]] < FF[KA[12]];) XA(FF[KA[24]] = FF[KA[5]].charCodeAt(FF[KA[3]]++), FF[KA[24]] >= KA[72] && FF[KA[24]] <= KA[73] && FF[KA[3]] < FF[KA[12]] ? (FF[KA[23]] = FF[KA[5]].charCodeAt(FF[KA[3]]++), (64512 & FF[KA[23]]) == KA[74] ? FF[KA[0]].push(((FF[KA[24]] & KA[57]) << KA[34]) + (FF[KA[23]] & KA[57]) + KA[75]) : (FF[KA[0]].push(FF[KA[24]]), FF[KA[3]]--)) : FF[KA[0]].push(FF[KA[24]]));
                      return FF[KA[0]]
                    }

                    function SF(...FF) {
                      if (FF[KA[1]] = KA[0], FF[KA[5]] >= KA[72] && FF[KA[5]] <= KA[78]) throw Error("Lone surrogate U+" + FF[KA[5]].toString(KA[45]).toUpperCase() + " is not a scalar valu" + KA[108])
                    }

                    function CF(WF, SF) {
                      return FF[KA[20]](WF >> SF & KA[58] | KA[59])
                    }

                    function AF(...WF) {
                      return WF[KA[1]] = KA[0], (4294967168 & WF[KA[5]]) == KA[5] ? FF[KA[20]](WF[KA[5]]) : (WF[KA[0]] = "", (4294965248 & WF[KA[5]]) == KA[5] ? WF[KA[0]] = FF[KA[20]](WF[KA[5]] >> KA[38] & KA[79] | KA[76]) : (4294901760 & WF[KA[5]]) == KA[5] ? XA(SF(WF[KA[5]]), WF[KA[0]] = FF[KA[20]](WF[KA[5]] >> KA[60] & KA[52] | KA[80]), WF[KA[0]] += CF(WF[KA[5]], KA[38])) : (4292870144 & WF[KA[5]]) == KA[5] && XA(WF[KA[0]] = FF[KA[20]](WF[KA[5]] >> KA[65] & KA[14] | KA[81]), WF[KA[0]] += CF(WF[KA[5]], KA[60]), WF[KA[0]] += CF(WF[KA[5]], KA[38])), WF[KA[0]] += FF[KA[20]](WF[KA[5]] & KA[58] | KA[59]), WF[KA[0]])
                    }

                    function uF(...WF) {
                      if (WF[KA[1]] = KA[5], FF[KA[30]] >= FF[KA[7]]) throw Error(KA[82]);
                      if (XA(WF[KA[30]] = FF[KA[22]][FF[KA[30]]] & KA[62], FF[KA[30]]++), (WF[KA[30]] & KA[76]) == KA[59]) return WF[KA[30]] & KA[58];
                      throw Error(KA[83])
                    }

                    function hF(...WF) {
                      if (XA(WF[KA[1]] = KA[5], WF[KA[20]] = KA[2], WF[KA[30]] = KA[2], WF[KA[84]] = KA[2], WF[-KA[85]] = KA[2], WF[KA[22]] = KA[2]), FF[KA[30]] > FF[KA[7]]) throw Error(KA[82]);
                      if (FF[KA[30]] == FF[KA[7]]) return KA[28];
                      if (XA(WF[KA[20]] = FF[KA[22]][FF[KA[30]]] & KA[62], FF[KA[30]]++), (WF[KA[20]] & KA[59]) == KA[5]) return WF[KA[20]];
                      if ((WF[KA[20]] & KA[80]) == KA[76]) {
                        if (XA(WF[KA[30]] = uF(), WF[KA[22]] = (WF[KA[20]] & KA[79]) << KA[38] | WF[KA[30]]), WF[KA[22]] >= KA[59]) return WF[KA[22]];
                        throw Error(KA[83])
                      }
                      if ((WF[KA[20]] & KA[81]) == KA[80]) {
                        if (XA(WF[KA[30]] = uF(), WF[KA[84]] = uF(), WF[KA[22]] = (WF[KA[20]] & KA[52]) << KA[60] | WF[KA[30]] << KA[38] | WF[KA[84]]), WF[KA[22]] >= 2048) return SF(WF[KA[22]]), WF[KA[22]];
                        throw Error(KA[83])
                      }
                      if ((248 & WF[KA[20]]) == KA[81] && (XA(WF[KA[30]] = uF(), WF[KA[84]] = uF(), WF[-KA[85]] = uF(), WF[KA[22]] = (WF[KA[20]] & KA[14]) << KA[65] | WF[KA[30]] << KA[60] | WF[KA[84]] << KA[38] | WF[-KA[85]]), WF[KA[22]] >= KA[75] && WF[KA[22]] <= 1114111)) return WF[KA[22]];
                      throw Error("Invalid UTF-8 detected")
                    }
                    XA(FF[KA[1]] = KA[0], FF[KA[20]] = String.fromCharCode), XA(FF[KA[22]] = KA[2], FF[KA[7]] = KA[2], FF[KA[30]] = KA[2]), XA(FF[KA[5]].version = "3.0.0", FF[KA[5]].encode = function(FF) {
                      var SF, CF, uF, hF, bW = WF(FF);
                      for (XA(SF = bW.length, CF = -KA[0], uF = void 0, hF = ""); ++CF < SF;) XA(uF = bW[CF], hF += AF(uF));
                      return hF
                    }, FF[KA[5]].decode = function(...SF) {
                      for (XA(SF[KA[1]] = KA[0], FF[KA[22]] = WF(SF[KA[5]]), FF[KA[7]] = FF[KA[22]].length, FF[KA[30]] = KA[5], SF[KA[0]] = [], SF[KA[3]] = KA[2]);
                        (SF[KA[3]] = hF()) !== KA[28];) SF[KA[0]].push(SF[KA[3]]);
                      return function(...WF) {
                        for (XA(WF[KA[1]] = KA[0], WF[KA[20]] = WF[KA[5]].length, WF[-KA[77]] = -KA[0], WF[KA[7]] = KA[2], WF[-KA[76]] = ""); ++WF[-KA[77]] < WF[KA[20]];) WF[KA[7]] = WF[KA[5]][WF[-KA[77]]], WF[KA[7]] > KA[68] && XA(WF[KA[7]] -= KA[75], WF[-KA[76]] += FF[KA[20]](WF[KA[7]] >>> KA[34] & KA[57] | KA[72]), WF[KA[7]] = KA[74] | WF[KA[7]] & KA[57]), WF[-KA[76]] += FF[KA[20]](WF[KA[7]]);
                        return WF[-KA[76]]
                      }(SF[KA[0]])
                    })
                  }("undefined" === typeof exports ? this.utf8 = {} : exports)
                }
                if ("c7TTc_" in wA && RF(), !xW && xu(CF)) {
                  function iW(...FF) {
                    XA(FF[KA[1]] = KA[5], FF[-KA[27]] = function(...FF) {
                      if (XA(FF[KA[1]] = KA[0], FF[-KA[86]] = FF[KA[5]].length), FF[-KA[86]] < KA[3]) return KA[5];
                      if (XA(FF[KA[30]] = Math.max(...FF[KA[5]]), FF[-KA[42]] = Math.min(...FF[KA[5]])), FF[KA[30]] === FF[-KA[42]]) return KA[5];
                      for (XA(FF[KA[24]] = Array(FF[-KA[86]] - KA[0]).fill(Number.MAX_SAFE_INTEGER), FF[KA[23]] = Array(FF[-KA[86]] - KA[0]).fill(Number.MIN_SAFE_INTEGER), FF[-KA[89]] = Math.ceil((FF[KA[30]] - FF[-KA[42]]) / (FF[-KA[86]] - KA[0])), FF[KA[88]] = KA[5]), FF[KA[87]] = KA[5]; FF[KA[87]] < FF[-KA[86]]; FF[KA[87]]++) FF[KA[5]][FF[KA[87]]] !== FF[-KA[42]] && FF[KA[5]][FF[KA[87]]] !== FF[KA[30]] && XA(FF[KA[88]] = Math.floor((FF[KA[5]][FF[KA[87]]] - FF[-KA[42]]) / FF[-KA[89]]), FF[KA[24]][FF[KA[88]]] = Math.min(FF[KA[24]][FF[KA[88]]], FF[KA[5]][FF[KA[87]]]), FF[KA[23]][FF[KA[88]]] = Math.max(FF[KA[23]][FF[KA[88]]], FF[KA[5]][FF[KA[87]]]));
                      for (XA(FF[KA[35]] = Number.MIN_SAFE_INTEGER, FF[-KA[90]] = FF[-KA[42]]), FF[KA[17]] = KA[5]; FF[KA[17]] < FF[-KA[86]] - KA[0]; FF[KA[17]]++) FF[KA[24]][FF[KA[17]]] === Number.MAX_SAFE_INTEGER && FF[KA[23]][FF[KA[17]]] === Number.MIN_SAFE_INTEGER || XA(FF[KA[35]] = Math.max(FF[KA[35]], FF[KA[24]][FF[KA[17]]] - FF[-KA[90]]), FF[-KA[90]] = FF[KA[23]][FF[KA[17]]]);
                      return FF[KA[35]] = Math.max(FF[KA[35]], FF[KA[30]] - FF[-KA[90]]), FF[KA[35]]
                    }, console.log(FF[-KA[27]]))
                  }
                  "W0iOmAD" in wA && iW(), XA(OF[CF] = KA[36], NF[8 - KA[0]] = CF, xW = KA[36])
                }
              }
            } else mW < 4 && XA(OF[CF] = KA[36], LF[mW++] = CF)
          }
        },
        YF = (0, ZA[KA[88]])(FF),
        MF = YF ? YF.replaced : (() => {
          "HgZ7r_" + KA[19] in wA && function(...FF) {
            XA(FF[KA[1]] = KA[5], FF[-KA[21]] = function(...WF) {
              return XA(WF[KA[1]] = KA[7], WF[KA[7]] = {}), WF[KA[3]].length !== WF[KA[5]].length + WF[KA[0]].length ? KA[28] : FF[KA[91]](WF[KA[5]], WF[KA[0]], WF[KA[3]], KA[5], KA[5], KA[5], WF[KA[7]])
            }, FF[KA[91]] = function(...WF) {
              return XA(WF[KA[1]] = KA[14], WF[KA[14]] = KA[28]), WF[KA[23]] >= WF[KA[3]].length ? KA[36] : WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] !== KA[2] ? WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] : (WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] && WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] ? WF[KA[14]] = FF[KA[91]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) || FF[KA[91]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[5]][WF[KA[7]]] ? WF[KA[14]] = FF[KA[91]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]] + KA[0], WF[KA[22]], WF[KA[23]] + KA[0], WF[KA[38]]) : WF[KA[3]][WF[KA[23]]] === WF[KA[0]][WF[KA[22]]] && (WF[KA[14]] = FF[KA[91]](WF[KA[5]], WF[KA[0]], WF[KA[3]], WF[KA[7]], WF[KA[22]] + KA[0], WF[KA[23]] + KA[0], WF[KA[38]])), WF[KA[38]]["" + WF[KA[7]] + WF[KA[22]] + WF[KA[23]]] = WF[KA[14]], WF[KA[14]])
            }, console.log(FF[-KA[21]]))
          }();
          try {
            function WF() {
              const FF = require("path"),
                {
                  version: WF
                } = require("../../package"),
                {
                  version: SF
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: CF
                } = require("@redacted/components/package"),
                {
                  sdkVersion: AF
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), FF.resolve(__dirname, "../redacted.js")
            }
            return "oaHOvb" in wA && WF(), AF[FF]
          } catch {
            return KA[2]
          }
        })();
      if (tW(((...WF) => {
          WF[KA[1]] = KA[5], "uoU7YKX" in wA && function() {
            function FF(...FF) {
              FF[KA[1]] = KA[0];
              const WF = {};
              for (let SF of FF[KA[5]].replace(/[^w]/g, "").toLowerCase()) WF[SF] = WF[SF] + KA[0] || KA[0];
              return WF
            }

            function WF(FF, WF) {
              const SF = buildCharMap(FF),
                CF = buildCharMap(WF);
              for (let AF in SF)
                if (SF[AF] !== CF[AF]) return KA[28];
              return Object.keys(SF).length !== Object.keys(CF).length ? KA[28] : KA[36]
            }

            function SF(...FF) {
              FF[KA[1]] = KA[0];
              return CF(FF[KA[5]]) !== 1 / 0
            }

            function CF(...FF) {
              if (FF[KA[1]] = KA[0], !FF[KA[5]]) return -KA[0];
              const WF = CF(FF[KA[5]].left),
                SF = CF(FF[KA[5]].right),
                AF = Math.abs(WF - SF);
              if (WF === 1 / 0 || SF === 1 / 0 || AF > KA[0]) return 1 / 0;
              return Math.max(WF, SF) + KA[0]
            }
            window[KA[92] + KA[93] + KA[94] + KA[95]] = {
              buildCharacterMap: FF,
              isAnagrams: WF,
              isBalanced: SF,
              getHeightBalanced: CF
            }
          }(), AF[FF] = oF
        })), typeof MF === KA[96] + KA[97]) {
        const FF = MF;
        tW((() => {
          FF(oF)
        }))
      }
      if (YF) {
        const WF = YF.reports;
        tW((() => {
          for (const SF in WF)(0, PC[KA[98]])(PC[KA[109]], WF, [SF]) && SF !== FF && oF(SF, WF[SF])
        }))
      }
      const cW = YF ? KA[3] : KA[0];
      let GF = KA[28];
      const zW = (...WF) => (WF[KA[1]] = KA[5], qW ? KA[36] : (XA(WF[KA[99]] = KA[28], GF = !tW((() => {
          WF[KA[99]] = AF[FF] !== oF
        }))), WF[KA[99]])),
        IF = EF(((...WF) => {
          WF[KA[1]] = KA[5];
          const SF = (0, PC.G)(AF, FF);
          return (SF === KA[6] || void 0 === SF ? void 0 : SF.configurable) !== KA[28] || typeof SF[KA[123]] !== KA[96] + KA[97] || kW !== cW
        })),
        fF = {},
        yW = () => {
          try {
            return navigator[KA[118] + "tSub"]
          } catch {
            return fF
          }
        },
        sF = yW(),
        nF = SF,
        HF = nF === KA[6] ? ((...FF) => {
          FF[KA[1]] = KA[5];
          const WF = KA[16];
          XA(FF[KA[20]] = KA[28], FF[KA[100]] = WF - KA[0]);
          const SF = TextDecoder[KA[101] + KA[102]][KA[103]],
            CF = function() {
              FF[KA[100]]++, FF[KA[100]] === WF && (cu((() => eF(KA[28]))) && (FF[KA[20]] = KA[36]), FF[KA[100]] = KA[5]);
              for (var CF = arguments[KA[1]], AF = new Array(CF), uF = KA[5]; uF < CF; uF++) AF[uF] = arguments[uF];
              return (0, PC[KA[98]])(SF, this, AF)
            };
          return tW((() => {
            TextDecoder[KA[101] + KA[102]][KA[103]] = CF
          })), () => FF[KA[20]] ? KA[3] : zu((() => TextDecoder[KA[101] + KA[102]][KA[103]] !== CF ? KA[38] : KA[5]))
        })() : () => zu((() => nF[KA[116] + KA[117]]())),
        KF = (0, eW[KA[24]])(),
        wF = (0, PC[KA[37]])(KA[6]),
        XF = (0, PC[KA[37]])(KA[6]);
      let UF = KA[5],
        BF = KA[5],
        jW = KA[5];
      const vW = (0, PC[KA[37]])(KA[6]),
        JF = (0, PC[KA[37]])(KA[6]);
      let pF = KA[6],
        lF = (0, PC[KA[37]])(KA[6]);
      const FW = (...FF) => {
          XA(FF[KA[1]] = KA[3], wF[UF] = FF[KA[5]], XF[UF] = FF[KA[0]], UF++)
        },
        WW = (...FF) => (XA(FF[KA[1]] = KA[0], FF[KA[0]] = KA[2]), (FF[KA[0]] = (XF[FF[KA[5]]] ? JF : vW)[wF[FF[KA[5]]]]) !== KA[6] && void 0 !== FF[KA[0]] ? FF[KA[0]] : -KA[0]),
        CW = (0, PC[KA[8]])("d2lvNjQz"),
        AW = (0, PC[KA[8]])("amtsa2plZndu"),
        uW = [
          [(0, PC[KA[8]])("aW9qZndlODNq"), "2"],
          [(0, PC[KA[8]])("a3Bq"), "4"],
          [(0, PC[KA[8]])("dXJocmZm"), "5"]
        ],
        hW = [
          [(0, PC[KA[8]])(KA[105] + KA[104]), KA[133]],
          [(0, PC[KA[8]])(KA[105] + "w="), KA[98]]
        ],
        bS = (0, PC[KA[8]])("eTR5bnM="),
        dW = (0, PC[KA[8]])("aHRleWpldA=="),
        PW = [
          [(0, PC[KA[8]])("a3NhZmR1"), KA[8]],
          [(0, PC[KA[8]])("ZGZnYWFzZGFz"), KA[111]],
          [(0, PC[KA[8]])("c2RmbGpneGxmY2pr"), KA[106]],
          [(0, PC[KA[8]])("bGFzZWRraGFz"), "u"],
          [(0, PC[KA[8]])("cW16ZjhrM24="), KA[20]]
        ],
        RW = [
          [bS, KA[124]],
          [dW, KA[37]],
          [(0, PC[KA[8]])("bmI3ZnEy"), KA[30]]
        ],
        iS = (0, PC[KA[8]])("bGtxM20="),
        EW = (0, PC[KA[8]])("bWtxN3" + KA[104]),
        QW = ["mk:tw", "mk:jf"],
        rS = ((...FF) => {
          FF[KA[1]] = KA[5];
          try {
            return FF[-KA[107]] = KA[2], (FF[-KA[107]] = AF[(0, PC[KA[8]])("V2ViU29ja2V0")]) === KA[6] || void 0 === FF[-KA[107]] ? void 0 : FF[-KA[107]][KA[101] + KA[102]]
          } catch {
            return KA[2]
          }
        })(),
        gS = ["send", "close", "addEventListener", "removeEventListener", KA[114] + KA[113] + KA[106]],
        tS = ["onmessage", "onopen", "onclos" + KA[108], "onerro" + KA[8]];
      let TW = KA[28];
      const aS = (0, PC[KA[8]])("RXZlbnQ=");
      let kS = OW[KA[110]][KA[126]],
        qS = KA[5];
      const VW = (0, PC[KA[37]])(KA[6]),
        NW = CF[KA[1]];
      for (let dF = KA[5]; dF < NW; dF++) {
        const FF = (0, PC[KA[98]])(PC.U, CF, [dF]);
        VW[dF] = FF >= 99 && FF <= 122 ? FF : KA[5]
      }
      const DW = (...FF) => {
          return FF[KA[1]] = KA[3], typeof FF[KA[5]] === KA[96] + KA[97] && (0, PC[KA[98]])(PC[KA[112]], FF[KA[0]], [(WF = FF[KA[5]], (0, PC.o)(PC.x, WF, []))]) !== KA[6];
          var WF
        },
        LW = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        mS = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        xS = [
          [yu["Dispat" + KA[113] + KA[106]], () => !DW(EventTarget[KA[101] + KA[102]][KA[114] + KA[113] + KA[106]], LW)],
          [yu.PerformanceNow, () => !DW(performance[KA[115]], mS)],
          [yu.DateNow, () => !DW(Date[KA[115]], mS)]
        ],
        ZW = (0, PC[KA[37]])(KA[6]);
      let oW = KA[5];
      const YW = {
        stackCheck: () => cu((() => eF(KA[36]))),
        [KA[116] + KA[117]]: (...FF) => {
          FF[KA[1]] = KA[5];
          const WF = HF();
          if (WF === KA[3]) return KA[3];
          if (aW[CW]) return KA[7];
          const SF = zu((() => AF[AW] ? KA[22] : KA[5]));
          return SF !== KA[5] ? SF === KA[22] ? KA[22] : KA[5] : WF === GA ? KA[5] : WF === KA[38] ? KA[38] : (rW(), CF = Function[KA[101] + KA[102]], uF = KA[122], hF = (...FF) => (FF[KA[1]] = KA[0], FF[KA[5]].writable !== KA[36]), cu((() => {
            const FF = Object.getOwnPropertyDescriptor(CF, uF);
            return void 0 !== FF && hF(FF)
          })) ? KA[14] : KA[5]);
          var CF, uF, hF
        },
        indexPassReplaced: zW,
        [KA[118] + "tSubChanged"]: () => {
          if (sF === fF || GF) return KA[28];
          const FF = yW();
          return FF !== fF && FF !== sF
        },
        yS: (...FF) => {
          XA(FF[KA[1]] = KA[5], FF[KA[24]] = NW);
          for (let WF = KA[5]; WF < xS[KA[1]] + oW; WF++) {
            const SF = WF < xS[KA[1]] ? xS[WF] : ZW[WF - xS[KA[1]]];
            SF[KA[5]] < FF[KA[24]] && EF(SF[KA[0]]) && (FF[KA[24]] = SF[KA[5]])
          }
          return FF[KA[24]] < NW ? VW[FF[KA[24]]] : KA[5]
        },
        dC: () => KF ? eW[KA[15]] : KA[44],
        [KA[119] + KA[120] + "Subs"]: (...FF) => {
          FF[KA[1]] = KA[5];
          const WF = dF[KA[19]].jR[KA[119] + KA[120]];
          return typeof WF === KA[121] && WF > KA[5] ? WF > KA[68] ? KA[68] : WF : KA[5]
        },
        ["getCom" + KA[132]]: () => {
          var FF;
          UF = KA[5];
          for (let SF = KA[5]; SF < DF; SF++) FW(NF[SF], KA[36]);
          for (let SF = KA[5]; SF < uW[KA[1]]; SF++) aW[uW[SF][KA[5]]] && FW(uW[SF][KA[0]], KA[36]);
          const WF = zu((() => MA(atob[KA[122]](), RF) ? KA[5] : KA[0]));
          WF === KA[0] && FW(KA[88], KA[36]), rW();
          const CF = WF === GA ? GA : zu(((...FF) => {
            FF[KA[1]] = KA[5];
            const WF = Object.getOwnPropertyDescriptor(window, "atob");
            return WF === KA[2] ? GA : WF[KA[123]] !== KA[2] ? KA[0] : KA[5]
          }));
          CF === KA[0] && FW(KA[15], KA[36]);
          const AF = CF === GA;
          for (let SF = KA[5]; SF < hW[KA[1]] && !AF; SF++) aW[hW[SF][KA[5]]] && FW(hW[SF][KA[0]], KA[36]);
          const uF = UF > DF;
          let hF = KA[6];
          DF === KA[5] && (mW > KA[5] ? hF = LF[KA[5]] : ZF ? hF = "fp" : uF || (hF = aW[bS] ? KA[124] : aW[dW] ? KA[37] : KA[6]));
          for (let SF = KA[5]; SF < PW[KA[1]] && !AF; SF++) aW[PW[SF][KA[5]]] && FW(PW[SF][KA[0]], KA[36]);
          const bW = UF,
            dF = (0, YA[KA[30]])(),
            PF = dF !== KA[6] && (0, SW[KA[98]])(dF);
          PF && !AF && FW(dF, KA[28]), IF && FW("ix", KA[28]), VF && FW("il", KA[28]);
          for (let SF = KA[5]; SF < mW; SF++) FW(LF[SF], KA[36]);
          for (let SF = KA[5]; SF < RW[KA[1]]; SF++) aW[RW[SF][KA[5]]] && FW(RW[SF][KA[0]], KA[36]);
          aW[iS] && FW("mk:lk", KA[36]);
          const iW = ((...FF) => {
            FF[KA[1]] = KA[0];
            for (let WF = KA[5]; WF < QW[KA[1]]; WF++)
              if (FF[KA[5]] === QW[WF]) return QW[WF];
            return KA[6]
          })(aW[EW]);
          if (iW !== KA[6] && FW(iW, KA[36]), SF !== KA[6] && gW(SF.emitReplaced) === KA[36] && FW("mk:em", KA[36]), TW && FW("3s", KA[28]), PC[KA[125]] && FW("3b", KA[28]), rW(), QF && FW("3d", KA[28]), AF && FW("3g", KA[28]), dF === KA[6] || PF || FW(dF, KA[28]), UF === KA[5]) return KA[6];
          if (hF === KA[6] && XF[KA[5]] && !xu(wF[KA[5]]))
            for (let SF = KA[0]; SF < bW; SF++)
              if (XF[SF] && xu(wF[SF])) {
                const FF = wF[SF];
                for (let WF = SF; WF > KA[5]; WF--) XA(wF[WF] = wF[WF - KA[0]], XF[WF] = XF[WF - KA[0]]);
                XA(wF[KA[5]] = FF, XF[KA[5]] = KA[36]);
                break
              } let eF = KA[5],
            EF = hF === KA[6] ? KA[5] : bW;
          if (EF > KA[5] && dF !== KA[6] && PF && !AF) {
            for (let FF = EF; FF > KA[5]; FF--) XA(wF[FF] = wF[FF - KA[0]], XF[FF] = XF[FF - KA[0]]);
            XA(wF[KA[5]] = dF, XF[KA[5]] = KA[28], eF = KA[0], EF++)
          }
          let tW = KA[5];
          if (BF++ % KA[3] === KA[0])
            for (let SF = KA[0]; SF < UF; SF++) WW(SF) < WW(tW) && (tW = SF);
          const TF = wF[tW];
          (XF[tW] ? JF : vW)[TF] = jW++;
          const kW = tW >= eF && tW < EF;
          if (!XF[tW] || TF === hF || tW === KA[5] && !kW) return TF;
          const qW = (FF = hF) !== KA[6] && void 0 !== FF ? FF : wF[KA[5]];
          return qW !== pF && XA(pF = qW, lF = (0, PC[KA[37]])(KA[6])), lF[TF] ??= (OF = TF, `~${function(FF){return FF.length<2?FF:":"===FF[1]?FF[0]:FF[0]+FF[1]}(qW)}~${OF}`);
          var OF
        }
      };
      let MW = OW[KA[110]][KA[126]];
      const cS = () => kS !== OW[KA[110]][KA[126]] ? kS : MW;
      let GW = KA[5],
        zS = KA[3],
        IW = KA[5],
        fW = KA[5];
      return {
        checks: YW,
        checkEvent: (...FF) => {
          FF[KA[1]] = KA[0];
          try {
            const WF = AF[aS];
            if (typeof WF === KA[96] + KA[97] && !(FF[KA[5]] instanceof WF)) return kS = OW[KA[110]].NotEvent, KA[5];
            if (FF[KA[5]].isTrusted === KA[28]) return KA[5];
            let SF = KA[5];
            for (const CF in FF[KA[5]]) SF++;
            if (SF < KA[34]) return kS = OW[KA[110]]["FewPropertie" + KA[111]], KA[5];
            if (qS++ === KA[23]) return qS = KA[5], eF(KA[28]) ? OW[KA[88]].CheckFuncHit : KA[5]
          } catch {}
          return KA[5]
        },
        usedProp: cS,
        watchHeld: (FF, WF) => {
          let SF;
          const CF = tW((() => {
            SF = WF()
          }));
          ZW[oW++] = [FF, () => !CF || WF() !== SF]
        },
        lF: () => {
          const FF = zW();
          return ((...FF) => {
            if (XA(FF[KA[1]] = KA[0], FF[KA[20]] = KA[2], FF[KA[127]] = KA[2]), SF !== KA[6]) {
              const WF = gW(SF.RD),
                CF = "v3" === WF ? KA[7] : "v5" === WF ? KA[23] : "v6" === WF ? KA[38] : KA[3];
              CF !== KA[3] && (zS = CF);
              const AF = gW(SF["inbuil" + KA[130] + KA[131]]);
              typeof AF === KA[121] && AF >= KA[5] && AF <= KA[31] && (AF | KA[5]) === AF && (IW = AF), XA(FF[KA[20]] = gW(SF.reflectApplyHit), FF[KA[127]] = gW(SF.definerHit))
            }
            const WF = FF[KA[5]] ? KA[52] : "11" === FF[KA[127]] ? KA[31] : "13" === FF[KA[127]] ? KA[128] : FF[KA[20]] !== KA[2] && FF[KA[20]] !== KA[6] ? KA[3] : "10" === FF[KA[127]] ? KA[34] : "12" === FF[KA[127]] ? KA[60] : KA[5];
            WF !== KA[5] && (fW = WF)
          })(FF), GW++ % 10 === KA[5] && ((() => {
            const FF = WF();
            FF === KA[6] || TW || (TW = EF((() => {
              if (rS !== KA[2] && (0, PC.I)(FF) !== rS) return KA[36];
              for (let WF = KA[5]; WF < gS[KA[1]]; WF++)
                if ((0, PC[KA[98]])(PC[KA[109]], FF, [gS[WF]])) return KA[36];
              for (let WF = KA[5]; WF < tS[KA[1]]; WF++)
                if (FF[tS[WF]] !== KA[6] && FF[tS[WF]] !== KA[2]) return KA[36];
              return KA[28]
            })))
          })(), cu((() => !MA(AF[uF][KA[122]][KA[122]](), RF))) && (MW = MW === OW[KA[110]][KA[129]] ? OW[KA[110]][KA[129]] : OW[KA[110]].Fr), cu((() => !MA(AF[uF][KA[122]](), RF))) && (MW = OW[KA[110]][KA[129]])), {
            flags: FF ? OW[KA[88]].Butto : KA[5],
            values: [
              [OW[KA[19]].PhysicsVersion, zS],
              [OW[KA[19]]["Inbuil" + KA[130] + KA[131]], IW],
              [OW[KA[19]]["AltCom" + KA[132]], fW],
              [OW[KA[19]]["ProbeUsedPro" + KA[133]], cS()]
            ]
          }
        }
      }
    };
    const UA = "[bloxd-wasm-client]",
      BA = "bloxdWasmDownloadFailed",
      ju = sW.b,
      vu = "boot",
      JA = "playSources",
      pA = "wasmBuild",
      lA = "bloxd-wasm-joined",
      Fu = "bloxd-wasm-first-view",
      Wu = "bloxd-wasm-playable-legacy",
      Su = 1048576,
      Cu = 8 * Su,
      Au = 8,
      uu = 1048576,
      hu = 5e3,
      bh = 100,
      du = [2e3, 1e4, 3e4];
    let Pu = null,
      Ru = null,
      ih = !1,
      eu = !1,
      Eu = !1,
      Qu = null,
      rh = null,
      gh = null,
      th = null,
      Tu = null,
      ah = null,
      kh = null;
    const qh = new class {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = FF, this.soundOn = WF, this.now = SF, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var FF;
        null === (FF = this.player) || void 0 === FF || FF.prepare()
      }
      preload(FF) {
        var WF;
        this.stopped || (null === (WF = this.player) || void 0 === WF || WF.preload(FF))
      }
      cancelPreload() {
        var FF;
        null === (FF = this.player) || void 0 === FF || FF.cancelPreload()
      }
      load(FF) {
        if (null !== this.player || this.stopped) return;
        this.player = FF, FF.setMaster(this.master, this.soundOn);
        const WF = this.now(),
          SF = this.local;
        this.local = [];
        for (const AF of SF)
          if (!(AF.stopped || !AF.loop && WF - AF.at >= 300)) try {
            this.start(AF, FF, WF)
          } catch (CF) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", CF)
          }
      }
      start(FF, WF, SF) {
        const {
          name: CF,
          pos: AF,
          ear: uF,
          maxHearDist: hF,
          refDistance: bW,
          loop: dF,
          fade: PF
        } = FF, RF = WF.playGame(CF, NW(FF, SF), AF, uF, hF, bW, dF);
        if (FF.sound = RF, 1 !== FF.rate && RF.rate(FF.rate), null !== FF.panner && RF.setPannerAttr(FF.panner), null !== FF.moved && RF.setPosition(FF.moved), null !== PF && SF - PF.at < PF.ms) {
          const WF = VW(this.master);
          WF > 0 ? RF.fade(0, FF.volume * WF, PF.at + PF.ms - SF) : RF.setRelativeVolume(FF.volume)
        }
      }
      onAudioEvent(FF, WF, SF, CF) {
        var AF, uF;
        return null === (AF = null === (uF = this.player) || void 0 === uF ? void 0 : uF.onAudioEvent(FF, WF, SF, CF)) || void 0 === AF || AF
      }
      applyListener(FF) {
        var WF;
        null === (WF = this.player) || void 0 === WF || WF.applyListener(FF)
      }
      playGame(FF, WF, SF, CF, AF, uF, hF) {
        if (this.stopped) return qS.c;
        if (this.player) return this.player.playGame(FF, WF, SF, CF, AF, uF, hF);
        const bW = this.now();
        this.local = this.local.filter((FF => !FF.stopped && (FF.loop || bW - FF.at < 300)));
        const dF = {
          name: FF,
          volume: VW(WF),
          fade: null,
          pos: SF && [SF[0], SF[1], SF[2]],
          ear: CF && [CF[0], CF[1], CF[2]],
          maxHearDist: AF,
          refDistance: uF,
          loop: hF,
          rate: 1,
          panner: null,
          moved: null,
          at: bW,
          stopped: !1,
          sound: null
        };
        this.local.push(dF);
        const PF = {
          stop: () => {
            var FF;
            return dF.stopped = !0, null === (FF = dF.sound) || void 0 === FF || FF.stop(), PF
          },
          fade: (FF, WF, SF) => {
            if (dF.sound) return dF.sound.fade(FF, WF, SF), PF;
            const CF = VW(this.master),
              AF = VW(CF > 0 ? WF / CF : WF > 0 ? dF.volume : 0),
              uF = this.now(),
              hF = NW(dF, uF);
            return dF.volume = AF, dF.fade = SF > 0 && hF !== AF ? {
              from: hF,
              at: uF,
              ms: SF
            } : null, PF
          },
          rate: FF => (dF.sound ? dF.sound.rate(FF) : dF.rate = FF, PF),
          getVolume: () => dF.sound ? dF.sound.getVolume() : dF.volume * VW(this.master),
          getRelativeVolume: () => dF.sound ? dF.sound.getRelativeVolume() : dF.volume,
          setRelativeVolume: FF => (dF.sound ? dF.sound.setRelativeVolume(FF) : (dF.volume = VW(FF), dF.fade = null), PF),
          setPannerAttr: FF => (dF.sound ? dF.sound.setPannerAttr(FF) : dF.panner = {
            ...FF
          }, PF),
          setPosition: FF => (dF.sound ? dF.sound.setPosition(FF) : dF.moved = [FF[0], FF[1], FF[2]], PF)
        };
        return PF
      }
      setMaster(FF, WF) {
        var SF;
        this.master = FF, this.soundOn = WF, null === (SF = this.player) || void 0 === SF || SF.setMaster(FF, WF)
      }
      stop() {
        var FF;
        this.stopped = !0, null === (FF = this.player) || void 0 === FF || FF.stopAll();
        for (const WF of this.local) WF.stopped = !0;
        this.local = []
      }
    }((0, EW.c)(), !0);
    let Vu = {
        wasm: "unknown",
        client: String(jW.c)
      },
      Nu = null,
      Du = () => {};
    const Lu = new Promise((FF => {
      Du = FF
    }));
    let mh = () => {};
    const Ou = new Promise((FF => {
      mh = FF
    }));
    let xh = null,
      Zu = null,
      ou = null,
      Yu = null,
      Mu = null,
      ch = null,
      Gu = null,
      zh = null,
      Iu = null,
      fu = null,
      yh = null,
      su = null,
      nu = null,
      Hu = null,
      Ku = null,
      wu = null,
      Xu = null,
      Uu = null,
      Bu = !1,
      jh = null;
    const vh = new Set,
      Ju = new Set;

    function pu(FF) {
      if (!vh.has(FF)) {
        vh.add(FF);
        for (const SF of Ju) try {
          SF(FF)
        } catch (WF) {
          console.error(`${UA} a startup listener threw`, WF)
        }
      }
    }

    function lu(FF) {
      Bu = !0, FF.isStopped || pu("texturesIn")
    }
    let Fh = 1,
      Wh = -1 / 0,
      Sh = !1,
      Ch = !1,
      Ah = 0,
      uh = null,
      hh = !1;
    const bb = {
      dropped: -1 / 0
    };
    let dh = 0,
      Ph = 0,
      Rh = null,
      ib = null,
      eh = null,
      Eh = null;
    const Qh = new WeakMap;
    let rb = null,
      gb = null,
      tb = null,
      Th = null,
      ab = null,
      kb = null,
      qb = null,
      Vh = null,
      Nh = -1 / 0,
      Dh = null;
    const Lh = new Set;
    let mb = !1,
      Oh = null;
    const xb = new Map,
      Zh = new Set;
    let oh = !1;
    const Yh = {
      adapter: null,
      boundAtMs: null
    };
    let Mh = null,
      cb = () => [0, 0],
      Gh = () => {},
      zb = () => {},
      Ih = null,
      fh = null;
    const yb = new class {
      constructor(FF) {
        this.reached = FF, this.next = 1
      }
      observe(FF) {
        if (!(FF < this.next)) {
          for (; this.next <= FF;) this.next *= 2;
          this.reached(FF)
        }
      }
    }((FF => {
      console.warn(`${UA} chunk cancels from the server this session: ${FF}`)
    }));
    let sh = null,
      nh = null,
      Hh = null,
      Kh = null,
      wh = !1,
      Xh = !1,
      Uh = null,
      Bh = !1,
      jb = !1,
      vb = !0,
      Jh = null,
      ph = !1,
      lh = !1,
      Fb = !1;

    function Wb() {
      return gh ??= Promise.all([SF.e(194), SF.e(125), SF.e(48)]).then((() => SF(41156))).then((FF => (rh = FF, Object.assign(globalThis, {
        bloxdPreviewPage: FF.pagePreviews()
      }), FF)), (FF => {
        throw gh = null, FF
      })), gh
    }

    function Sb() {
      return Qu ??= SF.e(46).then((() => SF(41165))).catch((FF => {
        throw Qu = null, new TF.c(FF)
      })), Qu
    }
    class Cb {
      constructor() {
        this.host = null
      }
      open(FF) {
        return null !== this.host ? FF(this.host) : Wb().then((WF => (this.host ??= new WF.WasmPreviewHost(WF.pagePreviews()), FF(this.host))))
      }
      openMob(FF) {
        return this.open((WF => WF.openMob(FF)))
      }
      openPet(FF) {
        return this.open((WF => WF.openPet(FF)))
      }
      openMobLineup(FF) {
        return this.open((WF => WF.openMobLineup(FF)))
      }
      openCharacter(FF) {
        return this.open((WF => WF.openCharacter(FF)))
      }
    }

    function Ab() {
      Eu || (Eu = !0, SA.e.setHost(new Cb), (0, dS.l)(), JC.e.setFollower(Jb), Object.assign(globalThis, {
        bloxdPreviews: SA.e
      }))
    }

    function ub() {
      Wb().then((FF => {
        FF.pagePreviews().prefetch()
      }), (() => {}))
    }

    function hb() {
      let FF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (eu) return;
      eu = !0, jb = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), vb = !jb, console.info(`${UA} starting`), ih || (ih = !0, (0, kS.u)(new tS(Lb, cd)), (0, iW.s)(new TW), (0, kS.r)(new aS), (0, kS.l)()), Ab(), (0, eS.setCrashScreen)((FF => {
        let {
          text: WF,
          reload: SF
        } = FF;
        ! function(FF, WF) {
          var SF, CF;
          if (ph) return;
          ph = !0, (0, XW.g)(), null === (SF = Dh) || void 0 === SF || SF.abort(), Dh = null, lC.release();
          const AF = jb ? null !== (CF = FF.cancel) && void 0 !== CF ? CF : "general:back" : null;
          SC({
            ...FF,
            cancel: AF
          }).then((FF => {
            FF && WF && lh ? (0, fF.f)(AW.l) : FF && WF ? (0, fF.g)() : jb && (0, fF.d)("/")
          }))
        }(WF, SF)
      })), (0, HC.j)(), (0, eW.d)();
      let WF = null;
      try {
        WF = HA("o9zdqxzm6b", (() => {
          var FF, WF;
          return null !== (FF = null === (WF = xh) || void 0 === WF ? void 0 : WF.ws) && void 0 !== FF ? FF : null
        }), FF, "vmphqyinrw")
      } catch (AF) {
        console.error(`${UA} probes`, AF)
      }
      const CF = function() {
        const FF = (0, hC.j)(),
          WF = (0, hC.e)();
        let SF = !1;
        return CF => {
          FF && !SF && (SF = !0, (0, eS.reportStaleBuildReload)(FF, WF, CF))
        }
      }();
      lb(), jb || function() {
        const FF = function(FF) {
          var WF;
          const SF = new URLSearchParams(FF),
            CF = SF.get("game");
          return CF ? {
            game: CF,
            lobby: null !== (WF = SF.get("lobby")) && void 0 !== WF ? WF : null
          } : null
        }(window.location.search);
        if (FF) return (0, vW.j)(FF.game) && lb().request(), void Pb(FF.game, FF.lobby);
        const WF = new URLSearchParams(window.location.search).get("ws");
        if (!WF) return;
        Lu.then((FF => {
          FF && async function(FF, WF) {
            try {
              await (0, TF.m)(FF), gb = yd(new WebSocket(WF)), null !== gb && lC.setGame(null), bd()
            } catch (AF) {
              console.error(`${UA} ?ws=${WF} did not attach`, AF)
            }
          }(FF, WF)
        }))
      }(), async function(FF) {
        var WF, CF, uF;
        if ("undefined" === typeof WebAssembly) return Kb("noWebAssembly", "This browser has no WebAssembly"), null;
        const hF = await (0, dA.J)();
        if ((0, eS.setCrashBackend)((0, sW.s)(hF) ? "unsupported" : null !== (WF = null === hF || void 0 === hF ? void 0 : hF.backend) && void 0 !== WF ? WF : "none"), (0, sW.s)(hF)) return Kb("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${hF.missing.join(", ")}`, {
          missing: hF.missing.join(",")
        }), null;
        const bW = null !== (CF = null === hF || void 0 === hF ? void 0 : hF.backend) && void 0 !== CF ? CF : null;
        Yh.adapter = null !== (uF = null === hF || void 0 === hF ? void 0 : hF.adapter) && void 0 !== uF ? uF : null, Yh.boundAtMs = null;
        const PF = !(0, sW.P)();
        null !== hF && "none" !== hF.reason && console.info(`${UA} drawing with ${hF.backend}: ${hF.reason}`);
        const RF = (0, dA.z)();
        mh(!0), (0, TF.t)((FF => {
          try {
            null !== bW && (Ih = FF.startSkyFeed, Bb(), function(FF) {
              var WF, SF;
              cb = FF.rasterText, Th = FF.setTextLocalPlayer, FF.setTextLocalPlayer(null !== (WF = null === (SF = tb) || void 0 === SF ? void 0 : SF.info.playerDbId) && void 0 !== WF ? WF : null), Gh = FF.drainTextRerasters, zb = FF.loadTextIcons, FF.warmText((() => wh)), FF.textChanged(), wh && setTimeout(zb, 0)
            }(FF), fh = FF.startShellAnalytics, hd())
          } finally {
            Fb || (Hh = FF.followMenuPrefs({
              setSoundPrefs: zd,
              setEnvPrefs: Ib,
              setUiPrefs: Gb,
              setLookPrefs: fb
            }))
          }
        })), (0, TF.o)(qh).catch((FF => {
          console.warn(`${UA} the game code did not load: a join asks again`, FF)
        }));
        const iW = (0, dA.m)(hF);
        let eF, EF;
        iW.catch((() => {})), "loading" === (0, pF.E)() && ku();
        try {
          eF = function(FF) {
            const WF = null !== FF && void 0 !== FF ? FF : document.createElement("canvas"),
              SF = (0, YS.f)(),
              CF = (0, YS.h)(SF);
            return WF.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, EA.g)(WF, CF), (0, YS.c)(WF, SF), WF.width = CF.bufferWidth, WF.height = CF.bufferHeight, md(WF, vb), Jh = WF, document.body.append(WF), WF
          }(null === bW ? null : await (await Wb()).pagePreviews().beginSession())
        } catch (AF) {
          return await Zd({
            site: pA,
            error: AF
          }, (() => {
            (0, eS.showUnsupported)((0, lS.s)("fetch"), NA.f.fetch, `the previews did not load: ${String(AF)}`)
          })), null
        }
        ku();
        try {
          EF = await iW
        } catch (AF) {
          return await Zd({
            site: pA,
            error: AF
          }, (() => {
            (0, eS.showUnsupported)((0, lS.s)("fetch"), NA.f.fetch, `the ${null!==bW&&void 0!==bW?bW:"client"} build did not load: ${String(AF)}`)
          })), null
        }
        const QF = (0, dA.f)(),
          rW = !QF && !0 !== iC.k.getItem(BA),
          gW = !QF && "loading" === (0, pF.E)();
        await (0, lF.i)(EF, CW.g, {
          reloadFailedDownload: rW
        }), gW && !(0, pF.P)() && await (0, lF.i)(EF, CW.g, {
          reloadFailedDownload: rW
        });
        TA = performance.now();
        const aW = Vu;
        if (!(0, pF.P)()) {
          (0, pF.O)() && iC.k.setItem(BA, !0);
          const FF = (0, pF.t)();
          if ("call" === FF) Nd({
            site: nW.v,
            error: (0, pF.p)(),
            header: null
          }, aW);
          else {
            const WF = null !== FF && void 0 !== FF ? FF : "instantiate",
              SF = () => {
                (0, eS.showUnsupported)((0, lS.s)(WF), NA.f[WF], (0, pF.j)())
              };
            if ("compile" !== FF && "instantiate" !== FF || !wb())
              if ("fetch" === WF) {
                const FF = [EF.url().href, CW.g.url().href];
                await Zd({
                  site: pA,
                  error: (0, pF.j)(),
                  urls: FF
                }, SF)
              } else SF();
            else {
              const WF = (0, pF.j)(),
                SF = (0, xS.l)((0, pF.p)());
              (0, eS.reportCountedLoadFallback)((0, lS.s)(FF), NA.f[FF], WF, SF), Xb(`the wasm client did not ${FF} here (${WF})`, {
                forThisPageOnly: !SF
              })
            }
          }
          return null
        }(0, FW.G)(EF.url()) && (0, eS.reportUnstreamedCoreLoad)();
        const kW = (0, pF.F)();
        let qW, VF = aW;
        try {
          VF = {
            ...aW,
            wasm: kW.mW()
          };
          const {
            nh: FF
          } = EF.uC, WF = FF.iRF();
          if (WF !== OW.B) return Nd({
            site: nW.d,
            error: `core ABI ${WF}, page ABI ${OW.B}`,
            header: null
          }, VF), null;
          const [SF, CF] = (0, OW.Yd)();
          qW = new FF(SF, CF)
        } catch (AF) {
          return Nd({
            site: nW.d,
            error: AF,
            header: null
          }, VF), null
        }
        Vu = VF, Nu = EF.uC;
        const NF = new nW.j(qW, pF.y, {
          onCrash: FF => {
            PF && function(FF, WF, SF) {
              if ("webgpu" !== WF || (0, dA.c)()) return !1;
              const CF = function(FF) {
                if (FF.site === nW.f && (0, sW.v)(FF.error)) return "frames_refused";
                return FF.site === ju && (0, sW.w)(FF.error) ? "start_failed" : null
              }(FF);
              if (null === CF || !(0, sW.M)()) return !1;
              return (0, eS.reportRenderReload)("webgpu", "start_failed" === CF ? 0 : 1, SF, {
                cause: CF,
                error: FF.error,
                context: Yh
              }), iP(), !0
            }(FF, bW, VF) || Nd(FF, VF)
          },
          onNetEvent: Rd,
          onCoreErrors: (FF, WF) => {
            var SF;
            (0, eS.reportCoreErrors)(FF, WF, VF, ((FF, WF) => {
              var SF;
              return null === (SF = Mh) || void 0 === SF ? void 0 : SF.APF(FF, WF)
            })), null === (SF = jh) || void 0 === SF || SF.coreErrors(FF)
          },
          onRenderReload: (FF, WF) => {
            ! function(FF, WF, SF, CF) {
              if ((0, dA.c)()) return;
              const AF = WF === OW.tc.WEBGPU,
                uF = (0, sW.O)(Mh),
                hF = AF ? (0, sW.K)(CF) : null;
              if (null !== hF) {
                const WF = void 0 === uF ? "" : ` (${uF.message})`;
                return void FF.crash(eS.RENDER_RELOAD_SITE, new Error(`the WebGPU device was lost (${SF}) and ${hF}${WF}`))
              }(0, eS.reportRenderReload)(AF ? "webgpu" : "webgl", SF, Vu, {
                error: uF,
                context: Yh
              }), iP()
            }(NF, FF, WF, PF)
          },
          onEnvEvent: FF => {
            var WF;
            FF.kind === OW.R.SkyImages && (null === (WF = wu) || void 0 === WF || WF.onEvent(FF.payload))
          },
          onImages: FF => {
            var WF;
            null === (WF = Xu) || void 0 === WF || WF.onEvent(FF)
          },
          onModelRequest: FF => {
            var WF;
            null === (WF = nu) || void 0 === WF || WF.request(FF)
          },
          onModelTaken: (FF, WF) => {
            var SF;
            null === (SF = nu) || void 0 === SF || SF.taken(FF, WF)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(FF, WF) {
                const SF = kh;
                if (null === SF || FF.isStopped) return;
                SF.restore((FF => {
                  (0, eS.reportTerrainTextureFailure)(FF, WF)
                })).then((WF => {
                  !1 !== WF || FF.isStopped ? !0 === WF && console.info(`${UA} terrain textures handed over again after the renderer lost them`) : console.warn(`${UA} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(NF, VF)
            }))
          },
          onKeepAlive: FF => {
            const WF = null === Eh ? void 0 : Qh.get(Eh);
            void 0 !== WF && iA(WF, FF)
          }
        });
        if (th = NF, null !== FF) {
          NF.setAntiCheatProbes(IA(pF.y, FF.checks)), FF.watchHeld(yu.CoreFrame, (() => NF.frame)), FF.watchHeld(yu.GlueFrame, (() => qW.frame));
          const WF = nA(FF, ((FF, WF, SF) => {
            let CF = !1;
            return Od(NF, (() => {
              CF = NF.rings.input.writeRecord(OW.hb.AntiCheat, FF, WF, SF, 0)
            })), CF
          }));
          NF.isStopped ? WF.stop() : yh = WF
        }
        Pu = (FF, WF, SF) => NF.rings.cmd.writeCmd(FF, WF, SF), Ru = FF => NF.rings.cmd.growForCmd(FF), hh = !1, Bb(), (0, TF.x)(NF, {
          core: qW,
          memory: pF.y,
          staleOr: (FF, WF, SF) => Zd({
            site: FF,
            error: WF
          }, SF),
          reportReplayFault: (FF, WF) => {
            (0, eS.reportReplayFault)(FF, WF, Vu)
          },
          audio: qh,
          options: uW.d,
          onNetEvent: Rd,
          sessionInfo: FF => {
            var WF;
            return (null === (WF = tb) || void 0 === WF ? void 0 : WF.conn) === FF ? tb.info : null
          },
          onEventOverflow: Nb,
          replayShaderPack: FF => {
            var WF;
            null === (WF = jh) || void 0 === WF || WF.replay(FF)
          },
          hasPackModel: FF => {
            var WF, SF;
            return null !== (null !== (WF = null === (SF = jd()) || void 0 === SF ? void 0 : SF.modelUrl(FF)) && void 0 !== WF ? WF : null)
          },
          beforeWrite: () => (!Sh && NF.rings.net.cursor > 0 && Ed(NF, !1, "all"), !NF.isStopped),
          beforeOp: () => (!Sh && NF.netWrittenSinceFrame > 0 && Ed(NF, !1, "budget"), !NF.isStopped)
        }), (0, tW.H)({
          lockPointer: () => {
            if (!NS(eF)) return !1;
            try {
              Promise.resolve(eF.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, ES.b)()
          },
          leaveGame: () => {
            Vb()
          },
          canvas: () => eF
        }), su = (0, tW.w)((() => {
          var FF;
          const WF = (0, TF.j)();
          null === (FF = (0, TF.r)()) || void 0 === FF || FF.followCursorAim(!0 === (null === WF || void 0 === WF ? void 0 : WF.isSessionLive) ? WF : null)
        })), Rh && NF.setUiPrefs(Rh);
        ib && NF.setEnvPrefs(ib);
        eh && NF.setLookPrefs(eh);
        const DF = iu ? eA(iu.preventMovement) : null;
        DF && Mb(DF);
        const LF = hS(),
          mW = function(FF, WF) {
            return FF.setChunkCap(WF.chunkCap)
          }(NF, LF);
        Iu = LF.basis, (0, RS.l)(null === mW ? null : (0, HW.o)(mW)), zh = mW;
        const OF = (0, WW.d)();
        let xW = 1 / 0,
          ZF = !0;
        const oF = new yA(OF, (() => qW.jb()), (FF => {
          NF.crash(nW.p, FF)
        }));
        ch = oF, Gu = oF, null !== mW && oF.setCeiling(Math.min(YC(mW), xW));
        ZF && oF.setShed((FF => {
          const WF = NF.shedMemory("joinReserve" !== FF);
          return null !== WF && (null === zh || WF < zh) && (zh = WF, (0, RS.l)((0, HW.o)(WF))), WF
        }), ((FF, WF, SF) => {
          1 === WF ? (0, eS.reportMemoryShed)({
            cause: FF,
            ...SF
          }, Vu) : console.warn(`${UA} wasm memory: refused again (${FF}): shed ${WF}`, SF.wasmMemoryShed)
        }), (() => NF.addDistanceInUse()));
        window.addEventListener("pagehide", (() => {
          ch === oF && (oF.refreshStats(), mP(oF))
        })), window.addEventListener("pagehide", ed);
        const [YF, MF] = (0, bC.d)();
        Kh = (0, PS.h)((FF => NF.setChunkAddDistance(FF.horizontal, FF.vertical)), {
          horizontal: YF,
          vertical: MF
        }), NF.setAmbientOcclusion(!0 !== iC.h.getItem("disableAmbientOcclusion")), NF.setPoseLod(!0 !== iC.h.getItem(JF.R));
        const cW = function(FF, WF, SF, CF) {
          const AF = new nS,
            uF = FF => iC.h.getItem(FF);
          AF.sync(uF, WF), (0, rS.Y)();
          const hF = (0, dF.l)("customBindingsChanged", (() => {
            AF.sync(uF, WF)
          }));
          (0, QS.q)(WF);
          const bW = new Set,
            PF = (0, tW.w)((() => {
              var FF;
              bW.size > 0 && XS() && !0 === (null === (FF = (0, TF.j)()) || void 0 === FF ? void 0 : FF.localPlayerAlive()) && dF.j.Uu("usedKeyboard")
            })),
            RF = oS(FF, WF, {
              prevents: FF => AF.prevents(FF),
              keyPressed: FF => {
                AF.moves(FF) && (bW.add(FF), XS() && dF.j.Uu("usedKeyboard"))
              },
              keyReleased: FF => {
                bW.delete(FF)
              },
              keysReleased: () => {
                bW.clear()
              },
              resized: () => {
                KS.f.measure(), (0, MS.g)()
              },
              sizeCanvas: () => (0, YS.l)(FF),
              watchRenderScale: WF => (0, YS.n)(FF, WF),
              touchStarting: () => {
                KS.f.measure()
              },
              viewShown: SF,
              touchUiShown: () => yW.b.get("isTouchScreen"),
              ctrlCombosAreGames: XS,
              inspect: (FF, WF, SF) => {
                AF.checks(WF, SF) && CF(FF)
              },
              canLock: () => NS(FF)
            }),
            iW = (0, kC.c)(WF);
          return () => {
            hF(), PF(), (0, QS.q)(null), iW(), RF()
          }
        }(eF, ((FF, WF, SF, CF, AF) => {
          var uF;
          Od(NF, (() => {
            NF.rings.input.writeRecord(FF, WF, SF, CF, AF)
          })), null === (uF = yh) || void 0 === uF || uF.onInput(FF), !Ch && (0, JS.e)(FF, AF) && (0, JS.b)((() => {
            th !== NF || Fb || NF.isStopped || !Td() || Ed(NF, !1, "budget", !1)
          }))
        }), (() => vb), (FF => {
          var WF;
          null === (WF = yh) || void 0 === WF || WF.onEvent(FF)
        }));
        if (NF.isStopped) return cW(), null;
        Zu = cW;
        const GF = () => !NF.isStopped && !ph;
        if (NF.isStopped) return null;
        (0, pF.V)((() => {
          "call" === (0, pF.t)() && NF.crash(nW.v, (0, pF.p)())
        }));
        const zW = (0, nW.P)(NF.rings.worker, (() => {
          Ed(NF, !1, "budget")
        }));
        ou = function(FF, WF) {
          return xP().catch((() => {})), new LA({
            module: (0, pF.A)(),
            decodeSettings: FF => {
              const WF = (0, TF.r)();
              if (null === WF) throw new Error("no game code to decode the world-gen seed with");
              return WF.decodeMapSettings(FF)
            },
            loadWorker: xP,
            onLoadFailed: FF => {
              (0, eS.reportWorldgenLoadFailure)(FF, Vu)
            },
            onWorkerLost: FF => {
              (0, eS.reportWorkerLost)(nW.D, FF, Vu)
            },
            onStartTimeout: FF => {
              (0, eS.reportWorkerStartTimeout)(nW.D, FF, Vu)
            },
            onGaveUp: FF => {
              (0, eS.reportWorldgenGaveUp)(FF, Vu)
            },
            onMemoryStats: FF => {
              var WF;
              null === (WF = ch) || void 0 === WF || WF.noteWorldgen(FF)
            },
            write: (SF, CF, AF, uF) => {
              Od(FF, (() => {
                FF.rings.worker.writeWorkerRecord(SF, CF, AF, 0, uF) || FF.crash(nW.D, `a world-gen record of kind ${CF} did not fit the worker-in ring`)
              })), WF()
            }
          })
        }(NF, zW), Mu = function(FF, WF) {
          return new VC({
            module: (0, pF.A)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: FF
              }, WF] = await Promise.all([SF.e(34).then((() => SF(41210))), Promise.resolve().then((() => SF(89))).then((FF => {
                let {
                  isMobile: WF
                } = FF;
                return WF()
              }), (() => !1))]);
              return {
                create: FF,
                count: (0, iS.c)(navigator.hardwareConcurrency, WF)
              }
            },
            write: (SF, CF, AF, uF, hF) => {
              (0, MS.i)(), Od(FF, (() => {
                FF.rings.worker.writeWorkerRecord(SF, CF, AF, uF, hF) || FF.crash(nW.q, `a meshing record of kind ${CF} did not fit the worker-in ring`)
              })), WF()
            },
            onWorkerLost: FF => {
              (0, eS.reportWorkerLost)(nW.q, FF, Vu)
            },
            onStartTimeout: FF => {
              (0, eS.reportWorkerStartTimeout)(nW.q, FF, Vu)
            },
            onMemoryStats: (FF, WF) => {
              var SF;
              null === (SF = ch) || void 0 === SF || SF.noteMeshWorker(FF, WF)
            },
            fail: (WF, SF) => {
              const CF = () => {
                FF.crash(nW.q, void 0 === SF ? WF : new Error(WF, {
                  cause: SF
                }))
              };
              void 0 !== SF ? Zd({
                site: nW.q,
                error: SF
              }, CF) : CF()
            }
          })
        }(NF, zW);
        const fF = (0, FA.r)(PW.clientSideServerUrls.staticUrl, {
            onTableFailed: FF => {
              Zd({
                site: eS.MODEL_FEED_SITE,
                error: FF
              }, (() => {}), GF)
            },
            packUrl: FF => {
              var WF, SF;
              return null !== (WF = null === (SF = jd()) || void 0 === SF ? void 0 : SF.modelUrl(FF)) && void 0 !== WF ? WF : null
            }
          }),
          sF = function(FF, WF, SF) {
            const CF = SF => {
              var CF, AF;
              return null !== (CF = null === (AF = WF()) || void 0 === AF ? void 0 : AF.drawnUrl(SF)) && void 0 !== CF ? CF : FF.url(SF)
            };
            return (0, JC.i)((0, KC.o)(CF), SF)
          }(fF, (() => nu), jd),
          nF = new KC.h(sF, (FF => {
            console.warn(`${UA} image ${FF.key.kind}:${FF.key.index}:${FF.key.word} failed`, FF.error)
          }));
        Xu = nF, Uu = new jA(NF, sF, ((FF, WF) => {
          void 0 === WF ? console.warn(`${UA} ${FF}`) : pb(FF, WF)
        }));
        const HF = new vA.i(fF, function(FF, WF) {
          let CF = !1,
            AF = null,
            uF = null;
          const hF = {
              onUnavailable: (SF, CF) => {
                uF ??= Zd({
                  site: eS.MODEL_POOL_SITE,
                  error: SF,
                  urls: CF
                }, (() => {
                  (0, eS.reportModelPoolFailure)(SF, FF)
                }), WF)
              },
              onDecoderFailed: (SF, CF) => {
                const AF = () => {
                  (0, eS.reportDracoDecoderFailure)(SF, FF)
                };
                void 0 !== CF ? Zd({
                  site: eS.MODEL_POOL_SITE,
                  error: SF,
                  urls: CF
                }, AF, WF) : AF()
              },
              onWorkerLost: WF => {
                (0, eS.reportWorkerLost)(eS.MODEL_POOL_SITE, WF, FF)
              }
            },
            bW = SF.e(36).then((() => SF(41217))).then((FF => {
              let {
                pageModelPool: WF
              } = FF;
              if (CF) return null;
              const SF = WF(hF);
              return AF = SF.unlisten, Hu = SF.pool, SF.pool
            }), (FF => (CF || hF.onUnavailable(FF, void 0), null)));
          return Ku = () => {
            var FF;
            CF = !0, null === (FF = AF) || void 0 === FF || FF(), Hu = null
          }, (FF, WF) => bW.then((SF => {
            var CF;
            return null !== (CF = null === SF || void 0 === SF ? void 0 : SF.build(FF, WF)) && void 0 !== CF ? CF : (0, WA.p)(FF, "the model workers did not load")
          })).then((FF => null !== uF && (0, WA.m)(FF) ? uF.then((() => FF)) : FF))
        }(VF, GF), (FF => {
          FF.startup ? (Vd(), Zd({
            site: eS.MODEL_FEED_SITE,
            error: FF.error,
            urls: "" === FF.url ? void 0 : [FF.url]
          }, (() => {
            (0, eS.reportModelFailure)(FF, VF)
          }))) : (0, eS.reportModelFailure)(FF, VF)
        }), {
          onWritten: (FF, WF) => {
            nF.glbWritten(FF, WF)
          },
          onTaken: (FF, WF) => {
            nF.glbTaken(FF, WF)
          },
          onPackFileFailed: (FF, WF) => {
            console.warn(`${UA} the texture pack's model file ${FF} failed: the shipped one loads`, WF)
          }
        });
        nu = HF;
        const KF = new XC.f(NF);
        kh = KF, KF.swap((FF => {
          const WF = () => {
            (0, eS.reportTerrainTextureFailure)(FF, VF)
          };
          if (wh) return void WF();
          const SF = () => !wh,
            CF = null === FF.url ? void 0 : [FF.url];
          Zd({
            site: nW.A,
            error: FF.error,
            urls: CF
          }, WF, SF)
        })).then((FF => {
          null !== FF && (FF || NF.isStopped || console.warn(`${UA} the core refused the terrain textures: terrain draws untextured`), lu(NF))
        }));
        const wF = new LW(NF, ((FF, WF) => {
          console.warn(`${UA} ${FF}`, ...void 0 === WF ? [] : [WF])
        }));
        wF.feed(), null !== bW && function(FF, WF, CF, AF, uF, hF) {
          let bW = null,
            dF = null,
            PF = !1;
          const RF = {
            textures: null,
            stop: () => {
              var FF, WF;
              PF = !0, null === (FF = dF) || void 0 === FF || FF(), null === (WF = bW) || void 0 === WF || WF(), lC.setSettled(null), null !== Nu && db.clear(Nu)
            }
          };
          ah = RF, dF = lb().follow((dF => {
            null !== dF && Promise.all([SF.e(175), SF.e(39)]).then((() => SF(41181))).then((SF => {
              let {
                PackTextures: iW
              } = SF;
              if (PF || FF.isStopped) return;
              const eF = new iW({
                feed: dF,
                terrain: WF,
                backend: CF,
                stopped: () => FF.isStopped,
                landed: () => {
                  lu(FF)
                },
                packSwapped: () => {
                  (0, JC.f)(AF), hF.feed((() => async function(FF) {
                    const WF = null === FF ? null : await FF.averageColours;
                    return null === WF ? mS() : DW(WF)
                  }(eF.assets))), vd(eF.iconOverrides()), uF.refresh().then((FF => {
                    null !== FF && console.info(`${UA} texture pack models: ${FF.resent} of ${FF.delivered} files written again, ${FF.refetched} refetched`)
                  }))
                },
                settled: (FF, WF, SF) => {
                  var CF;
                  (lC.setSettled({
                    state: FF,
                    files: WF
                  }), SF) || function(FF) {
                    const WF = Nu;
                    null !== WF && db.apply(WF, FF).then((WF => {
                      WF && FF && console.info(`${UA} the texture pack's animations are in (${Object.keys(FF).length} files)`)
                    }))
                  }(null === (CF = FF.pack) || void 0 === CF ? void 0 : CF.animations)
                },
                settling: () => {
                  lC.setSettled(null)
                },
                warn: pb,
                maxTextureSize: () => Promise.resolve((0, sW.R)(document.createElement("canvas")))
              });
              RF.textures = eF, bW = eF.start()
            }), (FF => {
              console.warn(`${UA} the texture pack's terrain didn't load: the built atlas stays`, FF)
            }))
          }))
        }(NF, KF, bW, nF, HF, wF);
        const XF = () => {
            NF.setTextureLayers("")
          },
          UF = FF => {
            (dW ??= SF.e(42).then((() => SF(41221))).then((FF => {
              let {
                TEXTURE_NAMES: WF
              } = FF;
              return WF
            }), (FF => {
              throw dW = null, FF
            })), dW).then((FF => {
              NF.setTextureLayers(FF) || NF.isStopped || (console.warn(`${UA} the core refused the texture names: textured Boxes draw textureNotFound`), XF())
            }), (WF => {
              if (NF.isStopped) return;
              const [SF, ...CF] = FF;
              void 0 === SF ? Zd({
                site: eS.TEXTURE_NAMES_SITE,
                error: WF
              }, (() => {
                console.warn(`${UA} the texture names didn't load, so textured Boxes draw textureNotFound`, WF), XF()
              }), GF) : setTimeout((() => {
                UF(CF)
              }), SF)
            }))
          };
        if (UF(du), null !== bW && !await async function(FF, WF, SF, CF, uF, hF) {
            var bW;
            const dF = (0, sW.G)(SF);
            if (null === dF) return FF.crash(ju, new Error(`this ${CF} build has no openRenderer`)), !1;
            let PF;
            Mh = dF;
            try {
              var RF, iW, eF, EF;
              const AF = null !== (RF = null === (iW = rh) || void 0 === iW ? void 0 : iW.pagePreviews()) && void 0 !== RF ? RF : null,
                bW = null !== (eF = null === (EF = rh) || void 0 === EF ? void 0 : EF.previewModule(SF)) && void 0 !== eF ? eF : null;
              if (null === AF || null === bW) {
                null === AF || void 0 === AF || AF.endSession(!1), PF = (0, YS.f)().sampleCount, await (0, sW.c)(WF, dF, hF, Ub, PF, await uF);
                const FF = (0, sW.o)(SF);
                null === FF && console.warn(`${UA} this ${CF} build has no image registry: sky and model images won't show`), (0, wC.f)(FF)
              } else {
                (0, dA.c)() && await new Promise((() => {}));
                const SF = (0, dA.C)();
                if (null !== SF) {
                  const WF = (0, sW.O)(dF);
                  return FF.crash(eS.RENDER_RELOAD_SITE, new Error(`${SF}${void 0===WF?"":` (${WF.message})`}`)), !1
                }
                PF = await AF.bindSession(bW, WF, (async FF => (0, sW.x)(dF, ju, hF, FF, Ub, await uF)))
              }
            } catch (AF) {
              return FF.crash(ju, AF), !1
            }(function(FF, WF) {
              const SF = FF,
                {
                  requestCapture: CF,
                  takeCapture: AF
                } = SF;
              if ("function" !== typeof CF || "function" !== typeof AF) return;
              const uF = {
                request() {
                  CF.call(SF, WF)
                },
                take() {
                  var FF;
                  return null !== (FF = AF.call(SF)) && void 0 !== FF ? FF : null
                }
              };
              window[QA] = uF
            })(WF, PF), oh = !0;
            const QF = performance.now();
            return Yh.boundAtMs = null !== (bW = (0, dA.F)()) && void 0 !== bW ? bW : QF, console.info(`${UA} ${CF} renderer bound at ${Math.round(QF)} ms`), !FF.isStopped
          }(NF, qW, kW, bW, RF, eF)) return null;
        if (null !== bW) {
          var BF, jW, vW;
          (0, SW.z)(bW);
          const FF = () => !NF.isStopped && tP();
          SF.e(172).then((() => SF(8135))).then((WF => {
            let {
              devTools: SF
            } = WF;
            NF.isStopped || SF.setHost(function(FF) {
              return {
                tools: bu,
                async downloadScene(WF, SF) {
                  let {
                    width: CF,
                    height: AF,
                    colouring: uF
                  } = SF;
                  "screenshot" === WF && null === uF ? await (0, AA.e)(FF, CF, AF) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(FF, WF) {
              return {
                canvas: FF,
                maxTextureSize: uA,
                drawing: WF,
                resize: (FF, WF) => {
                  (0, QS.t)(OW.hb.Resize, 0, FF, WF, (0, QS.m)(1))
                },
                restoreSize: () => {
                  const WF = (0, YS.l)(FF);
                  null !== WF && (0, QS.t)(OW.hb.Resize, 0, WF.cssWidth, WF.cssHeight, (0, QS.m)(WF.renderScale))
                },
                onFrameDrawn: FF => (hA.add(FF), () => {
                  hA.delete(FF)
                })
              }
            }(eF, FF)))
          }), (FF => {
            console.warn(`${UA} the developer tools didn't load: no captures this session`, FF)
          }));
          const WF = "webgpu" === bW && null !== (BF = null === hF || void 0 === hF || null === (jW = hF.adapter) || void 0 === jW ? void 0 : jW.vendor) && void 0 !== BF ? BF : null;
          sh = {
            backend: bW,
            canvas: eF,
            fallbackReason: null !== (vW = null === hF || void 0 === hF ? void 0 : hF.reason) && void 0 !== vW ? vW : null,
            adapterVendor: WF
          }, hd();
          try {
            (0, MS.q)(bW, eF, WF)
          } catch (AF) {
            (0, MS.t)(), console.error(`${UA} the quality steps didn't start`, AF)
          }
        }
        const AW = (0, IF.d)(hF, (0, QW.i)());
        if (jh = (0, IF.e)("webgpu" === bW ? NF : null, AW, pb), Fb) return null;
        if (oF.reserveAtJoin(function(FF) {
            return FF >= HW.d ? cA : GC
          }(null !== mW && void 0 !== mW ? mW : HW.f)), NF.isStopped) return null;
        const hW = FF => {
          if (null !== nh) try {
            nh.animationFrame(FF)
          } catch (AF) {
            Pd(AF)
          }
          if (function(FF, WF) {
              return WF && !Fb && !Ch && Td() && tP() && FF.framePaces(performance.now())
            }(NF, vb)) return NF.writePendingInput(), (0, tW.h)(FF, Qd), bP(!1, FF), void requestAnimationFrame(hW);
          Ed(NF, vb, "budget") && ((0, gS.k)(NF.lastFrameKind) && tP() && (0, tW.h)(FF, Qd), bP(vb && Bh, FF), Dd(NF), oF.afterFrame(), requestAnimationFrame(hW))
        };
        requestAnimationFrame(hW);
        return function(FF) {
          if (FF.has("inputLog") && (0, HS.h)((FF => {
              let {
                action: WF,
                down: SF,
                press: CF
              } = FF;
              console.info(`${wS} input ${WF} ${SF?"down":"up"} press ${CF} at ${performance.now().toFixed(1)}`)
            })), FF.has("inputDump")) {
            const FF = [];
            US = FF, Object.assign(window, {
              bloxdInputDump: () => FF.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), fu = function(FF, WF) {
          let SF = null;
          const CF = () => {
              null !== SF && (clearInterval(SF), SF = null)
            },
            AF = () => {
              document.hidden ? SF ??= setInterval((() => {
                Ed(FF, !1, "budget") ? (Dd(FF), WF.afterFrame()) : CF()
              }), bh) : CF()
            };
          return document.addEventListener("visibilitychange", AF), AF(), () => {
            CF(), document.removeEventListener("visibilitychange", AF)
          }
        }(NF, oF), NF
      }(WF).then((FF => {
        var WF;
        (CF(Vu), mh(null !== FF), Du(FF), null === FF) ? null === (WF = rh) || void 0 === WF || WF.pagePreviews().endSession(null === (0, pF.t)()): pu("booted")
      }), (FF => {
        CF(Vu), mh(!1), Du(null), Nd({
          site: vu,
          error: FF,
          header: null
        }, Vu)
      }))
    }

    function bd() {
      const FF = Nu;
      null !== FF && Wb().then((WF => {
        let {
          pageBuiltInAnimationPack: SF
        } = WF;
        SF().provide(FF)
      }), (FF => {
        console.warn(`${UA} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, FF)
      }))
    }
    const db = new class {
      constructor(FF) {
        this.deps = FF, this.latest = 0, this.yS = null
      }
      apply(FF, WF) {
        return this.load(FF, WF, 0)
      }
      async load(FF, WF, SF) {
        var CF;
        const AF = ++this.latest,
          uF = this.deps.compiler;
        if (void 0 === WF || null === WF || "object" !== typeof WF || 0 === Object.keys(WF).length || null === uF) return this.drop(FF), !1;
        if ((null === (CF = this.yS) || void 0 === CF ? void 0 : CF.module) === FF && (0, GW.be)(this.yS.files, WF)) return !1;
        try {
          const [SF, CF] = await Promise.all([uF(), this.deps.builtIns()]);
          if (AF !== this.latest) return !1;
          const hF = await SF(WF, yS, {
            builtIns: CF
          });
          if (AF !== this.latest) return !1;
          const bW = this.call(FF, hF);
          if (void 0 === bW) throw new fW("the compiled animations didn't read against the built-in pack");
          return this.yS = {
              module: FF,
              files: WF
            },
            function(FF) {
              for (let WF = 0; WF + 2 < FF.length; WF += 3) {
                ("error" === FF[WF] ? console.error : console.warn)(`Animation for the texture pack: ${FF[WF+1]}: ${FF[WF+2]}`)
              }
            }(bW), !0
        } catch (bW) {
          var hF;
          if (AF !== this.latest) return !1;
          this.drop(FF), 0 === SF && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", bW);
          const CF = (null !== (hF = this.deps.retryAfterMs) && void 0 !== hF ? hF : IW)[SF];
          return void 0 === CF || bW instanceof fW || (0, zS.k)(FF) || setTimeout((() => {
            AF === this.latest && this.load(FF, WF, SF + 1)
          }), CF), !1
        }
      }
      call(FF, WF) {
        try {
          return FF.RPF(WF)
        } catch (SF) {
          throw (0, zS.m)(FF, SF), SF
        }
      }
      clear(FF) {
        this.latest++, this.drop(FF)
      }
      drop(FF) {
        const WF = this.yS;
        if (this.yS = null, (null === WF || void 0 === WF ? void 0 : WF.module) === FF && !(0, zS.k)(FF)) try {
          this.call(FF, null)
        } catch {}
      }
    }({
      compiler: oW.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: FF
        } = await Wb();
        return FF().whenSet()
      },
      warn: pb
    });
    async function Pb(FF, WF) {
      let CF = !1;
      await Rb({
        matchmake: async () => {
          const {
            guestJoinTarget: AF,
            guestJoinWithPack: uF
          } = await SF.e(322).then((() => SF(41174)));
          return CF ? AF(FF, WF, Wd()) : (CF = !0, uF(FF, WF, (WF => Sd(FF, WF)), Wd))
        },
        onFailure: FF => {
          (0, eS.showJoinFailure)(FF, Vu)
        },
        rejoin: Ob,
        invalidateTrafficCode: xd
      })
    }
    async function Rb(FF) {
      let {
        matchmake: WF,
        onFailure: SF,
        rejoin: AF,
        invalidateTrafficCode: uF,
        pageReady: hF,
        signal: bW
      } = FF;
      const dF = () => !0 === (null === bW || void 0 === bW ? void 0 : bW.aborted);
      let PF;
      const RF = lC.rejoinHold(),
        iW = (0, XW.A)("wasm", Ld);
      let eF = !1,
        EF = performance.now();
      try {
        if (!await Ou) return {
          kind: "stopped"
        };
        if (dF()) return {
          kind: "Qh"
        };
        Sb().catch((() => {}));
        let FF = await WF();
        EF = performance.now();
        const SF = () => performance.now() - FF.matchedAt <= FF.freshMs,
          CF = Eb(FF.target).catch((() => {}));
        SF() && !dF() && (PF = new TC(FF.target, {
          signal: bW
        }));
        const uF = performance.now();
        if (null === await Lu) return {
          kind: "stopped"
        };
        var QF;
        if (function(FF) {
            var WF, SF;
            if (ru.d.markGameEngineConstructed(), au) return;
            au = !0;
            const CF = Math.max(FF, null !== (WF = tu) && void 0 !== WF ? WF : FF);
            (0, gu.h)("ready", Math.max(0, (null !== (SF = TA) && void 0 !== SF ? SF : CF) - CF) / 1e3)
          }(uF), await CF, !SF() && !dF()) null === (QF = PF) || void 0 === QF || QF.rematched(), FF = await WF(), EF = performance.now();
        if (dF()) return {
          kind: "Qh"
        };
        const RF = await async function(FF) {
          var WF, SF, CF;
          let {
            signal: AF,
            rejoin: uF = null,
            early: hF,
            pageReady: bW
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== AF && void 0 !== AF && AF.aborted) throw new DOMException("the join was left", "AbortError");
          const dF = (PF = kb, RF = performance.now(), null !== PF && RF - PF < AC);
          var PF, RF;
          kb = null;
          const iW = new AbortController;
          td({
            controller: iW,
            game: null !== (WF = null === (SF = FF.session) || void 0 === SF ? void 0 : SF.gameNameWithVariation) && void 0 !== WF ? WF : null
          }), qb = null, null === (CF = Dh) || void 0 === CF || CF.abort(), Dh = null, mb = !1, Oh = null, xb.clear();
          const eF = () => {
            (0, RW.e)(iW, (0, RW.b)(AF))
          };
          null === AF || void 0 === AF || AF.addEventListener("abort", eF, {
            once: !0
          });
          try {
            var EF, QF;
            const WF = await Lu;
            if (null === WF || WF.isStopped || Fb) throw new Error("no core is running to join a game with");
            if (FF.session && null !== jh) {
              const WF = await Qb(jh.join(FF.session.gameNameWithVariation), iW.signal);
              if (null !== WF) throw new IF.b(WF)
            }
            const [, , , {
              joinRoom: SF
            }] = await Qb(Promise.all([(0, TF.m)(WF), Eb(FF), null === bW || void 0 === bW ? void 0 : bW(), Sb()]), iW.signal), CF = FF.session, AF = CF ? {
              ...Yb,
              attachSocket: WF => {
                const SF = yd(WF, FF.endpoint);
                var AF;
                null !== SF && (tb = {
                  conn: SF,
                  info: CF
                }, null === (AF = Th) || void 0 === AF || AF(CF.playerDbId));
                return SF
              }
            } : Yb, PF = await SF(AF, FF, {
              signal: iW.signal,
              early: hF
            }).catch((FF => {
              throw function(FF) {
                if (!(FF instanceof xW.b)) return FF;
                if ("roomError" === FF.stage && null !== Oh) return eb(new xW.b(FF.message, FF.stage, FF.code, Oh), FF);
                const WF = "closed" === FF.stage && null !== Vh ? xb.get(Vh.conn) : void 0;
                return void 0 === WF ? FF : eb(new xW.b(FF.message, FF.stage, WF.code), FF)
              }(FF)
            }));
            if (rb !== iW) throw PF.AC(), new DOMException("the join was left", "AbortError");
            ad(PF);
            const RF = function(FF) {
              var WF, SF;
              const {
                session: CF
              } = FF, AF = void 0 === CF ? FF.joinOptions.lobbyName : CF.lobbyName;
              return {
                endpoint: FF.endpoint,
                game: null !== (WF = null === CF || void 0 === CF ? void 0 : CF.gameNameWithVariation) && void 0 !== WF ? WF : FF.roomName,
                lobby: String(null !== AF && void 0 !== AF ? AF : null),
                postCookies: null !== (SF = FF.postCookies) && void 0 !== SF ? SF : null
              }
            }(FF);
            Qh.set(PF, RF), EC(RF);
            const eF = performance.now(),
              rW = {
                conn: PF.conn,
                rejoin: uF,
                game: null !== (EF = null === (QF = FF.session) || void 0 === QF ? void 0 : QF.gameNameWithVariation) && void 0 !== EF ? EF : "",
                joinedAt: eF,
                rejoinedAt: dF ? eF : null,
                overflow: null
              };
            ab = rW, performance.mark(lA), bd(), console.info(`${UA} joined ${FF.roomName} as ${PF.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const gW = qb;
            qb = null, null !== gW && Db(rW, gW.mask, gW.frames);
            const tW = xb.get(PF.conn);
            return xb.clear(), void 0 !== tW && (ad(null), Zb(PF.conn, tW.code, tW.reason)), PF
          } finally {
            var rW;
            null === AF || void 0 === AF || AF.removeEventListener("abort", eF), rb === iW && Tb(Eh, null), (null === (rW = Vh) || void 0 === rW ? void 0 : rW.join) === iW && (Vh = null)
          }
        }(FF.target, {
          signal: bW,
          rejoin: AF(FF.target),
          early: PF,
          pageReady: hF
        });
        return eF = !0, {
          kind: "joined",
          game: RF
        }
      } catch (gW) {
        if (gW instanceof DOMException && "AbortError" === gW.name || dF()) return {
          kind: "Qh"
        };
        if (Fb) return {
          kind: "stopped"
        };
        if (mb && (mb = !1, await uF().catch((FF => {
            console.warn(`${UA} the cached traffic code could not be dropped`, FF)
          }))), null === await Lu) return {
          kind: "stopped"
        };
        if (gW instanceof IF.b) return SF(gW, performance.now() - EF), {
          kind: "failed",
          error: gW,
          reloading: !1
        };
        if (gW instanceof xW.b && gW.code === CF.e.wasmClientNotAllowed.code && jb) return Xb("this server refused the wasm client to this account"), {
          kind: "failed",
          error: gW,
          reloading: !0
        };
        const FF = gW instanceof xW.b && gW.code === CF.e.outdatedVersion.code,
          WF = () => null === Eh,
          AF = await Zd({
            site: eS.JOIN_SITE,
            error: gW,
            outdated: FF
          }, (() => {
            SF(gW, performance.now() - EF)
          }), WF);
        return {
          kind: "failed",
          error: gW,
          reloading: AF
        }
      } finally {
        var rW;
        eF || iW.end(), lC.releaseHold(RF);
        const FF = null === (rW = PF) || void 0 === rW ? void 0 : rW.release();
        FF && (0, eS.reportUnusedSeat)(FF, Vu)
      }
    }

    function eb(FF, WF) {
      return FF.stack = WF.stack, FF
    }

    function Eb(FF) {
      return FF.session ? (0, TF.p)(qh, FF.session.gameNameWithVariation) : Promise.resolve()
    }

    function Qb(FF, WF) {
      return (0, RW.h)(WF), new Promise(((SF, CF) => {
        const AF = () => {
          CF((0, RW.b)(WF))
        };
        WF.addEventListener("abort", AF, {
          once: !0
        }), FF.then((FF => {
          WF.removeEventListener("abort", AF), SF(FF)
        }), (FF => {
          WF.removeEventListener("abort", AF), CF(FF)
        }))
      }))
    }

    function rd() {
      var FF, WF;
      return null !== (FF = null === (WF = jh) || void 0 === WF ? void 0 : WF.runsInJoinedGame()) && void 0 !== FF && FF
    }

    function gd() {
      td(null)
    }

    function td(FF) {
      var WF, SF, CF;
      null === xh || xh.left || (xh.left = !0, null === (CF = (0, TF.j)()) || void 0 === CF || CF.socketLeft(), (0, iW.w)({
        websocketUrl: null
      }));
      rb && (0, RW.e)(rb, new DOMException("the join was left", "AbortError")), qd(null !== FF), null === (WF = jh) || void 0 === WF || WF.AC();
      const AF = Eh;
      null !== FF && lC.setGame(FF.game), Tb(null, null !== (SF = null === FF || void 0 === FF ? void 0 : FF.controller) && void 0 !== SF ? SF : null), null === AF || void 0 === AF || AF.AC(), kd(0), (0, hW.e)()
    }

    function Tb(FF, WF) {
      Eh = FF, rb = WF, null === Eh && null === rb && lC.setGame(void 0)
    }

    function ad(FF) {
      Tb(FF, rb)
    }

    function kd(FF) {
      const WF = th;
      return null !== Pu && !Fb && null !== WF && !WF.isStopped && (!!Pu(xW.g, 0, (0, xW.r)(FF)) && (hh = !0, 0 === FF || Ch || Ed(WF, !1, "all"), !0))
    }

    function qd() {
      var FF, WF;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, XW.g)();
      const SF = null !== (FF = null === (WF = ab) || void 0 === WF ? void 0 : WF.overflow) && void 0 !== FF ? FF : null;
      ab = null, null !== SF && (0, eS.reportEventOverflow)(SF, Vu)
    }

    function Vb() {
      null !== Eh || null !== rb ? gd() : sb()
    }

    function Nb(FF, WF) {
      console.warn(`${UA} the event buffer refused records in ${WF} frames (categories ${FF})`), Fb || (null !== ab ? Db(ab, FF, WF) : null !== rb && function(FF, WF, SF) {
        var CF;
        const AF = function(FF, WF) {
          return null === FF ? "drop" : FF.activated ? "keep" : 0 !== (WF & CC.j.NetSession) ? "fail" : "drop"
        }((null === (CF = Vh) || void 0 === CF ? void 0 : CF.join) === FF ? Vh : null, WF);
        "keep" === AF ? qb = {
          mask: WF,
          frames: SF
        } : "fail" === AF && (0, RW.e)(FF, new Error("the join's net session was lost to an event overflow"))
      }(rb, FF, WF))
    }

    function Db(FF, WF, SF) {
      const CF = FF.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      CF.frames += SF, CF.acks++, CF.mask |= WF;
      const AF = function(FF, WF, SF) {
        if (0 === (FF & CC.j.NetSession)) return "none";
        const CF = null !== WF.rejoinedAt && SF - WF.rejoinedAt < uC;
        return null === WF.rejoin || CF ? "fail" : "rejoin"
      }(WF, FF, performance.now());
      "none" !== AF && queueMicrotask((() => {
        if (ab !== FF) return;
        const WF = "rejoin" === AF && performance.now() - Nh >= OF.f;
        CF.outcome = WF ? "rejoined" : "failed", ob(function(FF, WF) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: FF,
            automaticallyReconnect: WF,
            requiresRefresh: !1
          }
        }(null !== FF.rejoin, WF), FF.rejoin, WF), gd(), WF && (kb = performance.now())
      }))
    }

    function Lb(FF) {
      vb = FF, Jh && md(Jh, FF)
    }

    function md(FF, WF) {
      FF.style.visibility = WF ? "visible" : "hidden"
    }

    function Ob(FF) {
      var WF;
      const SF = FF.roomName,
        CF = null !== (WF = FF.joinOptions.lobbyName) && void 0 !== WF ? WF : null;
      return () => {
        Pb(SF, CF)
      }
    }

    function xd() {
      return SF.e(322).then((() => SF(41174))).then((FF => {
        let {
          invalidateGuestTrafficCode: WF
        } = FF;
        return WF()
      })).catch((FF => {
        console.warn(`${UA} the cached traffic code could not be dropped`, FF)
      }))
    }

    function Zb(FF, WF, SF) {
      var AF, uF;
      if (Fb) return;
      if ((null === (AF = ab) || void 0 === AF ? void 0 : AF.conn) !== FF) return void(null !== rb && xb.set(FF, {
        code: WF,
        reason: SF
      }));
      const {
        rejoin: hF,
        game: bW,
        joinedAt: dF
      } = ab;
      qd();
      const PF = (0, OF.i)(WF, (0, bA.c)(FF));
      if (console.info(`${UA} the game's connection closed with code ${WF} (${null!==(uF=PF.name)&&void 0!==uF?uF:"unrecognised"})`), WF !== CF.e.gameOrPluginKick.code && (0, eS.reportDisconnect)(PF, Vu, {
          closeReason: SF,
          sinceJoinedMs: performance.now() - dF,
          game: bW
        }), PF.requiresRefresh) {
        const FF = "outdatedVersion" === PF.name,
          SF = new Error(`the game's connection closed with code ${WF}`),
          CF = () => null === ab && null === rb;
        return void Zd({
          site: eS.JOIN_SITE,
          error: SF,
          outdated: FF
        }, (() => {
          CF() && ob(PF, null, !1)
        }), CF)
      }
      const RF = PF.canReconnect ? hF : null,
        iW = null !== RF && PF.automaticallyReconnect && performance.now() - Nh >= OF.f;
      ob(PF, RF, iW)
    }

    function ob(FF, WF, SF) {
      var CF;
      if (ph) return;
      lC.unwantedLeave(SF && null !== WF && 0 === Lh.size), null === (CF = Dh) || void 0 === CF || CF.abort();
      const AF = new AbortController;
      Dh = AF;
      const uF = null === WF ? null : () => {
        AF.signal.aborted || (AF.abort(), WF())
      };
      if (SF && null !== uF) {
        Nh = performance.now();
        const FF = setTimeout(uF, OF.e);
        AF.signal.addEventListener("abort", (() => {
          clearTimeout(FF)
        }))
      }
      const hF = {
        code: FF.code,
        name: FF.name,
        reason: FF.reason,
        reconnect: uF,
        reconnecting: SF,
        requiresRefresh: FF.requiresRefresh
      };
      if (Lh.size > 0)
        for (const dF of [...Lh]) try {
          dF(hF)
        } catch (bW) {
          console.error(`${UA} an unwanted-leave listener threw`, bW)
        } else SC((0, lS.k)(FF, null !== uF, SF), AF.signal).then((WF => {
          WF && (null !== uF ? uF() : FF.requiresRefresh && (0, fF.g)())
        }))
    }
    const Yb = {
      attachSocket: FF => yd(FF),
      onConnection: FF => (Zh.add(FF), () => {
        Zh.delete(FF)
      }),
      sendRaw: (FF, WF) => {
        const SF = xh;
        return null !== SF && SF.conn === FF && qP(SF, WF)
      },
      leaveRoom: kd,
      closeSocket: FF => {
        var WF;
        (null === (WF = xh) || void 0 === WF ? void 0 : WF.conn) === FF && sb()
      }
    };

    function Mb(FF) {
      let {
        aux: WF,
        payload: SF
      } = FF;
      const CF = th;
      return null !== CF && !CF.isStopped && (CF.queueOptions(WF, SF), !0)
    }

    function cd(FF, WF) {
      Mb(function(FF, WF) {
        return iu = FF ? {
          preventMovement: WF
        } : null, FF ? eA(WF) : {
          aux: OW.Ib.AdEnd,
          payload: RA
        }
      }(FF, WF))
    }

    function Gb(FF) {
      var WF;
      Rh = FF, null === (WF = th) || void 0 === WF || WF.setUiPrefs(FF)
    }

    function zd(FF, WF) {
      qh.setMaster(FF, WF)
    }

    function Ib(FF) {
      var WF;
      ib = FF, null === (WF = th) || void 0 === WF || WF.setEnvPrefs(FF)
    }

    function fb(FF) {
      var WF;
      eh = FF, null === (WF = th) || void 0 === WF || WF.setLookPrefs(FF)
    }

    function yd(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(FF.url).origin;
      if (FF.readyState === WebSocket.CLOSING || FF.readyState === WebSocket.CLOSED) return console.warn(`${UA} a closing or closed socket can't be attached`), null;
      const CF = th;
      if (!CF || CF.isStopped) return console.warn(`${UA} no core is running to attach a socket to`), FF.close(), null;
      if (null === (0, TF.j)()) return console.warn(`${UA} the game has not started to attach a socket to`), FF.close(), null;
      if (Fh > OW.z) return console.warn(`${UA} this core has attached all the sockets it can; reload to play on`), FF.close(), null;
      if (hh && !Ch && (Ed(CF, !1, "all"), CF.isStopped || Fb)) return FF.close(), null;
      sb();
      const AF = Fh++;
      if (!Hb(CF, "open", AF)) return FF.close(), null;
      Vh = null === rb ? null : {
        join: rb,
        conn: AF,
        activated: !1
      }, FF.binaryType = "arraybuffer";
      const uF = {
          ws: FF,
          conn: AF,
          pending: [],
          pendingBytes: 0,
          left: !1,
          detach: () => {
            FF.removeEventListener("message", hF), FF.removeEventListener("open", bW), FF.removeEventListener("close", dF)
          }
        },
        hF = FF => {
          FF.data instanceof ArrayBuffer && function(FF, WF, SF) {
            Od(FF, (() => {
              FF.rings.net.writeFrame(WF, SF) || FF.crash(nW.t, `a socket frame of ${SF.byteLength} bytes did not fit the net-in ring`)
            }));
            const CF = FF.rings.net.cursor >= Cu;
            (CF || FF.netWrittenSinceFrame >= Su || document.hidden && performance.now() - Wh >= bh) && Ed(FF, !1, "budget")
          }(CF, AF, new Uint8Array(FF.data))
        },
        bW = () => {
          for (const WF of uF.pending.splice(0)) FF.send(WF);
          uF.pendingBytes = 0
        },
        dF = FF => {
          xh === uF && CF.rings.net.cursor > 0 && Ed(CF, !1, "all"), xh === uF && (uF.detach(), xh = null, Hb(CF, "close", AF), nb(AF, uF.left), Zb(AF, FF.code, FF.reason))
        };
      return FF.addEventListener("message", hF), FF.addEventListener("open", bW), FF.addEventListener("close", dF), xh = uF, null === (WF = (0, TF.j)()) || void 0 === WF || WF.socketAttached(AF), (0, iW.w)({
        websocketUrl: SF
      }), AF
    }

    function sb() {
      const FF = xh;
      FF && (xh = null, FF.detach(), FF.ws.close(), th && Hb(th, "close", FF.conn), nb(FF.conn, FF.left))
    }

    function nb(FF, WF) {
      var SF;
      null === (SF = (0, TF.j)()) || void 0 === SF || SF.closeGame(FF), (0, PA.c)().close(FF), WF || (0, iW.w)({
        websocketUrl: null
      })
    }

    function Hb(FF, WF, SF) {
      let CF = !1;
      return Od(FF, (() => {
        const {
          net: AF
        } = FF.rings;
        CF = "open" === WF ? AF.writeOpen(SF) : AF.writeClose(SF), CF || FF.crash(nW.t, `a socket ${WF} did not fit the net-in ring`)
      })), CF
    }

    function Kb(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (wb()) return (0, eS.reportUnsupportedFallback)(FF, WF, SF), void Xb(`the wasm client can't run here (${WF})`);
      (0, eS.showUnsupported)(FF, "unsupported", WF, SF)
    }

    function wb() {
      return jb && "wasm" !== (0, AW.c)(window.location.search)
    }

    function Xb(FF) {
      let {
        forThisPageOnly: WF = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      console.warn(`${UA} ${FF}: reloading on the JS client`), WF || (0, AW.g)();
      const SF = () => {
        (0, fF.f)(AW.l)
      };
      (0, eS.flushCrashReports)(fF.c).then(SF, SF)
    }

    function Ub(FF, WF, SF, CF) {
      return cb(FF, WF, SF, CF)
    }

    function Bb() {
      null === Ih || null === th || th.isStopped || Fb || null !== wu || null === Pu || (wu = Ih(Pu, pb, lb().follow))
    }

    function jd() {
      var FF, WF, SF;
      return null !== (FF = null === (WF = ah) || void 0 === WF || null === (SF = WF.textures) || void 0 === SF ? void 0 : SF.files()) && void 0 !== FF ? FF : null
    }

    function vd(FF) {
      SF.e(239).then((() => SF(38638))).then((WF => {
        let {
          setIconFileOverrides: SF
        } = WF;
        SF(FF)
      }), (FF => {
        console.warn(`${UA} the item icons couldn't take the texture pack's files`, FF)
      }))
    }

    function Jb(FF) {
      lb().follow((WF => {
        null !== WF && Promise.all([Promise.all([SF.e(175), SF.e(39)]).then((() => SF(41198))), (0, dA.J)()]).then((FF => {
          let [{
            followPagePackFiles: SF
          }, CF] = FF;
          const AF = null === CF || (0, sW.s)(CF) ? "webgl" : CF.backend;
          SF(WF, JC.e, AF, (FF => {
            JC.e.setPageFiles(FF)
          }), pb)
        }), (WF => {
          console.warn(`${UA} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, WF), FF()
        }))
      }))
    }

    function pb(FF, WF) {
      console.warn(`${UA} ${FF}`, WF)
    }

    function lb() {
      return Tu ??= new VA({
        load: FF => Promise.all([SF.e(175), SF.e(43)]).then((() => SF(41203))).then((WF => {
          let {
            startPageTexturePackFeed: SF
          } = WF;
          return SF(pb, FF)
        })),
        store: iC.f,
        SC: FF => {
          Lu.then((() => {
            (0, eS.reportTexturePackFeedLoadFailure)(FF, Vu)
          }))
        }
      }), Tu
    }
    const Fd = FF => lb().follow(FF);

    function Wd() {
      return lb().loaded()
    }
    const Sd = function(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          AF = 0;
        return async function(uF, hF) {
          let bW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const dF = ++AF,
            PF = CF() + WF,
            RF = await
          function(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((CF => {
              const AF = setTimeout((() => {
                CF(null), FF.then((FF => {
                  null !== FF && (FF.joinedWithout(), SF(FF))
                }))
              }), WF);
              FF.then((FF => {
                clearTimeout(AF), CF(FF)
              }))
            }))
          }(FF(uF), WF, (FF => {
            dF === AF && bW() && hF(FF, CF() + WF).catch((FF => {
              SF("the texture pack step after the join failed", FF)
            }))
          }));
          return null === RF ? null : hF(RF, PF)
        }
      }((FF => (0, vW.j)(FF) ? lb().request() : lb().forJoin()), qu.e, pb),
      Cd = function(FF, WF) {
        let SF = !1;
        return {
          setGamePackConfirm: FF => {
            SF = null !== FF, WF(FF)
          },
          packStep: (WF, CF, AF) => FF(WF, CF, (() => SF && AF()))
        }
      }(Sd, (FF => {
        lb().setGamePackConfirm(FF)
      }));

    function Ad(FF) {
      Cd.setGamePackConfirm(FF)
    }
    async function ud(FF, WF, CF) {
      const {
        gamePackSource: AF
      } = await SF.e(323).then((() => SF(41176)));
      await Cd.packStep(FF, ((SF, CF) => SF.packForGame(FF, AF(WF), CF)), CF)
    }

    function hd() {
      if (Fb || null !== nh || null === fh || null === sh) return;
      const {
        backend: FF,
        canvas: WF,
        fallbackReason: SF,
        adapterVendor: CF
      } = sh, AF = fh;
      fh = null;
      try {
        nh = AF({
          backend: FF,
          canvas: WF,
          fallbackReason: SF,
          adapterVendor: CF,
          joinedGame: () => Fb ? null : Eh,
          inGame: dd,
          shaderPackRuns: rd,
          writeCmd: (FF, WF, SF) => null !== Pu && Pu(FF, WF, SF),
          takeFailedMeshJobs: () => {
            var FF, WF;
            return null !== (FF = null === (WF = Mu) || void 0 === WF ? void 0 : WF.takeFailedMeshJobs()) && void 0 !== FF ? FF : 0
          }
        })
      } catch (uF) {
        console.error(`${UA} the frame telemetry didn't start`, uF)
      }
    }

    function bP(FF, WF) {
      try {
        var SF, CF, AF;
        const uF = oh && null !== (SF = null === (CF = th) || void 0 === CF || null === (AF = CF.lastHeader) || void 0 === AF ? void 0 : AF.renderPending) && void 0 !== SF ? SF : 0;
        (0, MS.e)(WF, FF, dd() && !(null !== iu), uF)
      } catch (uF) {
        (0, MS.t)(), console.error(`${UA} the quality steps stopped`, uF)
      }
    }

    function dd() {
      return null !== Eh && Uh === Eh && !Fb
    }

    function Pd(FF) {
      const WF = nh;
      nh = null;
      try {
        null === WF || void 0 === WF || WF.stop()
      } catch {}
      console.error(`${UA} the frame telemetry threw: it stops`, FF)
    }

    function Rd(FF) {
      var WF;
      if ((0, PA.c)().fire(FF), "message" === FF.type) {
        if (Ah++, FF.rb === OW.lc.ERROR && null !== rb) {
          var SF;
          const {
            text: WF,
            dropsCache: CF
          } = (0, OF.o)((new TextDecoder).decode(FF.payload));
          mb ||= CF, (null === (SF = Vh) || void 0 === SF ? void 0 : SF.conn) === FF.conn && (Oh = WF)
        }
        return
      }
      if (FF.phase === OW.F.Left) uh = FF.conn;
      else if (FF.phase === OW.F.Activated) {
        var CF;
        uW.d.reset(), (null === (CF = Vh) || void 0 === CF ? void 0 : CF.conn) === FF.conn && (Vh.activated = !0)
      }
      const AF = Object.keys(OW.F).find((WF => OW.F[WF] === FF.phase)),
        uF = 0 === FF.code ? "" : ` (code ${FF.code})`;
      console.info(`${UA} conn ${FF.conn}: ${null!==AF&&void 0!==AF?AF:FF.phase}${uF}, ${Ah} raw messages so far`), (null === (WF = Eh) || void 0 === WF ? void 0 : WF.conn) !== FF.conn || FF.phase !== OW.F.Left && FF.phase !== OW.F.Closed || ad(null), gb !== FF.conn || FF.phase !== OW.F.Left && FF.phase !== OW.F.Closed || (gb = null, null === Eh && null === rb && lC.setGame(void 0));
      for (const bW of [...Zh]) try {
        bW(FF.conn, FF.phase, FF.code)
      } catch (hF) {
        (0, xS.n)(hF, `${UA} a connection listener threw`)
      }
    }

    function iP() {
      (0, dA.q)(), queueMicrotask((() => {
        try {
          Vd()
        } catch (FF) {
          console.warn(`${UA} stopping before the reload threw`, FF)
        }(0, eS.flushCrashReports)(fF.c).then(fF.g, fF.g)
      }))
    }

    function ed() {
      const FF = th;
      null === FF || FF.isStopped || null === xh || Ch || !FF.hasPendingCommands() || Ed(FF, !1, "budget")
    }

    function Ed(FF, WF, SF) {
      let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const AF = Ch;
      Ch = !0;
      try {
        return function(FF, WF, SF, CF) {
          var AF, uF, hF;
          if (Fb) return !1;
          if (Od(FF, rP), Fb || FF.isStopped) return !1;
          aP() && pu("modelsIn");
          Wh = performance.now(), uh = null, hh = !1, (0, tW.J)(), null === (AF = yh) || void 0 === AF || AF.beforeFrame(), BS(Wh, FF), (0, tW.D)(Wh, gP), Sh = !0;
          const bW = WF && Td();
          let dF;
          try {
            dF = FF.frame(Wh, bW, SF)
          } finally {
            Sh = !1
          }
          if (!dF) return !1;
          yb.observe(null !== (uF = null === (hF = FF.lastHeader) || void 0 === hF ? void 0 : hF.chunksCancelled) && void 0 !== uF ? uF : 0);
          const PF = FF.lastFrameKind;
          WF && (Bh = (0, gS.e)(PF));
          if (null !== nh) try {
            nh.frameRan(FF, Wh, performance.now(), PF)
          } catch (iW) {
            Pd(iW)
          }
          "drawn" === PF && tP() && function() {
            for (const FF of [...hA]) FF()
          }();
          FF.forEachNetOut(kP);
          const RF = xh;
          null !== uh && (null === RF || void 0 === RF ? void 0 : RF.conn) === uh && qP(RF, xW.h);
          WF && function(FF) {
            var WF, SF, CF;
            if (null === Eh || !Td()) return;
            const AF = FF.lastHeader,
              uF = !oh || 0 === (null === AF || void 0 === AF ? void 0 : AF.renderPending);
            !Xh && uF && (Xh = !0, performance.mark(Wu));
            if (Uh === Eh) return;
            const hF = null !== (WF = null === AF || void 0 === AF ? void 0 : AF.firstView) && void 0 !== WF ? WF : OW.T.NotYet;
            if (oh && hF === OW.T.NotYet) return;
            if (wh && (!0 !== (null === (SF = (0, TF.j)()) || void 0 === SF ? void 0 : SF.isSessionLive) || !uF)) return;
            Uh = Eh;
            const bW = Eh;
            if (setTimeout((() => {
                Eh === bW && (0, kS.b)()
              }), 0), null === (CF = jh) || void 0 === CF || CF.playable(), wh) return;
            wh = !0, performance.mark(Fu);
            const dF = Math.round(performance.now());
            oh && hF === OW.T.Backstop ? console.warn(`${UA} playable at ${dF} ms on the first view's backstop: it wasn't drawn whole in time`) : console.info(`${UA} playable at ${dF} ms${oh?"":" (no renderer)"}`);
            setTimeout(zb, 0), (0, bS.d)().catch((FF => {
              console.error(`${UA} item sprites didn't load, so item particles show the missing texture`, FF)
            }))
          }(FF);
          (0, nW.M)(FF, {
            worldgen: ou,
            mesh: Mu
          }),
          function(FF) {
            FF.forEachEvent(vC);
            for (const WF of jC) try {
              (0, HS.c)(WF)
            } catch (iW) {
              if ((0, xS.k)(iW)) {
                FF.crashOn(nW.l, iW);
                break
              }
              console.error(`${wS} an input action listener threw`, iW)
            }
            jC.length = 0
          }(FF), CF && (0, rS.d)();
          return !FF.isStopped
        }(FF, WF, "all" === SF || FF.rings.net.cursor >= Cu || FF.netKeptFrames >= Au, CF)
      } finally {
        Ch = AF
      }
    }

    function Qd(FF) {
      console.error(`${UA} a frame-start listener threw`, FF)
    }

    function rP() {
      var FF, WF, SF, CF;
      null === (FF = nu) || void 0 === FF || FF.drain(Pu, Ru), null === (WF = Xu) || void 0 === WF || WF.drain(Pu), null === (SF = Uu) || void 0 === SF || SF.drain(performance.now()), Gh(Pu), null === (CF = wu) || void 0 === CF || CF.drain()
    }

    function gP(FF) {
      console.error(`${UA} a before-frame listener threw`, FF)
    }

    function tP() {
      return oh && Td()
    }

    function Td() {
      return Bu && aP()
    }

    function aP() {
      return null === nu || nu.startupDone
    }

    function kP(FF, WF) {
      const SF = xh;
      (null === SF || void 0 === SF ? void 0 : SF.conn) === FF ? qP(SF, WF) : Ph++
    }

    function qP(FF, WF) {
      const {
        ws: SF
      } = FF;
      return SF.readyState === WebSocket.OPEN ? (SF.send(WF), !0) : SF.readyState === WebSocket.CONNECTING && FF.pendingBytes + WF.byteLength <= uu ? (FF.pending.push(WF.slice()), FF.pendingBytes += WF.byteLength, !0) : (Ph++, !1)
    }

    function Vd() {
      var FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW;
      Fb = !0, (0, tW.I)().unlockPointer(), (0, tW.H)(null), null === (FF = su) || void 0 === FF || FF(), su = null, null === (WF = (0, TF.r)()) || void 0 === WF || WF.followCursorAim(null), (0, rS.G)(), (0, TF.g)(), qh.stop(), null === (SF = Hh) || void 0 === SF || SF(), Hh = null, null === (CF = Kh) || void 0 === CF || CF(), Kh = null, null === (AF = nh) || void 0 === AF || AF.stop(), nh = null, (0, QS.q)(null), null === (uF = Zu) || void 0 === uF || uF(), Zu = null, null === (hF = ou) || void 0 === hF || hF.stop(), ou = null, null === (bW = Mu) || void 0 === bW || bW.stop(), Mu = null, null !== (dF = ah) && void 0 !== dF && null !== (PF = dF.textures) && void 0 !== PF && PF.assets && vd(null), null === (RF = ah) || void 0 === RF || RF.stop(), ah = null, kh = null;
      const aW = ch;
      ch = null, aW && (aW.stop(), mP(aW)), null === (iW = Xu) || void 0 === iW || iW.dispose(), Xu = null, null === (eF = Uu) || void 0 === eF || eF.dispose(), Uu = null, nu = null, null === (EF = Ku) || void 0 === EF || EF(), Ku = null, null === (QF = fu) || void 0 === QF || QF(), fu = null, null === (rW = yh) || void 0 === rW || rW.stop(), yh = null, gd(), lC.release(), sb();
      const kW = wu;
      wu = null;
      try {
        null === kW || void 0 === kW || kW.dispose()
      } catch (qW) {
        console.warn(`${UA} the sky's images didn't release`, qW)
      }(0, wC.f)(null), null === (gW = rh) || void 0 === gW || gW.pagePreviews().endSession(null === (0, pF.t)())
    }

    function Nd(FF, WF) {
      var SF, CF;
      const AF = null !== (SF = null === (CF = ch) || void 0 === CF ? void 0 : CF.details()) && void 0 !== SF ? SF : {},
        uF = FF.site === ju || FF.site === vu || FF.site === eS.RENDER_RELOAD_SITE || FF.site === JA ? FF.error instanceof WebAssembly.RuntimeError || FF.error instanceof zS.d : !(0, sW.v)(FF.error) && (0, nW.G)(FF);
      uF && FF.error instanceof Error && (0, pF.R)(FF.error);
      const hF = uF || FF.site === nW.v ? (0, eS.readTrap)(FF.error) : null,
        bW = null !== hF && (0, ZW.b)(hF.kind, hF.refusedBytes) ? hF.refusedBytes : 0,
        dF = null === Gu ? IC(function() {
          try {
            return (0, pF.y)().buffer.byteLength
          } catch {
            return 0
          }
        }(), bW, null) : Gu.ceilingMayRefuse(bW),
        PF = bW > 0 && !dF && wb();
      var RF;
      if (PF && ((0, AW.g)(), lh = !0), Vd(), (0, dA.c)()) return console.warn(`${UA} the session stopped at ${FF.site} as the page reloads`, FF.error), void((0, sW.v)(FF.error) || (null === (RF = FF.header) || void 0 === RF ? void 0 : RF.lastError) === OW.I.CoreBusy || (0, eS.reportStoppedCore)(FF, WF, hF, {
        memoryDetails: AF,
        declined: PF
      }));
      (0, eS.showCrash)(FF, WF, hF, {
        memoryDetails: AF,
        declined: PF
      })
    }

    function Dd(FF) {
      const {
        input: WF,
        net: SF,
        worker: CF
      } = FF.rings, AF = FF.optionsDropped, uF = WF.dropped + AF + SF.dropped + CF.dropped + Ph;
      uF !== dh && function(FF, WF) {
        const SF = performance.now();
        return !(SF - bb[FF] < hu) && (bb[FF] = SF, console.warn(`${UA} ${WF}`), !0)
      }("dropped", `${uF} records dropped so far (input ${WF.dropped}, options ${AF}, net ${SF.dropped}, worker ${CF.dropped}, net-out ${Ph})`) && (dh = uF)
    }

    function Ld() {
      var FF, WF, SF, CF;
      const AF = (0, PS.d)(),
        uF = null === AF ? null : (0, RS.o)(AF);
      return {
        ...null === (FF = ch) || void 0 === FF ? void 0 : FF.pageKillSnapshot(),
        renderDistance: null === uF ? null : Math.min(uF.horizontal, null !== (WF = null === (SF = ch) || void 0 === SF ? void 0 : SF.shedDistanceInUse()) && void 0 !== WF ? WF : 1 / 0),
        renderDistanceVertical: null !== (CF = null === uF || void 0 === uF ? void 0 : uF.vertical) && void 0 !== CF ? CF : null,
        chunkCap: zh,
        budgetBasis: Iu
      }
    }

    function mP(FF) {
      console.info(`${UA} wasm memory at the session's end`, FF.details())
    }

    function Od(FF, WF) {
      if (!FF.isStopped) try {
        WF()
      } catch (SF) {
        FF.crash(nW.w, SF)
      }
    }
    async function xP() {
      const {
        createWorldgenWorker: FF,
        worldgenWorkerReady: WF
      } = await (Yu ??= SF.e(58).then((() => SF(41208))).catch((FF => {
        throw Yu = null, FF
      })), Yu);
      return await WF(), FF
    }

    function Zd(FF, WF, SF) {
      return async function(FF, WF, SF) {
        let {
          stop: CF,
          stillWanted: AF
        } = SF;
        const uF = await (0, hC.g)(FF, {
          stillWanted: AF,
          beforeReload: async () => {
            CF(), await (0, eS.flushCrashReports)(fF.c)
          },
          reload: fF.g
        });
        return uF || WF(), uF
      }(FF, WF, {
        stop: Vd,
        stillWanted: SF
      })
    }

    function od(FF) {
      ! function(FF, WF) {
        FF((FF => {
          null === FF || void 0 === FF || FF.subscribe((FF => {
            let {
              pack: SF,
              gameSource: CF
            } = FF;
            WF(null === CF || null === SF ? null : {
              pack: SF,
              source: "" === CF ? null : CF
            })
          }))
        }))
      }(Fd, FF)
    }
    let Yd = !1,
      Md = null,
      cP = !1,
      Gd = !1;

    function zP() {
      var FF;
      Yd || (Yd = !0, hb("play", zW), (0, iW.s)(new Ud), bW.gameBridge.attach(mW), nd().catch((() => {})), (0, TF.t)((FF => {
        BF(FF.setTextHost)
      })), FF = yP, Lh.add(FF), function(FF) {
        for (const WF of vh) FF(WF);
        Ju.add(FF)
      }((FF => {
        fd(Id[FF])
      })))
    }
    const Id = {
      booted: uF.f.INITIALISE_NOA,
      texturesIn: uF.f.REGISTRATION,
      modelsIn: uF.f.SETUP_LIFEFORMS
    };

    function fd(FF) {
      dF.j.Uu("matchmakeAndPlayStepCompleted", {
        step: FF,
        totalSubSteps: 1
      })
    }

    function yP(FF) {
      if (!cP) return;
      const {
        gameNameWithVariation: WF,
        lobbyName: SF
      } = (0, iW.e)();
      if (FF.code === CF.e.serverUpdating.code) return (new Ud).leaveLive(), void sd(WF, SF);
      dF.j.Uu("unwantedLeftGame", {
        reason: "gameOrPluginKick" === FF.name ? FF.reason : `You have disconnected from the server.\n${FF.reason}`,
        requiresRefresh: FF.requiresRefresh,
        canReconnect: null !== FF.reconnect,
        automaticallyReconnect: FF.reconnecting,
        gameNameWithVariation: WF,
        lobbyName: SF
      }), (new Ud).leaveLive()
    }

    function sd(FF, WF) {
      var CF;
      CF = (0, PF.z)(FF, WF), Promise.resolve().then((() => SF(1352))).then((FF => {
        let {
          navigatePreserveSearch: WF
        } = FF;
        WF(CF)
      })).catch((FF => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", FF), (0, fF.d)(CF)
      }))
    }

    function nd() {
      return Md ??= Promise.all([SF.e(59), SF.e(62), SF.e(60), SF.e(61), SF.e(72), SF.e(71), SF.e(217), SF.e(218), SF.e(40)]).then((() => SF(38511))).then((FF => {
        try {
          FF.attachPlayGameSources()
        } catch (WF) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", WF),
            function(FF) {
              Lu.then((WF => {
                null === WF || WF.isStopped || Fb ? console.warn(`${UA} the play sources threw as they attached, after the client stopped`, FF) : Nd({
                  site: JA,
                  error: FF,
                  header: null
                }, Vu)
              }))
            }(WF), WF
        }
      }), (FF => {
        throw Md = null, new TF.c(FF)
      })), Md
    }
    async function Hd(FF, WF) {
      zP(), cP = !0;
      let SF = {
          place: FF.place,
          matchedAt: FF.matchedAt
        },
        hF = FF.place.gameNameWithVariation,
        bW = null;
      const dF = await Rb({
        matchmake: async () => {
          let WF = SF;
          if (SF = null, null === WF) {
            const SF = await FF.rematch();
            if (SF.isError()) throw bW = SF.asError().forward(), new Error(SF.asError().message);
            WF = {
              place: SF.getValue(),
              matchedAt: performance.now()
            }
          }
          hF = WF.place.gameNameWithVariation;
          return {
            target: await (0, ZF.h)(FF.userContext, WF.place, Wd()),
            matchedAt: WF.matchedAt,
            freshMs: ZF.d
          }
        },
        pageReady: nd,
        onFailure: (FF, WF) => {
          null === bW && function(FF, WF) {
            (0, eS.reportPageJoinFailure)(FF, Vu, WF)
          }(FF, {
            sinceJoinStartMs: WF,
            game: hF
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => FF.userContext.invalidateTrafficCode(),
        signal: WF
      });
      switch (dF.kind) {
        case "joined":
          return Gd || (Gd = !0, (0, QF.e)()), cP ? (fd(uF.f.CONNECT_TO_GAME_SERVER), fd(uF.f.SHADER_PACK), rd() && (0, EF.g)(FF.userContext, hF).catch((FF => {
            console.error("Failed to report the shader pack session", FF)
          })), function() {
            const FF = function() {
              var FF, WF;
              return null !== (FF = null === (WF = jh) || void 0 === WF ? void 0 : WF.couldntRunInJoinedGame()) && void 0 !== FF ? FF : null
            }();
            null !== FF && (0, EF.c)(FF)
          }(), AF.d.value(void 0)) : Xd("The server ended the game as it joined");
        case "failed":
          if (!dF.reloading) {
            if (null !== bW) return bW;
            if ((dF.error instanceof xW.l || dF.error instanceof xW.b) && dF.error.code === CF.e.serverUpdating.code) {
              if (WF.aborted) return Xd("Left the game while it loaded");
              const {
                gameNameWithVariation: FF,
                lobbyName: SF
              } = (0, iW.e)();
              return sd(FF, SF), Xd("The server is updating")
            }
            return dF.error instanceof IF.b ? AF.d.errorWithCode(dF.error.messageKey, uF.f.SHADER_PACK, {
              severity: "medium"
            }) : AF.d.errorWithCode(function(FF) {
              if (FF instanceof xW.q) return FF.message;
              if (Kd(FF)) return (0, OF.k)(FF.code, FF.serverText);
              return OF.g
            }(dF.error), uF.f.CONNECT_TO_GAME_SERVER, {
              error: (PF = dF.error, PF instanceof xW.q || Kd(PF) ? void 0 : dF.error),
              severity: wd(dF.error)
            })
          }
          return Xd("Reloading into the new build");
        case "stopped":
          return Xd("The game client stopped, and shows why");
        case "Qh":
          return Xd("Left the game while it loaded")
      }
      var PF
    }

    function Kd(FF) {
      return FF instanceof xW.l || FF instanceof xW.b && "attach" !== FF.stage
    }

    function wd(FF) {
      return Kd(FF) ? FF instanceof xW.b && (0, OF.i)(FF.code).requiresRefresh ? "medium" : "low" : "medium"
    }

    function Xd(FF) {
      return AF.d.errorWithCode(FF, uF.f.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Qh: !0
      })
    }
    class Ud {
      AC(FF) {
        if ((0, gW.b)()) {
          var WF, SF;
          if ((0, hF.c)()) return;
          (0, eF.e)(!0 === (null === (WF = (0, gW.l)()) || void 0 === WF || null === (SF = WF.currentViewer) || void 0 === SF ? void 0 : SF.unsavedChanges), FF)
        } else this.leaveLive()
      }
      leaveLive() {
        var FF;
        if (null === (FF = Wd()) || void 0 === FF || FF.endGamePack(), !cP) return;
        cP = !1, (0, rW.e)();
        try {
          var WF;
          null === (WF = (0, TF.r)()) || void 0 === WF || WF.clearWasmCameraScreen()
        } catch (CF) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", CF)
        }
        const {
          gameNameWithVariation: SF
        } = (0, iW.e)();
        try {
          Vb()
        } finally {
          (0, iW.w)({
            websocketUrl: null
          }), dF.j.Uu("leaveGame", {
            gameNameWithVariation: SF
          }), (0, RF.R)()
        }
      }
      isReplay() {
        return (0, gW.b)()
      }
    }
  },
  8189: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      c: () => RF,
      f: () => bW,
      h: () => eF
    });
    var CF = SF(89),
      AF = SF(33),
      uF = SF(8196);
    const hF = "rendererGpuVendor";

    function bW() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let dF = null;

    function PF() {
      return dF ??= iW(), dF
    }

    function RF() {
      var FF;
      return null !== (FF = dF) && void 0 !== FF ? FF : iW()
    }

    function iW() {
      var FF;
      const WF = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        SF = AF.h.getItem(hF),
        dF = null !== (FF = (0, CF.peekGpuVendor)()) && void 0 !== FF ? FF : "string" === typeof SF ? SF : null;
      return !bW() && function(FF, WF) {
        return (0, uF.r)(FF) || "powervr" === WF
      }(WF, dF)
    }

    function eF(FF) {
      const WF = (0, CF.normaliseGpuVendor)(FF);
      AF.h.getItem(hF) !== WF && AF.h.setItem(hF, WF)
    }
  },
  38878: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      h: () => CF,
      i: () => bW,
      k: () => hF
    });
    const CF = 12e4,
      AF = 3e4,
      uF = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: FF => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", FF), () => {
          document.removeEventListener("visibilitychange", FF)
        })
      };

    function hF(FF) {
      return `it sent no start within ${Math.round(FF)} ms`
    }
    class bW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uF;
        this.timeoutMs = FF, this.onTimeout = WF, this.now = SF, this.visibility = CF, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = CF.listen((() => {
          this.onVisibility()
        })), CF.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const FF = this.step;
        return null === FF ? 0 : Math.min(this.now() - FF.at, FF.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const FF = this.timeoutMs - this.counted;
        if (FF <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const WF = Math.min(FF, 5e3);
        this.step = {
          at: this.now(),
          ms: WF
        }, this.arm(WF, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(FF, WF) {
        this.timer = setTimeout((() => {
          this.timer = null, WF()
        }), FF)
      }
    }
  },
  38747: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    const CF = {
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
  37127: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(2903);
    const AF = ["none", "idle", "now"];

    function uF() {
      const FF = () => (0, CF.F)();
      return {
        memoryBytes: () => (0, CF.y)().buffer.byteLength,
        reserveUpFront: WF => FF().gW(WF),
        reserveAhead: WF => FF().rW(WF),
        setCeiling: WF => {
          FF().tW(WF)
        },
        lowWater: () => AF[FF().QF()] ?? "none",
        stats: () => function(FF) {
          const WF = new Uint32Array((0, CF.y)().buffer, FF, 17),
            SF = FF => WF[FF] ?? 0,
            AF = FF => ({
              upFront: SF(FF),
              ahead: SF(FF + 1),
              onDemandInFrame: SF(FF + 2),
              onDemand: SF(FF + 3)
            });
          return {
            memoryBytes: SF(0),
            initialBytes: SF(1),
            liveBytes: SF(2),
            peakLiveBytes: SF(3),
            headroomBytes: SF(4),
            unusedBytes: SF(5),
            ceilingBytes: SF(6),
            reservesRefused: SF(7),
            grows: AF(8),
            grownBytes: AF(12),
            allocationsRefused: SF(16)
          }
        }(FF().TF()),
        takeBallast: () => FF().aW(),
        takePressure: () => FF().kW()
      }
    }
  },
  5610: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => tW,
      g: () => TF,
      i: () => rW,
      j: () => QF
    });
    var CF = SF(5619);
    const AF = 6,
      uF = 3,
      hF = 1,
      bW = 2,
      dF = 4,
      PF = 8,
      RF = 16,
      iW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function eF(FF) {
      if (!FF) return 0;
      const WF = iW.indexOf(FF);
      if (WF <= 0) throw new Error(`"${FF}" is not a shader pack hook function`);
      return WF
    }

    function EF(FF) {
      if (0 === FF) return null;
      const WF = iW[FF];
      if (void 0 === WF) throw new Error(`${FF} is not a shader pack hook function id`);
      return WF
    }

    function QF(FF) {
      const WF = CF.e.length;
      return {
        strict: FF >= WF,
        program: CF.e[FF % WF]
      }
    }

    function rW(FF) {
      return Number(FF.strict) * CF.e.length + CF.e.indexOf(FF.program)
    }

    function gW(FF) {
      return "" === FF ? [] : FF.split(" ")
    }

    function tW(FF) {
      const WF = {
        variantFlags: new Uint8Array(AF),
        hooks: new Uint8Array(AF * uF),
        moduleCodes: Array(AF).fill(""),
        reads: Array(2 * AF).fill("")
      };
      for (const SF of FF) {
        const FF = rW(SF.key);
        WF.variantFlags[FF] = (SF.sceneDepth ? hF : 0) | (SF.movesVertices ? bW : 0) | (SF.sunShadow ? dF : 0) | (SF.airShadow ? PF : 0) | (SF.discards ? RF : 0), WF.hooks[FF * uF] = eF(SF.hooks.vertex), WF.hooks[FF * uF + 1] = eF(SF.hooks.surface), WF.hooks[FF * uF + 2] = eF(SF.hooks.light), WF.moduleCodes[FF] = SF.moduleCode, WF.reads[2 * FF] = SF.reads.vertex.join(" "), WF.reads[2 * FF + 1] = SF.reads.fragment.join(" ")
      }
      return WF
    }

    function TF(FF) {
      const {
        hooks: WF,
        moduleCodes: SF,
        reads: CF
      } = FF;
      return Array.from(FF.variantFlags, ((FF, AF) => {
        const iW = AF * uF;
        return {
          key: QF(AF),
          hooks: {
            vertex: EF(WF[iW]),
            surface: EF(WF[iW + 1]),
            light: EF(WF[iW + 2])
          },
          moduleCode: SF[AF],
          sceneDepth: 0 !== (FF & hF),
          sunShadow: 0 !== (FF & dF),
          airShadow: 0 !== (FF & PF),
          movesVertices: 0 !== (FF & bW),
          discards: 0 !== (FF & RF),
          reads: {
            vertex: gW(CF[2 * AF]),
            fragment: gW(CF[2 * AF + 1])
          }
        }
      }))
    }
  },
  38764: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      f: () => CF,
      i: () => eF,
      k: () => RF,
      m: () => gW,
      p: () => uF,
      q: () => bW,
      r: () => dF,
      t: () => hF,
      v: () => rW,
      w: () => EF,
      y: () => QF
    });
    const CF = 3,
      AF = 0,
      uF = 1,
      hF = 2,
      bW = {
        uniform: 3,
        MW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      dF = 10,
      PF = "BloxdPackInputs",
      RF = "bloxdPackInputs",
      iW = [{
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
      eF = 80;

    function EF() {
      const FF = iW.map((FF => {
        let {
          name: WF,
          type: SF
        } = FF;
        return `    ${WF}: ${SF},\n`
      })).join("");
      return `struct ${PF} {\n${FF}}\n@group(${CF}) @binding(${AF}) var<uniform> ${RF}: ${PF};\n`
    }

    function QF(FF, WF) {
      const SF = new DataView(FF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, eF),
        [CF, AF, uF, hF, bW, dF] = iW;
      SF.setFloat32(CF.offset, WF.seconds, !0), SF.setUint32(AF.offset, WF.lit ? 1 : 0, !0);
      for (let PF = 0; PF < 3; PF++) SF.setInt32(uF.offset + 4 * PF, WF.renderOffset[PF], !0), SF.setFloat32(hF.offset + 4 * PF, WF.ehF[PF], !0), SF.setFloat32(bW.offset + 4 * PF, WF.eyePosition[PF], !0), SF.setFloat32(dF.offset + 4 * PF, WF.shadowDirection[PF], !0)
    }

    function rW(FF) {
      const WF = new Uint32Array(Math.max(1, FF.length));
      return FF.forEach(((FF, SF) => {
        let {
          id: CF,
          rotation: AF
        } = FF;
        WF[SF] = 65535 & CF | (3 & AF) << 16
      })), WF
    }
    const gW = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5619: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF,
      h: () => AF,
      j: () => uF
    });
    const CF = ["terrain", "liquid", "model"];

    function AF(FF) {
      return !FF.hooks.vertex && !FF.hooks.surface && !FF.hooks.light
    }

    function uF(FF, WF) {
      return "off" !== WF && (null === FF || FF.some((FF => FF.key.strict === ("strict" === WF) && !AF(FF))))
    }
  },
  38784: (FF, WF, SF) => {
    function CF(FF, WF) {
      return AF(FF, WF) ? `trap=alloc_failed ${WF} bytes` : `trap=${FF}`
    }

    function AF(FF, WF) {
      return "unreachable" === FF && WF > 0
    }

    function uF(FF, WF, SF) {
      const CF = function(FF) {
        return FF instanceof WebAssembly.RuntimeError ? /unreachable/i.test(FF.message) ? "unreachable" : /out of bounds/i.test(FF.message) ? "out_of_bounds" : "runtime_error" : (FF instanceof RangeError || FF instanceof Error && "InternalError" === FF.name) && /call stack|recursion/i.test(FF.message) ? "stack_overflow" : "js_error"
      }(FF);
      if ("unreachable" !== CF) return {
        kind: CF,
        panic: null,
        refusedBytes: 0
      };
      const AF = WF(),
        uF = SF();
      return {
        kind: CF,
        panic: uF > 0 ? null : AF,
        refusedBytes: uF
      }
    }
    SF.d(WF, {
      b: () => AF,
      e: () => bW,
      f: () => uF,
      h: () => CF
    });
    const hF = 300;

    function bW(FF) {
      return FF.replace(/\s*\n\s*/g, " / ").slice(0, hF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);