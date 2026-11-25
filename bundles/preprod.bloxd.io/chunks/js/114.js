export const id = 114;
export const ids = [114];
export const modules = {
  9276: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => pW
    });
    var wQ = XQ(1581),
      qQ = XQ(26),
      TQ = XQ(4973),
      zQ = XQ(61),
      sQ = XQ(1498);
    var FQ = XQ(2003),
      PQ = XQ(1567),
      gQ = XQ(1404),
      JQ = XQ(1226),
      rQ = XQ(193),
      IQ = XQ(231),
      jQ = XQ(1049),
      BQ = XQ(1057),
      yQ = XQ(1257),
      VQ = XQ(2447),
      DQ = XQ(1548),
      pQ = XQ(1165),
      GQ = XQ(9285),
      UQ = XQ(1601);

    function bQ(QQ, WQ) {
      const XQ = !0 === WQ.debugResult.gameRefused,
        wQ = XQ || WQ.code === rQ.h.REQUEST_TO_MATCHMAKING ? (0, GQ.j)(WQ.message) : null;
      if (null !== wQ) return vQ(QQ, QQ((0, GQ.n)(wQ)), QQ(GQ.k[wQ])), !0;
      if (XQ) return async function(QQ) {
        const {
          gameNameWithVariation: WQ,
          lobbyName: XQ,
          shownLobbyName: wQ
        } = FQ.gameBridge.latest("connectedGame"), qQ = "classic" === WQ && (0, yQ.D)(XQ) ? wQ : await (0, VQ.d)(QQ, WQ, XQ);
        return "" !== qQ ? QQ("general:cantJoinGame", {
          game: qQ
        }) : QQ("general:cantJoinThisGame")
      }(QQ).then((XQ => {
        vQ(QQ, XQ, WQ.message)
      })), !0;
      const {
        joinFailure: qQ
      } = WQ.debugResult, TQ = "refused" === (null === qQ || void 0 === qQ ? void 0 : qQ.at) ? qQ.code : null;
      return TQ === IQ.e.schematicNotPublished.code ? (async function(QQ, WQ) {
        const XQ = (0, jQ.n)(FQ.gameBridge.latest("connectedGame").gameNameWithVariation),
          wQ = await async function(QQ) {
            try {
              const WQ = await DQ.e.getGame(await pQ.userContextManager.getCurrentUserContext(), QQ, !0);
              return WQ.gamePublished ? null : WQ.name
            } catch (WQ) {
              return WQ instanceof rQ.b && 435 === WQ.httpCode || console.error(`Failed to get unpublished game ${QQ}`, WQ), null
            }
          }(XQ);
        if (null === wQ) return void vQ(QQ, QQ("general:cantJoinThisGame"), WQ);
        const qQ = await gQ.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: QQ("studio:gameNotPublishedTitle", {
            game: wQ
          }),
          confirmText: QQ("studio:publishInStudio"),
          cancelText: QQ("general:cancel")
        }).getResult();
        !0 === qQ && (0, PQ.navigatePreserveSearch)((0, UQ.m)((0, BQ.b)(XQ), "manage"))
      }(QQ, WQ.message), !0) : TQ === IQ.e.schematicBanned.code && (vQ(QQ, QQ("general:cantJoinThisGame"), WQ.message), !0)
    }

    function vQ(QQ, WQ, XQ) {
      gQ.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: WQ,
        subtitle: XQ,
        confirmText: QQ("general:ok"),
        cancelText: ""
      })
    }
    var dQ = XQ(4912),
      HQ = XQ(31),
      aQ = XQ(1280),
      lQ = XQ(1802),
      hQ = XQ(105),
      iQ = XQ(1360),
      cQ = XQ(1488),
      AQ = XQ(4842),
      RQ = XQ(4667),
      EQ = XQ(4619),
      CQ = XQ(3514),
      uQ = XQ(1384),
      LQ = XQ(814),
      kQ = XQ(1263),
      fQ = XQ(3566),
      SQ = XQ(3424),
      tQ = XQ(1407),
      oQ = XQ(1391),
      eQ = XQ(5340),
      nQ = XQ(9293),
      xQ = XQ(3209),
      YQ = XQ(1145);

    function NQ(QQ) {
      let {
        onApply: WQ,
        onSkip: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, JQ.C)();
      return (0, zQ.useEffect)((() => {
        xQ.g.skipPlayWait()
      }), []), (0, YQ.jsx)(tQ.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, YQ.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [wQ("customTexturePack:downloadPrompt"), (0, YQ.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: wQ("customTexturePack:authorWarning")
          }), (0, YQ.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: wQ("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: WQ
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: XQ
        }
      })
    }
    async function ZQ() {
      let QQ = !1;
      const WQ = gQ.NotificationProvider.showCustomPopup({
        body: WQ => (0, YQ.jsx)(NQ, {
          onApply: () => {
            QQ = !0, WQ()
          },
          onSkip: WQ
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await WQ.getResult(), QQ
    }
    let OQ = {
      wanted: !1
    };
    let KQ = null;

    function mQ(QQ) {
      QQ.setGamePackConfirm(ZQ), KQ = QQ
    }
    var MQ = XQ(3736);

    function QW(QQ) {
      let {
        schematicId: WQ,
        texturePackKey: XQ,
        onClose: wQ
      } = QQ;
      const [qQ, TQ] = (0, zQ.useState)("prompt"), [sQ, FQ] = (0, zQ.useState)(null), PQ = (0, MQ.d)();

      function gQ() {
        wQ()
      }
      return "prompt" === qQ ? (0, YQ.jsx)(NQ, {
        onApply: async function() {
          TQ("downloading");
          try {
            const QQ = await async function(QQ, WQ) {
              const XQ = await (0, eQ.e)(WQ);
              if (XQ) return {
                pack: XQ,
                key: WQ
              };
              const wQ = await pQ.userContextManager.getCurrentUserContext(),
                qQ = (await DQ.e.getGame(wQ, QQ, !0)).customTexturePackKey;
              if (!qQ) return null;
              const TQ = await (0, eQ.e)(qQ);
              if (!TQ) throw new Error("The texture pack could not be found");
              return {
                pack: TQ,
                key: qQ
              }
            }(WQ, XQ);
            if (!PQ.current) return;
            if (!QQ) return void wQ();
            if ((0, fQ.l)(QQ.pack)) return void TQ("refused");
            SQ.d.setFromJson(QQ.pack, "customGame"), await SQ.d.saveTemporaryTexturePack(QQ.key), PQ.current && (0, lQ.reloadBloxd)()
          } catch (QQ) {
            FQ(QQ instanceof Error ? QQ.message : String(QQ)), TQ("error")
          }
        },
        onSkip: gQ
      }) : "downloading" === qQ ? (0, YQ.jsx)(tQ.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, YQ.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, YQ.jsx)(oQ.e, {
            showFace: !0
          })
        })
      }) : "error" === qQ ? (0, YQ.jsx)(tQ.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: sQ,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: gQ
        }
      }) : "refused" === qQ ? (0, YQ.jsx)(tQ.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: gQ
        }
      }) : null
    }
    var WW = XQ(9297),
      XW = XQ(4603),
      wW = XQ(1830),
      qW = XQ(3176),
      TW = XQ(4610),
      zW = XQ(2203),
      sW = XQ(9306);
    var FW = XQ(4992),
      PW = XQ(1345),
      gW = XQ(1795),
      JW = XQ(691),
      rW = XQ(761),
      IW = XQ(1854);

    function jW() {
      const QQ = qQ.b.get("clientEscMenuOptions");
      FQ.gameBridge.send("setLookSensitivity", qQ.b.get("isTouchScreen") ? (0, rW.u)(QQ) : QQ.mouseSensitivity)
    }
    const BW = 45e3;

    function yW(QQ) {
      const WQ = QQ.asError();
      if (WQ.debugResult.fX || (0, gW.d)(WQ.debugResult.error)) return;
      console.log("Failed to join lobby:", WQ.message);
      const XQ = "timedOut" === WQ.debugResult.gameServerUnreachable;
      (0, qW.reportClientError)("matchmake_failed", WQ.message, XQ ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : rQ.h[WQ.code]);
      const {
        error: wQ
      } = WQ.debugResult;
      if (wQ instanceof CQ.o && "default" !== wQ.packSource) {
        const QQ = (0, TW.f)("js", "game" === wQ.packSource ? "game" : "page", (0, TW.j)(wQ));
        (0, qW.reportClientError)("texture_pack", wQ, QQ)
      }
    }

    function VW(QQ) {
      if (null === QQ || void 0 === QQ || !QQ.isError()) return !1;
      const WQ = QQ.asError();
      return WQ.code === rQ.h.REQUEST_TO_MATCHMAKING && !(0, gW.d)(WQ.debugResult.error)
    }
    async function DW(QQ, WQ, XQ) {
      const wQ = (0, FW.M)(WQ);
      async function zQ(QQ, WQ, XQ, wQ) {
        var zQ;
        if (wQ.aborted) return null;
        null === qQ.b.get("gameEntrySource") && (0, qQ.m)("directPlayUrl"), JW.x && (0, nQ.g)().catch((() => {})), qQ.b.set({
          gameState: "findingLobby"
        }), HQ.k.mB("loadingScreenState", "loadingPage:findingLobby");
        const sQ = await pQ.userContextManager.getCurrentUserContext();
        FQ.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: WQ,
          discordContext: QQ instanceof kQ.h ? QQ.getSerialisableParams() : null
        }), (0, wW.f)(null !== (zQ = xQ.g.playInputAt()) && void 0 !== zQ ? zQ : performance.now());
        const PQ = await async function(QQ, WQ, XQ, wQ, qQ) {
          try {
            await (0, IW.n)(TQ.reqLibsLoadedPromise, BW, "Required libraries timed out")
          } catch (zQ) {
            const QQ = zQ instanceof IW.g ? `Required libraries still loading after ${BW/1e3} s: ${(0,TQ.requiredLibsPending)().join(", ")}` : zQ.toString();
            return aQ.e.errorWithCode(QQ, rQ.h.LOAD_REQUIRED_LIBS, {
              error: zQ,
              severity: "medium"
            })
          }
          return HQ.k.mB("matchmakeAndPlayStepCompleted", {
            step: rQ.h.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, TQ.matchmakeAndPlayMaybeUnloaded)(QQ, WQ, XQ, wQ, qQ)
        }(QQ, WQ, XQ, sQ, wQ), gQ = PQ.isError() ? PQ.asError() : null;
        if (wQ.aborted) return gQ && yW(PQ), FQ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== gQ && void 0 !== gQ && gQ.debugResult.fX) return console.log("Join cancelled:", gQ.message), null;
        if (gQ) return PQ;
        const {
          gameNameWithVariation: JQ,
          lobbyName: IQ
        } = PQ.getValue();
        return jW(), (0, PW.C)().setGameViewShown(!0), sQ.recordJoin(JQ, IQ), (0, iQ.J)(), PQ
      }
      return wQ && (0, qQ.m)("updateRejoin"), (0, zW.k)((async qQ => {
        try {
          var TQ;
          let sQ = QQ,
            FQ = await zQ(sQ, WQ, XQ, qQ);
          for (let QQ = 0; wQ && QQ < FW.j && (VW(FQ) && await (0, FW.N)((0, FW.u)(QQ), qQ)); QQ++) sQ = (0, FW.w)(sQ, QQ + 1, "string" === typeof sQ && (0, yQ.I)(sQ)), FQ = await zQ(sQ, WQ, XQ, qQ);
          return null !== (TQ = FQ) && void 0 !== TQ && TQ.isError() && yW(FQ), FQ
        } catch (sQ) {
          if ((0, qW.reportClientError)("matchmake_failed", sQ, "unexpected"), FQ.gameBridge.send("leaveGame", {
              reloadPath: qQ.aborted ? null : "/"
            }), qQ.aborted) return null;
          throw sQ
        }
      }), (async QQ => {
        var XQ;
        if (wQ) return;
        const qQ = (0, iQ.C)();
        null !== qQ && (await qQ, QQ.aborted) || (null !== (XQ = LQ.e[WQ]) && void 0 !== XQ && XQ.playAdBeforeMatchmaking ? (xQ.g.skipPlayWait(), await new Promise((QQ => {
          (0, iQ.Z)((() => {
            QQ(!0)
          }), "video_start")
        }))) : (0, iQ.Z)((() => {}), "video_start"))
      }))
    }

    function pW() {
      const {
        t: QQ
      } = (0, JQ.C)(), WQ = (0, PQ.useNavigatePreserveSearch)(), XQ = (0, wQ.w)(), IQ = (0, wQ.E)(), BQ = (0, zQ.useRef)({
        t: QQ,
        navigate: WQ
      });
      BQ.current = {
        t: QQ,
        navigate: WQ
      };
      const GQ = (0, zQ.useRef)("");
      GQ.current = XQ.pathname + XQ.search;
      const {
        gameState: UQ,
        clientEscMenuOptions: vQ
      } = (0, qQ.n)(["gameState", "clientEscMenuOptions"]), HQ = (0, zQ.useRef)(null), kQ = (0, zQ.useRef)(!1);
      var fQ;
      (0, zW.l)(), (0, zW.m)(), fQ = JW.x, (0, zQ.useEffect)((() => {
        if (!fQ) return;
        let QQ = !0;
        return (0, nQ.g)().then((WQ => {
          QQ && mQ(WQ)
        })).catch((() => {})), () => {
          var WQ;
          QQ = !1, OQ.wanted = !1, null === (WQ = KQ) || void 0 === WQ || WQ.setGamePackConfirm(null), KQ = null
        }
      }), [fQ]), (0, zQ.useEffect)((() => {
        var QQ, WQ, wQ;
        (0, TQ.needGameClientNow)();
        const {
          t: zQ,
          navigate: sQ
        } = BQ.current, JQ = (0, WW.e)(IQ, XQ.search);
        if (IQ.lobbyName && !new URLSearchParams(XQ.search).has("lobby")) return void sQ((0, uQ.c)(JQ.gameNameWithVariation, JQ.lobbyName), {
          replace: !0
        });
        let UQ = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === XQ.pathname) {
          const QQ = qQ.b.get("discordContext");
          if (!QQ) return void sQ("/");
          UQ = dQ.b.setupDiscordLobby(QQ, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: QQ
          }))).catch((WQ => (console.error("Failed to setup discord lobby", WQ), {
            shouldMatchmake: !1,
            discordContext: QQ
          })))
        } else if (!JQ.gameNameWithVariation || !(0, yQ.F)(JQ.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${JQ.gameNameWithVariation}`), void sQ(-1);
        const vQ = HQ.current;
        if (null !== vQ && JQ.gameNameWithVariation === vQ.gameNameWithVariation && JQ.lobbyName === vQ.lobbyName) return;
        if (FQ.gameBridge.latest("connectedGame").replay) return void(0, zW.i)(null);
        if ("releaseCountdown" === (null === (QQ = (0, VQ.f)(JQ.gameNameWithVariation)) || void 0 === QQ ? void 0 : QQ.type)) return console.error(`Game hasn't been released yet: ${JQ.gameNameWithVariation}`), void sQ(-1);
        const cQ = kQ.current;
        kQ.current = !1, (0, iQ.E)(), qQ.b.set({
          gameState: "loadingScreen"
        });
        const fQ = function() {
            OQ.wanted = !1;
            const QQ = {
              wanted: !0
            };
            return OQ = QQ, () => QQ.wanted
          }(),
          tQ = JQ.gameNameWithVariation;
        if (tQ && (JW.x || (0, jQ.k)(tQ))) {
          const QQ = JW.x ? Promise.all([(0, nQ.g)(), pQ.userContextManager.getCurrentUserContext()]).then((QQ => {
            let [WQ, XQ] = QQ;
            if (fQ()) return mQ(WQ), WQ.packForGame(tQ, XQ, fQ)
          })) : async function(QQ) {
            await SQ.d.indexedDbValuesAreLoaded();
            const WQ = await pQ.userContextManager.getCurrentUserContext(),
              XQ = (0, jQ.n)(QQ);
            let wQ;
            try {
              wQ = await DQ.e.getGame(WQ, XQ, !0)
            } catch (zQ) {
              return void console.error("Failed to get game", zQ)
            }
            const qQ = wQ.customTexturePackKey;
            if (!qQ) return void(SQ.d.isUsingTemporaryTexturePack() && ((0, lQ.reloadBloxd)(), await new Promise((() => {}))));
            if (SQ.d.isUsingTemporaryTexturePack() && SQ.d.getTemporaryTexturePackSource() === qQ) return;
            const TQ = gQ.NotificationProvider.showCustomPopup({
              body: QQ => (0, YQ.jsx)(QW, {
                schematicId: XQ,
                texturePackKey: qQ,
                onClose: QQ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await TQ.getResult()
          }(tQ), WQ = UQ;
          UQ = QQ.catch((QQ => {
            console.error("Failed to check for custom texture pack", QQ)
          })).then((() => WQ))
        }
        const oQ = {
          wasm: JW.x,
          game: JQ.gameNameWithVariation,
          custom: void 0 !== tQ && (0, jQ.k)(tQ),
          lobbyName: null !== (WQ = JQ.lobbyName) && void 0 !== WQ ? WQ : null,
          direct: null !== JQ.directJoinVmUrl && void 0 !== JQ.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === XQ.pathname,
          adBeforeMatchmaking: void 0 !== tQ && !0 === (null === (wQ = LQ.e[tQ]) || void 0 === wQ ? void 0 : wQ.playAdBeforeMatchmaking),
          afterAnother: null !== HQ.current || (0, zW.b)()
        };
        (0, sW.l)(null);
        const eQ = !(xQ = oQ).wasm || void 0 === xQ.game || xQ.custom || xQ.direct || xQ.discord || xQ.adBeforeMatchmaking || xQ.afterAnother ? null : () => {
          ! function(QQ, WQ) {
            (0, sW.l)({
              key: (0, sW.h)(QQ, WQ),
              settled: Promise.all([TQ.matchmakingLibrariesPromise, pQ.userContextManager.getCurrentUserContext()]).then((XQ => {
                let [wQ, qQ] = XQ;
                if (void 0 === wQ.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return wQ.matchmakeForAhead(QQ, WQ, qQ)
              })).catch((QQ => ({
                result: aQ.e.errorWithCode(String(QQ), rQ.h.REQUEST_TO_MATCHMAKING, {
                  error: QQ,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(oQ.lobbyName, oQ.game)
        };
        var xQ;
        const NQ = null !== HQ.current;
        HQ.current = null, (0, zW.i)(null);
        const ZQ = () => {
          cQ ? (0, PQ.navigateToHomePage)() : (kQ.current = NQ, sQ(-1))
        };
        let KQ = !1;
        const MQ = XQ.pathname + XQ.search,
          wW = () => !KQ && GQ.current === MQ;
        return (0, sW.d)(UQ, eQ, (QQ => {
          let {
            shouldMatchmake: WQ,
            discordContext: XQ
          } = QQ;
          wW() && (WQ ? DW(null !== XQ && void 0 !== XQ ? XQ : JQ.lobbyName, XQ ? "classic" : JQ.gameNameWithVariation, JQ.directJoinVmUrl).then((QQ => {
            if (null !== QQ && wW())
              if (QQ.isError()) {
                var WQ;
                const XQ = QQ.asError(),
                  wQ = null !== (WQ = XQ.debugResult.severity) && void 0 !== WQ ? WQ : "high";
                if ((0, gW.d)(XQ.debugResult.error)) return void gW.h.reload();
                if (XQ.code === rQ.h.SHADER_PACK) return void(0, XW.d)(XQ.message, sQ);
                const TQ = qQ.b.get("gameEntrySource"),
                  PQ = XQ.code === rQ.h.INITIALISE_WEBGL ? (0, RQ.c)() : null,
                  {
                    error: IQ
                  } = XQ.debugResult;
                let jQ;
                if (bQ(zQ, XQ)) jQ = Promise.resolve(!1);
                else if (null !== PQ) jQ = (0, RQ.g)(PQ);
                else if (IQ instanceof CQ.o) jQ = (0, EQ.g)(IQ);
                else {
                  let QQ;
                  switch (wQ) {
                    case "low":
                      QQ = "face-diagonal-mouth";
                      break;
                    case "medium":
                      QQ = "face-worried";
                      break;
                    case "high":
                      QQ = "face-dizzy"
                  }
                  const WQ = IQ instanceof IW.g;
                  let qQ = XQ.message;
                  WQ ? qQ = zQ("general:gameFilesStalled") : XQ.debugResult.gameServerUnreachable && (qQ = zQ((0, hQ.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  jQ = gQ.NotificationProvider.showPromptPopup({
                    icon: QQ,
                    title: rQ.s[XQ.code],
                    subtitle: (0, YQ.jsxs)(YQ.Fragment, {
                      children: [qQ, IQ instanceof Error && !WQ && (0, YQ.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, YQ.jsx)(AQ.d, {
                          errorString: IQ.stack
                        })
                      })]
                    }),
                    confirmText: zQ("general:tryAgain"),
                    cancelText: zQ("general:cancel")
                  }).getResult().then((QQ => !0 === QQ))
                }
                jQ.then((QQ => {
                  if (QQ) {
                    (0, qQ.m)(TQ);
                    const QQ = (0, uQ.c)(JQ.gameNameWithVariation, JQ.lobbyName);
                    "low" === wQ ? sQ(QQ) : (0, lQ.reloadBloxd)(QQ)
                  }
                })), FQ.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), ZQ()
              } else {
                const {
                  gameNameWithVariation: WQ,
                  lobbyName: XQ
                } = QQ.getValue();
                HQ.current = {
                  gameNameWithVariation: WQ,
                  lobbyName: XQ
                };
                const wQ = (0, uQ.c)(WQ, XQ);
                sQ(wQ, {
                  replace: !0
                })
              }
          })).catch((QQ => {
            if (!wW()) return;
            gQ.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, YQ.jsxs)(YQ.Fragment, {
                children: [zQ("homePage:pleaseCopyError"), (0, YQ.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, YQ.jsx)(AQ.d, {
                    errorString: QQ.stack
                  })
                })]
              }),
              confirmText: zQ("general:tryAgain"),
              cancelText: zQ("general:cancel")
            }).getResult().then((QQ => {
              !0 === QQ && (0, lQ.reloadBloxd)((0, uQ.c)(JQ.gameNameWithVariation, JQ.lobbyName))
            })), ZQ()
          })) : sQ(-1))
        }), wW), () => {
          KQ = !0
        }
      }), [IQ, XQ.search, XQ.pathname]), (0, zQ.useEffect)((() => {
        vQ.disableFullscreen && (0, cQ.g)() ? (0, cQ.o)() : !vQ.disableFullscreen && (0, cQ.k)() && (0, cQ.v)({
          automatic: !0
        })
      }), [UQ, vQ]), (0, zQ.useEffect)((() => {
        "inGame" === UQ && jW()
      }), [UQ, vQ]), (0, zQ.useEffect)((() => {
        "inGame" !== UQ && qQ.b.set({
          openInGameMenuName: null
        })
      }), [UQ]);
      const tQ = function(QQ) {
        const WQ = (0, qQ.i)(QQ),
          [XQ, wQ] = (0, zQ.useState)(0),
          [TQ, FQ] = (0, zQ.useState)(!1);
        (0, sQ.f)("gameJoined", (() => {
          (0, qQ.i)(qQ.b.get("gameState")) && (wQ((QQ => QQ + 1)), FQ(!0))
        })), (0, zQ.useEffect)((() => {
          WQ || FQ(!1)
        }), [WQ]);
        const PQ = "inGame" === QQ;
        return {
          mounted: PQ || WQ && TQ,
          shown: PQ,
          key: XQ
        }
      }(UQ);
      return (0, YQ.jsx)(YQ.Fragment, {
        children: tQ.mounted && (0, YQ.jsx)(TQ.InGameUi, {
          shown: tQ.shown
        }, tQ.key)
      })
    }
  },
  5340: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(1238);
    async function qQ(QQ) {
      const WQ = await fetch(`${wQ.clientSideServerUrls.s3Url}/${QQ}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === WQ.status || 403 === WQ.status) return null;
      if (!WQ.ok) throw new Error(`Failed to download the texture pack (${WQ.status})`);
      return await WQ.json()
    }
  },
  9297: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(1384),
      qQ = XQ(1257),
      TQ = XQ(663);

    function zQ(QQ) {
      return QQ = function(QQ, WQ) {
        var XQ;
        const wQ = new URLSearchParams(WQ),
          qQ = wQ.get("lobby"),
          TQ = wQ.get("vm"),
          zQ = null !== (XQ = qQ) && void 0 !== XQ ? XQ : QQ.lobbyName,
          sQ = null !== TQ && void 0 !== TQ ? TQ : QQ.directJoinVmUrl;
        if (zQ === QQ.lobbyName && sQ === QQ.directJoinVmUrl) return QQ;
        return {
          ...QQ,
          lobbyName: zQ,
          directJoinVmUrl: sQ
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), QQ = function(QQ) {
        if ((0, TQ.G)(QQ.directJoinVmUrl)) return QQ;
        const WQ = (0, qQ.X)(QQ.directJoinVmUrl);
        null === WQ && (QQ.directJoinVmUrl = void 0);
        return QQ
      }(QQ = function(QQ) {
        if ((0, TQ.G)(QQ.gameNameWithVariation)) return QQ;
        return QQ.gameNameWithVariation = (0, wQ.j)(QQ.gameNameWithVariation), QQ
      }(QQ))
    }
  },
  9295: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = !1;

    function qQ() {
      wQ = !0
    }

    function TQ() {
      return wQ
    }
  },
  9306: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      h: () => qQ,
      l: () => TQ,
      o: () => zQ
    });
    let wQ = null;

    function qQ(QQ, WQ) {
      return `${WQ}\n${null!==QQ&&void 0!==QQ?QQ:""}`
    }

    function TQ(QQ) {
      wQ = QQ
    }

    function zQ(QQ) {
      const WQ = wQ;
      return wQ = null, null !== WQ && WQ.key === QQ ? WQ.settled : null
    }

    function sQ(QQ, WQ, XQ, wQ) {
      let qQ = !1;
      null !== WQ && setTimeout((() => {
        wQ() && !qQ && WQ()
      }), 0), QQ.then((QQ => {
        qQ = !0, XQ(QQ)
      }))
    }
  },
  9293: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => IQ,
      g: () => rQ,
      i: () => jQ
    });
    var wQ = XQ(3424),
      qQ = XQ(2370),
      TQ = XQ(2211),
      zQ = XQ(4967),
      sQ = XQ(3751),
      FQ = XQ(9295);
    let PQ = null;

    function gQ() {
      return Promise.all([XQ.e(77), XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(162), XQ.e(203), XQ.e(139), XQ.e(142), XQ.e(91), XQ.e(279), XQ.e(66)]).then((() => XQ(40897)))
    }

    function JQ() {
      Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(93), XQ.e(90), XQ.e(277), XQ.e(193), XQ.e(232), XQ.e(256), XQ.e(279), XQ.e(49)]).then((() => XQ(41206))).catch((() => {}))
    }

    function rQ() {
      return zQ.c.cancelDownloadForJoin(), (0, sQ.d)(), (0, qQ.c)(), (0, FQ.f)(), (0, TQ.i)(), JQ(), Promise.all([XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(139), XQ.e(142), XQ.e(61)]).then((() => XQ(41257))).then((QQ => {
        let {
          startJoinLoad: WQ
        } = QQ;
        WQ()
      }), (() => {})), PQ ??= gQ().then((QQ => (QQ.startWasmPlay(), QQ.followPageUiPack((QQ => {
        wQ.d.showGamePack(QQ)
      })), QQ)), (QQ => {
        throw PQ = null, QQ
      })), PQ
    }

    function IQ() {
      return JQ(), XQ.e(280).then((() => XQ(41265))).catch((() => {})), gQ().then((() => {}))
    }

    function jQ() {
      return gQ().then((QQ => {
        QQ.startWasmPreviews(), QQ.prefetchWasmPreviews()
      }))
    }
  },
  9285: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      g: () => zQ,
      j: () => sQ,
      k: () => PQ,
      n: () => FQ
    });
    var wQ = XQ(231),
      qQ = XQ(4948);

    function TQ(QQ) {
      return zQ(QQ) === wQ.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function zQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function sQ(QQ) {
      var WQ;
      return null !== (WQ = Object.keys(qQ.d).find((WQ => qQ.d[WQ] === QQ))) && void 0 !== WQ ? WQ : null
    }

    function FQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const PQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);