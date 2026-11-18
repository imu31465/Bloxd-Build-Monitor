export const id = 102;
export const ids = [102];
export const modules = {
  8181: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => jc
    });
    var FJ = ZJ(1421),
      UJ = ZJ(13),
      eJ = ZJ(4069),
      XJ = ZJ(47),
      AJ = ZJ(1326);
    var qJ = ZJ(1703),
      jJ = ZJ(1406),
      YJ = ZJ(1247),
      hJ = ZJ(1086),
      DJ = ZJ(4049);
    const sJ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var nJ = ZJ(4006),
      GJ = ZJ(143),
      fJ = ZJ(1028),
      xJ = ZJ(17),
      rJ = ZJ(1144),
      vJ = ZJ(1599),
      mJ = ZJ(80),
      QJ = ZJ(1201),
      EJ = ZJ(1319),
      VJ = ZJ(3943),
      KJ = ZJ(3815),
      yJ = ZJ(2745),
      SJ = ZJ(990);
    const IJ = "https://discord.gg/playbloxd";

    function MJ(JJ) {
      let {
        failure: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, hJ.F)(), FJ = "chosen" === cJ.packSource, UJ = mJ.featureFlags.useDiscord ? FJ ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : FJ ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, SJ.jsxs)(SJ.Fragment, {
        children: [ZJ(UJ, {
          code: cJ.code
        }), "default" !== cJ.packSource && cJ.code === yJ.n.Error && (0, SJ.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [ZJ("texturePackLoad:details"), " ", cJ.reason]
        }), mJ.featureFlags.useDiscord && (0, SJ.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, SJ.jsx)("a", {
            href: IJ,
            target: "_blank",
            rel: "noreferrer",
            children: ZJ("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var bJ = ZJ(2109),
      wJ = ZJ(1221),
      WJ = ZJ(622),
      gJ = ZJ(1126),
      HJ = ZJ(889),
      PJ = ZJ(1389),
      kJ = ZJ(1122),
      pJ = ZJ(2787),
      dJ = ZJ(2642),
      zJ = ZJ(1250),
      NJ = ZJ(1232),
      OJ = ZJ(4392),
      TJ = ZJ(8187),
      CJ = ZJ(2492);

    function uJ(JJ) {
      let {
        onApply: cJ,
        onSkip: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, hJ.F)();
      return (0, XJ.useEffect)((() => {
        CJ.d.skipPlayWait()
      }), []), (0, SJ.jsx)(zJ.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, SJ.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [FJ("customTexturePack:downloadPrompt"), (0, SJ.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: FJ("customTexturePack:authorWarning")
          }), (0, SJ.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: FJ("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: cJ
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ZJ
        }
      })
    }
    async function iJ() {
      let JJ = !1;
      const cJ = YJ.NotificationProvider.showCustomPopup({
        body: cJ => (0, SJ.jsx)(uJ, {
          onApply: () => {
            JJ = !0, cJ()
          },
          onSkip: cJ
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await cJ.getResult(), JJ
    }
    let RJ = {
      wanted: !1
    };
    let LJ = null;

    function aJ(JJ) {
      JJ.setGamePackConfirm(iJ), LJ = JJ
    }
    var BJ = ZJ(2975);

    function tJ(JJ) {
      let {
        schematicId: cJ,
        texturePackKey: ZJ,
        onClose: FJ
      } = JJ;
      const [UJ, eJ] = (0, XJ.useState)("prompt"), [AJ, qJ] = (0, XJ.useState)(null), jJ = (0, BJ.e)();

      function YJ() {
        FJ()
      }
      return "prompt" === UJ ? (0, SJ.jsx)(uJ, {
        onApply: async function() {
          eJ("downloading");
          try {
            const JJ = await async function(JJ, cJ) {
              const ZJ = await (0, OJ.d)(cJ);
              if (ZJ) return {
                pack: ZJ,
                key: cJ
              };
              const FJ = await fJ.userContextManager.getCurrentUserContext(),
                UJ = (await PJ.c.getGame(FJ, JJ, !0)).customTexturePackKey;
              if (!UJ) return null;
              const eJ = await (0, OJ.d)(UJ);
              if (!eJ) throw new Error("The texture pack could not be found");
              return {
                pack: eJ,
                key: UJ
              }
            }(cJ, ZJ);
            if (!jJ.current) return;
            if (!JJ) return void FJ();
            if ((0, pJ.g)(JJ.pack)) return void eJ("refused");
            dJ.b.setFromJson(JJ.pack, "customGame"), await dJ.b.saveTemporaryTexturePack(JJ.key), jJ.current && (0, vJ.reloadBloxd)()
          } catch (JJ) {
            qJ(JJ instanceof Error ? JJ.message : String(JJ)), eJ("error")
          }
        },
        onSkip: YJ
      }) : "downloading" === UJ ? (0, SJ.jsx)(zJ.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, SJ.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, SJ.jsx)(NJ.c, {
            showFace: !0
          })
        })
      }) : "error" === UJ ? (0, SJ.jsx)(zJ.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: AJ,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: YJ
        }
      }) : "refused" === UJ ? (0, SJ.jsx)(zJ.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: YJ
        }
      }) : null
    }
    var oJ = ZJ(8192),
      lJ = ZJ(3782),
      Jc = ZJ(1638),
      cc = ZJ(2710),
      Zc = ZJ(2924),
      Fc = ZJ(4092),
      Uc = ZJ(1192),
      ec = ZJ(547),
      Xc = ZJ(572);

    function Ac() {
      const JJ = UJ.d.get("clientEscMenuOptions");
      qJ.gameBridge.send("setLookSensitivity", UJ.d.get("isTouchScreen") ? (0, Xc.m)(JJ) : JJ.mouseSensitivity)
    }
    async function qc(JJ, cJ, ZJ) {
      const FJ = (0, Fc.M)(cJ);
      async function XJ(JJ, cJ, ZJ, FJ) {
        var XJ;
        if (FJ.aborted) return null;
        null === UJ.d.get("gameEntrySource") && (0, UJ.h)("directPlayUrl"), ec.r && (0, TJ.c)().catch((() => {})), UJ.d.set({
          gameState: "findingLobby"
        }), xJ.i.Uf("loadingScreenState", "loadingPage:findingLobby");
        const AJ = await fJ.userContextManager.getCurrentUserContext();
        qJ.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: cJ,
          discordContext: JJ instanceof gJ.f ? JJ.getSerialisableParams() : null
        }), (0, Jc.d)();
        const jJ = await async function(JJ, cJ, ZJ, FJ, UJ) {
          try {
            await eJ.reqLibsLoadedPromise
          } catch (XJ) {
            return rJ.b.errorWithCode(XJ.toString(), GJ.e.LOAD_REQUIRED_LIBS, {
              error: XJ,
              severity: "medium"
            })
          }
          return xJ.i.Uf("matchmakeAndPlayStepCompleted", {
            step: GJ.e.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, eJ.matchmakeAndPlayMaybeUnloaded)(JJ, cJ, ZJ, FJ, UJ)
        }(JJ, cJ, ZJ, AJ, FJ), YJ = jJ.isError() ? jJ.asError() : null;
        if (YJ && !YJ.debugResult.hZ) {
          console.log("Failed to join lobby:", YJ.message);
          const JJ = "timedOut" === YJ.debugResult.gameServerUnreachable;
          (0, cc.h)("matchmake_failed", YJ.message, JJ ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : GJ.e[YJ.code])
        }
        if (FJ.aborted) return qJ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== YJ && void 0 !== YJ && YJ.debugResult.hZ) return console.log("Join cancelled:", YJ.message), null;
        if (YJ) return jJ;
        const {
          gameNameWithVariation: hJ,
          lobbyName: DJ,
          addLobbyToRecentlyPlayed: sJ
        } = jJ.getValue();
        let nJ;
        Ac(), (0, Uc.A)().setGameViewShown(!0);
        const vJ = null === (XJ = WJ.d[hJ]) || void 0 === XJ ? void 0 : XJ.recentlyPlayedAs;
        return nJ = (0, HJ.k)(hJ) ? {
          type: "custom",
          name: "",
          schematicId: (0, HJ.n)(hJ),
          recentLobbies: []
        } : "classic" !== hJ || (0, kJ.N)(DJ) ? vJ ? {
          type: "bloxd",
          gameNameWithVariation: vJ,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: hJ,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, PJ.c.addRecentlyPlayedGame(AJ, nJ, sJ && !vJ ? DJ : void 0).then((JJ => {
          AJ.setRecentlyPlayedGames(JJ)
        })).catch((JJ => {
          console.error("Failed to record recently played game", JJ)
        })), (0, QJ.P)(), jJ
      }
      return FJ && (0, UJ.h)("updateRejoin"), (0, Zc.g)((async UJ => {
        try {
          let AJ = JJ,
            qJ = await XJ(AJ, cJ, ZJ, UJ);
          for (let JJ = 0; FJ && JJ < Fc.o; JJ++) {
            var eJ;
            if (null === (eJ = qJ) || void 0 === eJ || !eJ.isError() || qJ.asError().code !== GJ.e.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Fc.P)((0, Fc.w)(JJ), UJ)) return qJ;
            AJ = (0, Fc.A)(AJ, JJ + 1, "string" === typeof AJ && (0, kJ.N)(AJ)), qJ = await XJ(AJ, cJ, ZJ, UJ)
          }
          return qJ
        } catch (AJ) {
          if ((0, cc.h)("matchmake_failed", AJ, "unexpected"), qJ.gameBridge.send("leaveGame", {
              reloadPath: UJ.aborted ? null : "/"
            }), UJ.aborted) return null;
          throw AJ
        }
      }), (async JJ => {
        var ZJ;
        if (FJ) return;
        const UJ = (0, QJ.G)();
        null !== UJ && (await UJ, JJ.aborted) || (null !== (ZJ = WJ.d[cJ]) && void 0 !== ZJ && ZJ.playAdBeforeMatchmaking ? (CJ.d.skipPlayWait(), await new Promise((JJ => {
          (0, QJ.db)((() => {
            JJ(!0)
          }), "video_start")
        }))) : (0, QJ.db)((() => {}), "video_start"))
      }))
    }

    function jc() {
      const {
        t: JJ
      } = (0, hJ.F)(), cJ = (0, jJ.useNavigatePreserveSearch)(), ZJ = (0, FJ.q)(), xJ = (0, FJ.x)(), rJ = (0, XJ.useRef)({
        t: JJ,
        navigate: cJ
      });
      rJ.current = {
        t: JJ,
        navigate: cJ
      };
      const IJ = (0, XJ.useRef)("");
      IJ.current = ZJ.pathname + ZJ.search;
      const {
        gameState: WJ,
        clientEscMenuOptions: gJ
      } = (0, UJ.j)(["gameState", "clientEscMenuOptions"]), pJ = (0, XJ.useRef)(null), zJ = (0, XJ.useRef)(null);
      var NJ;
      (0, Zc.j)(), (0, Zc.k)(), NJ = ec.r, (0, XJ.useEffect)((() => {
        if (!NJ) return;
        let JJ = !0;
        return (0, TJ.c)().then((cJ => {
          JJ && aJ(cJ)
        })).catch((() => {})), () => {
          var cJ;
          JJ = !1, RJ.wanted = !1, null === (cJ = LJ) || void 0 === cJ || cJ.setGamePackConfirm(null), LJ = null
        }
      }), [NJ]), (0, XJ.useEffect)((() => {
        var JJ;
        (0, eJ.needGameClientNow)();
        const {
          t: cJ,
          navigate: FJ
        } = rJ.current, XJ = (0, oJ.e)(xJ, ZJ.search);
        if (xJ.lobbyName && !new URLSearchParams(ZJ.search).has("lobby")) return void FJ((0, wJ.c)(XJ.gameNameWithVariation, XJ.lobbyName), {
          replace: !0
        });
        let AJ = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ZJ.pathname) {
          const JJ = UJ.d.get("discordContext");
          if (!JJ) return void FJ("/");
          AJ = nJ.e.setupDiscordLobby(JJ, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: JJ
          }))).catch((cJ => (console.error("Failed to setup discord lobby", cJ), {
            shouldMatchmake: !1,
            discordContext: JJ
          })))
        } else if (!XJ.gameNameWithVariation || !(0, kJ.K)(XJ.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${XJ.gameNameWithVariation}`), void FJ(-1);
        if (XJ.gameNameWithVariation === pJ.current && XJ.lobbyName === zJ.current) return;
        if (qJ.gameBridge.latest("connectedGame").replay) return void(0, Zc.f)(null);
        (0, QJ.K)(), UJ.d.set({
          gameState: "loadingScreen"
        });
        const jJ = function() {
          RJ.wanted = !1;
          const JJ = {
            wanted: !0
          };
          return RJ = JJ, () => JJ.wanted
        }();
        if ("releaseCountdown" === (null === (JJ = (0, bJ.h)(XJ.gameNameWithVariation)) || void 0 === JJ ? void 0 : JJ.type)) return console.error(`Game hasn't been released yet: ${XJ.gameNameWithVariation}`), void FJ(-1);
        const hJ = XJ.gameNameWithVariation;
        if (hJ && (ec.r || (0, HJ.k)(hJ))) {
          const JJ = ec.r ? Promise.all([(0, TJ.c)(), fJ.userContextManager.getCurrentUserContext()]).then((JJ => {
            let [cJ, ZJ] = JJ;
            if (jJ()) return aJ(cJ), cJ.packForGame(hJ, ZJ, jJ)
          })) : async function(JJ) {
            await dJ.b.indexedDbValuesAreLoaded();
            const cJ = await fJ.userContextManager.getCurrentUserContext(),
              ZJ = (0, HJ.n)(JJ);
            let FJ;
            try {
              FJ = await PJ.c.getGame(cJ, ZJ, !0)
            } catch (XJ) {
              return void console.error("Failed to get game", XJ)
            }
            const UJ = FJ.customTexturePackKey;
            if (!UJ) return void(dJ.b.isUsingTemporaryTexturePack() && ((0, vJ.reloadBloxd)(), await new Promise((() => {}))));
            if (dJ.b.isUsingTemporaryTexturePack() && dJ.b.getTemporaryTexturePackSource() === UJ) return;
            const eJ = YJ.NotificationProvider.showCustomPopup({
              body: JJ => (0, SJ.jsx)(tJ, {
                schematicId: ZJ,
                texturePackKey: UJ,
                onClose: JJ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await eJ.getResult()
          }(hJ), cJ = AJ;
          AJ = JJ.catch((JJ => {
            console.error("Failed to check for custom texture pack", JJ)
          })).then((() => cJ))
        }(0, Zc.f)(null);
        let EJ = !1;
        const WJ = ZJ.pathname + ZJ.search,
          gJ = () => !EJ && IJ.current === WJ;
        return AJ.then((JJ => {
          let {
            shouldMatchmake: ZJ,
            discordContext: eJ
          } = JJ;
          gJ() && (ZJ ? qc(null !== eJ && void 0 !== eJ ? eJ : XJ.lobbyName, eJ ? "classic" : XJ.gameNameWithVariation, XJ.directJoinVmUrl).then((JJ => {
            var ZJ, eJ;
            if (null !== JJ && gJ())
              if (JJ.isError()) {
                var AJ;
                const jJ = JJ.asError(),
                  hJ = null !== (AJ = jJ.debugResult.severity) && void 0 !== AJ ? AJ : "high";
                if (jJ.code === GJ.e.SHADER_PACK) return void(0, lJ.d)(jJ.message, FJ);
                const nJ = UJ.d.get("gameEntrySource"),
                  fJ = jJ.code === GJ.e.INITIALISE_WEBGL ? (0, KJ.e)() : null,
                  {
                    error: xJ
                  } = jJ.debugResult,
                  rJ = jJ.code === GJ.e.REQUEST_TO_MATCHMAKING ? function(JJ) {
                    var cJ;
                    return null !== (cJ = Object.keys(DJ.e).find((cJ => DJ.e[cJ] === JJ))) && void 0 !== cJ ? cJ : null
                  }(jJ.message) : null;
                let QJ;
                if (null !== rJ) YJ.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: cJ((eJ = rJ, "notWhitelisted" === eJ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: cJ(sJ[rJ]),
                  confirmText: cJ("general:ok"),
                  cancelText: ""
                }), QJ = Promise.resolve(!1);
                else if (null !== fJ) QJ = (0, KJ.k)(fJ);
                else if (xJ instanceof yJ.q) ZJ = xJ, QJ = YJ.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, SJ.jsx)(MJ, {
                    failure: ZJ
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((JJ => !0 === JJ));
                else {
                  let JJ;
                  switch (hJ) {
                    case "low":
                      JJ = "face-diagonal-mouth";
                      break;
                    case "medium":
                      JJ = "face-worried";
                      break;
                    case "high":
                      JJ = "face-dizzy"
                  }
                  QJ = YJ.NotificationProvider.showPromptPopup({
                    icon: JJ,
                    title: GJ.s[jJ.code],
                    subtitle: (0, SJ.jsxs)(SJ.Fragment, {
                      children: [jJ.debugResult.gameServerUnreachable ? cJ((0, mJ.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : jJ.message, jJ.debugResult.error instanceof Error && (0, SJ.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, SJ.jsx)(VJ.e, {
                          errorString: jJ.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: cJ("general:tryAgain"),
                    cancelText: cJ("general:cancel")
                  }).getResult().then((JJ => !0 === JJ))
                }
                QJ.then((JJ => {
                  if (JJ) {
                    (0, UJ.h)(nJ);
                    const JJ = (0, wJ.c)(XJ.gameNameWithVariation, XJ.lobbyName);
                    "low" === hJ ? FJ(JJ) : (0, vJ.reloadBloxd)(JJ)
                  }
                })), qJ.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), FJ(-1)
              } else {
                pJ.current = JJ.getValue().gameNameWithVariation, zJ.current = JJ.getValue().lobbyName;
                const cJ = (0, wJ.c)(pJ.current, JJ.getValue().lobbyName);
                FJ(cJ, {
                  replace: !0
                })
              }
          })).catch((JJ => {
            if (!gJ()) return;
            YJ.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, SJ.jsxs)(SJ.Fragment, {
                children: [cJ("homePage:pleaseCopyError"), (0, SJ.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, SJ.jsx)(VJ.e, {
                    errorString: JJ.stack
                  })
                })]
              }),
              confirmText: cJ("general:tryAgain"),
              cancelText: cJ("general:cancel")
            }).getResult().then((JJ => {
              !0 === JJ && (0, vJ.reloadBloxd)((0, wJ.c)(XJ.gameNameWithVariation, XJ.lobbyName))
            })), FJ(-1)
          })) : FJ(-1))
        })), () => {
          EJ = !0
        }
      }), [xJ, ZJ.search, ZJ.pathname]), (0, XJ.useEffect)((() => {
        gJ.disableFullscreen && (0, EJ.e)() ? (0, EJ.i)() : !gJ.disableFullscreen && (0, EJ.g)() && (0, EJ.s)()
      }), [WJ, gJ]), (0, XJ.useEffect)((() => {
        "inGame" === WJ && Ac()
      }), [WJ, gJ]), (0, XJ.useEffect)((() => {
        "inGame" !== WJ && UJ.d.set({
          openInGameMenuName: null
        })
      }), [WJ]);
      const OJ = function(JJ) {
        const cJ = (0, UJ.e)(JJ),
          [ZJ, FJ] = (0, XJ.useState)(0),
          [eJ, qJ] = (0, XJ.useState)(!1);
        (0, AJ.i)("gameJoined", (() => {
          (0, UJ.e)(UJ.d.get("gameState")) && (FJ((JJ => JJ + 1)), qJ(!0))
        })), (0, XJ.useEffect)((() => {
          cJ || qJ(!1)
        }), [cJ]);
        const jJ = "inGame" === JJ;
        return {
          mounted: jJ || cJ && eJ,
          shown: jJ,
          key: ZJ
        }
      }(WJ);
      return (0, SJ.jsx)(SJ.Fragment, {
        children: OJ.mounted && (0, SJ.jsx)(eJ.InGameUi, {
          shown: OJ.shown
        }, OJ.key)
      })
    }
  },
  4392: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ
    });
    var FJ = ZJ(1098);
    async function UJ(JJ) {
      const cJ = await fetch(`${FJ.clientSideServerUrls.s3Url}/${JJ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === cJ.status || 403 === cJ.status) return null;
      if (!cJ.ok) throw new Error(`Failed to download the texture pack (${cJ.status})`);
      return await cJ.json()
    }
  },
  8192: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(1221),
      UJ = ZJ(1122),
      eJ = ZJ(535);

    function XJ(JJ) {
      return JJ = function(JJ, cJ) {
        var ZJ;
        const FJ = new URLSearchParams(cJ),
          UJ = FJ.get("lobby"),
          eJ = FJ.get("vm"),
          XJ = null !== (ZJ = UJ) && void 0 !== ZJ ? ZJ : JJ.lobbyName,
          AJ = null !== eJ && void 0 !== eJ ? eJ : JJ.directJoinVmUrl;
        if (XJ === JJ.lobbyName && AJ === JJ.directJoinVmUrl) return JJ;
        return {
          ...JJ,
          lobbyName: XJ,
          directJoinVmUrl: AJ
        }
      }(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), JJ = function(JJ) {
        if ((0, eJ.P)(JJ.directJoinVmUrl)) return JJ;
        const cJ = (0, UJ.cb)(JJ.directJoinVmUrl);
        null === cJ && (JJ.directJoinVmUrl = void 0);
        return JJ
      }(JJ = function(JJ) {
        if ((0, eJ.P)(JJ.gameNameWithVariation)) return JJ;
        return JJ.gameNameWithVariation = (0, FJ.k)(JJ.gameNameWithVariation), JJ
      }(JJ))
    }
  },
  8187: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      e: () => DJ,
      g: () => hJ
    });
    var FJ = ZJ(2642),
      UJ = ZJ(2042),
      eJ = ZJ(2675),
      XJ = ZJ(4057),
      AJ = ZJ(2988);
    let qJ = null,
      jJ = !1;

    function YJ() {
      return XJ.e.cancelDownloadForJoin(), (0, AJ.e)(), (0, UJ.c)(), jJ = !0, (0, eJ.j)(), Promise.all([ZJ.e(64), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(77), ZJ.e(228), ZJ.e(202), ZJ.e(226), ZJ.e(197), ZJ.e(43)]).then((() => ZJ(39445))).catch((() => {})), Promise.all([ZJ.e(126), ZJ.e(81), ZJ.e(51)]).then((() => ZJ(39512))).then((JJ => {
        let {
          startJoinLoad: cJ
        } = JJ;
        cJ()
      }), (() => {})), qJ ??= Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => (JJ.startWasmPlay(), JJ.followPageUiPack((JJ => {
        FJ.b.showGamePack(JJ)
      })), JJ)), (JJ => {
        throw qJ = null, JJ
      })), qJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      return Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => {
        JJ.startWasmPreviews(), JJ.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);