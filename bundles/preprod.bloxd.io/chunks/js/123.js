export const id = 123;
export const ids = [123, 176];
export const modules = {
  9579: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => NO
    });
    var YB = GB(1571),
      DB = GB(16),
      QB = GB(5082),
      oB = GB(56),
      jB = GB(1480);
    var yB = GB(2023),
      JB = GB(1560),
      MB = GB(1400),
      PB = GB(1175),
      zB = GB(9587),
      lB = GB(9592),
      pB = GB(5011),
      qB = GB(162),
      ZB = GB(1121),
      NB = GB(25),
      RB = GB(1246),
      WB = GB(1822),
      AB = GB(92),
      VB = GB(1338),
      SB = GB(1468),
      nB = GB(4943),
      UB = GB(4764),
      fB = GB(4720),
      kB = GB(3659),
      dB = GB(2549),
      KB = GB(1360),
      uB = GB(791),
      mB = GB(1225),
      IB = GB(1049),
      FB = GB(1217),
      iB = GB(3716),
      LB = GB(3573),
      gB = GB(1403),
      rB = GB(1375),
      XB = GB(5473),
      wB = GB(9608),
      EB = GB(3325),
      cB = GB(1282);

    function hB(BB) {
      let {
        onApply: OB,
        onSkip: GB
      } = BB;
      const {
        t: YB
      } = (0, PB.H)();
      return (0, oB.useEffect)((() => {
        EB.g.skipPlayWait()
      }), []), (0, cB.jsx)(gB.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, cB.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [YB("customTexturePack:downloadPrompt"), (0, cB.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: YB("customTexturePack:authorWarning")
          }), (0, cB.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: YB("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: OB
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: GB
        }
      })
    }
    async function aB() {
      let BB = !1;
      const OB = MB.NotificationProvider.showCustomPopup({
        body: OB => (0, cB.jsx)(hB, {
          onApply: () => {
            BB = !0, OB()
          },
          onSkip: OB
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await OB.getResult(), BB
    }
    let eB = {
      wanted: !1
    };
    let TB = null;

    function bB(BB) {
      BB.setGamePackConfirm(aB), TB = BB
    }
    var CB = GB(3928),
      HB = GB(1540),
      vB = GB(31),
      sB = GB(3670);

    function xB(BB) {
      let {
        schematicId: OB,
        texturePackKey: GB,
        onClose: YB
      } = BB;
      const [DB, QB] = (0, oB.useState)("prompt"), [jB, yB] = (0, oB.useState)(null), JB = (0, CB.c)();

      function MB() {
        YB()
      }
      return "prompt" === DB ? (0, cB.jsx)(hB, {
        onApply: async function() {
          QB("downloading");
          try {
            const BB = await async function(BB, OB) {
              const GB = await (0, XB.e)(OB);
              if (GB) return {
                pack: GB,
                key: OB
              };
              const YB = await ZB.userContextManager.getCurrentUserContext(),
                DB = (await HB.b.getGame(YB, BB, !0)).customTexturePackKey;
              if (!DB) return null;
              const QB = await (0, XB.e)(DB);
              if (!QB) throw new Error("The texture pack could not be found");
              return {
                pack: QB,
                key: DB
              }
            }(OB, GB);
            if (!JB.current) return;
            if (!BB) return void YB();
            if ((0, iB.m)(BB.pack)) return void QB("refused");
            const DB = LB.c.toJson(),
              oB = LB.c.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (LB.c.setFromJson(BB.pack, "customGame"), await LB.c.saveTemporaryTexturePack(BB.key), JB.current) return void(0, WB.reloadBloxd)();
            LB.c.setFromJson(DB, oB), await (0, sB.q)(vB.d)
          } catch (BB) {
            yB(BB instanceof Error ? BB.message : String(BB)), QB("error")
          }
        },
        onSkip: MB
      }) : "downloading" === DB ? (0, cB.jsx)(gB.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, cB.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, cB.jsx)(rB.b, {
            showFace: !0
          })
        })
      }) : "error" === DB ? (0, cB.jsx)(gB.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: jB,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: MB
        }
      }) : "refused" === DB ? (0, cB.jsx)(gB.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: MB
        }
      }) : null
    }
    var tB = GB(9622),
      BO = GB(4711),
      OO = GB(1871),
      GO = GB(1856),
      YO = GB(4714),
      DO = GB(2247),
      QO = GB(9629);
    var oO = GB(5150),
      jO = GB(1299),
      yO = GB(1813),
      JO = GB(662),
      MO = GB(756),
      PO = GB(1896);

    function zO() {
      const BB = DB.c.get("clientEscMenuOptions");
      yB.gameBridge.send("setLookSensitivity", DB.c.get("isTouchScreen") ? (0, MO.q)(BB) : BB.mouseSensitivity)
    }
    const lO = 45e3;

    function pO(BB) {
      const OB = BB.asError();
      if (OB.debugResult.rB || (0, yO.b)(OB.debugResult.error)) return;
      console.log("Failed to join lobby:", OB.message);
      const GB = "timedOut" === OB.debugResult.gameServerUnreachable;
      (0, GO.reportClientError)("matchmake_failed", OB.message, GB ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : qB.l[OB.code]);
      const {
        error: YB
      } = OB.debugResult;
      if (YB instanceof kB.p && "default" !== YB.packSource) {
        const BB = (0, YO.g)("js", "game" === YB.packSource ? "game" : "page", (0, YO.h)(YB));
        (0, GO.reportClientError)("texture_pack", YB, BB)
      }
    }

    function qO(BB) {
      if (null === BB || void 0 === BB || !BB.isError()) return !1;
      const OB = BB.asError();
      return OB.code === qB.l.REQUEST_TO_MATCHMAKING && !(0, yO.b)(OB.debugResult.error)
    }
    async function ZO(BB, OB, GB) {
      const YB = (0, oO.Q)(OB);
      async function oB(BB, OB, GB, YB) {
        var oB;
        if (YB.aborted) return null;
        null === DB.c.get("gameEntrySource") && (0, DB.m)("directPlayUrl"), JO.D && (0, wB.loadWasmPlay)().catch((() => {})), DB.c.set({
          gameState: "findingLobby"
        }), NB.o.tM("loadingScreenState", "loadingPage:findingLobby");
        const jB = await ZB.userContextManager.getCurrentUserContext();
        yB.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: OB,
          discordContext: BB instanceof mB.e ? BB.getSerialisableParams() : null
        }), (0, OO.e)(null !== (oB = EB.g.playInputAt()) && void 0 !== oB ? oB : performance.now());
        const JB = await async function(BB, OB, GB, YB, DB) {
          try {
            await (0, PO.h)(QB.reqLibsLoadedPromise, lO, "Required libraries timed out")
          } catch (oB) {
            const BB = oB instanceof PO.d ? `Required libraries still loading after ${lO/1e3} s: ${(0,QB.requiredLibsPending)().join(", ")}` : oB.toString();
            return RB.c.errorWithCode(BB, qB.l.LOAD_REQUIRED_LIBS, {
              error: oB,
              severity: "medium"
            })
          }
          return NB.o.tM("matchmakeAndPlayStepCompleted", {
            step: qB.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, QB.matchmakeAndPlayMaybeUnloaded)(BB, OB, GB, YB, DB)
        }(BB, OB, GB, jB, YB), MB = JB.isError() ? JB.asError() : null;
        if (YB.aborted) return MB && pO(JB), yB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== MB && void 0 !== MB && MB.debugResult.rB) return console.log("Join cancelled:", MB.message), null;
        if (MB) return JB;
        const {
          gameNameWithVariation: PB,
          lobbyName: zB
        } = JB.getValue();
        return zO(), (0, jO.D)().setGameViewShown(!0), jB.recordJoin(PB, zB), (0, VB.H)(), JB
      }
      return YB && (0, DB.m)("updateRejoin"), (0, DO.g)((async DB => {
        try {
          var QB;
          let jB = BB,
            yB = await oB(jB, OB, GB, DB);
          for (let BB = 0; YB && BB < oO.k && (qO(yB) && await (0, oO.S)((0, oO.w)(BB), DB)); BB++) jB = (0, oO.z)(jB, BB + 1, "string" === typeof jB && (0, FB.Q)(jB)), yB = await oB(jB, OB, GB, DB);
          return null !== (QB = yB) && void 0 !== QB && QB.isError() && pO(yB), yB
        } catch (jB) {
          if ((0, GO.reportClientError)("matchmake_failed", jB, "unexpected"), yB.gameBridge.send("leaveGame", {
              reloadPath: DB.aborted ? null : "/"
            }), DB.aborted) return null;
          throw jB
        }
      }), (async BB => {
        var GB;
        if (YB) return;
        const DB = (0, VB.x)();
        null !== DB && (await DB, BB.aborted) || (null !== (GB = uB.b[OB]) && void 0 !== GB && GB.playAdBeforeMatchmaking ? (EB.g.skipPlayWait(), await new Promise((BB => {
          (0, VB.X)((() => {
            BB(!0)
          }), "video_start")
        }))) : (0, VB.X)((() => {}), "video_start"))
      }))
    }

    function NO() {
      const {
        t: BB
      } = (0, PB.H)(), OB = (0, JB.useNavigatePreserveSearch)(), GB = (0, YB.r)(), mB = (0, YB.A)(), iB = (0, oB.useRef)({
        t: BB,
        navigate: OB
      });
      iB.current = {
        t: BB,
        navigate: OB
      };
      const gB = (0, oB.useRef)("");
      gB.current = GB.pathname + GB.search;
      const {
        gameState: rB,
        clientEscMenuOptions: XB
      } = (0, DB.o)(["gameState", "clientEscMenuOptions"]), EB = (0, oB.useRef)(null), hB = (0, oB.useRef)(!1);
      var aB;
      (0, oB.useEffect)((() => () => {
        NB.o.tM("leftPlayPage")
      }), []), (0, DO.k)(), (0, DO.o)(), aB = JO.D, (0, oB.useEffect)((() => {
        if (!aB) return;
        let BB = !0;
        return (0, wB.loadWasmPlay)().then((OB => {
          BB && bB(OB)
        })).catch((() => {})), () => {
          var OB;
          BB = !1, eB.wanted = !1, null === (OB = TB) || void 0 === OB || OB.setGamePackConfirm(null), TB = null
        }
      }), [aB]), (0, oB.useEffect)((() => {
        var BB, OB, YB;
        (0, QB.needGameClientNow)();
        const {
          t: oB,
          navigate: jB
        } = iB.current, PB = (0, tB.b)(mB, GB.search);
        if (mB.lobbyName && !new URLSearchParams(GB.search).has("lobby")) return void jB((0, KB.c)(PB.gameNameWithVariation, PB.lobbyName), {
          replace: !0
        });
        let SB = Promise.resolve({
          shouldMatchmake: !0
        });
        const rB = new AbortController;
        if ("/play/discord-custom-lobby" === GB.pathname) {
          const BB = DB.c.get("discordContext");
          if (!BB) return void jB("/");
          SB = pB.c.setupDiscordLobby(BB, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: BB
          }))).catch((OB => (console.error("Failed to setup discord lobby", OB), {
            shouldMatchmake: !1,
            discordContext: BB
          })))
        } else if (!PB.gameNameWithVariation || !(0, FB.O)(PB.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${PB.gameNameWithVariation}`), void jB(-1);
        const XB = EB.current;
        if (null !== XB && PB.gameNameWithVariation === XB.gameNameWithVariation && PB.lobbyName === XB.lobbyName) return;
        if (yB.gameBridge.latest("connectedGame").replay) return void(0, DO.e)(null);
        if ("releaseCountdown" === (null === (BB = (0, dB.d)(PB.gameNameWithVariation)) || void 0 === BB ? void 0 : BB.type)) return console.error(`Game hasn't been released yet: ${PB.gameNameWithVariation}`), void jB(-1);
        const aB = hB.current;
        hB.current = !1, (0, VB.z)(), DB.c.set({
          gameState: "loadingScreen"
        });
        const TB = function() {
            eB.wanted = !1;
            const BB = {
              wanted: !0
            };
            return eB = BB, () => BB.wanted
          }(),
          CB = PB.gameNameWithVariation;
        if (CB && (JO.D || (0, IB.l)(CB))) {
          const BB = JO.D ? Promise.all([(0, wB.loadWasmPlay)(), ZB.userContextManager.getCurrentUserContext()]).then((BB => {
            let [OB, GB] = BB;
            if (TB()) return bB(OB), OB.packForGame(CB, GB, TB)
          })) : async function(BB, OB) {
            await LB.c.indexedDbValuesAreLoaded();
            const GB = await ZB.userContextManager.getCurrentUserContext(),
              YB = (0, IB.r)(BB);
            let DB;
            try {
              DB = await HB.b.getGame(GB, YB, !0)
            } catch (yB) {
              return void console.error("Failed to get game", yB)
            }
            if (null !== OB && void 0 !== OB && OB.aborted) return;
            const QB = DB.customTexturePackKey;
            if (!QB) return void(LB.c.isUsingTemporaryTexturePack() && ((0, WB.reloadBloxd)(), await new Promise((() => {}))));
            if (LB.c.isUsingTemporaryTexturePack() && LB.c.getTemporaryTexturePackSource() === QB) return;
            const oB = MB.NotificationProvider.showCustomPopup({
                body: BB => (0, cB.jsx)(xB, {
                  schematicId: YB,
                  texturePackKey: QB,
                  onClose: BB
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              jB = () => {
                oB.tearDownNotification()
              };
            null === OB || void 0 === OB || OB.addEventListener("abort", jB, {
              once: !0
            }), await oB.getResult(), null === OB || void 0 === OB || OB.removeEventListener("abort", jB)
          }(CB, rB.signal), OB = SB;
          SB = BB.catch((BB => {
            console.error("Failed to check for custom texture pack", BB)
          })).then((() => OB))
        }
        const vB = {
          wasm: JO.D,
          game: PB.gameNameWithVariation,
          custom: void 0 !== CB && (0, IB.l)(CB),
          lobbyName: null !== (OB = PB.lobbyName) && void 0 !== OB ? OB : null,
          direct: null !== PB.directJoinVmUrl && void 0 !== PB.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === GB.pathname,
          adBeforeMatchmaking: void 0 !== CB && !0 === (null === (YB = uB.b[CB]) || void 0 === YB ? void 0 : YB.playAdBeforeMatchmaking),
          afterAnother: null !== EB.current || (0, DO.b)()
        };
        (0, QO.j)(null);
        const sB = !(OO = vB).wasm || void 0 === OO.game || OO.custom || OO.direct || OO.discord || OO.adBeforeMatchmaking || OO.afterAnother ? null : () => {
          ! function(BB, OB) {
            (0, QO.j)({
              key: (0, QO.f)(BB, OB),
              settled: Promise.all([QB.matchmakingLibrariesPromise, ZB.userContextManager.getCurrentUserContext()]).then((GB => {
                let [YB, DB] = GB;
                if (void 0 === YB.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return YB.matchmakeForAhead(BB, OB, DB)
              })).catch((BB => ({
                result: RB.c.errorWithCode(String(BB), qB.l.REQUEST_TO_MATCHMAKING, {
                  error: BB,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(vB.lobbyName, vB.game)
        };
        var OO;
        const GO = null !== EB.current;
        EB.current = null, (0, DO.e)(null);
        const YO = () => {
          aB ? (0, JB.navigateToHomePage)() : (hB.current = GO, jB(-1))
        };
        let oO = !1;
        const jO = GB.pathname + GB.search,
          MO = () => !oO && gB.current === jO;
        return (0, QO.e)(SB, sB, (BB => {
          let {
            shouldMatchmake: OB,
            discordContext: GB
          } = BB;
          MO() && (OB ? ZO(null !== GB && void 0 !== GB ? GB : PB.lobbyName, GB ? "classic" : PB.gameNameWithVariation, PB.directJoinVmUrl).then((BB => {
            if (null !== BB && MO())
              if (BB.isError()) {
                var OB, GB;
                const YB = BB.asError(),
                  QB = null !== (OB = YB.debugResult.severity) && void 0 !== OB ? OB : "high";
                if (NB.o.tM("joinFailed", {
                    step: null !== (GB = YB.code) && void 0 !== GB ? GB : null,
                    severity: QB
                  }), (0, yO.b)(YB.debugResult.error)) return void yO.f.reload();
                if (YB.code === qB.l.SHADER_PACK) return void(0, BO.e)(YB.message, jB);
                const JB = DB.c.get("gameEntrySource"),
                  pB = YB.code === qB.l.INITIALISE_WEBGL ? (0, UB.d)() : null,
                  {
                    error: ZB
                  } = YB.debugResult;
                let RB;
                if ((0, lB.e)(oB, YB)) RB = Promise.resolve(!1);
                else if (null !== pB) RB = (0, UB.k)(pB);
                else if (ZB instanceof kB.p) RB = (0, fB.g)(ZB);
                else {
                  let BB;
                  switch (QB) {
                    case "low":
                      BB = "face-diagonal-mouth";
                      break;
                    case "medium":
                      BB = "face-worried";
                      break;
                    case "high":
                      BB = "face-dizzy"
                  }
                  const OB = ZB instanceof PO.d;
                  let GB = (0, zB.c)(YB.message);
                  OB ? GB = oB("general:gameFilesStalled") : YB.debugResult.gameServerUnreachable && (GB = oB((0, AB.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  RB = MB.NotificationProvider.showPromptPopup({
                    icon: BB,
                    title: qB.E[YB.code],
                    subtitle: (0, cB.jsxs)(cB.Fragment, {
                      children: [GB, ZB instanceof Error && !OB && (0, cB.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, cB.jsx)(nB.c, {
                          errorString: ZB.stack
                        })
                      })]
                    }),
                    confirmText: oB("general:tryAgain"),
                    cancelText: oB("general:cancel")
                  }).getResult().then((BB => !0 === BB))
                }
                RB.then((BB => {
                  if (BB) {
                    (0, DB.m)(JB);
                    const BB = (0, KB.c)(PB.gameNameWithVariation, PB.lobbyName);
                    "low" === QB ? jB(BB) : (0, WB.reloadBloxd)(BB)
                  }
                })), yB.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), YO()
              } else {
                const {
                  gameNameWithVariation: OB,
                  lobbyName: GB
                } = BB.getValue();
                EB.current = {
                  gameNameWithVariation: OB,
                  lobbyName: GB
                };
                const YB = (0, KB.c)(OB, GB);
                jB(YB, {
                  replace: !0
                })
              }
          })).catch((BB => {
            if (!MO()) return;
            NB.o.tM("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            MB.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, cB.jsxs)(cB.Fragment, {
                children: [oB("homePage:pleaseCopyError"), (0, cB.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, cB.jsx)(nB.c, {
                    errorString: BB.stack
                  })
                })]
              }),
              confirmText: oB("general:tryAgain"),
              cancelText: oB("general:cancel")
            }).getResult().then((BB => {
              !0 === BB && (0, WB.reloadBloxd)((0, KB.c)(PB.gameNameWithVariation, PB.lobbyName))
            })), YO()
          })) : jB(-1))
        }), MO), () => {
          oO = !0, rB.abort()
        }
      }), [mB, GB.search, GB.pathname]), (0, oB.useEffect)((() => {
        XB.disableFullscreen && (0, SB.d)() ? (0, SB.i)() : !XB.disableFullscreen && (0, SB.h)() && (0, SB.s)({
          automatic: !0
        })
      }), [rB, XB]), (0, oB.useEffect)((() => {
        "inGame" === rB && zO()
      }), [rB, XB]), (0, oB.useEffect)((() => {
        "inGame" !== rB && DB.c.set({
          openInGameMenuName: null
        })
      }), [rB]);
      const CB = function(BB) {
        const OB = (0, DB.k)(BB),
          [GB, YB] = (0, oB.useState)(0),
          [QB, yB] = (0, oB.useState)(!1);
        (0, jB.f)("gameJoined", (() => {
          (0, DB.k)(DB.c.get("gameState")) && (YB((BB => BB + 1)), yB(!0))
        })), (0, oB.useEffect)((() => {
          OB || yB(!1)
        }), [OB]);
        const JB = "inGame" === BB;
        return {
          mounted: JB || OB && QB,
          shown: JB,
          key: GB
        }
      }(rB);
      return (0, cB.jsx)(cB.Fragment, {
        children: CB.mounted && (0, cB.jsx)(QB.InGameUi, {
          shown: CB.shown
        }, CB.key)
      })
    }
  },
  5473: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(1186);
    async function DB(BB) {
      const OB = await fetch(`${YB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === OB.status || 403 === OB.status) return null;
      if (!OB.ok) throw new Error(`Failed to download the texture pack (${OB.status})`);
      return await OB.json()
    }
  },
  9592: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      g: () => NB
    });
    var YB = GB(162),
      DB = GB(192),
      QB = GB(1049),
      oB = GB(1061),
      jB = GB(1217),
      yB = GB(2023),
      JB = GB(2549),
      MB = GB(1540),
      PB = GB(1400),
      zB = GB(1121),
      lB = GB(9599),
      pB = GB(1560),
      qB = GB(1586);

    function ZB(BB, OB) {
      const GB = !0 === OB.debugResult.gameRefused,
        QB = GB || OB.code === YB.l.REQUEST_TO_MATCHMAKING ? (0, lB.h)(OB.message) : null;
      if (null !== QB) return VB(BB, BB((0, lB.m)(QB)), BB(lB.k[QB])), !0;
      if (GB) return async function(BB) {
        const {
          gameNameWithVariation: OB,
          lobbyName: GB,
          shownLobbyName: YB
        } = yB.gameBridge.latest("connectedGame"), DB = "classic" === OB && (0, jB.L)(GB) ? YB : await (0, JB.c)(BB, OB, GB);
        return "" !== DB ? BB("general:cantJoinGame", {
          game: DB
        }) : BB("general:cantJoinThisGame")
      }(BB).then((GB => {
        VB(BB, GB, OB.message)
      })), !0;
      const {
        joinFailure: oB
      } = OB.debugResult, MB = "refused" === (null === oB || void 0 === oB ? void 0 : oB.at) ? oB.code : null;
      return MB === DB.c.schematicNotPublished.code ? (async function(BB, OB) {
        const GB = RB(),
          YB = await AB(GB);
        if (null === YB || YB.gamePublished) return void VB(BB, BB("general:cantJoinThisGame"), OB);
        await WB(BB, "rocket-launch", BB("studio:gameNotPublishedTitle", {
          game: YB.name
        }), BB("studio:publishInStudio"), GB)
      }(BB, OB.message), !0) : (MB === DB.c.schematicBanned.code || MB === DB.c.customGameTakenDown.code) && (AB(RB()).then((OB => {
        NB(BB, OB)
      })), !0)
    }

    function NB(BB, OB) {
      !0 !== (null === OB || void 0 === OB ? void 0 : OB.takenDown) ? VB(BB, BB("general:cantJoinThisGame"), DB.c.customGameTakenDown.text) : WB(BB, "lock", BB("studio:gameTakenDownTitle", {
        game: OB.name
      }), BB("studio:viewInStudio"), OB.schematicId)
    }

    function RB() {
      return (0, QB.r)(yB.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function WB(BB, OB, GB, YB, DB) {
      !0 === await PB.NotificationProvider.showPromptPopup({
        icon: OB,
        title: GB,
        confirmText: YB,
        cancelText: BB("general:cancel")
      }).getResult() && (0, pB.navigatePreserveSearch)((0, qB.w)((0, oB.e)(DB), "manage"))
    }
    async function AB(BB) {
      try {
        return await MB.b.getGame(await zB.userContextManager.getCurrentUserContext(), BB, !0)
      } catch (OB) {
        return (0, MB.f)(OB) || console.error(`Failed to get game ${BB}`, OB), null
      }
    }

    function VB(BB, OB, GB) {
      PB.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: OB,
        subtitle: GB,
        confirmText: BB("general:ok"),
        cancelText: ""
      })
    }
  },
  9622: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(1360),
      DB = GB(1217),
      QB = GB(641);

    function oB(BB) {
      return BB = function(BB, OB) {
        var GB;
        const YB = new URLSearchParams(OB),
          DB = YB.get("lobby"),
          QB = YB.get("vm"),
          oB = null !== (GB = DB) && void 0 !== GB ? GB : BB.lobbyName,
          jB = null !== QB && void 0 !== QB ? QB : BB.directJoinVmUrl;
        if (oB === BB.lobbyName && jB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: oB,
          directJoinVmUrl: jB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, QB.Q)(BB.directJoinVmUrl)) return BB;
        const OB = (0, DB.fb)(BB.directJoinVmUrl);
        null === OB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, QB.Q)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, YB.m)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  9614: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = !1;

    function DB() {
      YB = !0
    }

    function QB() {
      return YB
    }
  },
  9629: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      f: () => DB,
      j: () => QB,
      l: () => oB
    });
    let YB = null;

    function DB(BB, OB) {
      return `${OB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function QB(BB) {
      YB = BB
    }

    function oB(BB) {
      const OB = YB;
      return YB = null, null !== OB && OB.key === BB ? OB.settled : null
    }

    function jB(BB, OB, GB, YB) {
      let DB = !1;
      null !== OB && setTimeout((() => {
        YB() && !DB && OB()
      }), 0), BB.then((BB => {
        DB = !0, GB(BB)
      }))
    }
  },
  9608: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadWasmPlay: () => zB,
      loadWasmPlayAhead: () => lB,
      loadWasmPreviews: () => pB
    });
    var YB = GB(3573),
      DB = GB(2457),
      QB = GB(2250),
      oB = GB(5065),
      jB = GB(3944),
      yB = GB(9614);
    let JB = null;

    function MB() {
      return Promise.all([GB.e(86), GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(216), GB.e(243), GB.e(155), GB.e(101), GB.e(244), GB.e(75)]).then((() => GB(41683)))
    }

    function PB() {
      Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(103), GB.e(100), GB.e(300), GB.e(207), GB.e(250), GB.e(274), GB.e(244), GB.e(54)]).then((() => GB(42017))).catch((() => {}))
    }

    function zB() {
      return oB.b.cancelDownloadForJoin(), (0, jB.d)(), (0, DB.h)(), (0, yB.d)(), (0, QB.j)(), PB(), Promise.all([GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(155), GB.e(70)]).then((() => GB(42053))).then((BB => {
        let {
          startJoinLoad: OB
        } = BB;
        OB()
      }), (() => {})), JB ??= MB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        YB.c.showGamePack(BB)
      })), BB)), (BB => {
        throw JB = null, BB
      })), JB
    }

    function lB() {
      return PB(), GB.e(124).then((() => GB(42056))).catch((() => {})), MB().then((() => {}))
    }

    function pB() {
      return MB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  9599: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => oB,
      h: () => jB,
      k: () => JB,
      m: () => yB
    });
    var YB = GB(192),
      DB = GB(5047);

    function QB(BB) {
      return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function oB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function jB(BB) {
      var OB;
      return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
    }

    function yB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const JB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  9587: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      c: () => yB
    });
    var YB = GB(353);

    function DB(BB) {
      if (!BB.startsWith("{")) return BB;
      let OB;
      try {
        OB = JSON.parse(BB)
      } catch {
        return BB
      }
      return function(BB) {
        if (null === (0, YB.nf)(BB)) return !1;
        const {
          params: OB
        } = BB;
        return void 0 === OB || "object" === typeof OB && null !== OB && Object.values(OB).every((BB => "string" === typeof BB))
      }(OB) ? OB : BB
    }
    var QB = GB(1175),
      oB = GB(1253);

    function jB(BB) {
      return (0, QB.C)(oB.e.get().getCurrentLanguageCode(), BB.translationKey, BB.params)
    }

    function yB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB(OB)
    }

    function JB(BB) {
      const OB = DB(BB);
      return "string" === typeof OB ? OB : jB({
        translationKey: "moderation:kicked",
        params: {
          reason: jB(OB)
        }
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);