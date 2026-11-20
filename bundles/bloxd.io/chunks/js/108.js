export const id = 108;
export const ids = [108];
export const modules = {
  8645: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => VR
    });
    var Eu = yu(1483),
      Ku = yu(27),
      Qu = yu(4436),
      mu = yu(64),
      Ju = yu(1400);
    var Nu = yu(1855),
      Xu = yu(1467),
      Vu = yu(1311),
      ru = yu(1170),
      Bu = yu(174),
      xu = yu(1199),
      Su = yu(2269),
      pu = yu(8652);

    function Tu(uu, Ru) {
      const yu = !0 === Ru.debugResult.gameRefused,
        Eu = yu || Ru.code === Bu.p.REQUEST_TO_MATCHMAKING ? (0, pu.j)(Ru.message) : null;
      return null !== Eu ? (Wu(uu, uu((0, pu.p)(Eu)), uu(pu.l[Eu])), !0) : !!yu && (async function(uu) {
        const {
          gameNameWithVariation: Ru,
          lobbyName: yu,
          shownLobbyName: Eu
        } = Nu.gameBridge.latest("connectedGame"), Ku = "classic" === Ru && (0, xu.H)(yu) ? Eu : await (0, Su.c)(uu, Ru, yu);
        return "" !== Ku ? uu("general:cantJoinGame", {
          game: Ku
        }) : uu("general:cantJoinThisGame")
      }(uu).then((yu => {
        Wu(uu, yu, Ru.message)
      })), !0)
    }

    function Wu(uu, Ru, yu) {
      Vu.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Ru,
        subtitle: yu,
        confirmText: uu("general:ok"),
        cancelText: ""
      })
    }
    var ju = yu(4362),
      Hu = yu(1110),
      du = yu(34),
      bu = yu(1217),
      Cu = yu(1661),
      ku = yu(106),
      eu = yu(1269),
      Au = yu(1389),
      Du = yu(4298),
      Mu = yu(4130),
      Iu = yu(3062),
      Gu = yu(1079);
    const Uu = "https://discord.gg/playbloxd";

    function nu(uu) {
      let {
        failure: Ru
      } = uu;
      const {
        t: yu
      } = (0, ru.E)(), Eu = "chosen" === Ru.packSource, Ku = ku.featureFlags.useDiscord ? Eu ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Eu ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Gu.jsxs)(Gu.Fragment, {
        children: [yu(Ku, {
          code: Ru.code
        }), "default" !== Ru.packSource && Ru.code === Iu.k.Error && (0, Gu.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [yu("texturePackLoad:details"), " ", Ru.reason]
        }), ku.featureFlags.useDiscord && (0, Gu.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Gu.jsx)("a", {
            href: Uu,
            target: "_blank",
            rel: "noreferrer",
            children: yu("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var su = yu(1289),
      tu = yu(753),
      lu = yu(1207),
      gu = yu(1001),
      cu = yu(1447),
      Lu = yu(3105),
      zu = yu(2936),
      Fu = yu(1320),
      wu = yu(1300),
      Zu = yu(4771),
      hu = yu(8654),
      Pu = yu(2751);

    function iu(uu) {
      let {
        onApply: Ru,
        onSkip: yu
      } = uu;
      const {
        t: Eu
      } = (0, ru.E)();
      return (0, mu.useEffect)((() => {
        Pu.g.skipPlayWait()
      }), []), (0, Gu.jsx)(Fu.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Gu.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Eu("customTexturePack:downloadPrompt"), (0, Gu.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Eu("customTexturePack:authorWarning")
          }), (0, Gu.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Eu("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Ru
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: yu
        }
      })
    }
    async function Yu() {
      let uu = !1;
      const Ru = Vu.NotificationProvider.showCustomPopup({
        body: Ru => (0, Gu.jsx)(iu, {
          onApply: () => {
            uu = !0, Ru()
          },
          onSkip: Ru
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Ru.getResult(), uu
    }
    let ou = {
      wanted: !1
    };
    let qu = null;

    function Ou(uu) {
      uu.setGamePackConfirm(Yu), qu = uu
    }
    var vu = yu(3307);

    function au(uu) {
      let {
        schematicId: Ru,
        texturePackKey: yu,
        onClose: Eu
      } = uu;
      const [Ku, Qu] = (0, mu.useState)("prompt"), [Ju, Nu] = (0, mu.useState)(null), Xu = (0, vu.b)();

      function Vu() {
        Eu()
      }
      return "prompt" === Ku ? (0, Gu.jsx)(iu, {
        onApply: async function() {
          Qu("downloading");
          try {
            const uu = await async function(uu, Ru) {
              const yu = await (0, Zu.d)(Ru);
              if (yu) return {
                pack: yu,
                key: Ru
              };
              const Eu = await Hu.userContextManager.getCurrentUserContext(),
                Ku = (await cu.e.getGame(Eu, uu, !0)).customTexturePackKey;
              if (!Ku) return null;
              const Qu = await (0, Zu.d)(Ku);
              if (!Qu) throw new Error("The texture pack could not be found");
              return {
                pack: Qu,
                key: Ku
              }
            }(Ru, yu);
            if (!Xu.current) return;
            if (!uu) return void Eu();
            if ((0, Lu.h)(uu.pack)) return void Qu("refused");
            zu.c.setFromJson(uu.pack, "customGame"), await zu.c.saveTemporaryTexturePack(uu.key), Xu.current && (0, Cu.reloadBloxd)()
          } catch (uu) {
            Nu(uu instanceof Error ? uu.message : String(uu)), Qu("error")
          }
        },
        onSkip: Vu
      }) : "downloading" === Ku ? (0, Gu.jsx)(Fu.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Gu.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Gu.jsx)(wu.b, {
            showFace: !0
          })
        })
      }) : "error" === Ku ? (0, Gu.jsx)(Fu.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Ju,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Vu
        }
      }) : "refused" === Ku ? (0, Gu.jsx)(Fu.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Vu
        }
      }) : null
    }
    var fu = yu(8666),
      uR = yu(4113),
      RR = yu(1688),
      yR = yu(3032),
      ER = yu(3236),
      KR = yu(4461),
      QR = yu(1257),
      mR = yu(624),
      JR = yu(714);

    function NR() {
      const uu = Ku.d.get("clientEscMenuOptions");
      Nu.gameBridge.send("setLookSensitivity", Ku.d.get("isTouchScreen") ? (0, JR.q)(uu) : uu.mouseSensitivity)
    }
    async function XR(uu, Ru, yu) {
      const Eu = (0, KR.C)(Ru);
      async function mu(uu, Ru, yu, Eu) {
        var mu;
        if (Eu.aborted) return null;
        null === Ku.d.get("gameEntrySource") && (0, Ku.i)("directPlayUrl"), mR.q && (0, hu.c)().catch((() => {})), Ku.d.set({
          gameState: "findingLobby"
        }), du.k.Op("loadingScreenState", "loadingPage:findingLobby");
        const Ju = await Hu.userContextManager.getCurrentUserContext();
        Nu.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Ru,
          discordContext: uu instanceof lu.e ? uu.getSerialisableParams() : null
        }), (0, RR.h)();
        const Xu = await async function(uu, Ru, yu, Eu, Ku) {
          try {
            await Qu.reqLibsLoadedPromise
          } catch (mu) {
            return bu.c.errorWithCode(mu.toString(), Bu.p.LOAD_REQUIRED_LIBS, {
              error: mu,
              severity: "medium"
            })
          }
          return du.k.Op("matchmakeAndPlayStepCompleted", {
            step: Bu.p.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Qu.matchmakeAndPlayMaybeUnloaded)(uu, Ru, yu, Eu, Ku)
        }(uu, Ru, yu, Ju, Eu), Vu = Xu.isError() ? Xu.asError() : null;
        if (Vu && !Vu.debugResult.Ty) {
          console.log("Failed to join lobby:", Vu.message);
          const uu = "timedOut" === Vu.debugResult.gameServerUnreachable;
          (0, yR.e)("matchmake_failed", Vu.message, uu ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Bu.p[Vu.code])
        }
        if (Eu.aborted) return Nu.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Vu && void 0 !== Vu && Vu.debugResult.Ty) return console.log("Join cancelled:", Vu.message), null;
        if (Vu) return Xu;
        const {
          gameNameWithVariation: ru,
          lobbyName: Su,
          addLobbyToRecentlyPlayed: pu
        } = Xu.getValue();
        let Tu;
        NR(), (0, QR.C)().setGameViewShown(!0);
        const Wu = null === (mu = tu.b[ru]) || void 0 === mu ? void 0 : mu.recentlyPlayedAs;
        return Tu = (0, gu.i)(ru) ? {
          type: "custom",
          name: "",
          schematicId: (0, gu.n)(ru),
          recentLobbies: []
        } : "classic" !== ru || (0, xu.N)(Su) ? Wu ? {
          type: "bloxd",
          gameNameWithVariation: Wu,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: ru,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, cu.e.addRecentlyPlayedGame(Ju, Tu, pu && !Wu ? Su : void 0).then((uu => {
          Ju.setRecentlyPlayedGames(uu)
        })).catch((uu => {
          console.error("Failed to record recently played game", uu)
        })), (0, eu.U)(), Xu
      }
      return Eu && (0, Ku.i)("updateRejoin"), (0, ER.g)((async Ku => {
        try {
          let Ju = uu,
            Nu = await mu(Ju, Ru, yu, Ku);
          for (let uu = 0; Eu && uu < KR.j; uu++) {
            var Qu;
            if (null === (Qu = Nu) || void 0 === Qu || !Qu.isError() || Nu.asError().code !== Bu.p.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, KR.E)((0, KR.p)(uu), Ku)) return Nu;
            Ju = (0, KR.q)(Ju, uu + 1, "string" === typeof Ju && (0, xu.N)(Ju)), Nu = await mu(Ju, Ru, yu, Ku)
          }
          return Nu
        } catch (Ju) {
          if ((0, yR.e)("matchmake_failed", Ju, "unexpected"), Nu.gameBridge.send("leaveGame", {
              reloadPath: Ku.aborted ? null : "/"
            }), Ku.aborted) return null;
          throw Ju
        }
      }), (async uu => {
        var yu;
        if (Eu) return;
        const Ku = (0, eu.O)();
        null !== Ku && (await Ku, uu.aborted) || (null !== (yu = tu.b[Ru]) && void 0 !== yu && yu.playAdBeforeMatchmaking ? (Pu.g.skipPlayWait(), await new Promise((uu => {
          (0, eu.lb)((() => {
            uu(!0)
          }), "video_start")
        }))) : (0, eu.lb)((() => {}), "video_start"))
      }))
    }

    function VR() {
      const {
        t: uu
      } = (0, ru.E)(), Ru = (0, Xu.useNavigatePreserveSearch)(), yu = (0, Eu.s)(), pu = (0, Eu.A)(), Wu = (0, mu.useRef)({
        t: uu,
        navigate: Ru
      });
      Wu.current = {
        t: uu,
        navigate: Ru
      };
      const du = (0, mu.useRef)("");
      du.current = yu.pathname + yu.search;
      const {
        gameState: bu,
        clientEscMenuOptions: Uu
      } = (0, Ku.j)(["gameState", "clientEscMenuOptions"]), tu = (0, mu.useRef)(null), lu = (0, mu.useRef)(null);
      var Lu;
      (0, ER.i)(), (0, ER.l)(), Lu = mR.q, (0, mu.useEffect)((() => {
        if (!Lu) return;
        let uu = !0;
        return (0, hu.c)().then((Ru => {
          uu && Ou(Ru)
        })).catch((() => {})), () => {
          var Ru;
          uu = !1, ou.wanted = !1, null === (Ru = qu) || void 0 === Ru || Ru.setGamePackConfirm(null), qu = null
        }
      }), [Lu]), (0, mu.useEffect)((() => {
        var uu;
        (0, Qu.needGameClientNow)();
        const {
          t: Ru,
          navigate: Eu
        } = Wu.current, mu = (0, fu.e)(pu, yu.search);
        if (pu.lobbyName && !new URLSearchParams(yu.search).has("lobby")) return void Eu((0, su.b)(mu.gameNameWithVariation, mu.lobbyName), {
          replace: !0
        });
        let Ju = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === yu.pathname) {
          const uu = Ku.d.get("discordContext");
          if (!uu) return void Eu("/");
          Ju = ju.e.setupDiscordLobby(uu, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: uu
          }))).catch((Ru => (console.error("Failed to setup discord lobby", Ru), {
            shouldMatchmake: !1,
            discordContext: uu
          })))
        } else if (!mu.gameNameWithVariation || !(0, xu.J)(mu.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${mu.gameNameWithVariation}`), void Eu(-1);
        if (mu.gameNameWithVariation === tu.current && mu.lobbyName === lu.current) return;
        if (Nu.gameBridge.latest("connectedGame").replay) return void(0, ER.f)(null);
        (0, eu.S)(), Ku.d.set({
          gameState: "loadingScreen"
        });
        const Xu = function() {
          ou.wanted = !1;
          const uu = {
            wanted: !0
          };
          return ou = uu, () => uu.wanted
        }();
        if ("releaseCountdown" === (null === (uu = (0, Su.f)(mu.gameNameWithVariation)) || void 0 === uu ? void 0 : uu.type)) return console.error(`Game hasn't been released yet: ${mu.gameNameWithVariation}`), void Eu(-1);
        const ru = mu.gameNameWithVariation;
        if (ru && (mR.q || (0, gu.i)(ru))) {
          const uu = mR.q ? Promise.all([(0, hu.c)(), Hu.userContextManager.getCurrentUserContext()]).then((uu => {
            let [Ru, yu] = uu;
            if (Xu()) return Ou(Ru), Ru.packForGame(ru, yu, Xu)
          })) : async function(uu) {
            await zu.c.indexedDbValuesAreLoaded();
            const Ru = await Hu.userContextManager.getCurrentUserContext(),
              yu = (0, gu.n)(uu);
            let Eu;
            try {
              Eu = await cu.e.getGame(Ru, yu, !0)
            } catch (mu) {
              return void console.error("Failed to get game", mu)
            }
            const Ku = Eu.customTexturePackKey;
            if (!Ku) return void(zu.c.isUsingTemporaryTexturePack() && ((0, Cu.reloadBloxd)(), await new Promise((() => {}))));
            if (zu.c.isUsingTemporaryTexturePack() && zu.c.getTemporaryTexturePackSource() === Ku) return;
            const Qu = Vu.NotificationProvider.showCustomPopup({
              body: uu => (0, Gu.jsx)(au, {
                schematicId: yu,
                texturePackKey: Ku,
                onClose: uu
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Qu.getResult()
          }(ru), Ru = Ju;
          Ju = uu.catch((uu => {
            console.error("Failed to check for custom texture pack", uu)
          })).then((() => Ru))
        }(0, ER.f)(null);
        let bu = !1;
        const Au = yu.pathname + yu.search,
          Uu = () => !bu && du.current === Au;
        return Ju.then((uu => {
          let {
            shouldMatchmake: yu,
            discordContext: Qu
          } = uu;
          Uu() && (yu ? XR(null !== Qu && void 0 !== Qu ? Qu : mu.lobbyName, Qu ? "classic" : mu.gameNameWithVariation, mu.directJoinVmUrl).then((uu => {
            var yu;
            if (null !== uu && Uu())
              if (uu.isError()) {
                var Qu;
                const Ju = uu.asError(),
                  Xu = null !== (Qu = Ju.debugResult.severity) && void 0 !== Qu ? Qu : "high";
                if (Ju.code === Bu.p.SHADER_PACK) return void(0, uR.b)(Ju.message, Eu);
                const ru = Ku.d.get("gameEntrySource"),
                  xu = Ju.code === Bu.p.INITIALISE_WEBGL ? (0, Mu.b)() : null,
                  {
                    error: Su
                  } = Ju.debugResult;
                let pu;
                if (Tu(Ru, Ju)) pu = Promise.resolve(!1);
                else if (null !== xu) pu = (0, Mu.h)(xu);
                else if (Su instanceof Iu.l) yu = Su, pu = Vu.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Gu.jsx)(nu, {
                    failure: yu
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((uu => !0 === uu));
                else {
                  let uu;
                  switch (Xu) {
                    case "low":
                      uu = "face-diagonal-mouth";
                      break;
                    case "medium":
                      uu = "face-worried";
                      break;
                    case "high":
                      uu = "face-dizzy"
                  }
                  pu = Vu.NotificationProvider.showPromptPopup({
                    icon: uu,
                    title: Bu.F[Ju.code],
                    subtitle: (0, Gu.jsxs)(Gu.Fragment, {
                      children: [Ju.debugResult.gameServerUnreachable ? Ru((0, ku.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Ju.message, Ju.debugResult.error instanceof Error && (0, Gu.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Gu.jsx)(Du.c, {
                          errorString: Ju.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Ru("general:tryAgain"),
                    cancelText: Ru("general:cancel")
                  }).getResult().then((uu => !0 === uu))
                }
                pu.then((uu => {
                  if (uu) {
                    (0, Ku.i)(ru);
                    const uu = (0, su.b)(mu.gameNameWithVariation, mu.lobbyName);
                    "low" === Xu ? Eu(uu) : (0, Cu.reloadBloxd)(uu)
                  }
                })), Nu.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Eu(-1)
              } else {
                tu.current = uu.getValue().gameNameWithVariation, lu.current = uu.getValue().lobbyName;
                const Ru = (0, su.b)(tu.current, uu.getValue().lobbyName);
                Eu(Ru, {
                  replace: !0
                })
              }
          })).catch((uu => {
            if (!Uu()) return;
            Vu.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Gu.jsxs)(Gu.Fragment, {
                children: [Ru("homePage:pleaseCopyError"), (0, Gu.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Gu.jsx)(Du.c, {
                    errorString: uu.stack
                  })
                })]
              }),
              confirmText: Ru("general:tryAgain"),
              cancelText: Ru("general:cancel")
            }).getResult().then((uu => {
              !0 === uu && (0, Cu.reloadBloxd)((0, su.b)(mu.gameNameWithVariation, mu.lobbyName))
            })), Eu(-1)
          })) : Eu(-1))
        })), () => {
          bu = !0
        }
      }), [pu, yu.search, yu.pathname]), (0, mu.useEffect)((() => {
        Uu.disableFullscreen && (0, Au.d)() ? (0, Au.j)() : !Uu.disableFullscreen && (0, Au.g)() && (0, Au.p)()
      }), [bu, Uu]), (0, mu.useEffect)((() => {
        "inGame" === bu && NR()
      }), [bu, Uu]), (0, mu.useEffect)((() => {
        "inGame" !== bu && Ku.d.set({
          openInGameMenuName: null
        })
      }), [bu]);
      const Fu = function(uu) {
        const Ru = (0, Ku.g)(uu),
          [yu, Eu] = (0, mu.useState)(0),
          [Qu, Nu] = (0, mu.useState)(!1);
        (0, Ju.e)("gameJoined", (() => {
          (0, Ku.g)(Ku.d.get("gameState")) && (Eu((uu => uu + 1)), Nu(!0))
        })), (0, mu.useEffect)((() => {
          Ru || Nu(!1)
        }), [Ru]);
        const Xu = "inGame" === uu;
        return {
          mounted: Xu || Ru && Qu,
          shown: Xu,
          key: yu
        }
      }(bu);
      return (0, Gu.jsx)(Gu.Fragment, {
        children: Fu.mounted && (0, Gu.jsx)(Qu.InGameUi, {
          shown: Fu.shown
        }, Fu.key)
      })
    }
  },
  4771: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(1176);
    async function Ku(uu) {
      const Ru = await fetch(`${Eu.clientSideServerUrls.s3Url}/${uu}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Ru.status || 403 === Ru.status) return null;
      if (!Ru.ok) throw new Error(`Failed to download the texture pack (${Ru.status})`);
      return await Ru.json()
    }
  },
  8666: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(1289),
      Ku = yu(1199),
      Qu = yu(610);

    function mu(uu) {
      return uu = function(uu, Ru) {
        var yu;
        const Eu = new URLSearchParams(Ru),
          Ku = Eu.get("lobby"),
          Qu = Eu.get("vm"),
          mu = null !== (yu = Ku) && void 0 !== yu ? yu : uu.lobbyName,
          Ju = null !== Qu && void 0 !== Qu ? Qu : uu.directJoinVmUrl;
        if (mu === uu.lobbyName && Ju === uu.directJoinVmUrl) return uu;
        return {
          ...uu,
          lobbyName: mu,
          directJoinVmUrl: Ju
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), uu = function(uu) {
        if ((0, Qu.E)(uu.directJoinVmUrl)) return uu;
        const Ru = (0, Ku.X)(uu.directJoinVmUrl);
        null === Ru && (uu.directJoinVmUrl = void 0);
        return uu
      }(uu = function(uu) {
        if ((0, Qu.E)(uu.gameNameWithVariation)) return uu;
        return uu.gameNameWithVariation = (0, Eu.k)(uu.gameNameWithVariation), uu
      }(uu))
    }
  },
  8663: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      f: () => Ku
    });
    let Eu = !1;

    function Ku() {
      Eu = !0
    }

    function Qu() {
      return Eu
    }
  },
  8654: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Vu,
      e: () => ru
    });
    var Eu = yu(2936),
      Ku = yu(2184),
      Qu = yu(2990),
      mu = yu(4427),
      Ju = yu(3318),
      Nu = yu(8663);
    let Xu = null;

    function Vu() {
      return mu.c.cancelDownloadForJoin(), (0, Ju.c)(), (0, Ku.g)(), (0, Nu.f)(), (0, Qu.i)(), Promise.all([yu.e(69), yu.e(72), yu.e(71), yu.e(70), yu.e(83), yu.e(259), yu.e(199), yu.e(216), yu.e(237), yu.e(212), yu.e(46)]).then((() => yu(40253))).catch((() => {})), Promise.all([yu.e(74), yu.e(132), yu.e(87), yu.e(55)]).then((() => yu(40334))).then((uu => {
        let {
          startJoinLoad: Ru
        } = uu;
        Ru()
      }), (() => {})), Xu ??= Promise.all([yu.e(71), yu.e(74), yu.e(129), yu.e(73), yu.e(132), yu.e(262), yu.e(186), yu.e(87), yu.e(86), yu.e(85), yu.e(212), yu.e(60)]).then((() => yu(40418))).then((uu => (uu.startWasmPlay(), uu.followPageUiPack((uu => {
        Eu.c.showGamePack(uu)
      })), uu)), (uu => {
        throw Xu = null, uu
      })), Xu
    }

    function ru() {
      return Promise.all([yu.e(71), yu.e(74), yu.e(129), yu.e(73), yu.e(132), yu.e(262), yu.e(186), yu.e(87), yu.e(86), yu.e(85), yu.e(212), yu.e(60)]).then((() => yu(40418))).then((uu => {
        uu.startWasmPreviews(), uu.prefetchWasmPreviews()
      }))
    }
  },
  8652: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      g: () => mu,
      j: () => Ju,
      l: () => Xu,
      p: () => Nu
    });
    var Eu = yu(212),
      Ku = yu(4409);

    function Qu(uu) {
      return mu(uu) === Eu.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function mu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function Ju(uu) {
      var Ru;
      return null !== (Ru = Object.keys(Ku.e).find((Ru => Ku.e[Ru] === uu))) && void 0 !== Ru ? Ru : null
    }

    function Nu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Xu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);