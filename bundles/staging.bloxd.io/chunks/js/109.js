export const id = 109;
export const ids = [109];
export const modules = {
  8818: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => oJ
    });
    var pd = kd(1557),
      Nd = kd(22),
      Wd = kd(4520),
      Pd = kd(56),
      Zd = kd(1459);
    var gd = kd(1932),
      Cd = kd(1543),
      Kd = kd(1371),
      od = kd(1211),
      ld = kd(149),
      Qd = kd(1245),
      Ld = kd(2314),
      Od = kd(8825);

    function ed(dd, Jd) {
      const kd = !0 === Jd.debugResult.gameRefused,
        pd = kd || Jd.code === ld.n.REQUEST_TO_MATCHMAKING ? (0, Od.k)(Jd.message) : null;
      return null !== pd ? (Rd(dd, dd((0, Od.p)(pd)), dd(Od.n[pd])), !0) : !!kd && (async function(dd) {
        const {
          gameNameWithVariation: Jd,
          lobbyName: kd,
          shownLobbyName: pd
        } = gd.gameBridge.latest("connectedGame"), Nd = "classic" === Jd && (0, Qd.G)(kd) ? pd : await (0, Ld.d)(dd, Jd, kd);
        return "" !== Nd ? dd("general:cantJoinGame", {
          game: Nd
        }) : dd("general:cantJoinThisGame")
      }(dd).then((kd => {
        Rd(dd, kd, Jd.message)
      })), !0)
    }

    function Rd(dd, Jd, kd) {
      Kd.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Jd,
        subtitle: kd,
        confirmText: dd("general:ok"),
        cancelText: ""
      })
    }
    var Id = kd(4434),
      Gd = kd(1147),
      vd = kd(29),
      xd = kd(1266),
      qd = kd(1753),
      Bd = kd(95),
      sd = kd(1332),
      ad = kd(1453),
      Md = kd(4382),
      Fd = kd(4187),
      Yd = kd(3095),
      md = kd(1103);
    const bd = "https://discord.gg/playbloxd";

    function Sd(dd) {
      let {
        failure: Jd
      } = dd;
      const {
        t: kd
      } = (0, od.B)(), pd = "chosen" === Jd.packSource, Nd = Bd.featureFlags.useDiscord ? pd ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : pd ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, md.jsxs)(md.Fragment, {
        children: [kd(Nd, {
          code: Jd.code
        }), "default" !== Jd.packSource && Jd.code === Yd.h.Error && (0, md.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [kd("texturePackLoad:details"), " ", Jd.reason]
        }), Bd.featureFlags.useDiscord && (0, md.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, md.jsx)("a", {
            href: bd,
            target: "_blank",
            rel: "noreferrer",
            children: kd("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var jd = kd(1352),
      Xd = kd(756),
      fd = kd(1250),
      nd = kd(1013),
      Ud = kd(1520),
      yd = kd(3142),
      Dd = kd(3011),
      Td = kd(1380),
      Ed = kd(1359),
      cd = kd(4867),
      hd = kd(8832),
      rd = kd(2830);

    function ud(dd) {
      let {
        onApply: Jd,
        onSkip: kd
      } = dd;
      const {
        t: pd
      } = (0, od.B)();
      return (0, Pd.useEffect)((() => {
        rd.e.skipPlayWait()
      }), []), (0, md.jsx)(Td.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, md.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [pd("customTexturePack:downloadPrompt"), (0, md.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: pd("customTexturePack:authorWarning")
          }), (0, md.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: pd("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Jd
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: kd
        }
      })
    }
    async function td() {
      let dd = !1;
      const Jd = Kd.NotificationProvider.showCustomPopup({
        body: Jd => (0, md.jsx)(ud, {
          onApply: () => {
            dd = !0, Jd()
          },
          onSkip: Jd
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Jd.getResult(), dd
    }
    let Vd = {
      wanted: !1
    };
    let zd = null;

    function Hd(dd) {
      dd.setGamePackConfirm(td), zd = dd
    }
    var wd = kd(3342);

    function Ad(dd) {
      let {
        schematicId: Jd,
        texturePackKey: kd,
        onClose: pd
      } = dd;
      const [Nd, Wd] = (0, Pd.useState)("prompt"), [Zd, gd] = (0, Pd.useState)(null), Cd = (0, wd.d)();

      function Kd() {
        pd()
      }
      return "prompt" === Nd ? (0, md.jsx)(ud, {
        onApply: async function() {
          Wd("downloading");
          try {
            const dd = await async function(dd, Jd) {
              const kd = await (0, cd.d)(Jd);
              if (kd) return {
                pack: kd,
                key: Jd
              };
              const pd = await Gd.userContextManager.getCurrentUserContext(),
                Nd = (await Ud.d.getGame(pd, dd, !0)).customTexturePackKey;
              if (!Nd) return null;
              const Wd = await (0, cd.d)(Nd);
              if (!Wd) throw new Error("The texture pack could not be found");
              return {
                pack: Wd,
                key: Nd
              }
            }(Jd, kd);
            if (!Cd.current) return;
            if (!dd) return void pd();
            if ((0, yd.l)(dd.pack)) return void Wd("refused");
            Dd.d.setFromJson(dd.pack, "customGame"), await Dd.d.saveTemporaryTexturePack(dd.key), Cd.current && (0, qd.reloadBloxd)()
          } catch (dd) {
            gd(dd instanceof Error ? dd.message : String(dd)), Wd("error")
          }
        },
        onSkip: Kd
      }) : "downloading" === Nd ? (0, md.jsx)(Td.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, md.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, md.jsx)(Ed.b, {
            showFace: !0
          })
        })
      }) : "error" === Nd ? (0, md.jsx)(Td.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Zd,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Kd
        }
      }) : "refused" === Nd ? (0, md.jsx)(Td.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Kd
        }
      }) : null
    }
    var dJ = kd(8837),
      JJ = kd(4162),
      kJ = kd(1792),
      pJ = kd(2812),
      NJ = kd(3269),
      WJ = kd(4543),
      PJ = kd(1320),
      ZJ = kd(626),
      gJ = kd(710);

    function CJ() {
      const dd = Nd.d.get("clientEscMenuOptions");
      gd.gameBridge.send("setLookSensitivity", Nd.d.get("isTouchScreen") ? (0, gJ.n)(dd) : dd.mouseSensitivity)
    }
    async function KJ(dd, Jd, kd) {
      const pd = (0, WJ.M)(Jd);
      async function Pd(dd, Jd, kd, pd) {
        var Pd;
        if (pd.aborted) return null;
        null === Nd.d.get("gameEntrySource") && (0, Nd.f)("directPlayUrl"), ZJ.x && (0, hd.b)().catch((() => {})), Nd.d.set({
          gameState: "findingLobby"
        }), vd.j.nO("loadingScreenState", "loadingPage:findingLobby");
        const Zd = await Gd.userContextManager.getCurrentUserContext();
        gd.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Jd,
          discordContext: dd instanceof fd.g ? dd.getSerialisableParams() : null
        }), (0, kJ.f)();
        const Cd = await async function(dd, Jd, kd, pd, Nd) {
          try {
            await Wd.reqLibsLoadedPromise
          } catch (Pd) {
            return xd.b.errorWithCode(Pd.toString(), ld.n.LOAD_REQUIRED_LIBS, {
              error: Pd,
              severity: "medium"
            })
          }
          return vd.j.nO("matchmakeAndPlayStepCompleted", {
            step: ld.n.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Wd.matchmakeAndPlayMaybeUnloaded)(dd, Jd, kd, pd, Nd)
        }(dd, Jd, kd, Zd, pd), Kd = Cd.isError() ? Cd.asError() : null;
        if (Kd && !Kd.debugResult.CJ) {
          console.log("Failed to join lobby:", Kd.message);
          const dd = "timedOut" === Kd.debugResult.gameServerUnreachable;
          (0, pJ.f)("matchmake_failed", Kd.message, dd ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : ld.n[Kd.code])
        }
        if (pd.aborted) return gd.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Kd && void 0 !== Kd && Kd.debugResult.CJ) return console.log("Join cancelled:", Kd.message), null;
        if (Kd) return Cd;
        const {
          gameNameWithVariation: od,
          lobbyName: Ld,
          addLobbyToRecentlyPlayed: Od
        } = Cd.getValue();
        let ed;
        CJ(), (0, PJ.w)().setGameViewShown(!0);
        const Rd = null === (Pd = Xd.d[od]) || void 0 === Pd ? void 0 : Pd.recentlyPlayedAs;
        return ed = (0, nd.i)(od) ? {
          type: "custom",
          name: "",
          schematicId: (0, nd.o)(od),
          recentLobbies: []
        } : "classic" !== od || (0, Qd.M)(Ld) ? Rd ? {
          type: "bloxd",
          gameNameWithVariation: Rd,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: od,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, Ud.d.addRecentlyPlayedGame(Zd, ed, Od && !Rd ? Ld : void 0).then((dd => {
          Zd.setRecentlyPlayedGames(dd)
        })).catch((dd => {
          console.error("Failed to record recently played game", dd)
        })), (0, sd.D)(), Cd
      }
      return pd && (0, Nd.f)("updateRejoin"), (0, NJ.g)((async Nd => {
        try {
          let Zd = dd,
            gd = await Pd(Zd, Jd, kd, Nd);
          for (let dd = 0; pd && dd < WJ.o; dd++) {
            var Wd;
            if (null === (Wd = gd) || void 0 === Wd || !Wd.isError() || gd.asError().code !== ld.n.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, WJ.Q)((0, WJ.w)(dd), Nd)) return gd;
            Zd = (0, WJ.x)(Zd, dd + 1, "string" === typeof Zd && (0, Qd.M)(Zd)), gd = await Pd(Zd, Jd, kd, Nd)
          }
          return gd
        } catch (Zd) {
          if ((0, pJ.f)("matchmake_failed", Zd, "unexpected"), gd.gameBridge.send("leaveGame", {
              reloadPath: Nd.aborted ? null : "/"
            }), Nd.aborted) return null;
          throw Zd
        }
      }), (async dd => {
        var kd;
        if (pd) return;
        const Nd = (0, sd.y)();
        null !== Nd && (await Nd, dd.aborted) || (null !== (kd = Xd.d[Jd]) && void 0 !== kd && kd.playAdBeforeMatchmaking ? (rd.e.skipPlayWait(), await new Promise((dd => {
          (0, sd.U)((() => {
            dd(!0)
          }), "video_start")
        }))) : (0, sd.U)((() => {}), "video_start"))
      }))
    }

    function oJ() {
      const {
        t: dd
      } = (0, od.B)(), Jd = (0, Cd.useNavigatePreserveSearch)(), kd = (0, pd.v)(), Od = (0, pd.y)(), Rd = (0, Pd.useRef)({
        t: dd,
        navigate: Jd
      });
      Rd.current = {
        t: dd,
        navigate: Jd
      };
      const vd = (0, Pd.useRef)("");
      vd.current = kd.pathname + kd.search;
      const {
        gameState: xd,
        clientEscMenuOptions: bd
      } = (0, Nd.j)(["gameState", "clientEscMenuOptions"]), Xd = (0, Pd.useRef)(null), fd = (0, Pd.useRef)(null);
      var yd;
      (0, NJ.j)(), (0, NJ.l)(), yd = ZJ.x, (0, Pd.useEffect)((() => {
        if (!yd) return;
        let dd = !0;
        return (0, hd.b)().then((Jd => {
          dd && Hd(Jd)
        })).catch((() => {})), () => {
          var Jd;
          dd = !1, Vd.wanted = !1, null === (Jd = zd) || void 0 === Jd || Jd.setGamePackConfirm(null), zd = null
        }
      }), [yd]), (0, Pd.useEffect)((() => {
        var dd;
        (0, Wd.needGameClientNow)();
        const {
          t: Jd,
          navigate: pd
        } = Rd.current, Pd = (0, dJ.b)(Od, kd.search);
        if (Od.lobbyName && !new URLSearchParams(kd.search).has("lobby")) return void pd((0, jd.c)(Pd.gameNameWithVariation, Pd.lobbyName), {
          replace: !0
        });
        let Zd = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === kd.pathname) {
          const dd = Nd.d.get("discordContext");
          if (!dd) return void pd("/");
          Zd = Id.e.setupDiscordLobby(dd, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: dd
          }))).catch((Jd => (console.error("Failed to setup discord lobby", Jd), {
            shouldMatchmake: !1,
            discordContext: dd
          })))
        } else if (!Pd.gameNameWithVariation || !(0, Qd.K)(Pd.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Pd.gameNameWithVariation}`), void pd(-1);
        if (Pd.gameNameWithVariation === Xd.current && Pd.lobbyName === fd.current) return;
        if (gd.gameBridge.latest("connectedGame").replay) return void(0, NJ.c)(null);
        (0, sd.z)(), Nd.d.set({
          gameState: "loadingScreen"
        });
        const Cd = function() {
          Vd.wanted = !1;
          const dd = {
            wanted: !0
          };
          return Vd = dd, () => dd.wanted
        }();
        if ("releaseCountdown" === (null === (dd = (0, Ld.g)(Pd.gameNameWithVariation)) || void 0 === dd ? void 0 : dd.type)) return console.error(`Game hasn't been released yet: ${Pd.gameNameWithVariation}`), void pd(-1);
        const od = Pd.gameNameWithVariation;
        if (od && (ZJ.x || (0, nd.i)(od))) {
          const dd = ZJ.x ? Promise.all([(0, hd.b)(), Gd.userContextManager.getCurrentUserContext()]).then((dd => {
            let [Jd, kd] = dd;
            if (Cd()) return Hd(Jd), Jd.packForGame(od, kd, Cd)
          })) : async function(dd) {
            await Dd.d.indexedDbValuesAreLoaded();
            const Jd = await Gd.userContextManager.getCurrentUserContext(),
              kd = (0, nd.o)(dd);
            let pd;
            try {
              pd = await Ud.d.getGame(Jd, kd, !0)
            } catch (Pd) {
              return void console.error("Failed to get game", Pd)
            }
            const Nd = pd.customTexturePackKey;
            if (!Nd) return void(Dd.d.isUsingTemporaryTexturePack() && ((0, qd.reloadBloxd)(), await new Promise((() => {}))));
            if (Dd.d.isUsingTemporaryTexturePack() && Dd.d.getTemporaryTexturePackSource() === Nd) return;
            const Wd = Kd.NotificationProvider.showCustomPopup({
              body: dd => (0, md.jsx)(Ad, {
                schematicId: kd,
                texturePackKey: Nd,
                onClose: dd
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Wd.getResult()
          }(od), Jd = Zd;
          Zd = dd.catch((dd => {
            console.error("Failed to check for custom texture pack", dd)
          })).then((() => Jd))
        }(0, NJ.c)(null);
        let xd = !1;
        const ad = kd.pathname + kd.search,
          bd = () => !xd && vd.current === ad;
        return Zd.then((dd => {
          let {
            shouldMatchmake: kd,
            discordContext: Wd
          } = dd;
          bd() && (kd ? KJ(null !== Wd && void 0 !== Wd ? Wd : Pd.lobbyName, Wd ? "classic" : Pd.gameNameWithVariation, Pd.directJoinVmUrl).then((dd => {
            var kd;
            if (null !== dd && bd())
              if (dd.isError()) {
                var Wd;
                const Zd = dd.asError(),
                  Cd = null !== (Wd = Zd.debugResult.severity) && void 0 !== Wd ? Wd : "high";
                if (Zd.code === ld.n.SHADER_PACK) return void(0, JJ.b)(Zd.message, pd);
                const od = Nd.d.get("gameEntrySource"),
                  Qd = Zd.code === ld.n.INITIALISE_WEBGL ? (0, Fd.b)() : null,
                  {
                    error: Ld
                  } = Zd.debugResult;
                let Od;
                if (ed(Jd, Zd)) Od = Promise.resolve(!1);
                else if (null !== Qd) Od = (0, Fd.h)(Qd);
                else if (Ld instanceof Yd.k) kd = Ld, Od = Kd.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, md.jsx)(Sd, {
                    failure: kd
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((dd => !0 === dd));
                else {
                  let dd;
                  switch (Cd) {
                    case "low":
                      dd = "face-diagonal-mouth";
                      break;
                    case "medium":
                      dd = "face-worried";
                      break;
                    case "high":
                      dd = "face-dizzy"
                  }
                  Od = Kd.NotificationProvider.showPromptPopup({
                    icon: dd,
                    title: ld.C[Zd.code],
                    subtitle: (0, md.jsxs)(md.Fragment, {
                      children: [Zd.debugResult.gameServerUnreachable ? Jd((0, Bd.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Zd.message, Zd.debugResult.error instanceof Error && (0, md.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, md.jsx)(Md.d, {
                          errorString: Zd.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Jd("general:tryAgain"),
                    cancelText: Jd("general:cancel")
                  }).getResult().then((dd => !0 === dd))
                }
                Od.then((dd => {
                  if (dd) {
                    (0, Nd.f)(od);
                    const dd = (0, jd.c)(Pd.gameNameWithVariation, Pd.lobbyName);
                    "low" === Cd ? pd(dd) : (0, qd.reloadBloxd)(dd)
                  }
                })), gd.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), pd(-1)
              } else {
                Xd.current = dd.getValue().gameNameWithVariation, fd.current = dd.getValue().lobbyName;
                const Jd = (0, jd.c)(Xd.current, dd.getValue().lobbyName);
                pd(Jd, {
                  replace: !0
                })
              }
          })).catch((dd => {
            if (!bd()) return;
            Kd.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, md.jsxs)(md.Fragment, {
                children: [Jd("homePage:pleaseCopyError"), (0, md.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, md.jsx)(Md.d, {
                    errorString: dd.stack
                  })
                })]
              }),
              confirmText: Jd("general:tryAgain"),
              cancelText: Jd("general:cancel")
            }).getResult().then((dd => {
              !0 === dd && (0, qd.reloadBloxd)((0, jd.c)(Pd.gameNameWithVariation, Pd.lobbyName))
            })), pd(-1)
          })) : pd(-1))
        })), () => {
          xd = !0
        }
      }), [Od, kd.search, kd.pathname]), (0, Pd.useEffect)((() => {
        bd.disableFullscreen && (0, ad.e)() ? (0, ad.l)() : !bd.disableFullscreen && (0, ad.i)() && (0, ad.t)()
      }), [xd, bd]), (0, Pd.useEffect)((() => {
        "inGame" === xd && CJ()
      }), [xd, bd]), (0, Pd.useEffect)((() => {
        "inGame" !== xd && Nd.d.set({
          openInGameMenuName: null
        })
      }), [xd]);
      const Td = function(dd) {
        const Jd = (0, Nd.e)(dd),
          [kd, pd] = (0, Pd.useState)(0),
          [Wd, gd] = (0, Pd.useState)(!1);
        (0, Zd.h)("gameJoined", (() => {
          (0, Nd.e)(Nd.d.get("gameState")) && (pd((dd => dd + 1)), gd(!0))
        })), (0, Pd.useEffect)((() => {
          Jd || gd(!1)
        }), [Jd]);
        const Cd = "inGame" === dd;
        return {
          mounted: Cd || Jd && Wd,
          shown: Cd,
          key: kd
        }
      }(xd);
      return (0, md.jsx)(md.Fragment, {
        children: Td.mounted && (0, md.jsx)(Wd.InGameUi, {
          shown: Td.shown
        }, Td.key)
      })
    }
  },
  4867: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(1220);
    async function Nd(dd) {
      const Jd = await fetch(`${pd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Jd.status || 403 === Jd.status) return null;
      if (!Jd.ok) throw new Error(`Failed to download the texture pack (${Jd.status})`);
      return await Jd.json()
    }
  },
  8837: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(1352),
      Nd = kd(1245),
      Wd = kd(610);

    function Pd(dd) {
      return dd = function(dd, Jd) {
        var kd;
        const pd = new URLSearchParams(Jd),
          Nd = pd.get("lobby"),
          Wd = pd.get("vm"),
          Pd = null !== (kd = Nd) && void 0 !== kd ? kd : dd.lobbyName,
          Zd = null !== Wd && void 0 !== Wd ? Wd : dd.directJoinVmUrl;
        if (Pd === dd.lobbyName && Zd === dd.directJoinVmUrl) return dd;
        return {
          ...dd,
          lobbyName: Pd,
          directJoinVmUrl: Zd
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), dd = function(dd) {
        if ((0, Wd.I)(dd.directJoinVmUrl)) return dd;
        const Jd = (0, Nd.Z)(dd.directJoinVmUrl);
        null === Jd && (dd.directJoinVmUrl = void 0);
        return dd
      }(dd = function(dd) {
        if ((0, Wd.I)(dd.gameNameWithVariation)) return dd;
        return dd.gameNameWithVariation = (0, pd.k)(dd.gameNameWithVariation), dd
      }(dd))
    }
  },
  8835: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Nd
    });
    let pd = !1;

    function Nd() {
      pd = !0
    }

    function Wd() {
      return pd
    }
  },
  8832: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      f: () => od
    });
    var pd = kd(3011),
      Nd = kd(2245),
      Wd = kd(3051),
      Pd = kd(4507),
      Zd = kd(3360),
      gd = kd(8835);
    let Cd = null;

    function Kd() {
      return Pd.b.cancelDownloadForJoin(), (0, Zd.e)(), (0, Nd.e)(), (0, gd.f)(), (0, Wd.i)(), Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(84), kd.e(261), kd.e(200), kd.e(218), kd.e(239), kd.e(213), kd.e(46)]).then((() => kd(40663))).catch((() => {})), Promise.all([kd.e(75), kd.e(133), kd.e(88), kd.e(56)]).then((() => kd(40737))).then((dd => {
        let {
          startJoinLoad: Jd
        } = dd;
        Jd()
      }), (() => {})), Cd ??= Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => (dd.startWasmPlay(), dd.followPageUiPack((dd => {
        pd.d.showGamePack(dd)
      })), dd)), (dd => {
        throw Cd = null, dd
      })), Cd
    }

    function od() {
      return Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => {
        dd.startWasmPreviews(), dd.prefetchWasmPreviews()
      }))
    }
  },
  8825: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      g: () => Pd,
      k: () => Zd,
      n: () => Cd,
      p: () => gd
    });
    var pd = kd(193),
      Nd = kd(4482);

    function Wd(dd) {
      return Pd(dd) === pd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Pd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Zd(dd) {
      var Jd;
      return null !== (Jd = Object.keys(Nd.d).find((Jd => Nd.d[Jd] === dd))) && void 0 !== Jd ? Jd : null
    }

    function gd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Cd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);