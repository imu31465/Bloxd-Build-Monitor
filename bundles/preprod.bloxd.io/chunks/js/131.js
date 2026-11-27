export const id = 131;
export const ids = [131, 186];
export const modules = {
  10163: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => Mi
    });
    var mW = OW(1616),
      EW = OW(25),
      NW = OW(5361),
      PW = OW(62),
      LW = OW(1526);
    var cW = OW(2037),
      wW = OW(1605),
      tW = OW(1422),
      ZW = OW(1172),
      xW = OW(10167),
      lW = OW(10176),
      AW = OW(5282),
      bW = OW(154),
      jW = OW(1111),
      UW = OW(27),
      kW = OW(1239),
      sW = OW(1856),
      MW = OW(100),
      KW = OW(1339),
      SW = OW(1515),
      YW = OW(5232),
      yW = OW(5033),
      TW = OW(4984),
      JW = OW(4426),
      hW = OW(3245),
      HW = OW(1365),
      nW = OW(805),
      uW = OW(1220),
      oW = OW(1052),
      dW = OW(1217),
      eW = OW(4464),
      vW = OW(4337),
      gW = OW(1427),
      DW = OW(1383),
      VW = OW(5897),
      pW = OW(10189),
      fW = OW(4031),
      CW = OW(1283);

    function XW(WW) {
      let {
        onApply: iW,
        onSkip: OW
      } = WW;
      const {
        t: mW
      } = (0, ZW.B)();
      return (0, PW.useEffect)((() => {
        fW.d.skipPlayWait()
      }), []), (0, CW.jsx)(gW.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, CW.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [mW("customTexturePack:downloadPrompt"), (0, CW.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: mW("customTexturePack:authorWarning")
          }), (0, CW.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: mW("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: iW
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: OW
        }
      })
    }
    async function BW() {
      let WW = !1;
      const iW = tW.NotificationProvider.showCustomPopup({
        body: iW => (0, CW.jsx)(XW, {
          onApply: () => {
            WW = !0, iW()
          },
          onSkip: iW
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await iW.getResult(), WW
    }
    let qW = {
      wanted: !1
    };
    let RW = null;

    function GW(WW) {
      WW.setGamePackConfirm(BW), RW = WW
    }
    var IW = OW(4723),
      aW = OW(1584),
      rW = OW(39),
      zW = OW(4431);

    function FW(WW) {
      let {
        schematicId: iW,
        texturePackKey: OW,
        onClose: mW
      } = WW;
      const [EW, NW] = (0, PW.useState)("prompt"), [LW, cW] = (0, PW.useState)(null), wW = (0, IW.c)();

      function tW() {
        mW()
      }
      return "prompt" === EW ? (0, CW.jsx)(XW, {
        onApply: async function() {
          NW("downloading");
          try {
            const WW = await async function(WW, iW) {
              const OW = await (0, VW.b)(iW);
              if (OW) return {
                pack: OW,
                key: iW
              };
              const mW = await jW.userContextManager.getCurrentUserContext(),
                EW = (await aW.e.getGame(mW, WW, !0)).customTexturePackKey;
              if (!EW) return null;
              const NW = await (0, VW.b)(EW);
              if (!NW) throw new Error("The texture pack could not be found");
              return {
                pack: NW,
                key: EW
              }
            }(iW, OW);
            if (!wW.current) return;
            if (!WW) return void mW();
            if ((0, eW.q)(WW.pack)) return void NW("refused");
            const EW = vW.d.toJson(),
              PW = vW.d.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (vW.d.setFromJson(WW.pack, "customGame"), await vW.d.saveTemporaryTexturePack(WW.key), wW.current) return void(0, sW.reloadBloxd)();
            vW.d.setFromJson(EW, PW), await (0, zW.p)(rW.f)
          } catch (WW) {
            cW(WW instanceof Error ? WW.message : String(WW)), NW("error")
          }
        },
        onSkip: tW
      }) : "downloading" === EW ? (0, CW.jsx)(gW.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, CW.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, CW.jsx)(DW.d, {
            showFace: !0
          })
        })
      }) : "error" === EW ? (0, CW.jsx)(gW.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: LW,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: tW
        }
      }) : "refused" === EW ? (0, CW.jsx)(gW.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: tW
        }
      }) : null
    }
    var QW = OW(10206),
      Wi = OW(4979),
      ii = OW(1907),
      Oi = OW(10198),
      mi = OW(1888),
      Ei = OW(10209),
      Ni = OW(2276),
      Pi = OW(10215);
    var Li = OW(5417),
      ci = OW(10219),
      wi = OW(1301),
      ti = OW(1850),
      Zi = OW(671),
      xi = OW(10223),
      li = OW(745),
      Ai = OW(1755);

    function bi() {
      const WW = EW.d.get("clientEscMenuOptions");
      cW.gameBridge.send("setLookSensitivity", EW.d.get("isTouchScreen") ? (0, li.s)(WW) : WW.mouseSensitivity)
    }
    const ji = 45e3;

    function Ui(WW) {
      if (null === WW || void 0 === WW || !WW.isError()) return !1;
      const iW = WW.asError();
      return iW.code === bW.k.REQUEST_TO_MATCHMAKING && !(0, ti.c)(iW.debugResult.error)
    }

    function ki(WW) {
      return !0 === (null === WW || void 0 === WW ? void 0 : WW.isError()) && !0 === WW.asError().debugResult.serverWaitEnded
    }
    async function si(WW, iW, OW, mW) {
      const PW = (0, Li.P)(iW);
      async function LW(WW, iW, OW, LW) {
        if (LW.aborted) return null;
        null === EW.d.get("gameEntrySource") && (0, EW.l)("directPlayUrl"), Zi.K && (0, pW.loadWasmPlay)().catch((() => {})), EW.d.set({
          gameState: "findingLobby"
        }), UW.l.iZ("loadingScreenState", "loadingPage:findingLobby");
        const wW = await jW.userContextManager.getCurrentUserContext();
        cW.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: iW,
          discordContext: WW instanceof uW.g ? WW.getSerialisableParams() : null
        });
        const tW = fW.d.playInputAt();
        (0, ii.f)(null !== tW && void 0 !== tW ? tW : performance.now()), mW.fromTap = null !== tW, mW.mark("phase_join_started");
        const ZW = await async function(WW, iW, OW, mW, EW, PW, LW) {
          try {
            await (0, Ai.o)(NW.reqLibsLoadedPromise, ji, "Required libraries timed out")
          } catch (cW) {
            const WW = cW instanceof Ai.g ? `Required libraries still loading after ${ji/1e3} s: ${(0,NW.requiredLibsPending)().join(", ")}` : cW.toString();
            return kW.b.errorWithCode(WW, bW.k.LOAD_REQUIRED_LIBS, {
              error: cW,
              severity: "medium"
            })
          }
          return UW.l.iZ("matchmakeAndPlayStepCompleted", {
            step: bW.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), LW.mark("phase_libs"), (0, NW.matchmakeAndPlayMaybeUnloaded)(WW, iW, OW, mW, EW, PW, LW)
        }(WW, iW, OW, wW, LW, PW, mW), xW = ZW.isError() ? ZW.asError() : null;
        if (LW.aborted) return xW && (0, Ei.h)(ZW), cW.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== xW && void 0 !== xW && xW.debugResult.uW) return console.log("Join cancelled:", xW.message), null;
        if (xW) return ZW;
        const {
          gameNameWithVariation: lW,
          lobbyName: AW
        } = ZW.getValue();
        return bi(), (0, wi.y)().setGameViewShown(!0), wW.recordJoin(lW, AW), (0, KW.K)(), ZW
      }
      return PW && (0, EW.l)("updateRejoin"), (0, Ni.i)((async EW => {
        mW.mark("phase_prepared");
        try {
          var NW;
          let mW = WW,
            cW = await LW(mW, iW, OW, EW);
          for (let WW = 0; PW && WW < Li.n; WW++) {
            if (ki(cW)) {
              if ("string" !== typeof mW || !(0, dW.R)(mW)) break;
              WW = Li.n - 1, (0, ci.i)(EW)
            }
            if (!Ui(cW) || !await (0, Li.T)((0, Li.x)(WW), EW)) break;
            mW = (0, Li.y)(mW, WW + 1, "string" === typeof mW && (0, dW.R)(mW)), cW = await LW(mW, iW, OW, EW)
          }
          return null !== (NW = cW) && void 0 !== NW && NW.isError() && (0, Ei.h)(cW), cW
        } catch (wW) {
          if ((0, mi.reportClientError)("matchmake_failed", wW, "unexpected"), cW.gameBridge.send("leaveGame", {
              reloadPath: EW.aborted ? null : "/"
            }), EW.aborted) return null;
          throw wW
        }
      }), (async WW => {
        var OW;
        if (PW) return;
        const mW = (0, KW.C)();
        null !== mW && (await mW, WW.aborted) || (null !== (OW = nW.d[iW]) && void 0 !== OW && OW.playAdBeforeMatchmaking ? (fW.d.skipPlayWait(), await new Promise((WW => {
          (0, KW.$)((() => {
            WW(!0)
          }), "video_start")
        }))) : (0, KW.$)((() => {}), "video_start"))
      }))
    }

    function Mi() {
      const {
        t: WW
      } = (0, ZW.B)(), iW = (0, wW.useNavigatePreserveSearch)(), OW = (0, mW.u)(), uW = (0, mW.z)(), eW = (0, PW.useRef)({
        t: WW,
        navigate: iW
      });
      eW.current = {
        t: WW,
        navigate: iW
      };
      const gW = (0, PW.useRef)("");
      gW.current = OW.pathname + OW.search;
      const {
        gameState: DW,
        clientEscMenuOptions: VW
      } = (0, EW.p)(["gameState", "clientEscMenuOptions"]), fW = (0, PW.useRef)(null), XW = (0, PW.useRef)(!1), BW = (0, PW.useRef)(!1), [IW, rW] = (0, PW.useState)(0);
      var zW;
      (0, LW.e)(wi.b, (() => {
        BW.current = !0, rW((WW => WW + 1))
      })), (0, PW.useEffect)((() => () => {
        UW.l.iZ("leftPlayPage")
      }), []), (0, Ni.j)(), (0, Ni.m)(), zW = Zi.K, (0, PW.useEffect)((() => {
        if (!zW) return;
        let WW = !0;
        return (0, pW.loadWasmPlay)().then((iW => {
          WW && GW(iW)
        })).catch((() => {})), () => {
          var iW;
          WW = !1, qW.wanted = !1, null === (iW = RW) || void 0 === iW || iW.setGamePackConfirm(null), RW = null
        }
      }), [zW]), (0, PW.useEffect)((() => {
        var WW, iW, mW;
        (0, NW.needGameClientNow)();
        const PW = BW.current;
        BW.current = !1;
        const {
          t: LW,
          navigate: ZW
        } = eW.current, SW = (0, QW.e)(uW, OW.search);
        if (uW.lobbyName && !new URLSearchParams(OW.search).has("lobby")) return void ZW((0, HW.e)(SW.gameNameWithVariation, SW.lobbyName), {
          replace: !0
        });
        let DW = Promise.resolve({
          shouldMatchmake: !0
        });
        const VW = new AbortController;
        if ("/play/discord-custom-lobby" === OW.pathname) {
          const WW = EW.d.get("discordContext");
          if (!WW) return void ZW("/");
          DW = AW.b.setupDiscordLobby(WW, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: WW
          }))).catch((iW => (console.error("Failed to setup discord lobby", iW), {
            shouldMatchmake: !1,
            discordContext: WW
          })))
        } else if (!SW.gameNameWithVariation || !(0, dW.N)(SW.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${SW.gameNameWithVariation}`), void ZW(-1);
        const RW = fW.current;
        if (!PW && null !== RW && SW.gameNameWithVariation === RW.gameNameWithVariation && SW.lobbyName === RW.lobbyName) return;
        if (cW.gameBridge.latest("connectedGame").replay) return void(0, Ni.g)(null);
        if ("releaseCountdown" === (null === (WW = (0, hW.k)(SW.gameNameWithVariation)) || void 0 === WW ? void 0 : WW.type)) return console.error(`Game hasn't been released yet: ${SW.gameNameWithVariation}`), void ZW(-1);
        const IW = XW.current;
        XW.current = !1, (0, KW.E)(), EW.d.set({
          gameState: "loadingScreen"
        });
        const rW = function() {
            qW.wanted = !1;
            const WW = {
              wanted: !0
            };
            return qW = WW, () => WW.wanted
          }(),
          zW = new Oi.e,
          ii = SW.gameNameWithVariation,
          mi = void 0 !== ii && (0, oW.i)(ii);
        let Ei = Promise.resolve();
        if (ii && (Zi.K || mi)) {
          const WW = Zi.K ? Promise.all([(0, pW.loadWasmPlay)(), jW.userContextManager.getCurrentUserContext()]).then((WW => {
            let [iW, OW] = WW;
            if (zW.mark("phase_pack_begin"), rW()) return GW(iW), iW.packForGame(ii, OW, rW)
          })) : async function(WW, iW) {
            await vW.d.indexedDbValuesAreLoaded();
            const OW = await jW.userContextManager.getCurrentUserContext(),
              mW = (0, oW.n)(WW);
            let EW;
            try {
              EW = await aW.e.getGame(OW, mW, !0)
            } catch (cW) {
              return void console.error("Failed to get game", cW)
            }
            if (null !== iW && void 0 !== iW && iW.aborted) return;
            const NW = EW.customTexturePackKey;
            if (!NW) return void(vW.d.isUsingTemporaryTexturePack() && ((0, sW.reloadBloxd)(), await new Promise((() => {}))));
            if (vW.d.isUsingTemporaryTexturePack() && vW.d.getTemporaryTexturePackSource() === NW) return;
            const PW = tW.NotificationProvider.showCustomPopup({
                body: WW => (0, CW.jsx)(FW, {
                  schematicId: mW,
                  texturePackKey: NW,
                  onClose: WW
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              LW = () => {
                PW.tearDownNotification()
              };
            null === iW || void 0 === iW || iW.addEventListener("abort", LW, {
              once: !0
            }), await PW.getResult(), null === iW || void 0 === iW || iW.removeEventListener("abort", LW)
          }(ii, VW.signal), iW = WW.catch((WW => {
            console.error("Failed to check for custom texture pack", WW)
          })).then((() => {
            zW.mark("phase_pack")
          }));
          Ei = iW;
          const OW = Zi.K && !mi ? (0, pW.loadWasmPlay)().catch((() => {})) : iW,
            mW = DW;
          DW = OW.then((() => mW))
        }
        Zi.K && (0, xi.f)(Ei);
        const Li = {
          wasm: Zi.K,
          game: SW.gameNameWithVariation,
          custom: mi,
          lobbyName: null !== (iW = SW.lobbyName) && void 0 !== iW ? iW : null,
          direct: null !== SW.directJoinVmUrl && void 0 !== SW.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === OW.pathname,
          adBeforeMatchmaking: void 0 !== ii && !0 === (null === (mW = nW.d[ii]) || void 0 === mW ? void 0 : mW.playAdBeforeMatchmaking),
          afterAnother: null !== fW.current || (0, Ni.b)()
        };
        (0, Pi.g)(null);
        const ci = !(wi = Li).wasm || void 0 === wi.game || wi.custom || wi.direct || wi.discord || wi.adBeforeMatchmaking || wi.afterAnother ? null : () => {
          ! function(WW, iW, OW) {
            (0, Pi.g)({
              key: (0, Pi.f)(WW, iW),
              settled: Promise.all([NW.matchmakingLibrariesPromise, jW.userContextManager.getCurrentUserContext()]).then((mW => {
                let [EW, NW] = mW;
                if (void 0 === EW.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return OW.mark("phase_ahead_sent"), EW.matchmakeForAhead(WW, iW, NW).then((WW => (OW.mark("phase_ahead_answered", WW.at), WW)))
              })).catch((WW => ({
                result: kW.b.errorWithCode(String(WW), bW.k.REQUEST_TO_MATCHMAKING, {
                  error: WW,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(Li.lobbyName, Li.game, zW)
        };
        var wi;
        const li = null !== fW.current;
        fW.current = null, (0, Ni.g)(null);
        const bi = () => {
          IW ? (0, wW.navigateToHomePage)() : (XW.current = li, ZW(-1))
        };
        let ji = !1;
        const Ui = OW.pathname + OW.search,
          ki = () => !ji && gW.current === Ui;
        return (0, Pi.e)(DW, ci, (WW => {
          let {
            shouldMatchmake: iW,
            discordContext: OW
          } = WW;
          ki() && (zW.mark("phase_gate"), iW ? si(null !== OW && void 0 !== OW ? OW : SW.lobbyName, OW ? "classic" : SW.gameNameWithVariation, SW.directJoinVmUrl, zW).then((WW => {
            if (null !== WW && ki())
              if (WW.isError()) {
                var iW, OW;
                const mW = WW.asError(),
                  NW = null !== (iW = mW.debugResult.severity) && void 0 !== iW ? iW : "high";
                if (UW.l.iZ("joinFailed", {
                    step: null !== (OW = mW.code) && void 0 !== OW ? OW : null,
                    severity: NW
                  }), (0, ti.c)(mW.debugResult.error)) return void ti.f.reload();
                if (mW.code === bW.k.SHADER_PACK) return void(0, Wi.b)(mW.message, ZW);
                const PW = EW.d.get("gameEntrySource"),
                  wW = mW.code === bW.k.INITIALISE_WEBGL ? (0, yW.b)() : null,
                  {
                    error: AW
                  } = mW.debugResult;
                let jW;
                if ((0, lW.b)(LW, mW)) jW = Promise.resolve(!1);
                else if (null !== wW) jW = (0, yW.m)(wW);
                else if (AW instanceof JW.n) jW = (0, TW.d)(AW);
                else {
                  let WW;
                  switch (NW) {
                    case "low":
                      WW = "face-diagonal-mouth";
                      break;
                    case "medium":
                      WW = "face-worried";
                      break;
                    case "high":
                      WW = "face-dizzy"
                  }
                  const iW = AW instanceof Ai.g;
                  let OW = (0, xW.f)(mW.message);
                  iW ? OW = LW("general:gameFilesStalled") : mW.debugResult.gameServerUnreachable && (OW = LW((0, MW.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  jW = tW.NotificationProvider.showPromptPopup({
                    icon: WW,
                    title: bW.E[mW.code],
                    subtitle: (0, CW.jsxs)(CW.Fragment, {
                      children: [OW, AW instanceof Error && !iW && (0, CW.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, CW.jsx)(YW.c, {
                          errorString: AW.stack
                        })
                      })]
                    }),
                    confirmText: LW("general:tryAgain"),
                    cancelText: LW("general:cancel")
                  }).getResult().then((WW => !0 === WW))
                }
                jW.then((WW => {
                  if (WW) {
                    (0, EW.l)(PW);
                    const WW = (0, HW.e)(SW.gameNameWithVariation, SW.lobbyName);
                    "low" === NW ? ZW(WW) : (0, sW.reloadBloxd)(WW)
                  }
                })), cW.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), bi()
              } else {
                const {
                  gameNameWithVariation: iW,
                  lobbyName: OW
                } = WW.getValue();
                fW.current = {
                  gameNameWithVariation: iW,
                  lobbyName: OW
                };
                const mW = (0, HW.e)(iW, OW);
                ZW(mW, {
                  replace: !0
                })
              }
          })).catch((WW => {
            if (!ki()) return;
            UW.l.iZ("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            tW.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, CW.jsxs)(CW.Fragment, {
                children: [LW("homePage:pleaseCopyError"), (0, CW.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, CW.jsx)(YW.c, {
                    errorString: WW.stack
                  })
                })]
              }),
              confirmText: LW("general:tryAgain"),
              cancelText: LW("general:cancel")
            }).getResult().then((WW => {
              !0 === WW && (0, sW.reloadBloxd)((0, HW.e)(SW.gameNameWithVariation, SW.lobbyName))
            })), bi()
          })) : ZW(-1))
        }), ki), () => {
          ji = !0, VW.abort()
        }
      }), [uW, OW.search, OW.pathname, IW]), (0, PW.useEffect)((() => {
        VW.disableFullscreen && (0, SW.h)() ? (0, SW.m)() : !VW.disableFullscreen && (0, SW.j)() && (0, SW.s)({
          automatic: !0
        })
      }), [DW, VW]), (0, PW.useEffect)((() => {
        "inGame" === DW && bi()
      }), [DW, VW]), (0, PW.useEffect)((() => {
        "inGame" !== DW && EW.d.set({
          openInGameMenuName: null
        })
      }), [DW]);
      const ii = function(WW) {
        const iW = (0, EW.i)(WW),
          [OW, mW] = (0, PW.useState)(0),
          [NW, cW] = (0, PW.useState)(!1);
        (0, LW.e)("gameJoined", (() => {
          (0, EW.i)(EW.d.get("gameState")) && (mW((WW => WW + 1)), cW(!0))
        })), (0, PW.useEffect)((() => {
          iW || cW(!1)
        }), [iW]);
        const wW = "inGame" === WW;
        return {
          mounted: wW || iW && NW,
          shown: wW,
          key: OW
        }
      }(DW);
      return (0, CW.jsx)(CW.Fragment, {
        children: ii.mounted && (0, CW.jsx)(NW.InGameUi, {
          shown: ii.shown
        }, ii.key)
      })
    }
  },
  5897: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(1185);
    async function EW(WW) {
      const iW = await fetch(`${mW.clientSideServerUrls.s3Url}/${WW}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === iW.status || 403 === iW.status) return null;
      if (!iW.ok) throw new Error(`Failed to download the texture pack (${iW.status})`);
      return await iW.json()
    }
  },
  10176: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => jW,
      c: () => UW
    });
    var mW = OW(154),
      EW = OW(182),
      NW = OW(1052),
      PW = OW(1065),
      LW = OW(1217),
      cW = OW(2037),
      wW = OW(3245),
      tW = OW(1584),
      ZW = OW(1422),
      xW = OW(1111),
      lW = OW(10181),
      AW = OW(1605),
      bW = OW(1638);

    function jW(WW, iW) {
      const OW = !0 === iW.debugResult.gameRefused,
        NW = OW || iW.code === mW.k.REQUEST_TO_MATCHMAKING ? (0, lW.h)(iW.message) : null;
      if (null !== NW) return KW(WW, WW((0, lW.n)(NW)), WW(lW.k[NW])), !0;
      if (OW) return async function(WW) {
        const {
          gameNameWithVariation: iW,
          lobbyName: OW,
          shownLobbyName: mW
        } = cW.gameBridge.latest("connectedGame"), EW = "classic" === iW && (0, LW.M)(OW) ? mW : await (0, wW.i)(WW, iW, OW);
        return "" !== EW ? WW("general:cantJoinGame", {
          game: EW
        }) : WW("general:cantJoinThisGame")
      }(WW).then((OW => {
        KW(WW, OW, iW.message)
      })), !0;
      const {
        joinFailure: PW
      } = iW.debugResult, tW = "refused" === (null === PW || void 0 === PW ? void 0 : PW.at) ? PW.code : null;
      return tW === EW.e.schematicNotPublished.code ? (async function(WW, iW) {
        const OW = kW(),
          mW = await MW(OW);
        if (null === mW || mW.gamePublished) return void KW(WW, WW("general:cantJoinThisGame"), iW);
        await sW(WW, "rocket-launch", WW("studio:gameNotPublishedTitle", {
          game: mW.name
        }), WW("studio:publishInStudio"), OW)
      }(WW, iW.message), !0) : (tW === EW.e.schematicBanned.code || tW === EW.e.customGameTakenDown.code) && (MW(kW()).then((iW => {
        UW(WW, iW)
      })), !0)
    }

    function UW(WW, iW) {
      !0 !== (null === iW || void 0 === iW ? void 0 : iW.takenDown) ? KW(WW, WW("general:cantJoinThisGame"), EW.e.customGameTakenDown.text) : sW(WW, "lock", WW("studio:gameTakenDownTitle", {
        game: iW.name
      }), WW("studio:viewInStudio"), iW.schematicId)
    }

    function kW() {
      return (0, NW.n)(cW.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function sW(WW, iW, OW, mW, EW) {
      !0 === await ZW.NotificationProvider.showPromptPopup({
        icon: iW,
        title: OW,
        confirmText: mW,
        cancelText: WW("general:cancel")
      }).getResult() && (0, AW.navigatePreserveSearch)((0, bW.v)((0, PW.d)(EW), "manage"))
    }
    async function MW(WW) {
      try {
        return await tW.e.getGame(await xW.userContextManager.getCurrentUserContext(), WW, !0)
      } catch (iW) {
        return (0, tW.f)(iW) || console.error(`Failed to get game ${WW}`, iW), null
      }
    }

    function KW(WW, iW, OW) {
      ZW.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: iW,
        subtitle: OW,
        confirmText: WW("general:ok"),
        cancelText: ""
      })
    }
  },
  10206: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(1365),
      EW = OW(1217),
      NW = OW(643);

    function PW(WW) {
      return WW = function(WW, iW) {
        var OW;
        const mW = new URLSearchParams(iW),
          EW = mW.get("lobby"),
          NW = mW.get("vm"),
          PW = null !== (OW = EW) && void 0 !== OW ? OW : WW.lobbyName,
          LW = null !== NW && void 0 !== NW ? NW : WW.directJoinVmUrl;
        if (PW === WW.lobbyName && LW === WW.directJoinVmUrl) return WW;
        return {
          ...WW,
          lobbyName: PW,
          directJoinVmUrl: LW
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
        if ((0, NW.K)(WW.directJoinVmUrl)) return WW;
        const iW = (0, EW.fb)(WW.directJoinVmUrl);
        null === iW && (WW.directJoinVmUrl = void 0);
        return WW
      }(WW = function(WW) {
        if ((0, NW.K)(WW.gameNameWithVariation)) return WW;
        return WW.gameNameWithVariation = (0, mW.h)(WW.gameNameWithVariation), WW
      }(WW))
    }
  },
  10198: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => PW
    });
    var mW = OW(172);
    class EW {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(WW) || this.marks.set(WW, iW)
      }
      marked() {
        return mW.U.flatMap((WW => {
          var iW;
          const OW = null !== (iW = this.marks.get(WW)) && void 0 !== iW ? iW : NW.marks.get(WW);
          return void 0 === OW ? [] : [
            [WW, OW]
          ]
        }))
      }
    }
    const NW = new EW;

    function PW(WW) {
      NW.mark(WW)
    }
  },
  10223: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => EW
    });
    let mW = Promise.resolve();

    function EW(WW) {
      mW = WW
    }

    function NW() {
      return mW
    }
  },
  10215: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      f: () => EW,
      g: () => NW,
      k: () => PW
    });
    let mW = null;

    function EW(WW, iW) {
      return `${iW}\n${null!==WW&&void 0!==WW?WW:""}`
    }

    function NW(WW) {
      mW = WW
    }

    function PW(WW) {
      const iW = mW;
      return mW = null, null !== iW && iW.key === WW ? iW.settled : null
    }

    function LW(WW, iW, OW, mW) {
      let EW = !1;
      const NW = () => {
        null !== iW && !EW && mW() && (EW = !0, iW())
      };
      null !== iW && setTimeout(NW, 0), WW.then((WW => {
        NW(), OW(WW)
      }))
    }
  },
  10189: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      importClientLoad: () => ZW,
      loadWasmPlay: () => AW,
      loadWasmPlayAhead: () => bW,
      loadWasmPreviews: () => jW
    });
    var mW = OW(4337),
      EW = OW(3153),
      NW = OW(2283),
      PW = OW(5348),
      LW = OW(4746),
      cW = OW(5368),
      wW = OW(10198);
    let tW = null;

    function ZW() {
      return Promise.all([OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(161), OW.e(255), OW.e(71)]).then((() => OW(42198)))
    }

    function xW() {
      return Promise.all([OW.e(88), OW.e(91), OW.e(105), OW.e(240), OW.e(158), OW.e(244), OW.e(222), OW.e(161), OW.e(250), OW.e(242), OW.e(103), OW.e(246), OW.e(255), OW.e(76)]).then((() => OW(42371)))
    }

    function lW() {
      Promise.all([OW.e(85), OW.e(89), OW.e(86), OW.e(87), OW.e(88), OW.e(105), OW.e(102), OW.e(306), OW.e(127), OW.e(280), OW.e(254), OW.e(246), OW.e(55)]).then((() => OW(42495))).catch((() => {}))
    }

    function AW() {
      return PW.b.cancelDownloadForJoin(), (0, LW.c)(), (0, EW.c)(), (0, cW.g)(), (0, NW.h)(), lW(), ZW().then((WW => {
        let {
          startJoinLoad: iW
        } = WW;
        iW()
      }), (() => {})), tW ??= xW().then((WW => ((0, wW.f)("phase_chunk"), WW.startWasmPlay(), (0, wW.f)("phase_start"), WW.followPageUiPack((WW => {
        mW.d.showGamePack(WW)
      })), WW)), (WW => {
        throw tW = null, WW
      })), tW
    }

    function bW() {
      return lW(), OW.e(132).then((() => OW(42537))).catch((() => {})), xW().then((() => {
        (0, wW.f)("phase_chunk")
      }))
    }

    function jW() {
      return xW().then((WW => {
        WW.startWasmPreviews(), WW.prefetchWasmPreviews()
      }))
    }
  },
  10209: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      h: () => tW
    });
    var mW = OW(154),
      EW = OW(1888),
      NW = OW(4426),
      PW = OW(4981),
      LW = OW(1850);
    const cW = new WeakSet;

    function wW(WW) {
      return !0 !== WW.uW && !(0, LW.c)(WW.error)
    }

    function tW(WW) {
      const iW = WW.asError(),
        {
          debugResult: OW
        } = iW;
      if (cW.has(OW) || !wW(OW)) return;
      cW.add(OW), console.log("Failed to join lobby:", iW.message);
      const LW = "timedOut" === OW.gameServerUnreachable;
      (0, EW.reportClientError)("matchmake_failed", iW.message, LW ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : mW.k[iW.code]);
      const {
        error: tW
      } = OW;
      if (tW instanceof NW.n && "default" !== tW.packSource) {
        const WW = (0, PW.e)("js", "game" === tW.packSource ? "game" : "page", (0, PW.h)(tW));
        (0, EW.reportClientError)("texture_pack", tW, WW)
      }
    }
  },
  10181: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      h: () => LW,
      k: () => wW,
      n: () => cW
    });
    var mW = OW(182),
      EW = OW(5318);

    function NW(WW) {
      return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function PW(WW) {
      return "object" === typeof WW && null !== WW ? WW.code : void 0
    }

    function LW(WW) {
      var iW;
      return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
    }

    function cW(WW) {
      return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wW = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10167: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      f: () => cW
    });
    var mW = OW(344);

    function EW(WW) {
      if (!WW.startsWith("{")) return WW;
      let iW;
      try {
        iW = JSON.parse(WW)
      } catch {
        return WW
      }
      return function(WW) {
        if (null === (0, mW.ye)(WW)) return !1;
        const {
          params: iW
        } = WW;
        return void 0 === iW || "object" === typeof iW && null !== iW && Object.values(iW).every((WW => "string" === typeof WW))
      }(iW) ? iW : WW
    }
    var NW = OW(1172),
      PW = OW(1244);

    function LW(WW) {
      return (0, NW.u)(PW.e.get().getCurrentLanguageCode(), WW.translationKey, WW.params)
    }

    function cW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW(iW)
    }

    function wW(WW) {
      const iW = EW(WW);
      return "string" === typeof iW ? iW : LW({
        translationKey: "moderation:kicked",
        params: {
          reason: LW(iW)
        }
      })
    }
  },
  10219: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      i: () => NW,
      j: () => LW
    });
    var mW = OW(1239);
    const EW = new WeakSet;

    function NW(WW) {
      EW.add(WW)
    }
    class PW {
      constructor(WW, iW) {
        this.joinSignal = WW, this.onWaiting = iW, this.deadline = null, this.waits = 0, EW.has(WW) && (this.deadline = performance.now())
      }
      async waitToAskAgain(WW) {
        if (this.joinSignal.aborted) return "left";
        const iW = function(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            const mW = Math.min(Math.max(WW * 2 ** iW, 2e3), 15e3);
            return Math.round(mW * (.75 + .5 * OW()))
          }(WW, this.waits),
          OW = performance.now();
        return this.deadline ??= OW + 18e4, OW + iW > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
          function(WW, iW) {
            if (iW.aborted) return Promise.resolve(!1);
            return new Promise((OW => {
              const mW = () => {
                  clearTimeout(EW), OW(!1)
                },
                EW = setTimeout((() => {
                  iW.removeEventListener("abort", mW), OW(!0)
                }), WW);
              iW.addEventListener("abort", mW, {
                once: !0
              })
            }))
          }(iW, this.joinSignal) ? "again" : "left")
      }
      placed() {
        this.waits > 0 && this.onWaiting(!1)
      }
    }
    async function LW(WW, iW, OW) {
      let EW = WW;
      for (;;) {
        if (!EW.result.isError()) return OW.placed(), EW;
        const WW = EW.result.asError(),
          {
            retryAfterMs: NW,
            ...PW
          } = WW.debugResult;
        if (void 0 === NW) return EW;
        const LW = await OW.waitToAskAgain(NW);
        if ("left" === LW) return null;
        if ("over" === LW) {
          return {
            result: mW.b.errorWithCode(WW.message, WW.code, {
              ...PW,
              serverWaitEnded: !0
            }),
            at: EW.at
          }
        }
        EW = await iW()
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);