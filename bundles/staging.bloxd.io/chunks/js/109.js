export const id = 109;
export const ids = [109];
export const modules = {
  8854: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => uE
    });
    var Yq = gq(1512),
      lq = gq(24),
      Oq = gq(4486),
      mq = gq(57),
      xq = gq(1416);
    var Aq = gq(1904),
      cq = gq(1498),
      uq = gq(1336),
      Bq = gq(1183),
      Wq = gq(163),
      Nq = gq(1214),
      aq = gq(2330),
      Vq = gq(8858);

    function dq(qq, Eq) {
      const gq = !0 === Eq.debugResult.gameRefused,
        Yq = gq || Eq.code === Wq.h.REQUEST_TO_MATCHMAKING ? (0, Vq.i)(Eq.message) : null;
      return null !== Yq ? (jq(qq, qq((0, Vq.l)(Yq)), qq(Vq.j[Yq])), !0) : !!gq && (async function(qq) {
        const {
          gameNameWithVariation: Eq,
          lobbyName: gq,
          shownLobbyName: Yq
        } = Aq.gameBridge.latest("connectedGame"), lq = "classic" === Eq && (0, Nq.I)(gq) ? Yq : await (0, aq.e)(qq, Eq, gq);
        return "" !== lq ? qq("general:cantJoinGame", {
          game: lq
        }) : qq("general:cantJoinThisGame")
      }(qq).then((gq => {
        jq(qq, gq, Eq.message)
      })), !0)
    }

    function jq(qq, Eq, gq) {
      uq.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Eq,
        subtitle: gq,
        confirmText: qq("general:ok"),
        cancelText: ""
      })
    }
    var Hq = gq(4413),
      oq = gq(1109),
      Pq = gq(31),
      Qq = gq(1234),
      yq = gq(1710),
      tq = gq(96),
      rq = gq(1298),
      vq = gq(1405),
      hq = gq(4352),
      nq = gq(4183),
      bq = gq(3135),
      iq = gq(1070);
    const Zq = "https://discord.gg/playbloxd";

    function fq(qq) {
      let {
        failure: Eq
      } = qq;
      const {
        t: gq
      } = (0, Bq.v)(), Yq = "chosen" === Eq.packSource, lq = tq.featureFlags.useDiscord ? Yq ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Yq ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, iq.jsxs)(iq.Fragment, {
        children: [gq(lq, {
          code: Eq.code
        }), "default" !== Eq.packSource && Eq.code === bq.k.Error && (0, iq.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [gq("texturePackLoad:details"), " ", Eq.reason]
        }), tq.featureFlags.useDiscord && (0, iq.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, iq.jsx)("a", {
            href: Zq,
            target: "_blank",
            rel: "noreferrer",
            children: gq("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var Mq = gq(1313),
      Tq = gq(729),
      zq = gq(1216),
      Sq = gq(987),
      pq = gq(1477),
      Gq = gq(3174),
      Lq = gq(3056),
      Jq = gq(1339),
      kq = gq(1326),
      Rq = gq(4821),
      Uq = gq(8860),
      Fq = gq(2879);

    function sq(qq) {
      let {
        onApply: Eq,
        onSkip: gq
      } = qq;
      const {
        t: Yq
      } = (0, Bq.v)();
      return (0, mq.useEffect)((() => {
        Fq.d.skipPlayWait()
      }), []), (0, iq.jsx)(Jq.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, iq.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Yq("customTexturePack:downloadPrompt"), (0, iq.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Yq("customTexturePack:authorWarning")
          }), (0, iq.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Yq("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Eq
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: gq
        }
      })
    }
    async function Xq() {
      let qq = !1;
      const Eq = uq.NotificationProvider.showCustomPopup({
        body: Eq => (0, iq.jsx)(sq, {
          onApply: () => {
            qq = !0, Eq()
          },
          onSkip: Eq
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Eq.getResult(), qq
    }
    let wq = {
      wanted: !1
    };
    let Kq = null;

    function Cq(qq) {
      qq.setGamePackConfirm(Xq), Kq = qq
    }
    var Iq = gq(3369);

    function eq(qq) {
      let {
        schematicId: Eq,
        texturePackKey: gq,
        onClose: Yq
      } = qq;
      const [lq, Oq] = (0, mq.useState)("prompt"), [xq, Aq] = (0, mq.useState)(null), cq = (0, Iq.c)();

      function uq() {
        Yq()
      }
      return "prompt" === lq ? (0, iq.jsx)(sq, {
        onApply: async function() {
          Oq("downloading");
          try {
            const qq = await async function(qq, Eq) {
              const gq = await (0, Rq.e)(Eq);
              if (gq) return {
                pack: gq,
                key: Eq
              };
              const Yq = await oq.userContextManager.getCurrentUserContext(),
                lq = (await pq.e.getGame(Yq, qq, !0)).customTexturePackKey;
              if (!lq) return null;
              const Oq = await (0, Rq.e)(lq);
              if (!Oq) throw new Error("The texture pack could not be found");
              return {
                pack: Oq,
                key: lq
              }
            }(Eq, gq);
            if (!cq.current) return;
            if (!qq) return void Yq();
            if ((0, Gq.k)(qq.pack)) return void Oq("refused");
            Lq.c.setFromJson(qq.pack, "customGame"), await Lq.c.saveTemporaryTexturePack(qq.key), cq.current && (0, yq.reloadBloxd)()
          } catch (qq) {
            Aq(qq instanceof Error ? qq.message : String(qq)), Oq("error")
          }
        },
        onSkip: uq
      }) : "downloading" === lq ? (0, iq.jsx)(Jq.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, iq.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, iq.jsx)(kq.e, {
            showFace: !0
          })
        })
      }) : "error" === lq ? (0, iq.jsx)(Jq.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: xq,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: uq
        }
      }) : "refused" === lq ? (0, iq.jsx)(Jq.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: uq
        }
      }) : null
    }
    var Dq = gq(8876),
      qE = gq(4158),
      EE = gq(1748),
      gE = gq(2853),
      YE = gq(3311),
      lE = gq(4508),
      OE = gq(1283),
      mE = gq(611),
      xE = gq(700);

    function AE() {
      const qq = lq.b.get("clientEscMenuOptions");
      Aq.gameBridge.send("setLookSensitivity", lq.b.get("isTouchScreen") ? (0, xE.j)(qq) : qq.mouseSensitivity)
    }
    async function cE(qq, Eq, gq) {
      const Yq = (0, lE.J)(Eq);
      async function mq(qq, Eq, gq, Yq) {
        var mq;
        if (Yq.aborted) return null;
        null === lq.b.get("gameEntrySource") && (0, lq.f)("directPlayUrl"), mE.v && (0, Uq.d)().catch((() => {})), lq.b.set({
          gameState: "findingLobby"
        }), Pq.i.TV("loadingScreenState", "loadingPage:findingLobby");
        const xq = await oq.userContextManager.getCurrentUserContext();
        Aq.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Eq,
          discordContext: qq instanceof zq.f ? qq.getSerialisableParams() : null
        }), (0, EE.e)();
        const cq = await async function(qq, Eq, gq, Yq, lq) {
          try {
            await Oq.reqLibsLoadedPromise
          } catch (mq) {
            return Qq.b.errorWithCode(mq.toString(), Wq.h.LOAD_REQUIRED_LIBS, {
              error: mq,
              severity: "medium"
            })
          }
          return Pq.i.TV("matchmakeAndPlayStepCompleted", {
            step: Wq.h.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Oq.matchmakeAndPlayMaybeUnloaded)(qq, Eq, gq, Yq, lq)
        }(qq, Eq, gq, xq, Yq), uq = cq.isError() ? cq.asError() : null;
        if (uq && !uq.debugResult.lE) {
          console.log("Failed to join lobby:", uq.message);
          const qq = "timedOut" === uq.debugResult.gameServerUnreachable;
          (0, gE.d)("matchmake_failed", uq.message, qq ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Wq.h[uq.code])
        }
        if (Yq.aborted) return Aq.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== uq && void 0 !== uq && uq.debugResult.lE) return console.log("Join cancelled:", uq.message), null;
        if (uq) return cq;
        const {
          gameNameWithVariation: Bq,
          lobbyName: aq,
          addLobbyToRecentlyPlayed: Vq
        } = cq.getValue();
        let dq;
        AE(), (0, OE.D)().setGameViewShown(!0);
        const jq = null === (mq = Tq.c[Bq]) || void 0 === mq ? void 0 : mq.recentlyPlayedAs;
        return dq = (0, Sq.j)(Bq) ? {
          type: "custom",
          name: "",
          schematicId: (0, Sq.o)(Bq),
          recentLobbies: []
        } : "classic" !== Bq || (0, Nq.N)(aq) ? jq ? {
          type: "bloxd",
          gameNameWithVariation: jq,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Bq,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, pq.e.addRecentlyPlayedGame(xq, dq, Vq && !jq ? aq : void 0).then((qq => {
          xq.setRecentlyPlayedGames(qq)
        })).catch((qq => {
          console.error("Failed to record recently played game", qq)
        })), (0, rq.U)(), cq
      }
      return Yq && (0, lq.f)("updateRejoin"), (0, YE.j)((async lq => {
        try {
          let xq = qq,
            Aq = await mq(xq, Eq, gq, lq);
          for (let qq = 0; Yq && qq < lE.h; qq++) {
            var Oq;
            if (null === (Oq = Aq) || void 0 === Oq || !Oq.isError() || Aq.asError().code !== Wq.h.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, lE.N)((0, lE.q)(qq), lq)) return Aq;
            xq = (0, lE.u)(xq, qq + 1, "string" === typeof xq && (0, Nq.N)(xq)), Aq = await mq(xq, Eq, gq, lq)
          }
          return Aq
        } catch (xq) {
          if ((0, gE.d)("matchmake_failed", xq, "unexpected"), Aq.gameBridge.send("leaveGame", {
              reloadPath: lq.aborted ? null : "/"
            }), lq.aborted) return null;
          throw xq
        }
      }), (async qq => {
        var gq;
        if (Yq) return;
        const lq = (0, rq.L)();
        null !== lq && (await lq, qq.aborted) || (null !== (gq = Tq.c[Eq]) && void 0 !== gq && gq.playAdBeforeMatchmaking ? (Fq.d.skipPlayWait(), await new Promise((qq => {
          (0, rq.ob)((() => {
            qq(!0)
          }), "video_start")
        }))) : (0, rq.ob)((() => {}), "video_start"))
      }))
    }

    function uE() {
      const {
        t: qq
      } = (0, Bq.v)(), Eq = (0, cq.useNavigatePreserveSearch)(), gq = (0, Yq.q)(), Vq = (0, Yq.v)(), jq = (0, mq.useRef)({
        t: qq,
        navigate: Eq
      });
      jq.current = {
        t: qq,
        navigate: Eq
      };
      const Pq = (0, mq.useRef)("");
      Pq.current = gq.pathname + gq.search;
      const {
        gameState: Qq,
        clientEscMenuOptions: Zq
      } = (0, lq.j)(["gameState", "clientEscMenuOptions"]), Tq = (0, mq.useRef)(null), zq = (0, mq.useRef)(null);
      var Gq;
      (0, YE.k)(), (0, YE.l)(), Gq = mE.v, (0, mq.useEffect)((() => {
        if (!Gq) return;
        let qq = !0;
        return (0, Uq.d)().then((Eq => {
          qq && Cq(Eq)
        })).catch((() => {})), () => {
          var Eq;
          qq = !1, wq.wanted = !1, null === (Eq = Kq) || void 0 === Eq || Eq.setGamePackConfirm(null), Kq = null
        }
      }), [Gq]), (0, mq.useEffect)((() => {
        var qq;
        (0, Oq.needGameClientNow)();
        const {
          t: Eq,
          navigate: Yq
        } = jq.current, mq = (0, Dq.e)(Vq, gq.search);
        if (Vq.lobbyName && !new URLSearchParams(gq.search).has("lobby")) return void Yq((0, Mq.e)(mq.gameNameWithVariation, mq.lobbyName), {
          replace: !0
        });
        let xq = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === gq.pathname) {
          const qq = lq.b.get("discordContext");
          if (!qq) return void Yq("/");
          xq = Hq.d.setupDiscordLobby(qq, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: qq
          }))).catch((Eq => (console.error("Failed to setup discord lobby", Eq), {
            shouldMatchmake: !1,
            discordContext: qq
          })))
        } else if (!mq.gameNameWithVariation || !(0, Nq.K)(mq.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${mq.gameNameWithVariation}`), void Yq(-1);
        if (mq.gameNameWithVariation === Tq.current && mq.lobbyName === zq.current) return;
        if (Aq.gameBridge.latest("connectedGame").replay) return void(0, YE.h)(null);
        (0, rq.O)(), lq.b.set({
          gameState: "loadingScreen"
        });
        const cq = function() {
          wq.wanted = !1;
          const qq = {
            wanted: !0
          };
          return wq = qq, () => qq.wanted
        }();
        if ("releaseCountdown" === (null === (qq = (0, aq.g)(mq.gameNameWithVariation)) || void 0 === qq ? void 0 : qq.type)) return console.error(`Game hasn't been released yet: ${mq.gameNameWithVariation}`), void Yq(-1);
        const Bq = mq.gameNameWithVariation;
        if (Bq && (mE.v || (0, Sq.j)(Bq))) {
          const qq = mE.v ? Promise.all([(0, Uq.d)(), oq.userContextManager.getCurrentUserContext()]).then((qq => {
            let [Eq, gq] = qq;
            if (cq()) return Cq(Eq), Eq.packForGame(Bq, gq, cq)
          })) : async function(qq) {
            await Lq.c.indexedDbValuesAreLoaded();
            const Eq = await oq.userContextManager.getCurrentUserContext(),
              gq = (0, Sq.o)(qq);
            let Yq;
            try {
              Yq = await pq.e.getGame(Eq, gq, !0)
            } catch (mq) {
              return void console.error("Failed to get game", mq)
            }
            const lq = Yq.customTexturePackKey;
            if (!lq) return void(Lq.c.isUsingTemporaryTexturePack() && ((0, yq.reloadBloxd)(), await new Promise((() => {}))));
            if (Lq.c.isUsingTemporaryTexturePack() && Lq.c.getTemporaryTexturePackSource() === lq) return;
            const Oq = uq.NotificationProvider.showCustomPopup({
              body: qq => (0, iq.jsx)(eq, {
                schematicId: gq,
                texturePackKey: lq,
                onClose: qq
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Oq.getResult()
          }(Bq), Eq = xq;
          xq = qq.catch((qq => {
            console.error("Failed to check for custom texture pack", qq)
          })).then((() => Eq))
        }(0, YE.h)(null);
        let Qq = !1;
        const vq = gq.pathname + gq.search,
          Zq = () => !Qq && Pq.current === vq;
        return xq.then((qq => {
          let {
            shouldMatchmake: gq,
            discordContext: Oq
          } = qq;
          Zq() && (gq ? cE(null !== Oq && void 0 !== Oq ? Oq : mq.lobbyName, Oq ? "classic" : mq.gameNameWithVariation, mq.directJoinVmUrl).then((qq => {
            var gq;
            if (null !== qq && Zq())
              if (qq.isError()) {
                var Oq;
                const xq = qq.asError(),
                  cq = null !== (Oq = xq.debugResult.severity) && void 0 !== Oq ? Oq : "high";
                if (xq.code === Wq.h.SHADER_PACK) return void(0, qE.c)(xq.message, Yq);
                const Bq = lq.b.get("gameEntrySource"),
                  Nq = xq.code === Wq.h.INITIALISE_WEBGL ? (0, nq.d)() : null,
                  {
                    error: aq
                  } = xq.debugResult;
                let Vq;
                if (dq(Eq, xq)) Vq = Promise.resolve(!1);
                else if (null !== Nq) Vq = (0, nq.g)(Nq);
                else if (aq instanceof bq.m) gq = aq, Vq = uq.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, iq.jsx)(fq, {
                    failure: gq
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((qq => !0 === qq));
                else {
                  let qq;
                  switch (cq) {
                    case "low":
                      qq = "face-diagonal-mouth";
                      break;
                    case "medium":
                      qq = "face-worried";
                      break;
                    case "high":
                      qq = "face-dizzy"
                  }
                  Vq = uq.NotificationProvider.showPromptPopup({
                    icon: qq,
                    title: Wq.u[xq.code],
                    subtitle: (0, iq.jsxs)(iq.Fragment, {
                      children: [xq.debugResult.gameServerUnreachable ? Eq((0, tq.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : xq.message, xq.debugResult.error instanceof Error && (0, iq.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, iq.jsx)(hq.b, {
                          errorString: xq.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Eq("general:tryAgain"),
                    cancelText: Eq("general:cancel")
                  }).getResult().then((qq => !0 === qq))
                }
                Vq.then((qq => {
                  if (qq) {
                    (0, lq.f)(Bq);
                    const qq = (0, Mq.e)(mq.gameNameWithVariation, mq.lobbyName);
                    "low" === cq ? Yq(qq) : (0, yq.reloadBloxd)(qq)
                  }
                })), Aq.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Yq(-1)
              } else {
                Tq.current = qq.getValue().gameNameWithVariation, zq.current = qq.getValue().lobbyName;
                const Eq = (0, Mq.e)(Tq.current, qq.getValue().lobbyName);
                Yq(Eq, {
                  replace: !0
                })
              }
          })).catch((qq => {
            if (!Zq()) return;
            uq.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, iq.jsxs)(iq.Fragment, {
                children: [Eq("homePage:pleaseCopyError"), (0, iq.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, iq.jsx)(hq.b, {
                    errorString: qq.stack
                  })
                })]
              }),
              confirmText: Eq("general:tryAgain"),
              cancelText: Eq("general:cancel")
            }).getResult().then((qq => {
              !0 === qq && (0, yq.reloadBloxd)((0, Mq.e)(mq.gameNameWithVariation, mq.lobbyName))
            })), Yq(-1)
          })) : Yq(-1))
        })), () => {
          Qq = !0
        }
      }), [Vq, gq.search, gq.pathname]), (0, mq.useEffect)((() => {
        Zq.disableFullscreen && (0, vq.c)() ? (0, vq.f)() : !Zq.disableFullscreen && (0, vq.d)() && (0, vq.o)()
      }), [Qq, Zq]), (0, mq.useEffect)((() => {
        "inGame" === Qq && AE()
      }), [Qq, Zq]), (0, mq.useEffect)((() => {
        "inGame" !== Qq && lq.b.set({
          openInGameMenuName: null
        })
      }), [Qq]);
      const Jq = function(qq) {
        const Eq = (0, lq.c)(qq),
          [gq, Yq] = (0, mq.useState)(0),
          [Oq, Aq] = (0, mq.useState)(!1);
        (0, xq.f)("gameJoined", (() => {
          (0, lq.c)(lq.b.get("gameState")) && (Yq((qq => qq + 1)), Aq(!0))
        })), (0, mq.useEffect)((() => {
          Eq || Aq(!1)
        }), [Eq]);
        const cq = "inGame" === qq;
        return {
          mounted: cq || Eq && Oq,
          shown: cq,
          key: gq
        }
      }(Qq);
      return (0, iq.jsx)(iq.Fragment, {
        children: Jq.mounted && (0, iq.jsx)(Oq.InGameUi, {
          shown: Jq.shown
        }, Jq.key)
      })
    }
  },
  4821: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq
    });
    var Yq = gq(1195);
    async function lq(qq) {
      const Eq = await fetch(`${Yq.clientSideServerUrls.s3Url}/${qq}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Eq.status || 403 === Eq.status) return null;
      if (!Eq.ok) throw new Error(`Failed to download the texture pack (${Eq.status})`);
      return await Eq.json()
    }
  },
  8876: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(1313),
      lq = gq(1214),
      Oq = gq(598);

    function mq(qq) {
      return qq = function(qq, Eq) {
        var gq;
        const Yq = new URLSearchParams(Eq),
          lq = Yq.get("lobby"),
          Oq = Yq.get("vm"),
          mq = null !== (gq = lq) && void 0 !== gq ? gq : qq.lobbyName,
          xq = null !== Oq && void 0 !== Oq ? Oq : qq.directJoinVmUrl;
        if (mq === qq.lobbyName && xq === qq.directJoinVmUrl) return qq;
        return {
          ...qq,
          lobbyName: mq,
          directJoinVmUrl: xq
        }
      }(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), qq = function(qq) {
        if ((0, Oq.H)(qq.directJoinVmUrl)) return qq;
        const Eq = (0, lq.gb)(qq.directJoinVmUrl);
        null === Eq && (qq.directJoinVmUrl = void 0);
        return qq
      }(qq = function(qq) {
        if ((0, Oq.H)(qq.gameNameWithVariation)) return qq;
        return qq.gameNameWithVariation = (0, Yq.i)(qq.gameNameWithVariation), qq
      }(qq))
    }
  },
  8867: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      h: () => lq
    });
    let Yq = !1;

    function lq() {
      Yq = !0
    }

    function Oq() {
      return Yq
    }
  },
  8860: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Bq
    });
    var Yq = gq(3056),
      lq = gq(2254),
      Oq = gq(3090),
      mq = gq(4472),
      xq = gq(3383),
      Aq = gq(8867);
    let cq = null;

    function uq() {
      return mq.b.cancelDownloadForJoin(), (0, xq.b)(), (0, lq.g)(), (0, Aq.h)(), (0, Oq.d)(), Promise.all([gq.e(70), gq.e(73), gq.e(72), gq.e(71), gq.e(84), gq.e(261), gq.e(200), gq.e(218), gq.e(239), gq.e(213), gq.e(46)]).then((() => gq(40404))).catch((() => {})), Promise.all([gq.e(75), gq.e(133), gq.e(88), gq.e(56)]).then((() => gq(40483))).then((qq => {
        let {
          startJoinLoad: Eq
        } = qq;
        Eq()
      }), (() => {})), cq ??= Promise.all([gq.e(72), gq.e(75), gq.e(130), gq.e(74), gq.e(133), gq.e(263), gq.e(187), gq.e(88), gq.e(87), gq.e(86), gq.e(213), gq.e(61)]).then((() => gq(40581))).then((qq => (qq.startWasmPlay(), qq.followPageUiPack((qq => {
        Yq.c.showGamePack(qq)
      })), qq)), (qq => {
        throw cq = null, qq
      })), cq
    }

    function Bq() {
      return Promise.all([gq.e(72), gq.e(75), gq.e(130), gq.e(74), gq.e(133), gq.e(263), gq.e(187), gq.e(88), gq.e(87), gq.e(86), gq.e(213), gq.e(61)]).then((() => gq(40581))).then((qq => {
        qq.startWasmPreviews(), qq.prefetchWasmPreviews()
      }))
    }
  },
  8858: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      f: () => mq,
      i: () => xq,
      j: () => cq,
      l: () => Aq
    });
    var Yq = gq(190),
      lq = gq(4456);

    function Oq(qq) {
      return mq(qq) === Yq.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mq(qq) {
      return "object" === typeof qq && null !== qq ? qq.code : void 0
    }

    function xq(qq) {
      var Eq;
      return null !== (Eq = Object.keys(lq.c).find((Eq => lq.c[Eq] === qq))) && void 0 !== Eq ? Eq : null
    }

    function Aq(qq) {
      return "notWhitelisted" === qq ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cq = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);