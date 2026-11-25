export const id = 112;
export const ids = [112];
export const modules = {
  9005: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => WI
    });
    var TB = ZB(1591),
      JB = ZB(20),
      oB = ZB(4829),
      GB = ZB(63),
      vB = ZB(1507);
    var kB = ZB(1995),
      cB = ZB(1579),
      nB = ZB(1403),
      hB = ZB(1248),
      zB = ZB(168),
      FB = ZB(201),
      NB = ZB(1058),
      gB = ZB(1062),
      qB = ZB(1281),
      yB = ZB(2458),
      UB = ZB(1561),
      WB = ZB(1186),
      dB = ZB(9011),
      CB = ZB(1605);

    function QB(BB, IB) {
      const ZB = !0 === IB.debugResult.gameRefused,
        TB = ZB || IB.code === zB.l.REQUEST_TO_MATCHMAKING ? (0, dB.i)(IB.message) : null;
      if (null !== TB) return sB(BB, BB((0, dB.l)(TB)), BB(dB.k[TB])), !0;
      if (ZB) return async function(BB) {
        const {
          gameNameWithVariation: IB,
          lobbyName: ZB,
          shownLobbyName: TB
        } = kB.gameBridge.latest("connectedGame"), JB = "classic" === IB && (0, qB.C)(ZB) ? TB : await (0, yB.e)(BB, IB, ZB);
        return "" !== JB ? BB("general:cantJoinGame", {
          game: JB
        }) : BB("general:cantJoinThisGame")
      }(BB).then((ZB => {
        sB(BB, ZB, IB.message)
      })), !0;
      const {
        joinFailure: JB
      } = IB.debugResult, oB = "refused" === (null === JB || void 0 === JB ? void 0 : JB.at) ? JB.code : null;
      return oB === FB.c.schematicNotPublished.code ? (async function(BB, IB) {
        const ZB = (0, NB.l)(kB.gameBridge.latest("connectedGame").gameNameWithVariation),
          TB = await async function(BB) {
            try {
              const IB = await UB.c.getGame(await WB.userContextManager.getCurrentUserContext(), BB, !0);
              return IB.gamePublished ? null : IB.name
            } catch (IB) {
              return IB instanceof zB.d && 435 === IB.httpCode || console.error(`Failed to get unpublished game ${BB}`, IB), null
            }
          }(ZB);
        if (null === TB) return void sB(BB, BB("general:cantJoinThisGame"), IB);
        const JB = await nB.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: BB("studio:gameNotPublishedTitle", {
            game: TB
          }),
          confirmText: BB("studio:publishInStudio"),
          cancelText: BB("general:cancel")
        }).getResult();
        !0 === JB && (0, cB.navigatePreserveSearch)((0, CB.k)((0, gB.d)(ZB), "manage"))
      }(BB, IB.message), !0) : oB === FB.c.schematicBanned.code && (sB(BB, BB("general:cantJoinThisGame"), IB.message), !0)
    }

    function sB(BB, IB, ZB) {
      nB.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: IB,
        subtitle: ZB,
        confirmText: BB("general:ok"),
        cancelText: ""
      })
    }
    var wB = ZB(4768),
      OB = ZB(24),
      YB = ZB(1305),
      iB = ZB(1805),
      pB = ZB(105),
      aB = ZB(1370),
      HB = ZB(1500),
      MB = ZB(4706),
      jB = ZB(4537),
      PB = ZB(4497),
      RB = ZB(3409),
      rB = ZB(1385),
      mB = ZB(810),
      XB = ZB(1290),
      LB = ZB(3478),
      eB = ZB(3316),
      uB = ZB(1412),
      fB = ZB(1397),
      lB = ZB(5134),
      AB = ZB(9016),
      tB = ZB(3126),
      bB = ZB(1153);

    function xB(BB) {
      let {
        onApply: IB,
        onSkip: ZB
      } = BB;
      const {
        t: TB
      } = (0, hB.G)();
      return (0, GB.useEffect)((() => {
        tB.e.skipPlayWait()
      }), []), (0, bB.jsx)(uB.f, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, bB.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [TB("customTexturePack:downloadPrompt"), (0, bB.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: TB("customTexturePack:authorWarning")
          }), (0, bB.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: TB("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: IB
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ZB
        }
      })
    }
    async function EB() {
      let BB = !1;
      const IB = nB.NotificationProvider.showCustomPopup({
        body: IB => (0, bB.jsx)(xB, {
          onApply: () => {
            BB = !0, IB()
          },
          onSkip: IB
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await IB.getResult(), BB
    }
    let DB = {
      wanted: !1
    };
    let KB = null;

    function VB(BB) {
      BB.setGamePackConfirm(EB), KB = BB
    }
    var SB = ZB(3668);

    function BI(BB) {
      let {
        schematicId: IB,
        texturePackKey: ZB,
        onClose: TB
      } = BB;
      const [JB, oB] = (0, GB.useState)("prompt"), [vB, kB] = (0, GB.useState)(null), cB = (0, SB.d)();

      function nB() {
        TB()
      }
      return "prompt" === JB ? (0, bB.jsx)(xB, {
        onApply: async function() {
          oB("downloading");
          try {
            const BB = await async function(BB, IB) {
              const ZB = await (0, lB.c)(IB);
              if (ZB) return {
                pack: ZB,
                key: IB
              };
              const TB = await WB.userContextManager.getCurrentUserContext(),
                JB = (await UB.c.getGame(TB, BB, !0)).customTexturePackKey;
              if (!JB) return null;
              const oB = await (0, lB.c)(JB);
              if (!oB) throw new Error("The texture pack could not be found");
              return {
                pack: oB,
                key: JB
              }
            }(IB, ZB);
            if (!cB.current) return;
            if (!BB) return void TB();
            if ((0, LB.k)(BB.pack)) return void oB("refused");
            eB.e.setFromJson(BB.pack, "customGame"), await eB.e.saveTemporaryTexturePack(BB.key), cB.current && (0, iB.reloadBloxd)()
          } catch (BB) {
            kB(BB instanceof Error ? BB.message : String(BB)), oB("error")
          }
        },
        onSkip: nB
      }) : "downloading" === JB ? (0, bB.jsx)(uB.f, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, bB.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, bB.jsx)(fB.d, {
            showFace: !0
          })
        })
      }) : "error" === JB ? (0, bB.jsx)(uB.f, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: vB,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: nB
        }
      }) : "refused" === JB ? (0, bB.jsx)(uB.f, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: nB
        }
      }) : null
    }
    var II = ZB(9021),
      ZI = ZB(4487),
      TI = ZB(1837),
      JI = ZB(3101),
      oI = ZB(4491),
      GI = ZB(2220),
      vI = ZB(9025);
    var kI = ZB(4856),
      cI = ZB(1362),
      nI = ZB(1796),
      hI = ZB(684),
      zI = ZB(760),
      FI = ZB(1860);

    function NI() {
      const BB = JB.d.get("clientEscMenuOptions");
      kB.gameBridge.send("setLookSensitivity", JB.d.get("isTouchScreen") ? (0, zI.k)(BB) : BB.mouseSensitivity)
    }
    const gI = 45e3;

    function qI(BB) {
      const IB = BB.asError();
      if (IB.debugResult.fZ || (0, nI.d)(IB.debugResult.error)) return;
      console.log("Failed to join lobby:", IB.message);
      const ZB = "timedOut" === IB.debugResult.gameServerUnreachable;
      (0, JI.reportClientError)("matchmake_failed", IB.message, ZB ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : zB.l[IB.code]);
      const {
        error: TB
      } = IB.debugResult;
      if (TB instanceof RB.o && "default" !== TB.packSource) {
        const BB = (0, oI.f)("js", "game" === TB.packSource ? "game" : "page", (0, oI.h)(TB));
        (0, JI.reportClientError)("texture_pack", TB, BB)
      }
    }

    function yI(BB) {
      if (null === BB || void 0 === BB || !BB.isError()) return !1;
      const IB = BB.asError();
      return IB.code === zB.l.REQUEST_TO_MATCHMAKING && !(0, nI.d)(IB.debugResult.error)
    }
    async function UI(BB, IB, ZB) {
      const TB = (0, kI.K)(IB);
      async function GB(BB, IB, ZB, TB) {
        var GB;
        if (TB.aborted) return null;
        null === JB.d.get("gameEntrySource") && (0, JB.m)("directPlayUrl"), hI.B && (0, AB.d)().catch((() => {})), JB.d.set({
          gameState: "findingLobby"
        }), OB.l.Gq("loadingScreenState", "loadingPage:findingLobby");
        const vB = await WB.userContextManager.getCurrentUserContext();
        kB.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: IB,
          discordContext: BB instanceof XB.c ? BB.getSerialisableParams() : null
        }), (0, TI.f)(null !== (GB = tB.e.playInputAt()) && void 0 !== GB ? GB : performance.now());
        const cB = await async function(BB, IB, ZB, TB, JB) {
          try {
            await (0, FI.j)(oB.reqLibsLoadedPromise, gI, "Required libraries timed out")
          } catch (GB) {
            const BB = GB instanceof FI.d ? `Required libraries still loading after ${gI/1e3} s: ${(0,oB.requiredLibsPending)().join(", ")}` : GB.toString();
            return YB.b.errorWithCode(BB, zB.l.LOAD_REQUIRED_LIBS, {
              error: GB,
              severity: "medium"
            })
          }
          return OB.l.Gq("matchmakeAndPlayStepCompleted", {
            step: zB.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, oB.matchmakeAndPlayMaybeUnloaded)(BB, IB, ZB, TB, JB)
        }(BB, IB, ZB, vB, TB), nB = cB.isError() ? cB.asError() : null;
        if (TB.aborted) return nB && qI(cB), kB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== nB && void 0 !== nB && nB.debugResult.fZ) return console.log("Join cancelled:", nB.message), null;
        if (nB) return cB;
        const {
          gameNameWithVariation: hB,
          lobbyName: FB
        } = cB.getValue();
        return NI(), (0, cI.A)().setGameViewShown(!0), vB.recordJoin(hB, FB), (0, aB.J)(), cB
      }
      return TB && (0, JB.m)("updateRejoin"), (0, GI.l)((async JB => {
        try {
          var oB;
          let vB = BB,
            kB = await GB(vB, IB, ZB, JB);
          for (let BB = 0; TB && BB < kI.j && (yI(kB) && await (0, kI.M)((0, kI.u)(BB), JB)); BB++) vB = (0, kI.x)(vB, BB + 1, "string" === typeof vB && (0, qB.G)(vB)), kB = await GB(vB, IB, ZB, JB);
          return null !== (oB = kB) && void 0 !== oB && oB.isError() && qI(kB), kB
        } catch (vB) {
          if ((0, JI.reportClientError)("matchmake_failed", vB, "unexpected"), kB.gameBridge.send("leaveGame", {
              reloadPath: JB.aborted ? null : "/"
            }), JB.aborted) return null;
          throw vB
        }
      }), (async BB => {
        var ZB;
        if (TB) return;
        const JB = (0, aB.A)();
        null !== JB && (await JB, BB.aborted) || (null !== (ZB = mB.c[IB]) && void 0 !== ZB && ZB.playAdBeforeMatchmaking ? (tB.e.skipPlayWait(), await new Promise((BB => {
          (0, aB.$)((() => {
            BB(!0)
          }), "video_start")
        }))) : (0, aB.$)((() => {}), "video_start"))
      }))
    }

    function WI() {
      const {
        t: BB
      } = (0, hB.G)(), IB = (0, cB.useNavigatePreserveSearch)(), ZB = (0, TB.r)(), FB = (0, TB.B)(), gB = (0, GB.useRef)({
        t: BB,
        navigate: IB
      });
      gB.current = {
        t: BB,
        navigate: IB
      };
      const dB = (0, GB.useRef)("");
      dB.current = ZB.pathname + ZB.search;
      const {
        gameState: CB,
        clientEscMenuOptions: sB
      } = (0, JB.o)(["gameState", "clientEscMenuOptions"]), OB = (0, GB.useRef)(null), XB = (0, GB.useRef)(!1);
      var LB;
      (0, GI.o)(), (0, GI.r)(), LB = hI.B, (0, GB.useEffect)((() => {
        if (!LB) return;
        let BB = !0;
        return (0, AB.d)().then((IB => {
          BB && VB(IB)
        })).catch((() => {})), () => {
          var IB;
          BB = !1, DB.wanted = !1, null === (IB = KB) || void 0 === IB || IB.setGamePackConfirm(null), KB = null
        }
      }), [LB]), (0, GB.useEffect)((() => {
        var BB, IB, TB;
        (0, oB.needGameClientNow)();
        const {
          t: GB,
          navigate: vB
        } = gB.current, hB = (0, II.b)(FB, ZB.search);
        if (FB.lobbyName && !new URLSearchParams(ZB.search).has("lobby")) return void vB((0, rB.b)(hB.gameNameWithVariation, hB.lobbyName), {
          replace: !0
        });
        let CB = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ZB.pathname) {
          const BB = JB.d.get("discordContext");
          if (!BB) return void vB("/");
          CB = wB.d.setupDiscordLobby(BB, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: BB
          }))).catch((IB => (console.error("Failed to setup discord lobby", IB), {
            shouldMatchmake: !1,
            discordContext: BB
          })))
        } else if (!hB.gameNameWithVariation || !(0, qB.D)(hB.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${hB.gameNameWithVariation}`), void vB(-1);
        const sB = OB.current;
        if (null !== sB && hB.gameNameWithVariation === sB.gameNameWithVariation && hB.lobbyName === sB.lobbyName) return;
        if (kB.gameBridge.latest("connectedGame").replay) return void(0, GI.k)(null);
        if ("releaseCountdown" === (null === (BB = (0, yB.i)(hB.gameNameWithVariation)) || void 0 === BB ? void 0 : BB.type)) return console.error(`Game hasn't been released yet: ${hB.gameNameWithVariation}`), void vB(-1);
        const HB = XB.current;
        XB.current = !1, (0, aB.D)(), JB.d.set({
          gameState: "loadingScreen"
        });
        const LB = function() {
            DB.wanted = !1;
            const BB = {
              wanted: !0
            };
            return DB = BB, () => BB.wanted
          }(),
          uB = hB.gameNameWithVariation;
        if (uB && (hI.B || (0, NB.i)(uB))) {
          const BB = hI.B ? Promise.all([(0, AB.d)(), WB.userContextManager.getCurrentUserContext()]).then((BB => {
            let [IB, ZB] = BB;
            if (LB()) return VB(IB), IB.packForGame(uB, ZB, LB)
          })) : async function(BB) {
            await eB.e.indexedDbValuesAreLoaded();
            const IB = await WB.userContextManager.getCurrentUserContext(),
              ZB = (0, NB.l)(BB);
            let TB;
            try {
              TB = await UB.c.getGame(IB, ZB, !0)
            } catch (GB) {
              return void console.error("Failed to get game", GB)
            }
            const JB = TB.customTexturePackKey;
            if (!JB) return void(eB.e.isUsingTemporaryTexturePack() && ((0, iB.reloadBloxd)(), await new Promise((() => {}))));
            if (eB.e.isUsingTemporaryTexturePack() && eB.e.getTemporaryTexturePackSource() === JB) return;
            const oB = nB.NotificationProvider.showCustomPopup({
              body: BB => (0, bB.jsx)(BI, {
                schematicId: ZB,
                texturePackKey: JB,
                onClose: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await oB.getResult()
          }(uB), IB = CB;
          CB = BB.catch((BB => {
            console.error("Failed to check for custom texture pack", BB)
          })).then((() => IB))
        }
        const fB = {
          wasm: hI.B,
          game: hB.gameNameWithVariation,
          custom: void 0 !== uB && (0, NB.i)(uB),
          lobbyName: null !== (IB = hB.lobbyName) && void 0 !== IB ? IB : null,
          direct: null !== hB.directJoinVmUrl && void 0 !== hB.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === ZB.pathname,
          adBeforeMatchmaking: void 0 !== uB && !0 === (null === (TB = mB.c[uB]) || void 0 === TB ? void 0 : TB.playAdBeforeMatchmaking),
          afterAnother: null !== OB.current || (0, GI.c)()
        };
        (0, vI.j)(null);
        const lB = !(tB = fB).wasm || void 0 === tB.game || tB.custom || tB.direct || tB.discord || tB.adBeforeMatchmaking || tB.afterAnother ? null : () => {
          ! function(BB, IB) {
            (0, vI.j)({
              key: (0, vI.h)(BB, IB),
              settled: Promise.all([oB.matchmakingLibrariesPromise, WB.userContextManager.getCurrentUserContext()]).then((ZB => {
                let [TB, JB] = ZB;
                if (void 0 === TB.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return TB.matchmakeForAhead(BB, IB, JB)
              })).catch((BB => ({
                result: YB.b.errorWithCode(String(BB), zB.l.REQUEST_TO_MATCHMAKING, {
                  error: BB,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(fB.lobbyName, fB.game)
        };
        var tB;
        const xB = null !== OB.current;
        OB.current = null, (0, GI.k)(null);
        const EB = () => {
          HB ? (0, cB.navigateToHomePage)() : (XB.current = xB, vB(-1))
        };
        let KB = !1;
        const SB = ZB.pathname + ZB.search,
          TI = () => !KB && dB.current === SB;
        return (0, vI.d)(CB, lB, (BB => {
          let {
            shouldMatchmake: IB,
            discordContext: ZB
          } = BB;
          TI() && (IB ? UI(null !== ZB && void 0 !== ZB ? ZB : hB.lobbyName, ZB ? "classic" : hB.gameNameWithVariation, hB.directJoinVmUrl).then((BB => {
            if (null !== BB && TI())
              if (BB.isError()) {
                var IB;
                const ZB = BB.asError(),
                  TB = null !== (IB = ZB.debugResult.severity) && void 0 !== IB ? IB : "high";
                if ((0, nI.d)(ZB.debugResult.error)) return void nI.e.reload();
                if (ZB.code === zB.l.SHADER_PACK) return void(0, ZI.c)(ZB.message, vB);
                const oB = JB.d.get("gameEntrySource"),
                  cB = ZB.code === zB.l.INITIALISE_WEBGL ? (0, jB.d)() : null,
                  {
                    error: FB
                  } = ZB.debugResult;
                let NB;
                if (QB(GB, ZB)) NB = Promise.resolve(!1);
                else if (null !== cB) NB = (0, jB.i)(cB);
                else if (FB instanceof RB.o) NB = (0, PB.c)(FB);
                else {
                  let BB;
                  switch (TB) {
                    case "low":
                      BB = "face-diagonal-mouth";
                      break;
                    case "medium":
                      BB = "face-worried";
                      break;
                    case "high":
                      BB = "face-dizzy"
                  }
                  const IB = FB instanceof FI.d;
                  let JB = ZB.message;
                  IB ? JB = GB("general:gameFilesStalled") : ZB.debugResult.gameServerUnreachable && (JB = GB((0, pB.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  NB = nB.NotificationProvider.showPromptPopup({
                    icon: BB,
                    title: zB.y[ZB.code],
                    subtitle: (0, bB.jsxs)(bB.Fragment, {
                      children: [JB, FB instanceof Error && !IB && (0, bB.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, bB.jsx)(MB.d, {
                          errorString: FB.stack
                        })
                      })]
                    }),
                    confirmText: GB("general:tryAgain"),
                    cancelText: GB("general:cancel")
                  }).getResult().then((BB => !0 === BB))
                }
                NB.then((BB => {
                  if (BB) {
                    (0, JB.m)(oB);
                    const BB = (0, rB.b)(hB.gameNameWithVariation, hB.lobbyName);
                    "low" === TB ? vB(BB) : (0, iB.reloadBloxd)(BB)
                  }
                })), kB.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), EB()
              } else {
                const {
                  gameNameWithVariation: IB,
                  lobbyName: ZB
                } = BB.getValue();
                OB.current = {
                  gameNameWithVariation: IB,
                  lobbyName: ZB
                };
                const TB = (0, rB.b)(IB, ZB);
                vB(TB, {
                  replace: !0
                })
              }
          })).catch((BB => {
            if (!TI()) return;
            nB.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, bB.jsxs)(bB.Fragment, {
                children: [GB("homePage:pleaseCopyError"), (0, bB.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, bB.jsx)(MB.d, {
                    errorString: BB.stack
                  })
                })]
              }),
              confirmText: GB("general:tryAgain"),
              cancelText: GB("general:cancel")
            }).getResult().then((BB => {
              !0 === BB && (0, iB.reloadBloxd)((0, rB.b)(hB.gameNameWithVariation, hB.lobbyName))
            })), EB()
          })) : vB(-1))
        }), TI), () => {
          KB = !0
        }
      }), [FB, ZB.search, ZB.pathname]), (0, GB.useEffect)((() => {
        sB.disableFullscreen && (0, HB.c)() ? (0, HB.h)() : !sB.disableFullscreen && (0, HB.g)() && (0, HB.p)({
          automatic: !0
        })
      }), [CB, sB]), (0, GB.useEffect)((() => {
        "inGame" === CB && NI()
      }), [CB, sB]), (0, GB.useEffect)((() => {
        "inGame" !== CB && JB.d.set({
          openInGameMenuName: null
        })
      }), [CB]);
      const uB = function(BB) {
        const IB = (0, JB.j)(BB),
          [ZB, TB] = (0, GB.useState)(0),
          [oB, kB] = (0, GB.useState)(!1);
        (0, vB.d)("gameJoined", (() => {
          (0, JB.j)(JB.d.get("gameState")) && (TB((BB => BB + 1)), kB(!0))
        })), (0, GB.useEffect)((() => {
          IB || kB(!1)
        }), [IB]);
        const cB = "inGame" === BB;
        return {
          mounted: cB || IB && oB,
          shown: cB,
          key: ZB
        }
      }(CB);
      return (0, bB.jsx)(bB.Fragment, {
        children: uB.mounted && (0, bB.jsx)(oB.InGameUi, {
          shown: uB.shown
        }, uB.key)
      })
    }
  },
  5134: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(1258);
    async function JB(BB) {
      const IB = await fetch(`${TB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === IB.status || 403 === IB.status) return null;
      if (!IB.ok) throw new Error(`Failed to download the texture pack (${IB.status})`);
      return await IB.json()
    }
  },
  9021: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(1385),
      JB = ZB(1281),
      oB = ZB(665);

    function GB(BB) {
      return BB = function(BB, IB) {
        var ZB;
        const TB = new URLSearchParams(IB),
          JB = TB.get("lobby"),
          oB = TB.get("vm"),
          GB = null !== (ZB = JB) && void 0 !== ZB ? ZB : BB.lobbyName,
          vB = null !== oB && void 0 !== oB ? oB : BB.directJoinVmUrl;
        if (GB === BB.lobbyName && vB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: GB,
          directJoinVmUrl: vB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, oB.L)(BB.directJoinVmUrl)) return BB;
        const IB = (0, JB.U)(BB.directJoinVmUrl);
        null === IB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, oB.L)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, TB.i)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  9019: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      g: () => JB
    });
    let TB = !1;

    function JB() {
      TB = !0
    }

    function oB() {
      return TB
    }
  },
  9025: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => JB,
      j: () => oB,
      n: () => GB
    });
    let TB = null;

    function JB(BB, IB) {
      return `${IB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function oB(BB) {
      TB = BB
    }

    function GB(BB) {
      const IB = TB;
      return TB = null, null !== IB && IB.key === BB ? IB.settled : null
    }

    function vB(BB, IB, ZB, TB) {
      let JB = !1;
      null !== IB && setTimeout((() => {
        TB() && !JB && IB()
      }), 0), BB.then((BB => {
        JB = !0, ZB(BB)
      }))
    }
  },
  9016: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => FB,
      d: () => zB,
      e: () => NB
    });
    var TB = ZB(3316),
      JB = ZB(2392),
      oB = ZB(2224),
      GB = ZB(4821),
      vB = ZB(3676),
      kB = ZB(9019);
    let cB = null;

    function nB() {
      return Promise.all([ZB.e(75), ZB.e(78), ZB.e(90), ZB.e(215), ZB.e(214), ZB.e(160), ZB.e(137), ZB.e(198), ZB.e(140), ZB.e(88), ZB.e(275), ZB.e(64)]).then((() => ZB(40726)))
    }

    function hB() {
      Promise.all([ZB.e(73), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(90), ZB.e(87), ZB.e(273), ZB.e(191), ZB.e(228), ZB.e(252), ZB.e(275), ZB.e(47)]).then((() => ZB(41032))).catch((() => {}))
    }

    function zB() {
      return GB.c.cancelDownloadForJoin(), (0, vB.b)(), (0, JB.g)(), (0, kB.g)(), (0, oB.k)(), hB(), Promise.all([ZB.e(78), ZB.e(90), ZB.e(215), ZB.e(214), ZB.e(137), ZB.e(140), ZB.e(59)]).then((() => ZB(41074))).then((BB => {
        let {
          startJoinLoad: IB
        } = BB;
        IB()
      }), (() => {})), cB ??= nB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        TB.e.showGamePack(BB)
      })), BB)), (BB => {
        throw cB = null, BB
      })), cB
    }

    function FB() {
      return hB(), ZB.e(276).then((() => ZB(41082))).catch((() => {})), nB().then((() => {}))
    }

    function NB() {
      return nB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  9011: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      h: () => GB,
      i: () => vB,
      k: () => cB,
      l: () => kB
    });
    var TB = ZB(201),
      JB = ZB(4802);

    function oB(BB) {
      return GB(BB) === TB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function GB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function vB(BB) {
      var IB;
      return null !== (IB = Object.keys(JB.c).find((IB => JB.c[IB] === BB))) && void 0 !== IB ? IB : null
    }

    function kB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);