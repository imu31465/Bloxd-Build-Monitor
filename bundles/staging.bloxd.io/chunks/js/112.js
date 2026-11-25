export const id = 112;
export const ids = [112];
export const modules = {
  8955: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => zb
    });
    var wG = ZG(1457),
      SG = ZG(17),
      LG = ZG(4678),
      yG = ZG(51),
      kG = ZG(1389);
    var UG = ZG(1895),
      YG = ZG(1444),
      VG = ZG(1311),
      pG = ZG(1151),
      fG = ZG(140),
      QG = ZG(188),
      KG = ZG(982),
      hG = ZG(988),
      dG = ZG(1177),
      JG = ZG(2351),
      rG = ZG(1431),
      zG = ZG(1096),
      EG = ZG(8957),
      oG = ZG(1481);

    function XG(GG, bG) {
      const ZG = !0 === bG.debugResult.gameRefused,
        wG = ZG || bG.code === fG.h.REQUEST_TO_MATCHMAKING ? (0, EG.j)(bG.message) : null;
      if (null !== wG) return uG(GG, GG((0, EG.q)(wG)), GG(EG.n[wG])), !0;
      if (ZG) return async function(GG) {
        const {
          gameNameWithVariation: bG,
          lobbyName: ZG,
          shownLobbyName: wG
        } = UG.gameBridge.latest("connectedGame"), SG = "classic" === bG && (0, dG.F)(ZG) ? wG : await (0, JG.h)(GG, bG, ZG);
        return "" !== SG ? GG("general:cantJoinGame", {
          game: SG
        }) : GG("general:cantJoinThisGame")
      }(GG).then((ZG => {
        uG(GG, ZG, bG.message)
      })), !0;
      const {
        joinFailure: SG
      } = bG.debugResult, LG = "refused" === (null === SG || void 0 === SG ? void 0 : SG.at) ? SG.code : null;
      return LG === QG.b.schematicNotPublished.code ? (async function(GG, bG) {
        const ZG = (0, KG.j)(UG.gameBridge.latest("connectedGame").gameNameWithVariation),
          wG = await async function(GG) {
            try {
              const bG = await rG.d.getGame(await zG.userContextManager.getCurrentUserContext(), GG, !0);
              return bG.gamePublished ? null : bG.name
            } catch (bG) {
              return bG instanceof fG.b && 435 === bG.httpCode || console.error(`Failed to get unpublished game ${GG}`, bG), null
            }
          }(ZG);
        if (null === wG) return void uG(GG, GG("general:cantJoinThisGame"), bG);
        const SG = await VG.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: GG("studio:gameNotPublishedTitle", {
            game: wG
          }),
          confirmText: GG("studio:publishInStudio"),
          cancelText: GG("general:cancel")
        }).getResult();
        !0 === SG && (0, YG.navigatePreserveSearch)((0, oG.p)((0, hG.b)(ZG), "manage"))
      }(GG, bG.message), !0) : LG === QG.b.schematicBanned.code && (uG(GG, GG("general:cantJoinThisGame"), bG.message), !0)
    }

    function uG(GG, bG, ZG) {
      VG.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: bG,
        subtitle: ZG,
        confirmText: GG("general:ok"),
        cancelText: ""
      })
    }
    var iG = ZG(4611),
      CG = ZG(19),
      WG = ZG(1202),
      mG = ZG(1702),
      IG = ZG(80),
      FG = ZG(1275),
      vG = ZG(1385),
      aG = ZG(4541),
      cG = ZG(4380),
      lG = ZG(4327),
      jG = ZG(3216),
      PG = ZG(1290),
      MG = ZG(751),
      AG = ZG(1185),
      sG = ZG(3278),
      qG = ZG(3135),
      nG = ZG(1315),
      gG = ZG(1302),
      eG = ZG(5008),
      RG = ZG(8960),
      TG = ZG(2952),
      HG = ZG(1067);

    function tG(GG) {
      let {
        onApply: bG,
        onSkip: ZG
      } = GG;
      const {
        t: wG
      } = (0, pG.w)();
      return (0, yG.useEffect)((() => {
        TG.f.skipPlayWait()
      }), []), (0, HG.jsx)(nG.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, HG.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [wG("customTexturePack:downloadPrompt"), (0, HG.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: wG("customTexturePack:authorWarning")
          }), (0, HG.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: wG("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: bG
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ZG
        }
      })
    }
    async function DG() {
      let GG = !1;
      const bG = VG.NotificationProvider.showCustomPopup({
        body: bG => (0, HG.jsx)(tG, {
          onApply: () => {
            GG = !0, bG()
          },
          onSkip: bG
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await bG.getResult(), GG
    }
    let NG = {
      wanted: !1
    };
    let OG = null;

    function xG(GG) {
      GG.setGamePackConfirm(DG), OG = GG
    }
    var BG = ZG(3465);

    function Gb(GG) {
      let {
        schematicId: bG,
        texturePackKey: ZG,
        onClose: wG
      } = GG;
      const [SG, LG] = (0, yG.useState)("prompt"), [kG, UG] = (0, yG.useState)(null), YG = (0, BG.c)();

      function VG() {
        wG()
      }
      return "prompt" === SG ? (0, HG.jsx)(tG, {
        onApply: async function() {
          LG("downloading");
          try {
            const GG = await async function(GG, bG) {
              const ZG = await (0, eG.e)(bG);
              if (ZG) return {
                pack: ZG,
                key: bG
              };
              const wG = await zG.userContextManager.getCurrentUserContext(),
                SG = (await rG.d.getGame(wG, GG, !0)).customTexturePackKey;
              if (!SG) return null;
              const LG = await (0, eG.e)(SG);
              if (!LG) throw new Error("The texture pack could not be found");
              return {
                pack: LG,
                key: SG
              }
            }(bG, ZG);
            if (!YG.current) return;
            if (!GG) return void wG();
            if ((0, sG.i)(GG.pack)) return void LG("refused");
            qG.e.setFromJson(GG.pack, "customGame"), await qG.e.saveTemporaryTexturePack(GG.key), YG.current && (0, mG.reloadBloxd)()
          } catch (GG) {
            UG(GG instanceof Error ? GG.message : String(GG)), LG("error")
          }
        },
        onSkip: VG
      }) : "downloading" === SG ? (0, HG.jsx)(nG.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, HG.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, HG.jsx)(gG.b, {
            showFace: !0
          })
        })
      }) : "error" === SG ? (0, HG.jsx)(nG.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: kG,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: VG
        }
      }) : "refused" === SG ? (0, HG.jsx)(nG.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: VG
        }
      }) : null
    }
    var bb = ZG(8975),
      Zb = ZG(4313),
      wb = ZG(1749),
      Sb = ZG(2920),
      Lb = ZG(4318),
      yb = ZG(2126),
      kb = ZG(8981);
    var Ub = ZG(4695),
      Yb = ZG(1260),
      Vb = ZG(1694),
      pb = ZG(631),
      fb = ZG(717),
      Qb = ZG(1775);

    function Kb() {
      const GG = SG.e.get("clientEscMenuOptions");
      UG.gameBridge.send("setLookSensitivity", SG.e.get("isTouchScreen") ? (0, fb.m)(GG) : GG.mouseSensitivity)
    }
    const hb = 45e3;

    function db(GG) {
      const bG = GG.asError();
      if (bG.debugResult.RZ || (0, Vb.d)(bG.debugResult.error)) return;
      console.log("Failed to join lobby:", bG.message);
      const ZG = "timedOut" === bG.debugResult.gameServerUnreachable;
      (0, Sb.reportClientError)("matchmake_failed", bG.message, ZG ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : fG.h[bG.code]);
      const {
        error: wG
      } = bG.debugResult;
      if (wG instanceof jG.h && "default" !== wG.packSource) {
        const GG = (0, Lb.f)("js", "game" === wG.packSource ? "game" : "page", (0, Lb.h)(wG));
        (0, Sb.reportClientError)("texture_pack", wG, GG)
      }
    }

    function Jb(GG) {
      if (null === GG || void 0 === GG || !GG.isError()) return !1;
      const bG = GG.asError();
      return bG.code === fG.h.REQUEST_TO_MATCHMAKING && !(0, Vb.d)(bG.debugResult.error)
    }
    async function rb(GG, bG, ZG) {
      const wG = (0, Ub.G)(bG);
      async function yG(GG, bG, ZG, wG) {
        var yG;
        if (wG.aborted) return null;
        null === SG.e.get("gameEntrySource") && (0, SG.n)("directPlayUrl"), pb.B && (0, RG.e)().catch((() => {})), SG.e.set({
          gameState: "findingLobby"
        }), CG.l.xh("loadingScreenState", "loadingPage:findingLobby");
        const kG = await zG.userContextManager.getCurrentUserContext();
        UG.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: bG,
          discordContext: GG instanceof AG.e ? GG.getSerialisableParams() : null
        }), (0, wb.d)(null !== (yG = TG.f.playInputAt()) && void 0 !== yG ? yG : performance.now());
        const YG = await async function(GG, bG, ZG, wG, SG) {
          try {
            await (0, Qb.n)(LG.reqLibsLoadedPromise, hb, "Required libraries timed out")
          } catch (yG) {
            const GG = yG instanceof Qb.h ? `Required libraries still loading after ${hb/1e3} s: ${(0,LG.requiredLibsPending)().join(", ")}` : yG.toString();
            return WG.d.errorWithCode(GG, fG.h.LOAD_REQUIRED_LIBS, {
              error: yG,
              severity: "medium"
            })
          }
          return CG.l.xh("matchmakeAndPlayStepCompleted", {
            step: fG.h.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, LG.matchmakeAndPlayMaybeUnloaded)(GG, bG, ZG, wG, SG)
        }(GG, bG, ZG, kG, wG), VG = YG.isError() ? YG.asError() : null;
        if (wG.aborted) return VG && db(YG), UG.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== VG && void 0 !== VG && VG.debugResult.RZ) return console.log("Join cancelled:", VG.message), null;
        if (VG) return YG;
        const {
          gameNameWithVariation: pG,
          lobbyName: QG
        } = YG.getValue();
        return Kb(), (0, Yb.D)().setGameViewShown(!0), kG.recordJoin(pG, QG), (0, FG.P)(), YG
      }
      return wG && (0, SG.n)("updateRejoin"), (0, yb.n)((async SG => {
        try {
          var LG;
          let kG = GG,
            UG = await yG(kG, bG, ZG, SG);
          for (let GG = 0; wG && GG < Ub.j && (Jb(UG) && await (0, Ub.H)((0, Ub.r)(GG), SG)); GG++) kG = (0, Ub.v)(kG, GG + 1, "string" === typeof kG && (0, dG.K)(kG)), UG = await yG(kG, bG, ZG, SG);
          return null !== (LG = UG) && void 0 !== LG && LG.isError() && db(UG), UG
        } catch (kG) {
          if ((0, Sb.reportClientError)("matchmake_failed", kG, "unexpected"), UG.gameBridge.send("leaveGame", {
              reloadPath: SG.aborted ? null : "/"
            }), SG.aborted) return null;
          throw kG
        }
      }), (async GG => {
        var ZG;
        if (wG) return;
        const SG = (0, FG.H)();
        null !== SG && (await SG, GG.aborted) || (null !== (ZG = MG.d[bG]) && void 0 !== ZG && ZG.playAdBeforeMatchmaking ? (TG.f.skipPlayWait(), await new Promise((GG => {
          (0, FG.cb)((() => {
            GG(!0)
          }), "video_start")
        }))) : (0, FG.cb)((() => {}), "video_start"))
      }))
    }

    function zb() {
      const {
        t: GG
      } = (0, pG.w)(), bG = (0, YG.useNavigatePreserveSearch)(), ZG = (0, wG.n)(), QG = (0, wG.v)(), hG = (0, yG.useRef)({
        t: GG,
        navigate: bG
      });
      hG.current = {
        t: GG,
        navigate: bG
      };
      const EG = (0, yG.useRef)("");
      EG.current = ZG.pathname + ZG.search;
      const {
        gameState: oG,
        clientEscMenuOptions: uG
      } = (0, SG.o)(["gameState", "clientEscMenuOptions"]), CG = (0, yG.useRef)(null), AG = (0, yG.useRef)(!1);
      var sG;
      (0, yb.r)(), (0, yb.t)(), sG = pb.B, (0, yG.useEffect)((() => {
        if (!sG) return;
        let GG = !0;
        return (0, RG.e)().then((bG => {
          GG && xG(bG)
        })).catch((() => {})), () => {
          var bG;
          GG = !1, NG.wanted = !1, null === (bG = OG) || void 0 === bG || bG.setGamePackConfirm(null), OG = null
        }
      }), [sG]), (0, yG.useEffect)((() => {
        var GG, bG, wG;
        (0, LG.needGameClientNow)();
        const {
          t: yG,
          navigate: kG
        } = hG.current, pG = (0, bb.b)(QG, ZG.search);
        if (QG.lobbyName && !new URLSearchParams(ZG.search).has("lobby")) return void kG((0, PG.d)(pG.gameNameWithVariation, pG.lobbyName), {
          replace: !0
        });
        let oG = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === ZG.pathname) {
          const GG = SG.e.get("discordContext");
          if (!GG) return void kG("/");
          oG = iG.d.setupDiscordLobby(GG, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: GG
          }))).catch((bG => (console.error("Failed to setup discord lobby", bG), {
            shouldMatchmake: !1,
            discordContext: GG
          })))
        } else if (!pG.gameNameWithVariation || !(0, dG.J)(pG.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${pG.gameNameWithVariation}`), void kG(-1);
        const uG = CG.current;
        if (null !== uG && pG.gameNameWithVariation === uG.gameNameWithVariation && pG.lobbyName === uG.lobbyName) return;
        if (UG.gameBridge.latest("connectedGame").replay) return void(0, yb.j)(null);
        if ("releaseCountdown" === (null === (GG = (0, JG.j)(pG.gameNameWithVariation)) || void 0 === GG ? void 0 : GG.type)) return console.error(`Game hasn't been released yet: ${pG.gameNameWithVariation}`), void kG(-1);
        const vG = AG.current;
        AG.current = !1, (0, FG.K)(), SG.e.set({
          gameState: "loadingScreen"
        });
        const sG = function() {
            NG.wanted = !1;
            const GG = {
              wanted: !0
            };
            return NG = GG, () => GG.wanted
          }(),
          nG = pG.gameNameWithVariation;
        if (nG && (pb.B || (0, KG.h)(nG))) {
          const GG = pb.B ? Promise.all([(0, RG.e)(), zG.userContextManager.getCurrentUserContext()]).then((GG => {
            let [bG, ZG] = GG;
            if (sG()) return xG(bG), bG.packForGame(nG, ZG, sG)
          })) : async function(GG) {
            await qG.e.indexedDbValuesAreLoaded();
            const bG = await zG.userContextManager.getCurrentUserContext(),
              ZG = (0, KG.j)(GG);
            let wG;
            try {
              wG = await rG.d.getGame(bG, ZG, !0)
            } catch (yG) {
              return void console.error("Failed to get game", yG)
            }
            const SG = wG.customTexturePackKey;
            if (!SG) return void(qG.e.isUsingTemporaryTexturePack() && ((0, mG.reloadBloxd)(), await new Promise((() => {}))));
            if (qG.e.isUsingTemporaryTexturePack() && qG.e.getTemporaryTexturePackSource() === SG) return;
            const LG = VG.NotificationProvider.showCustomPopup({
              body: GG => (0, HG.jsx)(Gb, {
                schematicId: ZG,
                texturePackKey: SG,
                onClose: GG
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await LG.getResult()
          }(nG), bG = oG;
          oG = GG.catch((GG => {
            console.error("Failed to check for custom texture pack", GG)
          })).then((() => bG))
        }
        const gG = {
          wasm: pb.B,
          game: pG.gameNameWithVariation,
          custom: void 0 !== nG && (0, KG.h)(nG),
          lobbyName: null !== (bG = pG.lobbyName) && void 0 !== bG ? bG : null,
          direct: null !== pG.directJoinVmUrl && void 0 !== pG.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === ZG.pathname,
          adBeforeMatchmaking: void 0 !== nG && !0 === (null === (wG = MG.d[nG]) || void 0 === wG ? void 0 : wG.playAdBeforeMatchmaking),
          afterAnother: null !== CG.current || (0, yb.e)()
        };
        (0, kb.f)(null);
        const eG = !(TG = gG).wasm || void 0 === TG.game || TG.custom || TG.direct || TG.discord || TG.adBeforeMatchmaking || TG.afterAnother ? null : () => {
          ! function(GG, bG) {
            (0, kb.f)({
              key: (0, kb.d)(GG, bG),
              settled: Promise.all([LG.matchmakingLibrariesPromise, zG.userContextManager.getCurrentUserContext()]).then((ZG => {
                let [wG, SG] = ZG;
                if (void 0 === wG.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return wG.matchmakeForAhead(GG, bG, SG)
              })).catch((GG => ({
                result: WG.d.errorWithCode(String(GG), fG.h.REQUEST_TO_MATCHMAKING, {
                  error: GG,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(gG.lobbyName, gG.game)
        };
        var TG;
        const tG = null !== CG.current;
        CG.current = null, (0, yb.j)(null);
        const DG = () => {
          vG ? (0, YG.navigateToHomePage)() : (AG.current = tG, kG(-1))
        };
        let OG = !1;
        const BG = ZG.pathname + ZG.search,
          wb = () => !OG && EG.current === BG;
        return (0, kb.b)(oG, eG, (GG => {
          let {
            shouldMatchmake: bG,
            discordContext: ZG
          } = GG;
          wb() && (bG ? rb(null !== ZG && void 0 !== ZG ? ZG : pG.lobbyName, ZG ? "classic" : pG.gameNameWithVariation, pG.directJoinVmUrl).then((GG => {
            if (null !== GG && wb())
              if (GG.isError()) {
                var bG;
                const ZG = GG.asError(),
                  wG = null !== (bG = ZG.debugResult.severity) && void 0 !== bG ? bG : "high";
                if ((0, Vb.d)(ZG.debugResult.error)) return void Vb.g.reload();
                if (ZG.code === fG.h.SHADER_PACK) return void(0, Zb.b)(ZG.message, kG);
                const LG = SG.e.get("gameEntrySource"),
                  YG = ZG.code === fG.h.INITIALISE_WEBGL ? (0, cG.b)() : null,
                  {
                    error: QG
                  } = ZG.debugResult;
                let KG;
                if (XG(yG, ZG)) KG = Promise.resolve(!1);
                else if (null !== YG) KG = (0, cG.i)(YG);
                else if (QG instanceof jG.h) KG = (0, lG.g)(QG);
                else {
                  let GG;
                  switch (wG) {
                    case "low":
                      GG = "face-diagonal-mouth";
                      break;
                    case "medium":
                      GG = "face-worried";
                      break;
                    case "high":
                      GG = "face-dizzy"
                  }
                  const bG = QG instanceof Qb.h;
                  let SG = ZG.message;
                  bG ? SG = yG("general:gameFilesStalled") : ZG.debugResult.gameServerUnreachable && (SG = yG((0, IG.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  KG = VG.NotificationProvider.showPromptPopup({
                    icon: GG,
                    title: fG.u[ZG.code],
                    subtitle: (0, HG.jsxs)(HG.Fragment, {
                      children: [SG, QG instanceof Error && !bG && (0, HG.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, HG.jsx)(aG.c, {
                          errorString: QG.stack
                        })
                      })]
                    }),
                    confirmText: yG("general:tryAgain"),
                    cancelText: yG("general:cancel")
                  }).getResult().then((GG => !0 === GG))
                }
                KG.then((GG => {
                  if (GG) {
                    (0, SG.n)(LG);
                    const GG = (0, PG.d)(pG.gameNameWithVariation, pG.lobbyName);
                    "low" === wG ? kG(GG) : (0, mG.reloadBloxd)(GG)
                  }
                })), UG.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), DG()
              } else {
                const {
                  gameNameWithVariation: bG,
                  lobbyName: ZG
                } = GG.getValue();
                CG.current = {
                  gameNameWithVariation: bG,
                  lobbyName: ZG
                };
                const wG = (0, PG.d)(bG, ZG);
                kG(wG, {
                  replace: !0
                })
              }
          })).catch((GG => {
            if (!wb()) return;
            VG.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, HG.jsxs)(HG.Fragment, {
                children: [yG("homePage:pleaseCopyError"), (0, HG.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, HG.jsx)(aG.c, {
                    errorString: GG.stack
                  })
                })]
              }),
              confirmText: yG("general:tryAgain"),
              cancelText: yG("general:cancel")
            }).getResult().then((GG => {
              !0 === GG && (0, mG.reloadBloxd)((0, PG.d)(pG.gameNameWithVariation, pG.lobbyName))
            })), DG()
          })) : kG(-1))
        }), wb), () => {
          OG = !0
        }
      }), [QG, ZG.search, ZG.pathname]), (0, yG.useEffect)((() => {
        uG.disableFullscreen && (0, vG.h)() ? (0, vG.l)() : !uG.disableFullscreen && (0, vG.j)() && (0, vG.q)({
          automatic: !0
        })
      }), [oG, uG]), (0, yG.useEffect)((() => {
        "inGame" === oG && Kb()
      }), [oG, uG]), (0, yG.useEffect)((() => {
        "inGame" !== oG && SG.e.set({
          openInGameMenuName: null
        })
      }), [oG]);
      const nG = function(GG) {
        const bG = (0, SG.l)(GG),
          [ZG, wG] = (0, yG.useState)(0),
          [LG, UG] = (0, yG.useState)(!1);
        (0, kG.g)("gameJoined", (() => {
          (0, SG.l)(SG.e.get("gameState")) && (wG((GG => GG + 1)), UG(!0))
        })), (0, yG.useEffect)((() => {
          bG || UG(!1)
        }), [bG]);
        const YG = "inGame" === GG;
        return {
          mounted: YG || bG && LG,
          shown: YG,
          key: ZG
        }
      }(oG);
      return (0, HG.jsx)(HG.Fragment, {
        children: nG.mounted && (0, HG.jsx)(LG.InGameUi, {
          shown: nG.shown
        }, nG.key)
      })
    }
  },
  5008: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG
    });
    var wG = ZG(1163);
    async function SG(GG) {
      const bG = await fetch(`${wG.clientSideServerUrls.s3Url}/${GG}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === bG.status || 403 === bG.status) return null;
      if (!bG.ok) throw new Error(`Failed to download the texture pack (${bG.status})`);
      return await bG.json()
    }
  },
  8975: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(1290),
      SG = ZG(1177),
      LG = ZG(604);

    function yG(GG) {
      return GG = function(GG, bG) {
        var ZG;
        const wG = new URLSearchParams(bG),
          SG = wG.get("lobby"),
          LG = wG.get("vm"),
          yG = null !== (ZG = SG) && void 0 !== ZG ? ZG : GG.lobbyName,
          kG = null !== LG && void 0 !== LG ? LG : GG.directJoinVmUrl;
        if (yG === GG.lobbyName && kG === GG.directJoinVmUrl) return GG;
        return {
          ...GG,
          lobbyName: yG,
          directJoinVmUrl: kG
        }
      }(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), GG = function(GG) {
        if ((0, LG.L)(GG.directJoinVmUrl)) return GG;
        const bG = (0, SG.Z)(GG.directJoinVmUrl);
        null === bG && (GG.directJoinVmUrl = void 0);
        return GG
      }(GG = function(GG) {
        if ((0, LG.L)(GG.gameNameWithVariation)) return GG;
        return GG.gameNameWithVariation = (0, wG.k)(GG.gameNameWithVariation), GG
      }(GG))
    }
  },
  8967: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = !1;

    function SG() {
      wG = !0
    }

    function LG() {
      return wG
    }
  },
  8981: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      d: () => SG,
      f: () => LG,
      h: () => yG
    });
    let wG = null;

    function SG(GG, bG) {
      return `${bG}\n${null!==GG&&void 0!==GG?GG:""}`
    }

    function LG(GG) {
      wG = GG
    }

    function yG(GG) {
      const bG = wG;
      return wG = null, null !== bG && bG.key === GG ? bG.settled : null
    }

    function kG(GG, bG, ZG, wG) {
      let SG = !1;
      null !== bG && setTimeout((() => {
        wG() && !SG && bG()
      }), 0), GG.then((GG => {
        SG = !0, ZG(GG)
      }))
    }
  },
  8960: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      e: () => fG,
      i: () => KG
    });
    var wG = ZG(3135),
      SG = ZG(2290),
      LG = ZG(2128),
      yG = ZG(4670),
      kG = ZG(3481),
      UG = ZG(8967);
    let YG = null;

    function VG() {
      return Promise.all([ZG.e(75), ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(160), ZG.e(137), ZG.e(198), ZG.e(140), ZG.e(88), ZG.e(275), ZG.e(64)]).then((() => ZG(41048)))
    }

    function pG() {
      Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(90), ZG.e(87), ZG.e(273), ZG.e(191), ZG.e(228), ZG.e(252), ZG.e(275), ZG.e(47)]).then((() => ZG(41395))).catch((() => {}))
    }

    function fG() {
      return yG.d.cancelDownloadForJoin(), (0, kG.e)(), (0, SG.g)(), (0, UG.g)(), (0, LG.j)(), pG(), Promise.all([ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(137), ZG.e(140), ZG.e(59)]).then((() => ZG(41444))).then((GG => {
        let {
          startJoinLoad: bG
        } = GG;
        bG()
      }), (() => {})), YG ??= VG().then((GG => (GG.startWasmPlay(), GG.followPageUiPack((GG => {
        wG.e.showGamePack(GG)
      })), GG)), (GG => {
        throw YG = null, GG
      })), YG
    }

    function QG() {
      return pG(), ZG.e(276).then((() => ZG(41447))).catch((() => {})), VG().then((() => {}))
    }

    function KG() {
      return VG().then((GG => {
        GG.startWasmPreviews(), GG.prefetchWasmPreviews()
      }))
    }
  },
  8957: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      h: () => yG,
      j: () => kG,
      n: () => YG,
      q: () => UG
    });
    var wG = ZG(188),
      SG = ZG(4655);

    function LG(GG) {
      return yG(GG) === wG.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yG(GG) {
      return "object" === typeof GG && null !== GG ? GG.code : void 0
    }

    function kG(GG) {
      var bG;
      return null !== (bG = Object.keys(SG.b).find((bG => SG.b[bG] === GG))) && void 0 !== bG ? bG : null
    }

    function UG(GG) {
      return "notWhitelisted" === GG ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const YG = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);