export const id = 110;
export const ids = [110];
export const modules = {
  8874: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => JF
    });
    var Xk = Ik(1485),
      Tk = Ik(25),
      ik = Ik(4645),
      yk = Ik(58),
      lk = Ik(1402);
    var ak = Ik(1875),
      qk = Ik(1475),
      Lk = Ik(1324),
      tk = Ik(1179),
      Zk = Ik(149),
      jk = Ik(187),
      ek = Ik(1018),
      wk = Ik(1023),
      Hk = Ik(1217),
      Jk = Ik(2291),
      xk = Ik(1453),
      Pk = Ik(1120),
      Kk = Ik(8880),
      Qk = Ik(1504);

    function sk(kk, Fk) {
      const Ik = !0 === Fk.debugResult.gameRefused,
        Xk = Ik || Fk.code === Zk.j.REQUEST_TO_MATCHMAKING ? (0, Kk.j)(Fk.message) : null;
      if (null !== Xk) return Vk(kk, kk((0, Kk.p)(Xk)), kk(Kk.n[Xk])), !0;
      if (Ik) return async function(kk) {
        const {
          gameNameWithVariation: Fk,
          lobbyName: Ik,
          shownLobbyName: Xk
        } = ak.gameBridge.latest("connectedGame"), Tk = "classic" === Fk && (0, Hk.G)(Ik) ? Xk : await (0, Jk.c)(kk, Fk, Ik);
        return "" !== Tk ? kk("general:cantJoinGame", {
          game: Tk
        }) : kk("general:cantJoinThisGame")
      }(kk).then((Ik => {
        Vk(kk, Ik, Fk.message)
      })), !0;
      const {
        joinFailure: Tk
      } = Fk.debugResult, ik = "refused" === (null === Tk || void 0 === Tk ? void 0 : Tk.at) ? Tk.code : null;
      return ik === jk.d.schematicNotPublished.code ? (async function(kk, Fk) {
        const Ik = (0, ek.n)(ak.gameBridge.latest("connectedGame").gameNameWithVariation),
          Xk = await async function(kk) {
            try {
              const Fk = await xk.e.getGame(await Pk.userContextManager.getCurrentUserContext(), kk, !0);
              return Fk.gamePublished ? null : Fk.name
            } catch (Fk) {
              return Fk instanceof Zk.b && 435 === Fk.httpCode || console.error(`Failed to get unpublished game ${kk}`, Fk), null
            }
          }(Ik);
        if (null === Xk) return void Vk(kk, kk("general:cantJoinThisGame"), Fk);
        const Tk = await Lk.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: kk("studio:gameNotPublishedTitle", {
            game: Xk
          }),
          confirmText: kk("studio:publishInStudio"),
          cancelText: kk("general:cancel")
        }).getResult();
        !0 === Tk && (0, qk.navigatePreserveSearch)((0, Qk.m)((0, wk.c)(Ik), "manage"))
      }(kk, Fk.message), !0) : ik === jk.d.schematicBanned.code && (Vk(kk, kk("general:cantJoinThisGame"), Fk.message), !0)
    }

    function Vk(kk, Fk, Ik) {
      Lk.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Fk,
        subtitle: Ik,
        confirmText: kk("general:ok"),
        cancelText: ""
      })
    }
    var zk = Ik(4584),
      Sk = Ik(34),
      vk = Ik(1234),
      Ek = Ik(1665),
      Ok = Ik(95),
      nk = Ik(1287),
      Gk = Ik(1395),
      pk = Ik(4512),
      uk = Ik(4328),
      bk = Ik(4289),
      Rk = Ik(3170),
      Uk = Ik(1308),
      Ck = Ik(768),
      Nk = Ik(1220),
      ck = Ik(3240),
      Wk = Ik(3089),
      fk = Ik(1331),
      Bk = Ik(1318),
      dk = Ik(4976),
      Yk = Ik(8888),
      Ak = Ik(2873),
      gk = Ik(1096);

    function mk(kk) {
      let {
        onApply: Fk,
        onSkip: Ik
      } = kk;
      const {
        t: Xk
      } = (0, tk.y)();
      return (0, yk.useEffect)((() => {
        Ak.f.skipPlayWait()
      }), []), (0, gk.jsx)(fk.l, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, gk.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Xk("customTexturePack:downloadPrompt"), (0, gk.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Xk("customTexturePack:authorWarning")
          }), (0, gk.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Xk("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Fk
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Ik
        }
      })
    }
    async function hk() {
      let kk = !1;
      const Fk = Lk.NotificationProvider.showCustomPopup({
        body: Fk => (0, gk.jsx)(mk, {
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
    let rk = {
      wanted: !1
    };
    let Dk = null;

    function Mk(kk) {
      kk.setGamePackConfirm(hk), Dk = kk
    }
    var kF = Ik(3428);

    function FF(kk) {
      let {
        schematicId: Fk,
        texturePackKey: Ik,
        onClose: Xk
      } = kk;
      const [Tk, ik] = (0, yk.useState)("prompt"), [lk, ak] = (0, yk.useState)(null), qk = (0, kF.d)();

      function Lk() {
        Xk()
      }
      return "prompt" === Tk ? (0, gk.jsx)(mk, {
        onApply: async function() {
          ik("downloading");
          try {
            const kk = await async function(kk, Fk) {
              const Ik = await (0, dk.c)(Fk);
              if (Ik) return {
                pack: Ik,
                key: Fk
              };
              const Xk = await Pk.userContextManager.getCurrentUserContext(),
                Tk = (await xk.e.getGame(Xk, kk, !0)).customTexturePackKey;
              if (!Tk) return null;
              const ik = await (0, dk.c)(Tk);
              if (!ik) throw new Error("The texture pack could not be found");
              return {
                pack: ik,
                key: Tk
              }
            }(Fk, Ik);
            if (!qk.current) return;
            if (!kk) return void Xk();
            if ((0, ck.k)(kk.pack)) return void ik("refused");
            Wk.b.setFromJson(kk.pack, "customGame"), await Wk.b.saveTemporaryTexturePack(kk.key), qk.current && (0, Ek.reloadBloxd)()
          } catch (kk) {
            ak(kk instanceof Error ? kk.message : String(kk)), ik("error")
          }
        },
        onSkip: Lk
      }) : "downloading" === Tk ? (0, gk.jsx)(fk.l, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, gk.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, gk.jsx)(Bk.c, {
            showFace: !0
          })
        })
      }) : "error" === Tk ? (0, gk.jsx)(fk.l, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: lk,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Lk
        }
      }) : "refused" === Tk ? (0, gk.jsx)(fk.l, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Lk
        }
      }) : null
    }
    var IF = Ik(8898),
      XF = Ik(4276),
      TF = Ik(1712),
      iF = Ik(2852),
      yF = Ik(4284),
      lF = Ik(2056),
      aF = Ik(4671),
      qF = Ik(1276),
      LF = Ik(1658),
      tF = Ik(646),
      ZF = Ik(737);

    function jF() {
      const kk = Tk.d.get("clientEscMenuOptions");
      ak.gameBridge.send("setLookSensitivity", Tk.d.get("isTouchScreen") ? (0, ZF.l)(kk) : kk.mouseSensitivity)
    }

    function eF(kk) {
      const Fk = kk.asError();
      if (Fk.debugResult.iI || (0, LF.d)(Fk.debugResult.error)) return;
      console.log("Failed to join lobby:", Fk.message);
      const Ik = "timedOut" === Fk.debugResult.gameServerUnreachable;
      (0, iF.reportClientError)("matchmake_failed", Fk.message, Ik ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Zk.j[Fk.code]);
      const {
        error: Xk
      } = Fk.debugResult;
      if (Xk instanceof Rk.o && "default" !== Xk.packSource) {
        const kk = (0, yF.e)("js", "game" === Xk.packSource ? "game" : "page", (0, yF.g)(Xk));
        (0, iF.reportClientError)("texture_pack", Xk, kk)
      }
    }

    function wF(kk) {
      if (null === kk || void 0 === kk || !kk.isError()) return !1;
      const Fk = kk.asError();
      return Fk.code === Zk.j.REQUEST_TO_MATCHMAKING && !(0, LF.d)(Fk.debugResult.error)
    }
    async function HF(kk, Fk, Ik) {
      const Xk = (0, aF.I)(Fk);
      async function yk(kk, Fk, Ik, Xk) {
        var yk;
        if (Xk.aborted) return null;
        null === Tk.d.get("gameEntrySource") && (0, Tk.h)("directPlayUrl"), tF.x && (0, Yk.f)().catch((() => {})), Tk.d.set({
          gameState: "findingLobby"
        }), Sk.g.GL("loadingScreenState", "loadingPage:findingLobby");
        const lk = await Pk.userContextManager.getCurrentUserContext();
        ak.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Fk,
          discordContext: kk instanceof Nk.e ? kk.getSerialisableParams() : null
        }), (0, TF.d)(null !== (yk = Ak.f.playInputAt()) && void 0 !== yk ? yk : performance.now());
        const qk = await async function(kk, Fk, Ik, Xk, Tk) {
          try {
            await ik.reqLibsLoadedPromise
          } catch (yk) {
            return vk.b.errorWithCode(yk.toString(), Zk.j.LOAD_REQUIRED_LIBS, {
              error: yk,
              severity: "medium"
            })
          }
          return Sk.g.GL("matchmakeAndPlayStepCompleted", {
            step: Zk.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, ik.matchmakeAndPlayMaybeUnloaded)(kk, Fk, Ik, Xk, Tk)
        }(kk, Fk, Ik, lk, Xk), Lk = qk.isError() ? qk.asError() : null;
        if (Xk.aborted) return Lk && eF(qk), ak.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Lk && void 0 !== Lk && Lk.debugResult.iI) return console.log("Join cancelled:", Lk.message), null;
        if (Lk) return qk;
        const {
          gameNameWithVariation: tk,
          lobbyName: jk
        } = qk.getValue();
        return jF(), (0, qF.I)().setGameViewShown(!0), lk.recordJoin(tk, jk), (0, nk.L)(), qk
      }
      return Xk && (0, Tk.h)("updateRejoin"), (0, lF.j)((async Tk => {
        try {
          var ik;
          let lk = kk,
            ak = await yk(lk, Fk, Ik, Tk);
          for (let kk = 0; Xk && kk < aF.j && (wF(ak) && await (0, aF.L)((0, aF.s)(kk), Tk)); kk++) lk = (0, aF.v)(lk, kk + 1, "string" === typeof lk && (0, Hk.K)(lk)), ak = await yk(lk, Fk, Ik, Tk);
          return null !== (ik = ak) && void 0 !== ik && ik.isError() && eF(ak), ak
        } catch (lk) {
          if ((0, iF.reportClientError)("matchmake_failed", lk, "unexpected"), ak.gameBridge.send("leaveGame", {
              reloadPath: Tk.aborted ? null : "/"
            }), Tk.aborted) return null;
          throw lk
        }
      }), (async kk => {
        var Ik;
        if (Xk) return;
        const Tk = (0, nk.D)();
        null !== Tk && (await Tk, kk.aborted) || (null !== (Ik = Ck.e[Fk]) && void 0 !== Ik && Ik.playAdBeforeMatchmaking ? (Ak.f.skipPlayWait(), await new Promise((kk => {
          (0, nk.bb)((() => {
            kk(!0)
          }), "video_start")
        }))) : (0, nk.bb)((() => {}), "video_start"))
      }))
    }

    function JF() {
      const {
        t: kk
      } = (0, tk.y)(), Fk = (0, qk.useNavigatePreserveSearch)(), Ik = (0, Xk.q)(), jk = (0, Xk.A)(), wk = (0, yk.useRef)({
        t: kk,
        navigate: Fk
      });
      wk.current = {
        t: kk,
        navigate: Fk
      };
      const Kk = (0, yk.useRef)("");
      Kk.current = Ik.pathname + Ik.search;
      const {
        gameState: Qk,
        clientEscMenuOptions: Vk
      } = (0, Tk.j)(["gameState", "clientEscMenuOptions"]), Sk = (0, yk.useRef)(null), vk = (0, yk.useRef)(!1);
      var Ck;
      (0, lF.k)(), (0, lF.l)(), Ck = tF.x, (0, yk.useEffect)((() => {
        if (!Ck) return;
        let kk = !0;
        return (0, Yk.f)().then((Fk => {
          kk && Mk(Fk)
        })).catch((() => {})), () => {
          var Fk;
          kk = !1, rk.wanted = !1, null === (Fk = Dk) || void 0 === Fk || Fk.setGamePackConfirm(null), Dk = null
        }
      }), [Ck]), (0, yk.useEffect)((() => {
        var kk;
        (0, ik.needGameClientNow)();
        const {
          t: Fk,
          navigate: Xk
        } = wk.current, yk = (0, IF.d)(jk, Ik.search);
        if (jk.lobbyName && !new URLSearchParams(Ik.search).has("lobby")) return void Xk((0, Uk.e)(yk.gameNameWithVariation, yk.lobbyName), {
          replace: !0
        });
        let lk = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Ik.pathname) {
          const kk = Tk.d.get("discordContext");
          if (!kk) return void Xk("/");
          lk = zk.c.setupDiscordLobby(kk, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: kk
          }))).catch((Fk => (console.error("Failed to setup discord lobby", Fk), {
            shouldMatchmake: !1,
            discordContext: kk
          })))
        } else if (!yk.gameNameWithVariation || !(0, Hk.J)(yk.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${yk.gameNameWithVariation}`), void Xk(-1);
        const tk = Sk.current;
        if (null !== tk && yk.gameNameWithVariation === tk.gameNameWithVariation && yk.lobbyName === tk.lobbyName) return;
        if (ak.gameBridge.latest("connectedGame").replay) return void(0, lF.g)(null);
        if ("releaseCountdown" === (null === (kk = (0, Jk.d)(yk.gameNameWithVariation)) || void 0 === kk ? void 0 : kk.type)) return console.error(`Game hasn't been released yet: ${yk.gameNameWithVariation}`), void Xk(-1);
        const Qk = vk.current;
        vk.current = !1, (0, nk.G)(), Tk.d.set({
          gameState: "loadingScreen"
        });
        const Vk = function() {
            rk.wanted = !1;
            const kk = {
              wanted: !0
            };
            return rk = kk, () => kk.wanted
          }(),
          Gk = yk.gameNameWithVariation;
        if (Gk && (tF.x || (0, ek.j)(Gk))) {
          const kk = tF.x ? Promise.all([(0, Yk.f)(), Pk.userContextManager.getCurrentUserContext()]).then((kk => {
            let [Fk, Ik] = kk;
            if (Vk()) return Mk(Fk), Fk.packForGame(Gk, Ik, Vk)
          })) : async function(kk) {
            await Wk.b.indexedDbValuesAreLoaded();
            const Fk = await Pk.userContextManager.getCurrentUserContext(),
              Ik = (0, ek.n)(kk);
            let Xk;
            try {
              Xk = await xk.e.getGame(Fk, Ik, !0)
            } catch (yk) {
              return void console.error("Failed to get game", yk)
            }
            const Tk = Xk.customTexturePackKey;
            if (!Tk) return void(Wk.b.isUsingTemporaryTexturePack() && ((0, Ek.reloadBloxd)(), await new Promise((() => {}))));
            if (Wk.b.isUsingTemporaryTexturePack() && Wk.b.getTemporaryTexturePackSource() === Tk) return;
            const ik = Lk.NotificationProvider.showCustomPopup({
              body: kk => (0, gk.jsx)(FF, {
                schematicId: Ik,
                texturePackKey: Tk,
                onClose: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await ik.getResult()
          }(Gk), Fk = lk;
          lk = kk.catch((kk => {
            console.error("Failed to check for custom texture pack", kk)
          })).then((() => Fk))
        }
        const Ck = null !== Sk.current;
        Sk.current = null, (0, lF.g)(null);
        const Nk = () => {
          Qk ? (0, qk.navigateToHomePage)() : (vk.current = Ck, Xk(-1))
        };
        let ck = !1;
        const fk = Ik.pathname + Ik.search,
          Bk = () => !ck && Kk.current === fk;
        return lk.then((kk => {
          let {
            shouldMatchmake: Ik,
            discordContext: ik
          } = kk;
          Bk() && (Ik ? HF(null !== ik && void 0 !== ik ? ik : yk.lobbyName, ik ? "classic" : yk.gameNameWithVariation, yk.directJoinVmUrl).then((kk => {
            if (null !== kk && Bk())
              if (kk.isError()) {
                var Ik;
                const ik = kk.asError(),
                  lk = null !== (Ik = ik.debugResult.severity) && void 0 !== Ik ? Ik : "high";
                if ((0, LF.d)(ik.debugResult.error)) return void LF.f.reload();
                if (ik.code === Zk.j.SHADER_PACK) return void(0, XF.d)(ik.message, Xk);
                const qk = Tk.d.get("gameEntrySource"),
                  tk = ik.code === Zk.j.INITIALISE_WEBGL ? (0, uk.c)() : null,
                  {
                    error: jk
                  } = ik.debugResult;
                let ek;
                if (sk(Fk, ik)) ek = Promise.resolve(!1);
                else if (null !== tk) ek = (0, uk.f)(tk);
                else if (jk instanceof Rk.o) ek = (0, bk.g)(jk);
                else {
                  let kk;
                  switch (lk) {
                    case "low":
                      kk = "face-diagonal-mouth";
                      break;
                    case "medium":
                      kk = "face-worried";
                      break;
                    case "high":
                      kk = "face-dizzy"
                  }
                  ek = Lk.NotificationProvider.showPromptPopup({
                    icon: kk,
                    title: Zk.B[ik.code],
                    subtitle: (0, gk.jsxs)(gk.Fragment, {
                      children: [ik.debugResult.gameServerUnreachable ? Fk((0, Ok.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : ik.message, ik.debugResult.error instanceof Error && (0, gk.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, gk.jsx)(pk.e, {
                          errorString: ik.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Fk("general:tryAgain"),
                    cancelText: Fk("general:cancel")
                  }).getResult().then((kk => !0 === kk))
                }
                ek.then((kk => {
                  if (kk) {
                    (0, Tk.h)(qk);
                    const kk = (0, Uk.e)(yk.gameNameWithVariation, yk.lobbyName);
                    "low" === lk ? Xk(kk) : (0, Ek.reloadBloxd)(kk)
                  }
                })), ak.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Nk()
              } else {
                const {
                  gameNameWithVariation: Fk,
                  lobbyName: Ik
                } = kk.getValue();
                Sk.current = {
                  gameNameWithVariation: Fk,
                  lobbyName: Ik
                };
                const Tk = (0, Uk.e)(Fk, Ik);
                Xk(Tk, {
                  replace: !0
                })
              }
          })).catch((kk => {
            if (!Bk()) return;
            Lk.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, gk.jsxs)(gk.Fragment, {
                children: [Fk("homePage:pleaseCopyError"), (0, gk.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, gk.jsx)(pk.e, {
                    errorString: kk.stack
                  })
                })]
              }),
              confirmText: Fk("general:tryAgain"),
              cancelText: Fk("general:cancel")
            }).getResult().then((kk => {
              !0 === kk && (0, Ek.reloadBloxd)((0, Uk.e)(yk.gameNameWithVariation, yk.lobbyName))
            })), Nk()
          })) : Xk(-1))
        })), () => {
          ck = !0
        }
      }), [jk, Ik.search, Ik.pathname]), (0, yk.useEffect)((() => {
        Vk.disableFullscreen && (0, Gk.d)() ? (0, Gk.j)() : !Vk.disableFullscreen && (0, Gk.g)() && (0, Gk.o)()
      }), [Qk, Vk]), (0, yk.useEffect)((() => {
        "inGame" === Qk && jF()
      }), [Qk, Vk]), (0, yk.useEffect)((() => {
        "inGame" !== Qk && Tk.d.set({
          openInGameMenuName: null
        })
      }), [Qk]);
      const Nk = function(kk) {
        const Fk = (0, Tk.g)(kk),
          [Ik, Xk] = (0, yk.useState)(0),
          [ik, ak] = (0, yk.useState)(!1);
        (0, lk.d)("gameJoined", (() => {
          (0, Tk.g)(Tk.d.get("gameState")) && (Xk((kk => kk + 1)), ak(!0))
        })), (0, yk.useEffect)((() => {
          Fk || ak(!1)
        }), [Fk]);
        const qk = "inGame" === kk;
        return {
          mounted: qk || Fk && ik,
          shown: qk,
          key: Ik
        }
      }(Qk);
      return (0, gk.jsx)(gk.Fragment, {
        children: Nk.mounted && (0, gk.jsx)(ik.InGameUi, {
          shown: Nk.shown
        }, Nk.key)
      })
    }
  },
  4976: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    var Xk = Ik(1194);
    async function Tk(kk) {
      const Fk = await fetch(`${Xk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Fk.status || 403 === Fk.status) return null;
      if (!Fk.ok) throw new Error(`Failed to download the texture pack (${Fk.status})`);
      return await Fk.json()
    }
  },
  8898: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(1308),
      Tk = Ik(1217),
      ik = Ik(628);

    function yk(kk) {
      return kk = function(kk, Fk) {
        var Ik;
        const Xk = new URLSearchParams(Fk),
          Tk = Xk.get("lobby"),
          ik = Xk.get("vm"),
          yk = null !== (Ik = Tk) && void 0 !== Ik ? Ik : kk.lobbyName,
          lk = null !== ik && void 0 !== ik ? ik : kk.directJoinVmUrl;
        if (yk === kk.lobbyName && lk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: yk,
          directJoinVmUrl: lk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, ik.Q)(kk.directJoinVmUrl)) return kk;
        const Fk = (0, Tk.Z)(kk.directJoinVmUrl);
        null === Fk && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, ik.Q)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Xk.n)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8895: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => Tk
    });
    let Xk = !1;

    function Tk() {
      Xk = !0
    }

    function ik() {
      return Xk
    }
  },
  8888: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => jk,
      f: () => Zk,
      h: () => ek
    });
    var Xk = Ik(3089),
      Tk = Ik(2213),
      ik = Ik(2059),
      yk = Ik(4628),
      lk = Ik(3442),
      ak = Ik(8895);
    let qk = null;

    function Lk() {
      return Promise.all([Ik.e(74), Ik.e(77), Ik.e(89), Ik.e(211), Ik.e(76), Ik.e(210), Ik.e(134), Ik.e(196), Ik.e(139), Ik.e(87), Ik.e(218), Ik.e(63)]).then((() => Ik(40682)))
    }

    function tk() {
      Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(89), Ik.e(86), Ik.e(269), Ik.e(189), Ik.e(223), Ik.e(247), Ik.e(218), Ik.e(46)]).then((() => Ik(41011))).catch((() => {}))
    }

    function Zk() {
      return yk.d.cancelDownloadForJoin(), (0, lk.d)(), (0, Tk.c)(), (0, ak.e)(), (0, ik.k)(), tk(), Promise.all([Ik.e(77), Ik.e(89), Ik.e(211), Ik.e(210), Ik.e(134), Ik.e(139), Ik.e(58)]).then((() => Ik(41063))).then((kk => {
        let {
          startJoinLoad: Fk
        } = kk;
        Fk()
      }), (() => {})), qk ??= Lk().then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Xk.b.showGamePack(kk)
      })), kk)), (kk => {
        throw qk = null, kk
      })), qk
    }

    function jk() {
      return tk(), Ik.e(271).then((() => Ik(41067))).catch((() => {})), Lk().then((() => {}))
    }

    function ek() {
      return Lk().then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  8880: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      g: () => yk,
      j: () => lk,
      n: () => qk,
      p: () => ak
    });
    var Xk = Ik(187),
      Tk = Ik(4612);

    function ik(kk) {
      return yk(kk) === Xk.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function yk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function lk(kk) {
      var Fk;
      return null !== (Fk = Object.keys(Tk.b).find((Fk => Tk.b[Fk] === kk))) && void 0 !== Fk ? Fk : null
    }

    function ak(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);