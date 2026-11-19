export const id = 108;
export const ids = [108];
export const modules = {
  8593: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => SC
    });
    var ID = cD(1517),
      pD = cD(16),
      iD = cD(4452),
      fD = cD(53),
      bD = cD(1440);
    var QD = cD(1905),
      wD = cD(1508),
      SD = cD(1340),
      BD = cD(1192),
      yD = cD(162),
      MD = cD(1221),
      tD = cD(2302),
      ZD = cD(8598);

    function oD(DD, CD) {
      const cD = !0 === CD.debugResult.gameRefused,
        ID = cD || CD.code === yD.o.REQUEST_TO_MATCHMAKING ? (0, ZD.h)(CD.message) : null;
      return null !== ID ? (vD(DD, DD((0, ZD.m)(ID)), DD(ZD.j[ID])), !0) : !!cD && (async function(DD) {
        const {
          gameNameWithVariation: CD,
          lobbyName: cD,
          shownLobbyName: ID
        } = QD.gameBridge.latest("connectedGame"), pD = "classic" === CD && (0, MD.F)(cD) ? ID : await (0, tD.b)(DD, CD, cD);
        return "" !== pD ? DD("general:cantJoinGame", {
          game: pD
        }) : DD("general:cantJoinThisGame")
      }(DD).then((cD => {
        vD(DD, cD, CD.message)
      })), !0)
    }

    function vD(DD, CD, cD) {
      SD.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: CD,
        subtitle: cD,
        confirmText: DD("general:ok"),
        cancelText: ""
      })
    }
    var ND = cD(4388),
      gD = cD(1127),
      XD = cD(20),
      mD = cD(1243),
      nD = cD(1701),
      OD = cD(90),
      PD = cD(1305),
      HD = cD(1425),
      UD = cD(4323),
      xD = cD(4170),
      qD = cD(3053),
      JD = cD(1093);
    const KD = "https://discord.gg/playbloxd";

    function aD(DD) {
      let {
        failure: CD
      } = DD;
      const {
        t: cD
      } = (0, BD.F)(), ID = "chosen" === CD.packSource, pD = OD.featureFlags.useDiscord ? ID ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : ID ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, JD.jsxs)(JD.Fragment, {
        children: [cD(pD, {
          code: CD.code
        }), "default" !== CD.packSource && CD.code === qD.l.Error && (0, JD.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [cD("texturePackLoad:details"), " ", CD.reason]
        }), OD.featureFlags.useDiscord && (0, JD.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, JD.jsx)("a", {
            href: KD,
            target: "_blank",
            rel: "noreferrer",
            children: cD("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var VD = cD(1319),
      zD = cD(767),
      jD = cD(1227),
      lD = cD(1011),
      LD = cD(1497),
      TD = cD(3095),
      GD = cD(2946),
      RD = cD(1347),
      kD = cD(1328),
      dD = cD(4762),
      YD = cD(8602),
      WD = cD(2761);

    function sD(DD) {
      let {
        onApply: CD,
        onSkip: cD
      } = DD;
      const {
        t: ID
      } = (0, BD.F)();
      return (0, fD.useEffect)((() => {
        WD.g.skipPlayWait()
      }), []), (0, JD.jsx)(RD.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, JD.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [ID("customTexturePack:downloadPrompt"), (0, JD.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: ID("customTexturePack:authorWarning")
          }), (0, JD.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: ID("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: CD
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: cD
        }
      })
    }
    async function ED() {
      let DD = !1;
      const CD = SD.NotificationProvider.showCustomPopup({
        body: CD => (0, JD.jsx)(sD, {
          onApply: () => {
            DD = !0, CD()
          },
          onSkip: CD
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await CD.getResult(), DD
    }
    let eD = {
      wanted: !1
    };
    let uD = null;

    function hD(DD) {
      DD.setGamePackConfirm(ED), uD = DD
    }
    var rD = cD(3306);

    function AD(DD) {
      let {
        schematicId: CD,
        texturePackKey: cD,
        onClose: ID
      } = DD;
      const [pD, iD] = (0, fD.useState)("prompt"), [bD, QD] = (0, fD.useState)(null), wD = (0, rD.d)();

      function SD() {
        ID()
      }
      return "prompt" === pD ? (0, JD.jsx)(sD, {
        onApply: async function() {
          iD("downloading");
          try {
            const DD = await async function(DD, CD) {
              const cD = await (0, dD.c)(CD);
              if (cD) return {
                pack: cD,
                key: CD
              };
              const ID = await gD.userContextManager.getCurrentUserContext(),
                pD = (await LD.c.getGame(ID, DD, !0)).customTexturePackKey;
              if (!pD) return null;
              const iD = await (0, dD.c)(pD);
              if (!iD) throw new Error("The texture pack could not be found");
              return {
                pack: iD,
                key: pD
              }
            }(CD, cD);
            if (!wD.current) return;
            if (!DD) return void ID();
            if ((0, TD.n)(DD.pack)) return void iD("refused");
            GD.e.setFromJson(DD.pack, "customGame"), await GD.e.saveTemporaryTexturePack(DD.key), wD.current && (0, nD.reloadBloxd)()
          } catch (DD) {
            QD(DD instanceof Error ? DD.message : String(DD)), iD("error")
          }
        },
        onSkip: SD
      }) : "downloading" === pD ? (0, JD.jsx)(RD.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, JD.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, JD.jsx)(kD.e, {
            showFace: !0
          })
        })
      }) : "error" === pD ? (0, JD.jsx)(RD.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: bD,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: SD
        }
      }) : "refused" === pD ? (0, JD.jsx)(RD.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: SD
        }
      }) : null
    }
    var FD = cD(8609),
      DC = cD(4148),
      CC = cD(1750),
      cC = cD(3032),
      IC = cD(3241),
      pC = cD(4476),
      iC = cD(1294),
      fC = cD(646),
      bC = cD(733);

    function QC() {
      const DD = pD.d.get("clientEscMenuOptions");
      QD.gameBridge.send("setLookSensitivity", pD.d.get("isTouchScreen") ? (0, bC.n)(DD) : DD.mouseSensitivity)
    }
    async function wC(DD, CD, cD) {
      const ID = (0, pC.L)(CD);
      async function fD(DD, CD, cD, ID) {
        var fD;
        if (ID.aborted) return null;
        null === pD.d.get("gameEntrySource") && (0, pD.k)("directPlayUrl"), fC.q && (0, YD.c)().catch((() => {})), pD.d.set({
          gameState: "findingLobby"
        }), XD.i.Uo("loadingScreenState", "loadingPage:findingLobby");
        const bD = await gD.userContextManager.getCurrentUserContext();
        QD.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: CD,
          discordContext: DD instanceof jD.e ? DD.getSerialisableParams() : null
        }), (0, CC.g)();
        const wD = await async function(DD, CD, cD, ID, pD) {
          try {
            await iD.reqLibsLoadedPromise
          } catch (fD) {
            return mD.e.errorWithCode(fD.toString(), yD.o.LOAD_REQUIRED_LIBS, {
              error: fD,
              severity: "medium"
            })
          }
          return XD.i.Uo("matchmakeAndPlayStepCompleted", {
            step: yD.o.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, iD.matchmakeAndPlayMaybeUnloaded)(DD, CD, cD, ID, pD)
        }(DD, CD, cD, bD, ID), SD = wD.isError() ? wD.asError() : null;
        if (SD && !SD.debugResult.tc) {
          console.log("Failed to join lobby:", SD.message);
          const DD = "timedOut" === SD.debugResult.gameServerUnreachable;
          (0, cC.h)("matchmake_failed", SD.message, DD ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : yD.o[SD.code])
        }
        if (ID.aborted) return QD.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== SD && void 0 !== SD && SD.debugResult.tc) return console.log("Join cancelled:", SD.message), null;
        if (SD) return wD;
        const {
          gameNameWithVariation: BD,
          lobbyName: tD,
          addLobbyToRecentlyPlayed: ZD
        } = wD.getValue();
        let oD;
        QC(), (0, iC.A)().setGameViewShown(!0);
        const vD = null === (fD = zD.b[BD]) || void 0 === fD ? void 0 : fD.recentlyPlayedAs;
        return oD = (0, lD.m)(BD) ? {
          type: "custom",
          name: "",
          schematicId: (0, lD.t)(BD),
          recentLobbies: []
        } : "classic" !== BD || (0, MD.N)(tD) ? vD ? {
          type: "bloxd",
          gameNameWithVariation: vD,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: BD,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, LD.c.addRecentlyPlayedGame(bD, oD, ZD && !vD ? tD : void 0).then((DD => {
          bD.setRecentlyPlayedGames(DD)
        })).catch((DD => {
          console.error("Failed to record recently played game", DD)
        })), (0, PD.I)(), wD
      }
      return ID && (0, pD.k)("updateRejoin"), (0, IC.g)((async pD => {
        try {
          let bD = DD,
            QD = await fD(bD, CD, cD, pD);
          for (let DD = 0; ID && DD < pC.j; DD++) {
            var iD;
            if (null === (iD = QD) || void 0 === iD || !iD.isError() || QD.asError().code !== yD.o.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, pC.O)((0, pC.u)(DD), pD)) return QD;
            bD = (0, pC.w)(bD, DD + 1, "string" === typeof bD && (0, MD.N)(bD)), QD = await fD(bD, CD, cD, pD)
          }
          return QD
        } catch (bD) {
          if ((0, cC.h)("matchmake_failed", bD, "unexpected"), QD.gameBridge.send("leaveGame", {
              reloadPath: pD.aborted ? null : "/"
            }), pD.aborted) return null;
          throw bD
        }
      }), (async DD => {
        var cD;
        if (ID) return;
        const pD = (0, PD.A)();
        null !== pD && (await pD, DD.aborted) || (null !== (cD = zD.b[CD]) && void 0 !== cD && cD.playAdBeforeMatchmaking ? (WD.g.skipPlayWait(), await new Promise((DD => {
          (0, PD.ab)((() => {
            DD(!0)
          }), "video_start")
        }))) : (0, PD.ab)((() => {}), "video_start"))
      }))
    }

    function SC() {
      const {
        t: DD
      } = (0, BD.F)(), CD = (0, wD.useNavigatePreserveSearch)(), cD = (0, ID.w)(), ZD = (0, ID.F)(), vD = (0, fD.useRef)({
        t: DD,
        navigate: CD
      });
      vD.current = {
        t: DD,
        navigate: CD
      };
      const XD = (0, fD.useRef)("");
      XD.current = cD.pathname + cD.search;
      const {
        gameState: mD,
        clientEscMenuOptions: KD
      } = (0, pD.o)(["gameState", "clientEscMenuOptions"]), zD = (0, fD.useRef)(null), jD = (0, fD.useRef)(null);
      var TD;
      (0, IC.h)(), (0, IC.l)(), TD = fC.q, (0, fD.useEffect)((() => {
        if (!TD) return;
        let DD = !0;
        return (0, YD.c)().then((CD => {
          DD && hD(CD)
        })).catch((() => {})), () => {
          var CD;
          DD = !1, eD.wanted = !1, null === (CD = uD) || void 0 === CD || CD.setGamePackConfirm(null), uD = null
        }
      }), [TD]), (0, fD.useEffect)((() => {
        var DD;
        (0, iD.needGameClientNow)();
        const {
          t: CD,
          navigate: ID
        } = vD.current, fD = (0, FD.e)(ZD, cD.search);
        if (ZD.lobbyName && !new URLSearchParams(cD.search).has("lobby")) return void ID((0, VD.b)(fD.gameNameWithVariation, fD.lobbyName), {
          replace: !0
        });
        let bD = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === cD.pathname) {
          const DD = pD.d.get("discordContext");
          if (!DD) return void ID("/");
          bD = ND.b.setupDiscordLobby(DD, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: DD
          }))).catch((CD => (console.error("Failed to setup discord lobby", CD), {
            shouldMatchmake: !1,
            discordContext: DD
          })))
        } else if (!fD.gameNameWithVariation || !(0, MD.J)(fD.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${fD.gameNameWithVariation}`), void ID(-1);
        if (fD.gameNameWithVariation === zD.current && fD.lobbyName === jD.current) return;
        if (QD.gameBridge.latest("connectedGame").replay) return void(0, IC.f)(null);
        (0, PD.E)(), pD.d.set({
          gameState: "loadingScreen"
        });
        const wD = function() {
          eD.wanted = !1;
          const DD = {
            wanted: !0
          };
          return eD = DD, () => DD.wanted
        }();
        if ("releaseCountdown" === (null === (DD = (0, tD.e)(fD.gameNameWithVariation)) || void 0 === DD ? void 0 : DD.type)) return console.error(`Game hasn't been released yet: ${fD.gameNameWithVariation}`), void ID(-1);
        const BD = fD.gameNameWithVariation;
        if (BD && (fC.q || (0, lD.m)(BD))) {
          const DD = fC.q ? Promise.all([(0, YD.c)(), gD.userContextManager.getCurrentUserContext()]).then((DD => {
            let [CD, cD] = DD;
            if (wD()) return hD(CD), CD.packForGame(BD, cD, wD)
          })) : async function(DD) {
            await GD.e.indexedDbValuesAreLoaded();
            const CD = await gD.userContextManager.getCurrentUserContext(),
              cD = (0, lD.t)(DD);
            let ID;
            try {
              ID = await LD.c.getGame(CD, cD, !0)
            } catch (fD) {
              return void console.error("Failed to get game", fD)
            }
            const pD = ID.customTexturePackKey;
            if (!pD) return void(GD.e.isUsingTemporaryTexturePack() && ((0, nD.reloadBloxd)(), await new Promise((() => {}))));
            if (GD.e.isUsingTemporaryTexturePack() && GD.e.getTemporaryTexturePackSource() === pD) return;
            const iD = SD.NotificationProvider.showCustomPopup({
              body: DD => (0, JD.jsx)(AD, {
                schematicId: cD,
                texturePackKey: pD,
                onClose: DD
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await iD.getResult()
          }(BD), CD = bD;
          bD = DD.catch((DD => {
            console.error("Failed to check for custom texture pack", DD)
          })).then((() => CD))
        }(0, IC.f)(null);
        let mD = !1;
        const HD = cD.pathname + cD.search,
          KD = () => !mD && XD.current === HD;
        return bD.then((DD => {
          let {
            shouldMatchmake: cD,
            discordContext: iD
          } = DD;
          KD() && (cD ? wC(null !== iD && void 0 !== iD ? iD : fD.lobbyName, iD ? "classic" : fD.gameNameWithVariation, fD.directJoinVmUrl).then((DD => {
            var cD;
            if (null !== DD && KD())
              if (DD.isError()) {
                var iD;
                const bD = DD.asError(),
                  wD = null !== (iD = bD.debugResult.severity) && void 0 !== iD ? iD : "high";
                if (bD.code === yD.o.SHADER_PACK) return void(0, DC.b)(bD.message, ID);
                const BD = pD.d.get("gameEntrySource"),
                  MD = bD.code === yD.o.INITIALISE_WEBGL ? (0, xD.b)() : null,
                  {
                    error: tD
                  } = bD.debugResult;
                let ZD;
                if (oD(CD, bD)) ZD = Promise.resolve(!1);
                else if (null !== MD) ZD = (0, xD.f)(MD);
                else if (tD instanceof qD.o) cD = tD, ZD = SD.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, JD.jsx)(aD, {
                    failure: cD
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((DD => !0 === DD));
                else {
                  let DD;
                  switch (wD) {
                    case "low":
                      DD = "face-diagonal-mouth";
                      break;
                    case "medium":
                      DD = "face-worried";
                      break;
                    case "high":
                      DD = "face-dizzy"
                  }
                  ZD = SD.NotificationProvider.showPromptPopup({
                    icon: DD,
                    title: yD.H[bD.code],
                    subtitle: (0, JD.jsxs)(JD.Fragment, {
                      children: [bD.debugResult.gameServerUnreachable ? CD((0, OD.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : bD.message, bD.debugResult.error instanceof Error && (0, JD.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, JD.jsx)(UD.b, {
                          errorString: bD.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: CD("general:tryAgain"),
                    cancelText: CD("general:cancel")
                  }).getResult().then((DD => !0 === DD))
                }
                ZD.then((DD => {
                  if (DD) {
                    (0, pD.k)(BD);
                    const DD = (0, VD.b)(fD.gameNameWithVariation, fD.lobbyName);
                    "low" === wD ? ID(DD) : (0, nD.reloadBloxd)(DD)
                  }
                })), QD.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), ID(-1)
              } else {
                zD.current = DD.getValue().gameNameWithVariation, jD.current = DD.getValue().lobbyName;
                const CD = (0, VD.b)(zD.current, DD.getValue().lobbyName);
                ID(CD, {
                  replace: !0
                })
              }
          })).catch((DD => {
            if (!KD()) return;
            SD.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, JD.jsxs)(JD.Fragment, {
                children: [CD("homePage:pleaseCopyError"), (0, JD.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, JD.jsx)(UD.b, {
                    errorString: DD.stack
                  })
                })]
              }),
              confirmText: CD("general:tryAgain"),
              cancelText: CD("general:cancel")
            }).getResult().then((DD => {
              !0 === DD && (0, nD.reloadBloxd)((0, VD.b)(fD.gameNameWithVariation, fD.lobbyName))
            })), ID(-1)
          })) : ID(-1))
        })), () => {
          mD = !0
        }
      }), [ZD, cD.search, cD.pathname]), (0, fD.useEffect)((() => {
        KD.disableFullscreen && (0, HD.b)() ? (0, HD.f)() : !KD.disableFullscreen && (0, HD.c)() && (0, HD.n)()
      }), [mD, KD]), (0, fD.useEffect)((() => {
        "inGame" === mD && QC()
      }), [mD, KD]), (0, fD.useEffect)((() => {
        "inGame" !== mD && pD.d.set({
          openInGameMenuName: null
        })
      }), [mD]);
      const RD = function(DD) {
        const CD = (0, pD.h)(DD),
          [cD, ID] = (0, fD.useState)(0),
          [iD, QD] = (0, fD.useState)(!1);
        (0, bD.f)("gameJoined", (() => {
          (0, pD.h)(pD.d.get("gameState")) && (ID((DD => DD + 1)), QD(!0))
        })), (0, fD.useEffect)((() => {
          CD || QD(!1)
        }), [CD]);
        const wD = "inGame" === DD;
        return {
          mounted: wD || CD && iD,
          shown: wD,
          key: cD
        }
      }(mD);
      return (0, JD.jsx)(JD.Fragment, {
        children: RD.mounted && (0, JD.jsx)(iD.InGameUi, {
          shown: RD.shown
        }, RD.key)
      })
    }
  },
  4762: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(1199);
    async function pD(DD) {
      const CD = await fetch(`${ID.clientSideServerUrls.s3Url}/${DD}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === CD.status || 403 === CD.status) return null;
      if (!CD.ok) throw new Error(`Failed to download the texture pack (${CD.status})`);
      return await CD.json()
    }
  },
  8609: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(1319),
      pD = cD(1221),
      iD = cD(624);

    function fD(DD) {
      return DD = function(DD, CD) {
        var cD;
        const ID = new URLSearchParams(CD),
          pD = ID.get("lobby"),
          iD = ID.get("vm"),
          fD = null !== (cD = pD) && void 0 !== cD ? cD : DD.lobbyName,
          bD = null !== iD && void 0 !== iD ? iD : DD.directJoinVmUrl;
        if (fD === DD.lobbyName && bD === DD.directJoinVmUrl) return DD;
        return {
          ...DD,
          lobbyName: fD,
          directJoinVmUrl: bD
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
        if ((0, iD.C)(DD.directJoinVmUrl)) return DD;
        const CD = (0, pD.$)(DD.directJoinVmUrl);
        null === CD && (DD.directJoinVmUrl = void 0);
        return DD
      }(DD = function(DD) {
        if ((0, iD.C)(DD.gameNameWithVariation)) return DD;
        return DD.gameNameWithVariation = (0, ID.l)(DD.gameNameWithVariation), DD
      }(DD))
    }
  },
  8606: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    let ID = !1;

    function pD() {
      ID = !0
    }

    function iD() {
      return ID
    }
  },
  8602: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD,
      g: () => BD
    });
    var ID = cD(2946),
      pD = cD(2245),
      iD = cD(2981),
      fD = cD(4444),
      bD = cD(3314),
      QD = cD(8606);
    let wD = null;

    function SD() {
      return fD.d.cancelDownloadForJoin(), (0, bD.b)(), (0, pD.e)(), (0, QD.d)(), (0, iD.h)(), Promise.all([cD.e(69), cD.e(72), cD.e(71), cD.e(70), cD.e(83), cD.e(259), cD.e(199), cD.e(216), cD.e(237), cD.e(212), cD.e(46)]).then((() => cD(39760))).catch((() => {})), Promise.all([cD.e(74), cD.e(132), cD.e(87), cD.e(55)]).then((() => cD(39831))).then((DD => {
        let {
          startJoinLoad: CD
        } = DD;
        CD()
      }), (() => {})), wD ??= Promise.all([cD.e(71), cD.e(74), cD.e(129), cD.e(73), cD.e(132), cD.e(262), cD.e(186), cD.e(87), cD.e(86), cD.e(85), cD.e(212), cD.e(60)]).then((() => cD(39933))).then((DD => (DD.startWasmPlay(), DD.followPageUiPack((DD => {
        ID.e.showGamePack(DD)
      })), DD)), (DD => {
        throw wD = null, DD
      })), wD
    }

    function BD() {
      return Promise.all([cD.e(71), cD.e(74), cD.e(129), cD.e(73), cD.e(132), cD.e(262), cD.e(186), cD.e(87), cD.e(86), cD.e(85), cD.e(212), cD.e(60)]).then((() => cD(39933))).then((DD => {
        DD.startWasmPreviews(), DD.prefetchWasmPreviews()
      }))
    }
  },
  8598: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => fD,
      h: () => bD,
      j: () => wD,
      m: () => QD
    });
    var ID = cD(194),
      pD = cD(4431);

    function iD(DD) {
      return fD(DD) === ID.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function fD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function bD(DD) {
      var CD;
      return null !== (CD = Object.keys(pD.e).find((CD => pD.e[CD] === DD))) && void 0 !== CD ? CD : null
    }

    function QD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);