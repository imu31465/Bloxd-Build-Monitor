export const id = 108;
export const ids = [108];
export const modules = {
  8570: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => VF
    });
    var Rk = Bk(1473),
      tk = Bk(22),
      ak = Bk(4391),
      Xk = Bk(61),
      bk = Bk(1387);
    var wk = Bk(1847),
      dk = Bk(1459),
      sk = Bk(1300),
      Vk = Bk(1149),
      Jk = Bk(152),
      Ak = Bk(1173),
      ek = Bk(2267),
      yk = Bk(8577);

    function fk(kk, Fk) {
      const Bk = !0 === Fk.debugResult.gameRefused,
        Rk = Bk || Fk.code === Jk.k.REQUEST_TO_MATCHMAKING ? (0, yk.i)(Fk.message) : null;
      return null !== Rk ? (mk(kk, kk((0, yk.o)(Rk)), kk(yk.m[Rk])), !0) : !!Bk && (async function(kk) {
        const {
          gameNameWithVariation: Fk,
          lobbyName: Bk,
          shownLobbyName: Rk
        } = wk.gameBridge.latest("connectedGame"), tk = "classic" === Fk && (0, Ak.F)(Bk) ? Rk : await (0, ek.b)(kk, Fk, Bk);
        return "" !== tk ? kk("general:cantJoinGame", {
          game: tk
        }) : kk("general:cantJoinThisGame")
      }(kk).then((Bk => {
        mk(kk, Bk, Fk.message)
      })), !0)
    }

    function mk(kk, Fk, Bk) {
      sk.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Fk,
        subtitle: Bk,
        confirmText: kk("general:ok"),
        cancelText: ""
      })
    }
    var Wk = Bk(4324),
      vk = Bk(1101),
      ik = Bk(29),
      Yk = Bk(1195),
      Lk = Bk(1650),
      Ok = Bk(98),
      Ek = Bk(1259),
      Sk = Bk(1379),
      Nk = Bk(4265),
      Hk = Bk(4110),
      uk = Bk(3065),
      Mk = Bk(1069);
    const gk = "https://discord.gg/playbloxd";

    function Uk(kk) {
      let {
        failure: Fk
      } = kk;
      const {
        t: Bk
      } = (0, Vk.x)(), Rk = "chosen" === Fk.packSource, tk = Ok.featureFlags.useDiscord ? Rk ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Rk ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Mk.jsxs)(Mk.Fragment, {
        children: [Bk(tk, {
          code: Fk.code
        }), "default" !== Fk.packSource && Fk.code === uk.k.Error && (0, Mk.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [Bk("texturePackLoad:details"), " ", Fk.reason]
        }), Ok.featureFlags.useDiscord && (0, Mk.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Mk.jsx)("a", {
            href: gk,
            target: "_blank",
            rel: "noreferrer",
            children: Bk("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var ck = Bk(1273),
      Gk = Bk(729),
      Tk = Bk(1175),
      rk = Bk(994),
      Dk = Bk(1441),
      zk = Bk(3101),
      Pk = Bk(2943),
      hk = Bk(1308),
      qk = Bk(1288),
      Ck = Bk(4681),
      Zk = Bk(8580),
      pk = Bk(2760);

    function Kk(kk) {
      let {
        onApply: Fk,
        onSkip: Bk
      } = kk;
      const {
        t: Rk
      } = (0, Vk.x)();
      return (0, Xk.useEffect)((() => {
        pk.f.skipPlayWait()
      }), []), (0, Mk.jsx)(hk.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Mk.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Rk("customTexturePack:downloadPrompt"), (0, Mk.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Rk("customTexturePack:authorWarning")
          }), (0, Mk.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Rk("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Fk
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Bk
        }
      })
    }
    async function xk() {
      let kk = !1;
      const Fk = sk.NotificationProvider.showCustomPopup({
        body: Fk => (0, Mk.jsx)(Kk, {
          onApply: () => {
            kk = !0, Fk()
          },
          onSkip: Fk
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Fk.getResult(), kk
    }
    let jk = {
      wanted: !1
    };
    let lk = null;

    function nk(kk) {
      kk.setGamePackConfirm(xk), lk = kk
    }
    var Ik = Bk(3294);

    function Qk(kk) {
      let {
        schematicId: Fk,
        texturePackKey: Bk,
        onClose: Rk
      } = kk;
      const [tk, ak] = (0, Xk.useState)("prompt"), [bk, wk] = (0, Xk.useState)(null), dk = (0, Ik.d)();

      function sk() {
        Rk()
      }
      return "prompt" === tk ? (0, Mk.jsx)(Kk, {
        onApply: async function() {
          ak("downloading");
          try {
            const kk = await async function(kk, Fk) {
              const Bk = await (0, Ck.d)(Fk);
              if (Bk) return {
                pack: Bk,
                key: Fk
              };
              const Rk = await vk.userContextManager.getCurrentUserContext(),
                tk = (await Dk.b.getGame(Rk, kk, !0)).customTexturePackKey;
              if (!tk) return null;
              const ak = await (0, Ck.d)(tk);
              if (!ak) throw new Error("The texture pack could not be found");
              return {
                pack: ak,
                key: tk
              }
            }(Fk, Bk);
            if (!dk.current) return;
            if (!kk) return void Rk();
            if ((0, zk.k)(kk.pack)) return void ak("refused");
            Pk.e.setFromJson(kk.pack, "customGame"), await Pk.e.saveTemporaryTexturePack(kk.key), dk.current && (0, Lk.reloadBloxd)()
          } catch (kk) {
            wk(kk instanceof Error ? kk.message : String(kk)), ak("error")
          }
        },
        onSkip: sk
      }) : "downloading" === tk ? (0, Mk.jsx)(hk.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Mk.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Mk.jsx)(qk.b, {
            showFace: !0
          })
        })
      }) : "error" === tk ? (0, Mk.jsx)(hk.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: bk,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: sk
        }
      }) : "refused" === tk ? (0, Mk.jsx)(hk.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: sk
        }
      }) : null
    }
    var kF = Bk(8588),
      FF = Bk(4074),
      BF = Bk(1684),
      RF = Bk(3037),
      tF = Bk(3239),
      aF = Bk(4409),
      XF = Bk(1245),
      bF = Bk(624),
      wF = Bk(687);

    function dF() {
      const kk = tk.c.get("clientEscMenuOptions");
      wk.gameBridge.send("setLookSensitivity", tk.c.get("isTouchScreen") ? (0, wF.p)(kk) : kk.mouseSensitivity)
    }
    async function sF(kk, Fk, Bk) {
      const Rk = (0, aF.K)(Fk);
      async function Xk(kk, Fk, Bk, Rk) {
        var Xk;
        if (Rk.aborted) return null;
        null === tk.c.get("gameEntrySource") && (0, tk.f)("directPlayUrl"), bF.p && (0, Zk.d)().catch((() => {})), tk.c.set({
          gameState: "findingLobby"
        }), ik.o.Hf("loadingScreenState", "loadingPage:findingLobby");
        const bk = await vk.userContextManager.getCurrentUserContext();
        wk.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Fk,
          discordContext: kk instanceof Tk.f ? kk.getSerialisableParams() : null
        }), (0, BF.g)();
        const dk = await async function(kk, Fk, Bk, Rk, tk) {
          try {
            await ak.reqLibsLoadedPromise
          } catch (Xk) {
            return Yk.c.errorWithCode(Xk.toString(), Jk.k.LOAD_REQUIRED_LIBS, {
              error: Xk,
              severity: "medium"
            })
          }
          return ik.o.Hf("matchmakeAndPlayStepCompleted", {
            step: Jk.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, ak.matchmakeAndPlayMaybeUnloaded)(kk, Fk, Bk, Rk, tk)
        }(kk, Fk, Bk, bk, Rk), sk = dk.isError() ? dk.asError() : null;
        if (sk && !sk.debugResult.yB) {
          console.log("Failed to join lobby:", sk.message);
          const kk = "timedOut" === sk.debugResult.gameServerUnreachable;
          (0, RF.g)("matchmake_failed", sk.message, kk ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Jk.k[sk.code])
        }
        if (Rk.aborted) return wk.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== sk && void 0 !== sk && sk.debugResult.yB) return console.log("Join cancelled:", sk.message), null;
        if (sk) return dk;
        const {
          gameNameWithVariation: Vk,
          lobbyName: ek,
          addLobbyToRecentlyPlayed: yk
        } = dk.getValue();
        let fk;
        dF(), (0, XF.x)().setGameViewShown(!0);
        const mk = null === (Xk = Gk.e[Vk]) || void 0 === Xk ? void 0 : Xk.recentlyPlayedAs;
        return fk = (0, rk.n)(Vk) ? {
          type: "custom",
          name: "",
          schematicId: (0, rk.v)(Vk),
          recentLobbies: []
        } : "classic" !== Vk || (0, Ak.N)(ek) ? mk ? {
          type: "bloxd",
          gameNameWithVariation: mk,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Vk,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, Dk.b.addRecentlyPlayedGame(bk, fk, yk && !mk ? ek : void 0).then((kk => {
          bk.setRecentlyPlayedGames(kk)
        })).catch((kk => {
          console.error("Failed to record recently played game", kk)
        })), (0, Ek.G)(), dk
      }
      return Rk && (0, tk.f)("updateRejoin"), (0, tF.j)((async tk => {
        try {
          let bk = kk,
            wk = await Xk(bk, Fk, Bk, tk);
          for (let kk = 0; Rk && kk < aF.h; kk++) {
            var ak;
            if (null === (ak = wk) || void 0 === ak || !ak.isError() || wk.asError().code !== Jk.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, aF.L)((0, aF.t)(kk), tk)) return wk;
            bk = (0, aF.x)(bk, kk + 1, "string" === typeof bk && (0, Ak.N)(bk)), wk = await Xk(bk, Fk, Bk, tk)
          }
          return wk
        } catch (bk) {
          if ((0, RF.g)("matchmake_failed", bk, "unexpected"), wk.gameBridge.send("leaveGame", {
              reloadPath: tk.aborted ? null : "/"
            }), tk.aborted) return null;
          throw bk
        }
      }), (async kk => {
        var Bk;
        if (Rk) return;
        const tk = (0, Ek.B)();
        null !== tk && (await tk, kk.aborted) || (null !== (Bk = Gk.e[Fk]) && void 0 !== Bk && Bk.playAdBeforeMatchmaking ? (pk.f.skipPlayWait(), await new Promise((kk => {
          (0, Ek.R)((() => {
            kk(!0)
          }), "video_start")
        }))) : (0, Ek.R)((() => {}), "video_start"))
      }))
    }

    function VF() {
      const {
        t: kk
      } = (0, Vk.x)(), Fk = (0, dk.useNavigatePreserveSearch)(), Bk = (0, Rk.s)(), yk = (0, Rk.x)(), mk = (0, Xk.useRef)({
        t: kk,
        navigate: Fk
      });
      mk.current = {
        t: kk,
        navigate: Fk
      };
      const ik = (0, Xk.useRef)("");
      ik.current = Bk.pathname + Bk.search;
      const {
        gameState: Yk,
        clientEscMenuOptions: gk
      } = (0, tk.h)(["gameState", "clientEscMenuOptions"]), Gk = (0, Xk.useRef)(null), Tk = (0, Xk.useRef)(null);
      var zk;
      (0, tF.m)(), (0, tF.p)(), zk = bF.p, (0, Xk.useEffect)((() => {
        if (!zk) return;
        let kk = !0;
        return (0, Zk.d)().then((Fk => {
          kk && nk(Fk)
        })).catch((() => {})), () => {
          var Fk;
          kk = !1, jk.wanted = !1, null === (Fk = lk) || void 0 === Fk || Fk.setGamePackConfirm(null), lk = null
        }
      }), [zk]), (0, Xk.useEffect)((() => {
        var kk;
        (0, ak.needGameClientNow)();
        const {
          t: Fk,
          navigate: Rk
        } = mk.current, Xk = (0, kF.d)(yk, Bk.search);
        if (yk.lobbyName && !new URLSearchParams(Bk.search).has("lobby")) return void Rk((0, ck.b)(Xk.gameNameWithVariation, Xk.lobbyName), {
          replace: !0
        });
        let bk = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Bk.pathname) {
          const kk = tk.c.get("discordContext");
          if (!kk) return void Rk("/");
          bk = Wk.c.setupDiscordLobby(kk, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: kk
          }))).catch((Fk => (console.error("Failed to setup discord lobby", Fk), {
            shouldMatchmake: !1,
            discordContext: kk
          })))
        } else if (!Xk.gameNameWithVariation || !(0, Ak.J)(Xk.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Xk.gameNameWithVariation}`), void Rk(-1);
        if (Xk.gameNameWithVariation === Gk.current && Xk.lobbyName === Tk.current) return;
        if (wk.gameBridge.latest("connectedGame").replay) return void(0, tF.g)(null);
        (0, Ek.C)(), tk.c.set({
          gameState: "loadingScreen"
        });
        const dk = function() {
          jk.wanted = !1;
          const kk = {
            wanted: !0
          };
          return jk = kk, () => kk.wanted
        }();
        if ("releaseCountdown" === (null === (kk = (0, ek.e)(Xk.gameNameWithVariation)) || void 0 === kk ? void 0 : kk.type)) return console.error(`Game hasn't been released yet: ${Xk.gameNameWithVariation}`), void Rk(-1);
        const Vk = Xk.gameNameWithVariation;
        if (Vk && (bF.p || (0, rk.n)(Vk))) {
          const kk = bF.p ? Promise.all([(0, Zk.d)(), vk.userContextManager.getCurrentUserContext()]).then((kk => {
            let [Fk, Bk] = kk;
            if (dk()) return nk(Fk), Fk.packForGame(Vk, Bk, dk)
          })) : async function(kk) {
            await Pk.e.indexedDbValuesAreLoaded();
            const Fk = await vk.userContextManager.getCurrentUserContext(),
              Bk = (0, rk.v)(kk);
            let Rk;
            try {
              Rk = await Dk.b.getGame(Fk, Bk, !0)
            } catch (Xk) {
              return void console.error("Failed to get game", Xk)
            }
            const tk = Rk.customTexturePackKey;
            if (!tk) return void(Pk.e.isUsingTemporaryTexturePack() && ((0, Lk.reloadBloxd)(), await new Promise((() => {}))));
            if (Pk.e.isUsingTemporaryTexturePack() && Pk.e.getTemporaryTexturePackSource() === tk) return;
            const ak = sk.NotificationProvider.showCustomPopup({
              body: kk => (0, Mk.jsx)(Qk, {
                schematicId: Bk,
                texturePackKey: tk,
                onClose: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await ak.getResult()
          }(Vk), Fk = bk;
          bk = kk.catch((kk => {
            console.error("Failed to check for custom texture pack", kk)
          })).then((() => Fk))
        }(0, tF.g)(null);
        let Yk = !1;
        const Sk = Bk.pathname + Bk.search,
          gk = () => !Yk && ik.current === Sk;
        return bk.then((kk => {
          let {
            shouldMatchmake: Bk,
            discordContext: ak
          } = kk;
          gk() && (Bk ? sF(null !== ak && void 0 !== ak ? ak : Xk.lobbyName, ak ? "classic" : Xk.gameNameWithVariation, Xk.directJoinVmUrl).then((kk => {
            var Bk;
            if (null !== kk && gk())
              if (kk.isError()) {
                var ak;
                const bk = kk.asError(),
                  dk = null !== (ak = bk.debugResult.severity) && void 0 !== ak ? ak : "high";
                if (bk.code === Jk.k.SHADER_PACK) return void(0, FF.c)(bk.message, Rk);
                const Vk = tk.c.get("gameEntrySource"),
                  Ak = bk.code === Jk.k.INITIALISE_WEBGL ? (0, Hk.c)() : null,
                  {
                    error: ek
                  } = bk.debugResult;
                let yk;
                if (fk(Fk, bk)) yk = Promise.resolve(!1);
                else if (null !== Ak) yk = (0, Hk.h)(Ak);
                else if (ek instanceof uk.o) Bk = ek, yk = sk.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Mk.jsx)(Uk, {
                    failure: Bk
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((kk => !0 === kk));
                else {
                  let kk;
                  switch (dk) {
                    case "low":
                      kk = "face-diagonal-mouth";
                      break;
                    case "medium":
                      kk = "face-worried";
                      break;
                    case "high":
                      kk = "face-dizzy"
                  }
                  yk = sk.NotificationProvider.showPromptPopup({
                    icon: kk,
                    title: Jk.y[bk.code],
                    subtitle: (0, Mk.jsxs)(Mk.Fragment, {
                      children: [bk.debugResult.gameServerUnreachable ? Fk((0, Ok.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : bk.message, bk.debugResult.error instanceof Error && (0, Mk.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Mk.jsx)(Nk.c, {
                          errorString: bk.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Fk("general:tryAgain"),
                    cancelText: Fk("general:cancel")
                  }).getResult().then((kk => !0 === kk))
                }
                yk.then((kk => {
                  if (kk) {
                    (0, tk.f)(Vk);
                    const kk = (0, ck.b)(Xk.gameNameWithVariation, Xk.lobbyName);
                    "low" === dk ? Rk(kk) : (0, Lk.reloadBloxd)(kk)
                  }
                })), wk.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Rk(-1)
              } else {
                Gk.current = kk.getValue().gameNameWithVariation, Tk.current = kk.getValue().lobbyName;
                const Fk = (0, ck.b)(Gk.current, kk.getValue().lobbyName);
                Rk(Fk, {
                  replace: !0
                })
              }
          })).catch((kk => {
            if (!gk()) return;
            sk.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Mk.jsxs)(Mk.Fragment, {
                children: [Fk("homePage:pleaseCopyError"), (0, Mk.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Mk.jsx)(Nk.c, {
                    errorString: kk.stack
                  })
                })]
              }),
              confirmText: Fk("general:tryAgain"),
              cancelText: Fk("general:cancel")
            }).getResult().then((kk => {
              !0 === kk && (0, Lk.reloadBloxd)((0, ck.b)(Xk.gameNameWithVariation, Xk.lobbyName))
            })), Rk(-1)
          })) : Rk(-1))
        })), () => {
          Yk = !0
        }
      }), [yk, Bk.search, Bk.pathname]), (0, Xk.useEffect)((() => {
        gk.disableFullscreen && (0, Sk.d)() ? (0, Sk.k)() : !gk.disableFullscreen && (0, Sk.h)() && (0, Sk.u)()
      }), [Yk, gk]), (0, Xk.useEffect)((() => {
        "inGame" === Yk && dF()
      }), [Yk, gk]), (0, Xk.useEffect)((() => {
        "inGame" !== Yk && tk.c.set({
          openInGameMenuName: null
        })
      }), [Yk]);
      const hk = function(kk) {
        const Fk = (0, tk.e)(kk),
          [Bk, Rk] = (0, Xk.useState)(0),
          [ak, wk] = (0, Xk.useState)(!1);
        (0, bk.f)("gameJoined", (() => {
          (0, tk.e)(tk.c.get("gameState")) && (Rk((kk => kk + 1)), wk(!0))
        })), (0, Xk.useEffect)((() => {
          Fk || wk(!1)
        }), [Fk]);
        const dk = "inGame" === kk;
        return {
          mounted: dk || Fk && ak,
          shown: dk,
          key: Bk
        }
      }(Yk);
      return (0, Mk.jsx)(Mk.Fragment, {
        children: hk.mounted && (0, Mk.jsx)(ak.InGameUi, {
          shown: hk.shown
        }, hk.key)
      })
    }
  },
  4681: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    var Rk = Bk(1154);
    async function tk(kk) {
      const Fk = await fetch(`${Rk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Fk.status || 403 === Fk.status) return null;
      if (!Fk.ok) throw new Error(`Failed to download the texture pack (${Fk.status})`);
      return await Fk.json()
    }
  },
  8588: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(1273),
      tk = Bk(1173),
      ak = Bk(606);

    function Xk(kk) {
      return kk = function(kk, Fk) {
        var Bk;
        const Rk = new URLSearchParams(Fk),
          tk = Rk.get("lobby"),
          ak = Rk.get("vm"),
          Xk = null !== (Bk = tk) && void 0 !== Bk ? Bk : kk.lobbyName,
          bk = null !== ak && void 0 !== ak ? ak : kk.directJoinVmUrl;
        if (Xk === kk.lobbyName && bk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: Xk,
          directJoinVmUrl: bk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, ak.F)(kk.directJoinVmUrl)) return kk;
        const Fk = (0, tk.$)(kk.directJoinVmUrl);
        null === Fk && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, ak.F)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Rk.h)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8583: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    let Rk = !1;

    function tk() {
      Rk = !0
    }

    function ak() {
      return Rk
    }
  },
  8580: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk,
      e: () => Vk
    });
    var Rk = Bk(2943),
      tk = Bk(2190),
      ak = Bk(2992),
      Xk = Bk(4389),
      bk = Bk(3309),
      wk = Bk(8583);
    let dk = null;

    function sk() {
      return Xk.b.cancelDownloadForJoin(), (0, bk.e)(), (0, tk.g)(), (0, wk.d)(), (0, ak.e)(), Promise.all([Bk.e(69), Bk.e(72), Bk.e(71), Bk.e(70), Bk.e(83), Bk.e(259), Bk.e(199), Bk.e(216), Bk.e(237), Bk.e(212), Bk.e(46)]).then((() => Bk(40095))).catch((() => {})), Promise.all([Bk.e(74), Bk.e(132), Bk.e(87), Bk.e(55)]).then((() => Bk(40163))).then((kk => {
        let {
          startJoinLoad: Fk
        } = kk;
        Fk()
      }), (() => {})), dk ??= Promise.all([Bk.e(71), Bk.e(74), Bk.e(129), Bk.e(73), Bk.e(132), Bk.e(262), Bk.e(186), Bk.e(87), Bk.e(86), Bk.e(85), Bk.e(212), Bk.e(60)]).then((() => Bk(40278))).then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Rk.e.showGamePack(kk)
      })), kk)), (kk => {
        throw dk = null, kk
      })), dk
    }

    function Vk() {
      return Promise.all([Bk.e(71), Bk.e(74), Bk.e(129), Bk.e(73), Bk.e(132), Bk.e(262), Bk.e(186), Bk.e(87), Bk.e(86), Bk.e(85), Bk.e(212), Bk.e(60)]).then((() => Bk(40278))).then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  8577: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      f: () => Xk,
      i: () => bk,
      m: () => dk,
      o: () => wk
    });
    var Rk = Bk(182),
      tk = Bk(4366);

    function ak(kk) {
      return Xk(kk) === Rk.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function bk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(tk.c).find((Fk => tk.c[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function wk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const dk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);