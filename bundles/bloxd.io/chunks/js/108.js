export const id = 108;
export const ids = [108];
export const modules = {
  8520: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => cR
    });
    var tU = gU(1481),
      pU = gU(21),
      EU = gU(4318),
      PU = gU(56),
      TU = gU(1410);
    var qU = gU(1800),
      KU = gU(1475),
      cU = gU(1333),
      GU = gU(1181),
      jU = gU(165),
      uU = gU(1217),
      CU = gU(2190),
      hU = gU(8522);

    function QU(UU, RU) {
      const gU = !0 === RU.debugResult.gameRefused,
        tU = gU || RU.code === jU.l.REQUEST_TO_MATCHMAKING ? (0, hU.g)(RU.message) : null;
      return null !== tU ? (eU(UU, UU((0, hU.l)(tU)), UU(hU.k[tU])), !0) : !!gU && (async function(UU) {
        const {
          gameNameWithVariation: RU,
          lobbyName: gU,
          shownLobbyName: tU
        } = qU.gameBridge.latest("connectedGame"), pU = "classic" === RU && (0, uU.I)(gU) ? tU : await (0, CU.d)(UU, RU, gU);
        return "" !== pU ? UU("general:cantJoinGame", {
          game: pU
        }) : UU("general:cantJoinThisGame")
      }(UU).then((gU => {
        eU(UU, gU, RU.message)
      })), !0)
    }

    function eU(UU, RU, gU) {
      cU.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: RU,
        subtitle: gU,
        confirmText: UU("general:ok"),
        cancelText: ""
      })
    }
    var WU = gU(4248),
      fU = gU(1120),
      xU = gU(24),
      mU = gU(1240),
      IU = gU(1637),
      JU = gU(96),
      wU = gU(1305),
      nU = gU(1403),
      bU = gU(4190),
      oU = gU(4031),
      ZU = gU(2951),
      aU = gU(1090);
    const YU = "https://discord.gg/playbloxd";

    function BU(UU) {
      let {
        failure: RU
      } = UU;
      const {
        t: gU
      } = (0, GU.B)(), tU = "chosen" === RU.packSource, pU = JU.featureFlags.useDiscord ? tU ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : tU ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, aU.jsxs)(aU.Fragment, {
        children: [gU(pU, {
          code: RU.code
        }), "default" !== RU.packSource && RU.code === ZU.f.Error && (0, aU.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [gU("texturePackLoad:details"), " ", RU.reason]
        }), JU.featureFlags.useDiscord && (0, aU.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, aU.jsx)("a", {
            href: YU,
            target: "_blank",
            rel: "noreferrer",
            children: gU("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var VU = gU(1320),
      rU = gU(731),
      XU = gU(1223),
      vU = gU(994),
      dU = gU(1461),
      HU = gU(2977),
      SU = gU(2840),
      sU = gU(1339),
      yU = gU(1326),
      kU = gU(4657),
      FU = gU(8529),
      iU = gU(2668);

    function AU(UU) {
      let {
        onApply: RU,
        onSkip: gU
      } = UU;
      const {
        t: tU
      } = (0, GU.B)();
      return (0, PU.useEffect)((() => {
        iU.h.skipPlayWait()
      }), []), (0, aU.jsx)(sU.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, aU.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [tU("customTexturePack:downloadPrompt"), (0, aU.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: tU("customTexturePack:authorWarning")
          }), (0, aU.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: tU("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: RU
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: gU
        }
      })
    }
    async function zU() {
      let UU = !1;
      const RU = cU.NotificationProvider.showCustomPopup({
        body: RU => (0, aU.jsx)(AU, {
          onApply: () => {
            UU = !0, RU()
          },
          onSkip: RU
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await RU.getResult(), UU
    }
    let MU = {
      wanted: !1
    };
    let DU = null;

    function LU(UU) {
      UU.setGamePackConfirm(zU), DU = UU
    }
    var NU = gU(3182);

    function lU(UU) {
      let {
        schematicId: RU,
        texturePackKey: gU,
        onClose: tU
      } = UU;
      const [pU, EU] = (0, PU.useState)("prompt"), [TU, qU] = (0, PU.useState)(null), KU = (0, NU.b)();

      function cU() {
        tU()
      }
      return "prompt" === pU ? (0, aU.jsx)(AU, {
        onApply: async function() {
          EU("downloading");
          try {
            const UU = await async function(UU, RU) {
              const gU = await (0, kU.c)(RU);
              if (gU) return {
                pack: gU,
                key: RU
              };
              const tU = await fU.userContextManager.getCurrentUserContext(),
                pU = (await dU.c.getGame(tU, UU, !0)).customTexturePackKey;
              if (!pU) return null;
              const EU = await (0, kU.c)(pU);
              if (!EU) throw new Error("The texture pack could not be found");
              return {
                pack: EU,
                key: pU
              }
            }(RU, gU);
            if (!KU.current) return;
            if (!UU) return void tU();
            if ((0, HU.j)(UU.pack)) return void EU("refused");
            SU.e.setFromJson(UU.pack, "customGame"), await SU.e.saveTemporaryTexturePack(UU.key), KU.current && (0, IU.reloadBloxd)()
          } catch (UU) {
            qU(UU instanceof Error ? UU.message : String(UU)), EU("error")
          }
        },
        onSkip: cU
      }) : "downloading" === pU ? (0, aU.jsx)(sU.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, aU.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, aU.jsx)(yU.d, {
            showFace: !0
          })
        })
      }) : "error" === pU ? (0, aU.jsx)(sU.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: TU,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: cU
        }
      }) : "refused" === pU ? (0, aU.jsx)(sU.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: cU
        }
      }) : null
    }
    var OU = gU(8544),
      UR = gU(4001),
      RR = gU(1667),
      gR = gU(2927),
      tR = gU(3139),
      pR = gU(4336),
      ER = gU(1293),
      PR = gU(603),
      TR = gU(696);

    function qR() {
      const UU = pU.b.get("clientEscMenuOptions");
      qU.gameBridge.send("setLookSensitivity", pU.b.get("isTouchScreen") ? (0, TR.m)(UU) : UU.mouseSensitivity)
    }
    async function KR(UU, RU, gU) {
      const tU = (0, pR.H)(RU);
      async function PU(UU, RU, gU, tU) {
        var PU;
        if (tU.aborted) return null;
        null === pU.b.get("gameEntrySource") && (0, pU.h)("directPlayUrl"), PR.u && (0, FU.d)().catch((() => {})), pU.b.set({
          gameState: "findingLobby"
        }), xU.p.yh("loadingScreenState", "loadingPage:findingLobby");
        const TU = await fU.userContextManager.getCurrentUserContext();
        qU.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: RU,
          discordContext: UU instanceof XU.e ? UU.getSerialisableParams() : null
        }), (0, RR.g)();
        const KU = await async function(UU, RU, gU, tU, pU) {
          try {
            await EU.reqLibsLoadedPromise
          } catch (PU) {
            return mU.c.errorWithCode(PU.toString(), jU.l.LOAD_REQUIRED_LIBS, {
              error: PU,
              severity: "medium"
            })
          }
          return xU.p.yh("matchmakeAndPlayStepCompleted", {
            step: jU.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, EU.matchmakeAndPlayMaybeUnloaded)(UU, RU, gU, tU, pU)
        }(UU, RU, gU, TU, tU), cU = KU.isError() ? KU.asError() : null;
        if (cU && !cU.debugResult.cg) {
          console.log("Failed to join lobby:", cU.message);
          const UU = "timedOut" === cU.debugResult.gameServerUnreachable;
          (0, gR.e)("matchmake_failed", cU.message, UU ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : jU.l[cU.code])
        }
        if (tU.aborted) return qU.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== cU && void 0 !== cU && cU.debugResult.cg) return console.log("Join cancelled:", cU.message), null;
        if (cU) return KU;
        const {
          gameNameWithVariation: GU,
          lobbyName: CU,
          addLobbyToRecentlyPlayed: hU
        } = KU.getValue();
        let QU;
        qR(), (0, ER.F)().setGameViewShown(!0);
        const eU = null === (PU = rU.d[GU]) || void 0 === PU ? void 0 : PU.recentlyPlayedAs;
        return QU = (0, vU.m)(GU) ? {
          type: "custom",
          name: "",
          schematicId: (0, vU.q)(GU),
          recentLobbies: []
        } : "classic" !== GU || (0, uU.P)(CU) ? eU ? {
          type: "bloxd",
          gameNameWithVariation: eU,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: GU,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, dU.c.addRecentlyPlayedGame(TU, QU, hU && !eU ? CU : void 0).then((UU => {
          TU.setRecentlyPlayedGames(UU)
        })).catch((UU => {
          console.error("Failed to record recently played game", UU)
        })), (0, wU.O)(), KU
      }
      return tU && (0, pU.h)("updateRejoin"), (0, tR.i)((async pU => {
        try {
          let TU = UU,
            qU = await PU(TU, RU, gU, pU);
          for (let UU = 0; tU && UU < pR.k; UU++) {
            var EU;
            if (null === (EU = qU) || void 0 === EU || !EU.isError() || qU.asError().code !== jU.l.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, pR.J)((0, pR.t)(UU), pU)) return qU;
            TU = (0, pR.v)(TU, UU + 1, "string" === typeof TU && (0, uU.P)(TU)), qU = await PU(TU, RU, gU, pU)
          }
          return qU
        } catch (TU) {
          if ((0, gR.e)("matchmake_failed", TU, "unexpected"), qU.gameBridge.send("leaveGame", {
              reloadPath: pU.aborted ? null : "/"
            }), pU.aborted) return null;
          throw TU
        }
      }), (async UU => {
        var gU;
        if (tU) return;
        const pU = (0, wU.J)();
        null !== pU && (await pU, UU.aborted) || (null !== (gU = rU.d[RU]) && void 0 !== gU && gU.playAdBeforeMatchmaking ? (iU.h.skipPlayWait(), await new Promise((UU => {
          (0, wU.ib)((() => {
            UU(!0)
          }), "video_start")
        }))) : (0, wU.ib)((() => {}), "video_start"))
      }))
    }

    function cR() {
      const {
        t: UU
      } = (0, GU.B)(), RU = (0, KU.useNavigatePreserveSearch)(), gU = (0, tU.s)(), hU = (0, tU.y)(), eU = (0, PU.useRef)({
        t: UU,
        navigate: RU
      });
      eU.current = {
        t: UU,
        navigate: RU
      };
      const xU = (0, PU.useRef)("");
      xU.current = gU.pathname + gU.search;
      const {
        gameState: mU,
        clientEscMenuOptions: YU
      } = (0, pU.l)(["gameState", "clientEscMenuOptions"]), rU = (0, PU.useRef)(null), XU = (0, PU.useRef)(null);
      var HU;
      (0, tR.l)(), (0, tR.p)(), HU = PR.u, (0, PU.useEffect)((() => {
        if (!HU) return;
        let UU = !0;
        return (0, FU.d)().then((RU => {
          UU && LU(RU)
        })).catch((() => {})), () => {
          var RU;
          UU = !1, MU.wanted = !1, null === (RU = DU) || void 0 === RU || RU.setGamePackConfirm(null), DU = null
        }
      }), [HU]), (0, PU.useEffect)((() => {
        var UU;
        (0, EU.needGameClientNow)();
        const {
          t: RU,
          navigate: tU
        } = eU.current, PU = (0, OU.d)(hU, gU.search);
        if (hU.lobbyName && !new URLSearchParams(gU.search).has("lobby")) return void tU((0, VU.e)(PU.gameNameWithVariation, PU.lobbyName), {
          replace: !0
        });
        let TU = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === gU.pathname) {
          const UU = pU.b.get("discordContext");
          if (!UU) return void tU("/");
          TU = WU.e.setupDiscordLobby(UU, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: UU
          }))).catch((RU => (console.error("Failed to setup discord lobby", RU), {
            shouldMatchmake: !1,
            discordContext: UU
          })))
        } else if (!PU.gameNameWithVariation || !(0, uU.M)(PU.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${PU.gameNameWithVariation}`), void tU(-1);
        if (PU.gameNameWithVariation === rU.current && PU.lobbyName === XU.current) return;
        if (qU.gameBridge.latest("connectedGame").replay) return void(0, tR.f)(null);
        (0, wU.K)(), pU.b.set({
          gameState: "loadingScreen"
        });
        const KU = function() {
          MU.wanted = !1;
          const UU = {
            wanted: !0
          };
          return MU = UU, () => UU.wanted
        }();
        if ("releaseCountdown" === (null === (UU = (0, CU.f)(PU.gameNameWithVariation)) || void 0 === UU ? void 0 : UU.type)) return console.error(`Game hasn't been released yet: ${PU.gameNameWithVariation}`), void tU(-1);
        const GU = PU.gameNameWithVariation;
        if (GU && (PR.u || (0, vU.m)(GU))) {
          const UU = PR.u ? Promise.all([(0, FU.d)(), fU.userContextManager.getCurrentUserContext()]).then((UU => {
            let [RU, gU] = UU;
            if (KU()) return LU(RU), RU.packForGame(GU, gU, KU)
          })) : async function(UU) {
            await SU.e.indexedDbValuesAreLoaded();
            const RU = await fU.userContextManager.getCurrentUserContext(),
              gU = (0, vU.q)(UU);
            let tU;
            try {
              tU = await dU.c.getGame(RU, gU, !0)
            } catch (PU) {
              return void console.error("Failed to get game", PU)
            }
            const pU = tU.customTexturePackKey;
            if (!pU) return void(SU.e.isUsingTemporaryTexturePack() && ((0, IU.reloadBloxd)(), await new Promise((() => {}))));
            if (SU.e.isUsingTemporaryTexturePack() && SU.e.getTemporaryTexturePackSource() === pU) return;
            const EU = cU.NotificationProvider.showCustomPopup({
              body: UU => (0, aU.jsx)(lU, {
                schematicId: gU,
                texturePackKey: pU,
                onClose: UU
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await EU.getResult()
          }(GU), RU = TU;
          TU = UU.catch((UU => {
            console.error("Failed to check for custom texture pack", UU)
          })).then((() => RU))
        }(0, tR.f)(null);
        let mU = !1;
        const nU = gU.pathname + gU.search,
          YU = () => !mU && xU.current === nU;
        return TU.then((UU => {
          let {
            shouldMatchmake: gU,
            discordContext: EU
          } = UU;
          YU() && (gU ? KR(null !== EU && void 0 !== EU ? EU : PU.lobbyName, EU ? "classic" : PU.gameNameWithVariation, PU.directJoinVmUrl).then((UU => {
            var gU;
            if (null !== UU && YU())
              if (UU.isError()) {
                var EU;
                const TU = UU.asError(),
                  KU = null !== (EU = TU.debugResult.severity) && void 0 !== EU ? EU : "high";
                if (TU.code === jU.l.SHADER_PACK) return void(0, UR.b)(TU.message, tU);
                const GU = pU.b.get("gameEntrySource"),
                  uU = TU.code === jU.l.INITIALISE_WEBGL ? (0, oU.e)() : null,
                  {
                    error: CU
                  } = TU.debugResult;
                let hU;
                if (QU(RU, TU)) hU = Promise.resolve(!1);
                else if (null !== uU) hU = (0, oU.i)(uU);
                else if (CU instanceof ZU.h) gU = CU, hU = cU.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, aU.jsx)(BU, {
                    failure: gU
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((UU => !0 === UU));
                else {
                  let UU;
                  switch (KU) {
                    case "low":
                      UU = "face-diagonal-mouth";
                      break;
                    case "medium":
                      UU = "face-worried";
                      break;
                    case "high":
                      UU = "face-dizzy"
                  }
                  hU = cU.NotificationProvider.showPromptPopup({
                    icon: UU,
                    title: jU.y[TU.code],
                    subtitle: (0, aU.jsxs)(aU.Fragment, {
                      children: [TU.debugResult.gameServerUnreachable ? RU((0, JU.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : TU.message, TU.debugResult.error instanceof Error && (0, aU.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, aU.jsx)(bU.d, {
                          errorString: TU.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: RU("general:tryAgain"),
                    cancelText: RU("general:cancel")
                  }).getResult().then((UU => !0 === UU))
                }
                hU.then((UU => {
                  if (UU) {
                    (0, pU.h)(GU);
                    const UU = (0, VU.e)(PU.gameNameWithVariation, PU.lobbyName);
                    "low" === KU ? tU(UU) : (0, IU.reloadBloxd)(UU)
                  }
                })), qU.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), tU(-1)
              } else {
                rU.current = UU.getValue().gameNameWithVariation, XU.current = UU.getValue().lobbyName;
                const RU = (0, VU.e)(rU.current, UU.getValue().lobbyName);
                tU(RU, {
                  replace: !0
                })
              }
          })).catch((UU => {
            if (!YU()) return;
            cU.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, aU.jsxs)(aU.Fragment, {
                children: [RU("homePage:pleaseCopyError"), (0, aU.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, aU.jsx)(bU.d, {
                    errorString: UU.stack
                  })
                })]
              }),
              confirmText: RU("general:tryAgain"),
              cancelText: RU("general:cancel")
            }).getResult().then((UU => {
              !0 === UU && (0, IU.reloadBloxd)((0, VU.e)(PU.gameNameWithVariation, PU.lobbyName))
            })), tU(-1)
          })) : tU(-1))
        })), () => {
          mU = !0
        }
      }), [hU, gU.search, gU.pathname]), (0, PU.useEffect)((() => {
        YU.disableFullscreen && (0, nU.b)() ? (0, nU.i)() : !YU.disableFullscreen && (0, nU.f)() && (0, nU.s)()
      }), [mU, YU]), (0, PU.useEffect)((() => {
        "inGame" === mU && qR()
      }), [mU, YU]), (0, PU.useEffect)((() => {
        "inGame" !== mU && pU.b.set({
          openInGameMenuName: null
        })
      }), [mU]);
      const sU = function(UU) {
        const RU = (0, pU.f)(UU),
          [gU, tU] = (0, PU.useState)(0),
          [EU, qU] = (0, PU.useState)(!1);
        (0, TU.e)("gameJoined", (() => {
          (0, pU.f)(pU.b.get("gameState")) && (tU((UU => UU + 1)), qU(!0))
        })), (0, PU.useEffect)((() => {
          RU || qU(!1)
        }), [RU]);
        const KU = "inGame" === UU;
        return {
          mounted: KU || RU && EU,
          shown: KU,
          key: gU
        }
      }(mU);
      return (0, aU.jsx)(aU.Fragment, {
        children: sU.mounted && (0, aU.jsx)(EU.InGameUi, {
          shown: sU.shown
        }, sU.key)
      })
    }
  },
  4657: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(1196);
    async function pU(UU) {
      const RU = await fetch(`${tU.clientSideServerUrls.s3Url}/${UU}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === RU.status || 403 === RU.status) return null;
      if (!RU.ok) throw new Error(`Failed to download the texture pack (${RU.status})`);
      return await RU.json()
    }
  },
  8544: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1320),
      pU = gU(1217),
      EU = gU(581);

    function PU(UU) {
      return UU = function(UU, RU) {
        var gU;
        const tU = new URLSearchParams(RU),
          pU = tU.get("lobby"),
          EU = tU.get("vm"),
          PU = null !== (gU = pU) && void 0 !== gU ? gU : UU.lobbyName,
          TU = null !== EU && void 0 !== EU ? EU : UU.directJoinVmUrl;
        if (PU === UU.lobbyName && TU === UU.directJoinVmUrl) return UU;
        return {
          ...UU,
          lobbyName: PU,
          directJoinVmUrl: TU
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
        if ((0, EU.E)(UU.directJoinVmUrl)) return UU;
        const RU = (0, pU.Y)(UU.directJoinVmUrl);
        null === RU && (UU.directJoinVmUrl = void 0);
        return UU
      }(UU = function(UU) {
        if ((0, EU.E)(UU.gameNameWithVariation)) return UU;
        return UU.gameNameWithVariation = (0, tU.i)(UU.gameNameWithVariation), UU
      }(UU))
    }
  },
  8536: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => pU
    });
    let tU = !1;

    function pU() {
      tU = !0
    }

    function EU() {
      return tU
    }
  },
  8529: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU,
      f: () => GU
    });
    var tU = gU(2840),
      pU = gU(2116),
      EU = gU(2886),
      PU = gU(4310),
      TU = gU(3194),
      qU = gU(8536);
    let KU = null;

    function cU() {
      return PU.d.cancelDownloadForJoin(), (0, TU.d)(), (0, pU.g)(), (0, qU.e)(), (0, EU.f)(), Promise.all([gU.e(69), gU.e(72), gU.e(71), gU.e(70), gU.e(83), gU.e(259), gU.e(199), gU.e(216), gU.e(237), gU.e(212), gU.e(46)]).then((() => gU(40061))).catch((() => {})), Promise.all([gU.e(74), gU.e(132), gU.e(87), gU.e(55)]).then((() => gU(40145))).then((UU => {
        let {
          startJoinLoad: RU
        } = UU;
        RU()
      }), (() => {})), KU ??= Promise.all([gU.e(71), gU.e(74), gU.e(129), gU.e(73), gU.e(132), gU.e(262), gU.e(186), gU.e(87), gU.e(86), gU.e(85), gU.e(212), gU.e(60)]).then((() => gU(40241))).then((UU => (UU.startWasmPlay(), UU.followPageUiPack((UU => {
        tU.e.showGamePack(UU)
      })), UU)), (UU => {
        throw KU = null, UU
      })), KU
    }

    function GU() {
      return Promise.all([gU.e(71), gU.e(74), gU.e(129), gU.e(73), gU.e(132), gU.e(262), gU.e(186), gU.e(87), gU.e(86), gU.e(85), gU.e(212), gU.e(60)]).then((() => gU(40241))).then((UU => {
        UU.startWasmPreviews(), UU.prefetchWasmPreviews()
      }))
    }
  },
  8522: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => PU,
      g: () => TU,
      k: () => KU,
      l: () => qU
    });
    var tU = gU(189),
      pU = gU(4293);

    function EU(UU) {
      return PU(UU) === tU.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function PU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function TU(UU) {
      var RU;
      return null !== (RU = Object.keys(pU.b).find((RU => pU.b[RU] === UU))) && void 0 !== RU ? RU : null
    }

    function qU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const KU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);