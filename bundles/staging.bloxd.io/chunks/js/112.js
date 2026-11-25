export const id = 112;
export const ids = [112];
export const modules = {
  9123: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => ME
    });
    var su = ju(1580),
      Uu = ju(22),
      Zu = ju(4842),
      Xu = ju(58),
      lu = ju(1499);
    var qu = ju(1986),
      fu = ju(1570),
      Cu = ju(1405),
      bu = ju(1244),
      cu = ju(166),
      Nu = ju(202),
      Ou = ju(1069),
      Yu = ju(1079),
      hu = ju(1278),
      Du = ju(2474),
      gu = ju(1559),
      Mu = ju(1183),
      eu = ju(9128),
      Gu = ju(1595);

    function pu(uu, Eu) {
      const ju = !0 === Eu.debugResult.gameRefused,
        su = ju || Eu.code === cu.j.REQUEST_TO_MATCHMAKING ? (0, eu.j)(Eu.message) : null;
      if (null !== su) return wu(uu, uu((0, eu.q)(su)), uu(eu.n[su])), !0;
      if (ju) return async function(uu) {
        const {
          gameNameWithVariation: Eu,
          lobbyName: ju,
          shownLobbyName: su
        } = qu.gameBridge.latest("connectedGame"), Uu = "classic" === Eu && (0, hu.H)(ju) ? su : await (0, Du.g)(uu, Eu, ju);
        return "" !== Uu ? uu("general:cantJoinGame", {
          game: Uu
        }) : uu("general:cantJoinThisGame")
      }(uu).then((ju => {
        wu(uu, ju, Eu.message)
      })), !0;
      const {
        joinFailure: Uu
      } = Eu.debugResult, Zu = "refused" === (null === Uu || void 0 === Uu ? void 0 : Uu.at) ? Uu.code : null;
      return Zu === Nu.b.schematicNotPublished.code ? (async function(uu, Eu) {
        const ju = (0, Ou.q)(qu.gameBridge.latest("connectedGame").gameNameWithVariation),
          su = await async function(uu) {
            try {
              const Eu = await gu.b.getGame(await Mu.userContextManager.getCurrentUserContext(), uu, !0);
              return Eu.gamePublished ? null : Eu.name
            } catch (Eu) {
              return Eu instanceof cu.b && 435 === Eu.httpCode || console.error(`Failed to get unpublished game ${uu}`, Eu), null
            }
          }(ju);
        if (null === su) return void wu(uu, uu("general:cantJoinThisGame"), Eu);
        const Uu = await Cu.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: uu("studio:gameNotPublishedTitle", {
            game: su
          }),
          confirmText: uu("studio:publishInStudio"),
          cancelText: uu("general:cancel")
        }).getResult();
        !0 === Uu && (0, fu.navigatePreserveSearch)((0, Gu.i)((0, Yu.e)(ju), "manage"))
      }(uu, Eu.message), !0) : Zu === Nu.b.schematicBanned.code && (wu(uu, uu("general:cantJoinThisGame"), Eu.message), !0)
    }

    function wu(uu, Eu, ju) {
      Cu.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Eu,
        subtitle: ju,
        confirmText: uu("general:ok"),
        cancelText: ""
      })
    }
    var Ju = ju(4769),
      du = ju(24),
      au = ju(1301),
      Pu = ju(1779),
      ou = ju(91),
      ku = ju(1362),
      mu = ju(1487),
      vu = ju(4711),
      Ku = ju(4521),
      Vu = ju(4475),
      ru = ju(3416),
      Qu = ju(1376),
      iu = ju(822),
      Wu = ju(1285),
      Su = ju(3489),
      Iu = ju(3336),
      Fu = ju(1413),
      Bu = ju(1393),
      Lu = ju(5146),
      tu = ju(9130),
      xu = ju(3135),
      Tu = ju(1154);

    function Hu(uu) {
      let {
        onApply: Eu,
        onSkip: ju
      } = uu;
      const {
        t: su
      } = (0, bu.A)();
      return (0, Xu.useEffect)((() => {
        xu.f.skipPlayWait()
      }), []), (0, Tu.jsx)(Fu.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Tu.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [su("customTexturePack:downloadPrompt"), (0, Tu.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: su("customTexturePack:authorWarning")
          }), (0, Tu.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: su("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Eu
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ju
        }
      })
    }
    async function Au() {
      let uu = !1;
      const Eu = Cu.NotificationProvider.showCustomPopup({
        body: Eu => (0, Tu.jsx)(Hu, {
          onApply: () => {
            uu = !0, Eu()
          },
          onSkip: Eu
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Eu.getResult(), uu
    }
    let nu = {
      wanted: !1
    };
    let yu = null;

    function zu(uu) {
      uu.setGamePackConfirm(Au), yu = uu
    }
    var Ru = ju(3678);

    function uE(uu) {
      let {
        schematicId: Eu,
        texturePackKey: ju,
        onClose: su
      } = uu;
      const [Uu, Zu] = (0, Xu.useState)("prompt"), [lu, qu] = (0, Xu.useState)(null), fu = (0, Ru.c)();

      function Cu() {
        su()
      }
      return "prompt" === Uu ? (0, Tu.jsx)(Hu, {
        onApply: async function() {
          Zu("downloading");
          try {
            const uu = await async function(uu, Eu) {
              const ju = await (0, Lu.c)(Eu);
              if (ju) return {
                pack: ju,
                key: Eu
              };
              const su = await Mu.userContextManager.getCurrentUserContext(),
                Uu = (await gu.b.getGame(su, uu, !0)).customTexturePackKey;
              if (!Uu) return null;
              const Zu = await (0, Lu.c)(Uu);
              if (!Zu) throw new Error("The texture pack could not be found");
              return {
                pack: Zu,
                key: Uu
              }
            }(Eu, ju);
            if (!fu.current) return;
            if (!uu) return void su();
            if ((0, Su.g)(uu.pack)) return void Zu("refused");
            Iu.d.setFromJson(uu.pack, "customGame"), await Iu.d.saveTemporaryTexturePack(uu.key), fu.current && (0, Pu.reloadBloxd)()
          } catch (uu) {
            qu(uu instanceof Error ? uu.message : String(uu)), Zu("error")
          }
        },
        onSkip: Cu
      }) : "downloading" === Uu ? (0, Tu.jsx)(Fu.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Tu.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Tu.jsx)(Bu.b, {
            showFace: !0
          })
        })
      }) : "error" === Uu ? (0, Tu.jsx)(Fu.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: lu,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Cu
        }
      }) : "refused" === Uu ? (0, Tu.jsx)(Fu.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Cu
        }
      }) : null
    }
    var EE = ju(9145),
      jE = ju(4468),
      sE = ju(1817),
      UE = ju(3099),
      ZE = ju(4473),
      XE = ju(2215),
      lE = ju(9152);
    var qE = ju(4858),
      fE = ju(1353),
      CE = ju(1776),
      bE = ju(680),
      cE = ju(785),
      NE = ju(1843);

    function OE() {
      const uu = Uu.d.get("clientEscMenuOptions");
      qu.gameBridge.send("setLookSensitivity", Uu.d.get("isTouchScreen") ? (0, cE.o)(uu) : uu.mouseSensitivity)
    }
    const YE = 45e3;

    function hE(uu) {
      const Eu = uu.asError();
      if (Eu.debugResult.Lj || (0, CE.b)(Eu.debugResult.error)) return;
      console.log("Failed to join lobby:", Eu.message);
      const ju = "timedOut" === Eu.debugResult.gameServerUnreachable;
      (0, UE.reportClientError)("matchmake_failed", Eu.message, ju ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : cu.j[Eu.code]);
      const {
        error: su
      } = Eu.debugResult;
      if (su instanceof ru.o && "default" !== su.packSource) {
        const uu = (0, ZE.f)("js", "game" === su.packSource ? "game" : "page", (0, ZE.h)(su));
        (0, UE.reportClientError)("texture_pack", su, uu)
      }
    }

    function DE(uu) {
      if (null === uu || void 0 === uu || !uu.isError()) return !1;
      const Eu = uu.asError();
      return Eu.code === cu.j.REQUEST_TO_MATCHMAKING && !(0, CE.b)(Eu.debugResult.error)
    }
    async function gE(uu, Eu, ju) {
      const su = (0, qE.P)(Eu);
      async function Xu(uu, Eu, ju, su) {
        var Xu;
        if (su.aborted) return null;
        null === Uu.d.get("gameEntrySource") && (0, Uu.j)("directPlayUrl"), bE.y && (0, tu.g)().catch((() => {})), Uu.d.set({
          gameState: "findingLobby"
        }), du.h.TY("loadingScreenState", "loadingPage:findingLobby");
        const lu = await Mu.userContextManager.getCurrentUserContext();
        qu.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Eu,
          discordContext: uu instanceof Wu.f ? uu.getSerialisableParams() : null
        }), (0, sE.c)(null !== (Xu = xu.f.playInputAt()) && void 0 !== Xu ? Xu : performance.now());
        const fu = await async function(uu, Eu, ju, su, Uu) {
          try {
            await (0, NE.i)(Zu.reqLibsLoadedPromise, YE, "Required libraries timed out")
          } catch (Xu) {
            const uu = Xu instanceof NE.f ? `Required libraries still loading after ${YE/1e3} s: ${(0,Zu.requiredLibsPending)().join(", ")}` : Xu.toString();
            return au.c.errorWithCode(uu, cu.j.LOAD_REQUIRED_LIBS, {
              error: Xu,
              severity: "medium"
            })
          }
          return du.h.TY("matchmakeAndPlayStepCompleted", {
            step: cu.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Zu.matchmakeAndPlayMaybeUnloaded)(uu, Eu, ju, su, Uu)
        }(uu, Eu, ju, lu, su), Cu = fu.isError() ? fu.asError() : null;
        if (su.aborted) return Cu && hE(fu), qu.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Cu && void 0 !== Cu && Cu.debugResult.Lj) return console.log("Join cancelled:", Cu.message), null;
        if (Cu) return fu;
        const {
          gameNameWithVariation: bu,
          lobbyName: Nu
        } = fu.getValue();
        return OE(), (0, fE.E)().setGameViewShown(!0), lu.recordJoin(bu, Nu), (0, ku.C)(), fu
      }
      return su && (0, Uu.j)("updateRejoin"), (0, XE.f)((async Uu => {
        try {
          var Zu;
          let lu = uu,
            qu = await Xu(lu, Eu, ju, Uu);
          for (let uu = 0; su && uu < qE.m && (DE(qu) && await (0, qE.S)((0, qE.v)(uu), Uu)); uu++) lu = (0, qE.y)(lu, uu + 1, "string" === typeof lu && (0, hu.N)(lu)), qu = await Xu(lu, Eu, ju, Uu);
          return null !== (Zu = qu) && void 0 !== Zu && Zu.isError() && hE(qu), qu
        } catch (lu) {
          if ((0, UE.reportClientError)("matchmake_failed", lu, "unexpected"), qu.gameBridge.send("leaveGame", {
              reloadPath: Uu.aborted ? null : "/"
            }), Uu.aborted) return null;
          throw lu
        }
      }), (async uu => {
        var ju;
        if (su) return;
        const Uu = (0, ku.y)();
        null !== Uu && (await Uu, uu.aborted) || (null !== (ju = iu.c[Eu]) && void 0 !== ju && ju.playAdBeforeMatchmaking ? (xu.f.skipPlayWait(), await new Promise((uu => {
          (0, ku.R)((() => {
            uu(!0)
          }), "video_start")
        }))) : (0, ku.R)((() => {}), "video_start"))
      }))
    }

    function ME() {
      const {
        t: uu
      } = (0, bu.A)(), Eu = (0, fu.useNavigatePreserveSearch)(), ju = (0, su.r)(), Nu = (0, su.B)(), Yu = (0, Xu.useRef)({
        t: uu,
        navigate: Eu
      });
      Yu.current = {
        t: uu,
        navigate: Eu
      };
      const eu = (0, Xu.useRef)("");
      eu.current = ju.pathname + ju.search;
      const {
        gameState: Gu,
        clientEscMenuOptions: wu
      } = (0, Uu.l)(["gameState", "clientEscMenuOptions"]), du = (0, Xu.useRef)(null), Wu = (0, Xu.useRef)(!1);
      var Su;
      (0, XE.i)(), (0, XE.k)(), Su = bE.y, (0, Xu.useEffect)((() => {
        if (!Su) return;
        let uu = !0;
        return (0, tu.g)().then((Eu => {
          uu && zu(Eu)
        })).catch((() => {})), () => {
          var Eu;
          uu = !1, nu.wanted = !1, null === (Eu = yu) || void 0 === Eu || Eu.setGamePackConfirm(null), yu = null
        }
      }), [Su]), (0, Xu.useEffect)((() => {
        var uu, Eu, su;
        (0, Zu.needGameClientNow)();
        const {
          t: Xu,
          navigate: lu
        } = Yu.current, bu = (0, EE.e)(Nu, ju.search);
        if (Nu.lobbyName && !new URLSearchParams(ju.search).has("lobby")) return void lu((0, Qu.c)(bu.gameNameWithVariation, bu.lobbyName), {
          replace: !0
        });
        let Gu = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ju.pathname) {
          const uu = Uu.d.get("discordContext");
          if (!uu) return void lu("/");
          Gu = Ju.d.setupDiscordLobby(uu, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: uu
          }))).catch((Eu => (console.error("Failed to setup discord lobby", Eu), {
            shouldMatchmake: !1,
            discordContext: uu
          })))
        } else if (!bu.gameNameWithVariation || !(0, hu.L)(bu.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${bu.gameNameWithVariation}`), void lu(-1);
        const wu = du.current;
        if (null !== wu && bu.gameNameWithVariation === wu.gameNameWithVariation && bu.lobbyName === wu.lobbyName) return;
        if (qu.gameBridge.latest("connectedGame").replay) return void(0, XE.e)(null);
        if ("releaseCountdown" === (null === (uu = (0, Du.k)(bu.gameNameWithVariation)) || void 0 === uu ? void 0 : uu.type)) return console.error(`Game hasn't been released yet: ${bu.gameNameWithVariation}`), void lu(-1);
        const mu = Wu.current;
        Wu.current = !1, (0, ku.A)(), Uu.d.set({
          gameState: "loadingScreen"
        });
        const Su = function() {
            nu.wanted = !1;
            const uu = {
              wanted: !0
            };
            return nu = uu, () => uu.wanted
          }(),
          Fu = bu.gameNameWithVariation;
        if (Fu && (bE.y || (0, Ou.l)(Fu))) {
          const uu = bE.y ? Promise.all([(0, tu.g)(), Mu.userContextManager.getCurrentUserContext()]).then((uu => {
            let [Eu, ju] = uu;
            if (Su()) return zu(Eu), Eu.packForGame(Fu, ju, Su)
          })) : async function(uu) {
            await Iu.d.indexedDbValuesAreLoaded();
            const Eu = await Mu.userContextManager.getCurrentUserContext(),
              ju = (0, Ou.q)(uu);
            let su;
            try {
              su = await gu.b.getGame(Eu, ju, !0)
            } catch (Xu) {
              return void console.error("Failed to get game", Xu)
            }
            const Uu = su.customTexturePackKey;
            if (!Uu) return void(Iu.d.isUsingTemporaryTexturePack() && ((0, Pu.reloadBloxd)(), await new Promise((() => {}))));
            if (Iu.d.isUsingTemporaryTexturePack() && Iu.d.getTemporaryTexturePackSource() === Uu) return;
            const Zu = Cu.NotificationProvider.showCustomPopup({
              body: uu => (0, Tu.jsx)(uE, {
                schematicId: ju,
                texturePackKey: Uu,
                onClose: uu
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Zu.getResult()
          }(Fu), Eu = Gu;
          Gu = uu.catch((uu => {
            console.error("Failed to check for custom texture pack", uu)
          })).then((() => Eu))
        }
        const Bu = {
          wasm: bE.y,
          game: bu.gameNameWithVariation,
          custom: void 0 !== Fu && (0, Ou.l)(Fu),
          lobbyName: null !== (Eu = bu.lobbyName) && void 0 !== Eu ? Eu : null,
          direct: null !== bu.directJoinVmUrl && void 0 !== bu.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === ju.pathname,
          adBeforeMatchmaking: void 0 !== Fu && !0 === (null === (su = iu.c[Fu]) || void 0 === su ? void 0 : su.playAdBeforeMatchmaking),
          afterAnother: null !== du.current || (0, XE.c)()
        };
        (0, lE.h)(null);
        const Lu = !(xu = Bu).wasm || void 0 === xu.game || xu.custom || xu.direct || xu.discord || xu.adBeforeMatchmaking || xu.afterAnother ? null : () => {
          ! function(uu, Eu) {
            (0, lE.h)({
              key: (0, lE.e)(uu, Eu),
              settled: Promise.all([Zu.matchmakingLibrariesPromise, Mu.userContextManager.getCurrentUserContext()]).then((ju => {
                let [su, Uu] = ju;
                if (void 0 === su.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return su.matchmakeForAhead(uu, Eu, Uu)
              })).catch((uu => ({
                result: au.c.errorWithCode(String(uu), cu.j.REQUEST_TO_MATCHMAKING, {
                  error: uu,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(Bu.lobbyName, Bu.game)
        };
        var xu;
        const Hu = null !== du.current;
        du.current = null, (0, XE.e)(null);
        const Au = () => {
          mu ? (0, fu.navigateToHomePage)() : (Wu.current = Hu, lu(-1))
        };
        let yu = !1;
        const Ru = ju.pathname + ju.search,
          sE = () => !yu && eu.current === Ru;
        return (0, lE.c)(Gu, Lu, (uu => {
          let {
            shouldMatchmake: Eu,
            discordContext: ju
          } = uu;
          sE() && (Eu ? gE(null !== ju && void 0 !== ju ? ju : bu.lobbyName, ju ? "classic" : bu.gameNameWithVariation, bu.directJoinVmUrl).then((uu => {
            if (null !== uu && sE())
              if (uu.isError()) {
                var Eu;
                const ju = uu.asError(),
                  su = null !== (Eu = ju.debugResult.severity) && void 0 !== Eu ? Eu : "high";
                if ((0, CE.b)(ju.debugResult.error)) return void CE.e.reload();
                if (ju.code === cu.j.SHADER_PACK) return void(0, jE.d)(ju.message, lu);
                const Zu = Uu.d.get("gameEntrySource"),
                  fu = ju.code === cu.j.INITIALISE_WEBGL ? (0, Ku.b)() : null,
                  {
                    error: Nu
                  } = ju.debugResult;
                let Ou;
                if (pu(Xu, ju)) Ou = Promise.resolve(!1);
                else if (null !== fu) Ou = (0, Ku.i)(fu);
                else if (Nu instanceof ru.o) Ou = (0, Vu.g)(Nu);
                else {
                  let uu;
                  switch (su) {
                    case "low":
                      uu = "face-diagonal-mouth";
                      break;
                    case "medium":
                      uu = "face-worried";
                      break;
                    case "high":
                      uu = "face-dizzy"
                  }
                  const Eu = Nu instanceof NE.f;
                  let Uu = ju.message;
                  Eu ? Uu = Xu("general:gameFilesStalled") : ju.debugResult.gameServerUnreachable && (Uu = Xu((0, ou.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  Ou = Cu.NotificationProvider.showPromptPopup({
                    icon: uu,
                    title: cu.v[ju.code],
                    subtitle: (0, Tu.jsxs)(Tu.Fragment, {
                      children: [Uu, Nu instanceof Error && !Eu && (0, Tu.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Tu.jsx)(vu.b, {
                          errorString: Nu.stack
                        })
                      })]
                    }),
                    confirmText: Xu("general:tryAgain"),
                    cancelText: Xu("general:cancel")
                  }).getResult().then((uu => !0 === uu))
                }
                Ou.then((uu => {
                  if (uu) {
                    (0, Uu.j)(Zu);
                    const uu = (0, Qu.c)(bu.gameNameWithVariation, bu.lobbyName);
                    "low" === su ? lu(uu) : (0, Pu.reloadBloxd)(uu)
                  }
                })), qu.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Au()
              } else {
                const {
                  gameNameWithVariation: Eu,
                  lobbyName: ju
                } = uu.getValue();
                du.current = {
                  gameNameWithVariation: Eu,
                  lobbyName: ju
                };
                const su = (0, Qu.c)(Eu, ju);
                lu(su, {
                  replace: !0
                })
              }
          })).catch((uu => {
            if (!sE()) return;
            Cu.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Tu.jsxs)(Tu.Fragment, {
                children: [Xu("homePage:pleaseCopyError"), (0, Tu.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Tu.jsx)(vu.b, {
                    errorString: uu.stack
                  })
                })]
              }),
              confirmText: Xu("general:tryAgain"),
              cancelText: Xu("general:cancel")
            }).getResult().then((uu => {
              !0 === uu && (0, Pu.reloadBloxd)((0, Qu.c)(bu.gameNameWithVariation, bu.lobbyName))
            })), Au()
          })) : lu(-1))
        }), sE), () => {
          yu = !0
        }
      }), [Nu, ju.search, ju.pathname]), (0, Xu.useEffect)((() => {
        wu.disableFullscreen && (0, mu.g)() ? (0, mu.j)() : !wu.disableFullscreen && (0, mu.i)() && (0, mu.p)({
          automatic: !0
        })
      }), [Gu, wu]), (0, Xu.useEffect)((() => {
        "inGame" === Gu && OE()
      }), [Gu, wu]), (0, Xu.useEffect)((() => {
        "inGame" !== Gu && Uu.d.set({
          openInGameMenuName: null
        })
      }), [Gu]);
      const Fu = function(uu) {
        const Eu = (0, Uu.i)(uu),
          [ju, su] = (0, Xu.useState)(0),
          [Zu, qu] = (0, Xu.useState)(!1);
        (0, lu.f)("gameJoined", (() => {
          (0, Uu.i)(Uu.d.get("gameState")) && (su((uu => uu + 1)), qu(!0))
        })), (0, Xu.useEffect)((() => {
          Eu || qu(!1)
        }), [Eu]);
        const fu = "inGame" === uu;
        return {
          mounted: fu || Eu && Zu,
          shown: fu,
          key: ju
        }
      }(Gu);
      return (0, Tu.jsx)(Tu.Fragment, {
        children: Fu.mounted && (0, Tu.jsx)(Zu.InGameUi, {
          shown: Fu.shown
        }, Fu.key)
      })
    }
  },
  5146: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(1255);
    async function Uu(uu) {
      const Eu = await fetch(`${su.clientSideServerUrls.s3Url}/${uu}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Eu.status || 403 === Eu.status) return null;
      if (!Eu.ok) throw new Error(`Failed to download the texture pack (${Eu.status})`);
      return await Eu.json()
    }
  },
  9145: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    var su = ju(1376),
      Uu = ju(1278),
      Zu = ju(649);

    function Xu(uu) {
      return uu = function(uu, Eu) {
        var ju;
        const su = new URLSearchParams(Eu),
          Uu = su.get("lobby"),
          Zu = su.get("vm"),
          Xu = null !== (ju = Uu) && void 0 !== ju ? ju : uu.lobbyName,
          lu = null !== Zu && void 0 !== Zu ? Zu : uu.directJoinVmUrl;
        if (Xu === uu.lobbyName && lu === uu.directJoinVmUrl) return uu;
        return {
          ...uu,
          lobbyName: Xu,
          directJoinVmUrl: lu
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), uu = function(uu) {
        if ((0, Zu.H)(uu.directJoinVmUrl)) return uu;
        const Eu = (0, Uu._)(uu.directJoinVmUrl);
        null === Eu && (uu.directJoinVmUrl = void 0);
        return uu
      }(uu = function(uu) {
        if ((0, Zu.H)(uu.gameNameWithVariation)) return uu;
        return uu.gameNameWithVariation = (0, su.o)(uu.gameNameWithVariation), uu
      }(uu))
    }
  },
  9136: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Uu
    });
    let su = !1;

    function Uu() {
      su = !0
    }

    function Zu() {
      return su
    }
  },
  9152: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => Uu,
      h: () => Zu,
      j: () => Xu
    });
    let su = null;

    function Uu(uu, Eu) {
      return `${Eu}\n${null!==uu&&void 0!==uu?uu:""}`
    }

    function Zu(uu) {
      su = uu
    }

    function Xu(uu) {
      const Eu = su;
      return su = null, null !== Eu && Eu.key === uu ? Eu.settled : null
    }

    function lu(uu, Eu, ju, su) {
      let Uu = !1;
      null !== Eu && setTimeout((() => {
        su() && !Uu && Eu()
      }), 0), uu.then((uu => {
        Uu = !0, ju(uu)
      }))
    }
  },
  9130: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      g: () => cu,
      k: () => Ou
    });
    var su = ju(3336),
      Uu = ju(2401),
      Zu = ju(2222),
      Xu = ju(4830),
      lu = ju(3691),
      qu = ju(9136);
    let fu = null;

    function Cu() {
      return Promise.all([ju.e(75), ju.e(78), ju.e(90), ju.e(215), ju.e(214), ju.e(160), ju.e(137), ju.e(198), ju.e(140), ju.e(88), ju.e(275), ju.e(64)]).then((() => ju(40930)))
    }

    function bu() {
      Promise.all([ju.e(73), ju.e(76), ju.e(75), ju.e(74), ju.e(90), ju.e(87), ju.e(273), ju.e(191), ju.e(228), ju.e(252), ju.e(275), ju.e(47)]).then((() => ju(41221))).catch((() => {}))
    }

    function cu() {
      return Xu.e.cancelDownloadForJoin(), (0, lu.e)(), (0, Uu.e)(), (0, qu.h)(), (0, Zu.j)(), bu(), Promise.all([ju.e(78), ju.e(90), ju.e(215), ju.e(214), ju.e(137), ju.e(140), ju.e(59)]).then((() => ju(41269))).then((uu => {
        let {
          startJoinLoad: Eu
        } = uu;
        Eu()
      }), (() => {})), fu ??= Cu().then((uu => (uu.startWasmPlay(), uu.followPageUiPack((uu => {
        su.d.showGamePack(uu)
      })), uu)), (uu => {
        throw fu = null, uu
      })), fu
    }

    function Nu() {
      return bu(), ju.e(276).then((() => ju(41276))).catch((() => {})), Cu().then((() => {}))
    }

    function Ou() {
      return Cu().then((uu => {
        uu.startWasmPreviews(), uu.prefetchWasmPreviews()
      }))
    }
  },
  9128: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Xu,
      j: () => lu,
      n: () => fu,
      q: () => qu
    });
    var su = ju(202),
      Uu = ju(4809);

    function Zu(uu) {
      return Xu(uu) === su.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function lu(uu) {
      var Eu;
      return null !== (Eu = Object.keys(Uu.b).find((Eu => Uu.b[Eu] === uu))) && void 0 !== Eu ? Eu : null
    }

    function qu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);