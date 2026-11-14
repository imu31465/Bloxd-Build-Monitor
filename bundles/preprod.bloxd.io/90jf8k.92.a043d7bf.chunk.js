export const id = 92;
export const ids = [92];
export const modules = {
  7821: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => uW
    });
    var CF = SF(1360),
      AF = SF(11),
      uF = SF(3676),
      hF = SF(46),
      bW = SF(1576),
      dF = SF(1352),
      PF = SF(1189),
      RF = SF(1046),
      iW = SF(3649),
      eF = SF(138),
      EF = SF(1001),
      QF = SF(20),
      rW = SF(1110),
      gW = SF(1510),
      tW = SF(1168),
      TF = SF(1249),
      aW = SF(3610),
      kW = SF(3506),
      qW = SF(89),
      VF = SF(971);
    const NF = "https://discord.gg/playbloxd";

    function DF(FF) {
      let {
        failure: WF
      } = FF;
      const {
        t: SF
      } = (0, RF.B)(), CF = qW.featureFlags.useDiscord ? WF.customPack ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : WF.customPack ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, VF.jsxs)(VF.Fragment, {
        children: [SF(CF, {
          code: WF.code
        }), qW.featureFlags.useDiscord && (0, VF.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, VF.jsx)("a", {
            href: NF,
            target: "_blank",
            rel: "noreferrer",
            children: SF("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var LF = SF(2453),
      mW = SF(1916),
      OF = SF(1392),
      xW = SF(612),
      ZF = SF(1090),
      oF = SF(874),
      YF = SF(1336),
      MF = SF(1085),
      cW = SF(2488),
      GF = SF(2344),
      zW = SF(1196),
      IF = SF(1186),
      fF = SF(3987),
      yW = SF(7826),
      sF = SF(2258);

    function nF(FF) {
      let {
        onApply: WF,
        onSkip: SF
      } = FF;
      const {
        t: CF
      } = (0, RF.B)();
      return (0, hF.useEffect)((() => {
        sF.f.skipPlayWait()
      }), []), (0, VF.jsx)(zW.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, VF.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [CF("customTexturePack:downloadPrompt"), (0, VF.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: CF("customTexturePack:authorWarning")
          }), (0, VF.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: CF("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: WF
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: SF
        }
      })
    }
    async function HF() {
      let FF = !1;
      const WF = PF.NotificationProvider.showCustomPopup({
        body: WF => (0, VF.jsx)(nF, {
          onApply: () => {
            FF = !0, WF()
          },
          onSkip: WF
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await WF.getResult(), FF
    }
    let KF = {
      wanted: !1
    };
    let wF = null;

    function XF(FF) {
      FF.setGamePackConfirm(HF), wF = FF
    }
    var UF = SF(2663);

    function BF(FF) {
      let {
        schematicId: WF,
        texturePackKey: SF,
        onClose: CF
      } = FF;
      const [AF, uF] = (0, hF.useState)("prompt"), [bW, dF] = (0, hF.useState)(null), PF = (0, UF.d)();

      function RF() {
        CF()
      }
      return "prompt" === AF ? (0, VF.jsx)(nF, {
        onApply: async function() {
          uF("downloading");
          try {
            const FF = await async function(FF, WF) {
              const SF = await (0, fF.e)(WF);
              if (SF) return {
                pack: SF,
                key: WF
              };
              const CF = await EF.userContextManager.getCurrentUserContext(),
                AF = (await YF.b.getGame(CF, FF, !0)).customTexturePackKey;
              if (!AF) return null;
              const uF = await (0, fF.e)(AF);
              if (!uF) throw new Error("The texture pack could not be found");
              return {
                pack: uF,
                key: AF
              }
            }(WF, SF);
            if (!PF.current) return;
            if (!FF) return void CF();
            if ((0, cW.h)(FF.pack)) return void uF("refused");
            GF.e.setFromJson(FF.pack, "customGame"), await GF.e.saveTemporaryTexturePack(FF.key), PF.current && (0, gW.reloadBloxd)()
          } catch (FF) {
            dF(FF instanceof Error ? FF.message : String(FF)), uF("error")
          }
        },
        onSkip: RF
      }) : "downloading" === AF ? (0, VF.jsx)(zW.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, VF.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, VF.jsx)(IF.c, {
            showFace: !0
          })
        })
      }) : "error" === AF ? (0, VF.jsx)(zW.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: bW,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: RF
        }
      }) : "refused" === AF ? (0, VF.jsx)(zW.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: RF
        }
      }) : null
    }
    var jW = SF(7834),
      vW = SF(3483),
      JF = SF(3485),
      pF = SF(2418),
      lF = SF(2636),
      FW = SF(3690),
      WW = SF(1153),
      SW = SF(234);

    function CW() {
      const {
        touchscreenSensitivity: FF,
        mouseSensitivity: WF
      } = AF.b.get("clientEscMenuOptions");
      bW.gameBridge.send("setLookSensitivity", AF.b.get("isTouchScreen") ? FF : WF)
    }
    async function AW(FF, WF, SF) {
      const CF = (0, FW.E)(WF);
      async function hF(FF, WF, SF, CF) {
        var hF;
        if (CF.aborted) return null;
        null === AF.b.get("gameEntrySource") && (0, AF.c)("directPlayUrl"), SW.h && (0, yW.c)().catch((() => {})), AF.b.set({
          gameState: "findingLobby"
        }), QF.j.Uu("loadingScreenState", "loadingPage:findingLobby");
        const dF = await EF.userContextManager.getCurrentUserContext();
        bW.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: WF,
          discordContext: FF instanceof ZF.f ? FF.getSerialisableParams() : null
        }), (0, JF.c)();
        const PF = await async function(FF, WF, SF, CF, AF) {
          try {
            await uF.reqLibsLoadedPromise
          } catch (hF) {
            return rW.d.errorWithCode(hF.toString(), eF.f.LOAD_REQUIRED_LIBS, {
              error: hF,
              severity: "medium"
            })
          }
          return QF.j.Uu("matchmakeAndPlayStepCompleted", {
            step: eF.f.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, uF.matchmakeAndPlayMaybeUnloaded)(FF, WF, SF, CF, AF)
        }(FF, WF, SF, dF, CF), RF = PF.isError() ? PF.asError() : null;
        if (RF && !RF.debugResult.Qh && (console.log("Failed to join lobby:", RF.message), (0, pF.h)("matchmake_failed", RF.message, eF.f[RF.code])), CF.aborted) return bW.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== RF && void 0 !== RF && RF.debugResult.Qh) return console.log("Join cancelled:", RF.message), null;
        if (RF) return PF;
        const {
          gameNameWithVariation: iW,
          lobbyName: gW,
          addLobbyToRecentlyPlayed: TF
        } = PF.getValue();
        let aW;
        CW(), (0, WW.o)().setGameViewShown(!0);
        const kW = null === (hF = xW.e[iW]) || void 0 === hF ? void 0 : hF.recentlyPlayedAs;
        return aW = (0, oF.j)(iW) ? {
          type: "custom",
          name: "",
          schematicId: (0, oF.o)(iW),
          recentLobbies: []
        } : "classic" !== iW || (0, MF.L)(gW) ? kW ? {
          type: "bloxd",
          gameNameWithVariation: kW,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: iW,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, YF.b.addRecentlyPlayedGame(dF, aW, TF && !kW ? gW : void 0).then((FF => {
          dF.setRecentlyPlayedGames(FF)
        })).catch((FF => {
          console.error("Failed to record recently played game", FF)
        })), (0, tW.P)(), PF
      }
      return CF && (0, AF.c)("updateRejoin"), (0, lF.f)((async AF => {
        try {
          let bW = FF,
            dF = await hF(bW, WF, SF, AF);
          for (let FF = 0; CF && FF < FW.m; FF++) {
            var uF;
            if (null === (uF = dF) || void 0 === uF || !uF.isError() || dF.asError().code !== eF.f.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, FW.H)((0, FW.s)(FF), AF)) return dF;
            bW = (0, FW.u)(bW, FF + 1, "string" === typeof bW && (0, MF.L)(bW)), dF = await hF(bW, WF, SF, AF)
          }
          return dF
        } catch (dF) {
          if ((0, pF.h)("matchmake_failed", dF, "unexpected"), bW.gameBridge.send("leaveGame", {
              reloadPath: AF.aborted ? null : "/"
            }), AF.aborted) return null;
          throw dF
        }
      }), (async () => {
        var FF;
        CF || (null !== (FF = xW.e[WF]) && void 0 !== FF && FF.playAdBeforeMatchmaking ? (sF.f.skipPlayWait(), await new Promise((FF => {
          (0, tW.hb)((() => {
            FF(!0)
          }), "video_start")
        }))) : (0, tW.hb)((() => {}), "video_start"))
      }))
    }

    function uW() {
      const {
        t: FF
      } = (0, RF.B)(), WF = (0, dF.useNavigatePreserveSearch)(), SF = (0, CF.p)(), QF = (0, CF.v)(), rW = (0, hF.useRef)({
        t: FF,
        navigate: WF
      });
      rW.current = {
        t: FF,
        navigate: WF
      };
      const {
        gameState: qW,
        clientEscMenuOptions: NF
      } = (0, AF.d)(["gameState", "clientEscMenuOptions"]), xW = (0, hF.useRef)(null), ZF = (0, hF.useRef)(null);
      var cW;
      return (0, lF.i)(), (0, lF.l)(), cW = SW.h, (0, hF.useEffect)((() => {
        if (!cW) return;
        let FF = !0;
        return (0, yW.c)().then((WF => {
          FF && XF(WF)
        })).catch((() => {})), () => {
          var WF;
          FF = !1, KF.wanted = !1, null === (WF = wF) || void 0 === WF || WF.setGamePackConfirm(null), wF = null
        }
      }), [cW]), (0, hF.useEffect)((() => {
        var FF;
        (0, uF.needGameClientNow)();
        const {
          t: WF,
          navigate: CF
        } = rW.current, hF = (0, jW.e)(QF, SF.search);
        if (QF.lobbyName && !new URLSearchParams(SF.search).has("lobby")) return void CF((0, OF.c)(hF.gameNameWithVariation, hF.lobbyName), {
          replace: !0
        });
        let dF = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === SF.pathname) {
          const FF = AF.b.get("discordContext");
          if (!FF) return void CF("/");
          dF = iW.d.setupDiscordLobby(FF, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: FF
          }))).catch((WF => (console.error("Failed to setup discord lobby", WF), {
            shouldMatchmake: !1,
            discordContext: FF
          })))
        } else if (!hF.gameNameWithVariation || !(0, MF.H)(hF.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${hF.gameNameWithVariation}`), void CF(-1);
        if (hF.gameNameWithVariation === xW.current && hF.lobbyName === ZF.current) return;
        if (bW.gameBridge.latest("connectedGame").replay) return void(0, lF.e)(null);
        (0, tW.K)(), AF.b.set({
          gameState: "loadingScreen"
        });
        const RF = function() {
          KF.wanted = !1;
          const FF = {
            wanted: !0
          };
          return KF = FF, () => FF.wanted
        }();
        if ("releaseCountdown" === (null === (FF = (0, mW.g)(hF.gameNameWithVariation)) || void 0 === FF ? void 0 : FF.type)) return console.error(`Game hasn't been released yet: ${hF.gameNameWithVariation}`), void CF(-1);
        const TF = hF.gameNameWithVariation;
        if (TF && (SW.h || (0, oF.j)(TF))) {
          const FF = SW.h ? Promise.all([(0, yW.c)(), EF.userContextManager.getCurrentUserContext()]).then((FF => {
            let [WF, SF] = FF;
            if (RF()) return XF(WF), WF.packForGame(TF, SF, RF)
          })) : async function(FF) {
            await GF.e.indexedDbValuesAreLoaded();
            const WF = await EF.userContextManager.getCurrentUserContext(),
              SF = (0, oF.o)(FF);
            let CF;
            try {
              CF = await YF.b.getGame(WF, SF, !0)
            } catch (hF) {
              return void console.error("Failed to get game", hF)
            }
            const AF = CF.customTexturePackKey;
            if (!AF) return void(GF.e.isUsingTemporaryTexturePack() && ((0, gW.reloadBloxd)(), await new Promise((() => {}))));
            if (GF.e.isUsingTemporaryTexturePack() && GF.e.getTemporaryTexturePackSource() === AF) return;
            const uF = PF.NotificationProvider.showCustomPopup({
              body: FF => (0, VF.jsx)(BF, {
                schematicId: SF,
                texturePackKey: AF,
                onClose: FF
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await uF.getResult()
          }(TF), WF = dF;
          dF = FF.catch((FF => {
            console.error("Failed to check for custom texture pack", FF)
          })).then((() => WF))
        }(0, lF.e)(null);
        let qW = !0;
        return dF.then((FF => {
          let {
            shouldMatchmake: SF,
            discordContext: uF
          } = FF;
          qW && (SF ? AW(null !== uF && void 0 !== uF ? uF : hF.lobbyName, uF ? "classic" : hF.gameNameWithVariation, hF.directJoinVmUrl).then((FF => {
            var SF;
            if (null !== FF && qW)
              if (FF.isError()) {
                var uF;
                const dF = FF.asError(),
                  RF = null !== (uF = dF.debugResult.severity) && void 0 !== uF ? uF : "high";
                if (dF.code === eF.f.SHADER_PACK) return void(0, vW.d)(dF.message, CF);
                const iW = AF.b.get("gameEntrySource"),
                  EF = dF.code === eF.f.INITIALISE_WEBGL ? (0, kW.b)() : null,
                  {
                    error: QF
                  } = dF.debugResult;
                let rW;
                if (null !== EF) rW = (0, kW.j)(EF);
                else if (QF instanceof LF.n) SF = QF, rW = PF.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, VF.jsx)(DF, {
                    failure: SF
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((FF => !0 === FF));
                else {
                  let FF;
                  switch (RF) {
                    case "low":
                      FF = "face-diagonal-mouth";
                      break;
                    case "medium":
                      FF = "face-worried";
                      break;
                    case "high":
                      FF = "face-dizzy"
                  }
                  rW = PF.NotificationProvider.showPromptPopup({
                    icon: FF,
                    title: eF.q[dF.code],
                    subtitle: (0, VF.jsxs)(VF.Fragment, {
                      children: [dF.message, dF.debugResult.error instanceof Error && (0, VF.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, VF.jsx)(aW.c, {
                          errorString: dF.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: WF("general:tryAgain"),
                    cancelText: WF("general:cancel")
                  }).getResult().then((FF => !0 === FF))
                }
                rW.then((FF => {
                  if (FF) {
                    (0, AF.c)(iW);
                    const FF = (0, OF.c)(hF.gameNameWithVariation, hF.lobbyName);
                    "low" === RF ? CF(FF) : (0, gW.reloadBloxd)(FF)
                  }
                })), bW.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), CF(-1)
              } else {
                xW.current = FF.getValue().gameNameWithVariation, ZF.current = FF.getValue().lobbyName;
                const WF = (0, OF.c)(xW.current, FF.getValue().lobbyName);
                CF(WF, {
                  replace: !0
                })
              }
          })).catch((FF => {
            if (!qW) return;
            PF.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, VF.jsxs)(VF.Fragment, {
                children: [WF("homePage:pleaseCopyError"), (0, VF.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, VF.jsx)(aW.c, {
                    errorString: FF.stack
                  })
                })]
              }),
              confirmText: WF("general:tryAgain"),
              cancelText: WF("general:cancel")
            }).getResult().then((FF => {
              !0 === FF && (0, gW.reloadBloxd)((0, OF.c)(hF.gameNameWithVariation, hF.lobbyName))
            })), CF(-1)
          })) : CF(-1))
        })), () => {
          qW = !1
        }
      }), [QF, SF.search, SF.pathname]), (0, hF.useEffect)((() => {
        NF.disableFullscreen && (0, TF.b)() ? (0, TF.g)() : !NF.disableFullscreen && (0, TF.d)() && (0, TF.n)()
      }), [qW, NF]), (0, hF.useEffect)((() => {
        "inGame" === qW && CW()
      }), [qW, NF]), (0, hF.useEffect)((() => {
        "inGame" !== qW && AF.b.set({
          openInGameMenuName: null
        })
      }), [qW]), (0, VF.jsx)(VF.Fragment, {
        children: "inGame" === qW && (0, VF.jsx)(uF.InGameUi, {})
      })
    }
  },
  3987: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(1056);
    async function AF(FF) {
      const WF = await fetch(`${CF.clientSideServerUrls.s3Url}/${FF}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === WF.status || 403 === WF.status) return null;
      if (!WF.ok) throw new Error(`Failed to download the texture pack (${WF.status})`);
      return await WF.json()
    }
  },
  7834: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(1392),
      AF = SF(1085),
      uF = SF(568);

    function hF(FF) {
      return FF = function(FF, WF) {
        var SF;
        const CF = new URLSearchParams(WF),
          AF = CF.get("lobby"),
          uF = CF.get("vm"),
          hF = null !== (SF = AF) && void 0 !== SF ? SF : FF.lobbyName,
          bW = null !== uF && void 0 !== uF ? uF : FF.directJoinVmUrl;
        if (hF === FF.lobbyName && bW === FF.directJoinVmUrl) return FF;
        return {
          ...FF,
          lobbyName: hF,
          directJoinVmUrl: bW
        }
      }(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), FF = function(FF) {
        if ((0, uF.Q)(FF.directJoinVmUrl)) return FF;
        const WF = (0, AF.bb)(FF.directJoinVmUrl);
        null === WF && (FF.directJoinVmUrl = void 0);
        return FF
      }(FF = function(FF) {
        if ((0, uF.Q)(FF.gameNameWithVariation)) return FF;
        return FF.gameNameWithVariation = (0, CF.j)(FF.gameNameWithVariation), FF
      }(FF))
    }
  },
  7826: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      d: () => dF,
      h: () => bW
    });
    var CF = SF(2344);
    let AF = null,
      uF = !1;

    function hF() {
      return uF = !0, Promise.all([SF.e(59), SF.e(62), SF.e(60), SF.e(61), SF.e(72), SF.e(71), SF.e(217), SF.e(218), SF.e(40)]).then((() => SF(38511))).catch((() => {})), Promise.all([SF.e(120), SF.e(119), SF.e(47)]).then((() => SF(38659))).then((FF => {
        let {
          startJoinLoad: WF
        } = FF;
        WF()
      }), (() => {})), AF ??= Promise.all([SF.e(61), SF.e(120), SF.e(72), SF.e(173), SF.e(119), SF.e(241), SF.e(218), SF.e(115), SF.e(52)]).then((() => SF(38723))).then((FF => (FF.startWasmPlay(), FF.followPageUiPack((FF => {
        CF.e.showGamePack(FF)
      })), FF)), (FF => {
        throw AF = null, FF
      })), AF
    }

    function bW() {
      return uF
    }

    function dF() {
      return Promise.all([SF.e(61), SF.e(120), SF.e(72), SF.e(173), SF.e(119), SF.e(241), SF.e(218), SF.e(115), SF.e(52)]).then((() => SF(38723))).then((FF => {
        FF.startWasmPreviews(), FF.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);