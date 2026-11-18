export const id = 98;
export const ids = [98];
export const modules = {
  8032: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => ob
    });
    var Uy = Wy(1370),
      hy = Wy(19),
      fy = Wy(3856),
      Zy = Wy(55),
      cb = Wy(1268);
    var Py = Wy(1572),
      oy = Wy(1356),
      By = Wy(1207),
      Ky = Wy(1042),
      ey = Wy(3838);
    const qb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var sy = Wy(3788),
      Sy = Wy(143),
      Ey = Wy(987),
      ly = Wy(23),
      mb = Wy(1109),
      Cy = Wy(1496),
      Ty = Wy(94),
      Vy = Wy(1162),
      Jy = Wy(1260),
      gb = Wy(3727),
      Gy = Wy(3615),
      Oy = Wy(2575),
      Ry = Wy(952);
    const vb = "https://discord.gg/playbloxd";

    function ib(yb) {
      let {
        failure: bb
      } = yb;
      const {
        t: Wy
      } = (0, Ky.D)(), Uy = "chosen" === bb.packSource, hy = Ty.featureFlags.useDiscord ? Uy ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Uy ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Ry.jsxs)(Ry.Fragment, {
        children: [Wy(hy, {
          code: bb.code
        }), "default" !== bb.packSource && bb.code === Oy.j.Error && (0, Ry.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [Wy("texturePackLoad:details"), " ", bb.reason]
        }), Ty.featureFlags.useDiscord && (0, Ry.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Ry.jsx)("a", {
            href: vb,
            target: "_blank",
            rel: "noreferrer",
            children: Wy("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var My = Wy(1949),
      Yy = Wy(1185),
      Xy = Wy(615),
      ny = Wy(1086),
      uy = Wy(865),
      rb = Wy(1339),
      Hy = Wy(1080),
      ab = Wy(2609),
      Fy = Wy(2476),
      py = Wy(1209),
      Ly = Wy(1194),
      Qy = Wy(4191),
      jb = Wy(8035),
      Dy = Wy(2311);

    function tb(yb) {
      let {
        onApply: bb,
        onSkip: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Ky.D)();
      return (0, Zy.useEffect)((() => {
        Dy.f.skipPlayWait()
      }), []), (0, Ry.jsx)(py.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Ry.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Uy("customTexturePack:downloadPrompt"), (0, Ry.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Uy("customTexturePack:authorWarning")
          }), (0, Ry.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Uy("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: bb
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Wy
        }
      })
    }
    async function wy() {
      let yb = !1;
      const bb = By.NotificationProvider.showCustomPopup({
        body: bb => (0, Ry.jsx)(tb, {
          onApply: () => {
            yb = !0, bb()
          },
          onSkip: bb
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await bb.getResult(), yb
    }
    let kb = {
      wanted: !1
    };
    let Ny = null;

    function zb(yb) {
      yb.setGamePackConfirm(wy), Ny = yb
    }
    var Iy = Wy(2793);

    function xb(yb) {
      let {
        schematicId: bb,
        texturePackKey: Wy,
        onClose: Uy
      } = yb;
      const [hy, fy] = (0, Zy.useState)("prompt"), [cb, Py] = (0, Zy.useState)(null), oy = (0, Iy.d)();

      function By() {
        Uy()
      }
      return "prompt" === hy ? (0, Ry.jsx)(tb, {
        onApply: async function() {
          fy("downloading");
          try {
            const yb = await async function(yb, bb) {
              const Wy = await (0, Qy.c)(bb);
              if (Wy) return {
                pack: Wy,
                key: bb
              };
              const Uy = await Ey.userContextManager.getCurrentUserContext(),
                hy = (await rb.c.getGame(Uy, yb, !0)).customTexturePackKey;
              if (!hy) return null;
              const fy = await (0, Qy.c)(hy);
              if (!fy) throw new Error("The texture pack could not be found");
              return {
                pack: fy,
                key: hy
              }
            }(bb, Wy);
            if (!oy.current) return;
            if (!yb) return void Uy();
            if ((0, ab.m)(yb.pack)) return void fy("refused");
            Fy.e.setFromJson(yb.pack, "customGame"), await Fy.e.saveTemporaryTexturePack(yb.key), oy.current && (0, Cy.reloadBloxd)()
          } catch (yb) {
            Py(yb instanceof Error ? yb.message : String(yb)), fy("error")
          }
        },
        onSkip: By
      }) : "downloading" === hy ? (0, Ry.jsx)(py.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Ry.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Ry.jsx)(Ly.e, {
            showFace: !0
          })
        })
      }) : "error" === hy ? (0, Ry.jsx)(py.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: cb,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: By
        }
      }) : "refused" === hy ? (0, Ry.jsx)(py.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: By
        }
      }) : null
    }
    var Ay = Wy(8043),
      dy = Wy(3584),
      yW = Wy(1516),
      bW = Wy(2539),
      Wb = Wy(2739),
      Ub = Wy(3883),
      hb = Wy(1156),
      fb = Wy(562),
      Zb = Wy(582);

    function cW() {
      const yb = hy.d.get("clientEscMenuOptions");
      Py.gameBridge.send("setLookSensitivity", hy.d.get("isTouchScreen") ? (0, Zb.l)(yb) : yb.mouseSensitivity)
    }
    async function Pb(yb, bb, Wy) {
      const Uy = (0, Ub.H)(bb);
      async function Zy(yb, bb, Wy, Uy) {
        var Zy;
        if (Uy.aborted) return null;
        null === hy.d.get("gameEntrySource") && (0, hy.g)("directPlayUrl"), fb.q && (0, jb.d)().catch((() => {})), hy.d.set({
          gameState: "findingLobby"
        }), ly.g.EZ("loadingScreenState", "loadingPage:findingLobby");
        const cb = await Ey.userContextManager.getCurrentUserContext();
        Py.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: bb,
          discordContext: yb instanceof ny.g ? yb.getSerialisableParams() : null
        }), (0, yW.d)();
        const oy = await async function(yb, bb, Wy, Uy, hy) {
          try {
            await fy.reqLibsLoadedPromise
          } catch (Zy) {
            return mb.c.errorWithCode(Zy.toString(), Sy.i.LOAD_REQUIRED_LIBS, {
              error: Zy,
              severity: "medium"
            })
          }
          return ly.g.EZ("matchmakeAndPlayStepCompleted", {
            step: Sy.i.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, fy.matchmakeAndPlayMaybeUnloaded)(yb, bb, Wy, Uy, hy)
        }(yb, bb, Wy, cb, Uy), By = oy.isError() ? oy.asError() : null;
        if (By && !By.debugResult.RZ) {
          console.log("Failed to join lobby:", By.message);
          const yb = "timedOut" === By.debugResult.gameServerUnreachable;
          (0, bW.c)("matchmake_failed", By.message, yb ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Sy.i[By.code])
        }
        if (Uy.aborted) return Py.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== By && void 0 !== By && By.debugResult.RZ) return console.log("Join cancelled:", By.message), null;
        if (By) return oy;
        const {
          gameNameWithVariation: Ky,
          lobbyName: ey,
          addLobbyToRecentlyPlayed: qb
        } = oy.getValue();
        let sy;
        cW(), (0, hb.v)().setGameViewShown(!0);
        const Cy = null === (Zy = Xy.b[Ky]) || void 0 === Zy ? void 0 : Zy.recentlyPlayedAs;
        return sy = (0, uy.p)(Ky) ? {
          type: "custom",
          name: "",
          schematicId: (0, uy.v)(Ky),
          recentLobbies: []
        } : "classic" !== Ky || (0, Hy.P)(ey) ? Cy ? {
          type: "bloxd",
          gameNameWithVariation: Cy,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Ky,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, rb.c.addRecentlyPlayedGame(cb, sy, qb && !Cy ? ey : void 0).then((yb => {
          cb.setRecentlyPlayedGames(yb)
        })).catch((yb => {
          console.error("Failed to record recently played game", yb)
        })), (0, Vy.I)(), oy
      }
      return Uy && (0, hy.g)("updateRejoin"), (0, Wb.g)((async hy => {
        try {
          let cb = yb,
            Py = await Zy(cb, bb, Wy, hy);
          for (let yb = 0; Uy && yb < Ub.l; yb++) {
            var fy;
            if (null === (fy = Py) || void 0 === fy || !fy.isError() || Py.asError().code !== Sy.i.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Ub.K)((0, Ub.s)(yb), hy)) return Py;
            cb = (0, Ub.w)(cb, yb + 1, "string" === typeof cb && (0, Hy.P)(cb)), Py = await Zy(cb, bb, Wy, hy)
          }
          return Py
        } catch (cb) {
          if ((0, bW.c)("matchmake_failed", cb, "unexpected"), Py.gameBridge.send("leaveGame", {
              reloadPath: hy.aborted ? null : "/"
            }), hy.aborted) return null;
          throw cb
        }
      }), (async yb => {
        var Wy;
        if (Uy) return;
        const hy = (0, Vy.y)();
        null !== hy && (await hy, yb.aborted) || (null !== (Wy = Xy.b[bb]) && void 0 !== Wy && Wy.playAdBeforeMatchmaking ? (Dy.f.skipPlayWait(), await new Promise((yb => {
          (0, Vy.Y)((() => {
            yb(!0)
          }), "video_start")
        }))) : (0, Vy.Y)((() => {}), "video_start"))
      }))
    }

    function ob() {
      const {
        t: yb
      } = (0, Ky.D)(), bb = (0, oy.useNavigatePreserveSearch)(), Wy = (0, Uy.y)(), ly = (0, Uy.F)(), mb = (0, Zy.useRef)({
        t: yb,
        navigate: bb
      });
      mb.current = {
        t: yb,
        navigate: bb
      };
      const vb = (0, Zy.useRef)("");
      vb.current = Wy.pathname + Wy.search;
      const {
        gameState: Xy,
        clientEscMenuOptions: ny
      } = (0, hy.h)(["gameState", "clientEscMenuOptions"]), ab = (0, Zy.useRef)(null), py = (0, Zy.useRef)(null);
      var Ly;
      (0, Wb.h)(), (0, Wb.j)(), Ly = fb.q, (0, Zy.useEffect)((() => {
        if (!Ly) return;
        let yb = !0;
        return (0, jb.d)().then((bb => {
          yb && zb(bb)
        })).catch((() => {})), () => {
          var bb;
          yb = !1, kb.wanted = !1, null === (bb = Ny) || void 0 === bb || bb.setGamePackConfirm(null), Ny = null
        }
      }), [Ly]), (0, Zy.useEffect)((() => {
        var yb;
        (0, fy.needGameClientNow)();
        const {
          t: bb,
          navigate: Uy
        } = mb.current, Zy = (0, Ay.e)(ly, Wy.search);
        if (ly.lobbyName && !new URLSearchParams(Wy.search).has("lobby")) return void Uy((0, Yy.b)(Zy.gameNameWithVariation, Zy.lobbyName), {
          replace: !0
        });
        let cb = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Wy.pathname) {
          const yb = hy.d.get("discordContext");
          if (!yb) return void Uy("/");
          cb = sy.c.setupDiscordLobby(yb, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: yb
          }))).catch((bb => (console.error("Failed to setup discord lobby", bb), {
            shouldMatchmake: !1,
            discordContext: yb
          })))
        } else if (!Zy.gameNameWithVariation || !(0, Hy.M)(Zy.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Zy.gameNameWithVariation}`), void Uy(-1);
        if (Zy.gameNameWithVariation === ab.current && Zy.lobbyName === py.current) return;
        if (Py.gameBridge.latest("connectedGame").replay) return void(0, Wb.f)(null);
        (0, Vy.D)(), hy.d.set({
          gameState: "loadingScreen"
        });
        const oy = function() {
          kb.wanted = !1;
          const yb = {
            wanted: !0
          };
          return kb = yb, () => yb.wanted
        }();
        if ("releaseCountdown" === (null === (yb = (0, My.f)(Zy.gameNameWithVariation)) || void 0 === yb ? void 0 : yb.type)) return console.error(`Game hasn't been released yet: ${Zy.gameNameWithVariation}`), void Uy(-1);
        const Ky = Zy.gameNameWithVariation;
        if (Ky && (fb.q || (0, uy.p)(Ky))) {
          const yb = fb.q ? Promise.all([(0, jb.d)(), Ey.userContextManager.getCurrentUserContext()]).then((yb => {
            let [bb, Wy] = yb;
            if (oy()) return zb(bb), bb.packForGame(Ky, Wy, oy)
          })) : async function(yb) {
            await Fy.e.indexedDbValuesAreLoaded();
            const bb = await Ey.userContextManager.getCurrentUserContext(),
              Wy = (0, uy.v)(yb);
            let Uy;
            try {
              Uy = await rb.c.getGame(bb, Wy, !0)
            } catch (Zy) {
              return void console.error("Failed to get game", Zy)
            }
            const hy = Uy.customTexturePackKey;
            if (!hy) return void(Fy.e.isUsingTemporaryTexturePack() && ((0, Cy.reloadBloxd)(), await new Promise((() => {}))));
            if (Fy.e.isUsingTemporaryTexturePack() && Fy.e.getTemporaryTexturePackSource() === hy) return;
            const fy = By.NotificationProvider.showCustomPopup({
              body: yb => (0, Ry.jsx)(xb, {
                schematicId: Wy,
                texturePackKey: hy,
                onClose: yb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await fy.getResult()
          }(Ky), bb = cb;
          cb = yb.catch((yb => {
            console.error("Failed to check for custom texture pack", yb)
          })).then((() => bb))
        }(0, Wb.f)(null);
        let Jy = !1;
        const Xy = Wy.pathname + Wy.search,
          ny = () => !Jy && vb.current === Xy;
        return cb.then((yb => {
          let {
            shouldMatchmake: Wy,
            discordContext: fy
          } = yb;
          ny() && (Wy ? Pb(null !== fy && void 0 !== fy ? fy : Zy.lobbyName, fy ? "classic" : Zy.gameNameWithVariation, Zy.directJoinVmUrl).then((yb => {
            var Wy, fy;
            if (null !== yb && ny())
              if (yb.isError()) {
                var cb;
                const oy = yb.asError(),
                  Ky = null !== (cb = oy.debugResult.severity) && void 0 !== cb ? cb : "high";
                if (oy.code === Sy.i.SHADER_PACK) return void(0, dy.c)(oy.message, Uy);
                const sy = hy.d.get("gameEntrySource"),
                  Ey = oy.code === Sy.i.INITIALISE_WEBGL ? (0, Gy.e)() : null,
                  {
                    error: ly
                  } = oy.debugResult,
                  mb = oy.code === Sy.i.REQUEST_TO_MATCHMAKING ? function(yb) {
                    var bb;
                    return null !== (bb = Object.keys(ey.d).find((bb => ey.d[bb] === yb))) && void 0 !== bb ? bb : null
                  }(oy.message) : null;
                let Vy;
                if (null !== mb) By.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: bb((fy = mb, "notWhitelisted" === fy ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: bb(qb[mb]),
                  confirmText: bb("general:ok"),
                  cancelText: ""
                }), Vy = Promise.resolve(!1);
                else if (null !== Ey) Vy = (0, Gy.k)(Ey);
                else if (ly instanceof Oy.k) Wy = ly, Vy = By.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Ry.jsx)(ib, {
                    failure: Wy
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((yb => !0 === yb));
                else {
                  let yb;
                  switch (Ky) {
                    case "low":
                      yb = "face-diagonal-mouth";
                      break;
                    case "medium":
                      yb = "face-worried";
                      break;
                    case "high":
                      yb = "face-dizzy"
                  }
                  Vy = By.NotificationProvider.showPromptPopup({
                    icon: yb,
                    title: Sy.x[oy.code],
                    subtitle: (0, Ry.jsxs)(Ry.Fragment, {
                      children: [oy.debugResult.gameServerUnreachable ? bb((0, Ty.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : oy.message, oy.debugResult.error instanceof Error && (0, Ry.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Ry.jsx)(gb.c, {
                          errorString: oy.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: bb("general:tryAgain"),
                    cancelText: bb("general:cancel")
                  }).getResult().then((yb => !0 === yb))
                }
                Vy.then((yb => {
                  if (yb) {
                    (0, hy.g)(sy);
                    const yb = (0, Yy.b)(Zy.gameNameWithVariation, Zy.lobbyName);
                    "low" === Ky ? Uy(yb) : (0, Cy.reloadBloxd)(yb)
                  }
                })), Py.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Uy(-1)
              } else {
                ab.current = yb.getValue().gameNameWithVariation, py.current = yb.getValue().lobbyName;
                const bb = (0, Yy.b)(ab.current, yb.getValue().lobbyName);
                Uy(bb, {
                  replace: !0
                })
              }
          })).catch((yb => {
            if (!ny()) return;
            By.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Ry.jsxs)(Ry.Fragment, {
                children: [bb("homePage:pleaseCopyError"), (0, Ry.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Ry.jsx)(gb.c, {
                    errorString: yb.stack
                  })
                })]
              }),
              confirmText: bb("general:tryAgain"),
              cancelText: bb("general:cancel")
            }).getResult().then((yb => {
              !0 === yb && (0, Cy.reloadBloxd)((0, Yy.b)(Zy.gameNameWithVariation, Zy.lobbyName))
            })), Uy(-1)
          })) : Uy(-1))
        })), () => {
          Jy = !0
        }
      }), [ly, Wy.search, Wy.pathname]), (0, Zy.useEffect)((() => {
        ny.disableFullscreen && (0, Jy.b)() ? (0, Jy.e)() : !ny.disableFullscreen && (0, Jy.d)() && (0, Jy.j)()
      }), [Xy, ny]), (0, Zy.useEffect)((() => {
        "inGame" === Xy && cW()
      }), [Xy, ny]), (0, Zy.useEffect)((() => {
        "inGame" !== Xy && hy.d.set({
          openInGameMenuName: null
        })
      }), [Xy]);
      const Qy = function(yb) {
        const bb = (0, hy.e)(yb),
          [Wy, Uy] = (0, Zy.useState)(0),
          [fy, Py] = (0, Zy.useState)(!1);
        (0, cb.i)("gameJoined", (() => {
          (0, hy.e)(hy.d.get("gameState")) && (Uy((yb => yb + 1)), Py(!0))
        })), (0, Zy.useEffect)((() => {
          bb || Py(!1)
        }), [bb]);
        const oy = "inGame" === yb;
        return {
          mounted: oy || bb && fy,
          shown: oy,
          key: Wy
        }
      }(Xy);
      return (0, Ry.jsx)(Ry.Fragment, {
        children: Qy.mounted && (0, Ry.jsx)(fy.InGameUi, {
          shown: Qy.shown
        }, Qy.key)
      })
    }
  },
  4191: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(1052);
    async function hy(yb) {
      const bb = await fetch(`${Uy.clientSideServerUrls.s3Url}/${yb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === bb.status || 403 === bb.status) return null;
      if (!bb.ok) throw new Error(`Failed to download the texture pack (${bb.status})`);
      return await bb.json()
    }
  },
  8043: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(1185),
      hy = Wy(1080),
      fy = Wy(547);

    function Zy(yb) {
      return yb = function(yb, bb) {
        var Wy;
        const Uy = new URLSearchParams(bb),
          hy = Uy.get("lobby"),
          fy = Uy.get("vm"),
          Zy = null !== (Wy = hy) && void 0 !== Wy ? Wy : yb.lobbyName,
          cb = null !== fy && void 0 !== fy ? fy : yb.directJoinVmUrl;
        if (Zy === yb.lobbyName && cb === yb.directJoinVmUrl) return yb;
        return {
          ...yb,
          lobbyName: Zy,
          directJoinVmUrl: cb
        }
      }(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), yb = function(yb) {
        if ((0, fy.D)(yb.directJoinVmUrl)) return yb;
        const bb = (0, hy.Z)(yb.directJoinVmUrl);
        null === bb && (yb.directJoinVmUrl = void 0);
        return yb
      }(yb = function(yb) {
        if ((0, fy.D)(yb.gameNameWithVariation)) return yb;
        return yb.gameNameWithVariation = (0, Uy.i)(yb.gameNameWithVariation), yb
      }(yb))
    }
  },
  8035: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      f: () => Py,
      i: () => cb
    });
    var Uy = Wy(2476);
    let hy = null,
      fy = !1;

    function Zy() {
      return fy = !0, Promise.all([Wy.e(63), Wy.e(66), Wy.e(65), Wy.e(64), Wy.e(76), Wy.e(75), Wy.e(227), Wy.e(200), Wy.e(224), Wy.e(225), Wy.e(43)]).then((() => Wy(39184))).catch((() => {})), Promise.all([Wy.e(126), Wy.e(125), Wy.e(51)]).then((() => Wy(39266))).then((yb => {
        let {
          startJoinLoad: bb
        } = yb;
        bb()
      }), (() => {})), hy ??= Promise.all([Wy.e(65), Wy.e(126), Wy.e(76), Wy.e(177), Wy.e(125), Wy.e(77), Wy.e(121), Wy.e(225), Wy.e(56)]).then((() => Wy(39340))).then((yb => (yb.startWasmPlay(), yb.followPageUiPack((yb => {
        Uy.e.showGamePack(yb)
      })), yb)), (yb => {
        throw hy = null, yb
      })), hy
    }

    function cb() {
      return fy
    }

    function Py() {
      return Promise.all([Wy.e(65), Wy.e(126), Wy.e(76), Wy.e(177), Wy.e(125), Wy.e(77), Wy.e(121), Wy.e(225), Wy.e(56)]).then((() => Wy(39340))).then((yb => {
        yb.startWasmPreviews(), yb.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);