export const id = 112;
export const ids = [112];
export const modules = {
  8914: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => Lj
    });
    var QB = zB(1547),
      nB = zB(28),
      dB = zB(4746),
      IB = zB(62),
      NB = zB(1471);
    var uB = zB(1982),
      UB = zB(1543),
      aB = zB(1381),
      pB = zB(1240),
      rB = zB(174),
      sB = zB(214),
      JB = zB(1067),
      mB = zB(1073),
      yB = zB(1263),
      kB = zB(2449),
      GB = zB(1532),
      LB = zB(1173),
      gB = zB(8923),
      tB = zB(1562);

    function SB(BB, jB) {
      const zB = !0 === jB.debugResult.gameRefused,
        QB = zB || jB.code === rB.j.REQUEST_TO_MATCHMAKING ? (0, gB.h)(jB.message) : null;
      if (null !== QB) return MB(BB, BB((0, gB.p)(QB)), BB(gB.l[QB])), !0;
      if (zB) return async function(BB) {
        const {
          gameNameWithVariation: jB,
          lobbyName: zB,
          shownLobbyName: QB
        } = uB.gameBridge.latest("connectedGame"), nB = "classic" === jB && (0, yB.B)(zB) ? QB : await (0, kB.c)(BB, jB, zB);
        return "" !== nB ? BB("general:cantJoinGame", {
          game: nB
        }) : BB("general:cantJoinThisGame")
      }(BB).then((zB => {
        MB(BB, zB, jB.message)
      })), !0;
      const {
        joinFailure: nB
      } = jB.debugResult, dB = "refused" === (null === nB || void 0 === nB ? void 0 : nB.at) ? nB.code : null;
      return dB === sB.c.schematicNotPublished.code ? (async function(BB, jB) {
        const zB = (0, JB.q)(uB.gameBridge.latest("connectedGame").gameNameWithVariation),
          QB = await async function(BB) {
            try {
              const jB = await GB.b.getGame(await LB.userContextManager.getCurrentUserContext(), BB, !0);
              return jB.gamePublished ? null : jB.name
            } catch (jB) {
              return jB instanceof rB.c && 435 === jB.httpCode || console.error(`Failed to get unpublished game ${BB}`, jB), null
            }
          }(zB);
        if (null === QB) return void MB(BB, BB("general:cantJoinThisGame"), jB);
        const nB = await aB.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: BB("studio:gameNotPublishedTitle", {
            game: QB
          }),
          confirmText: BB("studio:publishInStudio"),
          cancelText: BB("general:cancel")
        }).getResult();
        !0 === nB && (0, UB.navigatePreserveSearch)((0, tB.s)((0, mB.e)(zB), "manage"))
      }(BB, jB.message), !0) : dB === sB.c.schematicBanned.code && (MB(BB, BB("general:cantJoinThisGame"), jB.message), !0)
    }

    function MB(BB, jB, zB) {
      aB.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: jB,
        subtitle: zB,
        confirmText: BB("general:ok"),
        cancelText: ""
      })
    }
    var EB = zB(4696),
      iB = zB(31),
      qB = zB(1277),
      fB = zB(1778),
      oB = zB(106),
      HB = zB(1343),
      DB = zB(1456),
      FB = zB(4647),
      YB = zB(4466),
      VB = zB(4414),
      hB = zB(3340),
      XB = zB(1359),
      ZB = zB(814),
      AB = zB(1265),
      TB = zB(3411),
      PB = zB(3270),
      WB = zB(1385),
      eB = zB(1369),
      lB = zB(5066),
      wB = zB(8930),
      xB = zB(3064),
      KB = zB(1148);

    function CB(BB) {
      let {
        onApply: jB,
        onSkip: zB
      } = BB;
      const {
        t: QB
      } = (0, pB.D)();
      return (0, IB.useEffect)((() => {
        xB.g.skipPlayWait()
      }), []), (0, KB.jsx)(WB.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, KB.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [QB("customTexturePack:downloadPrompt"), (0, KB.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: QB("customTexturePack:authorWarning")
          }), (0, KB.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: QB("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: jB
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: zB
        }
      })
    }
    async function cB() {
      let BB = !1;
      const jB = aB.NotificationProvider.showCustomPopup({
        body: jB => (0, KB.jsx)(CB, {
          onApply: () => {
            BB = !0, jB()
          },
          onSkip: jB
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await jB.getResult(), BB
    }
    let bB = {
      wanted: !1
    };
    let vB = null;

    function RB(BB) {
      BB.setGamePackConfirm(cB), vB = BB
    }
    var OB = zB(3593);

    function Bj(BB) {
      let {
        schematicId: jB,
        texturePackKey: zB,
        onClose: QB
      } = BB;
      const [nB, dB] = (0, IB.useState)("prompt"), [NB, uB] = (0, IB.useState)(null), UB = (0, OB.d)();

      function aB() {
        QB()
      }
      return "prompt" === nB ? (0, KB.jsx)(CB, {
        onApply: async function() {
          dB("downloading");
          try {
            const BB = await async function(BB, jB) {
              const zB = await (0, lB.e)(jB);
              if (zB) return {
                pack: zB,
                key: jB
              };
              const QB = await LB.userContextManager.getCurrentUserContext(),
                nB = (await GB.b.getGame(QB, BB, !0)).customTexturePackKey;
              if (!nB) return null;
              const dB = await (0, lB.e)(nB);
              if (!dB) throw new Error("The texture pack could not be found");
              return {
                pack: dB,
                key: nB
              }
            }(jB, zB);
            if (!UB.current) return;
            if (!BB) return void QB();
            if ((0, TB.o)(BB.pack)) return void dB("refused");
            PB.e.setFromJson(BB.pack, "customGame"), await PB.e.saveTemporaryTexturePack(BB.key), UB.current && (0, fB.reloadBloxd)()
          } catch (BB) {
            uB(BB instanceof Error ? BB.message : String(BB)), dB("error")
          }
        },
        onSkip: aB
      }) : "downloading" === nB ? (0, KB.jsx)(WB.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, KB.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, KB.jsx)(eB.e, {
            showFace: !0
          })
        })
      }) : "error" === nB ? (0, KB.jsx)(WB.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: NB,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: aB
        }
      }) : "refused" === nB ? (0, KB.jsx)(WB.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: aB
        }
      }) : null
    }
    var jj = zB(8946),
      zj = zB(4404),
      Qj = zB(1817),
      nj = zB(3036),
      dj = zB(4410),
      Ij = zB(2196),
      Nj = zB(8953);
    var uj = zB(4766),
      Uj = zB(1325),
      aj = zB(1770),
      pj = zB(690),
      rj = zB(777),
      sj = zB(1842);

    function Jj() {
      const BB = nB.c.get("clientEscMenuOptions");
      uB.gameBridge.send("setLookSensitivity", nB.c.get("isTouchScreen") ? (0, rj.m)(BB) : BB.mouseSensitivity)
    }
    const mj = 45e3;

    function yj(BB) {
      const jB = BB.asError();
      if (jB.debugResult.xz || (0, aj.e)(jB.debugResult.error)) return;
      console.log("Failed to join lobby:", jB.message);
      const zB = "timedOut" === jB.debugResult.gameServerUnreachable;
      (0, nj.reportClientError)("matchmake_failed", jB.message, zB ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : rB.j[jB.code]);
      const {
        error: QB
      } = jB.debugResult;
      if (QB instanceof hB.m && "default" !== QB.packSource) {
        const BB = (0, dj.c)("js", "game" === QB.packSource ? "game" : "page", (0, dj.e)(QB));
        (0, nj.reportClientError)("texture_pack", QB, BB)
      }
    }

    function kj(BB) {
      if (null === BB || void 0 === BB || !BB.isError()) return !1;
      const jB = BB.asError();
      return jB.code === rB.j.REQUEST_TO_MATCHMAKING && !(0, aj.e)(jB.debugResult.error)
    }
    async function Gj(BB, jB, zB) {
      const QB = (0, uj.I)(jB);
      async function IB(BB, jB, zB, QB) {
        var IB;
        if (QB.aborted) return null;
        null === nB.c.get("gameEntrySource") && (0, nB.i)("directPlayUrl"), pj.E && (0, wB.e)().catch((() => {})), nB.c.set({
          gameState: "findingLobby"
        }), iB.n.Ly("loadingScreenState", "loadingPage:findingLobby");
        const NB = await LB.userContextManager.getCurrentUserContext();
        uB.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: jB,
          discordContext: BB instanceof AB.g ? BB.getSerialisableParams() : null
        }), (0, Qj.e)(null !== (IB = xB.g.playInputAt()) && void 0 !== IB ? IB : performance.now());
        const UB = await async function(BB, jB, zB, QB, nB) {
          try {
            await (0, sj.j)(dB.reqLibsLoadedPromise, mj, "Required libraries timed out")
          } catch (IB) {
            const BB = IB instanceof sj.g ? `Required libraries still loading after ${mj/1e3} s: ${(0,dB.requiredLibsPending)().join(", ")}` : IB.toString();
            return qB.d.errorWithCode(BB, rB.j.LOAD_REQUIRED_LIBS, {
              error: IB,
              severity: "medium"
            })
          }
          return iB.n.Ly("matchmakeAndPlayStepCompleted", {
            step: rB.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, dB.matchmakeAndPlayMaybeUnloaded)(BB, jB, zB, QB, nB)
        }(BB, jB, zB, NB, QB), aB = UB.isError() ? UB.asError() : null;
        if (QB.aborted) return aB && yj(UB), uB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== aB && void 0 !== aB && aB.debugResult.xz) return console.log("Join cancelled:", aB.message), null;
        if (aB) return UB;
        const {
          gameNameWithVariation: pB,
          lobbyName: sB
        } = UB.getValue();
        return Jj(), (0, Uj.F)().setGameViewShown(!0), NB.recordJoin(pB, sB), (0, HB.E)(), UB
      }
      return QB && (0, nB.i)("updateRejoin"), (0, Ij.i)((async nB => {
        try {
          var dB;
          let NB = BB,
            uB = await IB(NB, jB, zB, nB);
          for (let BB = 0; QB && BB < uj.i && (kj(uB) && await (0, uj.K)((0, uj.s)(BB), nB)); BB++) NB = (0, uj.v)(NB, BB + 1, "string" === typeof NB && (0, yB.E)(NB)), uB = await IB(NB, jB, zB, nB);
          return null !== (dB = uB) && void 0 !== dB && dB.isError() && yj(uB), uB
        } catch (NB) {
          if ((0, nj.reportClientError)("matchmake_failed", NB, "unexpected"), uB.gameBridge.send("leaveGame", {
              reloadPath: nB.aborted ? null : "/"
            }), nB.aborted) return null;
          throw NB
        }
      }), (async BB => {
        var zB;
        if (QB) return;
        const nB = (0, HB.A)();
        null !== nB && (await nB, BB.aborted) || (null !== (zB = ZB.c[jB]) && void 0 !== zB && zB.playAdBeforeMatchmaking ? (xB.g.skipPlayWait(), await new Promise((BB => {
          (0, HB.W)((() => {
            BB(!0)
          }), "video_start")
        }))) : (0, HB.W)((() => {}), "video_start"))
      }))
    }

    function Lj() {
      const {
        t: BB
      } = (0, pB.D)(), jB = (0, UB.useNavigatePreserveSearch)(), zB = (0, QB.n)(), sB = (0, QB.w)(), mB = (0, IB.useRef)({
        t: BB,
        navigate: jB
      });
      mB.current = {
        t: BB,
        navigate: jB
      };
      const gB = (0, IB.useRef)("");
      gB.current = zB.pathname + zB.search;
      const {
        gameState: tB,
        clientEscMenuOptions: MB
      } = (0, nB.m)(["gameState", "clientEscMenuOptions"]), iB = (0, IB.useRef)(null), AB = (0, IB.useRef)(!1);
      var TB;
      (0, Ij.l)(), (0, Ij.m)(), TB = pj.E, (0, IB.useEffect)((() => {
        if (!TB) return;
        let BB = !0;
        return (0, wB.e)().then((jB => {
          BB && RB(jB)
        })).catch((() => {})), () => {
          var jB;
          BB = !1, bB.wanted = !1, null === (jB = vB) || void 0 === jB || jB.setGamePackConfirm(null), vB = null
        }
      }), [TB]), (0, IB.useEffect)((() => {
        var BB, jB, QB;
        (0, dB.needGameClientNow)();
        const {
          t: IB,
          navigate: NB
        } = mB.current, pB = (0, jj.b)(sB, zB.search);
        if (sB.lobbyName && !new URLSearchParams(zB.search).has("lobby")) return void NB((0, XB.e)(pB.gameNameWithVariation, pB.lobbyName), {
          replace: !0
        });
        let tB = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === zB.pathname) {
          const BB = nB.c.get("discordContext");
          if (!BB) return void NB("/");
          tB = EB.b.setupDiscordLobby(BB, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: BB
          }))).catch((jB => (console.error("Failed to setup discord lobby", jB), {
            shouldMatchmake: !1,
            discordContext: BB
          })))
        } else if (!pB.gameNameWithVariation || !(0, yB.C)(pB.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${pB.gameNameWithVariation}`), void NB(-1);
        const MB = iB.current;
        if (null !== MB && pB.gameNameWithVariation === MB.gameNameWithVariation && pB.lobbyName === MB.lobbyName) return;
        if (uB.gameBridge.latest("connectedGame").replay) return void(0, Ij.g)(null);
        if ("releaseCountdown" === (null === (BB = (0, kB.d)(pB.gameNameWithVariation)) || void 0 === BB ? void 0 : BB.type)) return console.error(`Game hasn't been released yet: ${pB.gameNameWithVariation}`), void NB(-1);
        const DB = AB.current;
        AB.current = !1, (0, HB.B)(), nB.c.set({
          gameState: "loadingScreen"
        });
        const TB = function() {
            bB.wanted = !1;
            const BB = {
              wanted: !0
            };
            return bB = BB, () => BB.wanted
          }(),
          WB = pB.gameNameWithVariation;
        if (WB && (pj.E || (0, JB.n)(WB))) {
          const BB = pj.E ? Promise.all([(0, wB.e)(), LB.userContextManager.getCurrentUserContext()]).then((BB => {
            let [jB, zB] = BB;
            if (TB()) return RB(jB), jB.packForGame(WB, zB, TB)
          })) : async function(BB) {
            await PB.e.indexedDbValuesAreLoaded();
            const jB = await LB.userContextManager.getCurrentUserContext(),
              zB = (0, JB.q)(BB);
            let QB;
            try {
              QB = await GB.b.getGame(jB, zB, !0)
            } catch (IB) {
              return void console.error("Failed to get game", IB)
            }
            const nB = QB.customTexturePackKey;
            if (!nB) return void(PB.e.isUsingTemporaryTexturePack() && ((0, fB.reloadBloxd)(), await new Promise((() => {}))));
            if (PB.e.isUsingTemporaryTexturePack() && PB.e.getTemporaryTexturePackSource() === nB) return;
            const dB = aB.NotificationProvider.showCustomPopup({
              body: BB => (0, KB.jsx)(Bj, {
                schematicId: zB,
                texturePackKey: nB,
                onClose: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await dB.getResult()
          }(WB), jB = tB;
          tB = BB.catch((BB => {
            console.error("Failed to check for custom texture pack", BB)
          })).then((() => jB))
        }
        const eB = {
          wasm: pj.E,
          game: pB.gameNameWithVariation,
          custom: void 0 !== WB && (0, JB.n)(WB),
          lobbyName: null !== (jB = pB.lobbyName) && void 0 !== jB ? jB : null,
          direct: null !== pB.directJoinVmUrl && void 0 !== pB.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === zB.pathname,
          adBeforeMatchmaking: void 0 !== WB && !0 === (null === (QB = ZB.c[WB]) || void 0 === QB ? void 0 : QB.playAdBeforeMatchmaking),
          afterAnother: null !== iB.current || (0, Ij.b)()
        };
        (0, Nj.i)(null);
        const lB = !(xB = eB).wasm || void 0 === xB.game || xB.custom || xB.direct || xB.discord || xB.adBeforeMatchmaking || xB.afterAnother ? null : () => {
          ! function(BB, jB) {
            (0, Nj.i)({
              key: (0, Nj.f)(BB, jB),
              settled: Promise.all([dB.matchmakingLibrariesPromise, LB.userContextManager.getCurrentUserContext()]).then((zB => {
                let [QB, nB] = zB;
                if (void 0 === QB.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return QB.matchmakeForAhead(BB, jB, nB)
              })).catch((BB => ({
                result: qB.d.errorWithCode(String(BB), rB.j.REQUEST_TO_MATCHMAKING, {
                  error: BB,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(eB.lobbyName, eB.game)
        };
        var xB;
        const CB = null !== iB.current;
        iB.current = null, (0, Ij.g)(null);
        const cB = () => {
          DB ? (0, UB.navigateToHomePage)() : (AB.current = CB, NB(-1))
        };
        let vB = !1;
        const OB = zB.pathname + zB.search,
          Qj = () => !vB && gB.current === OB;
        return (0, Nj.d)(tB, lB, (BB => {
          let {
            shouldMatchmake: jB,
            discordContext: zB
          } = BB;
          Qj() && (jB ? Gj(null !== zB && void 0 !== zB ? zB : pB.lobbyName, zB ? "classic" : pB.gameNameWithVariation, pB.directJoinVmUrl).then((BB => {
            if (null !== BB && Qj())
              if (BB.isError()) {
                var jB;
                const zB = BB.asError(),
                  QB = null !== (jB = zB.debugResult.severity) && void 0 !== jB ? jB : "high";
                if ((0, aj.e)(zB.debugResult.error)) return void aj.g.reload();
                if (zB.code === rB.j.SHADER_PACK) return void(0, zj.d)(zB.message, NB);
                const dB = nB.c.get("gameEntrySource"),
                  UB = zB.code === rB.j.INITIALISE_WEBGL ? (0, YB.e)() : null,
                  {
                    error: sB
                  } = zB.debugResult;
                let JB;
                if (SB(IB, zB)) JB = Promise.resolve(!1);
                else if (null !== UB) JB = (0, YB.i)(UB);
                else if (sB instanceof hB.m) JB = (0, VB.d)(sB);
                else {
                  let BB;
                  switch (QB) {
                    case "low":
                      BB = "face-diagonal-mouth";
                      break;
                    case "medium":
                      BB = "face-worried";
                      break;
                    case "high":
                      BB = "face-dizzy"
                  }
                  const jB = sB instanceof sj.g;
                  let nB = zB.message;
                  jB ? nB = IB("general:gameFilesStalled") : zB.debugResult.gameServerUnreachable && (nB = IB((0, oB.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  JB = aB.NotificationProvider.showPromptPopup({
                    icon: BB,
                    title: rB.y[zB.code],
                    subtitle: (0, KB.jsxs)(KB.Fragment, {
                      children: [nB, sB instanceof Error && !jB && (0, KB.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, KB.jsx)(FB.d, {
                          errorString: sB.stack
                        })
                      })]
                    }),
                    confirmText: IB("general:tryAgain"),
                    cancelText: IB("general:cancel")
                  }).getResult().then((BB => !0 === BB))
                }
                JB.then((BB => {
                  if (BB) {
                    (0, nB.i)(dB);
                    const BB = (0, XB.e)(pB.gameNameWithVariation, pB.lobbyName);
                    "low" === QB ? NB(BB) : (0, fB.reloadBloxd)(BB)
                  }
                })), uB.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), cB()
              } else {
                const {
                  gameNameWithVariation: jB,
                  lobbyName: zB
                } = BB.getValue();
                iB.current = {
                  gameNameWithVariation: jB,
                  lobbyName: zB
                };
                const QB = (0, XB.e)(jB, zB);
                NB(QB, {
                  replace: !0
                })
              }
          })).catch((BB => {
            if (!Qj()) return;
            aB.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, KB.jsxs)(KB.Fragment, {
                children: [IB("homePage:pleaseCopyError"), (0, KB.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, KB.jsx)(FB.d, {
                    errorString: BB.stack
                  })
                })]
              }),
              confirmText: IB("general:tryAgain"),
              cancelText: IB("general:cancel")
            }).getResult().then((BB => {
              !0 === BB && (0, fB.reloadBloxd)((0, XB.e)(pB.gameNameWithVariation, pB.lobbyName))
            })), cB()
          })) : NB(-1))
        }), Qj), () => {
          vB = !0
        }
      }), [sB, zB.search, zB.pathname]), (0, IB.useEffect)((() => {
        MB.disableFullscreen && (0, DB.d)() ? (0, DB.j)() : !MB.disableFullscreen && (0, DB.h)() && (0, DB.n)({
          automatic: !0
        })
      }), [tB, MB]), (0, IB.useEffect)((() => {
        "inGame" === tB && Jj()
      }), [tB, MB]), (0, IB.useEffect)((() => {
        "inGame" !== tB && nB.c.set({
          openInGameMenuName: null
        })
      }), [tB]);
      const WB = function(BB) {
        const jB = (0, nB.h)(BB),
          [zB, QB] = (0, IB.useState)(0),
          [dB, uB] = (0, IB.useState)(!1);
        (0, NB.f)("gameJoined", (() => {
          (0, nB.h)(nB.c.get("gameState")) && (QB((BB => BB + 1)), uB(!0))
        })), (0, IB.useEffect)((() => {
          jB || uB(!1)
        }), [jB]);
        const UB = "inGame" === BB;
        return {
          mounted: UB || jB && dB,
          shown: UB,
          key: zB
        }
      }(tB);
      return (0, KB.jsx)(KB.Fragment, {
        children: WB.mounted && (0, KB.jsx)(dB.InGameUi, {
          shown: WB.shown
        }, WB.key)
      })
    }
  },
  5066: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(1244);
    async function nB(BB) {
      const jB = await fetch(`${QB.clientSideServerUrls.s3Url}/${BB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === jB.status || 403 === jB.status) return null;
      if (!jB.ok) throw new Error(`Failed to download the texture pack (${jB.status})`);
      return await jB.json()
    }
  },
  8946: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(1359),
      nB = zB(1263),
      dB = zB(658);

    function IB(BB) {
      return BB = function(BB, jB) {
        var zB;
        const QB = new URLSearchParams(jB),
          nB = QB.get("lobby"),
          dB = QB.get("vm"),
          IB = null !== (zB = nB) && void 0 !== zB ? zB : BB.lobbyName,
          NB = null !== dB && void 0 !== dB ? dB : BB.directJoinVmUrl;
        if (IB === BB.lobbyName && NB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: IB,
          directJoinVmUrl: NB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, dB.I)(BB.directJoinVmUrl)) return BB;
        const jB = (0, nB.O)(BB.directJoinVmUrl);
        null === jB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, dB.I)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, QB.o)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  8937: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => nB
    });
    let QB = !1;

    function nB() {
      QB = !0
    }

    function dB() {
      return QB
    }
  },
  8953: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      f: () => nB,
      i: () => dB,
      m: () => IB
    });
    let QB = null;

    function nB(BB, jB) {
      return `${jB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function dB(BB) {
      QB = BB
    }

    function IB(BB) {
      const jB = QB;
      return QB = null, null !== jB && jB.key === BB ? jB.settled : null
    }

    function NB(BB, jB, zB, QB) {
      let nB = !1;
      null !== jB && setTimeout((() => {
        QB() && !nB && jB()
      }), 0), BB.then((BB => {
        nB = !0, zB(BB)
      }))
    }
  },
  8930: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sB,
      e: () => rB,
      i: () => JB
    });
    var QB = zB(3270),
      nB = zB(2354),
      dB = zB(2201),
      IB = zB(4736),
      NB = zB(3606),
      uB = zB(8937);
    let UB = null;

    function aB() {
      return Promise.all([zB.e(75), zB.e(78), zB.e(90), zB.e(215), zB.e(214), zB.e(160), zB.e(137), zB.e(198), zB.e(140), zB.e(88), zB.e(275), zB.e(64)]).then((() => zB(40763)))
    }

    function pB() {
      Promise.all([zB.e(73), zB.e(76), zB.e(75), zB.e(74), zB.e(90), zB.e(87), zB.e(273), zB.e(191), zB.e(228), zB.e(252), zB.e(275), zB.e(47)]).then((() => zB(41085))).catch((() => {}))
    }

    function rB() {
      return IB.b.cancelDownloadForJoin(), (0, NB.e)(), (0, nB.e)(), (0, uB.f)(), (0, dB.g)(), pB(), Promise.all([zB.e(78), zB.e(90), zB.e(215), zB.e(214), zB.e(137), zB.e(140), zB.e(59)]).then((() => zB(41142))).then((BB => {
        let {
          startJoinLoad: jB
        } = BB;
        jB()
      }), (() => {})), UB ??= aB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        QB.e.showGamePack(BB)
      })), BB)), (BB => {
        throw UB = null, BB
      })), UB
    }

    function sB() {
      return pB(), zB.e(276).then((() => zB(41150))).catch((() => {})), aB().then((() => {}))
    }

    function JB() {
      return aB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  8923: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => IB,
      h: () => NB,
      l: () => UB,
      p: () => uB
    });
    var QB = zB(214),
      nB = zB(4729);

    function dB(BB) {
      return IB(BB) === QB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function IB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function NB(BB) {
      var jB;
      return null !== (jB = Object.keys(nB.b).find((jB => nB.b[jB] === BB))) && void 0 !== jB ? jB : null
    }

    function uB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const UB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);