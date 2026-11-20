export const id = 108;
export const ids = [108];
export const modules = {
  8459: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => va
    });
    var Ab = Ub(1446),
      Mb = Ub(19),
      Tb = Ub(4340),
      Eb = Ub(52),
      Yb = Ub(1345);
    var Bb = Ub(1824),
      eb = Ub(1433),
      vb = Ub(1260),
      Lb = Ub(1134),
      Pb = Ub(166),
      Xb = Ub(1162),
      jb = Ub(2224),
      Rb = Ub(8463);

    function kb(bb, ab) {
      const Ub = !0 === ab.debugResult.gameRefused,
        Ab = Ub || ab.code === Pb.k.REQUEST_TO_MATCHMAKING ? (0, Rb.l)(ab.message) : null;
      return null !== Ab ? (yb(bb, bb((0, Rb.t)(Ab)), bb(Rb.p[Ab])), !0) : !!Ub && (async function(bb) {
        const {
          gameNameWithVariation: ab,
          lobbyName: Ub,
          shownLobbyName: Ab
        } = Bb.gameBridge.latest("connectedGame"), Mb = "classic" === ab && (0, Xb.M)(Ub) ? Ab : await (0, jb.b)(bb, ab, Ub);
        return "" !== Mb ? bb("general:cantJoinGame", {
          game: Mb
        }) : bb("general:cantJoinThisGame")
      }(bb).then((Ub => {
        yb(bb, Ub, ab.message)
      })), !0)
    }

    function yb(bb, ab, Ub) {
      vb.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ab,
        subtitle: Ub,
        confirmText: bb("general:ok"),
        cancelText: ""
      })
    }
    var Zb = Ub(4269),
      Db = Ub(1065),
      zb = Ub(22),
      xb = Ub(1192),
      ib = Ub(1639),
      fb = Ub(101),
      mb = Ub(1238),
      pb = Ub(1335),
      Nb = Ub(4205),
      Wb = Ub(4044),
      Hb = Ub(2965),
      Ib = Ub(1023);
    const db = "https://discord.gg/playbloxd";

    function Fb(bb) {
      let {
        failure: ab
      } = bb;
      const {
        t: Ub
      } = (0, Lb.A)(), Ab = "chosen" === ab.packSource, Mb = fb.featureFlags.useDiscord ? Ab ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Ab ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Ib.jsxs)(Ib.Fragment, {
        children: [Ub(Mb, {
          code: ab.code
        }), "default" !== ab.packSource && ab.code === Hb.h.Error && (0, Ib.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [Ub("texturePackLoad:details"), " ", ab.reason]
        }), fb.featureFlags.useDiscord && (0, Ib.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Ib.jsx)("a", {
            href: db,
            target: "_blank",
            rel: "noreferrer",
            children: Ub("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var hb = Ub(1249),
      Gb = Ub(714),
      Qb = Ub(1171),
      qb = Ub(950),
      ub = Ub(1413),
      rb = Ub(2996),
      Kb = Ub(2875),
      ob = Ub(1264),
      lb = Ub(1254),
      tb = Ub(4659),
      wb = Ub(8468),
      sb = Ub(2674);

    function gb(bb) {
      let {
        onApply: ab,
        onSkip: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Lb.A)();
      return (0, Eb.useEffect)((() => {
        sb.g.skipPlayWait()
      }), []), (0, Ib.jsx)(ob.k, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Ib.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Ab("customTexturePack:downloadPrompt"), (0, Ib.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Ab("customTexturePack:authorWarning")
          }), (0, Ib.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Ab("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: ab
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Ub
        }
      })
    }
    async function Cb() {
      let bb = !1;
      const ab = vb.NotificationProvider.showCustomPopup({
        body: ab => (0, Ib.jsx)(gb, {
          onApply: () => {
            bb = !0, ab()
          },
          onSkip: ab
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await ab.getResult(), bb
    }
    let Vb = {
      wanted: !1
    };
    let Ob = null;

    function cb(bb) {
      bb.setGamePackConfirm(Cb), Ob = bb
    }
    var Jb = Ub(3170);

    function nb(bb) {
      let {
        schematicId: ab,
        texturePackKey: Ub,
        onClose: Ab
      } = bb;
      const [Mb, Tb] = (0, Eb.useState)("prompt"), [Yb, Bb] = (0, Eb.useState)(null), eb = (0, Jb.b)();

      function vb() {
        Ab()
      }
      return "prompt" === Mb ? (0, Ib.jsx)(gb, {
        onApply: async function() {
          Tb("downloading");
          try {
            const bb = await async function(bb, ab) {
              const Ub = await (0, tb.e)(ab);
              if (Ub) return {
                pack: Ub,
                key: ab
              };
              const Ab = await Db.userContextManager.getCurrentUserContext(),
                Mb = (await ub.b.getGame(Ab, bb, !0)).customTexturePackKey;
              if (!Mb) return null;
              const Tb = await (0, tb.e)(Mb);
              if (!Tb) throw new Error("The texture pack could not be found");
              return {
                pack: Tb,
                key: Mb
              }
            }(ab, Ub);
            if (!eb.current) return;
            if (!bb) return void Ab();
            if ((0, rb.i)(bb.pack)) return void Tb("refused");
            Kb.c.setFromJson(bb.pack, "customGame"), await Kb.c.saveTemporaryTexturePack(bb.key), eb.current && (0, ib.reloadBloxd)()
          } catch (bb) {
            Bb(bb instanceof Error ? bb.message : String(bb)), Tb("error")
          }
        },
        onSkip: vb
      }) : "downloading" === Mb ? (0, Ib.jsx)(ob.k, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Ib.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Ib.jsx)(lb.b, {
            showFace: !0
          })
        })
      }) : "error" === Mb ? (0, Ib.jsx)(ob.k, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Yb,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: vb
        }
      }) : "refused" === Mb ? (0, Ib.jsx)(ob.k, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: vb
        }
      }) : null
    }
    var Sb = Ub(8483),
      ba = Ub(4021),
      aa = Ub(1677),
      Ua = Ub(2653),
      Aa = Ub(3114),
      Ma = Ub(4357),
      Ta = Ub(1227),
      Ea = Ub(603),
      Ya = Ub(686);

    function Ba() {
      const bb = Mb.c.get("clientEscMenuOptions");
      Bb.gameBridge.send("setLookSensitivity", Mb.c.get("isTouchScreen") ? (0, Ya.o)(bb) : bb.mouseSensitivity)
    }
    async function ea(bb, ab, Ub) {
      const Ab = (0, Ma.B)(ab);
      async function Eb(bb, ab, Ub, Ab) {
        var Eb;
        if (Ab.aborted) return null;
        null === Mb.c.get("gameEntrySource") && (0, Mb.k)("directPlayUrl"), Ea.o && (0, wb.b)().catch((() => {})), Mb.c.set({
          gameState: "findingLobby"
        }), zb.m.IR("loadingScreenState", "loadingPage:findingLobby");
        const Yb = await Db.userContextManager.getCurrentUserContext();
        Bb.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: ab,
          discordContext: bb instanceof Qb.g ? bb.getSerialisableParams() : null
        }), (0, aa.f)();
        const eb = await async function(bb, ab, Ub, Ab, Mb) {
          try {
            await Tb.reqLibsLoadedPromise
          } catch (Eb) {
            return xb.e.errorWithCode(Eb.toString(), Pb.k.LOAD_REQUIRED_LIBS, {
              error: Eb,
              severity: "medium"
            })
          }
          return zb.m.IR("matchmakeAndPlayStepCompleted", {
            step: Pb.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Tb.matchmakeAndPlayMaybeUnloaded)(bb, ab, Ub, Ab, Mb)
        }(bb, ab, Ub, Yb, Ab), vb = eb.isError() ? eb.asError() : null;
        if (vb && !vb.debugResult.xU) {
          console.log("Failed to join lobby:", vb.message);
          const bb = "timedOut" === vb.debugResult.gameServerUnreachable;
          (0, Ua.e)("matchmake_failed", vb.message, bb ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Pb.k[vb.code])
        }
        if (Ab.aborted) return Bb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== vb && void 0 !== vb && vb.debugResult.xU) return console.log("Join cancelled:", vb.message), null;
        if (vb) return eb;
        const {
          gameNameWithVariation: Lb,
          lobbyName: jb,
          addLobbyToRecentlyPlayed: Rb
        } = eb.getValue();
        let kb;
        Ba(), (0, Ta.x)().setGameViewShown(!0);
        const yb = null === (Eb = Gb.d[Lb]) || void 0 === Eb ? void 0 : Eb.recentlyPlayedAs;
        return kb = (0, qb.l)(Lb) ? {
          type: "custom",
          name: "",
          schematicId: (0, qb.p)(Lb),
          recentLobbies: []
        } : "classic" !== Lb || (0, Xb.R)(jb) ? yb ? {
          type: "bloxd",
          gameNameWithVariation: yb,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Lb,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, ub.b.addRecentlyPlayedGame(Yb, kb, Rb && !yb ? jb : void 0).then((bb => {
          Yb.setRecentlyPlayedGames(bb)
        })).catch((bb => {
          console.error("Failed to record recently played game", bb)
        })), (0, mb.L)(), eb
      }
      return Ab && (0, Mb.k)("updateRejoin"), (0, Aa.g)((async Mb => {
        try {
          let Yb = bb,
            Bb = await Eb(Yb, ab, Ub, Mb);
          for (let bb = 0; Ab && bb < Ma.l; bb++) {
            var Tb;
            if (null === (Tb = Bb) || void 0 === Tb || !Tb.isError() || Bb.asError().code !== Pb.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Ma.F)((0, Ma.s)(bb), Mb)) return Bb;
            Yb = (0, Ma.v)(Yb, bb + 1, "string" === typeof Yb && (0, Xb.R)(Yb)), Bb = await Eb(Yb, ab, Ub, Mb)
          }
          return Bb
        } catch (Yb) {
          if ((0, Ua.e)("matchmake_failed", Yb, "unexpected"), Bb.gameBridge.send("leaveGame", {
              reloadPath: Mb.aborted ? null : "/"
            }), Mb.aborted) return null;
          throw Yb
        }
      }), (async bb => {
        var Ub;
        if (Ab) return;
        const Mb = (0, mb.D)();
        null !== Mb && (await Mb, bb.aborted) || (null !== (Ub = Gb.d[ab]) && void 0 !== Ub && Ub.playAdBeforeMatchmaking ? (sb.g.skipPlayWait(), await new Promise((bb => {
          (0, mb.ab)((() => {
            bb(!0)
          }), "video_start")
        }))) : (0, mb.ab)((() => {}), "video_start"))
      }))
    }

    function va() {
      const {
        t: bb
      } = (0, Lb.A)(), ab = (0, eb.useNavigatePreserveSearch)(), Ub = (0, Ab.v)(), Rb = (0, Ab.F)(), yb = (0, Eb.useRef)({
        t: bb,
        navigate: ab
      });
      yb.current = {
        t: bb,
        navigate: ab
      };
      const zb = (0, Eb.useRef)("");
      zb.current = Ub.pathname + Ub.search;
      const {
        gameState: xb,
        clientEscMenuOptions: db
      } = (0, Mb.n)(["gameState", "clientEscMenuOptions"]), Gb = (0, Eb.useRef)(null), Qb = (0, Eb.useRef)(null);
      var rb;
      (0, Aa.h)(), (0, Aa.l)(), rb = Ea.o, (0, Eb.useEffect)((() => {
        if (!rb) return;
        let bb = !0;
        return (0, wb.b)().then((ab => {
          bb && cb(ab)
        })).catch((() => {})), () => {
          var ab;
          bb = !1, Vb.wanted = !1, null === (ab = Ob) || void 0 === ab || ab.setGamePackConfirm(null), Ob = null
        }
      }), [rb]), (0, Eb.useEffect)((() => {
        var bb;
        (0, Tb.needGameClientNow)();
        const {
          t: ab,
          navigate: Ab
        } = yb.current, Eb = (0, Sb.c)(Rb, Ub.search);
        if (Rb.lobbyName && !new URLSearchParams(Ub.search).has("lobby")) return void Ab((0, hb.b)(Eb.gameNameWithVariation, Eb.lobbyName), {
          replace: !0
        });
        let Yb = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Ub.pathname) {
          const bb = Mb.c.get("discordContext");
          if (!bb) return void Ab("/");
          Yb = Zb.c.setupDiscordLobby(bb, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: bb
          }))).catch((ab => (console.error("Failed to setup discord lobby", ab), {
            shouldMatchmake: !1,
            discordContext: bb
          })))
        } else if (!Eb.gameNameWithVariation || !(0, Xb.P)(Eb.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Eb.gameNameWithVariation}`), void Ab(-1);
        if (Eb.gameNameWithVariation === Gb.current && Eb.lobbyName === Qb.current) return;
        if (Bb.gameBridge.latest("connectedGame").replay) return void(0, Aa.e)(null);
        (0, mb.F)(), Mb.c.set({
          gameState: "loadingScreen"
        });
        const eb = function() {
          Vb.wanted = !1;
          const bb = {
            wanted: !0
          };
          return Vb = bb, () => bb.wanted
        }();
        if ("releaseCountdown" === (null === (bb = (0, jb.e)(Eb.gameNameWithVariation)) || void 0 === bb ? void 0 : bb.type)) return console.error(`Game hasn't been released yet: ${Eb.gameNameWithVariation}`), void Ab(-1);
        const Lb = Eb.gameNameWithVariation;
        if (Lb && (Ea.o || (0, qb.l)(Lb))) {
          const bb = Ea.o ? Promise.all([(0, wb.b)(), Db.userContextManager.getCurrentUserContext()]).then((bb => {
            let [ab, Ub] = bb;
            if (eb()) return cb(ab), ab.packForGame(Lb, Ub, eb)
          })) : async function(bb) {
            await Kb.c.indexedDbValuesAreLoaded();
            const ab = await Db.userContextManager.getCurrentUserContext(),
              Ub = (0, qb.p)(bb);
            let Ab;
            try {
              Ab = await ub.b.getGame(ab, Ub, !0)
            } catch (Eb) {
              return void console.error("Failed to get game", Eb)
            }
            const Mb = Ab.customTexturePackKey;
            if (!Mb) return void(Kb.c.isUsingTemporaryTexturePack() && ((0, ib.reloadBloxd)(), await new Promise((() => {}))));
            if (Kb.c.isUsingTemporaryTexturePack() && Kb.c.getTemporaryTexturePackSource() === Mb) return;
            const Tb = vb.NotificationProvider.showCustomPopup({
              body: bb => (0, Ib.jsx)(nb, {
                schematicId: Ub,
                texturePackKey: Mb,
                onClose: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Tb.getResult()
          }(Lb), ab = Yb;
          Yb = bb.catch((bb => {
            console.error("Failed to check for custom texture pack", bb)
          })).then((() => ab))
        }(0, Aa.e)(null);
        let xb = !1;
        const pb = Ub.pathname + Ub.search,
          db = () => !xb && zb.current === pb;
        return Yb.then((bb => {
          let {
            shouldMatchmake: Ub,
            discordContext: Tb
          } = bb;
          db() && (Ub ? ea(null !== Tb && void 0 !== Tb ? Tb : Eb.lobbyName, Tb ? "classic" : Eb.gameNameWithVariation, Eb.directJoinVmUrl).then((bb => {
            var Ub;
            if (null !== bb && db())
              if (bb.isError()) {
                var Tb;
                const Yb = bb.asError(),
                  eb = null !== (Tb = Yb.debugResult.severity) && void 0 !== Tb ? Tb : "high";
                if (Yb.code === Pb.k.SHADER_PACK) return void(0, ba.c)(Yb.message, Ab);
                const Lb = Mb.c.get("gameEntrySource"),
                  Xb = Yb.code === Pb.k.INITIALISE_WEBGL ? (0, Wb.c)() : null,
                  {
                    error: jb
                  } = Yb.debugResult;
                let Rb;
                if (kb(ab, Yb)) Rb = Promise.resolve(!1);
                else if (null !== Xb) Rb = (0, Wb.g)(Xb);
                else if (jb instanceof Hb.i) Ub = jb, Rb = vb.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Ib.jsx)(Fb, {
                    failure: Ub
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((bb => !0 === bb));
                else {
                  let bb;
                  switch (eb) {
                    case "low":
                      bb = "face-diagonal-mouth";
                      break;
                    case "medium":
                      bb = "face-worried";
                      break;
                    case "high":
                      bb = "face-dizzy"
                  }
                  Rb = vb.NotificationProvider.showPromptPopup({
                    icon: bb,
                    title: Pb.x[Yb.code],
                    subtitle: (0, Ib.jsxs)(Ib.Fragment, {
                      children: [Yb.debugResult.gameServerUnreachable ? ab((0, fb.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Yb.message, Yb.debugResult.error instanceof Error && (0, Ib.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Ib.jsx)(Nb.d, {
                          errorString: Yb.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: ab("general:tryAgain"),
                    cancelText: ab("general:cancel")
                  }).getResult().then((bb => !0 === bb))
                }
                Rb.then((bb => {
                  if (bb) {
                    (0, Mb.k)(Lb);
                    const bb = (0, hb.b)(Eb.gameNameWithVariation, Eb.lobbyName);
                    "low" === eb ? Ab(bb) : (0, ib.reloadBloxd)(bb)
                  }
                })), Bb.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Ab(-1)
              } else {
                Gb.current = bb.getValue().gameNameWithVariation, Qb.current = bb.getValue().lobbyName;
                const ab = (0, hb.b)(Gb.current, bb.getValue().lobbyName);
                Ab(ab, {
                  replace: !0
                })
              }
          })).catch((bb => {
            if (!db()) return;
            vb.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Ib.jsxs)(Ib.Fragment, {
                children: [ab("homePage:pleaseCopyError"), (0, Ib.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Ib.jsx)(Nb.d, {
                    errorString: bb.stack
                  })
                })]
              }),
              confirmText: ab("general:tryAgain"),
              cancelText: ab("general:cancel")
            }).getResult().then((bb => {
              !0 === bb && (0, ib.reloadBloxd)((0, hb.b)(Eb.gameNameWithVariation, Eb.lobbyName))
            })), Ab(-1)
          })) : Ab(-1))
        })), () => {
          xb = !0
        }
      }), [Rb, Ub.search, Ub.pathname]), (0, Eb.useEffect)((() => {
        db.disableFullscreen && (0, pb.d)() ? (0, pb.i)() : !db.disableFullscreen && (0, pb.g)() && (0, pb.s)()
      }), [xb, db]), (0, Eb.useEffect)((() => {
        "inGame" === xb && Ba()
      }), [xb, db]), (0, Eb.useEffect)((() => {
        "inGame" !== xb && Mb.c.set({
          openInGameMenuName: null
        })
      }), [xb]);
      const ob = function(bb) {
        const ab = (0, Mb.g)(bb),
          [Ub, Ab] = (0, Eb.useState)(0),
          [Tb, Bb] = (0, Eb.useState)(!1);
        (0, Yb.f)("gameJoined", (() => {
          (0, Mb.g)(Mb.c.get("gameState")) && (Ab((bb => bb + 1)), Bb(!0))
        })), (0, Eb.useEffect)((() => {
          ab || Bb(!1)
        }), [ab]);
        const eb = "inGame" === bb;
        return {
          mounted: eb || ab && Tb,
          shown: eb,
          key: Ub
        }
      }(xb);
      return (0, Ib.jsx)(Ib.Fragment, {
        children: ob.mounted && (0, Ib.jsx)(Tb.InGameUi, {
          shown: ob.shown
        }, ob.key)
      })
    }
  },
  4659: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(1142);
    async function Mb(bb) {
      const ab = await fetch(`${Ab.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ab.status || 403 === ab.status) return null;
      if (!ab.ok) throw new Error(`Failed to download the texture pack (${ab.status})`);
      return await ab.json()
    }
  },
  8483: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(1249),
      Mb = Ub(1162),
      Tb = Ub(591);

    function Eb(bb) {
      return bb = function(bb, ab) {
        var Ub;
        const Ab = new URLSearchParams(ab),
          Mb = Ab.get("lobby"),
          Tb = Ab.get("vm"),
          Eb = null !== (Ub = Mb) && void 0 !== Ub ? Ub : bb.lobbyName,
          Yb = null !== Tb && void 0 !== Tb ? Tb : bb.directJoinVmUrl;
        if (Eb === bb.lobbyName && Yb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Eb,
          directJoinVmUrl: Yb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, Tb.I)(bb.directJoinVmUrl)) return bb;
        const ab = (0, Mb.db)(bb.directJoinVmUrl);
        null === ab && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, Tb.I)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, Ab.n)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8475: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Mb
    });
    let Ab = !1;

    function Mb() {
      Ab = !0
    }

    function Tb() {
      return Ab
    }
  },
  8468: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb,
      f: () => Lb
    });
    var Ab = Ub(2875),
      Mb = Ub(2152),
      Tb = Ub(2927),
      Eb = Ub(4338),
      Yb = Ub(3180),
      Bb = Ub(8475);
    let eb = null;

    function vb() {
      return Eb.c.cancelDownloadForJoin(), (0, Yb.e)(), (0, Mb.f)(), (0, Bb.h)(), (0, Tb.k)(), Promise.all([Ub.e(69), Ub.e(72), Ub.e(71), Ub.e(70), Ub.e(83), Ub.e(259), Ub.e(199), Ub.e(216), Ub.e(237), Ub.e(212), Ub.e(46)]).then((() => Ub(39798))).catch((() => {})), Promise.all([Ub.e(74), Ub.e(132), Ub.e(87), Ub.e(55)]).then((() => Ub(39877))).then((bb => {
        let {
          startJoinLoad: ab
        } = bb;
        ab()
      }), (() => {})), eb ??= Promise.all([Ub.e(71), Ub.e(74), Ub.e(129), Ub.e(73), Ub.e(132), Ub.e(262), Ub.e(186), Ub.e(87), Ub.e(86), Ub.e(85), Ub.e(212), Ub.e(60)]).then((() => Ub(39981))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        Ab.c.showGamePack(bb)
      })), bb)), (bb => {
        throw eb = null, bb
      })), eb
    }

    function Lb() {
      return Promise.all([Ub.e(71), Ub.e(74), Ub.e(129), Ub.e(73), Ub.e(132), Ub.e(262), Ub.e(186), Ub.e(87), Ub.e(86), Ub.e(85), Ub.e(212), Ub.e(60)]).then((() => Ub(39981))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  8463: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Eb,
      l: () => Yb,
      p: () => eb,
      t: () => Bb
    });
    var Ab = Ub(205),
      Mb = Ub(4317);

    function Tb(bb) {
      return Eb(bb) === Ab.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Eb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Yb(bb) {
      var ab;
      return null !== (ab = Object.keys(Mb.e).find((ab => Mb.e[ab] === bb))) && void 0 !== ab ? ab : null
    }

    function Bb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const eb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);