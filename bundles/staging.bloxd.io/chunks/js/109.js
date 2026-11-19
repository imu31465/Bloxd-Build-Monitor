export const id = 109;
export const ids = [109];
export const modules = {
  8298: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => ar
    });
    var FY = DY(1501),
      AY = DY(19),
      IY = DY(4229),
      RY = DY(61),
      OY = DY(1430);
    var gY = DY(1808),
      aY = DY(1488),
      vY = DY(1346),
      uY = DY(1211),
      sY = DY(4201);
    const iY = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var yY = DY(4147),
      QY = DY(183),
      oY = DY(1159),
      WY = DY(25),
      EY = DY(1253),
      mY = DY(1699),
      VY = DY(99),
      SY = DY(1314),
      lY = DY(1413),
      TY = DY(4077),
      eY = DY(3914),
      NY = DY(2838),
      BY = DY(1125);
    const cY = "https://discord.gg/playbloxd";

    function KY(YY) {
      let {
        failure: rY
      } = YY;
      const {
        t: DY
      } = (0, uY.C)(), FY = "chosen" === rY.packSource, AY = VY.featureFlags.useDiscord ? FY ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : FY ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, BY.jsxs)(BY.Fragment, {
        children: [DY(AY, {
          code: rY.code
        }), "default" !== rY.packSource && rY.code === NY.k.Error && (0, BY.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [DY("texturePackLoad:details"), " ", rY.reason]
        }), VY.featureFlags.useDiscord && (0, BY.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, BY.jsx)("a", {
            href: cY,
            target: "_blank",
            rel: "noreferrer",
            children: DY("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var HY = DY(2216),
      zY = DY(1330),
      ZY = DY(778),
      CY = DY(1233),
      fY = DY(1057),
      jY = DY(1471),
      hY = DY(1231),
      dY = DY(2872),
      JY = DY(2743),
      MY = DY(1351),
      wY = DY(1337),
      bY = DY(4569),
      XY = DY(8307),
      qY = DY(2602);

    function pY(YY) {
      let {
        onApply: rY,
        onSkip: DY
      } = YY;
      const {
        t: FY
      } = (0, uY.C)();
      return (0, RY.useEffect)((() => {
        qY.f.skipPlayWait()
      }), []), (0, BY.jsx)(MY.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, BY.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [FY("customTexturePack:downloadPrompt"), (0, BY.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: FY("customTexturePack:authorWarning")
          }), (0, BY.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: FY("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: rY
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: DY
        }
      })
    }
    async function kY() {
      let YY = !1;
      const rY = vY.NotificationProvider.showCustomPopup({
        body: rY => (0, BY.jsx)(pY, {
          onApply: () => {
            YY = !0, rY()
          },
          onSkip: rY
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await rY.getResult(), YY
    }
    let GY = {
      wanted: !1
    };
    let xY = null;

    function nY(YY) {
      YY.setGamePackConfirm(kY), xY = YY
    }
    var PY = DY(3069);

    function UY(YY) {
      let {
        schematicId: rY,
        texturePackKey: DY,
        onClose: FY
      } = YY;
      const [AY, IY] = (0, RY.useState)("prompt"), [OY, gY] = (0, RY.useState)(null), aY = (0, PY.b)();

      function vY() {
        FY()
      }
      return "prompt" === AY ? (0, BY.jsx)(pY, {
        onApply: async function() {
          IY("downloading");
          try {
            const YY = await async function(YY, rY) {
              const DY = await (0, bY.d)(rY);
              if (DY) return {
                pack: DY,
                key: rY
              };
              const FY = await oY.userContextManager.getCurrentUserContext(),
                AY = (await jY.e.getGame(FY, YY, !0)).customTexturePackKey;
              if (!AY) return null;
              const IY = await (0, bY.d)(AY);
              if (!IY) throw new Error("The texture pack could not be found");
              return {
                pack: IY,
                key: AY
              }
            }(rY, DY);
            if (!aY.current) return;
            if (!YY) return void FY();
            if ((0, dY.l)(YY.pack)) return void IY("refused");
            JY.d.setFromJson(YY.pack, "customGame"), await JY.d.saveTemporaryTexturePack(YY.key), aY.current && (0, mY.reloadBloxd)()
          } catch (YY) {
            gY(YY instanceof Error ? YY.message : String(YY)), IY("error")
          }
        },
        onSkip: vY
      }) : "downloading" === AY ? (0, BY.jsx)(MY.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, BY.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, BY.jsx)(wY.c, {
            showFace: !0
          })
        })
      }) : "error" === AY ? (0, BY.jsx)(MY.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: OY,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: vY
        }
      }) : "refused" === AY ? (0, BY.jsx)(MY.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: vY
        }
      }) : null
    }
    var LY = DY(8317),
      tY = DY(3877),
      Yr = DY(1729),
      rr = DY(2817),
      Dr = DY(3e3),
      Fr = DY(4252),
      Ar = DY(1298),
      Ir = DY(649),
      Rr = DY(732);

    function Or() {
      const YY = AY.b.get("clientEscMenuOptions");
      gY.gameBridge.send("setLookSensitivity", AY.b.get("isTouchScreen") ? (0, Rr.j)(YY) : YY.mouseSensitivity)
    }
    async function gr(YY, rY, DY) {
      const FY = (0, Fr.L)(rY);
      async function RY(YY, rY, DY, FY) {
        var RY;
        if (FY.aborted) return null;
        null === AY.b.get("gameEntrySource") && (0, AY.g)("directPlayUrl"), Ir.r && (0, XY.e)().catch((() => {})), AY.b.set({
          gameState: "findingLobby"
        }), WY.g.vo("loadingScreenState", "loadingPage:findingLobby");
        const OY = await oY.userContextManager.getCurrentUserContext();
        gY.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: rY,
          discordContext: YY instanceof CY.g ? YY.getSerialisableParams() : null
        }), (0, Yr.e)();
        const aY = await async function(YY, rY, DY, FY, AY) {
          try {
            await IY.reqLibsLoadedPromise
          } catch (RY) {
            return EY.e.errorWithCode(RY.toString(), QY.l.LOAD_REQUIRED_LIBS, {
              error: RY,
              severity: "medium"
            })
          }
          return WY.g.vo("matchmakeAndPlayStepCompleted", {
            step: QY.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, IY.matchmakeAndPlayMaybeUnloaded)(YY, rY, DY, FY, AY)
        }(YY, rY, DY, OY, FY), vY = aY.isError() ? aY.asError() : null;
        if (vY && !vY.debugResult.Hr) {
          console.log("Failed to join lobby:", vY.message);
          const YY = "timedOut" === vY.debugResult.gameServerUnreachable;
          (0, rr.e)("matchmake_failed", vY.message, YY ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : QY.l[vY.code])
        }
        if (FY.aborted) return gY.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== vY && void 0 !== vY && vY.debugResult.Hr) return console.log("Join cancelled:", vY.message), null;
        if (vY) return aY;
        const {
          gameNameWithVariation: uY,
          lobbyName: sY,
          addLobbyToRecentlyPlayed: iY
        } = aY.getValue();
        let yY;
        Or(), (0, Ar.F)().setGameViewShown(!0);
        const mY = null === (RY = ZY.d[uY]) || void 0 === RY ? void 0 : RY.recentlyPlayedAs;
        return yY = (0, fY.l)(uY) ? {
          type: "custom",
          name: "",
          schematicId: (0, fY.r)(uY),
          recentLobbies: []
        } : "classic" !== uY || (0, hY.P)(sY) ? mY ? {
          type: "bloxd",
          gameNameWithVariation: mY,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: uY,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, jY.e.addRecentlyPlayedGame(OY, yY, iY && !mY ? sY : void 0).then((YY => {
          OY.setRecentlyPlayedGames(YY)
        })).catch((YY => {
          console.error("Failed to record recently played game", YY)
        })), (0, SY.I)(), aY
      }
      return FY && (0, AY.g)("updateRejoin"), (0, Dr.j)((async AY => {
        try {
          let OY = YY,
            gY = await RY(OY, rY, DY, AY);
          for (let YY = 0; FY && YY < Fr.l; YY++) {
            var IY;
            if (null === (IY = gY) || void 0 === IY || !IY.isError() || gY.asError().code !== QY.l.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Fr.O)((0, Fr.x)(YY), AY)) return gY;
            OY = (0, Fr.y)(OY, YY + 1, "string" === typeof OY && (0, hY.P)(OY)), gY = await RY(OY, rY, DY, AY)
          }
          return gY
        } catch (OY) {
          if ((0, rr.e)("matchmake_failed", OY, "unexpected"), gY.gameBridge.send("leaveGame", {
              reloadPath: AY.aborted ? null : "/"
            }), AY.aborted) return null;
          throw OY
        }
      }), (async YY => {
        var DY;
        if (FY) return;
        const AY = (0, SY.E)();
        null !== AY && (await AY, YY.aborted) || (null !== (DY = ZY.d[rY]) && void 0 !== DY && DY.playAdBeforeMatchmaking ? (qY.f.skipPlayWait(), await new Promise((YY => {
          (0, SY.W)((() => {
            YY(!0)
          }), "video_start")
        }))) : (0, SY.W)((() => {}), "video_start"))
      }))
    }

    function ar() {
      const {
        t: YY
      } = (0, uY.C)(), rY = (0, aY.useNavigatePreserveSearch)(), DY = (0, FY.u)(), WY = (0, FY.D)(), EY = (0, RY.useRef)({
        t: YY,
        navigate: rY
      });
      EY.current = {
        t: YY,
        navigate: rY
      };
      const cY = (0, RY.useRef)("");
      cY.current = DY.pathname + DY.search;
      const {
        gameState: ZY,
        clientEscMenuOptions: CY
      } = (0, AY.j)(["gameState", "clientEscMenuOptions"]), dY = (0, RY.useRef)(null), MY = (0, RY.useRef)(null);
      var wY;
      (0, Dr.n)(), (0, Dr.o)(), wY = Ir.r, (0, RY.useEffect)((() => {
        if (!wY) return;
        let YY = !0;
        return (0, XY.e)().then((rY => {
          YY && nY(rY)
        })).catch((() => {})), () => {
          var rY;
          YY = !1, GY.wanted = !1, null === (rY = xY) || void 0 === rY || rY.setGamePackConfirm(null), xY = null
        }
      }), [wY]), (0, RY.useEffect)((() => {
        var YY;
        (0, IY.needGameClientNow)();
        const {
          t: rY,
          navigate: FY
        } = EY.current, RY = (0, LY.e)(WY, DY.search);
        if (WY.lobbyName && !new URLSearchParams(DY.search).has("lobby")) return void FY((0, zY.d)(RY.gameNameWithVariation, RY.lobbyName), {
          replace: !0
        });
        let OY = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === DY.pathname) {
          const YY = AY.b.get("discordContext");
          if (!YY) return void FY("/");
          OY = yY.e.setupDiscordLobby(YY, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: YY
          }))).catch((rY => (console.error("Failed to setup discord lobby", rY), {
            shouldMatchmake: !1,
            discordContext: YY
          })))
        } else if (!RY.gameNameWithVariation || !(0, hY.O)(RY.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${RY.gameNameWithVariation}`), void FY(-1);
        if (RY.gameNameWithVariation === dY.current && RY.lobbyName === MY.current) return;
        if (gY.gameBridge.latest("connectedGame").replay) return void(0, Dr.g)(null);
        (0, SY.F)(), AY.b.set({
          gameState: "loadingScreen"
        });
        const aY = function() {
          GY.wanted = !1;
          const YY = {
            wanted: !0
          };
          return GY = YY, () => YY.wanted
        }();
        if ("releaseCountdown" === (null === (YY = (0, HY.g)(RY.gameNameWithVariation)) || void 0 === YY ? void 0 : YY.type)) return console.error(`Game hasn't been released yet: ${RY.gameNameWithVariation}`), void FY(-1);
        const uY = RY.gameNameWithVariation;
        if (uY && (Ir.r || (0, fY.l)(uY))) {
          const YY = Ir.r ? Promise.all([(0, XY.e)(), oY.userContextManager.getCurrentUserContext()]).then((YY => {
            let [rY, DY] = YY;
            if (aY()) return nY(rY), rY.packForGame(uY, DY, aY)
          })) : async function(YY) {
            await JY.d.indexedDbValuesAreLoaded();
            const rY = await oY.userContextManager.getCurrentUserContext(),
              DY = (0, fY.r)(YY);
            let FY;
            try {
              FY = await jY.e.getGame(rY, DY, !0)
            } catch (RY) {
              return void console.error("Failed to get game", RY)
            }
            const AY = FY.customTexturePackKey;
            if (!AY) return void(JY.d.isUsingTemporaryTexturePack() && ((0, mY.reloadBloxd)(), await new Promise((() => {}))));
            if (JY.d.isUsingTemporaryTexturePack() && JY.d.getTemporaryTexturePackSource() === AY) return;
            const IY = vY.NotificationProvider.showCustomPopup({
              body: YY => (0, BY.jsx)(UY, {
                schematicId: DY,
                texturePackKey: AY,
                onClose: YY
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await IY.getResult()
          }(uY), rY = OY;
          OY = YY.catch((YY => {
            console.error("Failed to check for custom texture pack", YY)
          })).then((() => rY))
        }(0, Dr.g)(null);
        let lY = !1;
        const ZY = DY.pathname + DY.search,
          CY = () => !lY && cY.current === ZY;
        return OY.then((YY => {
          let {
            shouldMatchmake: DY,
            discordContext: IY
          } = YY;
          CY() && (DY ? gr(null !== IY && void 0 !== IY ? IY : RY.lobbyName, IY ? "classic" : RY.gameNameWithVariation, RY.directJoinVmUrl).then((YY => {
            var DY, IY;
            if (null !== YY && CY())
              if (YY.isError()) {
                var OY;
                const aY = YY.asError(),
                  uY = null !== (OY = aY.debugResult.severity) && void 0 !== OY ? OY : "high";
                if (aY.code === QY.l.SHADER_PACK) return void(0, tY.c)(aY.message, FY);
                const yY = AY.b.get("gameEntrySource"),
                  oY = aY.code === QY.l.INITIALISE_WEBGL ? (0, eY.e)() : null,
                  {
                    error: WY
                  } = aY.debugResult,
                  EY = aY.code === QY.l.REQUEST_TO_MATCHMAKING ? function(YY) {
                    var rY;
                    return null !== (rY = Object.keys(sY.e).find((rY => sY.e[rY] === YY))) && void 0 !== rY ? rY : null
                  }(aY.message) : null;
                let SY;
                if (null !== EY) vY.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: rY((IY = EY, "notWhitelisted" === IY ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: rY(iY[EY]),
                  confirmText: rY("general:ok"),
                  cancelText: ""
                }), SY = Promise.resolve(!1);
                else if (null !== oY) SY = (0, eY.l)(oY);
                else if (WY instanceof NY.o) DY = WY, SY = vY.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, BY.jsx)(KY, {
                    failure: DY
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((YY => !0 === YY));
                else {
                  let YY;
                  switch (uY) {
                    case "low":
                      YY = "face-diagonal-mouth";
                      break;
                    case "medium":
                      YY = "face-worried";
                      break;
                    case "high":
                      YY = "face-dizzy"
                  }
                  SY = vY.NotificationProvider.showPromptPopup({
                    icon: YY,
                    title: QY.x[aY.code],
                    subtitle: (0, BY.jsxs)(BY.Fragment, {
                      children: [aY.debugResult.gameServerUnreachable ? rY((0, VY.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : aY.message, aY.debugResult.error instanceof Error && (0, BY.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, BY.jsx)(TY.c, {
                          errorString: aY.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: rY("general:tryAgain"),
                    cancelText: rY("general:cancel")
                  }).getResult().then((YY => !0 === YY))
                }
                SY.then((YY => {
                  if (YY) {
                    (0, AY.g)(yY);
                    const YY = (0, zY.d)(RY.gameNameWithVariation, RY.lobbyName);
                    "low" === uY ? FY(YY) : (0, mY.reloadBloxd)(YY)
                  }
                })), gY.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), FY(-1)
              } else {
                dY.current = YY.getValue().gameNameWithVariation, MY.current = YY.getValue().lobbyName;
                const rY = (0, zY.d)(dY.current, YY.getValue().lobbyName);
                FY(rY, {
                  replace: !0
                })
              }
          })).catch((YY => {
            if (!CY()) return;
            vY.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, BY.jsxs)(BY.Fragment, {
                children: [rY("homePage:pleaseCopyError"), (0, BY.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, BY.jsx)(TY.c, {
                    errorString: YY.stack
                  })
                })]
              }),
              confirmText: rY("general:tryAgain"),
              cancelText: rY("general:cancel")
            }).getResult().then((YY => {
              !0 === YY && (0, mY.reloadBloxd)((0, zY.d)(RY.gameNameWithVariation, RY.lobbyName))
            })), FY(-1)
          })) : FY(-1))
        })), () => {
          lY = !0
        }
      }), [WY, DY.search, DY.pathname]), (0, RY.useEffect)((() => {
        CY.disableFullscreen && (0, lY.d)() ? (0, lY.k)() : !CY.disableFullscreen && (0, lY.g)() && (0, lY.u)()
      }), [ZY, CY]), (0, RY.useEffect)((() => {
        "inGame" === ZY && Or()
      }), [ZY, CY]), (0, RY.useEffect)((() => {
        "inGame" !== ZY && AY.b.set({
          openInGameMenuName: null
        })
      }), [ZY]);
      const bY = function(YY) {
        const rY = (0, AY.e)(YY),
          [DY, FY] = (0, RY.useState)(0),
          [IY, gY] = (0, RY.useState)(!1);
        (0, OY.g)("gameJoined", (() => {
          (0, AY.e)(AY.b.get("gameState")) && (FY((YY => YY + 1)), gY(!0))
        })), (0, RY.useEffect)((() => {
          rY || gY(!1)
        }), [rY]);
        const aY = "inGame" === YY;
        return {
          mounted: aY || rY && IY,
          shown: aY,
          key: DY
        }
      }(ZY);
      return (0, BY.jsx)(BY.Fragment, {
        children: bY.mounted && (0, BY.jsx)(IY.InGameUi, {
          shown: bY.shown
        }, bY.key)
      })
    }
  },
  4569: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(1222);
    async function AY(YY) {
      const rY = await fetch(`${FY.clientSideServerUrls.s3Url}/${YY}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === rY.status || 403 === rY.status) return null;
      if (!rY.ok) throw new Error(`Failed to download the texture pack (${rY.status})`);
      return await rY.json()
    }
  },
  8317: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(1330),
      AY = DY(1231),
      IY = DY(625);

    function RY(YY) {
      return YY = function(YY, rY) {
        var DY;
        const FY = new URLSearchParams(rY),
          AY = FY.get("lobby"),
          IY = FY.get("vm"),
          RY = null !== (DY = AY) && void 0 !== DY ? DY : YY.lobbyName,
          OY = null !== IY && void 0 !== IY ? IY : YY.directJoinVmUrl;
        if (RY === YY.lobbyName && OY === YY.directJoinVmUrl) return YY;
        return {
          ...YY,
          lobbyName: RY,
          directJoinVmUrl: OY
        }
      }(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), YY = function(YY) {
        if ((0, IY.H)(YY.directJoinVmUrl)) return YY;
        const rY = (0, AY.Z)(YY.directJoinVmUrl);
        null === rY && (YY.directJoinVmUrl = void 0);
        return YY
      }(YY = function(YY) {
        if ((0, IY.H)(YY.gameNameWithVariation)) return YY;
        return YY.gameNameWithVariation = (0, FY.m)(YY.gameNameWithVariation), YY
      }(YY))
    }
  },
  8309: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => AY
    });
    let FY = !1;

    function AY() {
      FY = !0
    }

    function IY() {
      return FY
    }
  },
  8307: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      f: () => uY
    });
    var FY = DY(2743),
      AY = DY(2137),
      IY = DY(2785),
      RY = DY(4220),
      OY = DY(3082),
      gY = DY(8309);
    let aY = null;

    function vY() {
      return RY.e.cancelDownloadForJoin(), (0, OY.b)(), (0, AY.c)(), (0, gY.h)(), (0, IY.i)(), Promise.all([DY.e(69), DY.e(72), DY.e(71), DY.e(70), DY.e(83), DY.e(258), DY.e(237), DY.e(211), DY.e(235), DY.e(207), DY.e(46)]).then((() => DY(39778))).catch((() => {})), Promise.all([DY.e(74), DY.e(133), DY.e(87), DY.e(55)]).then((() => DY(39865))).then((YY => {
        let {
          startJoinLoad: rY
        } = YY;
        rY()
      }), (() => {})), aY ??= Promise.all([DY.e(71), DY.e(74), DY.e(130), DY.e(73), DY.e(133), DY.e(261), DY.e(185), DY.e(87), DY.e(86), DY.e(85), DY.e(207), DY.e(60)]).then((() => DY(39960))).then((YY => (YY.startWasmPlay(), YY.followPageUiPack((YY => {
        FY.d.showGamePack(YY)
      })), YY)), (YY => {
        throw aY = null, YY
      })), aY
    }

    function uY() {
      return Promise.all([DY.e(71), DY.e(74), DY.e(130), DY.e(73), DY.e(133), DY.e(261), DY.e(185), DY.e(87), DY.e(86), DY.e(85), DY.e(207), DY.e(60)]).then((() => DY(39960))).then((YY => {
        YY.startWasmPreviews(), YY.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);