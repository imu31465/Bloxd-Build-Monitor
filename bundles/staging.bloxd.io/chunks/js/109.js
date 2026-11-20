export const id = 109;
export const ids = [109];
export const modules = {
  8922: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => Ik
    });
    var lT = cT(1535),
      MT = cT(31),
      KT = cT(4649),
      OT = cT(71),
      yT = cT(1461);
    var fT = cT(1953),
      xT = cT(1530),
      IT = cT(1363),
      AT = cT(1195),
      CT = cT(184),
      jT = cT(1226),
      vT = cT(2401),
      tT = cT(8924);

    function hT(TT, kT) {
      const cT = !0 === kT.debugResult.gameRefused,
        lT = cT || kT.code === CT.g.REQUEST_TO_MATCHMAKING ? (0, tT.j)(kT.message) : null;
      return null !== lT ? (NT(TT, TT((0, tT.n)(lT)), TT(tT.l[lT])), !0) : !!cT && (async function(TT) {
        const {
          gameNameWithVariation: kT,
          lobbyName: cT,
          shownLobbyName: lT
        } = fT.gameBridge.latest("connectedGame"), MT = "classic" === kT && (0, jT.D)(cT) ? lT : await (0, vT.c)(TT, kT, cT);
        return "" !== MT ? TT("general:cantJoinGame", {
          game: MT
        }) : TT("general:cantJoinThisGame")
      }(TT).then((cT => {
        NT(TT, cT, kT.message)
      })), !0)
    }

    function NT(TT, kT, cT) {
      IT.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: kT,
        subtitle: cT,
        confirmText: TT("general:ok"),
        cancelText: ""
      })
    }
    var QT = cT(4566),
      ST = cT(1136),
      DT = cT(36),
      aT = cT(1252),
      FT = cT(1741),
      rT = cT(118),
      PT = cT(1316),
      wT = cT(1452),
      mT = cT(4511),
      bT = cT(4340),
      zT = cT(3189),
      JT = cT(1099);
    const oT = "https://discord.gg/playbloxd";

    function HT(TT) {
      let {
        failure: kT
      } = TT;
      const {
        t: cT
      } = (0, AT.B)(), lT = "chosen" === kT.packSource, MT = rT.featureFlags.useDiscord ? lT ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : lT ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, JT.jsxs)(JT.Fragment, {
        children: [cT(MT, {
          code: kT.code
        }), "default" !== kT.packSource && kT.code === zT.l.Error && (0, JT.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [cT("texturePackLoad:details"), " ", kT.reason]
        }), rT.featureFlags.useDiscord && (0, JT.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, JT.jsx)("a", {
            href: oT,
            target: "_blank",
            rel: "noreferrer",
            children: cT("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var eT = cT(1333),
      GT = cT(761),
      VT = cT(1235),
      ET = cT(1018),
      ZT = cT(1518),
      uT = cT(3226),
      XT = cT(3081),
      dT = cT(1370),
      LT = cT(1348),
      RT = cT(4939),
      gT = cT(8932),
      UT = cT(2913);

    function YT(TT) {
      let {
        onApply: kT,
        onSkip: cT
      } = TT;
      const {
        t: lT
      } = (0, AT.B)();
      return (0, OT.useEffect)((() => {
        UT.d.skipPlayWait()
      }), []), (0, JT.jsx)(dT.e, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, JT.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [lT("customTexturePack:downloadPrompt"), (0, JT.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: lT("customTexturePack:authorWarning")
          }), (0, JT.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: lT("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: kT
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: cT
        }
      })
    }
    async function BT() {
      let TT = !1;
      const kT = IT.NotificationProvider.showCustomPopup({
        body: kT => (0, JT.jsx)(YT, {
          onApply: () => {
            TT = !0, kT()
          },
          onSkip: kT
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await kT.getResult(), TT
    }
    let WT = {
      wanted: !1
    };
    let nT = null;

    function pT(TT) {
      TT.setGamePackConfirm(BT), nT = TT
    }
    var iT = cT(3436);

    function qT(TT) {
      let {
        schematicId: kT,
        texturePackKey: cT,
        onClose: lT
      } = TT;
      const [MT, KT] = (0, OT.useState)("prompt"), [yT, fT] = (0, OT.useState)(null), xT = (0, iT.b)();

      function IT() {
        lT()
      }
      return "prompt" === MT ? (0, JT.jsx)(YT, {
        onApply: async function() {
          KT("downloading");
          try {
            const TT = await async function(TT, kT) {
              const cT = await (0, RT.b)(kT);
              if (cT) return {
                pack: cT,
                key: kT
              };
              const lT = await ST.userContextManager.getCurrentUserContext(),
                MT = (await ZT.d.getGame(lT, TT, !0)).customTexturePackKey;
              if (!MT) return null;
              const KT = await (0, RT.b)(MT);
              if (!KT) throw new Error("The texture pack could not be found");
              return {
                pack: KT,
                key: MT
              }
            }(kT, cT);
            if (!xT.current) return;
            if (!TT) return void lT();
            if ((0, uT.i)(TT.pack)) return void KT("refused");
            XT.e.setFromJson(TT.pack, "customGame"), await XT.e.saveTemporaryTexturePack(TT.key), xT.current && (0, FT.reloadBloxd)()
          } catch (TT) {
            fT(TT instanceof Error ? TT.message : String(TT)), KT("error")
          }
        },
        onSkip: IT
      }) : "downloading" === MT ? (0, JT.jsx)(dT.e, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, JT.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, JT.jsx)(LT.d, {
            showFace: !0
          })
        })
      }) : "error" === MT ? (0, JT.jsx)(dT.e, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: yT,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: IT
        }
      }) : "refused" === MT ? (0, JT.jsx)(dT.e, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: IT
        }
      }) : null
    }
    var sT = cT(8946),
      Tk = cT(4311),
      kk = cT(1784),
      ck = cT(2891),
      lk = cT(3371),
      Mk = cT(4663),
      Kk = cT(1303),
      Ok = cT(636),
      yk = cT(725);

    function fk() {
      const TT = MT.e.get("clientEscMenuOptions");
      fT.gameBridge.send("setLookSensitivity", MT.e.get("isTouchScreen") ? (0, yk.p)(TT) : TT.mouseSensitivity)
    }
    async function xk(TT, kT, cT) {
      const lT = (0, Mk.z)(kT);
      async function OT(TT, kT, cT, lT) {
        var OT;
        if (lT.aborted) return null;
        null === MT.e.get("gameEntrySource") && (0, MT.l)("directPlayUrl"), Ok.x && (0, gT.e)().catch((() => {})), MT.e.set({
          gameState: "findingLobby"
        }), DT.k.nt("loadingScreenState", "loadingPage:findingLobby");
        const yT = await ST.userContextManager.getCurrentUserContext();
        fT.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: kT,
          discordContext: TT instanceof VT.e ? TT.getSerialisableParams() : null
        }), (0, kk.f)();
        const xT = await async function(TT, kT, cT, lT, MT) {
          try {
            await KT.reqLibsLoadedPromise
          } catch (OT) {
            return aT.d.errorWithCode(OT.toString(), CT.g.LOAD_REQUIRED_LIBS, {
              error: OT,
              severity: "medium"
            })
          }
          return DT.k.nt("matchmakeAndPlayStepCompleted", {
            step: CT.g.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, KT.matchmakeAndPlayMaybeUnloaded)(TT, kT, cT, lT, MT)
        }(TT, kT, cT, yT, lT), IT = xT.isError() ? xT.asError() : null;
        if (IT && !IT.debugResult.KT) {
          console.log("Failed to join lobby:", IT.message);
          const TT = "timedOut" === IT.debugResult.gameServerUnreachable;
          (0, ck.e)("matchmake_failed", IT.message, TT ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : CT.g[IT.code])
        }
        if (lT.aborted) return fT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== IT && void 0 !== IT && IT.debugResult.KT) return console.log("Join cancelled:", IT.message), null;
        if (IT) return xT;
        const {
          gameNameWithVariation: AT,
          lobbyName: vT,
          addLobbyToRecentlyPlayed: tT
        } = xT.getValue();
        let hT;
        fk(), (0, Kk.E)().setGameViewShown(!0);
        const NT = null === (OT = GT.e[AT]) || void 0 === OT ? void 0 : OT.recentlyPlayedAs;
        return hT = (0, ET.j)(AT) ? {
          type: "custom",
          name: "",
          schematicId: (0, ET.n)(AT),
          recentLobbies: []
        } : "classic" !== AT || (0, jT.K)(vT) ? NT ? {
          type: "bloxd",
          gameNameWithVariation: NT,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: AT,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, ZT.d.addRecentlyPlayedGame(yT, hT, tT && !NT ? vT : void 0).then((TT => {
          yT.setRecentlyPlayedGames(TT)
        })).catch((TT => {
          console.error("Failed to record recently played game", TT)
        })), (0, PT.I)(), xT
      }
      return lT && (0, MT.l)("updateRejoin"), (0, lk.j)((async MT => {
        try {
          let yT = TT,
            fT = await OT(yT, kT, cT, MT);
          for (let TT = 0; lT && TT < Mk.i; TT++) {
            var KT;
            if (null === (KT = fT) || void 0 === KT || !KT.isError() || fT.asError().code !== CT.g.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Mk.D)((0, Mk.p)(TT), MT)) return fT;
            yT = (0, Mk.s)(yT, TT + 1, "string" === typeof yT && (0, jT.K)(yT)), fT = await OT(yT, kT, cT, MT)
          }
          return fT
        } catch (yT) {
          if ((0, ck.e)("matchmake_failed", yT, "unexpected"), fT.gameBridge.send("leaveGame", {
              reloadPath: MT.aborted ? null : "/"
            }), MT.aborted) return null;
          throw yT
        }
      }), (async TT => {
        var cT;
        if (lT) return;
        const MT = (0, PT.A)();
        null !== MT && (await MT, TT.aborted) || (null !== (cT = GT.e[kT]) && void 0 !== cT && cT.playAdBeforeMatchmaking ? (UT.d.skipPlayWait(), await new Promise((TT => {
          (0, PT.$)((() => {
            TT(!0)
          }), "video_start")
        }))) : (0, PT.$)((() => {}), "video_start"))
      }))
    }

    function Ik() {
      const {
        t: TT
      } = (0, AT.B)(), kT = (0, xT.useNavigatePreserveSearch)(), cT = (0, lT.s)(), tT = (0, lT.v)(), NT = (0, OT.useRef)({
        t: TT,
        navigate: kT
      });
      NT.current = {
        t: TT,
        navigate: kT
      };
      const DT = (0, OT.useRef)("");
      DT.current = cT.pathname + cT.search;
      const {
        gameState: aT,
        clientEscMenuOptions: oT
      } = (0, MT.n)(["gameState", "clientEscMenuOptions"]), GT = (0, OT.useRef)(null), VT = (0, OT.useRef)(null);
      var uT;
      (0, lk.k)(), (0, lk.o)(), uT = Ok.x, (0, OT.useEffect)((() => {
        if (!uT) return;
        let TT = !0;
        return (0, gT.e)().then((kT => {
          TT && pT(kT)
        })).catch((() => {})), () => {
          var kT;
          TT = !1, WT.wanted = !1, null === (kT = nT) || void 0 === kT || kT.setGamePackConfirm(null), nT = null
        }
      }), [uT]), (0, OT.useEffect)((() => {
        var TT;
        (0, KT.needGameClientNow)();
        const {
          t: kT,
          navigate: lT
        } = NT.current, OT = (0, sT.e)(tT, cT.search);
        if (tT.lobbyName && !new URLSearchParams(cT.search).has("lobby")) return void lT((0, eT.c)(OT.gameNameWithVariation, OT.lobbyName), {
          replace: !0
        });
        let yT = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === cT.pathname) {
          const TT = MT.e.get("discordContext");
          if (!TT) return void lT("/");
          yT = QT.c.setupDiscordLobby(TT, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: TT
          }))).catch((kT => (console.error("Failed to setup discord lobby", kT), {
            shouldMatchmake: !1,
            discordContext: TT
          })))
        } else if (!OT.gameNameWithVariation || !(0, jT.H)(OT.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${OT.gameNameWithVariation}`), void lT(-1);
        if (OT.gameNameWithVariation === GT.current && OT.lobbyName === VT.current) return;
        if (fT.gameBridge.latest("connectedGame").replay) return void(0, lk.g)(null);
        (0, PT.D)(), MT.e.set({
          gameState: "loadingScreen"
        });
        const xT = function() {
          WT.wanted = !1;
          const TT = {
            wanted: !0
          };
          return WT = TT, () => TT.wanted
        }();
        if ("releaseCountdown" === (null === (TT = (0, vT.d)(OT.gameNameWithVariation)) || void 0 === TT ? void 0 : TT.type)) return console.error(`Game hasn't been released yet: ${OT.gameNameWithVariation}`), void lT(-1);
        const AT = OT.gameNameWithVariation;
        if (AT && (Ok.x || (0, ET.j)(AT))) {
          const TT = Ok.x ? Promise.all([(0, gT.e)(), ST.userContextManager.getCurrentUserContext()]).then((TT => {
            let [kT, cT] = TT;
            if (xT()) return pT(kT), kT.packForGame(AT, cT, xT)
          })) : async function(TT) {
            await XT.e.indexedDbValuesAreLoaded();
            const kT = await ST.userContextManager.getCurrentUserContext(),
              cT = (0, ET.n)(TT);
            let lT;
            try {
              lT = await ZT.d.getGame(kT, cT, !0)
            } catch (OT) {
              return void console.error("Failed to get game", OT)
            }
            const MT = lT.customTexturePackKey;
            if (!MT) return void(XT.e.isUsingTemporaryTexturePack() && ((0, FT.reloadBloxd)(), await new Promise((() => {}))));
            if (XT.e.isUsingTemporaryTexturePack() && XT.e.getTemporaryTexturePackSource() === MT) return;
            const KT = IT.NotificationProvider.showCustomPopup({
              body: TT => (0, JT.jsx)(qT, {
                schematicId: cT,
                texturePackKey: MT,
                onClose: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await KT.getResult()
          }(AT), kT = yT;
          yT = TT.catch((TT => {
            console.error("Failed to check for custom texture pack", TT)
          })).then((() => kT))
        }(0, lk.g)(null);
        let aT = !1;
        const wT = cT.pathname + cT.search,
          oT = () => !aT && DT.current === wT;
        return yT.then((TT => {
          let {
            shouldMatchmake: cT,
            discordContext: KT
          } = TT;
          oT() && (cT ? xk(null !== KT && void 0 !== KT ? KT : OT.lobbyName, KT ? "classic" : OT.gameNameWithVariation, OT.directJoinVmUrl).then((TT => {
            var cT;
            if (null !== TT && oT())
              if (TT.isError()) {
                var KT;
                const yT = TT.asError(),
                  xT = null !== (KT = yT.debugResult.severity) && void 0 !== KT ? KT : "high";
                if (yT.code === CT.g.SHADER_PACK) return void(0, Tk.b)(yT.message, lT);
                const AT = MT.e.get("gameEntrySource"),
                  jT = yT.code === CT.g.INITIALISE_WEBGL ? (0, bT.d)() : null,
                  {
                    error: vT
                  } = yT.debugResult;
                let tT;
                if (hT(kT, yT)) tT = Promise.resolve(!1);
                else if (null !== jT) tT = (0, bT.j)(jT);
                else if (vT instanceof zT.n) cT = vT, tT = IT.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, JT.jsx)(HT, {
                    failure: cT
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((TT => !0 === TT));
                else {
                  let TT;
                  switch (xT) {
                    case "low":
                      TT = "face-diagonal-mouth";
                      break;
                    case "medium":
                      TT = "face-worried";
                      break;
                    case "high":
                      TT = "face-dizzy"
                  }
                  tT = IT.NotificationProvider.showPromptPopup({
                    icon: TT,
                    title: CT.v[yT.code],
                    subtitle: (0, JT.jsxs)(JT.Fragment, {
                      children: [yT.debugResult.gameServerUnreachable ? kT((0, rT.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : yT.message, yT.debugResult.error instanceof Error && (0, JT.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, JT.jsx)(mT.d, {
                          errorString: yT.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: kT("general:tryAgain"),
                    cancelText: kT("general:cancel")
                  }).getResult().then((TT => !0 === TT))
                }
                tT.then((TT => {
                  if (TT) {
                    (0, MT.l)(AT);
                    const TT = (0, eT.c)(OT.gameNameWithVariation, OT.lobbyName);
                    "low" === xT ? lT(TT) : (0, FT.reloadBloxd)(TT)
                  }
                })), fT.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), lT(-1)
              } else {
                GT.current = TT.getValue().gameNameWithVariation, VT.current = TT.getValue().lobbyName;
                const kT = (0, eT.c)(GT.current, TT.getValue().lobbyName);
                lT(kT, {
                  replace: !0
                })
              }
          })).catch((TT => {
            if (!oT()) return;
            IT.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, JT.jsxs)(JT.Fragment, {
                children: [kT("homePage:pleaseCopyError"), (0, JT.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, JT.jsx)(mT.d, {
                    errorString: TT.stack
                  })
                })]
              }),
              confirmText: kT("general:tryAgain"),
              cancelText: kT("general:cancel")
            }).getResult().then((TT => {
              !0 === TT && (0, FT.reloadBloxd)((0, eT.c)(OT.gameNameWithVariation, OT.lobbyName))
            })), lT(-1)
          })) : lT(-1))
        })), () => {
          aT = !0
        }
      }), [tT, cT.search, cT.pathname]), (0, OT.useEffect)((() => {
        oT.disableFullscreen && (0, wT.e)() ? (0, wT.g)() : !oT.disableFullscreen && (0, wT.f)() && (0, wT.j)()
      }), [aT, oT]), (0, OT.useEffect)((() => {
        "inGame" === aT && fk()
      }), [aT, oT]), (0, OT.useEffect)((() => {
        "inGame" !== aT && MT.e.set({
          openInGameMenuName: null
        })
      }), [aT]);
      const dT = function(TT) {
        const kT = (0, MT.i)(TT),
          [cT, lT] = (0, OT.useState)(0),
          [KT, fT] = (0, OT.useState)(!1);
        (0, yT.g)("gameJoined", (() => {
          (0, MT.i)(MT.e.get("gameState")) && (lT((TT => TT + 1)), fT(!0))
        })), (0, OT.useEffect)((() => {
          kT || fT(!1)
        }), [kT]);
        const xT = "inGame" === TT;
        return {
          mounted: xT || kT && KT,
          shown: xT,
          key: cT
        }
      }(aT);
      return (0, JT.jsx)(JT.Fragment, {
        children: dT.mounted && (0, JT.jsx)(KT.InGameUi, {
          shown: dT.shown
        }, dT.key)
      })
    }
  },
  4939: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT
    });
    var lT = cT(1202);
    async function MT(TT) {
      const kT = await fetch(`${lT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === kT.status || 403 === kT.status) return null;
      if (!kT.ok) throw new Error(`Failed to download the texture pack (${kT.status})`);
      return await kT.json()
    }
  },
  8946: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(1333),
      MT = cT(1226),
      KT = cT(617);

    function OT(TT) {
      return TT = function(TT, kT) {
        var cT;
        const lT = new URLSearchParams(kT),
          MT = lT.get("lobby"),
          KT = lT.get("vm"),
          OT = null !== (cT = MT) && void 0 !== cT ? cT : TT.lobbyName,
          yT = null !== KT && void 0 !== KT ? KT : TT.directJoinVmUrl;
        if (OT === TT.lobbyName && yT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: OT,
          directJoinVmUrl: yT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, KT.R)(TT.directJoinVmUrl)) return TT;
        const kT = (0, MT.cb)(TT.directJoinVmUrl);
        null === kT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, KT.R)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, lT.l)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  8939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = !1;

    function MT() {
      lT = !0
    }

    function KT() {
      return lT
    }
  },
  8932: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => AT
    });
    var lT = cT(3081),
      MT = cT(2323),
      KT = cT(3125),
      OT = cT(4633),
      yT = cT(3449),
      fT = cT(8939);
    let xT = null;

    function IT() {
      return OT.b.cancelDownloadForJoin(), (0, yT.e)(), (0, MT.d)(), (0, fT.f)(), (0, KT.j)(), Promise.all([cT.e(70), cT.e(73), cT.e(72), cT.e(71), cT.e(84), cT.e(261), cT.e(199), cT.e(217), cT.e(239), cT.e(212), cT.e(46)]).then((() => cT(40311))).catch((() => {})), Promise.all([cT.e(75), cT.e(132), cT.e(88), cT.e(56)]).then((() => cT(40404))).then((TT => {
        let {
          startJoinLoad: kT
        } = TT;
        kT()
      }), (() => {})), xT ??= Promise.all([cT.e(72), cT.e(75), cT.e(129), cT.e(132), cT.e(263), cT.e(186), cT.e(88), cT.e(87), cT.e(86), cT.e(212), cT.e(61)]).then((() => cT(40489))).then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        lT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw xT = null, TT
      })), xT
    }

    function AT() {
      return Promise.all([cT.e(72), cT.e(75), cT.e(129), cT.e(132), cT.e(263), cT.e(186), cT.e(88), cT.e(87), cT.e(86), cT.e(212), cT.e(61)]).then((() => cT(40489))).then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  },
  8924: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      f: () => OT,
      j: () => yT,
      l: () => xT,
      n: () => fT
    });
    var lT = cT(218),
      MT = cT(4611);

    function KT(TT) {
      return OT(TT) === lT.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function OT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function yT(TT) {
      var kT;
      return null !== (kT = Object.keys(MT.d).find((kT => MT.d[kT] === TT))) && void 0 !== kT ? kT : null
    }

    function fT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const xT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);