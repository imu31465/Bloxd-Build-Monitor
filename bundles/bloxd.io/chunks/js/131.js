export const id = 131;
export const ids = [131, 186];
export const modules = {
  10267: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => hw
    });
    var eb = Mb(1696),
      Hb = Mb(26),
      pb = Mb(5509),
      Vb = Mb(64),
      gb = Mb(1611);
    var lb = Mb(2142),
      Lb = Mb(1686),
      Ib = Mb(1504),
      Ob = Mb(1259),
      Ub = Mb(10270),
      tb = Mb(10273),
      Cb = Mb(5436),
      Eb = Mb(192),
      Fb = Mb(1186),
      Bb = Mb(29),
      sb = Mb(1319),
      mb = Mb(1965),
      hb = Mb(110),
      zb = Mb(1436),
      Xb = Mb(1599),
      xb = Mb(5377),
      jb = Mb(5182),
      Kb = Mb(5119),
      rb = Mb(4604),
      Rb = Mb(3394),
      Db = Mb(1455),
      cb = Mb(867),
      Yb = Mb(1304),
      Zb = Mb(1126),
      fb = Mb(1301),
      Ab = Mb(4668),
      Wb = Mb(4522),
      Jb = Mb(1507),
      Sb = Mb(1468),
      Nb = Mb(6039),
      vb = Mb(10286),
      Qb = Mb(4231),
      Gb = Mb(1364);

    function qb(bb) {
      let {
        onApply: wb,
        onSkip: Mb
      } = bb;
      const {
        t: eb
      } = (0, Ob.C)();
      return (0, Vb.useEffect)((() => {
        Qb.h.skipPlayWait()
      }), []), (0, Gb.jsx)(Jb.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Gb.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [eb("customTexturePack:downloadPrompt"), (0, Gb.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: eb("customTexturePack:authorWarning")
          }), (0, Gb.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: eb("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: wb
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Mb
        }
      })
    }
    async function ab() {
      let bb = !1;
      const wb = Ib.NotificationProvider.showCustomPopup({
        body: wb => (0, Gb.jsx)(qb, {
          onApply: () => {
            bb = !0, wb()
          },
          onSkip: wb
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await wb.getResult(), bb
    }
    let ib = {
      wanted: !1
    };
    let ub = null;

    function db(bb) {
      bb.setGamePackConfirm(ab), ub = bb
    }
    var Pb = Mb(4883),
      nb = Mb(1677),
      yb = Mb(43),
      ob = Mb(4615);

    function Tb(bb) {
      let {
        schematicId: wb,
        texturePackKey: Mb,
        onClose: eb
      } = bb;
      const [Hb, pb] = (0, Vb.useState)("prompt"), [gb, lb] = (0, Vb.useState)(null), Lb = (0, Pb.d)();

      function Ib() {
        eb()
      }
      return "prompt" === Hb ? (0, Gb.jsx)(qb, {
        onApply: async function() {
          pb("downloading");
          try {
            const bb = await async function(bb, wb) {
              const Mb = await (0, Nb.e)(wb);
              if (Mb) return {
                pack: Mb,
                key: wb
              };
              const eb = await Fb.userContextManager.getCurrentUserContext(),
                Hb = (await nb.e.getGame(eb, bb, !0)).customTexturePackKey;
              if (!Hb) return null;
              const pb = await (0, Nb.e)(Hb);
              if (!pb) throw new Error("The texture pack could not be found");
              return {
                pack: pb,
                key: Hb
              }
            }(wb, Mb);
            if (!Lb.current) return;
            if (!bb) return void eb();
            if ((0, Ab.i)(bb.pack)) return void pb("refused");
            const Hb = Wb.d.toJson(),
              Vb = Wb.d.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (Wb.d.setFromJson(bb.pack, "customGame"), await Wb.d.saveTemporaryTexturePack(bb.key), Lb.current) return void(0, mb.reloadBloxd)();
            Wb.d.setFromJson(Hb, Vb), await (0, ob.p)(yb.h)
          } catch (bb) {
            lb(bb instanceof Error ? bb.message : String(bb)), pb("error")
          }
        },
        onSkip: Ib
      }) : "downloading" === Hb ? (0, Gb.jsx)(Jb.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Gb.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Gb.jsx)(Sb.c, {
            showFace: !0
          })
        })
      }) : "error" === Hb ? (0, Gb.jsx)(Jb.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: gb,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Ib
        }
      }) : "refused" === Hb ? (0, Gb.jsx)(Jb.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Ib
        }
      }) : null
    }
    var kb = Mb(10298),
      bw = Mb(5110),
      ww = Mb(1994),
      Mw = Mb(10292),
      ew = Mb(1987),
      Hw = Mb(10304),
      pw = Mb(2355),
      Vw = Mb(10309);
    var gw = Mb(5564),
      lw = Mb(10316),
      Lw = Mb(1391),
      Iw = Mb(1958),
      Ow = Mb(698),
      Uw = Mb(10323),
      tw = Mb(803),
      Cw = Mb(1848);

    function Ew() {
      const bb = Hb.c.get("clientEscMenuOptions");
      lb.gameBridge.send("setLookSensitivity", Hb.c.get("isTouchScreen") ? (0, tw.w)(bb) : bb.mouseSensitivity)
    }
    const Fw = 45e3;

    function Bw(bb) {
      if (null === bb || void 0 === bb || !bb.isError()) return !1;
      const wb = bb.asError();
      return wb.code === Eb.i.REQUEST_TO_MATCHMAKING && !(0, Iw.b)(wb.debugResult.error)
    }

    function sw(bb) {
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isError()) && !0 === bb.asError().debugResult.serverWaitEnded
    }
    async function mw(bb, wb, Mb, eb) {
      const Vb = (0, gw.P)(wb);
      async function gb(bb, wb, Mb, gb) {
        if (gb.aborted) return null;
        null === Hb.c.get("gameEntrySource") && (0, Hb.k)("directPlayUrl"), Ow.I && (0, vb.loadWasmPlay)().catch((() => {})), Hb.c.set({
          gameState: "findingLobby"
        }), Bb.k.iI("loadingScreenState", "loadingPage:findingLobby");
        const Lb = await Fb.userContextManager.getCurrentUserContext();
        lb.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: wb,
          discordContext: bb instanceof Yb.f ? bb.getSerialisableParams() : null
        });
        const Ib = Qb.h.playInputAt();
        (0, ww.h)(null !== Ib && void 0 !== Ib ? Ib : performance.now()), eb.fromTap = null !== Ib, eb.mark("phase_join_started");
        const Ob = await async function(bb, wb, Mb, eb, Hb, Vb, gb) {
          try {
            await (0, Cw.n)(pb.reqLibsLoadedPromise, Fw, "Required libraries timed out")
          } catch (lb) {
            const bb = lb instanceof Cw.h ? `Required libraries still loading after ${Fw/1e3} s: ${(0,pb.requiredLibsPending)().join(", ")}` : lb.toString();
            return sb.d.errorWithCode(bb, Eb.i.LOAD_REQUIRED_LIBS, {
              error: lb,
              severity: "medium"
            })
          }
          return Bb.k.iI("matchmakeAndPlayStepCompleted", {
            step: Eb.i.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), gb.mark("phase_libs"), (0, pb.matchmakeAndPlayMaybeUnloaded)(bb, wb, Mb, eb, Hb, Vb, gb)
        }(bb, wb, Mb, Lb, gb, Vb, eb), Ub = Ob.isError() ? Ob.asError() : null;
        if (gb.aborted) return Ub && (0, Hw.e)(Ob), lb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Ub && void 0 !== Ub && Ub.debugResult.Yb) return console.log("Join cancelled:", Ub.message), null;
        if (Ub) return Ob;
        const {
          gameNameWithVariation: tb,
          lobbyName: Cb
        } = Ob.getValue();
        return Ew(), (0, Lw.K)().setGameViewShown(!0), Lb.recordJoin(tb, Cb), (0, zb.G)(), Ob
      }
      return Vb && (0, Hb.k)("updateRejoin"), (0, pw.k)((async Hb => {
        eb.mark("phase_prepared");
        try {
          var pb;
          let eb = bb,
            lb = await gb(eb, wb, Mb, Hb);
          for (let bb = 0; Vb && bb < gw.l; bb++) {
            if (sw(lb)) {
              if ("string" !== typeof eb || !(0, fb.E)(eb)) break;
              bb = gw.l - 1, (0, lw.h)(Hb)
            }
            if (!Bw(lb) || !await (0, gw.Q)((0, gw.v)(bb), Hb)) break;
            eb = (0, gw.z)(eb, bb + 1, "string" === typeof eb && (0, fb.E)(eb)), lb = await gb(eb, wb, Mb, Hb)
          }
          return null !== (pb = lb) && void 0 !== pb && pb.isError() && (0, Hw.e)(lb), lb
        } catch (Lb) {
          if ((0, ew.reportClientError)("matchmake_failed", Lb, "unexpected"), lb.gameBridge.send("leaveGame", {
              reloadPath: Hb.aborted ? null : "/"
            }), Hb.aborted) return null;
          throw Lb
        }
      }), (async bb => {
        var Mb;
        if (Vb) return;
        const eb = (0, zb.A)();
        null !== eb && (await eb, bb.aborted) || (null !== (Mb = cb.b[wb]) && void 0 !== Mb && Mb.playAdBeforeMatchmaking ? (Qb.h.skipPlayWait(), await new Promise((bb => {
          (0, zb.T)((() => {
            bb(!0)
          }), "video_start")
        }))) : (0, zb.T)((() => {}), "video_start"))
      }))
    }

    function hw() {
      const {
        t: bb
      } = (0, Ob.C)(), wb = (0, Lb.useNavigatePreserveSearch)(), Mb = (0, eb.v)(), Yb = (0, eb.E)(), Ab = (0, Vb.useRef)({
        t: bb,
        navigate: wb
      });
      Ab.current = {
        t: bb,
        navigate: wb
      };
      const Jb = (0, Vb.useRef)("");
      Jb.current = Mb.pathname + Mb.search;
      const {
        gameState: Sb,
        clientEscMenuOptions: Nb
      } = (0, Hb.o)(["gameState", "clientEscMenuOptions"]), Qb = (0, Vb.useRef)(null), qb = (0, Vb.useRef)(!1), ab = (0, Vb.useRef)(!1), [Pb, yb] = (0, Vb.useState)(0);
      var ob;
      (0, gb.e)(Lw.b, (() => {
        ab.current = !0, yb((bb => bb + 1))
      })), (0, Vb.useEffect)((() => () => {
        Bb.k.iI("leftPlayPage")
      }), []), (0, pw.o)(), (0, pw.p)(), ob = Ow.I, (0, Vb.useEffect)((() => {
        if (!ob) return;
        let bb = !0;
        return (0, vb.loadWasmPlay)().then((wb => {
          bb && db(wb)
        })).catch((() => {})), () => {
          var wb;
          bb = !1, ib.wanted = !1, null === (wb = ub) || void 0 === wb || wb.setGamePackConfirm(null), ub = null
        }
      }), [ob]), (0, Vb.useEffect)((() => {
        var bb, wb, eb;
        (0, pb.needGameClientNow)();
        const Vb = ab.current;
        ab.current = !1;
        const {
          t: gb,
          navigate: Ob
        } = Ab.current, Xb = (0, kb.c)(Yb, Mb.search);
        if (Yb.lobbyName && !new URLSearchParams(Mb.search).has("lobby")) return void Ob((0, Db.b)(Xb.gameNameWithVariation, Xb.lobbyName), {
          replace: !0
        });
        let Sb = Promise.resolve({
          shouldMatchmake: !0
        });
        const Nb = new AbortController;
        if ("/play/discord-custom-lobby" === Mb.pathname) {
          const bb = Hb.c.get("discordContext");
          if (!bb) return void Ob("/");
          Sb = Cb.c.setupDiscordLobby(bb, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: bb
          }))).catch((wb => (console.error("Failed to setup discord lobby", wb), {
            shouldMatchmake: !1,
            discordContext: bb
          })))
        } else if (!Xb.gameNameWithVariation || !(0, fb.A)(Xb.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Xb.gameNameWithVariation}`), void Ob(-1);
        const ub = Qb.current;
        if (!Vb && null !== ub && Xb.gameNameWithVariation === ub.gameNameWithVariation && Xb.lobbyName === ub.lobbyName) return;
        if (lb.gameBridge.latest("connectedGame").replay) return void(0, pw.j)(null);
        if ("releaseCountdown" === (null === (bb = (0, Rb.h)(Xb.gameNameWithVariation)) || void 0 === bb ? void 0 : bb.type)) return console.error(`Game hasn't been released yet: ${Xb.gameNameWithVariation}`), void Ob(-1);
        const Pb = qb.current;
        qb.current = !1, (0, zb.C)(), Hb.c.set({
          gameState: "loadingScreen"
        });
        const yb = function() {
            ib.wanted = !1;
            const bb = {
              wanted: !0
            };
            return ib = bb, () => bb.wanted
          }(),
          ob = new Mw.b,
          ww = Xb.gameNameWithVariation,
          ew = void 0 !== ww && (0, Zb.j)(ww);
        let Hw = Promise.resolve();
        if (ww && (Ow.I || ew)) {
          const bb = Ow.I ? Promise.all([(0, vb.loadWasmPlay)(), Fb.userContextManager.getCurrentUserContext()]).then((bb => {
            let [wb, Mb] = bb;
            if (ob.mark("phase_pack_begin"), yb()) return db(wb), wb.packForGame(ww, Mb, yb)
          })) : async function(bb, wb) {
            await Wb.d.indexedDbValuesAreLoaded();
            const Mb = await Fb.userContextManager.getCurrentUserContext(),
              eb = (0, Zb.o)(bb);
            let Hb;
            try {
              Hb = await nb.e.getGame(Mb, eb, !0)
            } catch (lb) {
              return void console.error("Failed to get game", lb)
            }
            if (null !== wb && void 0 !== wb && wb.aborted) return;
            const pb = Hb.customTexturePackKey;
            if (!pb) return void(Wb.d.isUsingTemporaryTexturePack() && ((0, mb.reloadBloxd)(), await new Promise((() => {}))));
            if (Wb.d.isUsingTemporaryTexturePack() && Wb.d.getTemporaryTexturePackSource() === pb) return;
            const Vb = Ib.NotificationProvider.showCustomPopup({
                body: bb => (0, Gb.jsx)(Tb, {
                  schematicId: eb,
                  texturePackKey: pb,
                  onClose: bb
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              gb = () => {
                Vb.tearDownNotification()
              };
            null === wb || void 0 === wb || wb.addEventListener("abort", gb, {
              once: !0
            }), await Vb.getResult(), null === wb || void 0 === wb || wb.removeEventListener("abort", gb)
          }(ww, Nb.signal), wb = bb.catch((bb => {
            console.error("Failed to check for custom texture pack", bb)
          })).then((() => {
            ob.mark("phase_pack")
          }));
          Hw = wb;
          const Mb = Ow.I && !ew ? (0, vb.loadWasmPlay)().catch((() => {})) : wb,
            eb = Sb;
          Sb = Mb.then((() => eb))
        }
        Ow.I && (0, Uw.f)(Hw);
        const gw = {
          wasm: Ow.I,
          game: Xb.gameNameWithVariation,
          custom: ew,
          lobbyName: null !== (wb = Xb.lobbyName) && void 0 !== wb ? wb : null,
          direct: null !== Xb.directJoinVmUrl && void 0 !== Xb.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === Mb.pathname,
          adBeforeMatchmaking: void 0 !== ww && !0 === (null === (eb = cb.b[ww]) || void 0 === eb ? void 0 : eb.playAdBeforeMatchmaking),
          afterAnother: null !== Qb.current || (0, pw.d)()
        };
        (0, Vw.i)(null);
        const lw = !(Lw = gw).wasm || void 0 === Lw.game || Lw.custom || Lw.direct || Lw.discord || Lw.adBeforeMatchmaking || Lw.afterAnother ? null : () => {
          ! function(bb, wb, Mb) {
            (0, Vw.i)({
              key: (0, Vw.h)(bb, wb),
              settled: Promise.all([pb.matchmakingLibrariesPromise, Fb.userContextManager.getCurrentUserContext()]).then((eb => {
                let [Hb, pb] = eb;
                if (void 0 === Hb.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return Mb.mark("phase_ahead_sent"), Hb.matchmakeForAhead(bb, wb, pb).then((bb => (Mb.mark("phase_ahead_answered", bb.at), bb)))
              })).catch((bb => ({
                result: sb.d.errorWithCode(String(bb), Eb.i.REQUEST_TO_MATCHMAKING, {
                  error: bb,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(gw.lobbyName, gw.game, ob)
        };
        var Lw;
        const tw = null !== Qb.current;
        Qb.current = null, (0, pw.j)(null);
        const Ew = () => {
          Pb ? (0, Lb.navigateToHomePage)() : (qb.current = tw, Ob(-1))
        };
        let Fw = !1;
        const Bw = Mb.pathname + Mb.search,
          sw = () => !Fw && Jb.current === Bw;
        return (0, Vw.d)(Sb, lw, (bb => {
          let {
            shouldMatchmake: wb,
            discordContext: Mb
          } = bb;
          sw() && (ob.mark("phase_gate"), wb ? mw(null !== Mb && void 0 !== Mb ? Mb : Xb.lobbyName, Mb ? "classic" : Xb.gameNameWithVariation, Xb.directJoinVmUrl, ob).then((bb => {
            if (null !== bb && sw())
              if (bb.isError()) {
                var wb, Mb;
                const eb = bb.asError(),
                  pb = null !== (wb = eb.debugResult.severity) && void 0 !== wb ? wb : "high";
                if (Bb.k.iI("joinFailed", {
                    step: null !== (Mb = eb.code) && void 0 !== Mb ? Mb : null,
                    severity: pb
                  }), (0, Iw.b)(eb.debugResult.error)) return void Iw.e.reload();
                if (eb.code === Eb.i.SHADER_PACK) return void(0, bw.c)(eb.message, Ob);
                const Vb = Hb.c.get("gameEntrySource"),
                  Lb = eb.code === Eb.i.INITIALISE_WEBGL ? (0, jb.c)() : null,
                  {
                    error: Cb
                  } = eb.debugResult;
                let Fb;
                if ((0, tb.c)(gb, eb)) Fb = Promise.resolve(!1);
                else if (null !== Lb) Fb = (0, jb.i)(Lb);
                else if (Cb instanceof rb.l) Fb = (0, Kb.h)(Cb);
                else {
                  let bb;
                  switch (pb) {
                    case "low":
                      bb = "face-diagonal-mouth";
                      break;
                    case "medium":
                      bb = "face-worried";
                      break;
                    case "high":
                      bb = "face-dizzy"
                  }
                  const wb = Cb instanceof Cw.h;
                  let Mb = (0, Ub.e)(eb.message);
                  wb ? Mb = gb("general:gameFilesStalled") : eb.debugResult.gameServerUnreachable && (Mb = gb((0, hb.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  Fb = Ib.NotificationProvider.showPromptPopup({
                    icon: bb,
                    title: Eb.B[eb.code],
                    subtitle: (0, Gb.jsxs)(Gb.Fragment, {
                      children: [Mb, Cb instanceof Error && !wb && (0, Gb.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Gb.jsx)(xb.c, {
                          errorString: Cb.stack
                        })
                      })]
                    }),
                    confirmText: gb("general:tryAgain"),
                    cancelText: gb("general:cancel")
                  }).getResult().then((bb => !0 === bb))
                }
                Fb.then((bb => {
                  if (bb) {
                    (0, Hb.k)(Vb);
                    const bb = (0, Db.b)(Xb.gameNameWithVariation, Xb.lobbyName);
                    "low" === pb ? Ob(bb) : (0, mb.reloadBloxd)(bb)
                  }
                })), lb.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Ew()
              } else {
                const {
                  gameNameWithVariation: wb,
                  lobbyName: Mb
                } = bb.getValue();
                Qb.current = {
                  gameNameWithVariation: wb,
                  lobbyName: Mb
                };
                const eb = (0, Db.b)(wb, Mb);
                Ob(eb, {
                  replace: !0
                })
              }
          })).catch((bb => {
            if (!sw()) return;
            Bb.k.iI("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            Ib.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Gb.jsxs)(Gb.Fragment, {
                children: [gb("homePage:pleaseCopyError"), (0, Gb.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Gb.jsx)(xb.c, {
                    errorString: bb.stack
                  })
                })]
              }),
              confirmText: gb("general:tryAgain"),
              cancelText: gb("general:cancel")
            }).getResult().then((bb => {
              !0 === bb && (0, mb.reloadBloxd)((0, Db.b)(Xb.gameNameWithVariation, Xb.lobbyName))
            })), Ew()
          })) : Ob(-1))
        }), sw), () => {
          Fw = !0, Nb.abort()
        }
      }), [Yb, Mb.search, Mb.pathname, Pb]), (0, Vb.useEffect)((() => {
        Nb.disableFullscreen && (0, Xb.f)() ? (0, Xb.l)() : !Nb.disableFullscreen && (0, Xb.h)() && (0, Xb.r)({
          automatic: !0
        })
      }), [Sb, Nb]), (0, Vb.useEffect)((() => {
        "inGame" === Sb && Ew()
      }), [Sb, Nb]), (0, Vb.useEffect)((() => {
        "inGame" !== Sb && Hb.c.set({
          openInGameMenuName: null
        })
      }), [Sb]);
      const ww = function(bb) {
        const wb = (0, Hb.g)(bb),
          [Mb, eb] = (0, Vb.useState)(0),
          [pb, lb] = (0, Vb.useState)(!1);
        (0, gb.e)("gameJoined", (() => {
          (0, Hb.g)(Hb.c.get("gameState")) && (eb((bb => bb + 1)), lb(!0))
        })), (0, Vb.useEffect)((() => {
          wb || lb(!1)
        }), [wb]);
        const Lb = "inGame" === bb;
        return {
          mounted: Lb || wb && pb,
          shown: Lb,
          key: Mb
        }
      }(Sb);
      return (0, Gb.jsx)(Gb.Fragment, {
        children: ww.mounted && (0, Gb.jsx)(pb.InGameUi, {
          shown: ww.shown
        }, ww.key)
      })
    }
  },
  6039: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(1271);
    async function Hb(bb) {
      const wb = await fetch(`${eb.clientSideServerUrls.s3Url}/${bb}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === wb.status || 403 === wb.status) return null;
      if (!wb.ok) throw new Error(`Failed to download the texture pack (${wb.status})`);
      return await wb.json()
    }
  },
  10273: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb
    });
    var eb = Mb(192),
      Hb = Mb(225),
      pb = Mb(1126),
      Vb = Mb(1136),
      gb = Mb(1301),
      lb = Mb(2142),
      Lb = Mb(3394),
      Ib = Mb(1677),
      Ob = Mb(1504),
      Ub = Mb(1186),
      tb = Mb(10278),
      Cb = Mb(1686),
      Eb = Mb(1713);

    function Fb(bb, wb) {
      const Mb = !0 === wb.debugResult.gameRefused,
        pb = Mb || wb.code === eb.i.REQUEST_TO_MATCHMAKING ? (0, tb.f)(wb.message) : null;
      if (null !== pb) return zb(bb, bb((0, tb.j)(pb)), bb(tb.g[pb])), !0;
      if (Mb) return async function(bb) {
        const {
          gameNameWithVariation: wb,
          lobbyName: Mb,
          shownLobbyName: eb
        } = lb.gameBridge.latest("connectedGame"), Hb = "classic" === wb && (0, gb.y)(Mb) ? eb : await (0, Lb.d)(bb, wb, Mb);
        return "" !== Hb ? bb("general:cantJoinGame", {
          game: Hb
        }) : bb("general:cantJoinThisGame")
      }(bb).then((Mb => {
        zb(bb, Mb, wb.message)
      })), !0;
      const {
        joinFailure: Vb
      } = wb.debugResult, Ib = "refused" === (null === Vb || void 0 === Vb ? void 0 : Vb.at) ? Vb.code : null;
      return Ib === Hb.b.schematicNotPublished.code ? (async function(bb, wb) {
        const Mb = sb(),
          eb = await hb(Mb);
        if (null === eb || eb.gamePublished) return void zb(bb, bb("general:cantJoinThisGame"), wb);
        await mb(bb, "rocket-launch", bb("studio:gameNotPublishedTitle", {
          game: eb.name
        }), bb("studio:publishInStudio"), Mb)
      }(bb, wb.message), !0) : (Ib === Hb.b.schematicBanned.code || Ib === Hb.b.customGameTakenDown.code) && (hb(sb()).then((wb => {
        Bb(bb, wb)
      })), !0)
    }

    function Bb(bb, wb) {
      !0 !== (null === wb || void 0 === wb ? void 0 : wb.takenDown) ? zb(bb, bb("general:cantJoinThisGame"), Hb.b.customGameTakenDown.text) : mb(bb, "lock", bb("studio:gameTakenDownTitle", {
        game: wb.name
      }), bb("studio:viewInStudio"), wb.schematicId)
    }

    function sb() {
      return (0, pb.o)(lb.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function mb(bb, wb, Mb, eb, Hb) {
      !0 === await Ob.NotificationProvider.showPromptPopup({
        icon: wb,
        title: Mb,
        confirmText: eb,
        cancelText: bb("general:cancel")
      }).getResult() && (0, Cb.navigatePreserveSearch)((0, Eb.p)((0, Vb.c)(Hb), "manage"))
    }
    async function hb(bb) {
      try {
        return await Ib.e.getGame(await Ub.userContextManager.getCurrentUserContext(), bb, !0)
      } catch (wb) {
        return (0, Ib.i)(wb) || console.error(`Failed to get game ${bb}`, wb), null
      }
    }

    function zb(bb, wb, Mb) {
      Ob.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: wb,
        subtitle: Mb,
        confirmText: bb("general:ok"),
        cancelText: ""
      })
    }
  },
  10298: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(1455),
      Hb = Mb(1301),
      pb = Mb(661);

    function Vb(bb) {
      return bb = function(bb, wb) {
        var Mb;
        const eb = new URLSearchParams(wb),
          Hb = eb.get("lobby"),
          pb = eb.get("vm"),
          Vb = null !== (Mb = Hb) && void 0 !== Mb ? Mb : bb.lobbyName,
          gb = null !== pb && void 0 !== pb ? pb : bb.directJoinVmUrl;
        if (Vb === bb.lobbyName && gb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Vb,
          directJoinVmUrl: gb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, pb.K)(bb.directJoinVmUrl)) return bb;
        const wb = (0, Hb.X)(bb.directJoinVmUrl);
        null === wb && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, pb.K)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, eb.g)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  10292: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      e: () => Vb
    });
    var eb = Mb(214);
    class Hb {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(bb) || this.marks.set(bb, wb)
      }
      marked() {
        return eb.R.flatMap((bb => {
          var wb;
          const Mb = null !== (wb = this.marks.get(bb)) && void 0 !== wb ? wb : pb.marks.get(bb);
          return void 0 === Mb ? [] : [
            [bb, Mb]
          ]
        }))
      }
    }
    const pb = new Hb;

    function Vb(bb) {
      pb.mark(bb)
    }
  },
  10323: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => Hb
    });
    let eb = Promise.resolve();

    function Hb(bb) {
      eb = bb
    }

    function pb() {
      return eb
    }
  },
  10309: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Hb,
      i: () => pb,
      m: () => Vb
    });
    let eb = null;

    function Hb(bb, wb) {
      return `${wb}\n${null!==bb&&void 0!==bb?bb:""}`
    }

    function pb(bb) {
      eb = bb
    }

    function Vb(bb) {
      const wb = eb;
      return eb = null, null !== wb && wb.key === bb ? wb.settled : null
    }

    function gb(bb, wb, Mb, eb) {
      let Hb = !1;
      const pb = () => {
        null !== wb && !Hb && eb() && (Hb = !0, wb())
      };
      null !== wb && setTimeout(pb, 0), bb.then((bb => {
        pb(), Mb(bb)
      }))
    }
  },
  10286: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      importClientLoad: () => Ob,
      loadWasmPlay: () => Cb,
      loadWasmPlayAhead: () => Eb,
      loadWasmPreviews: () => Fb
    });
    var eb = Mb(4522),
      Hb = Mb(3287),
      pb = Mb(2364),
      Vb = Mb(5498),
      gb = Mb(4896),
      lb = Mb(5511),
      Lb = Mb(10292);
    let Ib = null;

    function Ob() {
      return Promise.all([Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(161), Mb.e(256), Mb.e(71)]).then((() => Mb(42346)))
    }

    function Ub() {
      return Promise.all([Mb.e(88), Mb.e(91), Mb.e(105), Mb.e(241), Mb.e(158), Mb.e(245), Mb.e(223), Mb.e(161), Mb.e(251), Mb.e(243), Mb.e(103), Mb.e(247), Mb.e(256), Mb.e(76)]).then((() => Mb(42531)))
    }

    function tb() {
      Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(105), Mb.e(102), Mb.e(307), Mb.e(127), Mb.e(281), Mb.e(255), Mb.e(247), Mb.e(55)]).then((() => Mb(42677))).catch((() => {}))
    }

    function Cb() {
      return Vb.b.cancelDownloadForJoin(), (0, gb.e)(), (0, Hb.f)(), (0, lb.f)(), (0, pb.j)(), tb(), Ob().then((bb => {
        let {
          startJoinLoad: wb
        } = bb;
        wb()
      }), (() => {})), Ib ??= Ub().then((bb => ((0, Lb.e)("phase_chunk"), bb.startWasmPlay(), (0, Lb.e)("phase_start"), bb.followPageUiPack((bb => {
        eb.d.showGamePack(bb)
      })), bb)), (bb => {
        throw Ib = null, bb
      })), Ib
    }

    function Eb() {
      return tb(), Mb.e(132).then((() => Mb(42721))).catch((() => {})), Ub().then((() => {
        (0, Lb.e)("phase_chunk")
      }))
    }

    function Fb() {
      return Ub().then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  10304: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Lb,
      e: () => Ib
    });
    var eb = Mb(192),
      Hb = Mb(1987),
      pb = Mb(4604),
      Vb = Mb(5112),
      gb = Mb(1958);
    const lb = new WeakSet;

    function Lb(bb) {
      return !0 !== bb.Yb && !(0, gb.b)(bb.error)
    }

    function Ib(bb) {
      const wb = bb.asError(),
        {
          debugResult: Mb
        } = wb;
      if (lb.has(Mb) || !Lb(Mb)) return;
      lb.add(Mb), console.log("Failed to join lobby:", wb.message);
      const gb = "timedOut" === Mb.gameServerUnreachable;
      (0, Hb.reportClientError)("matchmake_failed", wb.message, gb ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : eb.i[wb.code]);
      const {
        error: Ib
      } = Mb;
      if (Ib instanceof pb.l && "default" !== Ib.packSource) {
        const bb = (0, Vb.e)("js", "game" === Ib.packSource ? "game" : "page", (0, Vb.i)(Ib));
        (0, Hb.reportClientError)("texture_pack", Ib, bb)
      }
    }
  },
  10278: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Vb,
      f: () => gb,
      g: () => Lb,
      j: () => lb
    });
    var eb = Mb(225),
      Hb = Mb(5472);

    function pb(bb) {
      return Vb(bb) === eb.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Vb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function gb(bb) {
      var wb;
      return null !== (wb = Object.keys(Hb.c).find((wb => Hb.c[wb] === bb))) && void 0 !== wb ? wb : null
    }

    function lb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Lb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10270: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      e: () => lb
    });
    var eb = Mb(382);

    function Hb(bb) {
      if (!bb.startsWith("{")) return bb;
      let wb;
      try {
        wb = JSON.parse(bb)
      } catch {
        return bb
      }
      return function(bb) {
        if (null === (0, eb.Oe)(bb)) return !1;
        const {
          params: wb
        } = bb;
        return void 0 === wb || "object" === typeof wb && null !== wb && Object.values(wb).every((bb => "string" === typeof bb))
      }(wb) ? wb : bb
    }
    var pb = Mb(1259),
      Vb = Mb(1321);

    function gb(bb) {
      return (0, pb.x)(Vb.g.get().getCurrentLanguageCode(), bb.translationKey, bb.params)
    }

    function lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb(wb)
    }

    function Lb(bb) {
      const wb = Hb(bb);
      return "string" === typeof wb ? wb : gb({
        translationKey: "moderation:kicked",
        params: {
          reason: gb(wb)
        }
      })
    }
  },
  10316: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      h: () => pb,
      i: () => gb
    });
    var eb = Mb(1319);
    const Hb = new WeakSet;

    function pb(bb) {
      Hb.add(bb)
    }
    class Vb {
      constructor(bb, wb) {
        this.joinSignal = bb, this.onWaiting = wb, this.deadline = null, this.waits = 0, Hb.has(bb) && (this.deadline = performance.now())
      }
      async waitToAskAgain(bb) {
        if (this.joinSignal.aborted) return "left";
        const wb = function(bb, wb) {
            let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            const eb = Math.min(Math.max(bb * 2 ** wb, 2e3), 15e3);
            return Math.round(eb * (.75 + .5 * Mb()))
          }(bb, this.waits),
          Mb = performance.now();
        return this.deadline ??= Mb + 18e4, Mb + wb > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
          function(bb, wb) {
            if (wb.aborted) return Promise.resolve(!1);
            return new Promise((Mb => {
              const eb = () => {
                  clearTimeout(Hb), Mb(!1)
                },
                Hb = setTimeout((() => {
                  wb.removeEventListener("abort", eb), Mb(!0)
                }), bb);
              wb.addEventListener("abort", eb, {
                once: !0
              })
            }))
          }(wb, this.joinSignal) ? "again" : "left")
      }
      placed() {
        this.waits > 0 && this.onWaiting(!1)
      }
    }
    async function gb(bb, wb, Mb) {
      let Hb = bb;
      for (;;) {
        if (!Hb.result.isError()) return Mb.placed(), Hb;
        const bb = Hb.result.asError(),
          {
            retryAfterMs: pb,
            ...Vb
          } = bb.debugResult;
        if (void 0 === pb) return Hb;
        const gb = await Mb.waitToAskAgain(pb);
        if ("left" === gb) return null;
        if ("over" === gb) {
          return {
            result: eb.d.errorWithCode(bb.message, bb.code, {
              ...Vb,
              serverWaitEnded: !0
            }),
            at: Hb.at
          }
        }
        Hb = await wb()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);