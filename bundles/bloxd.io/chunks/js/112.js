export const id = 112;
export const ids = [112];
export const modules = {
  9129: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => be
    });
    var Ot = Vt(1623),
      qt = Vt(26),
      Dt = Vt(4802),
      mt = Vt(63),
      dt = Vt(1554);
    var jt = Vt(2024),
      Ht = Vt(1613),
      Xt = Vt(1450),
      Qt = Vt(1286),
      lt = Vt(184),
      Et = Vt(229),
      ft = Vt(1103),
      wt = Vt(1117),
      yt = Vt(1308),
      Nt = Vt(2427),
      Mt = Vt(1600),
      bt = Vt(1223),
      Jt = Vt(9133),
      Ct = Vt(1633);

    function ut(tt, et) {
      const Vt = !0 === et.debugResult.gameRefused,
        Ot = Vt || et.code === lt.n.REQUEST_TO_MATCHMAKING ? (0, Jt.j)(et.message) : null;
      if (null !== Ot) return Kt(tt, tt((0, Jt.n)(Ot)), tt(Jt.k[Ot])), !0;
      if (Vt) return async function(tt) {
        const {
          gameNameWithVariation: et,
          lobbyName: Vt,
          shownLobbyName: Ot
        } = jt.gameBridge.latest("connectedGame"), qt = "classic" === et && (0, yt.K)(Vt) ? Ot : await (0, Nt.e)(tt, et, Vt);
        return "" !== qt ? tt("general:cantJoinGame", {
          game: qt
        }) : tt("general:cantJoinThisGame")
      }(tt).then((Vt => {
        Kt(tt, Vt, et.message)
      })), !0;
      const {
        joinFailure: qt
      } = et.debugResult, Dt = "refused" === (null === qt || void 0 === qt ? void 0 : qt.at) ? qt.code : null;
      return Dt === Et.b.schematicNotPublished.code ? (async function(tt, et) {
        const Vt = (0, ft.p)(jt.gameBridge.latest("connectedGame").gameNameWithVariation),
          Ot = await async function(tt) {
            try {
              const et = await Mt.e.getGame(await bt.userContextManager.getCurrentUserContext(), tt, !0);
              return et.gamePublished ? null : et.name
            } catch (et) {
              return et instanceof lt.e && 435 === et.httpCode || console.error(`Failed to get unpublished game ${tt}`, et), null
            }
          }(Vt);
        if (null === Ot) return void Kt(tt, tt("general:cantJoinThisGame"), et);
        const qt = await Xt.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: tt("studio:gameNotPublishedTitle", {
            game: Ot
          }),
          confirmText: tt("studio:publishInStudio"),
          cancelText: tt("general:cancel")
        }).getResult();
        !0 === qt && (0, Ht.navigatePreserveSearch)((0, Ct.k)((0, wt.e)(Vt), "manage"))
      }(tt, et.message), !0) : Dt === Et.b.schematicBanned.code && (Kt(tt, tt("general:cantJoinThisGame"), et.message), !0)
    }

    function Kt(tt, et, Vt) {
      Xt.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: et,
        subtitle: Vt,
        confirmText: tt("general:ok"),
        cancelText: ""
      })
    }
    var ht = Vt(4725),
      vt = Vt(31),
      Wt = Vt(1333),
      St = Vt(1826),
      ct = Vt(106),
      Rt = Vt(1410),
      It = Vt(1543),
      Pt = Vt(4662),
      Zt = Vt(4467),
      Lt = Vt(4423),
      Ft = Vt(3305),
      kt = Vt(1429),
      Gt = Vt(839),
      zt = Vt(1314),
      ot = Vt(3353),
      rt = Vt(3217),
      Ut = Vt(1458),
      At = Vt(1436),
      it = Vt(5145),
      Yt = Vt(9138),
      Bt = Vt(3034),
      pt = Vt(1188);

    function xt(tt) {
      let {
        onApply: et,
        onSkip: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Qt.H)();
      return (0, mt.useEffect)((() => {
        Bt.e.skipPlayWait()
      }), []), (0, pt.jsx)(Ut.l, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, pt.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Ot("customTexturePack:downloadPrompt"), (0, pt.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Ot("customTexturePack:authorWarning")
          }), (0, pt.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Ot("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: et
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Vt
        }
      })
    }
    async function Tt() {
      let tt = !1;
      const et = Xt.NotificationProvider.showCustomPopup({
        body: et => (0, pt.jsx)(xt, {
          onApply: () => {
            tt = !0, et()
          },
          onSkip: et
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await et.getResult(), tt
    }
    let gt = {
      wanted: !1
    };
    let st = null;

    function nt(tt) {
      tt.setGamePackConfirm(Tt), st = tt
    }
    var te = Vt(3555);

    function ee(tt) {
      let {
        schematicId: et,
        texturePackKey: Vt,
        onClose: Ot
      } = tt;
      const [qt, Dt] = (0, mt.useState)("prompt"), [dt, jt] = (0, mt.useState)(null), Ht = (0, te.b)();

      function Xt() {
        Ot()
      }
      return "prompt" === qt ? (0, pt.jsx)(xt, {
        onApply: async function() {
          Dt("downloading");
          try {
            const tt = await async function(tt, et) {
              const Vt = await (0, it.e)(et);
              if (Vt) return {
                pack: Vt,
                key: et
              };
              const Ot = await bt.userContextManager.getCurrentUserContext(),
                qt = (await Mt.e.getGame(Ot, tt, !0)).customTexturePackKey;
              if (!qt) return null;
              const Dt = await (0, it.e)(qt);
              if (!Dt) throw new Error("The texture pack could not be found");
              return {
                pack: Dt,
                key: qt
              }
            }(et, Vt);
            if (!Ht.current) return;
            if (!tt) return void Ot();
            if ((0, ot.j)(tt.pack)) return void Dt("refused");
            rt.e.setFromJson(tt.pack, "customGame"), await rt.e.saveTemporaryTexturePack(tt.key), Ht.current && (0, St.reloadBloxd)()
          } catch (tt) {
            jt(tt instanceof Error ? tt.message : String(tt)), Dt("error")
          }
        },
        onSkip: Xt
      }) : "downloading" === qt ? (0, pt.jsx)(Ut.l, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, pt.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, pt.jsx)(At.b, {
            showFace: !0
          })
        })
      }) : "error" === qt ? (0, pt.jsx)(Ut.l, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: dt,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Xt
        }
      }) : "refused" === qt ? (0, pt.jsx)(Ut.l, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Xt
        }
      }) : null
    }
    var Ve = Vt(9148),
      Oe = Vt(4408),
      qe = Vt(1867),
      De = Vt(3012),
      me = Vt(4415),
      de = Vt(2203),
      je = Vt(9154);
    var He = Vt(4830),
      Xe = Vt(1397),
      Qe = Vt(1824),
      le = Vt(725),
      Ee = Vt(809),
      fe = Vt(1883);

    function we() {
      const tt = qt.b.get("clientEscMenuOptions");
      jt.gameBridge.send("setLookSensitivity", qt.b.get("isTouchScreen") ? (0, Ee.p)(tt) : tt.mouseSensitivity)
    }
    const ye = 45e3;

    function Ne(tt) {
      const et = tt.asError();
      if (et.debugResult.nV || (0, Qe.e)(et.debugResult.error)) return;
      console.log("Failed to join lobby:", et.message);
      const Vt = "timedOut" === et.debugResult.gameServerUnreachable;
      (0, De.reportClientError)("matchmake_failed", et.message, Vt ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : lt.n[et.code]);
      const {
        error: Ot
      } = et.debugResult;
      if (Ot instanceof Ft.o && "default" !== Ot.packSource) {
        const tt = (0, me.d)("js", "game" === Ot.packSource ? "game" : "page", (0, me.g)(Ot));
        (0, De.reportClientError)("texture_pack", Ot, tt)
      }
    }

    function ae(tt) {
      if (null === tt || void 0 === tt || !tt.isError()) return !1;
      const et = tt.asError();
      return et.code === lt.n.REQUEST_TO_MATCHMAKING && !(0, Qe.e)(et.debugResult.error)
    }
    async function Me(tt, et, Vt) {
      const Ot = (0, He.J)(et);
      async function mt(tt, et, Vt, Ot) {
        var mt;
        if (Ot.aborted) return null;
        null === qt.b.get("gameEntrySource") && (0, qt.i)("directPlayUrl"), le.K && (0, Yt.d)().catch((() => {})), qt.b.set({
          gameState: "findingLobby"
        }), vt.j.sw("loadingScreenState", "loadingPage:findingLobby");
        const dt = await bt.userContextManager.getCurrentUserContext();
        jt.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: et,
          discordContext: tt instanceof zt.h ? tt.getSerialisableParams() : null
        }), (0, qe.f)(null !== (mt = Bt.e.playInputAt()) && void 0 !== mt ? mt : performance.now());
        const Ht = await async function(tt, et, Vt, Ot, qt) {
          try {
            await (0, fe.h)(Dt.reqLibsLoadedPromise, ye, "Required libraries timed out")
          } catch (mt) {
            const tt = mt instanceof fe.d ? `Required libraries still loading after ${ye/1e3} s: ${(0,Dt.requiredLibsPending)().join(", ")}` : mt.toString();
            return Wt.e.errorWithCode(tt, lt.n.LOAD_REQUIRED_LIBS, {
              error: mt,
              severity: "medium"
            })
          }
          return vt.j.sw("matchmakeAndPlayStepCompleted", {
            step: lt.n.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Dt.matchmakeAndPlayMaybeUnloaded)(tt, et, Vt, Ot, qt)
        }(tt, et, Vt, dt, Ot), Xt = Ht.isError() ? Ht.asError() : null;
        if (Ot.aborted) return Xt && Ne(Ht), jt.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Xt && void 0 !== Xt && Xt.debugResult.nV) return console.log("Join cancelled:", Xt.message), null;
        if (Xt) return Ht;
        const {
          gameNameWithVariation: Qt,
          lobbyName: Et
        } = Ht.getValue();
        return we(), (0, Xe.I)().setGameViewShown(!0), dt.recordJoin(Qt, Et), (0, Rt.Q)(), Ht
      }
      return Ot && (0, qt.i)("updateRejoin"), (0, de.l)((async qt => {
        try {
          var Dt;
          let dt = tt,
            jt = await mt(dt, et, Vt, qt);
          for (let tt = 0; Ot && tt < He.k && (ae(jt) && await (0, He.N)((0, He.t)(tt), qt)); tt++) dt = (0, He.w)(dt, tt + 1, "string" === typeof dt && (0, yt.P)(dt)), jt = await mt(dt, et, Vt, qt);
          return null !== (Dt = jt) && void 0 !== Dt && Dt.isError() && Ne(jt), jt
        } catch (dt) {
          if ((0, De.reportClientError)("matchmake_failed", dt, "unexpected"), jt.gameBridge.send("leaveGame", {
              reloadPath: qt.aborted ? null : "/"
            }), qt.aborted) return null;
          throw dt
        }
      }), (async tt => {
        var Vt;
        if (Ot) return;
        const qt = (0, Rt.K)();
        null !== qt && (await qt, tt.aborted) || (null !== (Vt = Gt.c[et]) && void 0 !== Vt && Vt.playAdBeforeMatchmaking ? (Bt.e.skipPlayWait(), await new Promise((tt => {
          (0, Rt.ab)((() => {
            tt(!0)
          }), "video_start")
        }))) : (0, Rt.ab)((() => {}), "video_start"))
      }))
    }

    function be() {
      const {
        t: tt
      } = (0, Qt.H)(), et = (0, Ht.useNavigatePreserveSearch)(), Vt = (0, Ot.s)(), Et = (0, Ot.B)(), wt = (0, mt.useRef)({
        t: tt,
        navigate: et
      });
      wt.current = {
        t: tt,
        navigate: et
      };
      const Jt = (0, mt.useRef)("");
      Jt.current = Vt.pathname + Vt.search;
      const {
        gameState: Ct,
        clientEscMenuOptions: Kt
      } = (0, qt.k)(["gameState", "clientEscMenuOptions"]), vt = (0, mt.useRef)(null), zt = (0, mt.useRef)(!1);
      var ot;
      (0, de.o)(), (0, de.r)(), ot = le.K, (0, mt.useEffect)((() => {
        if (!ot) return;
        let tt = !0;
        return (0, Yt.d)().then((et => {
          tt && nt(et)
        })).catch((() => {})), () => {
          var et;
          tt = !1, gt.wanted = !1, null === (et = st) || void 0 === et || et.setGamePackConfirm(null), st = null
        }
      }), [ot]), (0, mt.useEffect)((() => {
        var tt, et, Ot;
        (0, Dt.needGameClientNow)();
        const {
          t: mt,
          navigate: dt
        } = wt.current, Qt = (0, Ve.b)(Et, Vt.search);
        if (Et.lobbyName && !new URLSearchParams(Vt.search).has("lobby")) return void dt((0, kt.c)(Qt.gameNameWithVariation, Qt.lobbyName), {
          replace: !0
        });
        let Ct = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Vt.pathname) {
          const tt = qt.b.get("discordContext");
          if (!tt) return void dt("/");
          Ct = ht.e.setupDiscordLobby(tt, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: tt
          }))).catch((et => (console.error("Failed to setup discord lobby", et), {
            shouldMatchmake: !1,
            discordContext: tt
          })))
        } else if (!Qt.gameNameWithVariation || !(0, yt.M)(Qt.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Qt.gameNameWithVariation}`), void dt(-1);
        const Kt = vt.current;
        if (null !== Kt && Qt.gameNameWithVariation === Kt.gameNameWithVariation && Qt.lobbyName === Kt.lobbyName) return;
        if (jt.gameBridge.latest("connectedGame").replay) return void(0, de.h)(null);
        if ("releaseCountdown" === (null === (tt = (0, Nt.i)(Qt.gameNameWithVariation)) || void 0 === tt ? void 0 : tt.type)) return console.error(`Game hasn't been released yet: ${Qt.gameNameWithVariation}`), void dt(-1);
        const It = zt.current;
        zt.current = !1, (0, Rt.L)(), qt.b.set({
          gameState: "loadingScreen"
        });
        const ot = function() {
            gt.wanted = !1;
            const tt = {
              wanted: !0
            };
            return gt = tt, () => tt.wanted
          }(),
          Ut = Qt.gameNameWithVariation;
        if (Ut && (le.K || (0, ft.k)(Ut))) {
          const tt = le.K ? Promise.all([(0, Yt.d)(), bt.userContextManager.getCurrentUserContext()]).then((tt => {
            let [et, Vt] = tt;
            if (ot()) return nt(et), et.packForGame(Ut, Vt, ot)
          })) : async function(tt) {
            await rt.e.indexedDbValuesAreLoaded();
            const et = await bt.userContextManager.getCurrentUserContext(),
              Vt = (0, ft.p)(tt);
            let Ot;
            try {
              Ot = await Mt.e.getGame(et, Vt, !0)
            } catch (mt) {
              return void console.error("Failed to get game", mt)
            }
            const qt = Ot.customTexturePackKey;
            if (!qt) return void(rt.e.isUsingTemporaryTexturePack() && ((0, St.reloadBloxd)(), await new Promise((() => {}))));
            if (rt.e.isUsingTemporaryTexturePack() && rt.e.getTemporaryTexturePackSource() === qt) return;
            const Dt = Xt.NotificationProvider.showCustomPopup({
              body: tt => (0, pt.jsx)(ee, {
                schematicId: Vt,
                texturePackKey: qt,
                onClose: tt
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Dt.getResult()
          }(Ut), et = Ct;
          Ct = tt.catch((tt => {
            console.error("Failed to check for custom texture pack", tt)
          })).then((() => et))
        }
        const At = {
          wasm: le.K,
          game: Qt.gameNameWithVariation,
          custom: void 0 !== Ut && (0, ft.k)(Ut),
          lobbyName: null !== (et = Qt.lobbyName) && void 0 !== et ? et : null,
          direct: null !== Qt.directJoinVmUrl && void 0 !== Qt.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === Vt.pathname,
          adBeforeMatchmaking: void 0 !== Ut && !0 === (null === (Ot = Gt.c[Ut]) || void 0 === Ot ? void 0 : Ot.playAdBeforeMatchmaking),
          afterAnother: null !== vt.current || (0, de.d)()
        };
        (0, je.e)(null);
        const it = !(Bt = At).wasm || void 0 === Bt.game || Bt.custom || Bt.direct || Bt.discord || Bt.adBeforeMatchmaking || Bt.afterAnother ? null : () => {
          ! function(tt, et) {
            (0, je.e)({
              key: (0, je.d)(tt, et),
              settled: Promise.all([Dt.matchmakingLibrariesPromise, bt.userContextManager.getCurrentUserContext()]).then((Vt => {
                let [Ot, qt] = Vt;
                if (void 0 === Ot.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return Ot.matchmakeForAhead(tt, et, qt)
              })).catch((tt => ({
                result: Wt.e.errorWithCode(String(tt), lt.n.REQUEST_TO_MATCHMAKING, {
                  error: tt,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(At.lobbyName, At.game)
        };
        var Bt;
        const xt = null !== vt.current;
        vt.current = null, (0, de.h)(null);
        const Tt = () => {
          It ? (0, Ht.navigateToHomePage)() : (zt.current = xt, dt(-1))
        };
        let st = !1;
        const te = Vt.pathname + Vt.search,
          qe = () => !st && Jt.current === te;
        return (0, je.b)(Ct, it, (tt => {
          let {
            shouldMatchmake: et,
            discordContext: Vt
          } = tt;
          qe() && (et ? Me(null !== Vt && void 0 !== Vt ? Vt : Qt.lobbyName, Vt ? "classic" : Qt.gameNameWithVariation, Qt.directJoinVmUrl).then((tt => {
            if (null !== tt && qe())
              if (tt.isError()) {
                var et;
                const Vt = tt.asError(),
                  Ot = null !== (et = Vt.debugResult.severity) && void 0 !== et ? et : "high";
                if ((0, Qe.e)(Vt.debugResult.error)) return void Qe.i.reload();
                if (Vt.code === lt.n.SHADER_PACK) return void(0, Oe.d)(Vt.message, dt);
                const Dt = qt.b.get("gameEntrySource"),
                  Ht = Vt.code === lt.n.INITIALISE_WEBGL ? (0, Zt.c)() : null,
                  {
                    error: Et
                  } = Vt.debugResult;
                let ft;
                if (ut(mt, Vt)) ft = Promise.resolve(!1);
                else if (null !== Ht) ft = (0, Zt.h)(Ht);
                else if (Et instanceof Ft.o) ft = (0, Lt.g)(Et);
                else {
                  let tt;
                  switch (Ot) {
                    case "low":
                      tt = "face-diagonal-mouth";
                      break;
                    case "medium":
                      tt = "face-worried";
                      break;
                    case "high":
                      tt = "face-dizzy"
                  }
                  const et = Et instanceof fe.d;
                  let qt = Vt.message;
                  et ? qt = mt("general:gameFilesStalled") : Vt.debugResult.gameServerUnreachable && (qt = mt((0, ct.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  ft = Xt.NotificationProvider.showPromptPopup({
                    icon: tt,
                    title: lt.D[Vt.code],
                    subtitle: (0, pt.jsxs)(pt.Fragment, {
                      children: [qt, Et instanceof Error && !et && (0, pt.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, pt.jsx)(Pt.e, {
                          errorString: Et.stack
                        })
                      })]
                    }),
                    confirmText: mt("general:tryAgain"),
                    cancelText: mt("general:cancel")
                  }).getResult().then((tt => !0 === tt))
                }
                ft.then((tt => {
                  if (tt) {
                    (0, qt.i)(Dt);
                    const tt = (0, kt.c)(Qt.gameNameWithVariation, Qt.lobbyName);
                    "low" === Ot ? dt(tt) : (0, St.reloadBloxd)(tt)
                  }
                })), jt.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Tt()
              } else {
                const {
                  gameNameWithVariation: et,
                  lobbyName: Vt
                } = tt.getValue();
                vt.current = {
                  gameNameWithVariation: et,
                  lobbyName: Vt
                };
                const Ot = (0, kt.c)(et, Vt);
                dt(Ot, {
                  replace: !0
                })
              }
          })).catch((tt => {
            if (!qe()) return;
            Xt.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, pt.jsxs)(pt.Fragment, {
                children: [mt("homePage:pleaseCopyError"), (0, pt.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, pt.jsx)(Pt.e, {
                    errorString: tt.stack
                  })
                })]
              }),
              confirmText: mt("general:tryAgain"),
              cancelText: mt("general:cancel")
            }).getResult().then((tt => {
              !0 === tt && (0, St.reloadBloxd)((0, kt.c)(Qt.gameNameWithVariation, Qt.lobbyName))
            })), Tt()
          })) : dt(-1))
        }), qe), () => {
          st = !0
        }
      }), [Et, Vt.search, Vt.pathname]), (0, mt.useEffect)((() => {
        Kt.disableFullscreen && (0, It.h)() ? (0, It.l)() : !Kt.disableFullscreen && (0, It.i)() && (0, It.q)({
          automatic: !0
        })
      }), [Ct, Kt]), (0, mt.useEffect)((() => {
        "inGame" === Ct && we()
      }), [Ct, Kt]), (0, mt.useEffect)((() => {
        "inGame" !== Ct && qt.b.set({
          openInGameMenuName: null
        })
      }), [Ct]);
      const Ut = function(tt) {
        const et = (0, qt.f)(tt),
          [Vt, Ot] = (0, mt.useState)(0),
          [Dt, jt] = (0, mt.useState)(!1);
        (0, dt.f)("gameJoined", (() => {
          (0, qt.f)(qt.b.get("gameState")) && (Ot((tt => tt + 1)), jt(!0))
        })), (0, mt.useEffect)((() => {
          et || jt(!1)
        }), [et]);
        const Ht = "inGame" === tt;
        return {
          mounted: Ht || et && Dt,
          shown: Ht,
          key: Vt
        }
      }(Ct);
      return (0, pt.jsx)(pt.Fragment, {
        children: Ut.mounted && (0, pt.jsx)(Dt.InGameUi, {
          shown: Ut.shown
        }, Ut.key)
      })
    }
  },
  5145: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(1293);
    async function qt(tt) {
      const et = await fetch(`${Ot.clientSideServerUrls.s3Url}/${tt}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === et.status || 403 === et.status) return null;
      if (!et.ok) throw new Error(`Failed to download the texture pack (${et.status})`);
      return await et.json()
    }
  },
  9148: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(1429),
      qt = Vt(1308),
      Dt = Vt(710);

    function mt(tt) {
      return tt = function(tt, et) {
        var Vt;
        const Ot = new URLSearchParams(et),
          qt = Ot.get("lobby"),
          Dt = Ot.get("vm"),
          mt = null !== (Vt = qt) && void 0 !== Vt ? Vt : tt.lobbyName,
          dt = null !== Dt && void 0 !== Dt ? Dt : tt.directJoinVmUrl;
        if (mt === tt.lobbyName && dt === tt.directJoinVmUrl) return tt;
        return {
          ...tt,
          lobbyName: mt,
          directJoinVmUrl: dt
        }
      }(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), tt = function(tt) {
        if ((0, Dt.B)(tt.directJoinVmUrl)) return tt;
        const et = (0, qt.ab)(tt.directJoinVmUrl);
        null === et && (tt.directJoinVmUrl = void 0);
        return tt
      }(tt = function(tt) {
        if ((0, Dt.B)(tt.gameNameWithVariation)) return tt;
        return tt.gameNameWithVariation = (0, Ot.j)(tt.gameNameWithVariation), tt
      }(tt))
    }
  },
  9140: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      d: () => qt
    });
    let Ot = !1;

    function qt() {
      Ot = !0
    }

    function Dt() {
      return Ot
    }
  },
  9154: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      d: () => qt,
      e: () => Dt,
      f: () => mt
    });
    let Ot = null;

    function qt(tt, et) {
      return `${et}\n${null!==tt&&void 0!==tt?tt:""}`
    }

    function Dt(tt) {
      Ot = tt
    }

    function mt(tt) {
      const et = Ot;
      return Ot = null, null !== et && et.key === tt ? et.settled : null
    }

    function dt(tt, et, Vt, Ot) {
      let qt = !1;
      null !== et && setTimeout((() => {
        Ot() && !qt && et()
      }), 0), tt.then((tt => {
        qt = !0, Vt(tt)
      }))
    }
  },
  9138: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Et,
      d: () => lt,
      f: () => ft
    });
    var Ot = Vt(3217),
      qt = Vt(2331),
      Dt = Vt(2208),
      mt = Vt(4791),
      dt = Vt(3564),
      jt = Vt(9140);
    let Ht = null;

    function Xt() {
      return Promise.all([Vt.e(75), Vt.e(78), Vt.e(90), Vt.e(215), Vt.e(214), Vt.e(160), Vt.e(137), Vt.e(198), Vt.e(140), Vt.e(88), Vt.e(275), Vt.e(64)]).then((() => Vt(40874)))
    }

    function Qt() {
      Promise.all([Vt.e(73), Vt.e(76), Vt.e(75), Vt.e(74), Vt.e(90), Vt.e(87), Vt.e(273), Vt.e(191), Vt.e(228), Vt.e(252), Vt.e(275), Vt.e(47)]).then((() => Vt(41197))).catch((() => {}))
    }

    function lt() {
      return mt.d.cancelDownloadForJoin(), (0, dt.c)(), (0, qt.f)(), (0, jt.d)(), (0, Dt.h)(), Qt(), Promise.all([Vt.e(78), Vt.e(90), Vt.e(215), Vt.e(214), Vt.e(137), Vt.e(140), Vt.e(59)]).then((() => Vt(41248))).then((tt => {
        let {
          startJoinLoad: et
        } = tt;
        et()
      }), (() => {})), Ht ??= Xt().then((tt => (tt.startWasmPlay(), tt.followPageUiPack((tt => {
        Ot.e.showGamePack(tt)
      })), tt)), (tt => {
        throw Ht = null, tt
      })), Ht
    }

    function Et() {
      return Qt(), Vt.e(276).then((() => Vt(41257))).catch((() => {})), Xt().then((() => {}))
    }

    function ft() {
      return Xt().then((tt => {
        tt.startWasmPreviews(), tt.prefetchWasmPreviews()
      }))
    }
  },
  9133: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt,
      j: () => dt,
      k: () => Ht,
      n: () => jt
    });
    var Ot = Vt(229),
      qt = Vt(4771);

    function Dt(tt) {
      return mt(tt) === Ot.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mt(tt) {
      return "object" === typeof tt && null !== tt ? tt.code : void 0
    }

    function dt(tt) {
      var et;
      return null !== (et = Object.keys(qt.e).find((et => qt.e[et] === tt))) && void 0 !== et ? et : null
    }

    function jt(tt) {
      return "notWhitelisted" === tt ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Ht = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);