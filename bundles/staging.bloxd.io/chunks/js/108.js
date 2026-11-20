export const id = 108;
export const ids = [108];
export const modules = {
  8499: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => fc
    });
    var kb = sb(1511),
      Wb = sb(19),
      ab = sb(4389),
      Tb = sb(64),
      Ub = sb(1423);
    var Ib = sb(1870),
      Hb = sb(1495),
      fb = sb(1332),
      Mb = sb(1197),
      Xb = sb(195),
      nb = sb(1235),
      mb = sb(2271),
      lb = sb(8506);

    function Qb(bb, cb) {
      const sb = !0 === cb.debugResult.gameRefused,
        kb = sb || cb.code === Xb.k.REQUEST_TO_MATCHMAKING ? (0, lb.h)(cb.message) : null;
      return null !== kb ? (eb(bb, bb((0, lb.m)(kb)), bb(lb.j[kb])), !0) : !!sb && (async function(bb) {
        const {
          gameNameWithVariation: cb,
          lobbyName: sb,
          shownLobbyName: kb
        } = Ib.gameBridge.latest("connectedGame"), Wb = "classic" === cb && (0, nb.z)(sb) ? kb : await (0, mb.d)(bb, cb, sb);
        return "" !== Wb ? bb("general:cantJoinGame", {
          game: Wb
        }) : bb("general:cantJoinThisGame")
      }(bb).then((sb => {
        eb(bb, sb, cb.message)
      })), !0)
    }

    function eb(bb, cb, sb) {
      fb.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: cb,
        subtitle: sb,
        confirmText: bb("general:ok"),
        cancelText: ""
      })
    }
    var Cb = sb(4330),
      Nb = sb(1126),
      Vb = sb(26),
      Lb = sb(1255),
      ub = sb(1704),
      Yb = sb(117),
      hb = sb(1302),
      Jb = sb(1412),
      gb = sb(4265),
      Bb = sb(4121),
      tb = sb(3019),
      yb = sb(1087);
    const Pb = "https://discord.gg/playbloxd";

    function Db(bb) {
      let {
        failure: cb
      } = bb;
      const {
        t: sb
      } = (0, Mb.E)(), kb = "chosen" === cb.packSource, Wb = Yb.featureFlags.useDiscord ? kb ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : kb ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, yb.jsxs)(yb.Fragment, {
        children: [sb(Wb, {
          code: cb.code
        }), "default" !== cb.packSource && cb.code === tb.j.Error && (0, yb.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [sb("texturePackLoad:details"), " ", cb.reason]
        }), Yb.featureFlags.useDiscord && (0, yb.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, yb.jsx)("a", {
            href: Pb,
            target: "_blank",
            rel: "noreferrer",
            children: sb("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var Eb = sb(1316),
      ib = sb(760),
      Ob = sb(1241),
      Gb = sb(1008),
      Kb = sb(1474),
      Zb = sb(3063),
      zb = sb(2904),
      qb = sb(1335),
      db = sb(1327),
      Ab = sb(4688),
      wb = sb(8512),
      rb = sb(2729);

    function ob(bb) {
      let {
        onApply: cb,
        onSkip: sb
      } = bb;
      const {
        t: kb
      } = (0, Mb.E)();
      return (0, Tb.useEffect)((() => {
        rb.e.skipPlayWait()
      }), []), (0, yb.jsx)(qb.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, yb.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [kb("customTexturePack:downloadPrompt"), (0, yb.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: kb("customTexturePack:authorWarning")
          }), (0, yb.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: kb("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: cb
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: sb
        }
      })
    }
    async function Sb() {
      let bb = !1;
      const cb = fb.NotificationProvider.showCustomPopup({
        body: cb => (0, yb.jsx)(ob, {
          onApply: () => {
            bb = !0, cb()
          },
          onSkip: cb
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await cb.getResult(), bb
    }
    let Rb = {
      wanted: !1
    };
    let vb = null;

    function Fb(bb) {
      bb.setGamePackConfirm(Sb), vb = bb
    }
    var xb = sb(3281);

    function jb(bb) {
      let {
        schematicId: cb,
        texturePackKey: sb,
        onClose: kb
      } = bb;
      const [Wb, ab] = (0, Tb.useState)("prompt"), [Ub, Ib] = (0, Tb.useState)(null), Hb = (0, xb.e)();

      function fb() {
        kb()
      }
      return "prompt" === Wb ? (0, yb.jsx)(ob, {
        onApply: async function() {
          ab("downloading");
          try {
            const bb = await async function(bb, cb) {
              const sb = await (0, Ab.e)(cb);
              if (sb) return {
                pack: sb,
                key: cb
              };
              const kb = await Nb.userContextManager.getCurrentUserContext(),
                Wb = (await Kb.b.getGame(kb, bb, !0)).customTexturePackKey;
              if (!Wb) return null;
              const ab = await (0, Ab.e)(Wb);
              if (!ab) throw new Error("The texture pack could not be found");
              return {
                pack: ab,
                key: Wb
              }
            }(cb, sb);
            if (!Hb.current) return;
            if (!bb) return void kb();
            if ((0, Zb.n)(bb.pack)) return void ab("refused");
            zb.e.setFromJson(bb.pack, "customGame"), await zb.e.saveTemporaryTexturePack(bb.key), Hb.current && (0, ub.reloadBloxd)()
          } catch (bb) {
            Ib(bb instanceof Error ? bb.message : String(bb)), ab("error")
          }
        },
        onSkip: fb
      }) : "downloading" === Wb ? (0, yb.jsx)(qb.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, yb.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, yb.jsx)(db.d, {
            showFace: !0
          })
        })
      }) : "error" === Wb ? (0, yb.jsx)(qb.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Ub,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: fb
        }
      }) : "refused" === Wb ? (0, yb.jsx)(qb.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: fb
        }
      }) : null
    }
    var pb = sb(8522),
      bc = sb(4090),
      cc = sb(1746),
      sc = sb(2984),
      kc = sb(3208),
      Wc = sb(4408),
      ac = sb(1291),
      Tc = sb(649),
      Uc = sb(727);

    function Ic() {
      const bb = Wb.d.get("clientEscMenuOptions");
      Ib.gameBridge.send("setLookSensitivity", Wb.d.get("isTouchScreen") ? (0, Uc.k)(bb) : bb.mouseSensitivity)
    }
    async function Hc(bb, cb, sb) {
      const kb = (0, Wc.I)(cb);
      async function Tb(bb, cb, sb, kb) {
        var Tb;
        if (kb.aborted) return null;
        null === Wb.d.get("gameEntrySource") && (0, Wb.l)("directPlayUrl"), Tc.s && (0, wb.e)().catch((() => {})), Wb.d.set({
          gameState: "findingLobby"
        }), Vb.j.QQ("loadingScreenState", "loadingPage:findingLobby");
        const Ub = await Nb.userContextManager.getCurrentUserContext();
        Ib.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: cb,
          discordContext: bb instanceof Ob.h ? bb.getSerialisableParams() : null
        }), (0, cc.e)();
        const Hb = await async function(bb, cb, sb, kb, Wb) {
          try {
            await ab.reqLibsLoadedPromise
          } catch (Tb) {
            return Lb.d.errorWithCode(Tb.toString(), Xb.k.LOAD_REQUIRED_LIBS, {
              error: Tb,
              severity: "medium"
            })
          }
          return Vb.j.QQ("matchmakeAndPlayStepCompleted", {
            step: Xb.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, ab.matchmakeAndPlayMaybeUnloaded)(bb, cb, sb, kb, Wb)
        }(bb, cb, sb, Ub, kb), fb = Hb.isError() ? Hb.asError() : null;
        if (fb && !fb.debugResult.Gs) {
          console.log("Failed to join lobby:", fb.message);
          const bb = "timedOut" === fb.debugResult.gameServerUnreachable;
          (0, sc.d)("matchmake_failed", fb.message, bb ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Xb.k[fb.code])
        }
        if (kb.aborted) return Ib.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== fb && void 0 !== fb && fb.debugResult.Gs) return console.log("Join cancelled:", fb.message), null;
        if (fb) return Hb;
        const {
          gameNameWithVariation: Mb,
          lobbyName: mb,
          addLobbyToRecentlyPlayed: lb
        } = Hb.getValue();
        let Qb;
        Ic(), (0, ac.A)().setGameViewShown(!0);
        const eb = null === (Tb = ib.b[Mb]) || void 0 === Tb ? void 0 : Tb.recentlyPlayedAs;
        return Qb = (0, Gb.k)(Mb) ? {
          type: "custom",
          name: "",
          schematicId: (0, Gb.s)(Mb),
          recentLobbies: []
        } : "classic" !== Mb || (0, nb.F)(mb) ? eb ? {
          type: "bloxd",
          gameNameWithVariation: eb,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Mb,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, Kb.b.addRecentlyPlayedGame(Ub, Qb, lb && !eb ? mb : void 0).then((bb => {
          Ub.setRecentlyPlayedGames(bb)
        })).catch((bb => {
          console.error("Failed to record recently played game", bb)
        })), (0, hb.H)(), Hb
      }
      return kb && (0, Wb.l)("updateRejoin"), (0, kc.l)((async Wb => {
        try {
          let Ub = bb,
            Ib = await Tb(Ub, cb, sb, Wb);
          for (let bb = 0; kb && bb < Wc.k; bb++) {
            var ab;
            if (null === (ab = Ib) || void 0 === ab || !ab.isError() || Ib.asError().code !== Xb.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Wc.J)((0, Wc.s)(bb), Wb)) return Ib;
            Ub = (0, Wc.t)(Ub, bb + 1, "string" === typeof Ub && (0, nb.F)(Ub)), Ib = await Tb(Ub, cb, sb, Wb)
          }
          return Ib
        } catch (Ub) {
          if ((0, sc.d)("matchmake_failed", Ub, "unexpected"), Ib.gameBridge.send("leaveGame", {
              reloadPath: Wb.aborted ? null : "/"
            }), Wb.aborted) return null;
          throw Ub
        }
      }), (async bb => {
        var sb;
        if (kb) return;
        const Wb = (0, hb.z)();
        null !== Wb && (await Wb, bb.aborted) || (null !== (sb = ib.b[cb]) && void 0 !== sb && sb.playAdBeforeMatchmaking ? (rb.e.skipPlayWait(), await new Promise((bb => {
          (0, hb.db)((() => {
            bb(!0)
          }), "video_start")
        }))) : (0, hb.db)((() => {}), "video_start"))
      }))
    }

    function fc() {
      const {
        t: bb
      } = (0, Mb.E)(), cb = (0, Hb.useNavigatePreserveSearch)(), sb = (0, kb.r)(), lb = (0, kb.D)(), eb = (0, Tb.useRef)({
        t: bb,
        navigate: cb
      });
      eb.current = {
        t: bb,
        navigate: cb
      };
      const Vb = (0, Tb.useRef)("");
      Vb.current = sb.pathname + sb.search;
      const {
        gameState: Lb,
        clientEscMenuOptions: Pb
      } = (0, Wb.p)(["gameState", "clientEscMenuOptions"]), ib = (0, Tb.useRef)(null), Ob = (0, Tb.useRef)(null);
      var Zb;
      (0, kc.n)(), (0, kc.p)(), Zb = Tc.s, (0, Tb.useEffect)((() => {
        if (!Zb) return;
        let bb = !0;
        return (0, wb.e)().then((cb => {
          bb && Fb(cb)
        })).catch((() => {})), () => {
          var cb;
          bb = !1, Rb.wanted = !1, null === (cb = vb) || void 0 === cb || cb.setGamePackConfirm(null), vb = null
        }
      }), [Zb]), (0, Tb.useEffect)((() => {
        var bb;
        (0, ab.needGameClientNow)();
        const {
          t: cb,
          navigate: kb
        } = eb.current, Tb = (0, pb.d)(lb, sb.search);
        if (lb.lobbyName && !new URLSearchParams(sb.search).has("lobby")) return void kb((0, Eb.b)(Tb.gameNameWithVariation, Tb.lobbyName), {
          replace: !0
        });
        let Ub = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === sb.pathname) {
          const bb = Wb.d.get("discordContext");
          if (!bb) return void kb("/");
          Ub = Cb.d.setupDiscordLobby(bb, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: bb
          }))).catch((cb => (console.error("Failed to setup discord lobby", cb), {
            shouldMatchmake: !1,
            discordContext: bb
          })))
        } else if (!Tb.gameNameWithVariation || !(0, nb.D)(Tb.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Tb.gameNameWithVariation}`), void kb(-1);
        if (Tb.gameNameWithVariation === ib.current && Tb.lobbyName === Ob.current) return;
        if (Ib.gameBridge.latest("connectedGame").replay) return void(0, kc.h)(null);
        (0, hb.D)(), Wb.d.set({
          gameState: "loadingScreen"
        });
        const Hb = function() {
          Rb.wanted = !1;
          const bb = {
            wanted: !0
          };
          return Rb = bb, () => bb.wanted
        }();
        if ("releaseCountdown" === (null === (bb = (0, mb.h)(Tb.gameNameWithVariation)) || void 0 === bb ? void 0 : bb.type)) return console.error(`Game hasn't been released yet: ${Tb.gameNameWithVariation}`), void kb(-1);
        const Mb = Tb.gameNameWithVariation;
        if (Mb && (Tc.s || (0, Gb.k)(Mb))) {
          const bb = Tc.s ? Promise.all([(0, wb.e)(), Nb.userContextManager.getCurrentUserContext()]).then((bb => {
            let [cb, sb] = bb;
            if (Hb()) return Fb(cb), cb.packForGame(Mb, sb, Hb)
          })) : async function(bb) {
            await zb.e.indexedDbValuesAreLoaded();
            const cb = await Nb.userContextManager.getCurrentUserContext(),
              sb = (0, Gb.s)(bb);
            let kb;
            try {
              kb = await Kb.b.getGame(cb, sb, !0)
            } catch (Tb) {
              return void console.error("Failed to get game", Tb)
            }
            const Wb = kb.customTexturePackKey;
            if (!Wb) return void(zb.e.isUsingTemporaryTexturePack() && ((0, ub.reloadBloxd)(), await new Promise((() => {}))));
            if (zb.e.isUsingTemporaryTexturePack() && zb.e.getTemporaryTexturePackSource() === Wb) return;
            const ab = fb.NotificationProvider.showCustomPopup({
              body: bb => (0, yb.jsx)(jb, {
                schematicId: sb,
                texturePackKey: Wb,
                onClose: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await ab.getResult()
          }(Mb), cb = Ub;
          Ub = bb.catch((bb => {
            console.error("Failed to check for custom texture pack", bb)
          })).then((() => cb))
        }(0, kc.h)(null);
        let Lb = !1;
        const Jb = sb.pathname + sb.search,
          Pb = () => !Lb && Vb.current === Jb;
        return Ub.then((bb => {
          let {
            shouldMatchmake: sb,
            discordContext: ab
          } = bb;
          Pb() && (sb ? Hc(null !== ab && void 0 !== ab ? ab : Tb.lobbyName, ab ? "classic" : Tb.gameNameWithVariation, Tb.directJoinVmUrl).then((bb => {
            var sb;
            if (null !== bb && Pb())
              if (bb.isError()) {
                var ab;
                const Ub = bb.asError(),
                  Hb = null !== (ab = Ub.debugResult.severity) && void 0 !== ab ? ab : "high";
                if (Ub.code === Xb.k.SHADER_PACK) return void(0, bc.d)(Ub.message, kb);
                const Mb = Wb.d.get("gameEntrySource"),
                  nb = Ub.code === Xb.k.INITIALISE_WEBGL ? (0, Bb.c)() : null,
                  {
                    error: mb
                  } = Ub.debugResult;
                let lb;
                if (Qb(cb, Ub)) lb = Promise.resolve(!1);
                else if (null !== nb) lb = (0, Bb.i)(nb);
                else if (mb instanceof tb.m) sb = mb, lb = fb.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, yb.jsx)(Db, {
                    failure: sb
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((bb => !0 === bb));
                else {
                  let bb;
                  switch (Hb) {
                    case "low":
                      bb = "face-diagonal-mouth";
                      break;
                    case "medium":
                      bb = "face-worried";
                      break;
                    case "high":
                      bb = "face-dizzy"
                  }
                  lb = fb.NotificationProvider.showPromptPopup({
                    icon: bb,
                    title: Xb.w[Ub.code],
                    subtitle: (0, yb.jsxs)(yb.Fragment, {
                      children: [Ub.debugResult.gameServerUnreachable ? cb((0, Yb.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Ub.message, Ub.debugResult.error instanceof Error && (0, yb.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, yb.jsx)(gb.d, {
                          errorString: Ub.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: cb("general:tryAgain"),
                    cancelText: cb("general:cancel")
                  }).getResult().then((bb => !0 === bb))
                }
                lb.then((bb => {
                  if (bb) {
                    (0, Wb.l)(Mb);
                    const bb = (0, Eb.b)(Tb.gameNameWithVariation, Tb.lobbyName);
                    "low" === Hb ? kb(bb) : (0, ub.reloadBloxd)(bb)
                  }
                })), Ib.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), kb(-1)
              } else {
                ib.current = bb.getValue().gameNameWithVariation, Ob.current = bb.getValue().lobbyName;
                const cb = (0, Eb.b)(ib.current, bb.getValue().lobbyName);
                kb(cb, {
                  replace: !0
                })
              }
          })).catch((bb => {
            if (!Pb()) return;
            fb.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, yb.jsxs)(yb.Fragment, {
                children: [cb("homePage:pleaseCopyError"), (0, yb.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, yb.jsx)(gb.d, {
                    errorString: bb.stack
                  })
                })]
              }),
              confirmText: cb("general:tryAgain"),
              cancelText: cb("general:cancel")
            }).getResult().then((bb => {
              !0 === bb && (0, ub.reloadBloxd)((0, Eb.b)(Tb.gameNameWithVariation, Tb.lobbyName))
            })), kb(-1)
          })) : kb(-1))
        })), () => {
          Lb = !0
        }
      }), [lb, sb.search, sb.pathname]), (0, Tb.useEffect)((() => {
        Pb.disableFullscreen && (0, Jb.d)() ? (0, Jb.i)() : !Pb.disableFullscreen && (0, Jb.h)() && (0, Jb.r)()
      }), [Lb, Pb]), (0, Tb.useEffect)((() => {
        "inGame" === Lb && Ic()
      }), [Lb, Pb]), (0, Tb.useEffect)((() => {
        "inGame" !== Lb && Wb.d.set({
          openInGameMenuName: null
        })
      }), [Lb]);
      const qb = function(bb) {
        const cb = (0, Wb.h)(bb),
          [sb, kb] = (0, Tb.useState)(0),
          [ab, Ib] = (0, Tb.useState)(!1);
        (0, Ub.f)("gameJoined", (() => {
          (0, Wb.h)(Wb.d.get("gameState")) && (kb((bb => bb + 1)), Ib(!0))
        })), (0, Tb.useEffect)((() => {
          cb || Ib(!1)
        }), [cb]);
        const Hb = "inGame" === bb;
        return {
          mounted: Hb || cb && ab,
          shown: Hb,
          key: sb
        }
      }(Lb);
      return (0, yb.jsx)(yb.Fragment, {
        children: qb.mounted && (0, yb.jsx)(ab.InGameUi, {
          shown: qb.shown
        }, qb.key)
      })
    }
  },
  4688: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(1208);
    async function Wb(bb) {
      const cb = await fetch(`${kb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === cb.status || 403 === cb.status) return null;
      if (!cb.ok) throw new Error(`Failed to download the texture pack (${cb.status})`);
      return await cb.json()
    }
  },
  8522: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(1316),
      Wb = sb(1235),
      ab = sb(628);

    function Tb(bb) {
      return bb = function(bb, cb) {
        var sb;
        const kb = new URLSearchParams(cb),
          Wb = kb.get("lobby"),
          ab = kb.get("vm"),
          Tb = null !== (sb = Wb) && void 0 !== sb ? sb : bb.lobbyName,
          Ub = null !== ab && void 0 !== ab ? ab : bb.directJoinVmUrl;
        if (Tb === bb.lobbyName && Ub === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Tb,
          directJoinVmUrl: Ub
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, ab.L)(bb.directJoinVmUrl)) return bb;
        const cb = (0, Wb.U)(bb.directJoinVmUrl);
        null === cb && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, ab.L)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, kb.i)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8514: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Wb
    });
    let kb = !1;

    function Wb() {
      kb = !0
    }

    function ab() {
      return kb
    }
  },
  8512: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      h: () => Mb
    });
    var kb = sb(2904),
      Wb = sb(2199),
      ab = sb(2946),
      Tb = sb(4386),
      Ub = sb(3294),
      Ib = sb(8514);
    let Hb = null;

    function fb() {
      return Tb.b.cancelDownloadForJoin(), (0, Ub.b)(), (0, Wb.e)(), (0, Ib.d)(), (0, ab.l)(), Promise.all([sb.e(69), sb.e(72), sb.e(71), sb.e(70), sb.e(83), sb.e(259), sb.e(199), sb.e(216), sb.e(237), sb.e(212), sb.e(46)]).then((() => sb(40112))).catch((() => {})), Promise.all([sb.e(74), sb.e(132), sb.e(87), sb.e(55)]).then((() => sb(40182))).then((bb => {
        let {
          startJoinLoad: cb
        } = bb;
        cb()
      }), (() => {})), Hb ??= Promise.all([sb.e(71), sb.e(74), sb.e(129), sb.e(73), sb.e(132), sb.e(262), sb.e(186), sb.e(87), sb.e(86), sb.e(85), sb.e(212), sb.e(60)]).then((() => sb(40275))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        kb.e.showGamePack(bb)
      })), bb)), (bb => {
        throw Hb = null, bb
      })), Hb
    }

    function Mb() {
      return Promise.all([sb.e(71), sb.e(74), sb.e(129), sb.e(73), sb.e(132), sb.e(262), sb.e(186), sb.e(87), sb.e(86), sb.e(85), sb.e(212), sb.e(60)]).then((() => sb(40275))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  8506: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      g: () => Tb,
      h: () => Ub,
      j: () => Hb,
      m: () => Ib
    });
    var kb = sb(223),
      Wb = sb(4371);

    function ab(bb) {
      return Tb(bb) === kb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Tb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Ub(bb) {
      var cb;
      return null !== (cb = Object.keys(Wb.d).find((cb => Wb.d[cb] === bb))) && void 0 !== cb ? cb : null
    }

    function Ib(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);