export const id = 92;
export const ids = [92];
export const modules = {
  7765: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => zM
    });
    var wW = MW(1345),
      CW = MW(27),
      zR = MW(3654),
      AW = MW(75),
      bR = MW(1544),
      yR = MW(1330),
      NW = MW(1166),
      eW = MW(1027),
      BW = MW(3618),
      tR = MW(156),
      TW = MW(975),
      gR = MW(33),
      iR = MW(1072),
      YW = MW(1495),
      JW = MW(1135),
      PW = MW(1235),
      IW = MW(3565),
      oW = MW(3444),
      lW = MW(116),
      FW = MW(940);
    const fW = "https://discord.gg/playbloxd";

    function QW(WW) {
      let {
        failure: RW
      } = WW;
      const {
        t: MW
      } = (0, eW.C)(), wW = lW.featureFlags.useDiscord ? RW.customPack ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : RW.customPack ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, FW.jsxs)(FW.Fragment, {
        children: [MW(wW, {
          code: RW.code
        }), lW.featureFlags.useDiscord && (0, FW.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, FW.jsx)("a", {
            href: fW,
            target: "_blank",
            rel: "noreferrer",
            children: MW("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var rR = MW(2385),
      cR = MW(1901),
      XW = MW(1379),
      jR = MW(607),
      kR = MW(1057),
      aR = MW(860),
      sW = MW(1314),
      dW = MW(1053),
      pW = MW(2420),
      hW = MW(2289),
      UW = MW(1173),
      EW = MW(1157),
      VW = MW(3955),
      mR = MW(7772),
      xR = MW(2213);

    function vR(WW) {
      let {
        onApply: RW,
        onSkip: MW
      } = WW;
      const {
        t: wW
      } = (0, eW.C)();
      return (0, AW.useEffect)((() => {
        xR.f.skipPlayWait()
      }), []), (0, FW.jsx)(UW.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, FW.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [wW("customTexturePack:downloadPrompt"), (0, FW.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: wW("customTexturePack:authorWarning")
          }), (0, FW.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: wW("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: RW
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: MW
        }
      })
    }
    async function KW() {
      let WW = !1;
      const RW = NW.NotificationProvider.showCustomPopup({
        body: RW => (0, FW.jsx)(vR, {
          onApply: () => {
            WW = !0, RW()
          },
          onSkip: RW
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await RW.getResult(), WW
    }
    let uW = {
      wanted: !1
    };
    let OW = null;

    function nW(WW) {
      WW.setGamePackConfirm(KW), OW = WW
    }
    var GW = MW(2592);

    function LW(WW) {
      let {
        schematicId: RW,
        texturePackKey: MW,
        onClose: wW
      } = WW;
      const [CW, zR] = (0, AW.useState)("prompt"), [bR, yR] = (0, AW.useState)(null), NW = (0, GW.e)();

      function eW() {
        wW()
      }
      return "prompt" === CW ? (0, FW.jsx)(vR, {
        onApply: async function() {
          zR("downloading");
          try {
            const WW = await async function(WW, RW) {
              const MW = await (0, VW.b)(RW);
              if (MW) return {
                pack: MW,
                key: RW
              };
              const wW = await TW.userContextManager.getCurrentUserContext(),
                CW = (await sW.c.getGame(wW, WW, !0)).customTexturePackKey;
              if (!CW) return null;
              const zR = await (0, VW.b)(CW);
              if (!zR) throw new Error("The texture pack could not be found");
              return {
                pack: zR,
                key: CW
              }
            }(RW, MW);
            if (!NW.current) return;
            if (!WW) return void wW();
            if ((0, pW.h)(WW.pack)) return void zR("refused");
            hW.d.setFromJson(WW.pack, "customGame"), await hW.d.saveTemporaryTexturePack(WW.key), NW.current && (0, YW.reloadBloxd)()
          } catch (WW) {
            yR(WW instanceof Error ? WW.message : String(WW)), zR("error")
          }
        },
        onSkip: eW
      }) : "downloading" === CW ? (0, FW.jsx)(UW.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, FW.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, FW.jsx)(EW.d, {
            showFace: !0
          })
        })
      }) : "error" === CW ? (0, FW.jsx)(UW.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: bR,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: eW
        }
      }) : "refused" === CW ? (0, FW.jsx)(UW.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: eW
        }
      }) : null
    }
    var HW = MW(7775),
      DW = MW(3419),
      qR = MW(3421),
      ZW = MW(2361),
      SW = MW(2569),
      WR = MW(3662),
      RR = MW(1126),
      MR = MW(253);

    function wR() {
      const {
        touchscreenSensitivity: WW,
        mouseSensitivity: RW
      } = CW.b.get("clientEscMenuOptions");
      bR.gameBridge.send("setLookSensitivity", CW.b.get("isTouchScreen") ? WW : RW)
    }
    async function CR(WW, RW, MW) {
      const wW = (0, WR.K)(RW);
      async function AW(WW, RW, MW, wW) {
        var AW;
        if (wW.aborted) return null;
        null === CW.b.get("gameEntrySource") && (0, CW.f)("directPlayUrl"), MR.q && (0, mR.e)().catch((() => {})), CW.b.set({
          gameState: "findingLobby"
        }), gR.k.Sz("loadingScreenState", "loadingPage:findingLobby");
        const yR = await TW.userContextManager.getCurrentUserContext();
        bR.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: RW,
          discordContext: WW instanceof kR.c ? WW.getSerialisableParams() : null
        }), (0, qR.e)();
        const NW = await async function(WW, RW, MW, wW, CW) {
          try {
            await zR.reqLibsLoadedPromise
          } catch (AW) {
            return iR.e.errorWithCode(AW.toString(), tR.k.LOAD_REQUIRED_LIBS, {
              error: AW,
              severity: "medium"
            })
          }
          return gR.k.Sz("matchmakeAndPlayStepCompleted", {
            step: tR.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, zR.matchmakeAndPlayMaybeUnloaded)(WW, RW, MW, wW, CW)
        }(WW, RW, MW, yR, wW), eW = NW.isError() ? NW.asError() : null;
        if (eW && !eW.debugResult.JA && (console.log("Failed to join lobby:", eW.message), (0, ZW.e)("matchmake_failed", eW.message, tR.k[eW.code])), wW.aborted) return bR.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== eW && void 0 !== eW && eW.debugResult.JA) return console.log("Join cancelled:", eW.message), null;
        if (eW) return NW;
        const {
          gameNameWithVariation: BW,
          lobbyName: YW,
          addLobbyToRecentlyPlayed: PW
        } = NW.getValue();
        let IW;
        wR(), (0, RR.o)().setGameViewShown(!0);
        const oW = null === (AW = jR.b[BW]) || void 0 === AW ? void 0 : AW.recentlyPlayedAs;
        return IW = (0, aR.k)(BW) ? {
          type: "custom",
          name: "",
          schematicId: (0, aR.n)(BW),
          recentLobbies: []
        } : "classic" !== BW || (0, dW.F)(YW) ? oW ? {
          type: "bloxd",
          gameNameWithVariation: oW,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: BW,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, sW.c.addRecentlyPlayedGame(yR, IW, PW && !oW ? YW : void 0).then((WW => {
          yR.setRecentlyPlayedGames(WW)
        })).catch((WW => {
          console.error("Failed to record recently played game", WW)
        })), (0, JW.K)(), NW
      }
      return wW && (0, CW.f)("updateRejoin"), (0, SW.i)((async CW => {
        try {
          let bR = WW,
            yR = await AW(bR, RW, MW, CW);
          for (let WW = 0; wW && WW < WR.m; WW++) {
            var zR;
            if (null === (zR = yR) || void 0 === zR || !zR.isError() || yR.asError().code !== tR.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, WR.M)((0, WR.v)(WW), CW)) return yR;
            bR = (0, WR.w)(bR, WW + 1, "string" === typeof bR && (0, dW.F)(bR)), yR = await AW(bR, RW, MW, CW)
          }
          return yR
        } catch (yR) {
          if ((0, ZW.e)("matchmake_failed", yR, "unexpected"), bR.gameBridge.send("leaveGame", {
              reloadPath: CW.aborted ? null : "/"
            }), CW.aborted) return null;
          throw yR
        }
      }), (async () => {
        var WW;
        wW || (null !== (WW = jR.b[RW]) && void 0 !== WW && WW.playAdBeforeMatchmaking ? (xR.f.skipPlayWait(), await new Promise((WW => {
          (0, JW.ab)((() => {
            WW(!0)
          }), "video_start")
        }))) : (0, JW.ab)((() => {}), "video_start"))
      }))
    }

    function zM() {
      const {
        t: WW
      } = (0, eW.C)(), RW = (0, yR.useNavigatePreserveSearch)(), MW = (0, wW.s)(), gR = (0, wW.A)(), iR = (0, AW.useRef)({
        t: WW,
        navigate: RW
      });
      iR.current = {
        t: WW,
        navigate: RW
      };
      const {
        gameState: lW,
        clientEscMenuOptions: fW
      } = (0, CW.i)(["gameState", "clientEscMenuOptions"]), jR = (0, AW.useRef)(null), kR = (0, AW.useRef)(null);
      var pW;
      return (0, SW.k)(), (0, SW.m)(), pW = MR.q, (0, AW.useEffect)((() => {
        if (!pW) return;
        let WW = !0;
        return (0, mR.e)().then((RW => {
          WW && nW(RW)
        })).catch((() => {})), () => {
          var RW;
          WW = !1, uW.wanted = !1, null === (RW = OW) || void 0 === RW || RW.setGamePackConfirm(null), OW = null
        }
      }), [pW]), (0, AW.useEffect)((() => {
        var WW;
        (0, zR.needGameClientNow)();
        const {
          t: RW,
          navigate: wW
        } = iR.current, AW = (0, HW.c)(gR, MW.search);
        if (gR.lobbyName && !new URLSearchParams(MW.search).has("lobby")) return void wW((0, XW.d)(AW.gameNameWithVariation, AW.lobbyName), {
          replace: !0
        });
        let yR = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === MW.pathname) {
          const WW = CW.b.get("discordContext");
          if (!WW) return void wW("/");
          yR = BW.d.setupDiscordLobby(WW, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: WW
          }))).catch((RW => (console.error("Failed to setup discord lobby", RW), {
            shouldMatchmake: !1,
            discordContext: WW
          })))
        } else if (!AW.gameNameWithVariation || !(0, dW.C)(AW.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${AW.gameNameWithVariation}`), void wW(-1);
        if (AW.gameNameWithVariation === jR.current && AW.lobbyName === kR.current) return;
        if (bR.gameBridge.latest("connectedGame").replay) return void(0, SW.f)(null);
        (0, JW.I)(), CW.b.set({
          gameState: "loadingScreen"
        });
        const eW = function() {
          uW.wanted = !1;
          const WW = {
            wanted: !0
          };
          return uW = WW, () => WW.wanted
        }();
        if ("releaseCountdown" === (null === (WW = (0, cR.f)(AW.gameNameWithVariation)) || void 0 === WW ? void 0 : WW.type)) return console.error(`Game hasn't been released yet: ${AW.gameNameWithVariation}`), void wW(-1);
        const PW = AW.gameNameWithVariation;
        if (PW && (MR.q || (0, aR.k)(PW))) {
          const WW = MR.q ? Promise.all([(0, mR.e)(), TW.userContextManager.getCurrentUserContext()]).then((WW => {
            let [RW, MW] = WW;
            if (eW()) return nW(RW), RW.packForGame(PW, MW, eW)
          })) : async function(WW) {
            await hW.d.indexedDbValuesAreLoaded();
            const RW = await TW.userContextManager.getCurrentUserContext(),
              MW = (0, aR.n)(WW);
            let wW;
            try {
              wW = await sW.c.getGame(RW, MW, !0)
            } catch (AW) {
              return void console.error("Failed to get game", AW)
            }
            const CW = wW.customTexturePackKey;
            if (!CW) return void(hW.d.isUsingTemporaryTexturePack() && ((0, YW.reloadBloxd)(), await new Promise((() => {}))));
            if (hW.d.isUsingTemporaryTexturePack() && hW.d.getTemporaryTexturePackSource() === CW) return;
            const zR = NW.NotificationProvider.showCustomPopup({
              body: WW => (0, FW.jsx)(LW, {
                schematicId: MW,
                texturePackKey: CW,
                onClose: WW
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await zR.getResult()
          }(PW), RW = yR;
          yR = WW.catch((WW => {
            console.error("Failed to check for custom texture pack", WW)
          })).then((() => RW))
        }(0, SW.f)(null);
        let lW = !0;
        return yR.then((WW => {
          let {
            shouldMatchmake: MW,
            discordContext: zR
          } = WW;
          lW && (MW ? CR(null !== zR && void 0 !== zR ? zR : AW.lobbyName, zR ? "classic" : AW.gameNameWithVariation, AW.directJoinVmUrl).then((WW => {
            var MW;
            if (null !== WW && lW)
              if (WW.isError()) {
                var zR;
                const yR = WW.asError(),
                  eW = null !== (zR = yR.debugResult.severity) && void 0 !== zR ? zR : "high";
                if (yR.code === tR.k.SHADER_PACK) return void(0, DW.b)(yR.message, wW);
                const BW = CW.b.get("gameEntrySource"),
                  TW = yR.code === tR.k.INITIALISE_WEBGL ? (0, oW.b)() : null,
                  {
                    error: gR
                  } = yR.debugResult;
                let iR;
                if (null !== TW) iR = (0, oW.f)(TW);
                else if (gR instanceof rR.p) MW = gR, iR = NW.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, FW.jsx)(QW, {
                    failure: MW
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((WW => !0 === WW));
                else {
                  let WW;
                  switch (eW) {
                    case "low":
                      WW = "face-diagonal-mouth";
                      break;
                    case "medium":
                      WW = "face-worried";
                      break;
                    case "high":
                      WW = "face-dizzy"
                  }
                  iR = NW.NotificationProvider.showPromptPopup({
                    icon: WW,
                    title: tR.t[yR.code],
                    subtitle: (0, FW.jsxs)(FW.Fragment, {
                      children: [yR.message, yR.debugResult.error instanceof Error && (0, FW.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, FW.jsx)(IW.b, {
                          errorString: yR.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: RW("general:tryAgain"),
                    cancelText: RW("general:cancel")
                  }).getResult().then((WW => !0 === WW))
                }
                iR.then((WW => {
                  if (WW) {
                    (0, CW.f)(BW);
                    const WW = (0, XW.d)(AW.gameNameWithVariation, AW.lobbyName);
                    "low" === eW ? wW(WW) : (0, YW.reloadBloxd)(WW)
                  }
                })), bR.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), wW(-1)
              } else {
                jR.current = WW.getValue().gameNameWithVariation, kR.current = WW.getValue().lobbyName;
                const RW = (0, XW.d)(jR.current, WW.getValue().lobbyName);
                wW(RW, {
                  replace: !0
                })
              }
          })).catch((WW => {
            if (!lW) return;
            NW.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, FW.jsxs)(FW.Fragment, {
                children: [RW("homePage:pleaseCopyError"), (0, FW.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, FW.jsx)(IW.b, {
                    errorString: WW.stack
                  })
                })]
              }),
              confirmText: RW("general:tryAgain"),
              cancelText: RW("general:cancel")
            }).getResult().then((WW => {
              !0 === WW && (0, YW.reloadBloxd)((0, XW.d)(AW.gameNameWithVariation, AW.lobbyName))
            })), wW(-1)
          })) : wW(-1))
        })), () => {
          lW = !1
        }
      }), [gR, MW.search, MW.pathname]), (0, AW.useEffect)((() => {
        fW.disableFullscreen && (0, PW.c)() ? (0, PW.h)() : !fW.disableFullscreen && (0, PW.e)() && (0, PW.p)()
      }), [lW, fW]), (0, AW.useEffect)((() => {
        "inGame" === lW && wR()
      }), [lW, fW]), (0, AW.useEffect)((() => {
        "inGame" !== lW && CW.b.set({
          openInGameMenuName: null
        })
      }), [lW]), (0, FW.jsx)(FW.Fragment, {
        children: "inGame" === lW && (0, FW.jsx)(zR.InGameUi, {})
      })
    }
  },
  3955: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    var wW = MW(1033);
    async function CW(WW) {
      const RW = await fetch(`${wW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === RW.status || 403 === RW.status) return null;
      if (!RW.ok) throw new Error(`Failed to download the texture pack (${RW.status})`);
      return await RW.json()
    }
  },
  7775: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(1379),
      CW = MW(1053),
      zR = MW(564);

    function AW(WW) {
      return WW = function(WW, RW) {
        var MW;
        const wW = new URLSearchParams(RW),
          CW = wW.get("lobby"),
          zR = wW.get("vm"),
          AW = null !== (MW = CW) && void 0 !== MW ? MW : WW.lobbyName,
          bR = null !== zR && void 0 !== zR ? zR : WW.directJoinVmUrl;
        if (AW === WW.lobbyName && bR === WW.directJoinVmUrl) return WW;
        return {
          ...WW,
          lobbyName: AW,
          directJoinVmUrl: bR
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
        if ((0, zR.S)(WW.directJoinVmUrl)) return WW;
        const RW = (0, CW.U)(WW.directJoinVmUrl);
        null === RW && (WW.directJoinVmUrl = void 0);
        return WW
      }(WW = function(WW) {
        if ((0, zR.S)(WW.gameNameWithVariation)) return WW;
        return WW.gameNameWithVariation = (0, wW.i)(WW.gameNameWithVariation), WW
      }(WW))
    }
  },
  7772: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      i: () => yR,
      l: () => bR
    });
    var wW = MW(2289);
    let CW = null,
      zR = !1;

    function AW() {
      return zR = !0, Promise.all([MW.e(59), MW.e(62), MW.e(60), MW.e(61), MW.e(72), MW.e(71), MW.e(217), MW.e(218), MW.e(40)]).then((() => MW(38126))).catch((() => {})), Promise.all([MW.e(120), MW.e(119), MW.e(47)]).then((() => MW(38270))).then((WW => {
        let {
          startJoinLoad: RW
        } = WW;
        RW()
      }), (() => {})), CW ??= Promise.all([MW.e(61), MW.e(120), MW.e(72), MW.e(173), MW.e(119), MW.e(241), MW.e(218), MW.e(115), MW.e(52)]).then((() => MW(38350))).then((WW => (WW.startWasmPlay(), WW.followPageUiPack((WW => {
        wW.d.showGamePack(WW)
      })), WW)), (WW => {
        throw CW = null, WW
      })), CW
    }

    function bR() {
      return zR
    }

    function yR() {
      return Promise.all([MW.e(61), MW.e(120), MW.e(72), MW.e(173), MW.e(119), MW.e(241), MW.e(218), MW.e(115), MW.e(52)]).then((() => MW(38350))).then((WW => {
        WW.startWasmPreviews(), WW.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);