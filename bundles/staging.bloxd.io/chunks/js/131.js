export const id = 131;
export const ids = [131, 186];
export const modules = {
  10279: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => AJ
    });
    var yR = GR(1677),
      tR = GR(25),
      uR = GR(5463),
      ZR = GR(66),
      qR = GR(1581);
    var iR = GR(2134),
      fR = GR(1663),
      VR = GR(1493),
      KR = GR(1270),
      wR = GR(10285),
      rR = GR(10291),
      eR = GR(5392),
      aR = GR(163),
      LR = GR(1201),
      nR = GR(32),
      UR = GR(1341),
      WR = GR(1943),
      AR = GR(103),
      CR = GR(1444),
      XR = GR(1570),
      MR = GR(5332),
      BR = GR(5134),
      lR = GR(5084),
      pR = GR(4509),
      gR = GR(3357),
      bR = GR(1459),
      vR = GR(858),
      OR = GR(1322),
      xR = GR(1127),
      NR = GR(1317),
      DR = GR(4571),
      HR = GR(4422),
      oR = GR(1496),
      cR = GR(1465),
      PR = GR(6028),
      IR = GR(10303),
      mR = GR(4124),
      zR = GR(1378);

    function SR(RR) {
      let {
        onApply: JR,
        onSkip: GR
      } = RR;
      const {
        t: yR
      } = (0, KR.A)();
      return (0, ZR.useEffect)((() => {
        mR.g.skipPlayWait()
      }), []), (0, zR.jsx)(oR.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, zR.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [yR("customTexturePack:downloadPrompt"), (0, zR.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: yR("customTexturePack:authorWarning")
          }), (0, zR.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: yR("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: JR
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: GR
        }
      })
    }
    async function jR() {
      let RR = !1;
      const JR = VR.NotificationProvider.showCustomPopup({
        body: JR => (0, zR.jsx)(SR, {
          onApply: () => {
            RR = !0, JR()
          },
          onSkip: JR
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await JR.getResult(), RR
    }
    let dR = {
      wanted: !1
    };
    let ER = null;

    function YR(RR) {
      RR.setGamePackConfirm(jR), ER = RR
    }
    var kR = GR(4829),
      QR = GR(1647),
      FR = GR(46),
      TR = GR(4521);

    function sR(RR) {
      let {
        schematicId: JR,
        texturePackKey: GR,
        onClose: yR
      } = RR;
      const [tR, uR] = (0, ZR.useState)("prompt"), [qR, iR] = (0, ZR.useState)(null), fR = (0, kR.d)();

      function VR() {
        yR()
      }
      return "prompt" === tR ? (0, zR.jsx)(SR, {
        onApply: async function() {
          uR("downloading");
          try {
            const RR = await async function(RR, JR) {
              const GR = await (0, PR.c)(JR);
              if (GR) return {
                pack: GR,
                key: JR
              };
              const yR = await LR.userContextManager.getCurrentUserContext(),
                tR = (await QR.c.getGame(yR, RR, !0)).customTexturePackKey;
              if (!tR) return null;
              const uR = await (0, PR.c)(tR);
              if (!uR) throw new Error("The texture pack could not be found");
              return {
                pack: uR,
                key: tR
              }
            }(JR, GR);
            if (!fR.current) return;
            if (!RR) return void yR();
            if ((0, DR.k)(RR.pack)) return void uR("refused");
            const tR = HR.b.toJson(),
              ZR = HR.b.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (HR.b.setFromJson(RR.pack, "customGame"), await HR.b.saveTemporaryTexturePack(RR.key), fR.current) return void(0, WR.reloadBloxd)();
            HR.b.setFromJson(tR, ZR), await (0, TR.q)(FR.g)
          } catch (RR) {
            iR(RR instanceof Error ? RR.message : String(RR)), uR("error")
          }
        },
        onSkip: VR
      }) : "downloading" === tR ? (0, zR.jsx)(oR.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, zR.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, zR.jsx)(cR.d, {
            showFace: !0
          })
        })
      }) : "error" === tR ? (0, zR.jsx)(oR.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: qR,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: VR
        }
      }) : "refused" === tR ? (0, zR.jsx)(oR.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: VR
        }
      }) : null
    }
    var hR = GR(10315),
      RJ = GR(5073),
      JJ = GR(1984),
      GJ = GR(10311),
      yJ = GR(1972),
      tJ = GR(10320),
      uJ = GR(2358),
      ZJ = GR(10325);
    var qJ = GR(5536),
      iJ = GR(10332),
      fJ = GR(1397),
      VJ = GR(1939),
      KJ = GR(709),
      wJ = GR(10336),
      rJ = GR(798),
      eJ = GR(1825);

    function aJ() {
      const RR = tR.d.get("clientEscMenuOptions");
      iR.gameBridge.send("setLookSensitivity", tR.d.get("isTouchScreen") ? (0, rJ.x)(RR) : RR.mouseSensitivity)
    }
    const LJ = 45e3;

    function nJ(RR) {
      if (null === RR || void 0 === RR || !RR.isError()) return !1;
      const JR = RR.asError();
      return JR.code === aR.j.REQUEST_TO_MATCHMAKING && !(0, VJ.b)(JR.debugResult.error)
    }

    function UJ(RR) {
      return !0 === (null === RR || void 0 === RR ? void 0 : RR.isError()) && !0 === RR.asError().debugResult.serverWaitEnded
    }
    async function WJ(RR, JR, GR, yR) {
      const ZR = (0, qJ.K)(JR);
      async function qR(RR, JR, GR, qR) {
        if (qR.aborted) return null;
        null === tR.d.get("gameEntrySource") && (0, tR.k)("directPlayUrl"), KJ.G && (0, IR.loadWasmPlay)().catch((() => {})), tR.d.set({
          gameState: "findingLobby"
        }), nR.n.JK("loadingScreenState", "loadingPage:findingLobby");
        const fR = await LR.userContextManager.getCurrentUserContext();
        iR.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: JR,
          discordContext: RR instanceof OR.h ? RR.getSerialisableParams() : null
        });
        const VR = mR.g.playInputAt();
        (0, JJ.f)(null !== VR && void 0 !== VR ? VR : performance.now()), yR.fromTap = null !== VR, yR.mark("phase_join_started");
        const KR = await async function(RR, JR, GR, yR, tR, ZR, qR) {
          try {
            await (0, eJ.k)(uR.reqLibsLoadedPromise, LJ, "Required libraries timed out")
          } catch (iR) {
            const RR = iR instanceof eJ.g ? `Required libraries still loading after ${LJ/1e3} s: ${(0,uR.requiredLibsPending)().join(", ")}` : iR.toString();
            return UR.e.errorWithCode(RR, aR.j.LOAD_REQUIRED_LIBS, {
              error: iR,
              severity: "medium"
            })
          }
          return nR.n.JK("matchmakeAndPlayStepCompleted", {
            step: aR.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), qR.mark("phase_libs"), (0, uR.matchmakeAndPlayMaybeUnloaded)(RR, JR, GR, yR, tR, ZR, qR)
        }(RR, JR, GR, fR, qR, ZR, yR), wR = KR.isError() ? KR.asError() : null;
        if (qR.aborted) return wR && (0, tJ.f)(KR), iR.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== wR && void 0 !== wR && wR.debugResult.xR) return console.log("Join cancelled:", wR.message), null;
        if (wR) return KR;
        const {
          gameNameWithVariation: rR,
          lobbyName: eR
        } = KR.getValue();
        return aJ(), (0, fJ.J)().setGameViewShown(!0), fR.recordJoin(rR, eR), (0, CR.P)(), KR
      }
      return ZR && (0, tR.k)("updateRejoin"), (0, uJ.k)((async tR => {
        yR.mark("phase_prepared");
        try {
          var uR;
          let yR = RR,
            iR = await qR(yR, JR, GR, tR);
          for (let RR = 0; ZR && RR < qJ.m; RR++) {
            if (UJ(iR)) {
              if ("string" !== typeof yR || !(0, NR.E)(yR)) break;
              RR = qJ.m - 1, (0, iJ.f)(tR)
            }
            if (!nJ(iR) || !await (0, qJ.L)((0, qJ.w)(RR), tR)) break;
            yR = (0, qJ.x)(yR, RR + 1, "string" === typeof yR && (0, NR.E)(yR)), iR = await qR(yR, JR, GR, tR)
          }
          return null !== (uR = iR) && void 0 !== uR && uR.isError() && (0, tJ.f)(iR), iR
        } catch (fR) {
          if ((0, yJ.reportClientError)("matchmake_failed", fR, "unexpected"), iR.gameBridge.send("leaveGame", {
              reloadPath: tR.aborted ? null : "/"
            }), tR.aborted) return null;
          throw fR
        }
      }), (async RR => {
        var GR;
        if (ZR) return;
        const yR = (0, CR.G)();
        null !== yR && (await yR, RR.aborted) || (null !== (GR = vR.b[JR]) && void 0 !== GR && GR.playAdBeforeMatchmaking ? (mR.g.skipPlayWait(), await new Promise((RR => {
          (0, CR.ib)((() => {
            RR(!0)
          }), "video_start")
        }))) : (0, CR.ib)((() => {}), "video_start"))
      }))
    }

    function AJ() {
      const {
        t: RR
      } = (0, KR.A)(), JR = (0, fR.useNavigatePreserveSearch)(), GR = (0, yR.r)(), OR = (0, yR.x)(), DR = (0, ZR.useRef)({
        t: RR,
        navigate: JR
      });
      DR.current = {
        t: RR,
        navigate: JR
      };
      const oR = (0, ZR.useRef)("");
      oR.current = GR.pathname + GR.search;
      const {
        gameState: cR,
        clientEscMenuOptions: PR
      } = (0, tR.o)(["gameState", "clientEscMenuOptions"]), mR = (0, ZR.useRef)(null), SR = (0, ZR.useRef)(!1), jR = (0, ZR.useRef)(!1), [kR, FR] = (0, ZR.useState)(0);
      var TR;
      (0, qR.f)(fJ.b, (() => {
        jR.current = !0, FR((RR => RR + 1))
      })), (0, ZR.useEffect)((() => () => {
        nR.n.JK("leftPlayPage")
      }), []), (0, uJ.n)(), (0, uJ.r)(), TR = KJ.G, (0, ZR.useEffect)((() => {
        if (!TR) return;
        let RR = !0;
        return (0, IR.loadWasmPlay)().then((JR => {
          RR && YR(JR)
        })).catch((() => {})), () => {
          var JR;
          RR = !1, dR.wanted = !1, null === (JR = ER) || void 0 === JR || JR.setGamePackConfirm(null), ER = null
        }
      }), [TR]), (0, ZR.useEffect)((() => {
        var RR, JR, yR;
        (0, uR.needGameClientNow)();
        const ZR = jR.current;
        jR.current = !1;
        const {
          t: qR,
          navigate: KR
        } = DR.current, XR = (0, hR.b)(OR, GR.search);
        if (OR.lobbyName && !new URLSearchParams(GR.search).has("lobby")) return void KR((0, bR.e)(XR.gameNameWithVariation, XR.lobbyName), {
          replace: !0
        });
        let cR = Promise.resolve({
          shouldMatchmake: !0
        });
        const PR = new AbortController;
        if ("/play/discord-custom-lobby" === GR.pathname) {
          const RR = tR.d.get("discordContext");
          if (!RR) return void KR("/");
          cR = eR.c.setupDiscordLobby(RR, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: RR
          }))).catch((JR => (console.error("Failed to setup discord lobby", JR), {
            shouldMatchmake: !1,
            discordContext: RR
          })))
        } else if (!XR.gameNameWithVariation || !(0, NR.D)(XR.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${XR.gameNameWithVariation}`), void KR(-1);
        const ER = mR.current;
        if (!ZR && null !== ER && XR.gameNameWithVariation === ER.gameNameWithVariation && XR.lobbyName === ER.lobbyName) return;
        if (iR.gameBridge.latest("connectedGame").replay) return void(0, uJ.g)(null);
        if ("releaseCountdown" === (null === (RR = (0, gR.g)(XR.gameNameWithVariation)) || void 0 === RR ? void 0 : RR.type)) return console.error(`Game hasn't been released yet: ${XR.gameNameWithVariation}`), void KR(-1);
        const kR = SR.current;
        SR.current = !1, (0, CR.J)(), tR.d.set({
          gameState: "loadingScreen"
        });
        const FR = function() {
            dR.wanted = !1;
            const RR = {
              wanted: !0
            };
            return dR = RR, () => RR.wanted
          }(),
          TR = new GJ.e,
          JJ = XR.gameNameWithVariation,
          yJ = void 0 !== JJ && (0, xR.n)(JJ);
        let tJ = Promise.resolve();
        if (JJ && (KJ.G || yJ)) {
          const RR = KJ.G ? Promise.all([(0, IR.loadWasmPlay)(), LR.userContextManager.getCurrentUserContext()]).then((RR => {
            let [JR, GR] = RR;
            if (TR.mark("phase_pack_begin"), FR()) return YR(JR), JR.packForGame(JJ, GR, FR)
          })) : async function(RR, JR) {
            await HR.b.indexedDbValuesAreLoaded();
            const GR = await LR.userContextManager.getCurrentUserContext(),
              yR = (0, xR.s)(RR);
            let tR;
            try {
              tR = await QR.c.getGame(GR, yR, !0)
            } catch (iR) {
              return void console.error("Failed to get game", iR)
            }
            if (null !== JR && void 0 !== JR && JR.aborted) return;
            const uR = tR.customTexturePackKey;
            if (!uR) return void(HR.b.isUsingTemporaryTexturePack() && ((0, WR.reloadBloxd)(), await new Promise((() => {}))));
            if (HR.b.isUsingTemporaryTexturePack() && HR.b.getTemporaryTexturePackSource() === uR) return;
            const ZR = VR.NotificationProvider.showCustomPopup({
                body: RR => (0, zR.jsx)(sR, {
                  schematicId: yR,
                  texturePackKey: uR,
                  onClose: RR
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              qR = () => {
                ZR.tearDownNotification()
              };
            null === JR || void 0 === JR || JR.addEventListener("abort", qR, {
              once: !0
            }), await ZR.getResult(), null === JR || void 0 === JR || JR.removeEventListener("abort", qR)
          }(JJ, PR.signal), JR = RR.catch((RR => {
            console.error("Failed to check for custom texture pack", RR)
          })).then((() => {
            TR.mark("phase_pack")
          }));
          tJ = JR;
          const GR = KJ.G && !yJ ? (0, IR.loadWasmPlay)().catch((() => {})) : JR,
            yR = cR;
          cR = GR.then((() => yR))
        }
        KJ.G && (0, wJ.h)(tJ);
        const qJ = {
          wasm: KJ.G,
          game: XR.gameNameWithVariation,
          custom: yJ,
          lobbyName: null !== (JR = XR.lobbyName) && void 0 !== JR ? JR : null,
          direct: null !== XR.directJoinVmUrl && void 0 !== XR.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === GR.pathname,
          adBeforeMatchmaking: void 0 !== JJ && !0 === (null === (yR = vR.b[JJ]) || void 0 === yR ? void 0 : yR.playAdBeforeMatchmaking),
          afterAnother: null !== mR.current || (0, uJ.c)()
        };
        (0, ZJ.f)(null);
        const iJ = !(fJ = qJ).wasm || void 0 === fJ.game || fJ.custom || fJ.direct || fJ.discord || fJ.adBeforeMatchmaking || fJ.afterAnother ? null : () => {
          ! function(RR, JR, GR) {
            (0, ZJ.f)({
              key: (0, ZJ.e)(RR, JR),
              settled: Promise.all([uR.matchmakingLibrariesPromise, LR.userContextManager.getCurrentUserContext()]).then((yR => {
                let [tR, uR] = yR;
                if (void 0 === tR.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return GR.mark("phase_ahead_sent"), tR.matchmakeForAhead(RR, JR, uR).then((RR => (GR.mark("phase_ahead_answered", RR.at), RR)))
              })).catch((RR => ({
                result: UR.e.errorWithCode(String(RR), aR.j.REQUEST_TO_MATCHMAKING, {
                  error: RR,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(qJ.lobbyName, qJ.game, TR)
        };
        var fJ;
        const rJ = null !== mR.current;
        mR.current = null, (0, uJ.g)(null);
        const aJ = () => {
          kR ? (0, fR.navigateToHomePage)() : (SR.current = rJ, KR(-1))
        };
        let LJ = !1;
        const nJ = GR.pathname + GR.search,
          UJ = () => !LJ && oR.current === nJ;
        return (0, ZJ.c)(cR, iJ, (RR => {
          let {
            shouldMatchmake: JR,
            discordContext: GR
          } = RR;
          UJ() && (TR.mark("phase_gate"), JR ? WJ(null !== GR && void 0 !== GR ? GR : XR.lobbyName, GR ? "classic" : XR.gameNameWithVariation, XR.directJoinVmUrl, TR).then((RR => {
            if (null !== RR && UJ())
              if (RR.isError()) {
                var JR, GR;
                const yR = RR.asError(),
                  uR = null !== (JR = yR.debugResult.severity) && void 0 !== JR ? JR : "high";
                if (nR.n.JK("joinFailed", {
                    step: null !== (GR = yR.code) && void 0 !== GR ? GR : null,
                    severity: uR
                  }), (0, VJ.b)(yR.debugResult.error)) return void VJ.e.reload();
                if (yR.code === aR.j.SHADER_PACK) return void(0, RJ.c)(yR.message, KR);
                const ZR = tR.d.get("gameEntrySource"),
                  fR = yR.code === aR.j.INITIALISE_WEBGL ? (0, BR.b)() : null,
                  {
                    error: eR
                  } = yR.debugResult;
                let LR;
                if ((0, rR.e)(qR, yR)) LR = Promise.resolve(!1);
                else if (null !== fR) LR = (0, BR.l)(fR);
                else if (eR instanceof pR.h) LR = (0, lR.c)(eR);
                else {
                  let RR;
                  switch (uR) {
                    case "low":
                      RR = "face-diagonal-mouth";
                      break;
                    case "medium":
                      RR = "face-worried";
                      break;
                    case "high":
                      RR = "face-dizzy"
                  }
                  const JR = eR instanceof eJ.g;
                  let GR = (0, wR.e)(yR.message);
                  JR ? GR = qR("general:gameFilesStalled") : yR.debugResult.gameServerUnreachable && (GR = qR((0, AR.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  LR = VR.NotificationProvider.showPromptPopup({
                    icon: RR,
                    title: aR.C[yR.code],
                    subtitle: (0, zR.jsxs)(zR.Fragment, {
                      children: [GR, eR instanceof Error && !JR && (0, zR.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, zR.jsx)(MR.e, {
                          errorString: eR.stack
                        })
                      })]
                    }),
                    confirmText: qR("general:tryAgain"),
                    cancelText: qR("general:cancel")
                  }).getResult().then((RR => !0 === RR))
                }
                LR.then((RR => {
                  if (RR) {
                    (0, tR.k)(ZR);
                    const RR = (0, bR.e)(XR.gameNameWithVariation, XR.lobbyName);
                    "low" === uR ? KR(RR) : (0, WR.reloadBloxd)(RR)
                  }
                })), iR.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), aJ()
              } else {
                const {
                  gameNameWithVariation: JR,
                  lobbyName: GR
                } = RR.getValue();
                mR.current = {
                  gameNameWithVariation: JR,
                  lobbyName: GR
                };
                const yR = (0, bR.e)(JR, GR);
                KR(yR, {
                  replace: !0
                })
              }
          })).catch((RR => {
            if (!UJ()) return;
            nR.n.JK("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            VR.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, zR.jsxs)(zR.Fragment, {
                children: [qR("homePage:pleaseCopyError"), (0, zR.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, zR.jsx)(MR.e, {
                    errorString: RR.stack
                  })
                })]
              }),
              confirmText: qR("general:tryAgain"),
              cancelText: qR("general:cancel")
            }).getResult().then((RR => {
              !0 === RR && (0, WR.reloadBloxd)((0, bR.e)(XR.gameNameWithVariation, XR.lobbyName))
            })), aJ()
          })) : KR(-1))
        }), UJ), () => {
          LJ = !0, PR.abort()
        }
      }), [OR, GR.search, GR.pathname, kR]), (0, ZR.useEffect)((() => {
        PR.disableFullscreen && (0, XR.i)() ? (0, XR.o)() : !PR.disableFullscreen && (0, XR.l)() && (0, XR.v)({
          automatic: !0
        })
      }), [cR, PR]), (0, ZR.useEffect)((() => {
        "inGame" === cR && aJ()
      }), [cR, PR]), (0, ZR.useEffect)((() => {
        "inGame" !== cR && tR.d.set({
          openInGameMenuName: null
        })
      }), [cR]);
      const JJ = function(RR) {
        const JR = (0, tR.j)(RR),
          [GR, yR] = (0, ZR.useState)(0),
          [uR, iR] = (0, ZR.useState)(!1);
        (0, qR.f)("gameJoined", (() => {
          (0, tR.j)(tR.d.get("gameState")) && (yR((RR => RR + 1)), iR(!0))
        })), (0, ZR.useEffect)((() => {
          JR || iR(!1)
        }), [JR]);
        const fR = "inGame" === RR;
        return {
          mounted: fR || JR && uR,
          shown: fR,
          key: GR
        }
      }(cR);
      return (0, zR.jsx)(zR.Fragment, {
        children: JJ.mounted && (0, zR.jsx)(uR.InGameUi, {
          shown: JJ.shown
        }, JJ.key)
      })
    }
  },
  6028: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(1282);
    async function tR(RR) {
      const JR = await fetch(`${yR.clientSideServerUrls.s3Url}/${RR}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === JR.status || 403 === JR.status) return null;
      if (!JR.ok) throw new Error(`Failed to download the texture pack (${JR.status})`);
      return await JR.json()
    }
  },
  10291: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      i: () => nR
    });
    var yR = GR(163),
      tR = GR(203),
      uR = GR(1127),
      ZR = GR(1141),
      qR = GR(1317),
      iR = GR(2134),
      fR = GR(3357),
      VR = GR(1647),
      KR = GR(1493),
      wR = GR(1201),
      rR = GR(10298),
      eR = GR(1663),
      aR = GR(1695);

    function LR(RR, JR) {
      const GR = !0 === JR.debugResult.gameRefused,
        uR = GR || JR.code === yR.j.REQUEST_TO_MATCHMAKING ? (0, rR.k)(JR.message) : null;
      if (null !== uR) return CR(RR, RR((0, rR.p)(uR)), RR(rR.n[uR])), !0;
      if (GR) return async function(RR) {
        const {
          gameNameWithVariation: JR,
          lobbyName: GR,
          shownLobbyName: yR
        } = iR.gameBridge.latest("connectedGame"), tR = "classic" === JR && (0, qR.A)(GR) ? yR : await (0, fR.d)(RR, JR, GR);
        return "" !== tR ? RR("general:cantJoinGame", {
          game: tR
        }) : RR("general:cantJoinThisGame")
      }(RR).then((GR => {
        CR(RR, GR, JR.message)
      })), !0;
      const {
        joinFailure: ZR
      } = JR.debugResult, VR = "refused" === (null === ZR || void 0 === ZR ? void 0 : ZR.at) ? ZR.code : null;
      return VR === tR.e.schematicNotPublished.code ? (async function(RR, JR) {
        const GR = UR(),
          yR = await AR(GR);
        if (null === yR || yR.gamePublished) return void CR(RR, RR("general:cantJoinThisGame"), JR);
        await WR(RR, "rocket-launch", RR("studio:gameNotPublishedTitle", {
          game: yR.name
        }), RR("studio:publishInStudio"), GR)
      }(RR, JR.message), !0) : (VR === tR.e.schematicBanned.code || VR === tR.e.customGameTakenDown.code) && (AR(UR()).then((JR => {
        nR(RR, JR)
      })), !0)
    }

    function nR(RR, JR) {
      !0 !== (null === JR || void 0 === JR ? void 0 : JR.takenDown) ? CR(RR, RR("general:cantJoinThisGame"), tR.e.customGameTakenDown.text) : WR(RR, "lock", RR("studio:gameTakenDownTitle", {
        game: JR.name
      }), RR("studio:viewInStudio"), JR.schematicId)
    }

    function UR() {
      return (0, uR.s)(iR.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function WR(RR, JR, GR, yR, tR) {
      !0 === await KR.NotificationProvider.showPromptPopup({
        icon: JR,
        title: GR,
        confirmText: yR,
        cancelText: RR("general:cancel")
      }).getResult() && (0, eR.navigatePreserveSearch)((0, aR.p)((0, ZR.d)(tR), "manage"))
    }
    async function AR(RR) {
      try {
        return await VR.c.getGame(await wR.userContextManager.getCurrentUserContext(), RR, !0)
      } catch (JR) {
        return (0, VR.g)(JR) || console.error(`Failed to get game ${RR}`, JR), null
      }
    }

    function CR(RR, JR, GR) {
      KR.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: JR,
        subtitle: GR,
        confirmText: RR("general:ok"),
        cancelText: ""
      })
    }
  },
  10315: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(1459),
      tR = GR(1317),
      uR = GR(679);

    function ZR(RR) {
      return RR = function(RR, JR) {
        var GR;
        const yR = new URLSearchParams(JR),
          tR = yR.get("lobby"),
          uR = yR.get("vm"),
          ZR = null !== (GR = tR) && void 0 !== GR ? GR : RR.lobbyName,
          qR = null !== uR && void 0 !== uR ? uR : RR.directJoinVmUrl;
        if (ZR === RR.lobbyName && qR === RR.directJoinVmUrl) return RR;
        return {
          ...RR,
          lobbyName: ZR,
          directJoinVmUrl: qR
        }
      }(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), RR = function(RR) {
        if ((0, uR.I)(RR.directJoinVmUrl)) return RR;
        const JR = (0, tR.S)(RR.directJoinVmUrl);
        null === JR && (RR.directJoinVmUrl = void 0);
        return RR
      }(RR = function(RR) {
        if ((0, uR.I)(RR.gameNameWithVariation)) return RR;
        return RR.gameNameWithVariation = (0, yR.j)(RR.gameNameWithVariation), RR
      }(RR))
    }
  },
  10311: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR,
      f: () => ZR
    });
    var yR = GR(188);
    class tR {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(RR) || this.marks.set(RR, JR)
      }
      marked() {
        return yR.T.flatMap((RR => {
          var JR;
          const GR = null !== (JR = this.marks.get(RR)) && void 0 !== JR ? JR : uR.marks.get(RR);
          return void 0 === GR ? [] : [
            [RR, GR]
          ]
        }))
      }
    }
    const uR = new tR;

    function ZR(RR) {
      uR.mark(RR)
    }
  },
  10336: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => tR
    });
    let yR = Promise.resolve();

    function tR(RR) {
      yR = RR
    }

    function uR() {
      return yR
    }
  },
  10325: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => tR,
      f: () => uR,
      g: () => ZR
    });
    let yR = null;

    function tR(RR, JR) {
      return `${JR}\n${null!==RR&&void 0!==RR?RR:""}`
    }

    function uR(RR) {
      yR = RR
    }

    function ZR(RR) {
      const JR = yR;
      return yR = null, null !== JR && JR.key === RR ? JR.settled : null
    }

    function qR(RR, JR, GR, yR) {
      let tR = !1;
      const uR = () => {
        null !== JR && !tR && yR() && (tR = !0, JR())
      };
      null !== JR && setTimeout(uR, 0), RR.then((RR => {
        uR(), GR(RR)
      }))
    }
  },
  10303: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      importClientLoad: () => KR,
      loadWasmPlay: () => eR,
      loadWasmPlayAhead: () => aR,
      loadWasmPreviews: () => LR
    });
    var yR = GR(4422),
      tR = GR(3243),
      uR = GR(2363),
      ZR = GR(5452),
      qR = GR(4850),
      iR = GR(5467),
      fR = GR(10311);
    let VR = null;

    function KR() {
      return Promise.all([GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(161), GR.e(255), GR.e(71)]).then((() => GR(42208)))
    }

    function wR() {
      return Promise.all([GR.e(88), GR.e(91), GR.e(105), GR.e(240), GR.e(158), GR.e(244), GR.e(222), GR.e(161), GR.e(250), GR.e(242), GR.e(103), GR.e(246), GR.e(255), GR.e(76)]).then((() => GR(42387)))
    }

    function rR() {
      Promise.all([GR.e(85), GR.e(89), GR.e(86), GR.e(87), GR.e(88), GR.e(105), GR.e(102), GR.e(306), GR.e(127), GR.e(280), GR.e(254), GR.e(246), GR.e(55)]).then((() => GR(42538))).catch((() => {}))
    }

    function eR() {
      return ZR.e.cancelDownloadForJoin(), (0, qR.e)(), (0, tR.d)(), (0, iR.h)(), (0, uR.i)(), rR(), KR().then((RR => {
        let {
          startJoinLoad: JR
        } = RR;
        JR()
      }), (() => {})), VR ??= wR().then((RR => ((0, fR.f)("phase_chunk"), RR.startWasmPlay(), (0, fR.f)("phase_start"), RR.followPageUiPack((RR => {
        yR.b.showGamePack(RR)
      })), RR)), (RR => {
        throw VR = null, RR
      })), VR
    }

    function aR() {
      return rR(), GR.e(132).then((() => GR(42579))).catch((() => {})), wR().then((() => {
        (0, fR.f)("phase_chunk")
      }))
    }

    function LR() {
      return wR().then((RR => {
        RR.startWasmPreviews(), RR.prefetchWasmPreviews()
      }))
    }
  },
  10320: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      f: () => VR
    });
    var yR = GR(163),
      tR = GR(1972),
      uR = GR(4509),
      ZR = GR(5081),
      qR = GR(1939);
    const iR = new WeakSet;

    function fR(RR) {
      return !0 !== RR.xR && !(0, qR.b)(RR.error)
    }

    function VR(RR) {
      const JR = RR.asError(),
        {
          debugResult: GR
        } = JR;
      if (iR.has(GR) || !fR(GR)) return;
      iR.add(GR), console.log("Failed to join lobby:", JR.message);
      const qR = "timedOut" === GR.gameServerUnreachable;
      (0, tR.reportClientError)("matchmake_failed", JR.message, qR ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : yR.j[JR.code]);
      const {
        error: VR
      } = GR;
      if (VR instanceof uR.h && "default" !== VR.packSource) {
        const RR = (0, ZR.g)("js", "game" === VR.packSource ? "game" : "page", (0, ZR.i)(VR));
        (0, tR.reportClientError)("texture_pack", VR, RR)
      }
    }
  },
  10298: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => ZR,
      k: () => qR,
      n: () => fR,
      p: () => iR
    });
    var yR = GR(203),
      tR = GR(5425);

    function uR(RR) {
      return ZR(RR) === yR.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function ZR(RR) {
      return "object" === typeof RR && null !== RR ? RR.code : void 0
    }

    function qR(RR) {
      var JR;
      return null !== (JR = Object.keys(tR.d).find((JR => tR.d[JR] === RR))) && void 0 !== JR ? JR : null
    }

    function iR(RR) {
      return "notWhitelisted" === RR ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fR = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10285: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => fR,
      e: () => iR
    });
    var yR = GR(377);

    function tR(RR) {
      if (!RR.startsWith("{")) return RR;
      let JR;
      try {
        JR = JSON.parse(RR)
      } catch {
        return RR
      }
      return function(RR) {
        if (null === (0, yR.Ee)(RR)) return !1;
        const {
          params: JR
        } = RR;
        return void 0 === JR || "object" === typeof JR && null !== JR && Object.values(JR).every((RR => "string" === typeof RR))
      }(JR) ? JR : RR
    }
    var uR = GR(1270),
      ZR = GR(1343);

    function qR(RR) {
      return (0, uR.w)(ZR.g.get().getCurrentLanguageCode(), RR.translationKey, RR.params)
    }

    function iR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR(JR)
    }

    function fR(RR) {
      const JR = tR(RR);
      return "string" === typeof JR ? JR : qR({
        translationKey: "moderation:kicked",
        params: {
          reason: qR(JR)
        }
      })
    }
  },
  10332: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      f: () => uR,
      i: () => qR
    });
    var yR = GR(1341);
    const tR = new WeakSet;

    function uR(RR) {
      tR.add(RR)
    }
    class ZR {
      constructor(RR, JR) {
        this.joinSignal = RR, this.onWaiting = JR, this.deadline = null, this.waits = 0, tR.has(RR) && (this.deadline = performance.now())
      }
      async waitToAskAgain(RR) {
        if (this.joinSignal.aborted) return "left";
        const JR = function(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            const yR = Math.min(Math.max(RR * 2 ** JR, 2e3), 15e3);
            return Math.round(yR * (.75 + .5 * GR()))
          }(RR, this.waits),
          GR = performance.now();
        return this.deadline ??= GR + 18e4, GR + JR > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
          function(RR, JR) {
            if (JR.aborted) return Promise.resolve(!1);
            return new Promise((GR => {
              const yR = () => {
                  clearTimeout(tR), GR(!1)
                },
                tR = setTimeout((() => {
                  JR.removeEventListener("abort", yR), GR(!0)
                }), RR);
              JR.addEventListener("abort", yR, {
                once: !0
              })
            }))
          }(JR, this.joinSignal) ? "again" : "left")
      }
      placed() {
        this.waits > 0 && this.onWaiting(!1)
      }
    }
    async function qR(RR, JR, GR) {
      let tR = RR;
      for (;;) {
        if (!tR.result.isError()) return GR.placed(), tR;
        const RR = tR.result.asError(),
          {
            retryAfterMs: uR,
            ...ZR
          } = RR.debugResult;
        if (void 0 === uR) return tR;
        const qR = await GR.waitToAskAgain(uR);
        if ("left" === qR) return null;
        if ("over" === qR) {
          return {
            result: yR.e.errorWithCode(RR.message, RR.code, {
              ...ZR,
              serverWaitEnded: !0
            }),
            at: tR.at
          }
        }
        tR = await JR()
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);