export const id = 124;
export const ids = [124];
export const modules = {
  9518: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => Fe
    });
    var JV = xV(1625),
      YV = xV(27),
      UV = xV(5145),
      yV = xV(62),
      pV = xV(1542);
    var QV = xV(2051),
      nV = xV(1612),
      wV = xV(1439),
      ZV = xV(1220),
      vV = xV(165),
      rV = xV(206),
      kV = xV(1099),
      bV = xV(1117),
      EV = xV(1252),
      BV = xV(2517),
      jV = xV(1603),
      qV = xV(1173),
      tV = xV(9527),
      FV = xV(1639);

    function TV(VV, eV) {
      const xV = !0 === eV.debugResult.gameRefused,
        JV = xV || eV.code === vV.i.REQUEST_TO_MATCHMAKING ? (0, tV.f)(eV.message) : null;
      if (null !== JV) return PV(VV, VV((0, tV.j)(JV)), VV(tV.h[JV])), !0;
      if (xV) return async function(VV) {
        const {
          gameNameWithVariation: eV,
          lobbyName: xV,
          shownLobbyName: JV
        } = QV.gameBridge.latest("connectedGame"), YV = "classic" === eV && (0, EV.F)(xV) ? JV : await (0, BV.g)(VV, eV, xV);
        return "" !== YV ? VV("general:cantJoinGame", {
          game: YV
        }) : VV("general:cantJoinThisGame")
      }(VV).then((xV => {
        PV(VV, xV, eV.message)
      })), !0;
      const {
        joinFailure: YV
      } = eV.debugResult, UV = "refused" === (null === YV || void 0 === YV ? void 0 : YV.at) ? YV.code : null;
      return UV === rV.b.schematicNotPublished.code ? (async function(VV, eV) {
        const xV = (0, kV.p)(QV.gameBridge.latest("connectedGame").gameNameWithVariation),
          JV = await async function(VV) {
            try {
              const eV = await jV.b.getGame(await qV.userContextManager.getCurrentUserContext(), VV, !0);
              return eV.gamePublished ? null : eV.name
            } catch (eV) {
              return eV instanceof vV.b && 435 === eV.httpCode || console.error(`Failed to get unpublished game ${VV}`, eV), null
            }
          }(xV);
        if (null === JV) return void PV(VV, VV("general:cantJoinThisGame"), eV);
        const YV = await wV.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: VV("studio:gameNotPublishedTitle", {
            game: JV
          }),
          confirmText: VV("studio:publishInStudio"),
          cancelText: VV("general:cancel")
        }).getResult();
        !0 === YV && (0, nV.navigatePreserveSearch)((0, FV.m)((0, bV.e)(xV), "manage"))
      }(VV, eV.message), !0) : UV === rV.b.schematicBanned.code && (PV(VV, VV("general:cantJoinThisGame"), eV.message), !0)
    }

    function PV(VV, eV, xV) {
      wV.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: eV,
        subtitle: xV,
        confirmText: VV("general:ok"),
        cancelText: ""
      })
    }
    var AV = xV(5056),
      NV = xV(32),
      XV = xV(1276),
      MV = xV(1838),
      zV = xV(99),
      GV = xV(1382),
      WV = xV(1530),
      RV = xV(5002),
      gV = xV(4784),
      DV = xV(4725),
      iV = xV(3673),
      CV = xV(1397),
      aV = xV(812),
      oV = xV(1260),
      cV = xV(3724),
      hV = xV(3584),
      lV = xV(1442),
      LV = xV(1408),
      fV = xV(5486),
      mV = xV(9530),
      KV = xV(3305),
      HV = xV(1321);

    function uV(VV) {
      let {
        onApply: eV,
        onSkip: xV
      } = VV;
      const {
        t: JV
      } = (0, ZV.A)();
      return (0, yV.useEffect)((() => {
        KV.d.skipPlayWait()
      }), []), (0, HV.jsx)(lV.e, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, HV.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [JV("customTexturePack:downloadPrompt"), (0, HV.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: JV("customTexturePack:authorWarning")
          }), (0, HV.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: JV("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: eV
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: xV
        }
      })
    }
    async function sV() {
      let VV = !1;
      const eV = wV.NotificationProvider.showCustomPopup({
        body: eV => (0, HV.jsx)(uV, {
          onApply: () => {
            VV = !0, eV()
          },
          onSkip: eV
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await eV.getResult(), VV
    }
    let SV = {
      wanted: !1
    };
    let IV = null;

    function dV(VV) {
      VV.setGamePackConfirm(sV), IV = VV
    }
    var OV = xV(3931),
      Ve = xV(40),
      ee = xV(3681);

    function xe(VV) {
      let {
        schematicId: eV,
        texturePackKey: xV,
        onClose: JV
      } = VV;
      const [YV, UV] = (0, yV.useState)("prompt"), [pV, QV] = (0, yV.useState)(null), nV = (0, OV.e)();

      function wV() {
        JV()
      }
      return "prompt" === YV ? (0, HV.jsx)(uV, {
        onApply: async function() {
          UV("downloading");
          try {
            const VV = await async function(VV, eV) {
              const xV = await (0, fV.d)(eV);
              if (xV) return {
                pack: xV,
                key: eV
              };
              const JV = await qV.userContextManager.getCurrentUserContext(),
                YV = (await jV.b.getGame(JV, VV, !0)).customTexturePackKey;
              if (!YV) return null;
              const UV = await (0, fV.d)(YV);
              if (!UV) throw new Error("The texture pack could not be found");
              return {
                pack: UV,
                key: YV
              }
            }(eV, xV);
            if (!nV.current) return;
            if (!VV) return void JV();
            if ((0, cV.i)(VV.pack)) return void UV("refused");
            const YV = hV.b.toJson(),
              yV = hV.b.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (hV.b.setFromJson(VV.pack, "customGame"), await hV.b.saveTemporaryTexturePack(VV.key), nV.current) return void(0, MV.reloadBloxd)();
            hV.b.setFromJson(YV, yV), await (0, ee.k)(Ve.i)
          } catch (VV) {
            QV(VV instanceof Error ? VV.message : String(VV)), UV("error")
          }
        },
        onSkip: wV
      }) : "downloading" === YV ? (0, HV.jsx)(lV.e, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, HV.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, HV.jsx)(LV.d, {
            showFace: !0
          })
        })
      }) : "error" === YV ? (0, HV.jsx)(lV.e, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: pV,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: wV
        }
      }) : "refused" === YV ? (0, HV.jsx)(lV.e, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: wV
        }
      }) : null
    }
    var Je = xV(9541),
      Ye = xV(4709),
      Ue = xV(1868),
      ye = xV(3268),
      pe = xV(4716),
      Qe = xV(2259),
      ne = xV(9545);
    var we = xV(5164),
      Ze = xV(1348),
      ve = xV(1829),
      re = xV(686),
      ke = xV(767),
      be = xV(1900);

    function Ee() {
      const VV = YV.b.get("clientEscMenuOptions");
      QV.gameBridge.send("setLookSensitivity", YV.b.get("isTouchScreen") ? (0, ke.r)(VV) : VV.mouseSensitivity)
    }
    const Be = 45e3;

    function je(VV) {
      const eV = VV.asError();
      if (eV.debugResult.pJ || (0, ve.c)(eV.debugResult.error)) return;
      console.log("Failed to join lobby:", eV.message);
      const xV = "timedOut" === eV.debugResult.gameServerUnreachable;
      (0, ye.reportClientError)("matchmake_failed", eV.message, xV ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : vV.i[eV.code]);
      const {
        error: JV
      } = eV.debugResult;
      if (JV instanceof iV.p && "default" !== JV.packSource) {
        const VV = (0, pe.c)("js", "game" === JV.packSource ? "game" : "page", (0, pe.f)(JV));
        (0, ye.reportClientError)("texture_pack", JV, VV)
      }
    }

    function qe(VV) {
      if (null === VV || void 0 === VV || !VV.isError()) return !1;
      const eV = VV.asError();
      return eV.code === vV.i.REQUEST_TO_MATCHMAKING && !(0, ve.c)(eV.debugResult.error)
    }
    async function te(VV, eV, xV) {
      const JV = (0, we.T)(eV);
      async function yV(VV, eV, xV, JV) {
        var yV;
        if (JV.aborted) return null;
        null === YV.b.get("gameEntrySource") && (0, YV.h)("directPlayUrl"), re.I && (0, mV.h)().catch((() => {})), YV.b.set({
          gameState: "findingLobby"
        }), NV.h.QZ("loadingScreenState", "loadingPage:findingLobby");
        const pV = await qV.userContextManager.getCurrentUserContext();
        QV.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: eV,
          discordContext: VV instanceof oV.i ? VV.getSerialisableParams() : null
        }), (0, Ue.d)(null !== (yV = KV.d.playInputAt()) && void 0 !== yV ? yV : performance.now());
        const nV = await async function(VV, eV, xV, JV, YV) {
          try {
            await (0, be.m)(UV.reqLibsLoadedPromise, Be, "Required libraries timed out")
          } catch (yV) {
            const VV = yV instanceof be.i ? `Required libraries still loading after ${Be/1e3} s: ${(0,UV.requiredLibsPending)().join(", ")}` : yV.toString();
            return XV.e.errorWithCode(VV, vV.i.LOAD_REQUIRED_LIBS, {
              error: yV,
              severity: "medium"
            })
          }
          return NV.h.QZ("matchmakeAndPlayStepCompleted", {
            step: vV.i.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, UV.matchmakeAndPlayMaybeUnloaded)(VV, eV, xV, JV, YV)
        }(VV, eV, xV, pV, JV), wV = nV.isError() ? nV.asError() : null;
        if (JV.aborted) return wV && je(nV), QV.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== wV && void 0 !== wV && wV.debugResult.pJ) return console.log("Join cancelled:", wV.message), null;
        if (wV) return nV;
        const {
          gameNameWithVariation: ZV,
          lobbyName: rV
        } = nV.getValue();
        return Ee(), (0, Ze.K)().setGameViewShown(!0), pV.recordJoin(ZV, rV), (0, GV.L)(), nV
      }
      return JV && (0, YV.h)("updateRejoin"), (0, Qe.j)((async YV => {
        try {
          var UV;
          let pV = VV,
            QV = await yV(pV, eV, xV, YV);
          for (let VV = 0; JV && VV < we.l && (qe(QV) && await (0, we.U)((0, we.v)(VV), YV)); VV++) pV = (0, we.y)(pV, VV + 1, "string" === typeof pV && (0, EV.I)(pV)), QV = await yV(pV, eV, xV, YV);
          return null !== (UV = QV) && void 0 !== UV && UV.isError() && je(QV), QV
        } catch (pV) {
          if ((0, ye.reportClientError)("matchmake_failed", pV, "unexpected"), QV.gameBridge.send("leaveGame", {
              reloadPath: YV.aborted ? null : "/"
            }), YV.aborted) return null;
          throw pV
        }
      }), (async VV => {
        var xV;
        if (JV) return;
        const YV = (0, GV.B)();
        null !== YV && (await YV, VV.aborted) || (null !== (xV = aV.e[eV]) && void 0 !== xV && xV.playAdBeforeMatchmaking ? (KV.d.skipPlayWait(), await new Promise((VV => {
          (0, GV.db)((() => {
            VV(!0)
          }), "video_start")
        }))) : (0, GV.db)((() => {}), "video_start"))
      }))
    }

    function Fe() {
      const {
        t: VV
      } = (0, ZV.A)(), eV = (0, nV.useNavigatePreserveSearch)(), xV = (0, JV.r)(), rV = (0, JV.A)(), bV = (0, yV.useRef)({
        t: VV,
        navigate: eV
      });
      bV.current = {
        t: VV,
        navigate: eV
      };
      const tV = (0, yV.useRef)("");
      tV.current = xV.pathname + xV.search;
      const {
        gameState: FV,
        clientEscMenuOptions: PV
      } = (0, YV.l)(["gameState", "clientEscMenuOptions"]), oV = (0, yV.useRef)(null), cV = (0, yV.useRef)(!1);
      var lV;
      (0, yV.useEffect)((() => () => {
        NV.h.QZ("leftPlayPage")
      }), []), (0, Qe.l)(), (0, Qe.n)(), lV = re.I, (0, yV.useEffect)((() => {
        if (!lV) return;
        let VV = !0;
        return (0, mV.h)().then((eV => {
          VV && dV(eV)
        })).catch((() => {})), () => {
          var eV;
          VV = !1, SV.wanted = !1, null === (eV = IV) || void 0 === eV || eV.setGamePackConfirm(null), IV = null
        }
      }), [lV]), (0, yV.useEffect)((() => {
        var VV, eV, JV;
        (0, UV.needGameClientNow)();
        const {
          t: yV,
          navigate: pV
        } = bV.current, ZV = (0, Je.d)(rV, xV.search);
        if (rV.lobbyName && !new URLSearchParams(xV.search).has("lobby")) return void pV((0, CV.c)(ZV.gameNameWithVariation, ZV.lobbyName), {
          replace: !0
        });
        let FV = Promise.resolve({
          shouldMatchmake: !0
        });
        const PV = new AbortController;
        if ("/play/discord-custom-lobby" === xV.pathname) {
          const VV = YV.b.get("discordContext");
          if (!VV) return void pV("/");
          FV = AV.e.setupDiscordLobby(VV, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: VV
          }))).catch((eV => (console.error("Failed to setup discord lobby", eV), {
            shouldMatchmake: !1,
            discordContext: VV
          })))
        } else if (!ZV.gameNameWithVariation || !(0, EV.H)(ZV.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${ZV.gameNameWithVariation}`), void pV(-1);
        const WV = oV.current;
        if (null !== WV && ZV.gameNameWithVariation === WV.gameNameWithVariation && ZV.lobbyName === WV.lobbyName) return;
        if (QV.gameBridge.latest("connectedGame").replay) return void(0, Qe.h)(null);
        if ("releaseCountdown" === (null === (VV = (0, BV.k)(ZV.gameNameWithVariation)) || void 0 === VV ? void 0 : VV.type)) return console.error(`Game hasn't been released yet: ${ZV.gameNameWithVariation}`), void pV(-1);
        const lV = cV.current;
        cV.current = !1, (0, GV.F)(), YV.b.set({
          gameState: "loadingScreen"
        });
        const LV = function() {
            SV.wanted = !1;
            const VV = {
              wanted: !0
            };
            return SV = VV, () => VV.wanted
          }(),
          fV = ZV.gameNameWithVariation;
        if (fV && (re.I || (0, kV.l)(fV))) {
          const VV = re.I ? Promise.all([(0, mV.h)(), qV.userContextManager.getCurrentUserContext()]).then((VV => {
            let [eV, xV] = VV;
            if (LV()) return dV(eV), eV.packForGame(fV, xV, LV)
          })) : async function(VV, eV) {
            await hV.b.indexedDbValuesAreLoaded();
            const xV = await qV.userContextManager.getCurrentUserContext(),
              JV = (0, kV.p)(VV);
            let YV;
            try {
              YV = await jV.b.getGame(xV, JV, !0)
            } catch (QV) {
              return void console.error("Failed to get game", QV)
            }
            if (null !== eV && void 0 !== eV && eV.aborted) return;
            const UV = YV.customTexturePackKey;
            if (!UV) return void(hV.b.isUsingTemporaryTexturePack() && ((0, MV.reloadBloxd)(), await new Promise((() => {}))));
            if (hV.b.isUsingTemporaryTexturePack() && hV.b.getTemporaryTexturePackSource() === UV) return;
            const yV = wV.NotificationProvider.showCustomPopup({
                body: VV => (0, HV.jsx)(xe, {
                  schematicId: JV,
                  texturePackKey: UV,
                  onClose: VV
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              pV = () => {
                yV.tearDownNotification()
              };
            null === eV || void 0 === eV || eV.addEventListener("abort", pV, {
              once: !0
            }), await yV.getResult(), null === eV || void 0 === eV || eV.removeEventListener("abort", pV)
          }(fV, PV.signal), eV = FV;
          FV = VV.catch((VV => {
            console.error("Failed to check for custom texture pack", VV)
          })).then((() => eV))
        }
        const KV = {
          wasm: re.I,
          game: ZV.gameNameWithVariation,
          custom: void 0 !== fV && (0, kV.l)(fV),
          lobbyName: null !== (eV = ZV.lobbyName) && void 0 !== eV ? eV : null,
          direct: null !== ZV.directJoinVmUrl && void 0 !== ZV.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === xV.pathname,
          adBeforeMatchmaking: void 0 !== fV && !0 === (null === (JV = aV.e[fV]) || void 0 === JV ? void 0 : JV.playAdBeforeMatchmaking),
          afterAnother: null !== oV.current || (0, Qe.b)()
        };
        (0, ne.i)(null);
        const uV = !(sV = KV).wasm || void 0 === sV.game || sV.custom || sV.direct || sV.discord || sV.adBeforeMatchmaking || sV.afterAnother ? null : () => {
          ! function(VV, eV) {
            (0, ne.i)({
              key: (0, ne.e)(VV, eV),
              settled: Promise.all([UV.matchmakingLibrariesPromise, qV.userContextManager.getCurrentUserContext()]).then((xV => {
                let [JV, YV] = xV;
                if (void 0 === JV.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return JV.matchmakeForAhead(VV, eV, YV)
              })).catch((VV => ({
                result: XV.e.errorWithCode(String(VV), vV.i.REQUEST_TO_MATCHMAKING, {
                  error: VV,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(KV.lobbyName, KV.game)
        };
        var sV;
        const IV = null !== oV.current;
        oV.current = null, (0, Qe.h)(null);
        const OV = () => {
          lV ? (0, nV.navigateToHomePage)() : (cV.current = IV, pV(-1))
        };
        let Ve = !1;
        const ee = xV.pathname + xV.search,
          Ue = () => !Ve && tV.current === ee;
        return (0, ne.d)(FV, uV, (VV => {
          let {
            shouldMatchmake: eV,
            discordContext: xV
          } = VV;
          Ue() && (eV ? te(null !== xV && void 0 !== xV ? xV : ZV.lobbyName, xV ? "classic" : ZV.gameNameWithVariation, ZV.directJoinVmUrl).then((VV => {
            if (null !== VV && Ue())
              if (VV.isError()) {
                var eV, xV;
                const JV = VV.asError(),
                  UV = null !== (eV = JV.debugResult.severity) && void 0 !== eV ? eV : "high";
                if (NV.h.QZ("joinFailed", {
                    step: null !== (xV = JV.code) && void 0 !== xV ? xV : null,
                    severity: UV
                  }), (0, ve.c)(JV.debugResult.error)) return void ve.d.reload();
                if (JV.code === vV.i.SHADER_PACK) return void(0, Ye.b)(JV.message, pV);
                const nV = YV.b.get("gameEntrySource"),
                  rV = JV.code === vV.i.INITIALISE_WEBGL ? (0, gV.d)() : null,
                  {
                    error: kV
                  } = JV.debugResult;
                let bV;
                if (TV(yV, JV)) bV = Promise.resolve(!1);
                else if (null !== rV) bV = (0, gV.l)(rV);
                else if (kV instanceof iV.p) bV = (0, DV.g)(kV);
                else {
                  let VV;
                  switch (UV) {
                    case "low":
                      VV = "face-diagonal-mouth";
                      break;
                    case "medium":
                      VV = "face-worried";
                      break;
                    case "high":
                      VV = "face-dizzy"
                  }
                  const eV = kV instanceof be.i;
                  let xV = JV.message;
                  eV ? xV = yV("general:gameFilesStalled") : JV.debugResult.gameServerUnreachable && (xV = yV((0, zV.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  bV = wV.NotificationProvider.showPromptPopup({
                    icon: VV,
                    title: vV.x[JV.code],
                    subtitle: (0, HV.jsxs)(HV.Fragment, {
                      children: [xV, kV instanceof Error && !eV && (0, HV.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, HV.jsx)(RV.b, {
                          errorString: kV.stack
                        })
                      })]
                    }),
                    confirmText: yV("general:tryAgain"),
                    cancelText: yV("general:cancel")
                  }).getResult().then((VV => !0 === VV))
                }
                bV.then((VV => {
                  if (VV) {
                    (0, YV.h)(nV);
                    const VV = (0, CV.c)(ZV.gameNameWithVariation, ZV.lobbyName);
                    "low" === UV ? pV(VV) : (0, MV.reloadBloxd)(VV)
                  }
                })), QV.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), OV()
              } else {
                const {
                  gameNameWithVariation: eV,
                  lobbyName: xV
                } = VV.getValue();
                oV.current = {
                  gameNameWithVariation: eV,
                  lobbyName: xV
                };
                const JV = (0, CV.c)(eV, xV);
                pV(JV, {
                  replace: !0
                })
              }
          })).catch((VV => {
            if (!Ue()) return;
            NV.h.QZ("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            wV.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, HV.jsxs)(HV.Fragment, {
                children: [yV("homePage:pleaseCopyError"), (0, HV.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, HV.jsx)(RV.b, {
                    errorString: VV.stack
                  })
                })]
              }),
              confirmText: yV("general:tryAgain"),
              cancelText: yV("general:cancel")
            }).getResult().then((VV => {
              !0 === VV && (0, MV.reloadBloxd)((0, CV.c)(ZV.gameNameWithVariation, ZV.lobbyName))
            })), OV()
          })) : pV(-1))
        }), Ue), () => {
          Ve = !0, PV.abort()
        }
      }), [rV, xV.search, xV.pathname]), (0, yV.useEffect)((() => {
        PV.disableFullscreen && (0, WV.g)() ? (0, WV.n)() : !PV.disableFullscreen && (0, WV.k)() && (0, WV.t)({
          automatic: !0
        })
      }), [FV, PV]), (0, yV.useEffect)((() => {
        "inGame" === FV && Ee()
      }), [FV, PV]), (0, yV.useEffect)((() => {
        "inGame" !== FV && YV.b.set({
          openInGameMenuName: null
        })
      }), [FV]);
      const LV = function(VV) {
        const eV = (0, YV.e)(VV),
          [xV, JV] = (0, yV.useState)(0),
          [UV, QV] = (0, yV.useState)(!1);
        (0, pV.g)("gameJoined", (() => {
          (0, YV.e)(YV.b.get("gameState")) && (JV((VV => VV + 1)), QV(!0))
        })), (0, yV.useEffect)((() => {
          eV || QV(!1)
        }), [eV]);
        const nV = "inGame" === VV;
        return {
          mounted: nV || eV && UV,
          shown: nV,
          key: xV
        }
      }(FV);
      return (0, HV.jsx)(HV.Fragment, {
        children: LV.mounted && (0, HV.jsx)(UV.InGameUi, {
          shown: LV.shown
        }, LV.key)
      })
    }
  },
  5486: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(1230);
    async function YV(VV) {
      const eV = await fetch(`${JV.clientSideServerUrls.s3Url}/${VV}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === eV.status || 403 === eV.status) return null;
      if (!eV.ok) throw new Error(`Failed to download the texture pack (${eV.status})`);
      return await eV.json()
    }
  },
  9541: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(1397),
      YV = xV(1252),
      UV = xV(657);

    function yV(VV) {
      return VV = function(VV, eV) {
        var xV;
        const JV = new URLSearchParams(eV),
          YV = JV.get("lobby"),
          UV = JV.get("vm"),
          yV = null !== (xV = YV) && void 0 !== xV ? xV : VV.lobbyName,
          pV = null !== UV && void 0 !== UV ? UV : VV.directJoinVmUrl;
        if (yV === VV.lobbyName && pV === VV.directJoinVmUrl) return VV;
        return {
          ...VV,
          lobbyName: yV,
          directJoinVmUrl: pV
        }
      }(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), VV = function(VV) {
        if ((0, UV.J)(VV.directJoinVmUrl)) return VV;
        const eV = (0, YV.U)(VV.directJoinVmUrl);
        null === eV && (VV.directJoinVmUrl = void 0);
        return VV
      }(VV = function(VV) {
        if ((0, UV.J)(VV.gameNameWithVariation)) return VV;
        return VV.gameNameWithVariation = (0, JV.g)(VV.gameNameWithVariation), VV
      }(VV))
    }
  },
  9532: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => YV
    });
    let JV = !1;

    function YV() {
      JV = !0
    }

    function UV() {
      return JV
    }
  },
  9545: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      e: () => YV,
      i: () => UV,
      j: () => yV
    });
    let JV = null;

    function YV(VV, eV) {
      return `${eV}\n${null!==VV&&void 0!==VV?VV:""}`
    }

    function UV(VV) {
      JV = VV
    }

    function yV(VV) {
      const eV = JV;
      return JV = null, null !== eV && eV.key === VV ? eV.settled : null
    }

    function pV(VV, eV, xV, JV) {
      let YV = !1;
      null !== eV && setTimeout((() => {
        JV() && !YV && eV()
      }), 0), VV.then((VV => {
        YV = !0, xV(VV)
      }))
    }
  },
  9530: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      h: () => vV,
      j: () => kV
    });
    var JV = xV(3584),
      YV = xV(2441),
      UV = xV(2261),
      yV = xV(5135),
      pV = xV(3942),
      QV = xV(9532);
    let nV = null;

    function wV() {
      return Promise.all([xV.e(86), xV.e(89), xV.e(103), xV.e(233), xV.e(232), xV.e(174), xV.e(222), xV.e(150), xV.e(153), xV.e(101), xV.e(298), xV.e(75)]).then((() => xV(41952)))
    }

    function ZV() {
      Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(103), xV.e(100), xV.e(296), xV.e(205), xV.e(246), xV.e(272), xV.e(298), xV.e(53)]).then((() => xV(42308))).catch((() => {}))
    }

    function vV() {
      return yV.d.cancelDownloadForJoin(), (0, pV.c)(), (0, YV.g)(), (0, QV.h)(), (0, UV.h)(), ZV(), Promise.all([xV.e(89), xV.e(103), xV.e(233), xV.e(232), xV.e(150), xV.e(153), xV.e(70)]).then((() => xV(42363))).then((VV => {
        let {
          startJoinLoad: eV
        } = VV;
        eV()
      }), (() => {})), nV ??= wV().then((VV => (VV.startWasmPlay(), VV.followPageUiPack((VV => {
        JV.b.showGamePack(VV)
      })), VV)), (VV => {
        throw nV = null, VV
      })), nV
    }

    function rV() {
      return ZV(), xV.e(299).then((() => xV(42371))).catch((() => {})), wV().then((() => {}))
    }

    function kV() {
      return wV().then((VV => {
        VV.startWasmPreviews(), VV.prefetchWasmPreviews()
      }))
    }
  },
  9527: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => yV,
      f: () => pV,
      h: () => nV,
      j: () => QV
    });
    var JV = xV(206),
      YV = xV(5103);

    function UV(VV) {
      return yV(VV) === JV.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yV(VV) {
      return "object" === typeof VV && null !== VV ? VV.code : void 0
    }

    function pV(VV) {
      var eV;
      return null !== (eV = Object.keys(YV.b).find((eV => YV.b[eV] === VV))) && void 0 !== eV ? eV : null
    }

    function QV(VV) {
      return "notWhitelisted" === VV ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const nV = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);