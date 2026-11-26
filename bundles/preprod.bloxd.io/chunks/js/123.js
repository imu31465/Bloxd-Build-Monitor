export const id = 123;
export const ids = [123, 176];
export const modules = {
  9611: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => MB
    });
    var AH = LH(1520),
      rH = LH(15),
      SH = LH(5069),
      hH = LH(45),
      tH = LH(1450);
    var zH = LH(1998),
      CH = LH(1509),
      EH = LH(1352),
      XH = LH(1123),
      GH = LH(9615),
      YH = LH(9619),
      uH = LH(4991),
      QH = LH(152),
      WH = LH(1070),
      MH = LH(18),
      xH = LH(1188),
      vH = LH(1789),
      PH = LH(81),
      TH = LH(1287),
      UH = LH(1440),
      VH = LH(4934),
      OH = LH(4738),
      bH = LH(4710),
      kH = LH(3597),
      mH = LH(2523),
      oH = LH(1306),
      IH = LH(761),
      fH = LH(1177),
      lH = LH(1005),
      KH = LH(1168),
      cH = LH(3651),
      eH = LH(3503),
      qH = LH(1361),
      gH = LH(1313),
      NH = LH(5473),
      RH = LH(9631),
      jH = LH(3271),
      nH = LH(1225);

    function FH(HH) {
      let {
        onApply: BH,
        onSkip: LH
      } = HH;
      const {
        t: AH
      } = (0, XH.B)();
      return (0, hH.useEffect)((() => {
        jH.d.skipPlayWait()
      }), []), (0, nH.jsx)(qH.m, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, nH.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [AH("customTexturePack:downloadPrompt"), (0, nH.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: AH("customTexturePack:authorWarning")
          }), (0, nH.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: AH("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: BH
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: LH
        }
      })
    }
    async function DH() {
      let HH = !1;
      const BH = EH.NotificationProvider.showCustomPopup({
        body: BH => (0, nH.jsx)(FH, {
          onApply: () => {
            HH = !0, BH()
          },
          onSkip: BH
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await BH.getResult(), HH
    }
    let wH = {
      wanted: !1
    };
    let ZH = null;

    function dH(HH) {
      HH.setGamePackConfirm(DH), ZH = HH
    }
    var aH = LH(3879),
      sH = LH(1502),
      JH = LH(30),
      iH = LH(3610);

    function pH(HH) {
      let {
        schematicId: BH,
        texturePackKey: LH,
        onClose: AH
      } = HH;
      const [rH, SH] = (0, hH.useState)("prompt"), [tH, zH] = (0, hH.useState)(null), CH = (0, aH.c)();

      function EH() {
        AH()
      }
      return "prompt" === rH ? (0, nH.jsx)(FH, {
        onApply: async function() {
          SH("downloading");
          try {
            const HH = await async function(HH, BH) {
              const LH = await (0, NH.b)(BH);
              if (LH) return {
                pack: LH,
                key: BH
              };
              const AH = await WH.userContextManager.getCurrentUserContext(),
                rH = (await sH.d.getGame(AH, HH, !0)).customTexturePackKey;
              if (!rH) return null;
              const SH = await (0, NH.b)(rH);
              if (!SH) throw new Error("The texture pack could not be found");
              return {
                pack: SH,
                key: rH
              }
            }(BH, LH);
            if (!CH.current) return;
            if (!HH) return void AH();
            if ((0, cH.j)(HH.pack)) return void SH("refused");
            const rH = eH.b.toJson(),
              hH = eH.b.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (eH.b.setFromJson(HH.pack, "customGame"), await eH.b.saveTemporaryTexturePack(HH.key), CH.current) return void(0, vH.reloadBloxd)();
            eH.b.setFromJson(rH, hH), await (0, iH.k)(JH.c)
          } catch (HH) {
            zH(HH instanceof Error ? HH.message : String(HH)), SH("error")
          }
        },
        onSkip: EH
      }) : "downloading" === rH ? (0, nH.jsx)(qH.m, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, nH.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, nH.jsx)(gH.d, {
            showFace: !0
          })
        })
      }) : "error" === rH ? (0, nH.jsx)(qH.m, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: tH,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: EH
        }
      }) : "refused" === rH ? (0, nH.jsx)(qH.m, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: EH
        }
      }) : null
    }
    var yH = LH(9637),
      HB = LH(4699),
      BB = LH(1839),
      LB = LH(1826),
      AB = LH(4701),
      rB = LH(2213),
      SB = LH(9644);
    var hB = LH(5131),
      tB = LH(1253),
      zB = LH(1781),
      CB = LH(642),
      EB = LH(725),
      XB = LH(1863);

    function GB() {
      const HH = rH.c.get("clientEscMenuOptions");
      zH.gameBridge.send("setLookSensitivity", rH.c.get("isTouchScreen") ? (0, EB.q)(HH) : HH.mouseSensitivity)
    }
    const YB = 45e3;

    function uB(HH) {
      const BH = HH.asError();
      if (BH.debugResult.xB || (0, zB.e)(BH.debugResult.error)) return;
      console.log("Failed to join lobby:", BH.message);
      const LH = "timedOut" === BH.debugResult.gameServerUnreachable;
      (0, LB.reportClientError)("matchmake_failed", BH.message, LH ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : QH.h[BH.code]);
      const {
        error: AH
      } = BH.debugResult;
      if (AH instanceof kH.t && "default" !== AH.packSource) {
        const HH = (0, AB.g)("js", "game" === AH.packSource ? "game" : "page", (0, AB.h)(AH));
        (0, LB.reportClientError)("texture_pack", AH, HH)
      }
    }

    function QB(HH) {
      if (null === HH || void 0 === HH || !HH.isError()) return !1;
      const BH = HH.asError();
      return BH.code === QH.h.REQUEST_TO_MATCHMAKING && !(0, zB.e)(BH.debugResult.error)
    }
    async function WB(HH, BH, LH) {
      const AH = (0, hB.K)(BH);
      async function hH(HH, BH, LH, AH) {
        var hH;
        if (AH.aborted) return null;
        null === rH.c.get("gameEntrySource") && (0, rH.l)("directPlayUrl"), CB.K && (0, RH.loadWasmPlay)().catch((() => {})), rH.c.set({
          gameState: "findingLobby"
        }), MH.k.AX("loadingScreenState", "loadingPage:findingLobby");
        const tH = await WH.userContextManager.getCurrentUserContext();
        zH.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: BH,
          discordContext: HH instanceof fH.f ? HH.getSerialisableParams() : null
        }), (0, BB.f)(null !== (hH = jH.d.playInputAt()) && void 0 !== hH ? hH : performance.now());
        const CH = await async function(HH, BH, LH, AH, rH) {
          try {
            await (0, XB.j)(SH.reqLibsLoadedPromise, YB, "Required libraries timed out")
          } catch (hH) {
            const HH = hH instanceof XB.e ? `Required libraries still loading after ${YB/1e3} s: ${(0,SH.requiredLibsPending)().join(", ")}` : hH.toString();
            return xH.e.errorWithCode(HH, QH.h.LOAD_REQUIRED_LIBS, {
              error: hH,
              severity: "medium"
            })
          }
          return MH.k.AX("matchmakeAndPlayStepCompleted", {
            step: QH.h.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, SH.matchmakeAndPlayMaybeUnloaded)(HH, BH, LH, AH, rH)
        }(HH, BH, LH, tH, AH), EH = CH.isError() ? CH.asError() : null;
        if (AH.aborted) return EH && uB(CH), zH.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== EH && void 0 !== EH && EH.debugResult.xB) return console.log("Join cancelled:", EH.message), null;
        if (EH) return CH;
        const {
          gameNameWithVariation: XH,
          lobbyName: GH
        } = CH.getValue();
        return GB(), (0, tB.K)().setGameViewShown(!0), tH.recordJoin(XH, GH), (0, TH.K)(), CH
      }
      return AH && (0, rH.l)("updateRejoin"), (0, rB.i)((async rH => {
        try {
          var SH;
          let tH = HH,
            zH = await hH(tH, BH, LH, rH);
          for (let HH = 0; AH && HH < hB.l && (QB(zH) && await (0, hB.N)((0, hB.u)(HH), rH)); HH++) tH = (0, hB.x)(tH, HH + 1, "string" === typeof tH && (0, KH.N)(tH)), zH = await hH(tH, BH, LH, rH);
          return null !== (SH = zH) && void 0 !== SH && SH.isError() && uB(zH), zH
        } catch (tH) {
          if ((0, LB.reportClientError)("matchmake_failed", tH, "unexpected"), zH.gameBridge.send("leaveGame", {
              reloadPath: rH.aborted ? null : "/"
            }), rH.aborted) return null;
          throw tH
        }
      }), (async HH => {
        var LH;
        if (AH) return;
        const rH = (0, TH.E)();
        null !== rH && (await rH, HH.aborted) || (null !== (LH = IH.b[BH]) && void 0 !== LH && LH.playAdBeforeMatchmaking ? (jH.d.skipPlayWait(), await new Promise((HH => {
          (0, TH.ab)((() => {
            HH(!0)
          }), "video_start")
        }))) : (0, TH.ab)((() => {}), "video_start"))
      }))
    }

    function MB() {
      const {
        t: HH
      } = (0, XH.B)(), BH = (0, CH.useNavigatePreserveSearch)(), LH = (0, AH.s)(), fH = (0, AH.A)(), cH = (0, hH.useRef)({
        t: HH,
        navigate: BH
      });
      cH.current = {
        t: HH,
        navigate: BH
      };
      const qH = (0, hH.useRef)("");
      qH.current = LH.pathname + LH.search;
      const {
        gameState: gH,
        clientEscMenuOptions: NH
      } = (0, rH.m)(["gameState", "clientEscMenuOptions"]), jH = (0, hH.useRef)(null), FH = (0, hH.useRef)(!1);
      var DH;
      (0, hH.useEffect)((() => () => {
        MH.k.AX("leftPlayPage")
      }), []), (0, rB.j)(), (0, rB.n)(), DH = CB.K, (0, hH.useEffect)((() => {
        if (!DH) return;
        let HH = !0;
        return (0, RH.loadWasmPlay)().then((BH => {
          HH && dH(BH)
        })).catch((() => {})), () => {
          var BH;
          HH = !1, wH.wanted = !1, null === (BH = ZH) || void 0 === BH || BH.setGamePackConfirm(null), ZH = null
        }
      }), [DH]), (0, hH.useEffect)((() => {
        var HH, BH, AH;
        (0, SH.needGameClientNow)();
        const {
          t: hH,
          navigate: tH
        } = cH.current, XH = (0, yH.b)(fH, LH.search);
        if (fH.lobbyName && !new URLSearchParams(LH.search).has("lobby")) return void tH((0, oH.b)(XH.gameNameWithVariation, XH.lobbyName), {
          replace: !0
        });
        let UH = Promise.resolve({
          shouldMatchmake: !0
        });
        const gH = new AbortController;
        if ("/play/discord-custom-lobby" === LH.pathname) {
          const HH = rH.c.get("discordContext");
          if (!HH) return void tH("/");
          UH = uH.e.setupDiscordLobby(HH, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: HH
          }))).catch((BH => (console.error("Failed to setup discord lobby", BH), {
            shouldMatchmake: !1,
            discordContext: HH
          })))
        } else if (!XH.gameNameWithVariation || !(0, KH.J)(XH.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${XH.gameNameWithVariation}`), void tH(-1);
        const NH = jH.current;
        if (null !== NH && XH.gameNameWithVariation === NH.gameNameWithVariation && XH.lobbyName === NH.lobbyName) return;
        if (zH.gameBridge.latest("connectedGame").replay) return void(0, rB.e)(null);
        if ("releaseCountdown" === (null === (HH = (0, mH.h)(XH.gameNameWithVariation)) || void 0 === HH ? void 0 : HH.type)) return console.error(`Game hasn't been released yet: ${XH.gameNameWithVariation}`), void tH(-1);
        const DH = FH.current;
        FH.current = !1, (0, TH.G)(), rH.c.set({
          gameState: "loadingScreen"
        });
        const ZH = function() {
            wH.wanted = !1;
            const HH = {
              wanted: !0
            };
            return wH = HH, () => HH.wanted
          }(),
          aH = XH.gameNameWithVariation;
        if (aH && (CB.K || (0, lH.l)(aH))) {
          const HH = CB.K ? Promise.all([(0, RH.loadWasmPlay)(), WH.userContextManager.getCurrentUserContext()]).then((HH => {
            let [BH, LH] = HH;
            if (ZH()) return dH(BH), BH.packForGame(aH, LH, ZH)
          })) : async function(HH, BH) {
            await eH.b.indexedDbValuesAreLoaded();
            const LH = await WH.userContextManager.getCurrentUserContext(),
              AH = (0, lH.q)(HH);
            let rH;
            try {
              rH = await sH.d.getGame(LH, AH, !0)
            } catch (zH) {
              return void console.error("Failed to get game", zH)
            }
            if (null !== BH && void 0 !== BH && BH.aborted) return;
            const SH = rH.customTexturePackKey;
            if (!SH) return void(eH.b.isUsingTemporaryTexturePack() && ((0, vH.reloadBloxd)(), await new Promise((() => {}))));
            if (eH.b.isUsingTemporaryTexturePack() && eH.b.getTemporaryTexturePackSource() === SH) return;
            const hH = EH.NotificationProvider.showCustomPopup({
                body: HH => (0, nH.jsx)(pH, {
                  schematicId: AH,
                  texturePackKey: SH,
                  onClose: HH
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              tH = () => {
                hH.tearDownNotification()
              };
            null === BH || void 0 === BH || BH.addEventListener("abort", tH, {
              once: !0
            }), await hH.getResult(), null === BH || void 0 === BH || BH.removeEventListener("abort", tH)
          }(aH, gH.signal), BH = UH;
          UH = HH.catch((HH => {
            console.error("Failed to check for custom texture pack", HH)
          })).then((() => BH))
        }
        const JH = {
          wasm: CB.K,
          game: XH.gameNameWithVariation,
          custom: void 0 !== aH && (0, lH.l)(aH),
          lobbyName: null !== (BH = XH.lobbyName) && void 0 !== BH ? BH : null,
          direct: null !== XH.directJoinVmUrl && void 0 !== XH.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === LH.pathname,
          adBeforeMatchmaking: void 0 !== aH && !0 === (null === (AH = IH.b[aH]) || void 0 === AH ? void 0 : AH.playAdBeforeMatchmaking),
          afterAnother: null !== jH.current || (0, rB.c)()
        };
        (0, SB.j)(null);
        const iH = !(BB = JH).wasm || void 0 === BB.game || BB.custom || BB.direct || BB.discord || BB.adBeforeMatchmaking || BB.afterAnother ? null : () => {
          ! function(HH, BH) {
            (0, SB.j)({
              key: (0, SB.f)(HH, BH),
              settled: Promise.all([SH.matchmakingLibrariesPromise, WH.userContextManager.getCurrentUserContext()]).then((LH => {
                let [AH, rH] = LH;
                if (void 0 === AH.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return AH.matchmakeForAhead(HH, BH, rH)
              })).catch((HH => ({
                result: xH.e.errorWithCode(String(HH), QH.h.REQUEST_TO_MATCHMAKING, {
                  error: HH,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(JH.lobbyName, JH.game)
        };
        var BB;
        const LB = null !== jH.current;
        jH.current = null, (0, rB.e)(null);
        const AB = () => {
          DH ? (0, CH.navigateToHomePage)() : (FH.current = LB, tH(-1))
        };
        let hB = !1;
        const tB = LH.pathname + LH.search,
          EB = () => !hB && qH.current === tB;
        return (0, SB.d)(UH, iH, (HH => {
          let {
            shouldMatchmake: BH,
            discordContext: LH
          } = HH;
          EB() && (BH ? WB(null !== LH && void 0 !== LH ? LH : XH.lobbyName, LH ? "classic" : XH.gameNameWithVariation, XH.directJoinVmUrl).then((HH => {
            if (null !== HH && EB())
              if (HH.isError()) {
                var BH, LH;
                const AH = HH.asError(),
                  SH = null !== (BH = AH.debugResult.severity) && void 0 !== BH ? BH : "high";
                if (MH.k.AX("joinFailed", {
                    step: null !== (LH = AH.code) && void 0 !== LH ? LH : null,
                    severity: SH
                  }), (0, zB.e)(AH.debugResult.error)) return void zB.i.reload();
                if (AH.code === QH.h.SHADER_PACK) return void(0, HB.c)(AH.message, tH);
                const CH = rH.c.get("gameEntrySource"),
                  uH = AH.code === QH.h.INITIALISE_WEBGL ? (0, OH.e)() : null,
                  {
                    error: WH
                  } = AH.debugResult;
                let xH;
                if ((0, YH.c)(hH, AH)) xH = Promise.resolve(!1);
                else if (null !== uH) xH = (0, OH.o)(uH);
                else if (WH instanceof kH.t) xH = (0, bH.e)(WH);
                else {
                  let HH;
                  switch (SH) {
                    case "low":
                      HH = "face-diagonal-mouth";
                      break;
                    case "medium":
                      HH = "face-worried";
                      break;
                    case "high":
                      HH = "face-dizzy"
                  }
                  const BH = WH instanceof XB.e;
                  let LH = (0, GH.g)(AH.message);
                  BH ? LH = hH("general:gameFilesStalled") : AH.debugResult.gameServerUnreachable && (LH = hH((0, PH.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  xH = EH.NotificationProvider.showPromptPopup({
                    icon: HH,
                    title: QH.y[AH.code],
                    subtitle: (0, nH.jsxs)(nH.Fragment, {
                      children: [LH, WH instanceof Error && !BH && (0, nH.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, nH.jsx)(VH.c, {
                          errorString: WH.stack
                        })
                      })]
                    }),
                    confirmText: hH("general:tryAgain"),
                    cancelText: hH("general:cancel")
                  }).getResult().then((HH => !0 === HH))
                }
                xH.then((HH => {
                  if (HH) {
                    (0, rH.l)(CH);
                    const HH = (0, oH.b)(XH.gameNameWithVariation, XH.lobbyName);
                    "low" === SH ? tH(HH) : (0, vH.reloadBloxd)(HH)
                  }
                })), zH.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), AB()
              } else {
                const {
                  gameNameWithVariation: BH,
                  lobbyName: LH
                } = HH.getValue();
                jH.current = {
                  gameNameWithVariation: BH,
                  lobbyName: LH
                };
                const AH = (0, oH.b)(BH, LH);
                tH(AH, {
                  replace: !0
                })
              }
          })).catch((HH => {
            if (!EB()) return;
            MH.k.AX("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            EH.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, nH.jsxs)(nH.Fragment, {
                children: [hH("homePage:pleaseCopyError"), (0, nH.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, nH.jsx)(VH.c, {
                    errorString: HH.stack
                  })
                })]
              }),
              confirmText: hH("general:tryAgain"),
              cancelText: hH("general:cancel")
            }).getResult().then((HH => {
              !0 === HH && (0, vH.reloadBloxd)((0, oH.b)(XH.gameNameWithVariation, XH.lobbyName))
            })), AB()
          })) : tH(-1))
        }), EB), () => {
          hB = !0, gH.abort()
        }
      }), [fH, LH.search, LH.pathname]), (0, hH.useEffect)((() => {
        NH.disableFullscreen && (0, UH.g)() ? (0, UH.l)() : !NH.disableFullscreen && (0, UH.k)() && (0, UH.r)({
          automatic: !0
        })
      }), [gH, NH]), (0, hH.useEffect)((() => {
        "inGame" === gH && GB()
      }), [gH, NH]), (0, hH.useEffect)((() => {
        "inGame" !== gH && rH.c.set({
          openInGameMenuName: null
        })
      }), [gH]);
      const aH = function(HH) {
        const BH = (0, rH.j)(HH),
          [LH, AH] = (0, hH.useState)(0),
          [SH, zH] = (0, hH.useState)(!1);
        (0, tH.d)("gameJoined", (() => {
          (0, rH.j)(rH.c.get("gameState")) && (AH((HH => HH + 1)), zH(!0))
        })), (0, hH.useEffect)((() => {
          BH || zH(!1)
        }), [BH]);
        const CH = "inGame" === HH;
        return {
          mounted: CH || BH && SH,
          shown: CH,
          key: LH
        }
      }(gH);
      return (0, nH.jsx)(nH.Fragment, {
        children: aH.mounted && (0, nH.jsx)(SH.InGameUi, {
          shown: aH.shown
        }, aH.key)
      })
    }
  },
  5473: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(1131);
    async function rH(HH) {
      const BH = await fetch(`${AH.clientSideServerUrls.s3Url}/${HH}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === BH.status || 403 === BH.status) return null;
      if (!BH.ok) throw new Error(`Failed to download the texture pack (${BH.status})`);
      return await BH.json()
    }
  },
  9619: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => WH,
      d: () => MH
    });
    var AH = LH(152),
      rH = LH(176),
      SH = LH(1005),
      hH = LH(1016),
      tH = LH(1168),
      zH = LH(1998),
      CH = LH(2523),
      EH = LH(1502),
      XH = LH(1352),
      GH = LH(1070),
      YH = LH(9627),
      uH = LH(1509),
      QH = LH(1536);

    function WH(HH, BH) {
      const LH = !0 === BH.debugResult.gameRefused,
        SH = LH || BH.code === AH.h.REQUEST_TO_MATCHMAKING ? (0, YH.f)(BH.message) : null;
      if (null !== SH) return TH(HH, HH((0, YH.l)(SH)), HH(YH.j[SH])), !0;
      if (LH) return async function(HH) {
        const {
          gameNameWithVariation: BH,
          lobbyName: LH,
          shownLobbyName: AH
        } = zH.gameBridge.latest("connectedGame"), rH = "classic" === BH && (0, tH.G)(LH) ? AH : await (0, CH.f)(HH, BH, LH);
        return "" !== rH ? HH("general:cantJoinGame", {
          game: rH
        }) : HH("general:cantJoinThisGame")
      }(HH).then((LH => {
        TH(HH, LH, BH.message)
      })), !0;
      const {
        joinFailure: hH
      } = BH.debugResult, EH = "refused" === (null === hH || void 0 === hH ? void 0 : hH.at) ? hH.code : null;
      return EH === rH.e.schematicNotPublished.code ? (async function(HH, BH) {
        const LH = xH(),
          AH = await PH(LH);
        if (null === AH || AH.gamePublished) return void TH(HH, HH("general:cantJoinThisGame"), BH);
        await vH(HH, "rocket-launch", HH("studio:gameNotPublishedTitle", {
          game: AH.name
        }), HH("studio:publishInStudio"), LH)
      }(HH, BH.message), !0) : (EH === rH.e.schematicBanned.code || EH === rH.e.customGameTakenDown.code) && (PH(xH()).then((BH => {
        MH(HH, BH)
      })), !0)
    }

    function MH(HH, BH) {
      !0 !== (null === BH || void 0 === BH ? void 0 : BH.takenDown) ? TH(HH, HH("general:cantJoinThisGame"), rH.e.customGameTakenDown.text) : vH(HH, "lock", HH("studio:gameTakenDownTitle", {
        game: BH.name
      }), HH("studio:viewInStudio"), BH.schematicId)
    }

    function xH() {
      return (0, SH.q)(zH.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function vH(HH, BH, LH, AH, rH) {
      !0 === await XH.NotificationProvider.showPromptPopup({
        icon: BH,
        title: LH,
        confirmText: AH,
        cancelText: HH("general:cancel")
      }).getResult() && (0, uH.navigatePreserveSearch)((0, QH.t)((0, hH.d)(rH), "manage"))
    }
    async function PH(HH) {
      try {
        return await EH.d.getGame(await GH.userContextManager.getCurrentUserContext(), HH, !0)
      } catch (BH) {
        return (0, EH.g)(BH) || console.error(`Failed to get game ${HH}`, BH), null
      }
    }

    function TH(HH, BH, LH) {
      XH.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: BH,
        subtitle: LH,
        confirmText: HH("general:ok"),
        cancelText: ""
      })
    }
  },
  9637: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1306),
      rH = LH(1168),
      SH = LH(619);

    function hH(HH) {
      return HH = function(HH, BH) {
        var LH;
        const AH = new URLSearchParams(BH),
          rH = AH.get("lobby"),
          SH = AH.get("vm"),
          hH = null !== (LH = rH) && void 0 !== LH ? LH : HH.lobbyName,
          tH = null !== SH && void 0 !== SH ? SH : HH.directJoinVmUrl;
        if (hH === HH.lobbyName && tH === HH.directJoinVmUrl) return HH;
        return {
          ...HH,
          lobbyName: hH,
          directJoinVmUrl: tH
        }
      }(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), HH = function(HH) {
        if ((0, SH.M)(HH.directJoinVmUrl)) return HH;
        const BH = (0, rH.bb)(HH.directJoinVmUrl);
        null === BH && (HH.directJoinVmUrl = void 0);
        return HH
      }(HH = function(HH) {
        if ((0, SH.M)(HH.gameNameWithVariation)) return HH;
        return HH.gameNameWithVariation = (0, AH.m)(HH.gameNameWithVariation), HH
      }(HH))
    }
  },
  9634: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = !1;

    function rH() {
      AH = !0
    }

    function SH() {
      return AH
    }
  },
  9644: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => rH,
      j: () => SH,
      l: () => hH
    });
    let AH = null;

    function rH(HH, BH) {
      return `${BH}\n${null!==HH&&void 0!==HH?HH:""}`
    }

    function SH(HH) {
      AH = HH
    }

    function hH(HH) {
      const BH = AH;
      return AH = null, null !== BH && BH.key === HH ? BH.settled : null
    }

    function tH(HH, BH, LH, AH) {
      let rH = !1;
      null !== BH && setTimeout((() => {
        AH() && !rH && BH()
      }), 0), HH.then((HH => {
        rH = !0, LH(HH)
      }))
    }
  },
  9631: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadWasmPlay: () => GH,
      loadWasmPlayAhead: () => YH,
      loadWasmPreviews: () => uH
    });
    var AH = LH(3503),
      rH = LH(2413),
      SH = LH(2215),
      hH = LH(5062),
      tH = LH(3892),
      zH = LH(9634);
    let CH = null;

    function EH() {
      return Promise.all([LH.e(86), LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(216), LH.e(243), LH.e(155), LH.e(101), LH.e(244), LH.e(75)]).then((() => LH(42e3)))
    }

    function XH() {
      Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(103), LH.e(100), LH.e(300), LH.e(207), LH.e(250), LH.e(274), LH.e(244), LH.e(54)]).then((() => LH(42318))).catch((() => {}))
    }

    function GH() {
      return hH.b.cancelDownloadForJoin(), (0, tH.e)(), (0, rH.f)(), (0, zH.f)(), (0, SH.g)(), XH(), Promise.all([LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(155), LH.e(70)]).then((() => LH(42355))).then((HH => {
        let {
          startJoinLoad: BH
        } = HH;
        BH()
      }), (() => {})), CH ??= EH().then((HH => (HH.startWasmPlay(), HH.followPageUiPack((HH => {
        AH.b.showGamePack(HH)
      })), HH)), (HH => {
        throw CH = null, HH
      })), CH
    }

    function YH() {
      return XH(), LH.e(124).then((() => LH(42361))).catch((() => {})), EH().then((() => {}))
    }

    function uH() {
      return EH().then((HH => {
        HH.startWasmPreviews(), HH.prefetchWasmPreviews()
      }))
    }
  },
  9627: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => hH,
      f: () => tH,
      j: () => CH,
      l: () => zH
    });
    var AH = LH(176),
      rH = LH(5037);

    function SH(HH) {
      return hH(HH) === AH.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function hH(HH) {
      return "object" === typeof HH && null !== HH ? HH.code : void 0
    }

    function tH(HH) {
      var BH;
      return null !== (BH = Object.keys(rH.d).find((BH => rH.d[BH] === HH))) && void 0 !== BH ? BH : null
    }

    function zH(HH) {
      return "notWhitelisted" === HH ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const CH = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  9615: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => zH
    });
    var AH = LH(317);

    function rH(HH) {
      if (!HH.startsWith("{")) return HH;
      let BH;
      try {
        BH = JSON.parse(HH)
      } catch {
        return HH
      }
      return function(HH) {
        if (null === (0, AH.Pe)(HH)) return !1;
        const {
          params: BH
        } = HH;
        return void 0 === BH || "object" === typeof BH && null !== BH && Object.values(BH).every((HH => "string" === typeof HH))
      }(BH) ? BH : HH
    }
    var SH = LH(1123),
      hH = LH(1194);

    function tH(HH) {
      return (0, SH.u)(hH.g.get().getCurrentLanguageCode(), HH.translationKey, HH.params)
    }

    function zH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH(BH)
    }

    function CH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH({
        translationKey: "moderation:kicked",
        params: {
          reason: tH(BH)
        }
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);