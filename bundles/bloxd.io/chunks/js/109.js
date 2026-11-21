export const id = 109;
export const ids = [109];
export const modules = {
  8659: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => uF
    });
    var LQ = wQ(1515),
      qQ = wQ(17),
      oQ = wQ(4501),
      DQ = wQ(53),
      kQ = wQ(1447);
    var vQ = wQ(1897),
      mQ = wQ(1503),
      uQ = wQ(1362),
      HQ = wQ(1207),
      bQ = wQ(160),
      YQ = wQ(1237),
      xQ = wQ(2278),
      AQ = wQ(8667);

    function tQ(QQ, FQ) {
      const wQ = !0 === FQ.debugResult.gameRefused,
        LQ = wQ || FQ.code === bQ.o.REQUEST_TO_MATCHMAKING ? (0, AQ.l)(FQ.message) : null;
      return null !== LQ ? (eQ(QQ, QQ((0, AQ.q)(LQ)), QQ(AQ.m[LQ])), !0) : !!wQ && (async function(QQ) {
        const {
          gameNameWithVariation: FQ,
          lobbyName: wQ,
          shownLobbyName: LQ
        } = vQ.gameBridge.latest("connectedGame"), qQ = "classic" === FQ && (0, YQ.M)(wQ) ? LQ : await (0, xQ.c)(QQ, FQ, wQ);
        return "" !== qQ ? QQ("general:cantJoinGame", {
          game: qQ
        }) : QQ("general:cantJoinThisGame")
      }(QQ).then((wQ => {
        eQ(QQ, wQ, FQ.message)
      })), !0)
    }

    function eQ(QQ, FQ, wQ) {
      uQ.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: FQ,
        subtitle: wQ,
        confirmText: QQ("general:ok"),
        cancelText: ""
      })
    }
    var MQ = wQ(4435),
      GQ = wQ(1147),
      pQ = wQ(22),
      cQ = wQ(1257),
      CQ = wQ(1725),
      SQ = wQ(96),
      iQ = wQ(1326),
      WQ = wQ(1440),
      RQ = wQ(4370),
      OQ = wQ(4217),
      sQ = wQ(3126),
      rQ = wQ(1107);
    const IQ = "https://discord.gg/playbloxd";

    function UQ(QQ) {
      let {
        failure: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, HQ.y)(), LQ = "chosen" === FQ.packSource, qQ = SQ.featureFlags.useDiscord ? LQ ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : LQ ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, rQ.jsxs)(rQ.Fragment, {
        children: [wQ(qQ, {
          code: FQ.code
        }), "default" !== FQ.packSource && FQ.code === sQ.l.Error && (0, rQ.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [wQ("texturePackLoad:details"), " ", FQ.reason]
        }), SQ.featureFlags.useDiscord && (0, rQ.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, rQ.jsx)("a", {
            href: IQ,
            target: "_blank",
            rel: "noreferrer",
            children: wQ("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var NQ = wQ(1342),
      TQ = wQ(745),
      KQ = wQ(1243),
      zQ = wQ(1038),
      lQ = wQ(1489),
      jQ = wQ(3162),
      aQ = wQ(3037),
      XQ = wQ(1365),
      fQ = wQ(1348),
      VQ = wQ(4832),
      hQ = wQ(8672),
      JQ = wQ(2879);

    function EQ(QQ) {
      let {
        onApply: FQ,
        onSkip: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, HQ.y)();
      return (0, DQ.useEffect)((() => {
        JQ.i.skipPlayWait()
      }), []), (0, rQ.jsx)(XQ.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, rQ.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [LQ("customTexturePack:downloadPrompt"), (0, rQ.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: LQ("customTexturePack:authorWarning")
          }), (0, rQ.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: LQ("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: FQ
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: wQ
        }
      })
    }
    async function nQ() {
      let QQ = !1;
      const FQ = uQ.NotificationProvider.showCustomPopup({
        body: FQ => (0, rQ.jsx)(EQ, {
          onApply: () => {
            QQ = !0, FQ()
          },
          onSkip: FQ
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await FQ.getResult(), QQ
    }
    let gQ = {
      wanted: !1
    };
    let PQ = null;

    function ZQ(QQ) {
      QQ.setGamePackConfirm(nQ), PQ = QQ
    }
    var yQ = wQ(3363);

    function BQ(QQ) {
      let {
        schematicId: FQ,
        texturePackKey: wQ,
        onClose: LQ
      } = QQ;
      const [qQ, oQ] = (0, DQ.useState)("prompt"), [kQ, vQ] = (0, DQ.useState)(null), mQ = (0, yQ.c)();

      function uQ() {
        LQ()
      }
      return "prompt" === qQ ? (0, rQ.jsx)(EQ, {
        onApply: async function() {
          oQ("downloading");
          try {
            const QQ = await async function(QQ, FQ) {
              const wQ = await (0, VQ.d)(FQ);
              if (wQ) return {
                pack: wQ,
                key: FQ
              };
              const LQ = await GQ.userContextManager.getCurrentUserContext(),
                qQ = (await lQ.b.getGame(LQ, QQ, !0)).customTexturePackKey;
              if (!qQ) return null;
              const oQ = await (0, VQ.d)(qQ);
              if (!oQ) throw new Error("The texture pack could not be found");
              return {
                pack: oQ,
                key: qQ
              }
            }(FQ, wQ);
            if (!mQ.current) return;
            if (!QQ) return void LQ();
            if ((0, jQ.n)(QQ.pack)) return void oQ("refused");
            aQ.b.setFromJson(QQ.pack, "customGame"), await aQ.b.saveTemporaryTexturePack(QQ.key), mQ.current && (0, CQ.reloadBloxd)()
          } catch (QQ) {
            vQ(QQ instanceof Error ? QQ.message : String(QQ)), oQ("error")
          }
        },
        onSkip: uQ
      }) : "downloading" === qQ ? (0, rQ.jsx)(XQ.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, rQ.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, rQ.jsx)(fQ.c, {
            showFace: !0
          })
        })
      }) : "error" === qQ ? (0, rQ.jsx)(XQ.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: kQ,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: uQ
        }
      }) : "refused" === qQ ? (0, rQ.jsx)(XQ.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: uQ
        }
      }) : null
    }
    var dQ = wQ(8681),
      QF = wQ(4187),
      FF = wQ(1759),
      wF = wQ(2860),
      LF = wQ(3305),
      qF = wQ(4524),
      oF = wQ(1314),
      DF = wQ(634),
      kF = wQ(714);

    function vF() {
      const QQ = qQ.c.get("clientEscMenuOptions");
      vQ.gameBridge.send("setLookSensitivity", qQ.c.get("isTouchScreen") ? (0, kF.p)(QQ) : QQ.mouseSensitivity)
    }
    async function mF(QQ, FQ, wQ) {
      const LQ = (0, qF.L)(FQ);
      async function DQ(QQ, FQ, wQ, LQ) {
        var DQ;
        if (LQ.aborted) return null;
        null === qQ.c.get("gameEntrySource") && (0, qQ.k)("directPlayUrl"), DF.s && (0, hQ.b)().catch((() => {})), qQ.c.set({
          gameState: "findingLobby"
        }), pQ.l.GA("loadingScreenState", "loadingPage:findingLobby");
        const kQ = await GQ.userContextManager.getCurrentUserContext();
        vQ.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: FQ,
          discordContext: QQ instanceof KQ.h ? QQ.getSerialisableParams() : null
        }), (0, FF.h)();
        const mQ = await async function(QQ, FQ, wQ, LQ, qQ) {
          try {
            await oQ.reqLibsLoadedPromise
          } catch (DQ) {
            return cQ.d.errorWithCode(DQ.toString(), bQ.o.LOAD_REQUIRED_LIBS, {
              error: DQ,
              severity: "medium"
            })
          }
          return pQ.l.GA("matchmakeAndPlayStepCompleted", {
            step: bQ.o.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, oQ.matchmakeAndPlayMaybeUnloaded)(QQ, FQ, wQ, LQ, qQ)
        }(QQ, FQ, wQ, kQ, LQ), uQ = mQ.isError() ? mQ.asError() : null;
        if (uQ && !uQ.debugResult.wF) {
          console.log("Failed to join lobby:", uQ.message);
          const QQ = "timedOut" === uQ.debugResult.gameServerUnreachable;
          (0, wF.f)("matchmake_failed", uQ.message, QQ ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : bQ.o[uQ.code])
        }
        if (LQ.aborted) return vQ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== uQ && void 0 !== uQ && uQ.debugResult.wF) return console.log("Join cancelled:", uQ.message), null;
        if (uQ) return mQ;
        const {
          gameNameWithVariation: HQ,
          lobbyName: xQ,
          addLobbyToRecentlyPlayed: AQ
        } = mQ.getValue();
        let tQ;
        vF(), (0, oF.B)().setGameViewShown(!0);
        const eQ = null === (DQ = TQ.e[HQ]) || void 0 === DQ ? void 0 : DQ.recentlyPlayedAs;
        return tQ = (0, zQ.f)(HQ) ? {
          type: "custom",
          name: "",
          schematicId: (0, zQ.l)(HQ),
          recentLobbies: []
        } : "classic" !== HQ || (0, YQ.S)(xQ) ? eQ ? {
          type: "bloxd",
          gameNameWithVariation: eQ,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: HQ,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, lQ.b.addRecentlyPlayedGame(kQ, tQ, AQ && !eQ ? xQ : void 0).then((QQ => {
          kQ.setRecentlyPlayedGames(QQ)
        })).catch((QQ => {
          console.error("Failed to record recently played game", QQ)
        })), (0, iQ.S)(), mQ
      }
      return LQ && (0, qQ.k)("updateRejoin"), (0, LF.j)((async qQ => {
        try {
          let kQ = QQ,
            vQ = await DQ(kQ, FQ, wQ, qQ);
          for (let QQ = 0; LQ && QQ < qF.p; QQ++) {
            var oQ;
            if (null === (oQ = vQ) || void 0 === oQ || !oQ.isError() || vQ.asError().code !== bQ.o.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, qF.N)((0, qF.z)(QQ), qQ)) return vQ;
            kQ = (0, qF.D)(kQ, QQ + 1, "string" === typeof kQ && (0, YQ.S)(kQ)), vQ = await DQ(kQ, FQ, wQ, qQ)
          }
          return vQ
        } catch (kQ) {
          if ((0, wF.f)("matchmake_failed", kQ, "unexpected"), vQ.gameBridge.send("leaveGame", {
              reloadPath: qQ.aborted ? null : "/"
            }), qQ.aborted) return null;
          throw kQ
        }
      }), (async QQ => {
        var wQ;
        if (LQ) return;
        const qQ = (0, iQ.K)();
        null !== qQ && (await qQ, QQ.aborted) || (null !== (wQ = TQ.e[FQ]) && void 0 !== wQ && wQ.playAdBeforeMatchmaking ? (JQ.i.skipPlayWait(), await new Promise((QQ => {
          (0, iQ.fb)((() => {
            QQ(!0)
          }), "video_start")
        }))) : (0, iQ.fb)((() => {}), "video_start"))
      }))
    }

    function uF() {
      const {
        t: QQ
      } = (0, HQ.y)(), FQ = (0, mQ.useNavigatePreserveSearch)(), wQ = (0, LQ.r)(), AQ = (0, LQ.y)(), eQ = (0, DQ.useRef)({
        t: QQ,
        navigate: FQ
      });
      eQ.current = {
        t: QQ,
        navigate: FQ
      };
      const pQ = (0, DQ.useRef)("");
      pQ.current = wQ.pathname + wQ.search;
      const {
        gameState: cQ,
        clientEscMenuOptions: IQ
      } = (0, qQ.l)(["gameState", "clientEscMenuOptions"]), TQ = (0, DQ.useRef)(null), KQ = (0, DQ.useRef)(null);
      var jQ;
      (0, LF.k)(), (0, LF.m)(), jQ = DF.s, (0, DQ.useEffect)((() => {
        if (!jQ) return;
        let QQ = !0;
        return (0, hQ.b)().then((FQ => {
          QQ && ZQ(FQ)
        })).catch((() => {})), () => {
          var FQ;
          QQ = !1, gQ.wanted = !1, null === (FQ = PQ) || void 0 === FQ || FQ.setGamePackConfirm(null), PQ = null
        }
      }), [jQ]), (0, DQ.useEffect)((() => {
        var QQ;
        (0, oQ.needGameClientNow)();
        const {
          t: FQ,
          navigate: LQ
        } = eQ.current, DQ = (0, dQ.d)(AQ, wQ.search);
        if (AQ.lobbyName && !new URLSearchParams(wQ.search).has("lobby")) return void LQ((0, NQ.e)(DQ.gameNameWithVariation, DQ.lobbyName), {
          replace: !0
        });
        let kQ = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === wQ.pathname) {
          const QQ = qQ.c.get("discordContext");
          if (!QQ) return void LQ("/");
          kQ = MQ.d.setupDiscordLobby(QQ, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: QQ
          }))).catch((FQ => (console.error("Failed to setup discord lobby", FQ), {
            shouldMatchmake: !1,
            discordContext: QQ
          })))
        } else if (!DQ.gameNameWithVariation || !(0, YQ.O)(DQ.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${DQ.gameNameWithVariation}`), void LQ(-1);
        if (DQ.gameNameWithVariation === TQ.current && DQ.lobbyName === KQ.current) return;
        if (vQ.gameBridge.latest("connectedGame").replay) return void(0, LF.h)(null);
        (0, iQ.M)(), qQ.c.set({
          gameState: "loadingScreen"
        });
        const mQ = function() {
          gQ.wanted = !1;
          const QQ = {
            wanted: !0
          };
          return gQ = QQ, () => QQ.wanted
        }();
        if ("releaseCountdown" === (null === (QQ = (0, xQ.d)(DQ.gameNameWithVariation)) || void 0 === QQ ? void 0 : QQ.type)) return console.error(`Game hasn't been released yet: ${DQ.gameNameWithVariation}`), void LQ(-1);
        const HQ = DQ.gameNameWithVariation;
        if (HQ && (DF.s || (0, zQ.f)(HQ))) {
          const QQ = DF.s ? Promise.all([(0, hQ.b)(), GQ.userContextManager.getCurrentUserContext()]).then((QQ => {
            let [FQ, wQ] = QQ;
            if (mQ()) return ZQ(FQ), FQ.packForGame(HQ, wQ, mQ)
          })) : async function(QQ) {
            await aQ.b.indexedDbValuesAreLoaded();
            const FQ = await GQ.userContextManager.getCurrentUserContext(),
              wQ = (0, zQ.l)(QQ);
            let LQ;
            try {
              LQ = await lQ.b.getGame(FQ, wQ, !0)
            } catch (DQ) {
              return void console.error("Failed to get game", DQ)
            }
            const qQ = LQ.customTexturePackKey;
            if (!qQ) return void(aQ.b.isUsingTemporaryTexturePack() && ((0, CQ.reloadBloxd)(), await new Promise((() => {}))));
            if (aQ.b.isUsingTemporaryTexturePack() && aQ.b.getTemporaryTexturePackSource() === qQ) return;
            const oQ = uQ.NotificationProvider.showCustomPopup({
              body: QQ => (0, rQ.jsx)(BQ, {
                schematicId: wQ,
                texturePackKey: qQ,
                onClose: QQ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await oQ.getResult()
          }(HQ), FQ = kQ;
          kQ = QQ.catch((QQ => {
            console.error("Failed to check for custom texture pack", QQ)
          })).then((() => FQ))
        }(0, LF.h)(null);
        let cQ = !1;
        const WQ = wQ.pathname + wQ.search,
          IQ = () => !cQ && pQ.current === WQ;
        return kQ.then((QQ => {
          let {
            shouldMatchmake: wQ,
            discordContext: oQ
          } = QQ;
          IQ() && (wQ ? mF(null !== oQ && void 0 !== oQ ? oQ : DQ.lobbyName, oQ ? "classic" : DQ.gameNameWithVariation, DQ.directJoinVmUrl).then((QQ => {
            var wQ;
            if (null !== QQ && IQ())
              if (QQ.isError()) {
                var oQ;
                const kQ = QQ.asError(),
                  mQ = null !== (oQ = kQ.debugResult.severity) && void 0 !== oQ ? oQ : "high";
                if (kQ.code === bQ.o.SHADER_PACK) return void(0, QF.b)(kQ.message, LQ);
                const HQ = qQ.c.get("gameEntrySource"),
                  YQ = kQ.code === bQ.o.INITIALISE_WEBGL ? (0, OQ.d)() : null,
                  {
                    error: xQ
                  } = kQ.debugResult;
                let AQ;
                if (tQ(FQ, kQ)) AQ = Promise.resolve(!1);
                else if (null !== YQ) AQ = (0, OQ.j)(YQ);
                else if (xQ instanceof sQ.p) wQ = xQ, AQ = uQ.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, rQ.jsx)(UQ, {
                    failure: wQ
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((QQ => !0 === QQ));
                else {
                  let QQ;
                  switch (mQ) {
                    case "low":
                      QQ = "face-diagonal-mouth";
                      break;
                    case "medium":
                      QQ = "face-worried";
                      break;
                    case "high":
                      QQ = "face-dizzy"
                  }
                  AQ = uQ.NotificationProvider.showPromptPopup({
                    icon: QQ,
                    title: bQ.E[kQ.code],
                    subtitle: (0, rQ.jsxs)(rQ.Fragment, {
                      children: [kQ.debugResult.gameServerUnreachable ? FQ((0, SQ.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : kQ.message, kQ.debugResult.error instanceof Error && (0, rQ.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, rQ.jsx)(RQ.b, {
                          errorString: kQ.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: FQ("general:tryAgain"),
                    cancelText: FQ("general:cancel")
                  }).getResult().then((QQ => !0 === QQ))
                }
                AQ.then((QQ => {
                  if (QQ) {
                    (0, qQ.k)(HQ);
                    const QQ = (0, NQ.e)(DQ.gameNameWithVariation, DQ.lobbyName);
                    "low" === mQ ? LQ(QQ) : (0, CQ.reloadBloxd)(QQ)
                  }
                })), vQ.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), LQ(-1)
              } else {
                TQ.current = QQ.getValue().gameNameWithVariation, KQ.current = QQ.getValue().lobbyName;
                const FQ = (0, NQ.e)(TQ.current, QQ.getValue().lobbyName);
                LQ(FQ, {
                  replace: !0
                })
              }
          })).catch((QQ => {
            if (!IQ()) return;
            uQ.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, rQ.jsxs)(rQ.Fragment, {
                children: [FQ("homePage:pleaseCopyError"), (0, rQ.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, rQ.jsx)(RQ.b, {
                    errorString: QQ.stack
                  })
                })]
              }),
              confirmText: FQ("general:tryAgain"),
              cancelText: FQ("general:cancel")
            }).getResult().then((QQ => {
              !0 === QQ && (0, CQ.reloadBloxd)((0, NQ.e)(DQ.gameNameWithVariation, DQ.lobbyName))
            })), LQ(-1)
          })) : LQ(-1))
        })), () => {
          cQ = !0
        }
      }), [AQ, wQ.search, wQ.pathname]), (0, DQ.useEffect)((() => {
        IQ.disableFullscreen && (0, WQ.h)() ? (0, WQ.l)() : !IQ.disableFullscreen && (0, WQ.j)() && (0, WQ.r)()
      }), [cQ, IQ]), (0, DQ.useEffect)((() => {
        "inGame" === cQ && vF()
      }), [cQ, IQ]), (0, DQ.useEffect)((() => {
        "inGame" !== cQ && qQ.c.set({
          openInGameMenuName: null
        })
      }), [cQ]);
      const XQ = function(QQ) {
        const FQ = (0, qQ.g)(QQ),
          [wQ, LQ] = (0, DQ.useState)(0),
          [oQ, vQ] = (0, DQ.useState)(!1);
        (0, kQ.g)("gameJoined", (() => {
          (0, qQ.g)(qQ.c.get("gameState")) && (LQ((QQ => QQ + 1)), vQ(!0))
        })), (0, DQ.useEffect)((() => {
          FQ || vQ(!1)
        }), [FQ]);
        const mQ = "inGame" === QQ;
        return {
          mounted: mQ || FQ && oQ,
          shown: mQ,
          key: wQ
        }
      }(cQ);
      return (0, rQ.jsx)(rQ.Fragment, {
        children: XQ.mounted && (0, rQ.jsx)(oQ.InGameUi, {
          shown: XQ.shown
        }, XQ.key)
      })
    }
  },
  4832: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(1213);
    async function qQ(QQ) {
      const FQ = await fetch(`${LQ.clientSideServerUrls.s3Url}/${QQ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === FQ.status || 403 === FQ.status) return null;
      if (!FQ.ok) throw new Error(`Failed to download the texture pack (${FQ.status})`);
      return await FQ.json()
    }
  },
  8681: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(1342),
      qQ = wQ(1237),
      oQ = wQ(619);

    function DQ(QQ) {
      return QQ = function(QQ, FQ) {
        var wQ;
        const LQ = new URLSearchParams(FQ),
          qQ = LQ.get("lobby"),
          oQ = LQ.get("vm"),
          DQ = null !== (wQ = qQ) && void 0 !== wQ ? wQ : QQ.lobbyName,
          kQ = null !== oQ && void 0 !== oQ ? oQ : QQ.directJoinVmUrl;
        if (DQ === QQ.lobbyName && kQ === QQ.directJoinVmUrl) return QQ;
        return {
          ...QQ,
          lobbyName: DQ,
          directJoinVmUrl: kQ
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), QQ = function(QQ) {
        if ((0, oQ.F)(QQ.directJoinVmUrl)) return QQ;
        const FQ = (0, qQ.cb)(QQ.directJoinVmUrl);
        null === FQ && (QQ.directJoinVmUrl = void 0);
        return QQ
      }(QQ = function(QQ) {
        if ((0, oQ.F)(QQ.gameNameWithVariation)) return QQ;
        return QQ.gameNameWithVariation = (0, LQ.i)(QQ.gameNameWithVariation), QQ
      }(QQ))
    }
  },
  8677: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => qQ
    });
    let LQ = !1;

    function qQ() {
      LQ = !0
    }

    function oQ() {
      return LQ
    }
  },
  8672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      d: () => HQ
    });
    var LQ = wQ(3037),
      qQ = wQ(2206),
      oQ = wQ(3071),
      DQ = wQ(4488),
      kQ = wQ(3380),
      vQ = wQ(8677);
    let mQ = null;

    function uQ() {
      return DQ.e.cancelDownloadForJoin(), (0, kQ.b)(), (0, qQ.g)(), (0, vQ.i)(), (0, oQ.g)(), Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(84), wQ.e(261), wQ.e(200), wQ.e(218), wQ.e(239), wQ.e(213), wQ.e(46)]).then((() => wQ(40103))).catch((() => {})), Promise.all([wQ.e(75), wQ.e(133), wQ.e(88), wQ.e(56)]).then((() => wQ(40196))).then((QQ => {
        let {
          startJoinLoad: FQ
        } = QQ;
        FQ()
      }), (() => {})), mQ ??= Promise.all([wQ.e(72), wQ.e(75), wQ.e(130), wQ.e(74), wQ.e(133), wQ.e(263), wQ.e(187), wQ.e(88), wQ.e(87), wQ.e(86), wQ.e(213), wQ.e(61)]).then((() => wQ(40273))).then((QQ => (QQ.startWasmPlay(), QQ.followPageUiPack((QQ => {
        LQ.b.showGamePack(QQ)
      })), QQ)), (QQ => {
        throw mQ = null, QQ
      })), mQ
    }

    function HQ() {
      return Promise.all([wQ.e(72), wQ.e(75), wQ.e(130), wQ.e(74), wQ.e(133), wQ.e(263), wQ.e(187), wQ.e(88), wQ.e(87), wQ.e(86), wQ.e(213), wQ.e(61)]).then((() => wQ(40273))).then((QQ => {
        QQ.startWasmPreviews(), QQ.prefetchWasmPreviews()
      }))
    }
  },
  8667: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => DQ,
      l: () => kQ,
      m: () => mQ,
      q: () => vQ
    });
    var LQ = wQ(201),
      qQ = wQ(4475);

    function oQ(QQ) {
      return DQ(QQ) === LQ.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function DQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function kQ(QQ) {
      var FQ;
      return null !== (FQ = Object.keys(qQ.c).find((FQ => qQ.c[FQ] === QQ))) && void 0 !== FQ ? FQ : null
    }

    function vQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);