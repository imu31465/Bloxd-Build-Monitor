export const id = 102;
export const ids = [102];
export const modules = {
  8209: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => gT
    });
    var VB = dB(1422),
      yB = dB(21),
      pB = dB(4064),
      lB = dB(62),
      JB = dB(1317);
    var YB = dB(1679),
      gB = dB(1407),
      oB = dB(1235),
      kB = dB(1078),
      LB = dB(4027);
    const OB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var DB = dB(3993),
      uB = dB(163),
      HB = dB(1020),
      EB = dB(24),
      vB = dB(1126),
      mB = dB(1596),
      iB = dB(95),
      NB = dB(1201),
      tB = dB(1304),
      fB = dB(3934),
      sB = dB(3808),
      MB = dB(2729),
      zB = dB(980);
    const wB = "https://discord.gg/playbloxd";

    function UB(BB) {
      let {
        failure: TB
      } = BB;
      const {
        t: dB
      } = (0, kB.z)(), VB = "chosen" === TB.packSource, yB = iB.featureFlags.useDiscord ? VB ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : VB ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, zB.jsxs)(zB.Fragment, {
        children: [dB(yB, {
          code: TB.code
        }), "default" !== TB.packSource && TB.code === MB.j.Error && (0, zB.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [dB("texturePackLoad:details"), " ", TB.reason]
        }), iB.featureFlags.useDiscord && (0, zB.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, zB.jsx)("a", {
            href: wB,
            target: "_blank",
            rel: "noreferrer",
            children: dB("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var FB = dB(2076),
      KB = dB(1214),
      rB = dB(663),
      IB = dB(1109),
      cB = dB(900),
      SB = dB(1393),
      PB = dB(1105),
      QB = dB(2768),
      RB = dB(2614),
      aB = dB(1242),
      ZB = dB(1225),
      XB = dB(4400),
      WB = dB(8214),
      hB = dB(2474);

    function CB(BB) {
      let {
        onApply: TB,
        onSkip: dB
      } = BB;
      const {
        t: VB
      } = (0, kB.z)();
      return (0, lB.useEffect)((() => {
        hB.h.skipPlayWait()
      }), []), (0, zB.jsx)(aB.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, zB.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [VB("customTexturePack:downloadPrompt"), (0, zB.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: VB("customTexturePack:authorWarning")
          }), (0, zB.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: VB("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: TB
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: dB
        }
      })
    }
    async function GB() {
      let BB = !1;
      const TB = oB.NotificationProvider.showCustomPopup({
        body: TB => (0, zB.jsx)(CB, {
          onApply: () => {
            BB = !0, TB()
          },
          onSkip: TB
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await TB.getResult(), BB
    }
    let qB = {
      wanted: !1
    };
    let xB = null;

    function jB(BB) {
      BB.setGamePackConfirm(GB), xB = BB
    }
    var AB = dB(2983);

    function bB(BB) {
      let {
        schematicId: TB,
        texturePackKey: dB,
        onClose: VB
      } = BB;
      const [yB, pB] = (0, lB.useState)("prompt"), [JB, YB] = (0, lB.useState)(null), gB = (0, AB.b)();

      function oB() {
        VB()
      }
      return "prompt" === yB ? (0, zB.jsx)(CB, {
        onApply: async function() {
          pB("downloading");
          try {
            const BB = await async function(BB, TB) {
              const dB = await (0, XB.c)(TB);
              if (dB) return {
                pack: dB,
                key: TB
              };
              const VB = await HB.userContextManager.getCurrentUserContext(),
                yB = (await SB.c.getGame(VB, BB, !0)).customTexturePackKey;
              if (!yB) return null;
              const pB = await (0, XB.c)(yB);
              if (!pB) throw new Error("The texture pack could not be found");
              return {
                pack: pB,
                key: yB
              }
            }(TB, dB);
            if (!gB.current) return;
            if (!BB) return void VB();
            if ((0, QB.m)(BB.pack)) return void pB("refused");
            RB.b.setFromJson(BB.pack, "customGame"), await RB.b.saveTemporaryTexturePack(BB.key), gB.current && (0, mB.reloadBloxd)()
          } catch (BB) {
            YB(BB instanceof Error ? BB.message : String(BB)), pB("error")
          }
        },
        onSkip: oB
      }) : "downloading" === yB ? (0, zB.jsx)(aB.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, zB.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, zB.jsx)(ZB.b, {
            showFace: !0
          })
        })
      }) : "error" === yB ? (0, zB.jsx)(aB.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: JB,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: oB
        }
      }) : "refused" === yB ? (0, zB.jsx)(aB.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: oB
        }
      }) : null
    }
    var nB = dB(8223),
      eB = dB(3780),
      BT = dB(1622),
      TT = dB(2702),
      dT = dB(2925),
      VT = dB(4081),
      yT = dB(1185),
      pT = dB(586),
      lT = dB(615);

    function JT() {
      const BB = yB.d.get("clientEscMenuOptions");
      YB.gameBridge.send("setLookSensitivity", yB.d.get("isTouchScreen") ? (0, lT.k)(BB) : BB.mouseSensitivity)
    }
    async function YT(BB, TB, dB) {
      const VB = (0, VT.H)(TB);
      async function lB(BB, TB, dB, VB) {
        var lB;
        if (VB.aborted) return null;
        null === yB.d.get("gameEntrySource") && (0, yB.i)("directPlayUrl"), pT.p && (0, WB.c)().catch((() => {})), yB.d.set({
          gameState: "findingLobby"
        }), EB.h.yH("loadingScreenState", "loadingPage:findingLobby");
        const JB = await HB.userContextManager.getCurrentUserContext();
        YB.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: TB,
          discordContext: BB instanceof IB.i ? BB.getSerialisableParams() : null
        }), (0, BT.g)();
        const gB = await async function(BB, TB, dB, VB, yB) {
          try {
            await pB.reqLibsLoadedPromise
          } catch (lB) {
            return vB.d.errorWithCode(lB.toString(), uB.i.LOAD_REQUIRED_LIBS, {
              error: lB,
              severity: "medium"
            })
          }
          return EB.h.yH("matchmakeAndPlayStepCompleted", {
            step: uB.i.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, pB.matchmakeAndPlayMaybeUnloaded)(BB, TB, dB, VB, yB)
        }(BB, TB, dB, JB, VB), oB = gB.isError() ? gB.asError() : null;
        if (oB && !oB.debugResult.IT) {
          console.log("Failed to join lobby:", oB.message);
          const BB = "timedOut" === oB.debugResult.gameServerUnreachable;
          (0, TT.i)("matchmake_failed", oB.message, BB ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : uB.i[oB.code])
        }
        if (VB.aborted) return YB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== oB && void 0 !== oB && oB.debugResult.IT) return console.log("Join cancelled:", oB.message), null;
        if (oB) return gB;
        const {
          gameNameWithVariation: kB,
          lobbyName: LB,
          addLobbyToRecentlyPlayed: OB
        } = gB.getValue();
        let DB;
        JT(), (0, yT.z)().setGameViewShown(!0);
        const mB = null === (lB = rB.e[kB]) || void 0 === lB ? void 0 : lB.recentlyPlayedAs;
        return DB = (0, cB.j)(kB) ? {
          type: "custom",
          name: "",
          schematicId: (0, cB.l)(kB),
          recentLobbies: []
        } : "classic" !== kB || (0, PB.O)(LB) ? mB ? {
          type: "bloxd",
          gameNameWithVariation: mB,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: kB,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, SB.c.addRecentlyPlayedGame(JB, DB, OB && !mB ? LB : void 0).then((BB => {
          JB.setRecentlyPlayedGames(BB)
        })).catch((BB => {
          console.error("Failed to record recently played game", BB)
        })), (0, NB.N)(), gB
      }
      return VB && (0, yB.i)("updateRejoin"), (0, dT.f)((async yB => {
        try {
          let JB = BB,
            YB = await lB(JB, TB, dB, yB);
          for (let BB = 0; VB && BB < VT.i; BB++) {
            var pB;
            if (null === (pB = YB) || void 0 === pB || !pB.isError() || YB.asError().code !== uB.i.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, VT.I)((0, VT.r)(BB), yB)) return YB;
            JB = (0, VT.s)(JB, BB + 1, "string" === typeof JB && (0, PB.O)(JB)), YB = await lB(JB, TB, dB, yB)
          }
          return YB
        } catch (JB) {
          if ((0, TT.i)("matchmake_failed", JB, "unexpected"), YB.gameBridge.send("leaveGame", {
              reloadPath: yB.aborted ? null : "/"
            }), yB.aborted) return null;
          throw JB
        }
      }), (async BB => {
        var dB;
        if (VB) return;
        const yB = (0, NB.D)();
        null !== yB && (await yB, BB.aborted) || (null !== (dB = rB.e[TB]) && void 0 !== dB && dB.playAdBeforeMatchmaking ? (hB.h.skipPlayWait(), await new Promise((BB => {
          (0, NB.cb)((() => {
            BB(!0)
          }), "video_start")
        }))) : (0, NB.cb)((() => {}), "video_start"))
      }))
    }

    function gT() {
      const {
        t: BB
      } = (0, kB.z)(), TB = (0, gB.useNavigatePreserveSearch)(), dB = (0, VB.o)(), EB = (0, VB.u)(), vB = (0, lB.useRef)({
        t: BB,
        navigate: TB
      });
      vB.current = {
        t: BB,
        navigate: TB
      };
      const wB = (0, lB.useRef)("");
      wB.current = dB.pathname + dB.search;
      const {
        gameState: rB,
        clientEscMenuOptions: IB
      } = (0, yB.m)(["gameState", "clientEscMenuOptions"]), QB = (0, lB.useRef)(null), aB = (0, lB.useRef)(null);
      var ZB;
      (0, dT.i)(), (0, dT.j)(), ZB = pT.p, (0, lB.useEffect)((() => {
        if (!ZB) return;
        let BB = !0;
        return (0, WB.c)().then((TB => {
          BB && jB(TB)
        })).catch((() => {})), () => {
          var TB;
          BB = !1, qB.wanted = !1, null === (TB = xB) || void 0 === TB || TB.setGamePackConfirm(null), xB = null
        }
      }), [ZB]), (0, lB.useEffect)((() => {
        var BB;
        (0, pB.needGameClientNow)();
        const {
          t: TB,
          navigate: VB
        } = vB.current, lB = (0, nB.c)(EB, dB.search);
        if (EB.lobbyName && !new URLSearchParams(dB.search).has("lobby")) return void VB((0, KB.b)(lB.gameNameWithVariation, lB.lobbyName), {
          replace: !0
        });
        let JB = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === dB.pathname) {
          const BB = yB.d.get("discordContext");
          if (!BB) return void VB("/");
          JB = DB.e.setupDiscordLobby(BB, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: BB
          }))).catch((TB => (console.error("Failed to setup discord lobby", TB), {
            shouldMatchmake: !1,
            discordContext: BB
          })))
        } else if (!lB.gameNameWithVariation || !(0, PB.M)(lB.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${lB.gameNameWithVariation}`), void VB(-1);
        if (lB.gameNameWithVariation === QB.current && lB.lobbyName === aB.current) return;
        if (YB.gameBridge.latest("connectedGame").replay) return void(0, dT.c)(null);
        (0, NB.J)(), yB.d.set({
          gameState: "loadingScreen"
        });
        const gB = function() {
          qB.wanted = !1;
          const BB = {
            wanted: !0
          };
          return qB = BB, () => BB.wanted
        }();
        if ("releaseCountdown" === (null === (BB = (0, FB.d)(lB.gameNameWithVariation)) || void 0 === BB ? void 0 : BB.type)) return console.error(`Game hasn't been released yet: ${lB.gameNameWithVariation}`), void VB(-1);
        const kB = lB.gameNameWithVariation;
        if (kB && (pT.p || (0, cB.j)(kB))) {
          const BB = pT.p ? Promise.all([(0, WB.c)(), HB.userContextManager.getCurrentUserContext()]).then((BB => {
            let [TB, dB] = BB;
            if (gB()) return jB(TB), TB.packForGame(kB, dB, gB)
          })) : async function(BB) {
            await RB.b.indexedDbValuesAreLoaded();
            const TB = await HB.userContextManager.getCurrentUserContext(),
              dB = (0, cB.l)(BB);
            let VB;
            try {
              VB = await SB.c.getGame(TB, dB, !0)
            } catch (lB) {
              return void console.error("Failed to get game", lB)
            }
            const yB = VB.customTexturePackKey;
            if (!yB) return void(RB.b.isUsingTemporaryTexturePack() && ((0, mB.reloadBloxd)(), await new Promise((() => {}))));
            if (RB.b.isUsingTemporaryTexturePack() && RB.b.getTemporaryTexturePackSource() === yB) return;
            const pB = oB.NotificationProvider.showCustomPopup({
              body: BB => (0, zB.jsx)(bB, {
                schematicId: dB,
                texturePackKey: yB,
                onClose: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await pB.getResult()
          }(kB), TB = JB;
          JB = BB.catch((BB => {
            console.error("Failed to check for custom texture pack", BB)
          })).then((() => TB))
        }(0, dT.c)(null);
        let tB = !1;
        const rB = dB.pathname + dB.search,
          IB = () => !tB && wB.current === rB;
        return JB.then((BB => {
          let {
            shouldMatchmake: dB,
            discordContext: pB
          } = BB;
          IB() && (dB ? YT(null !== pB && void 0 !== pB ? pB : lB.lobbyName, pB ? "classic" : lB.gameNameWithVariation, lB.directJoinVmUrl).then((BB => {
            var dB, pB;
            if (null !== BB && IB())
              if (BB.isError()) {
                var JB;
                const gB = BB.asError(),
                  kB = null !== (JB = gB.debugResult.severity) && void 0 !== JB ? JB : "high";
                if (gB.code === uB.i.SHADER_PACK) return void(0, eB.b)(gB.message, VB);
                const DB = yB.d.get("gameEntrySource"),
                  HB = gB.code === uB.i.INITIALISE_WEBGL ? (0, sB.b)() : null,
                  {
                    error: EB
                  } = gB.debugResult,
                  vB = gB.code === uB.i.REQUEST_TO_MATCHMAKING ? function(BB) {
                    var TB;
                    return null !== (TB = Object.keys(LB.b).find((TB => LB.b[TB] === BB))) && void 0 !== TB ? TB : null
                  }(gB.message) : null;
                let NB;
                if (null !== vB) oB.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: TB((pB = vB, "notWhitelisted" === pB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: TB(OB[vB]),
                  confirmText: TB("general:ok"),
                  cancelText: ""
                }), NB = Promise.resolve(!1);
                else if (null !== HB) NB = (0, sB.g)(HB);
                else if (EB instanceof MB.k) dB = EB, NB = oB.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, zB.jsx)(UB, {
                    failure: dB
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((BB => !0 === BB));
                else {
                  let BB;
                  switch (kB) {
                    case "low":
                      BB = "face-diagonal-mouth";
                      break;
                    case "medium":
                      BB = "face-worried";
                      break;
                    case "high":
                      BB = "face-dizzy"
                  }
                  NB = oB.NotificationProvider.showPromptPopup({
                    icon: BB,
                    title: uB.w[gB.code],
                    subtitle: (0, zB.jsxs)(zB.Fragment, {
                      children: [gB.debugResult.gameServerUnreachable ? TB((0, iB.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : gB.message, gB.debugResult.error instanceof Error && (0, zB.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, zB.jsx)(fB.b, {
                          errorString: gB.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: TB("general:tryAgain"),
                    cancelText: TB("general:cancel")
                  }).getResult().then((BB => !0 === BB))
                }
                NB.then((BB => {
                  if (BB) {
                    (0, yB.i)(DB);
                    const BB = (0, KB.b)(lB.gameNameWithVariation, lB.lobbyName);
                    "low" === kB ? VB(BB) : (0, mB.reloadBloxd)(BB)
                  }
                })), YB.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), VB(-1)
              } else {
                QB.current = BB.getValue().gameNameWithVariation, aB.current = BB.getValue().lobbyName;
                const TB = (0, KB.b)(QB.current, BB.getValue().lobbyName);
                VB(TB, {
                  replace: !0
                })
              }
          })).catch((BB => {
            if (!IB()) return;
            oB.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, zB.jsxs)(zB.Fragment, {
                children: [TB("homePage:pleaseCopyError"), (0, zB.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, zB.jsx)(fB.b, {
                    errorString: BB.stack
                  })
                })]
              }),
              confirmText: TB("general:tryAgain"),
              cancelText: TB("general:cancel")
            }).getResult().then((BB => {
              !0 === BB && (0, mB.reloadBloxd)((0, KB.b)(lB.gameNameWithVariation, lB.lobbyName))
            })), VB(-1)
          })) : VB(-1))
        })), () => {
          tB = !0
        }
      }), [EB, dB.search, dB.pathname]), (0, lB.useEffect)((() => {
        IB.disableFullscreen && (0, tB.d)() ? (0, tB.h)() : !IB.disableFullscreen && (0, tB.e)() && (0, tB.o)()
      }), [rB, IB]), (0, lB.useEffect)((() => {
        "inGame" === rB && JT()
      }), [rB, IB]), (0, lB.useEffect)((() => {
        "inGame" !== rB && yB.d.set({
          openInGameMenuName: null
        })
      }), [rB]);
      const XB = function(BB) {
        const TB = (0, yB.g)(BB),
          [dB, VB] = (0, lB.useState)(0),
          [pB, YB] = (0, lB.useState)(!1);
        (0, JB.e)("gameJoined", (() => {
          (0, yB.g)(yB.d.get("gameState")) && (VB((BB => BB + 1)), YB(!0))
        })), (0, lB.useEffect)((() => {
          TB || YB(!1)
        }), [TB]);
        const gB = "inGame" === BB;
        return {
          mounted: gB || TB && pB,
          shown: gB,
          key: dB
        }
      }(rB);
      return (0, zB.jsx)(zB.Fragment, {
        children: XB.mounted && (0, zB.jsx)(pB.InGameUi, {
          shown: XB.shown
        }, XB.key)
      })
    }
  },
  4400: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(1089);
    async function yB(BB) {
      const TB = await fetch(`${VB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === TB.status || 403 === TB.status) return null;
      if (!TB.ok) throw new Error(`Failed to download the texture pack (${TB.status})`);
      return await TB.json()
    }
  },
  8223: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(1214),
      yB = dB(1105),
      pB = dB(572);

    function lB(BB) {
      return BB = function(BB, TB) {
        var dB;
        const VB = new URLSearchParams(TB),
          yB = VB.get("lobby"),
          pB = VB.get("vm"),
          lB = null !== (dB = yB) && void 0 !== dB ? dB : BB.lobbyName,
          JB = null !== pB && void 0 !== pB ? pB : BB.directJoinVmUrl;
        if (lB === BB.lobbyName && JB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: lB,
          directJoinVmUrl: JB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, pB.M)(BB.directJoinVmUrl)) return BB;
        const TB = (0, yB.db)(BB.directJoinVmUrl);
        null === TB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, pB.M)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, VB.k)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  8214: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      g: () => LB,
      i: () => kB
    });
    var VB = dB(2614),
      yB = dB(2034),
      pB = dB(2664),
      lB = dB(4051),
      JB = dB(2998);
    let YB = null,
      gB = !1;

    function oB() {
      return lB.e.cancelDownloadForJoin(), (0, JB.d)(), (0, yB.i)(), gB = !0, (0, pB.h)(), Promise.all([dB.e(64), dB.e(67), dB.e(66), dB.e(65), dB.e(77), dB.e(228), dB.e(202), dB.e(226), dB.e(197), dB.e(43)]).then((() => dB(39407))).catch((() => {})), Promise.all([dB.e(126), dB.e(81), dB.e(51)]).then((() => dB(39476))).then((BB => {
        let {
          startJoinLoad: TB
        } = BB;
        TB()
      }), (() => {})), YB ??= Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        VB.b.showGamePack(BB)
      })), BB)), (BB => {
        throw YB = null, BB
      })), YB
    }

    function kB() {
      return gB
    }

    function LB() {
      return Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);