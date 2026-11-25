export const id = 124;
export const ids = [124];
export const modules = {
  9502: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => Gr
    });
    var OM = iM(1608),
      SM = iM(19),
      jM = iM(5035),
      aM = iM(44),
      PM = iM(1516);
    var nM = iM(2039),
      QM = iM(1591),
      zM = iM(1429),
      LM = iM(1188),
      mM = iM(143),
      HM = iM(181),
      hM = iM(1073),
      JM = iM(1088),
      dM = iM(1229),
      yM = iM(2482),
      lM = iM(1573),
      EM = iM(1144),
      UM = iM(9510),
      GM = iM(1627);

    function CM(MM, rM) {
      const iM = !0 === rM.debugResult.gameRefused,
        OM = iM || rM.code === mM.n.REQUEST_TO_MATCHMAKING ? (0, UM.h)(rM.message) : null;
      if (null !== OM) return eM(MM, MM((0, UM.p)(OM)), MM(UM.l[OM])), !0;
      if (iM) return async function(MM) {
        const {
          gameNameWithVariation: rM,
          lobbyName: iM,
          shownLobbyName: OM
        } = nM.gameBridge.latest("connectedGame"), SM = "classic" === rM && (0, dM.J)(iM) ? OM : await (0, yM.g)(MM, rM, iM);
        return "" !== SM ? MM("general:cantJoinGame", {
          game: SM
        }) : MM("general:cantJoinThisGame")
      }(MM).then((iM => {
        eM(MM, iM, rM.message)
      })), !0;
      const {
        joinFailure: SM
      } = rM.debugResult, jM = "refused" === (null === SM || void 0 === SM ? void 0 : SM.at) ? SM.code : null;
      return jM === HM.d.schematicNotPublished.code ? (async function(MM, rM) {
        const iM = (0, hM.p)(nM.gameBridge.latest("connectedGame").gameNameWithVariation),
          OM = await async function(MM) {
            try {
              const rM = await lM.c.getGame(await EM.userContextManager.getCurrentUserContext(), MM, !0);
              return rM.gamePublished ? null : rM.name
            } catch (rM) {
              return rM instanceof mM.e && 435 === rM.httpCode || console.error(`Failed to get unpublished game ${MM}`, rM), null
            }
          }(iM);
        if (null === OM) return void eM(MM, MM("general:cantJoinThisGame"), rM);
        const SM = await zM.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: MM("studio:gameNotPublishedTitle", {
            game: OM
          }),
          confirmText: MM("studio:publishInStudio"),
          cancelText: MM("general:cancel")
        }).getResult();
        !0 === SM && (0, QM.navigatePreserveSearch)((0, GM.p)((0, JM.d)(iM), "manage"))
      }(MM, rM.message), !0) : jM === HM.d.schematicBanned.code && (eM(MM, MM("general:cantJoinThisGame"), rM.message), !0)
    }

    function eM(MM, rM, iM) {
      zM.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: rM,
        subtitle: iM,
        confirmText: MM("general:ok"),
        cancelText: ""
      })
    }
    var bM = iM(4961),
      wM = iM(22),
      tM = iM(1251),
      gM = iM(1830),
      uM = iM(83),
      RM = iM(1360),
      pM = iM(1503),
      WM = iM(4913),
      sM = iM(4711),
      DM = iM(4662),
      kM = iM(3647),
      ZM = iM(1382),
      oM = iM(821),
      fM = iM(1232),
      YM = iM(3706),
      NM = iM(3563),
      AM = iM(1438),
      xM = iM(1396),
      vM = iM(5388),
      FM = iM(9514),
      BM = iM(3297),
      XM = iM(1303);

    function IM(MM) {
      let {
        onApply: rM,
        onSkip: iM
      } = MM;
      const {
        t: OM
      } = (0, LM.A)();
      return (0, aM.useEffect)((() => {
        BM.c.skipPlayWait()
      }), []), (0, XM.jsx)(AM.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, XM.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [OM("customTexturePack:downloadPrompt"), (0, XM.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: OM("customTexturePack:authorWarning")
          }), (0, XM.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: OM("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: rM
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: iM
        }
      })
    }
    async function KM() {
      let MM = !1;
      const rM = zM.NotificationProvider.showCustomPopup({
        body: rM => (0, XM.jsx)(IM, {
          onApply: () => {
            MM = !0, rM()
          },
          onSkip: rM
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await rM.getResult(), MM
    }
    let qM = {
      wanted: !1
    };
    let TM = null;

    function VM(MM) {
      MM.setGamePackConfirm(KM), TM = MM
    }
    var cM = iM(3881),
      Mr = iM(30),
      rr = iM(3657);

    function ir(MM) {
      let {
        schematicId: rM,
        texturePackKey: iM,
        onClose: OM
      } = MM;
      const [SM, jM] = (0, aM.useState)("prompt"), [PM, nM] = (0, aM.useState)(null), QM = (0, cM.b)();

      function zM() {
        OM()
      }
      return "prompt" === SM ? (0, XM.jsx)(IM, {
        onApply: async function() {
          jM("downloading");
          try {
            const MM = await async function(MM, rM) {
              const iM = await (0, vM.d)(rM);
              if (iM) return {
                pack: iM,
                key: rM
              };
              const OM = await EM.userContextManager.getCurrentUserContext(),
                SM = (await lM.c.getGame(OM, MM, !0)).customTexturePackKey;
              if (!SM) return null;
              const jM = await (0, vM.d)(SM);
              if (!jM) throw new Error("The texture pack could not be found");
              return {
                pack: jM,
                key: SM
              }
            }(rM, iM);
            if (!QM.current) return;
            if (!MM) return void OM();
            if ((0, YM.h)(MM.pack)) return void jM("refused");
            const SM = NM.e.toJson(),
              aM = NM.e.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (NM.e.setFromJson(MM.pack, "customGame"), await NM.e.saveTemporaryTexturePack(MM.key), QM.current) return void(0, gM.reloadBloxd)();
            NM.e.setFromJson(SM, aM), await (0, rr.k)(Mr.f)
          } catch (MM) {
            nM(MM instanceof Error ? MM.message : String(MM)), jM("error")
          }
        },
        onSkip: zM
      }) : "downloading" === SM ? (0, XM.jsx)(AM.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, XM.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, XM.jsx)(xM.d, {
            showFace: !0
          })
        })
      }) : "error" === SM ? (0, XM.jsx)(AM.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: PM,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: zM
        }
      }) : "refused" === SM ? (0, XM.jsx)(AM.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: zM
        }
      }) : null
    }
    var Or = iM(9525),
      Sr = iM(4647),
      jr = iM(1871),
      ar = iM(3258),
      Pr = iM(4654),
      nr = iM(2252),
      Qr = iM(9530);
    var zr = iM(5052),
      Lr = iM(1327),
      mr = iM(1826),
      Hr = iM(656),
      hr = iM(766),
      Jr = iM(1899);

    function dr() {
      const MM = SM.d.get("clientEscMenuOptions");
      nM.gameBridge.send("setLookSensitivity", SM.d.get("isTouchScreen") ? (0, hr.t)(MM) : MM.mouseSensitivity)
    }
    const yr = 45e3;

    function lr(MM) {
      const rM = MM.asError();
      if (rM.debugResult.Ti || (0, mr.c)(rM.debugResult.error)) return;
      console.log("Failed to join lobby:", rM.message);
      const iM = "timedOut" === rM.debugResult.gameServerUnreachable;
      (0, ar.reportClientError)("matchmake_failed", rM.message, iM ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : mM.n[rM.code]);
      const {
        error: OM
      } = rM.debugResult;
      if (OM instanceof kM.k && "default" !== OM.packSource) {
        const MM = (0, Pr.e)("js", "game" === OM.packSource ? "game" : "page", (0, Pr.h)(OM));
        (0, ar.reportClientError)("texture_pack", OM, MM)
      }
    }

    function Er(MM) {
      if (null === MM || void 0 === MM || !MM.isError()) return !1;
      const rM = MM.asError();
      return rM.code === mM.n.REQUEST_TO_MATCHMAKING && !(0, mr.c)(rM.debugResult.error)
    }
    async function Ur(MM, rM, iM) {
      const OM = (0, zr.M)(rM);
      async function aM(MM, rM, iM, OM) {
        var aM;
        if (OM.aborted) return null;
        null === SM.d.get("gameEntrySource") && (0, SM.j)("directPlayUrl"), Hr.H && (0, FM.f)().catch((() => {})), SM.d.set({
          gameState: "findingLobby"
        }), wM.i.Tz("loadingScreenState", "loadingPage:findingLobby");
        const PM = await EM.userContextManager.getCurrentUserContext();
        nM.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: rM,
          discordContext: MM instanceof fM.e ? MM.getSerialisableParams() : null
        }), (0, jr.d)(null !== (aM = BM.c.playInputAt()) && void 0 !== aM ? aM : performance.now());
        const QM = await async function(MM, rM, iM, OM, SM) {
          try {
            await (0, Jr.n)(jM.reqLibsLoadedPromise, yr, "Required libraries timed out")
          } catch (aM) {
            const MM = aM instanceof Jr.h ? `Required libraries still loading after ${yr/1e3} s: ${(0,jM.requiredLibsPending)().join(", ")}` : aM.toString();
            return tM.b.errorWithCode(MM, mM.n.LOAD_REQUIRED_LIBS, {
              error: aM,
              severity: "medium"
            })
          }
          return wM.i.Tz("matchmakeAndPlayStepCompleted", {
            step: mM.n.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, jM.matchmakeAndPlayMaybeUnloaded)(MM, rM, iM, OM, SM)
        }(MM, rM, iM, PM, OM), zM = QM.isError() ? QM.asError() : null;
        if (OM.aborted) return zM && lr(QM), nM.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== zM && void 0 !== zM && zM.debugResult.Ti) return console.log("Join cancelled:", zM.message), null;
        if (zM) return QM;
        const {
          gameNameWithVariation: LM,
          lobbyName: HM
        } = QM.getValue();
        return dr(), (0, Lr.M)().setGameViewShown(!0), PM.recordJoin(LM, HM), (0, RM.I)(), QM
      }
      return OM && (0, SM.j)("updateRejoin"), (0, nr.h)((async SM => {
        try {
          var jM;
          let PM = MM,
            nM = await aM(PM, rM, iM, SM);
          for (let MM = 0; OM && MM < zr.l && (Er(nM) && await (0, zr.O)((0, zr.x)(MM), SM)); MM++) PM = (0, zr.z)(PM, MM + 1, "string" === typeof PM && (0, dM.P)(PM)), nM = await aM(PM, rM, iM, SM);
          return null !== (jM = nM) && void 0 !== jM && jM.isError() && lr(nM), nM
        } catch (PM) {
          if ((0, ar.reportClientError)("matchmake_failed", PM, "unexpected"), nM.gameBridge.send("leaveGame", {
              reloadPath: SM.aborted ? null : "/"
            }), SM.aborted) return null;
          throw PM
        }
      }), (async MM => {
        var iM;
        if (OM) return;
        const SM = (0, RM.y)();
        null !== SM && (await SM, MM.aborted) || (null !== (iM = oM.e[rM]) && void 0 !== iM && iM.playAdBeforeMatchmaking ? (BM.c.skipPlayWait(), await new Promise((MM => {
          (0, RM.bb)((() => {
            MM(!0)
          }), "video_start")
        }))) : (0, RM.bb)((() => {}), "video_start"))
      }))
    }

    function Gr() {
      const {
        t: MM
      } = (0, LM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), HM = (0, OM.D)(), JM = (0, aM.useRef)({
        t: MM,
        navigate: rM
      });
      JM.current = {
        t: MM,
        navigate: rM
      };
      const UM = (0, aM.useRef)("");
      UM.current = iM.pathname + iM.search;
      const {
        gameState: GM,
        clientEscMenuOptions: eM
      } = (0, SM.m)(["gameState", "clientEscMenuOptions"]), fM = (0, aM.useRef)(null), YM = (0, aM.useRef)(!1);
      var AM;
      (0, aM.useEffect)((() => () => {
        wM.i.Tz("leftPlayPage")
      }), []), (0, nr.j)(), (0, nr.m)(), AM = Hr.H, (0, aM.useEffect)((() => {
        if (!AM) return;
        let MM = !0;
        return (0, FM.f)().then((rM => {
          MM && VM(rM)
        })).catch((() => {})), () => {
          var rM;
          MM = !1, qM.wanted = !1, null === (rM = TM) || void 0 === rM || rM.setGamePackConfirm(null), TM = null
        }
      }), [AM]), (0, aM.useEffect)((() => {
        var MM, rM, OM;
        (0, jM.needGameClientNow)();
        const {
          t: aM,
          navigate: PM
        } = JM.current, LM = (0, Or.d)(HM, iM.search);
        if (HM.lobbyName && !new URLSearchParams(iM.search).has("lobby")) return void PM((0, ZM.b)(LM.gameNameWithVariation, LM.lobbyName), {
          replace: !0
        });
        let GM = Promise.resolve({
          shouldMatchmake: !0
        });
        const eM = new AbortController;
        if ("/play/discord-custom-lobby" === iM.pathname) {
          const MM = SM.d.get("discordContext");
          if (!MM) return void PM("/");
          GM = bM.b.setupDiscordLobby(MM, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: MM
          }))).catch((rM => (console.error("Failed to setup discord lobby", rM), {
            shouldMatchmake: !1,
            discordContext: MM
          })))
        } else if (!LM.gameNameWithVariation || !(0, dM.L)(LM.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${LM.gameNameWithVariation}`), void PM(-1);
        const pM = fM.current;
        if (null !== pM && LM.gameNameWithVariation === pM.gameNameWithVariation && LM.lobbyName === pM.lobbyName) return;
        if (nM.gameBridge.latest("connectedGame").replay) return void(0, nr.g)(null);
        if ("releaseCountdown" === (null === (MM = (0, yM.j)(LM.gameNameWithVariation)) || void 0 === MM ? void 0 : MM.type)) return console.error(`Game hasn't been released yet: ${LM.gameNameWithVariation}`), void PM(-1);
        const AM = YM.current;
        YM.current = !1, (0, RM.B)(), SM.d.set({
          gameState: "loadingScreen"
        });
        const xM = function() {
            qM.wanted = !1;
            const MM = {
              wanted: !0
            };
            return qM = MM, () => MM.wanted
          }(),
          vM = LM.gameNameWithVariation;
        if (vM && (Hr.H || (0, hM.m)(vM))) {
          const MM = Hr.H ? Promise.all([(0, FM.f)(), EM.userContextManager.getCurrentUserContext()]).then((MM => {
            let [rM, iM] = MM;
            if (xM()) return VM(rM), rM.packForGame(vM, iM, xM)
          })) : async function(MM, rM) {
            await NM.e.indexedDbValuesAreLoaded();
            const iM = await EM.userContextManager.getCurrentUserContext(),
              OM = (0, hM.p)(MM);
            let SM;
            try {
              SM = await lM.c.getGame(iM, OM, !0)
            } catch (nM) {
              return void console.error("Failed to get game", nM)
            }
            if (null !== rM && void 0 !== rM && rM.aborted) return;
            const jM = SM.customTexturePackKey;
            if (!jM) return void(NM.e.isUsingTemporaryTexturePack() && ((0, gM.reloadBloxd)(), await new Promise((() => {}))));
            if (NM.e.isUsingTemporaryTexturePack() && NM.e.getTemporaryTexturePackSource() === jM) return;
            const aM = zM.NotificationProvider.showCustomPopup({
                body: MM => (0, XM.jsx)(ir, {
                  schematicId: OM,
                  texturePackKey: jM,
                  onClose: MM
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              PM = () => {
                aM.tearDownNotification()
              };
            null === rM || void 0 === rM || rM.addEventListener("abort", PM, {
              once: !0
            }), await aM.getResult(), null === rM || void 0 === rM || rM.removeEventListener("abort", PM)
          }(vM, eM.signal), rM = GM;
          GM = MM.catch((MM => {
            console.error("Failed to check for custom texture pack", MM)
          })).then((() => rM))
        }
        const BM = {
          wasm: Hr.H,
          game: LM.gameNameWithVariation,
          custom: void 0 !== vM && (0, hM.m)(vM),
          lobbyName: null !== (rM = LM.lobbyName) && void 0 !== rM ? rM : null,
          direct: null !== LM.directJoinVmUrl && void 0 !== LM.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === iM.pathname,
          adBeforeMatchmaking: void 0 !== vM && !0 === (null === (OM = oM.e[vM]) || void 0 === OM ? void 0 : OM.playAdBeforeMatchmaking),
          afterAnother: null !== fM.current || (0, nr.d)()
        };
        (0, Qr.i)(null);
        const IM = !(KM = BM).wasm || void 0 === KM.game || KM.custom || KM.direct || KM.discord || KM.adBeforeMatchmaking || KM.afterAnother ? null : () => {
          ! function(MM, rM) {
            (0, Qr.i)({
              key: (0, Qr.g)(MM, rM),
              settled: Promise.all([jM.matchmakingLibrariesPromise, EM.userContextManager.getCurrentUserContext()]).then((iM => {
                let [OM, SM] = iM;
                if (void 0 === OM.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return OM.matchmakeForAhead(MM, rM, SM)
              })).catch((MM => ({
                result: tM.b.errorWithCode(String(MM), mM.n.REQUEST_TO_MATCHMAKING, {
                  error: MM,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(BM.lobbyName, BM.game)
        };
        var KM;
        const TM = null !== fM.current;
        fM.current = null, (0, nr.g)(null);
        const cM = () => {
          AM ? (0, QM.navigateToHomePage)() : (YM.current = TM, PM(-1))
        };
        let Mr = !1;
        const rr = iM.pathname + iM.search,
          jr = () => !Mr && UM.current === rr;
        return (0, Qr.e)(GM, IM, (MM => {
          let {
            shouldMatchmake: rM,
            discordContext: iM
          } = MM;
          jr() && (rM ? Ur(null !== iM && void 0 !== iM ? iM : LM.lobbyName, iM ? "classic" : LM.gameNameWithVariation, LM.directJoinVmUrl).then((MM => {
            if (null !== MM && jr())
              if (MM.isError()) {
                var rM, iM;
                const OM = MM.asError(),
                  jM = null !== (rM = OM.debugResult.severity) && void 0 !== rM ? rM : "high";
                if (wM.i.Tz("joinFailed", {
                    step: null !== (iM = OM.code) && void 0 !== iM ? iM : null,
                    severity: jM
                  }), (0, mr.c)(OM.debugResult.error)) return void mr.d.reload();
                if (OM.code === mM.n.SHADER_PACK) return void(0, Sr.e)(OM.message, PM);
                const QM = SM.d.get("gameEntrySource"),
                  HM = OM.code === mM.n.INITIALISE_WEBGL ? (0, sM.b)() : null,
                  {
                    error: hM
                  } = OM.debugResult;
                let JM;
                if (CM(aM, OM)) JM = Promise.resolve(!1);
                else if (null !== HM) JM = (0, sM.h)(HM);
                else if (hM instanceof kM.k) JM = (0, DM.f)(hM);
                else {
                  let MM;
                  switch (jM) {
                    case "low":
                      MM = "face-diagonal-mouth";
                      break;
                    case "medium":
                      MM = "face-worried";
                      break;
                    case "high":
                      MM = "face-dizzy"
                  }
                  const rM = hM instanceof Jr.h;
                  let iM = OM.message;
                  rM ? iM = aM("general:gameFilesStalled") : OM.debugResult.gameServerUnreachable && (iM = aM((0, uM.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  JM = zM.NotificationProvider.showPromptPopup({
                    icon: MM,
                    title: mM.E[OM.code],
                    subtitle: (0, XM.jsxs)(XM.Fragment, {
                      children: [iM, hM instanceof Error && !rM && (0, XM.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, XM.jsx)(WM.d, {
                          errorString: hM.stack
                        })
                      })]
                    }),
                    confirmText: aM("general:tryAgain"),
                    cancelText: aM("general:cancel")
                  }).getResult().then((MM => !0 === MM))
                }
                JM.then((MM => {
                  if (MM) {
                    (0, SM.j)(QM);
                    const MM = (0, ZM.b)(LM.gameNameWithVariation, LM.lobbyName);
                    "low" === jM ? PM(MM) : (0, gM.reloadBloxd)(MM)
                  }
                })), nM.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), cM()
              } else {
                const {
                  gameNameWithVariation: rM,
                  lobbyName: iM
                } = MM.getValue();
                fM.current = {
                  gameNameWithVariation: rM,
                  lobbyName: iM
                };
                const OM = (0, ZM.b)(rM, iM);
                PM(OM, {
                  replace: !0
                })
              }
          })).catch((MM => {
            if (!jr()) return;
            wM.i.Tz("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            zM.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, XM.jsxs)(XM.Fragment, {
                children: [aM("homePage:pleaseCopyError"), (0, XM.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, XM.jsx)(WM.d, {
                    errorString: MM.stack
                  })
                })]
              }),
              confirmText: aM("general:tryAgain"),
              cancelText: aM("general:cancel")
            }).getResult().then((MM => {
              !0 === MM && (0, gM.reloadBloxd)((0, ZM.b)(LM.gameNameWithVariation, LM.lobbyName))
            })), cM()
          })) : PM(-1))
        }), jr), () => {
          Mr = !0, eM.abort()
        }
      }), [HM, iM.search, iM.pathname]), (0, aM.useEffect)((() => {
        eM.disableFullscreen && (0, pM.f)() ? (0, pM.n)() : !eM.disableFullscreen && (0, pM.j)() && (0, pM.r)({
          automatic: !0
        })
      }), [GM, eM]), (0, aM.useEffect)((() => {
        "inGame" === GM && dr()
      }), [GM, eM]), (0, aM.useEffect)((() => {
        "inGame" !== GM && SM.d.set({
          openInGameMenuName: null
        })
      }), [GM]);
      const xM = function(MM) {
        const rM = (0, SM.i)(MM),
          [iM, OM] = (0, aM.useState)(0),
          [jM, nM] = (0, aM.useState)(!1);
        (0, PM.d)("gameJoined", (() => {
          (0, SM.i)(SM.d.get("gameState")) && (OM((MM => MM + 1)), nM(!0))
        })), (0, aM.useEffect)((() => {
          rM || nM(!1)
        }), [rM]);
        const QM = "inGame" === MM;
        return {
          mounted: QM || rM && jM,
          shown: QM,
          key: iM
        }
      }(GM);
      return (0, XM.jsx)(XM.Fragment, {
        children: xM.mounted && (0, XM.jsx)(jM.InGameUi, {
          shown: xM.shown
        }, xM.key)
      })
    }
  },
  5388: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(1202);
    async function SM(MM) {
      const rM = await fetch(`${OM.clientSideServerUrls.s3Url}/${MM}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === rM.status || 403 === rM.status) return null;
      if (!rM.ok) throw new Error(`Failed to download the texture pack (${rM.status})`);
      return await rM.json()
    }
  },
  9525: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(1382),
      SM = iM(1229),
      jM = iM(625);

    function aM(MM) {
      return MM = function(MM, rM) {
        var iM;
        const OM = new URLSearchParams(rM),
          SM = OM.get("lobby"),
          jM = OM.get("vm"),
          aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
          PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
        if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
        return {
          ...MM,
          lobbyName: aM,
          directJoinVmUrl: PM
        }
      }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
        if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
        const rM = (0, SM.bb)(MM.directJoinVmUrl);
        null === rM && (MM.directJoinVmUrl = void 0);
        return MM
      }(MM = function(MM) {
        if ((0, jM.J)(MM.gameNameWithVariation)) return MM;
        return MM.gameNameWithVariation = (0, OM.h)(MM.gameNameWithVariation), MM
      }(MM))
    }
  },
  9517: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    let OM = !1;

    function SM() {
      OM = !0
    }

    function jM() {
      return OM
    }
  },
  9530: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      g: () => SM,
      i: () => jM,
      l: () => aM
    });
    let OM = null;

    function SM(MM, rM) {
      return `${rM}\n${null!==MM&&void 0!==MM?MM:""}`
    }

    function jM(MM) {
      OM = MM
    }

    function aM(MM) {
      const rM = OM;
      return OM = null, null !== rM && rM.key === MM ? rM.settled : null
    }

    function PM(MM, rM, iM, OM) {
      let SM = !1;
      null !== rM && setTimeout((() => {
        OM() && !SM && rM()
      }), 0), MM.then((MM => {
        SM = !0, iM(MM)
      }))
    }
  },
  9514: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      f: () => mM,
      h: () => hM
    });
    var OM = iM(3563),
      SM = iM(2414),
      jM = iM(2257),
      aM = iM(5022),
      PM = iM(3902),
      nM = iM(9517);
    let QM = null;

    function zM() {
      return Promise.all([iM.e(86), iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(174), iM.e(222), iM.e(150), iM.e(153), iM.e(101), iM.e(298), iM.e(75)]).then((() => iM(41755)))
    }

    function LM() {
      Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).catch((() => {}))
    }

    function mM() {
      return aM.e.cancelDownloadForJoin(), (0, PM.b)(), (0, SM.c)(), (0, nM.e)(), (0, jM.j)(), LM(), Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((MM => {
        let {
          startJoinLoad: rM
        } = MM;
        rM()
      }), (() => {})), QM ??= zM().then((MM => (MM.startWasmPlay(), MM.followPageUiPack((MM => {
        OM.e.showGamePack(MM)
      })), MM)), (MM => {
        throw QM = null, MM
      })), QM
    }

    function HM() {
      return LM(), iM.e(299).then((() => iM(42165))).catch((() => {})), zM().then((() => {}))
    }

    function hM() {
      return zM().then((MM => {
        MM.startWasmPreviews(), MM.prefetchWasmPreviews()
      }))
    }
  },
  9510: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      f: () => aM,
      h: () => PM,
      l: () => QM,
      p: () => nM
    });
    var OM = iM(181),
      SM = iM(5003);

    function jM(MM) {
      return aM(MM) === OM.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function aM(MM) {
      return "object" === typeof MM && null !== MM ? MM.code : void 0
    }

    function PM(MM) {
      var rM;
      return null !== (rM = Object.keys(SM.e).find((rM => SM.e[rM] === MM))) && void 0 !== rM ? rM : null
    }

    function nM(MM) {
      return "notWhitelisted" === MM ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const QM = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);