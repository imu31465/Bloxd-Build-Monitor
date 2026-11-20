export const id = 109;
export const ids = [109];
export const modules = {
  8624: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => au
    });
    var Bb = hb(1431),
      Ob = hb(13),
      Gb = hb(4420),
      Ub = hb(49),
      Lb = hb(1348);
    var Yb = hb(1811),
      Sb = hb(1415),
      ab = hb(1249),
      Hb = hb(1095),
      wb = hb(148),
      Zb = hb(1124),
      Xb = hb(2233),
      pb = hb(8626);

    function ob(bb, ub) {
      const hb = !0 === ub.debugResult.gameRefused,
        Bb = hb || ub.code === wb.k.REQUEST_TO_MATCHMAKING ? (0, pb.h)(ub.message) : null;
      return null !== Bb ? (Ab(bb, bb((0, pb.n)(Bb)), bb(pb.k[Bb])), !0) : !!hb && (async function(bb) {
        const {
          gameNameWithVariation: ub,
          lobbyName: hb,
          shownLobbyName: Bb
        } = Yb.gameBridge.latest("connectedGame"), Ob = "classic" === ub && (0, Zb.S)(hb) ? Bb : await (0, Xb.b)(bb, ub, hb);
        return "" !== Ob ? bb("general:cantJoinGame", {
          game: Ob
        }) : bb("general:cantJoinThisGame")
      }(bb).then((hb => {
        Ab(bb, hb, ub.message)
      })), !0)
    }

    function Ab(bb, ub, hb) {
      ab.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ub,
        subtitle: hb,
        confirmText: bb("general:ok"),
        cancelText: ""
      })
    }
    var lb = hb(4353),
      Kb = hb(1038),
      Wb = hb(16),
      Cb = hb(1141),
      db = hb(1622),
      rb = hb(86),
      jb = hb(1206),
      nb = hb(1336),
      Db = hb(4287),
      xb = hb(4111),
      zb = hb(3036),
      gb = hb(1007);
    const ib = "https://discord.gg/playbloxd";

    function vb(bb) {
      let {
        failure: ub
      } = bb;
      const {
        t: hb
      } = (0, Hb.K)(), Bb = "chosen" === ub.packSource, Ob = rb.featureFlags.useDiscord ? Bb ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Bb ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, gb.jsxs)(gb.Fragment, {
        children: [hb(Ob, {
          code: ub.code
        }), "default" !== ub.packSource && ub.code === zb.j.Error && (0, gb.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [hb("texturePackLoad:details"), " ", ub.reason]
        }), rb.featureFlags.useDiscord && (0, gb.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, gb.jsx)("a", {
            href: ib,
            target: "_blank",
            rel: "noreferrer",
            children: hb("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var tb = hb(1227),
      Jb = hb(701),
      eb = hb(1127),
      Nb = hb(934),
      sb = hb(1398),
      Mb = hb(3076),
      mb = hb(2941),
      Ib = hb(1255),
      Pb = hb(1242),
      qb = hb(4756),
      Eb = hb(8631),
      yb = hb(2758);

    function Vb(bb) {
      let {
        onApply: ub,
        onSkip: hb
      } = bb;
      const {
        t: Bb
      } = (0, Hb.K)();
      return (0, Ub.useEffect)((() => {
        yb.f.skipPlayWait()
      }), []), (0, gb.jsx)(Ib.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, gb.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Bb("customTexturePack:downloadPrompt"), (0, gb.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Bb("customTexturePack:authorWarning")
          }), (0, gb.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Bb("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: ub
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: hb
        }
      })
    }
    async function Fb() {
      let bb = !1;
      const ub = ab.NotificationProvider.showCustomPopup({
        body: ub => (0, gb.jsx)(Vb, {
          onApply: () => {
            bb = !0, ub()
          },
          onSkip: ub
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await ub.getResult(), bb
    }
    let fb = {
      wanted: !1
    };
    let kb = null;

    function Tb(bb) {
      bb.setGamePackConfirm(Fb), kb = bb
    }
    var cb = hb(3278);

    function Qb(bb) {
      let {
        schematicId: ub,
        texturePackKey: hb,
        onClose: Bb
      } = bb;
      const [Ob, Gb] = (0, Ub.useState)("prompt"), [Lb, Yb] = (0, Ub.useState)(null), Sb = (0, cb.d)();

      function ab() {
        Bb()
      }
      return "prompt" === Ob ? (0, gb.jsx)(Vb, {
        onApply: async function() {
          Gb("downloading");
          try {
            const bb = await async function(bb, ub) {
              const hb = await (0, qb.e)(ub);
              if (hb) return {
                pack: hb,
                key: ub
              };
              const Bb = await Kb.userContextManager.getCurrentUserContext(),
                Ob = (await sb.e.getGame(Bb, bb, !0)).customTexturePackKey;
              if (!Ob) return null;
              const Gb = await (0, qb.e)(Ob);
              if (!Gb) throw new Error("The texture pack could not be found");
              return {
                pack: Gb,
                key: Ob
              }
            }(ub, hb);
            if (!Sb.current) return;
            if (!bb) return void Bb();
            if ((0, Mb.f)(bb.pack)) return void Gb("refused");
            mb.b.setFromJson(bb.pack, "customGame"), await mb.b.saveTemporaryTexturePack(bb.key), Sb.current && (0, db.reloadBloxd)()
          } catch (bb) {
            Yb(bb instanceof Error ? bb.message : String(bb)), Gb("error")
          }
        },
        onSkip: ab
      }) : "downloading" === Ob ? (0, gb.jsx)(Ib.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, gb.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, gb.jsx)(Pb.c, {
            showFace: !0
          })
        })
      }) : "error" === Ob ? (0, gb.jsx)(Ib.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Lb,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ab
        }
      }) : "refused" === Ob ? (0, gb.jsx)(Ib.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: ab
        }
      }) : null
    }
    var Rb = hb(8642),
      bu = hb(4080),
      uu = hb(1659),
      hu = hb(2736),
      Bu = hb(3218),
      Ou = hb(4444),
      Gu = hb(1193),
      Uu = hb(599),
      Lu = hb(670);

    function Yu() {
      const bb = Ob.d.get("clientEscMenuOptions");
      Yb.gameBridge.send("setLookSensitivity", Ob.d.get("isTouchScreen") ? (0, Lu.l)(bb) : bb.mouseSensitivity)
    }
    async function Su(bb, ub, hb) {
      const Bb = (0, Ou.K)(ub);
      async function Ub(bb, ub, hb, Bb) {
        var Ub;
        if (Bb.aborted) return null;
        null === Ob.d.get("gameEntrySource") && (0, Ob.h)("directPlayUrl"), Uu.o && (0, Eb.c)().catch((() => {})), Ob.d.set({
          gameState: "findingLobby"
        }), Wb.i.vp("loadingScreenState", "loadingPage:findingLobby");
        const Lb = await Kb.userContextManager.getCurrentUserContext();
        Yb.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: ub,
          discordContext: bb instanceof eb.f ? bb.getSerialisableParams() : null
        }), (0, uu.i)();
        const Sb = await async function(bb, ub, hb, Bb, Ob) {
          try {
            await Gb.reqLibsLoadedPromise
          } catch (Ub) {
            return Cb.b.errorWithCode(Ub.toString(), wb.k.LOAD_REQUIRED_LIBS, {
              error: Ub,
              severity: "medium"
            })
          }
          return Wb.i.vp("matchmakeAndPlayStepCompleted", {
            step: wb.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Gb.matchmakeAndPlayMaybeUnloaded)(bb, ub, hb, Bb, Ob)
        }(bb, ub, hb, Lb, Bb), ab = Sb.isError() ? Sb.asError() : null;
        if (ab && !ab.debugResult.Lu) {
          console.log("Failed to join lobby:", ab.message);
          const bb = "timedOut" === ab.debugResult.gameServerUnreachable;
          (0, hu.i)("matchmake_failed", ab.message, bb ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : wb.k[ab.code])
        }
        if (Bb.aborted) return Yb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== ab && void 0 !== ab && ab.debugResult.Lu) return console.log("Join cancelled:", ab.message), null;
        if (ab) return Sb;
        const {
          gameNameWithVariation: Hb,
          lobbyName: Xb,
          addLobbyToRecentlyPlayed: pb
        } = Sb.getValue();
        let ob;
        Yu(), (0, Gu.D)().setGameViewShown(!0);
        const Ab = null === (Ub = Jb.e[Hb]) || void 0 === Ub ? void 0 : Ub.recentlyPlayedAs;
        return ob = (0, Nb.i)(Hb) ? {
          type: "custom",
          name: "",
          schematicId: (0, Nb.p)(Hb),
          recentLobbies: []
        } : "classic" !== Hb || (0, Zb.X)(Xb) ? Ab ? {
          type: "bloxd",
          gameNameWithVariation: Ab,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Hb,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, sb.e.addRecentlyPlayedGame(Lb, ob, pb && !Ab ? Xb : void 0).then((bb => {
          Lb.setRecentlyPlayedGames(bb)
        })).catch((bb => {
          console.error("Failed to record recently played game", bb)
        })), (0, jb.P)(), Sb
      }
      return Bb && (0, Ob.h)("updateRejoin"), (0, Bu.k)((async Ob => {
        try {
          let Lb = bb,
            Yb = await Ub(Lb, ub, hb, Ob);
          for (let bb = 0; Bb && bb < Ou.i; bb++) {
            var Gb;
            if (null === (Gb = Yb) || void 0 === Gb || !Gb.isError() || Yb.asError().code !== wb.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Ou.O)((0, Ou.t)(bb), Ob)) return Yb;
            Lb = (0, Ou.v)(Lb, bb + 1, "string" === typeof Lb && (0, Zb.X)(Lb)), Yb = await Ub(Lb, ub, hb, Ob)
          }
          return Yb
        } catch (Lb) {
          if ((0, hu.i)("matchmake_failed", Lb, "unexpected"), Yb.gameBridge.send("leaveGame", {
              reloadPath: Ob.aborted ? null : "/"
            }), Ob.aborted) return null;
          throw Lb
        }
      }), (async bb => {
        var hb;
        if (Bb) return;
        const Ob = (0, jb.I)();
        null !== Ob && (await Ob, bb.aborted) || (null !== (hb = Jb.e[ub]) && void 0 !== hb && hb.playAdBeforeMatchmaking ? (yb.f.skipPlayWait(), await new Promise((bb => {
          (0, jb.fb)((() => {
            bb(!0)
          }), "video_start")
        }))) : (0, jb.fb)((() => {}), "video_start"))
      }))
    }

    function au() {
      const {
        t: bb
      } = (0, Hb.K)(), ub = (0, Sb.useNavigatePreserveSearch)(), hb = (0, Bb.x)(), pb = (0, Bb.F)(), Ab = (0, Ub.useRef)({
        t: bb,
        navigate: ub
      });
      Ab.current = {
        t: bb,
        navigate: ub
      };
      const Wb = (0, Ub.useRef)("");
      Wb.current = hb.pathname + hb.search;
      const {
        gameState: Cb,
        clientEscMenuOptions: ib
      } = (0, Ob.j)(["gameState", "clientEscMenuOptions"]), Jb = (0, Ub.useRef)(null), eb = (0, Ub.useRef)(null);
      var Mb;
      (0, Bu.l)(), (0, Bu.m)(), Mb = Uu.o, (0, Ub.useEffect)((() => {
        if (!Mb) return;
        let bb = !0;
        return (0, Eb.c)().then((ub => {
          bb && Tb(ub)
        })).catch((() => {})), () => {
          var ub;
          bb = !1, fb.wanted = !1, null === (ub = kb) || void 0 === ub || ub.setGamePackConfirm(null), kb = null
        }
      }), [Mb]), (0, Ub.useEffect)((() => {
        var bb;
        (0, Gb.needGameClientNow)();
        const {
          t: ub,
          navigate: Bb
        } = Ab.current, Ub = (0, Rb.b)(pb, hb.search);
        if (pb.lobbyName && !new URLSearchParams(hb.search).has("lobby")) return void Bb((0, tb.e)(Ub.gameNameWithVariation, Ub.lobbyName), {
          replace: !0
        });
        let Lb = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === hb.pathname) {
          const bb = Ob.d.get("discordContext");
          if (!bb) return void Bb("/");
          Lb = lb.d.setupDiscordLobby(bb, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: bb
          }))).catch((ub => (console.error("Failed to setup discord lobby", ub), {
            shouldMatchmake: !1,
            discordContext: bb
          })))
        } else if (!Ub.gameNameWithVariation || !(0, Zb.W)(Ub.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Ub.gameNameWithVariation}`), void Bb(-1);
        if (Ub.gameNameWithVariation === Jb.current && Ub.lobbyName === eb.current) return;
        if (Yb.gameBridge.latest("connectedGame").replay) return void(0, Bu.g)(null);
        (0, jb.L)(), Ob.d.set({
          gameState: "loadingScreen"
        });
        const Sb = function() {
          fb.wanted = !1;
          const bb = {
            wanted: !0
          };
          return fb = bb, () => bb.wanted
        }();
        if ("releaseCountdown" === (null === (bb = (0, Xb.e)(Ub.gameNameWithVariation)) || void 0 === bb ? void 0 : bb.type)) return console.error(`Game hasn't been released yet: ${Ub.gameNameWithVariation}`), void Bb(-1);
        const Hb = Ub.gameNameWithVariation;
        if (Hb && (Uu.o || (0, Nb.i)(Hb))) {
          const bb = Uu.o ? Promise.all([(0, Eb.c)(), Kb.userContextManager.getCurrentUserContext()]).then((bb => {
            let [ub, hb] = bb;
            if (Sb()) return Tb(ub), ub.packForGame(Hb, hb, Sb)
          })) : async function(bb) {
            await mb.b.indexedDbValuesAreLoaded();
            const ub = await Kb.userContextManager.getCurrentUserContext(),
              hb = (0, Nb.p)(bb);
            let Bb;
            try {
              Bb = await sb.e.getGame(ub, hb, !0)
            } catch (Ub) {
              return void console.error("Failed to get game", Ub)
            }
            const Ob = Bb.customTexturePackKey;
            if (!Ob) return void(mb.b.isUsingTemporaryTexturePack() && ((0, db.reloadBloxd)(), await new Promise((() => {}))));
            if (mb.b.isUsingTemporaryTexturePack() && mb.b.getTemporaryTexturePackSource() === Ob) return;
            const Gb = ab.NotificationProvider.showCustomPopup({
              body: bb => (0, gb.jsx)(Qb, {
                schematicId: hb,
                texturePackKey: Ob,
                onClose: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Gb.getResult()
          }(Hb), ub = Lb;
          Lb = bb.catch((bb => {
            console.error("Failed to check for custom texture pack", bb)
          })).then((() => ub))
        }(0, Bu.g)(null);
        let Cb = !1;
        const nb = hb.pathname + hb.search,
          ib = () => !Cb && Wb.current === nb;
        return Lb.then((bb => {
          let {
            shouldMatchmake: hb,
            discordContext: Gb
          } = bb;
          ib() && (hb ? Su(null !== Gb && void 0 !== Gb ? Gb : Ub.lobbyName, Gb ? "classic" : Ub.gameNameWithVariation, Ub.directJoinVmUrl).then((bb => {
            var hb;
            if (null !== bb && ib())
              if (bb.isError()) {
                var Gb;
                const Lb = bb.asError(),
                  Sb = null !== (Gb = Lb.debugResult.severity) && void 0 !== Gb ? Gb : "high";
                if (Lb.code === wb.k.SHADER_PACK) return void(0, bu.d)(Lb.message, Bb);
                const Hb = Ob.d.get("gameEntrySource"),
                  Zb = Lb.code === wb.k.INITIALISE_WEBGL ? (0, xb.e)() : null,
                  {
                    error: Xb
                  } = Lb.debugResult;
                let pb;
                if (ob(ub, Lb)) pb = Promise.resolve(!1);
                else if (null !== Zb) pb = (0, xb.l)(Zb);
                else if (Xb instanceof zb.n) hb = Xb, pb = ab.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, gb.jsx)(vb, {
                    failure: hb
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((bb => !0 === bb));
                else {
                  let bb;
                  switch (Sb) {
                    case "low":
                      bb = "face-diagonal-mouth";
                      break;
                    case "medium":
                      bb = "face-worried";
                      break;
                    case "high":
                      bb = "face-dizzy"
                  }
                  pb = ab.NotificationProvider.showPromptPopup({
                    icon: bb,
                    title: wb.y[Lb.code],
                    subtitle: (0, gb.jsxs)(gb.Fragment, {
                      children: [Lb.debugResult.gameServerUnreachable ? ub((0, rb.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Lb.message, Lb.debugResult.error instanceof Error && (0, gb.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, gb.jsx)(Db.d, {
                          errorString: Lb.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: ub("general:tryAgain"),
                    cancelText: ub("general:cancel")
                  }).getResult().then((bb => !0 === bb))
                }
                pb.then((bb => {
                  if (bb) {
                    (0, Ob.h)(Hb);
                    const bb = (0, tb.e)(Ub.gameNameWithVariation, Ub.lobbyName);
                    "low" === Sb ? Bb(bb) : (0, db.reloadBloxd)(bb)
                  }
                })), Yb.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Bb(-1)
              } else {
                Jb.current = bb.getValue().gameNameWithVariation, eb.current = bb.getValue().lobbyName;
                const ub = (0, tb.e)(Jb.current, bb.getValue().lobbyName);
                Bb(ub, {
                  replace: !0
                })
              }
          })).catch((bb => {
            if (!ib()) return;
            ab.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, gb.jsxs)(gb.Fragment, {
                children: [ub("homePage:pleaseCopyError"), (0, gb.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, gb.jsx)(Db.d, {
                    errorString: bb.stack
                  })
                })]
              }),
              confirmText: ub("general:tryAgain"),
              cancelText: ub("general:cancel")
            }).getResult().then((bb => {
              !0 === bb && (0, db.reloadBloxd)((0, tb.e)(Ub.gameNameWithVariation, Ub.lobbyName))
            })), Bb(-1)
          })) : Bb(-1))
        })), () => {
          Cb = !0
        }
      }), [pb, hb.search, hb.pathname]), (0, Ub.useEffect)((() => {
        ib.disableFullscreen && (0, nb.e)() ? (0, nb.i)() : !ib.disableFullscreen && (0, nb.g)() && (0, nb.o)()
      }), [Cb, ib]), (0, Ub.useEffect)((() => {
        "inGame" === Cb && Yu()
      }), [Cb, ib]), (0, Ub.useEffect)((() => {
        "inGame" !== Cb && Ob.d.set({
          openInGameMenuName: null
        })
      }), [Cb]);
      const Ib = function(bb) {
        const ub = (0, Ob.f)(bb),
          [hb, Bb] = (0, Ub.useState)(0),
          [Gb, Yb] = (0, Ub.useState)(!1);
        (0, Lb.h)("gameJoined", (() => {
          (0, Ob.f)(Ob.d.get("gameState")) && (Bb((bb => bb + 1)), Yb(!0))
        })), (0, Ub.useEffect)((() => {
          ub || Yb(!1)
        }), [ub]);
        const Sb = "inGame" === bb;
        return {
          mounted: Sb || ub && Gb,
          shown: Sb,
          key: hb
        }
      }(Cb);
      return (0, gb.jsx)(gb.Fragment, {
        children: Ib.mounted && (0, gb.jsx)(Gb.InGameUi, {
          shown: Ib.shown
        }, Ib.key)
      })
    }
  },
  4756: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(1103);
    async function Ob(bb) {
      const ub = await fetch(`${Bb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ub.status || 403 === ub.status) return null;
      if (!ub.ok) throw new Error(`Failed to download the texture pack (${ub.status})`);
      return await ub.json()
    }
  },
  8642: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(1227),
      Ob = hb(1124),
      Gb = hb(588);

    function Ub(bb) {
      return bb = function(bb, ub) {
        var hb;
        const Bb = new URLSearchParams(ub),
          Ob = Bb.get("lobby"),
          Gb = Bb.get("vm"),
          Ub = null !== (hb = Ob) && void 0 !== hb ? hb : bb.lobbyName,
          Lb = null !== Gb && void 0 !== Gb ? Gb : bb.directJoinVmUrl;
        if (Ub === bb.lobbyName && Lb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Ub,
          directJoinVmUrl: Lb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, Gb.J)(bb.directJoinVmUrl)) return bb;
        const ub = (0, Ob.jb)(bb.directJoinVmUrl);
        null === ub && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, Gb.J)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, Bb.o)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8633: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      g: () => Ob
    });
    let Bb = !1;

    function Ob() {
      Bb = !0
    }

    function Gb() {
      return Bb
    }
  },
  8631: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      g: () => Hb
    });
    var Bb = hb(2941),
      Ob = hb(2161),
      Gb = hb(2987),
      Ub = hb(4413),
      Lb = hb(3291),
      Yb = hb(8633);
    let Sb = null;

    function ab() {
      return Ub.c.cancelDownloadForJoin(), (0, Lb.e)(), (0, Ob.h)(), (0, Yb.g)(), (0, Gb.i)(), Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(84), hb.e(261), hb.e(200), hb.e(218), hb.e(239), hb.e(213), hb.e(46)]).then((() => hb(40127))).catch((() => {})), Promise.all([hb.e(75), hb.e(133), hb.e(88), hb.e(56)]).then((() => hb(40192))).then((bb => {
        let {
          startJoinLoad: ub
        } = bb;
        ub()
      }), (() => {})), Sb ??= Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        Bb.b.showGamePack(bb)
      })), bb)), (bb => {
        throw Sb = null, bb
      })), Sb
    }

    function Hb() {
      return Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  8626: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Ub,
      h: () => Lb,
      k: () => Sb,
      n: () => Yb
    });
    var Bb = hb(191),
      Ob = hb(4393);

    function Gb(bb) {
      return Ub(bb) === Bb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ub(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Lb(bb) {
      var ub;
      return null !== (ub = Object.keys(Ob.c).find((ub => Ob.c[ub] === bb))) && void 0 !== ub ? ub : null
    }

    function Yb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Sb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);