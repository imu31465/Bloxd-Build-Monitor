export const id = 110;
export const ids = [110];
export const modules = {
  8714: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => le
    });
    var Dk = ik(1496),
      fk = ik(22),
      Sk = ik(4587),
      bk = ik(60),
      rk = ik(1406);
    var Pk = ik(1893),
      mk = ik(1479),
      Mk = ik(1333),
      Kk = ik(1172),
      xk = ik(165),
      nk = ik(189),
      Uk = ik(996),
      Hk = ik(1005),
      wk = ik(1207),
      lk = ik(2351),
      pk = ik(1459),
      yk = ik(1104),
      Yk = ik(8718),
      Lk = ik(1512);

    function Ck(kk, ek) {
      const ik = !0 === ek.debugResult.gameRefused,
        Dk = ik || ek.code === xk.n.REQUEST_TO_MATCHMAKING ? (0, Yk.m)(ek.message) : null;
      if (null !== Dk) return Ak(kk, kk((0, Yk.r)(Dk)), kk(Yk.n[Dk])), !0;
      if (ik) return async function(kk) {
        const {
          gameNameWithVariation: ek,
          lobbyName: ik,
          shownLobbyName: Dk
        } = Pk.gameBridge.latest("connectedGame"), fk = "classic" === ek && (0, wk.D)(ik) ? Dk : await (0, lk.b)(kk, ek, ik);
        return "" !== fk ? kk("general:cantJoinGame", {
          game: fk
        }) : kk("general:cantJoinThisGame")
      }(kk).then((ik => {
        Ak(kk, ik, ek.message)
      })), !0;
      const {
        joinFailure: fk
      } = ek.debugResult, Sk = "refused" === (null === fk || void 0 === fk ? void 0 : fk.at) ? fk.code : null;
      return Sk === nk.c.schematicNotPublished.code ? (async function(kk, ek) {
        const ik = (0, Uk.p)(Pk.gameBridge.latest("connectedGame").gameNameWithVariation),
          Dk = await async function(kk) {
            try {
              const ek = await pk.b.getGame(await yk.userContextManager.getCurrentUserContext(), kk, !0);
              return ek.gamePublished ? null : ek.name
            } catch (ek) {
              return ek instanceof xk.d && 435 === ek.httpCode || console.error(`Failed to get unpublished game ${kk}`, ek), null
            }
          }(ik);
        if (null === Dk) return void Ak(kk, kk("general:cantJoinThisGame"), ek);
        const fk = await Mk.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: kk("studio:gameNotPublishedTitle", {
            game: Dk
          }),
          confirmText: kk("studio:publishInStudio"),
          cancelText: kk("general:cancel")
        }).getResult();
        !0 === fk && (0, mk.navigatePreserveSearch)((0, Lk.m)((0, Hk.d)(ik), "manage"))
      }(kk, ek.message), !0) : Sk === nk.c.schematicBanned.code && (Ak(kk, kk("general:cantJoinThisGame"), ek.message), !0)
    }

    function Ak(kk, ek, ik) {
      Mk.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ek,
        subtitle: ik,
        confirmText: kk("general:ok"),
        cancelText: ""
      })
    }
    var jk = ik(4528),
      sk = ik(26),
      dk = ik(1220),
      Vk = ik(1688),
      Fk = ik(99),
      uk = ik(1291),
      qk = ik(1400),
      Ik = ik(4465),
      zk = ik(4315),
      Qk = ik(4287),
      vk = ik(3206),
      Ek = ik(1311),
      hk = ik(741),
      ak = ik(1212),
      Wk = ik(3271),
      tk = ik(3121),
      Xk = ik(1337),
      Bk = ik(1327),
      ck = ik(4915),
      Tk = ik(8723),
      Zk = ik(2894),
      Ok = ik(1066);

    function gk(kk) {
      let {
        onApply: ek,
        onSkip: ik
      } = kk;
      const {
        t: Dk
      } = (0, Kk.D)();
      return (0, bk.useEffect)((() => {
        Zk.e.skipPlayWait()
      }), []), (0, Ok.jsx)(Xk.f, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Ok.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Dk("customTexturePack:downloadPrompt"), (0, Ok.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Dk("customTexturePack:authorWarning")
          }), (0, Ok.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Dk("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: ek
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ik
        }
      })
    }
    async function Gk() {
      let kk = !1;
      const ek = Mk.NotificationProvider.showCustomPopup({
        body: ek => (0, Ok.jsx)(gk, {
          onApply: () => {
            kk = !0, ek()
          },
          onSkip: ek
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await ek.getResult(), kk
    }
    let Nk = {
      wanted: !1
    };
    let Rk = null;

    function Jk(kk) {
      kk.setGamePackConfirm(Gk), Rk = kk
    }
    var ke = ik(3447);

    function ee(kk) {
      let {
        schematicId: ek,
        texturePackKey: ik,
        onClose: Dk
      } = kk;
      const [fk, Sk] = (0, bk.useState)("prompt"), [rk, Pk] = (0, bk.useState)(null), mk = (0, ke.e)();

      function Mk() {
        Dk()
      }
      return "prompt" === fk ? (0, Ok.jsx)(gk, {
        onApply: async function() {
          Sk("downloading");
          try {
            const kk = await async function(kk, ek) {
              const ik = await (0, ck.e)(ek);
              if (ik) return {
                pack: ik,
                key: ek
              };
              const Dk = await yk.userContextManager.getCurrentUserContext(),
                fk = (await pk.b.getGame(Dk, kk, !0)).customTexturePackKey;
              if (!fk) return null;
              const Sk = await (0, ck.e)(fk);
              if (!Sk) throw new Error("The texture pack could not be found");
              return {
                pack: Sk,
                key: fk
              }
            }(ek, ik);
            if (!mk.current) return;
            if (!kk) return void Dk();
            if ((0, Wk.n)(kk.pack)) return void Sk("refused");
            tk.e.setFromJson(kk.pack, "customGame"), await tk.e.saveTemporaryTexturePack(kk.key), mk.current && (0, Vk.reloadBloxd)()
          } catch (kk) {
            Pk(kk instanceof Error ? kk.message : String(kk)), Sk("error")
          }
        },
        onSkip: Mk
      }) : "downloading" === fk ? (0, Ok.jsx)(Xk.f, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Ok.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Ok.jsx)(Bk.d, {
            showFace: !0
          })
        })
      }) : "error" === fk ? (0, Ok.jsx)(Xk.f, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: rk,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Mk
        }
      }) : "refused" === fk ? (0, Ok.jsx)(Xk.f, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Mk
        }
      }) : null
    }
    var ie = ik(8732),
      De = ik(4270),
      fe = ik(1735),
      Se = ik(2866),
      be = ik(4279),
      re = ik(2092),
      Pe = ik(4616),
      me = ik(1284),
      Me = ik(1686),
      Ke = ik(610),
      xe = ik(711);

    function ne() {
      const kk = fk.b.get("clientEscMenuOptions");
      Pk.gameBridge.send("setLookSensitivity", fk.b.get("isTouchScreen") ? (0, xe.i)(kk) : kk.mouseSensitivity)
    }

    function Ue(kk) {
      const ek = kk.asError();
      if (ek.debugResult.Ji || (0, Me.e)(ek.debugResult.error)) return;
      console.log("Failed to join lobby:", ek.message);
      const ik = "timedOut" === ek.debugResult.gameServerUnreachable;
      (0, Se.reportClientError)("matchmake_failed", ek.message, ik ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : xk.n[ek.code]);
      const {
        error: Dk
      } = ek.debugResult;
      if (Dk instanceof vk.i && "default" !== Dk.packSource) {
        const kk = (0, be.g)("js", "game" === Dk.packSource ? "game" : "page", (0, be.k)(Dk));
        (0, Se.reportClientError)("texture_pack", Dk, kk)
      }
    }

    function He(kk) {
      if (null === kk || void 0 === kk || !kk.isError()) return !1;
      const ek = kk.asError();
      return ek.code === xk.n.REQUEST_TO_MATCHMAKING && !(0, Me.e)(ek.debugResult.error)
    }
    async function we(kk, ek, ik) {
      const Dk = (0, Pe.O)(ek);
      async function bk(kk, ek, ik, Dk) {
        var bk;
        if (Dk.aborted) return null;
        null === fk.b.get("gameEntrySource") && (0, fk.j)("directPlayUrl"), Ke.s && (0, Tk.f)().catch((() => {})), fk.b.set({
          gameState: "findingLobby"
        }), sk.j.tm("loadingScreenState", "loadingPage:findingLobby");
        const rk = await yk.userContextManager.getCurrentUserContext();
        Pk.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: ek,
          discordContext: kk instanceof ak.c ? kk.getSerialisableParams() : null
        }), (0, fe.g)(null !== (bk = Zk.e.playInputAt()) && void 0 !== bk ? bk : performance.now());
        const mk = await async function(kk, ek, ik, Dk, fk) {
          try {
            await Sk.reqLibsLoadedPromise
          } catch (bk) {
            return dk.d.errorWithCode(bk.toString(), xk.n.LOAD_REQUIRED_LIBS, {
              error: bk,
              severity: "medium"
            })
          }
          return sk.j.tm("matchmakeAndPlayStepCompleted", {
            step: xk.n.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Sk.matchmakeAndPlayMaybeUnloaded)(kk, ek, ik, Dk, fk)
        }(kk, ek, ik, rk, Dk), Mk = mk.isError() ? mk.asError() : null;
        if (Dk.aborted) return Mk && Ue(mk), Pk.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Mk && void 0 !== Mk && Mk.debugResult.Ji) return console.log("Join cancelled:", Mk.message), null;
        if (Mk) return mk;
        const {
          gameNameWithVariation: Kk,
          lobbyName: nk
        } = mk.getValue();
        return ne(), (0, me.B)().setGameViewShown(!0), rk.recordJoin(Kk, nk), (0, uk.H)(), mk
      }
      return Dk && (0, fk.j)("updateRejoin"), (0, re.h)((async fk => {
        try {
          var Sk;
          let rk = kk,
            Pk = await bk(rk, ek, ik, fk);
          for (let kk = 0; Dk && kk < Pe.m && (He(Pk) && await (0, Pe.Q)((0, Pe.v)(kk), fk)); kk++) rk = (0, Pe.z)(rk, kk + 1, "string" === typeof rk && (0, wk.I)(rk)), Pk = await bk(rk, ek, ik, fk);
          return null !== (Sk = Pk) && void 0 !== Sk && Sk.isError() && Ue(Pk), Pk
        } catch (rk) {
          if ((0, Se.reportClientError)("matchmake_failed", rk, "unexpected"), Pk.gameBridge.send("leaveGame", {
              reloadPath: fk.aborted ? null : "/"
            }), fk.aborted) return null;
          throw rk
        }
      }), (async kk => {
        var ik;
        if (Dk) return;
        const fk = (0, uk.A)();
        null !== fk && (await fk, kk.aborted) || (null !== (ik = hk.d[ek]) && void 0 !== ik && ik.playAdBeforeMatchmaking ? (Zk.e.skipPlayWait(), await new Promise((kk => {
          (0, uk.$)((() => {
            kk(!0)
          }), "video_start")
        }))) : (0, uk.$)((() => {}), "video_start"))
      }))
    }

    function le() {
      const {
        t: kk
      } = (0, Kk.D)(), ek = (0, mk.useNavigatePreserveSearch)(), ik = (0, Dk.p)(), nk = (0, Dk.y)(), Hk = (0, bk.useRef)({
        t: kk,
        navigate: ek
      });
      Hk.current = {
        t: kk,
        navigate: ek
      };
      const Yk = (0, bk.useRef)("");
      Yk.current = ik.pathname + ik.search;
      const {
        gameState: Lk,
        clientEscMenuOptions: Ak
      } = (0, fk.n)(["gameState", "clientEscMenuOptions"]), sk = (0, bk.useRef)(null), dk = (0, bk.useRef)(!1);
      var hk;
      (0, re.j)(), (0, re.l)(), hk = Ke.s, (0, bk.useEffect)((() => {
        if (!hk) return;
        let kk = !0;
        return (0, Tk.f)().then((ek => {
          kk && Jk(ek)
        })).catch((() => {})), () => {
          var ek;
          kk = !1, Nk.wanted = !1, null === (ek = Rk) || void 0 === ek || ek.setGamePackConfirm(null), Rk = null
        }
      }), [hk]), (0, bk.useEffect)((() => {
        var kk;
        (0, Sk.needGameClientNow)();
        const {
          t: ek,
          navigate: Dk
        } = Hk.current, bk = (0, ie.d)(nk, ik.search);
        if (nk.lobbyName && !new URLSearchParams(ik.search).has("lobby")) return void Dk((0, Ek.d)(bk.gameNameWithVariation, bk.lobbyName), {
          replace: !0
        });
        let rk = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ik.pathname) {
          const kk = fk.b.get("discordContext");
          if (!kk) return void Dk("/");
          rk = jk.d.setupDiscordLobby(kk, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: kk
          }))).catch((ek => (console.error("Failed to setup discord lobby", ek), {
            shouldMatchmake: !1,
            discordContext: kk
          })))
        } else if (!bk.gameNameWithVariation || !(0, wk.G)(bk.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${bk.gameNameWithVariation}`), void Dk(-1);
        const Kk = sk.current;
        if (null !== Kk && bk.gameNameWithVariation === Kk.gameNameWithVariation && bk.lobbyName === Kk.lobbyName) return;
        if (Pk.gameBridge.latest("connectedGame").replay) return void(0, re.e)(null);
        if ("releaseCountdown" === (null === (kk = (0, lk.d)(bk.gameNameWithVariation)) || void 0 === kk ? void 0 : kk.type)) return console.error(`Game hasn't been released yet: ${bk.gameNameWithVariation}`), void Dk(-1);
        const Lk = dk.current;
        dk.current = !1, (0, uk.C)(), fk.b.set({
          gameState: "loadingScreen"
        });
        const Ak = function() {
            Nk.wanted = !1;
            const kk = {
              wanted: !0
            };
            return Nk = kk, () => kk.wanted
          }(),
          qk = bk.gameNameWithVariation;
        if (qk && (Ke.s || (0, Uk.j)(qk))) {
          const kk = Ke.s ? Promise.all([(0, Tk.f)(), yk.userContextManager.getCurrentUserContext()]).then((kk => {
            let [ek, ik] = kk;
            if (Ak()) return Jk(ek), ek.packForGame(qk, ik, Ak)
          })) : async function(kk) {
            await tk.e.indexedDbValuesAreLoaded();
            const ek = await yk.userContextManager.getCurrentUserContext(),
              ik = (0, Uk.p)(kk);
            let Dk;
            try {
              Dk = await pk.b.getGame(ek, ik, !0)
            } catch (bk) {
              return void console.error("Failed to get game", bk)
            }
            const fk = Dk.customTexturePackKey;
            if (!fk) return void(tk.e.isUsingTemporaryTexturePack() && ((0, Vk.reloadBloxd)(), await new Promise((() => {}))));
            if (tk.e.isUsingTemporaryTexturePack() && tk.e.getTemporaryTexturePackSource() === fk) return;
            const Sk = Mk.NotificationProvider.showCustomPopup({
              body: kk => (0, Ok.jsx)(ee, {
                schematicId: ik,
                texturePackKey: fk,
                onClose: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Sk.getResult()
          }(qk), ek = rk;
          rk = kk.catch((kk => {
            console.error("Failed to check for custom texture pack", kk)
          })).then((() => ek))
        }
        const hk = null !== sk.current;
        sk.current = null, (0, re.e)(null);
        const ak = () => {
          Lk ? (0, mk.navigateToHomePage)() : (dk.current = hk, Dk(-1))
        };
        let Wk = !1;
        const Xk = ik.pathname + ik.search,
          Bk = () => !Wk && Yk.current === Xk;
        return rk.then((kk => {
          let {
            shouldMatchmake: ik,
            discordContext: Sk
          } = kk;
          Bk() && (ik ? we(null !== Sk && void 0 !== Sk ? Sk : bk.lobbyName, Sk ? "classic" : bk.gameNameWithVariation, bk.directJoinVmUrl).then((kk => {
            if (null !== kk && Bk())
              if (kk.isError()) {
                var ik;
                const Sk = kk.asError(),
                  rk = null !== (ik = Sk.debugResult.severity) && void 0 !== ik ? ik : "high";
                if ((0, Me.e)(Sk.debugResult.error)) return void Me.h.reload();
                if (Sk.code === xk.n.SHADER_PACK) return void(0, De.d)(Sk.message, Dk);
                const mk = fk.b.get("gameEntrySource"),
                  Kk = Sk.code === xk.n.INITIALISE_WEBGL ? (0, zk.c)() : null,
                  {
                    error: nk
                  } = Sk.debugResult;
                let Uk;
                if (Ck(ek, Sk)) Uk = Promise.resolve(!1);
                else if (null !== Kk) Uk = (0, zk.g)(Kk);
                else if (nk instanceof vk.i) Uk = (0, Qk.e)(nk);
                else {
                  let kk;
                  switch (rk) {
                    case "low":
                      kk = "face-diagonal-mouth";
                      break;
                    case "medium":
                      kk = "face-worried";
                      break;
                    case "high":
                      kk = "face-dizzy"
                  }
                  Uk = Mk.NotificationProvider.showPromptPopup({
                    icon: kk,
                    title: xk.D[Sk.code],
                    subtitle: (0, Ok.jsxs)(Ok.Fragment, {
                      children: [Sk.debugResult.gameServerUnreachable ? ek((0, Fk.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Sk.message, Sk.debugResult.error instanceof Error && (0, Ok.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Ok.jsx)(Ik.c, {
                          errorString: Sk.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: ek("general:tryAgain"),
                    cancelText: ek("general:cancel")
                  }).getResult().then((kk => !0 === kk))
                }
                Uk.then((kk => {
                  if (kk) {
                    (0, fk.j)(mk);
                    const kk = (0, Ek.d)(bk.gameNameWithVariation, bk.lobbyName);
                    "low" === rk ? Dk(kk) : (0, Vk.reloadBloxd)(kk)
                  }
                })), Pk.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), ak()
              } else {
                const {
                  gameNameWithVariation: ek,
                  lobbyName: ik
                } = kk.getValue();
                sk.current = {
                  gameNameWithVariation: ek,
                  lobbyName: ik
                };
                const fk = (0, Ek.d)(ek, ik);
                Dk(fk, {
                  replace: !0
                })
              }
          })).catch((kk => {
            if (!Bk()) return;
            Mk.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Ok.jsxs)(Ok.Fragment, {
                children: [ek("homePage:pleaseCopyError"), (0, Ok.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Ok.jsx)(Ik.c, {
                    errorString: kk.stack
                  })
                })]
              }),
              confirmText: ek("general:tryAgain"),
              cancelText: ek("general:cancel")
            }).getResult().then((kk => {
              !0 === kk && (0, Vk.reloadBloxd)((0, Ek.d)(bk.gameNameWithVariation, bk.lobbyName))
            })), ak()
          })) : Dk(-1))
        })), () => {
          Wk = !0
        }
      }), [nk, ik.search, ik.pathname]), (0, bk.useEffect)((() => {
        Ak.disableFullscreen && (0, qk.c)() ? (0, qk.f)() : !Ak.disableFullscreen && (0, qk.d)() && (0, qk.o)()
      }), [Lk, Ak]), (0, bk.useEffect)((() => {
        "inGame" === Lk && ne()
      }), [Lk, Ak]), (0, bk.useEffect)((() => {
        "inGame" !== Lk && fk.b.set({
          openInGameMenuName: null
        })
      }), [Lk]);
      const ak = function(kk) {
        const ek = (0, fk.i)(kk),
          [ik, Dk] = (0, bk.useState)(0),
          [Sk, Pk] = (0, bk.useState)(!1);
        (0, rk.c)("gameJoined", (() => {
          (0, fk.i)(fk.b.get("gameState")) && (Dk((kk => kk + 1)), Pk(!0))
        })), (0, bk.useEffect)((() => {
          ek || Pk(!1)
        }), [ek]);
        const mk = "inGame" === kk;
        return {
          mounted: mk || ek && Sk,
          shown: mk,
          key: ik
        }
      }(Lk);
      return (0, Ok.jsx)(Ok.Fragment, {
        children: ak.mounted && (0, Ok.jsx)(Sk.InGameUi, {
          shown: ak.shown
        }, ak.key)
      })
    }
  },
  4915: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(1177);
    async function fk(kk) {
      const ek = await fetch(`${Dk.clientSideServerUrls.s3Url}/${kk}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ek.status || 403 === ek.status) return null;
      if (!ek.ok) throw new Error(`Failed to download the texture pack (${ek.status})`);
      return await ek.json()
    }
  },
  8732: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(1311),
      fk = ik(1207),
      Sk = ik(594);

    function bk(kk) {
      return kk = function(kk, ek) {
        var ik;
        const Dk = new URLSearchParams(ek),
          fk = Dk.get("lobby"),
          Sk = Dk.get("vm"),
          bk = null !== (ik = fk) && void 0 !== ik ? ik : kk.lobbyName,
          rk = null !== Sk && void 0 !== Sk ? Sk : kk.directJoinVmUrl;
        if (bk === kk.lobbyName && rk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: bk,
          directJoinVmUrl: rk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, Sk.F)(kk.directJoinVmUrl)) return kk;
        const ek = (0, fk.ab)(kk.directJoinVmUrl);
        null === ek && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, Sk.F)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Dk.n)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8725: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      d: () => fk
    });
    let Dk = !1;

    function fk() {
      Dk = !0
    }

    function Sk() {
      return Dk
    }
  },
  8723: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => nk,
      f: () => xk,
      h: () => Uk
    });
    var Dk = ik(3121),
      fk = ik(2259),
      Sk = ik(2095),
      bk = ik(4575),
      rk = ik(3456),
      Pk = ik(8725);
    let mk = null;

    function Mk() {
      return Promise.all([ik.e(74), ik.e(77), ik.e(89), ik.e(76), ik.e(134), ik.e(267), ik.e(160), ik.e(197), ik.e(137), ik.e(87), ik.e(268), ik.e(63)]).then((() => ik(40256)))
    }

    function Kk() {
      Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(89), ik.e(86), ik.e(265), ik.e(191), ik.e(221), ik.e(243), ik.e(268), ik.e(46)]).then((() => ik(40591))).catch((() => {}))
    }

    function xk() {
      return bk.c.cancelDownloadForJoin(), (0, rk.b)(), (0, fk.g)(), (0, Pk.d)(), (0, Sk.i)(), Kk(), Promise.all([ik.e(77), ik.e(89), ik.e(134), ik.e(267), ik.e(137), ik.e(58)]).then((() => ik(40634))).then((kk => {
        let {
          startJoinLoad: ek
        } = kk;
        ek()
      }), (() => {})), mk ??= Mk().then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Dk.e.showGamePack(kk)
      })), kk)), (kk => {
        throw mk = null, kk
      })), mk
    }

    function nk() {
      return Kk(), ik.e(269).then((() => ik(40641))).catch((() => {})), Mk().then((() => {}))
    }

    function Uk() {
      return Mk().then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  8718: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      i: () => bk,
      m: () => rk,
      n: () => mk,
      r: () => Pk
    });
    var Dk = ik(189),
      fk = ik(4563);

    function Sk(kk) {
      return bk(kk) === Dk.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function bk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function rk(kk) {
      var ek;
      return null !== (ek = Object.keys(fk.c).find((ek => fk.c[ek] === kk))) && void 0 !== ek ? ek : null
    }

    function Pk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);