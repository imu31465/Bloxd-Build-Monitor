export const id = 110;
export const ids = [110];
export const modules = {
  8851: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => jT
    });
    var hm = fm(1537),
      Am = fm(23),
      am = fm(4595),
      xm = fm(59),
      wm = fm(1449);
    var Dm = fm(1905),
      im = fm(1519),
      Rm = fm(1354),
      pm = fm(1208),
      Em = fm(168),
      om = fm(198),
      Om = fm(1041),
      Ym = fm(1053),
      qm = fm(1235),
      jm = fm(2324),
      Vm = fm(1494),
      Im = fm(1162),
      Km = fm(8854),
      Qm = fm(1548);

    function nm(mm, Tm) {
      const fm = !0 === Tm.debugResult.gameRefused,
        hm = fm || Tm.code === Em.k.REQUEST_TO_MATCHMAKING ? (0, Km.h)(Tm.message) : null;
      if (null !== hm) return Jm(mm, mm((0, Km.m)(hm)), mm(Km.i[hm])), !0;
      if (fm) return async function(mm) {
        const {
          gameNameWithVariation: Tm,
          lobbyName: fm,
          shownLobbyName: hm
        } = Dm.gameBridge.latest("connectedGame"), Am = "classic" === Tm && (0, qm.z)(fm) ? hm : await (0, jm.d)(mm, Tm, fm);
        return "" !== Am ? mm("general:cantJoinGame", {
          game: Am
        }) : mm("general:cantJoinThisGame")
      }(mm).then((fm => {
        Jm(mm, fm, Tm.message)
      })), !0;
      const {
        joinFailure: Am
      } = Tm.debugResult, am = "refused" === (null === Am || void 0 === Am ? void 0 : Am.at) ? Am.code : null;
      return am === om.b.schematicNotPublished.code ? (async function(mm, Tm) {
        const fm = (0, Om.n)(Dm.gameBridge.latest("connectedGame").gameNameWithVariation),
          hm = await async function(mm) {
            try {
              const Tm = await Vm.d.getGame(await Im.userContextManager.getCurrentUserContext(), mm, !0);
              return Tm.gamePublished ? null : Tm.name
            } catch (Tm) {
              return Tm instanceof Em.d && 435 === Tm.httpCode || console.error(`Failed to get unpublished game ${mm}`, Tm), null
            }
          }(fm);
        if (null === hm) return void Jm(mm, mm("general:cantJoinThisGame"), Tm);
        const Am = await Rm.NotificationProvider.showPromptPopup({
          icon: "rocket-launch",
          title: mm("studio:gameNotPublishedTitle", {
            game: hm
          }),
          confirmText: mm("studio:publishInStudio"),
          cancelText: mm("general:cancel")
        }).getResult();
        !0 === Am && (0, im.navigatePreserveSearch)((0, Qm.p)((0, Ym.d)(fm), "manage"))
      }(mm, Tm.message), !0) : am === om.b.schematicBanned.code && (Jm(mm, mm("general:cantJoinThisGame"), Tm.message), !0)
    }

    function Jm(mm, Tm, fm) {
      Rm.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Tm,
        subtitle: fm,
        confirmText: mm("general:ok"),
        cancelText: ""
      })
    }
    var cm = fm(4523),
      zm = fm(31),
      Zm = fm(1254),
      km = fm(1713),
      bm = fm(105),
      Sm = fm(1309),
      em = fm(1438),
      Nm = fm(4467),
      Gm = fm(4290),
      Xm = fm(4246),
      Pm = fm(3238),
      Hm = fm(1329),
      ym = fm(800),
      Cm = fm(1238),
      rm = fm(3315),
      sm = fm(3148),
      lm = fm(1357),
      Mm = fm(1345),
      um = fm(4938),
      Bm = fm(8858),
      Lm = fm(2955),
      tm = fm(1135);

    function Um(mm) {
      let {
        onApply: Tm,
        onSkip: fm
      } = mm;
      const {
        t: hm
      } = (0, pm.A)();
      return (0, xm.useEffect)((() => {
        Lm.e.skipPlayWait()
      }), []), (0, tm.jsx)(lm.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, tm.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [hm("customTexturePack:downloadPrompt"), (0, tm.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: hm("customTexturePack:authorWarning")
          }), (0, tm.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: hm("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Tm
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: fm
        }
      })
    }
    async function dm() {
      let mm = !1;
      const Tm = Rm.NotificationProvider.showCustomPopup({
        body: Tm => (0, tm.jsx)(Um, {
          onApply: () => {
            mm = !0, Tm()
          },
          onSkip: Tm
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Tm.getResult(), mm
    }
    let gm = {
      wanted: !1
    };
    let Wm = null;

    function Fm(mm) {
      mm.setGamePackConfirm(dm), Wm = mm
    }
    var mT = fm(3486);

    function TT(mm) {
      let {
        schematicId: Tm,
        texturePackKey: fm,
        onClose: hm
      } = mm;
      const [Am, am] = (0, xm.useState)("prompt"), [wm, Dm] = (0, xm.useState)(null), im = (0, mT.c)();

      function Rm() {
        hm()
      }
      return "prompt" === Am ? (0, tm.jsx)(Um, {
        onApply: async function() {
          am("downloading");
          try {
            const mm = await async function(mm, Tm) {
              const fm = await (0, um.e)(Tm);
              if (fm) return {
                pack: fm,
                key: Tm
              };
              const hm = await Im.userContextManager.getCurrentUserContext(),
                Am = (await Vm.d.getGame(hm, mm, !0)).customTexturePackKey;
              if (!Am) return null;
              const am = await (0, um.e)(Am);
              if (!am) throw new Error("The texture pack could not be found");
              return {
                pack: am,
                key: Am
              }
            }(Tm, fm);
            if (!im.current) return;
            if (!mm) return void hm();
            if ((0, rm.n)(mm.pack)) return void am("refused");
            sm.b.setFromJson(mm.pack, "customGame"), await sm.b.saveTemporaryTexturePack(mm.key), im.current && (0, km.reloadBloxd)()
          } catch (mm) {
            Dm(mm instanceof Error ? mm.message : String(mm)), am("error")
          }
        },
        onSkip: Rm
      }) : "downloading" === Am ? (0, tm.jsx)(lm.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, tm.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, tm.jsx)(Mm.c, {
            showFace: !0
          })
        })
      }) : "error" === Am ? (0, tm.jsx)(lm.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: wm,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Rm
        }
      }) : "refused" === Am ? (0, tm.jsx)(lm.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Rm
        }
      }) : null
    }
    var fT = fm(8868),
      hT = fm(4235),
      AT = fm(1763),
      aT = fm(2932),
      xT = fm(4238),
      wT = fm(2109),
      DT = fm(4620),
      iT = fm(1296),
      RT = fm(1706),
      pT = fm(675),
      ET = fm(763);

    function oT() {
      const mm = Am.c.get("clientEscMenuOptions");
      Dm.gameBridge.send("setLookSensitivity", Am.c.get("isTouchScreen") ? (0, ET.m)(mm) : mm.mouseSensitivity)
    }

    function OT(mm) {
      const Tm = mm.asError();
      if (Tm.debugResult.Af || (0, RT.c)(Tm.debugResult.error)) return;
      console.log("Failed to join lobby:", Tm.message);
      const fm = "timedOut" === Tm.debugResult.gameServerUnreachable;
      (0, aT.reportClientError)("matchmake_failed", Tm.message, fm ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Em.k[Tm.code]);
      const {
        error: hm
      } = Tm.debugResult;
      if (hm instanceof Pm.l && "default" !== hm.packSource) {
        const mm = (0, xT.f)("js", "game" === hm.packSource ? "game" : "page", (0, xT.h)(hm));
        (0, aT.reportClientError)("texture_pack", hm, mm)
      }
    }

    function YT(mm) {
      if (null === mm || void 0 === mm || !mm.isError()) return !1;
      const Tm = mm.asError();
      return Tm.code === Em.k.REQUEST_TO_MATCHMAKING && !(0, RT.c)(Tm.debugResult.error)
    }
    async function qT(mm, Tm, fm) {
      const hm = (0, DT.Q)(Tm);
      async function xm(mm, Tm, fm, hm) {
        var xm;
        if (hm.aborted) return null;
        null === Am.c.get("gameEntrySource") && (0, Am.l)("directPlayUrl"), pT.A && (0, Bm.c)().catch((() => {})), Am.c.set({
          gameState: "findingLobby"
        }), zm.j.gp("loadingScreenState", "loadingPage:findingLobby");
        const wm = await Im.userContextManager.getCurrentUserContext();
        Dm.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Tm,
          discordContext: mm instanceof Cm.e ? mm.getSerialisableParams() : null
        }), (0, AT.f)(null !== (xm = Lm.e.playInputAt()) && void 0 !== xm ? xm : performance.now());
        const im = await async function(mm, Tm, fm, hm, Am) {
          try {
            await am.reqLibsLoadedPromise
          } catch (xm) {
            return Zm.e.errorWithCode(xm.toString(), Em.k.LOAD_REQUIRED_LIBS, {
              error: xm,
              severity: "medium"
            })
          }
          return zm.j.gp("matchmakeAndPlayStepCompleted", {
            step: Em.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, am.matchmakeAndPlayMaybeUnloaded)(mm, Tm, fm, hm, Am)
        }(mm, Tm, fm, wm, hm), Rm = im.isError() ? im.asError() : null;
        if (hm.aborted) return Rm && OT(im), Dm.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Rm && void 0 !== Rm && Rm.debugResult.Af) return console.log("Join cancelled:", Rm.message), null;
        if (Rm) return im;
        const {
          gameNameWithVariation: pm,
          lobbyName: om
        } = im.getValue();
        return oT(), (0, iT.s)().setGameViewShown(!0), wm.recordJoin(pm, om), (0, Sm.M)(), im
      }
      return hm && (0, Am.l)("updateRejoin"), (0, wT.f)((async Am => {
        try {
          var am;
          let wm = mm,
            Dm = await xm(wm, Tm, fm, Am);
          for (let mm = 0; hm && mm < DT.l && (YT(Dm) && await (0, DT.R)((0, DT.x)(mm), Am)); mm++) wm = (0, DT.y)(wm, mm + 1, "string" === typeof wm && (0, qm.D)(wm)), Dm = await xm(wm, Tm, fm, Am);
          return null !== (am = Dm) && void 0 !== am && am.isError() && OT(Dm), Dm
        } catch (wm) {
          if ((0, aT.reportClientError)("matchmake_failed", wm, "unexpected"), Dm.gameBridge.send("leaveGame", {
              reloadPath: Am.aborted ? null : "/"
            }), Am.aborted) return null;
          throw wm
        }
      }), (async mm => {
        var fm;
        if (hm) return;
        const Am = (0, Sm.F)();
        null !== Am && (await Am, mm.aborted) || (null !== (fm = ym.e[Tm]) && void 0 !== fm && fm.playAdBeforeMatchmaking ? (Lm.e.skipPlayWait(), await new Promise((mm => {
          (0, Sm.ab)((() => {
            mm(!0)
          }), "video_start")
        }))) : (0, Sm.ab)((() => {}), "video_start"))
      }))
    }

    function jT() {
      const {
        t: mm
      } = (0, pm.A)(), Tm = (0, im.useNavigatePreserveSearch)(), fm = (0, hm.w)(), om = (0, hm.G)(), Ym = (0, xm.useRef)({
        t: mm,
        navigate: Tm
      });
      Ym.current = {
        t: mm,
        navigate: Tm
      };
      const Km = (0, xm.useRef)("");
      Km.current = fm.pathname + fm.search;
      const {
        gameState: Qm,
        clientEscMenuOptions: Jm
      } = (0, Am.m)(["gameState", "clientEscMenuOptions"]), zm = (0, xm.useRef)(null), Zm = (0, xm.useRef)(!1);
      var ym;
      (0, wT.j)(), (0, wT.l)(), ym = pT.A, (0, xm.useEffect)((() => {
        if (!ym) return;
        let mm = !0;
        return (0, Bm.c)().then((Tm => {
          mm && Fm(Tm)
        })).catch((() => {})), () => {
          var Tm;
          mm = !1, gm.wanted = !1, null === (Tm = Wm) || void 0 === Tm || Tm.setGamePackConfirm(null), Wm = null
        }
      }), [ym]), (0, xm.useEffect)((() => {
        var mm;
        (0, am.needGameClientNow)();
        const {
          t: Tm,
          navigate: hm
        } = Ym.current, xm = (0, fT.c)(om, fm.search);
        if (om.lobbyName && !new URLSearchParams(fm.search).has("lobby")) return void hm((0, Hm.e)(xm.gameNameWithVariation, xm.lobbyName), {
          replace: !0
        });
        let wm = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === fm.pathname) {
          const mm = Am.c.get("discordContext");
          if (!mm) return void hm("/");
          wm = cm.b.setupDiscordLobby(mm, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: mm
          }))).catch((Tm => (console.error("Failed to setup discord lobby", Tm), {
            shouldMatchmake: !1,
            discordContext: mm
          })))
        } else if (!xm.gameNameWithVariation || !(0, qm.C)(xm.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${xm.gameNameWithVariation}`), void hm(-1);
        const pm = zm.current;
        if (null !== pm && xm.gameNameWithVariation === pm.gameNameWithVariation && xm.lobbyName === pm.lobbyName) return;
        if (Dm.gameBridge.latest("connectedGame").replay) return void(0, wT.d)(null);
        if ("releaseCountdown" === (null === (mm = (0, jm.g)(xm.gameNameWithVariation)) || void 0 === mm ? void 0 : mm.type)) return console.error(`Game hasn't been released yet: ${xm.gameNameWithVariation}`), void hm(-1);
        const Qm = Zm.current;
        Zm.current = !1, (0, Sm.H)(), Am.c.set({
          gameState: "loadingScreen"
        });
        const Jm = function() {
            gm.wanted = !1;
            const mm = {
              wanted: !0
            };
            return gm = mm, () => mm.wanted
          }(),
          em = xm.gameNameWithVariation;
        if (em && (pT.A || (0, Om.k)(em))) {
          const mm = pT.A ? Promise.all([(0, Bm.c)(), Im.userContextManager.getCurrentUserContext()]).then((mm => {
            let [Tm, fm] = mm;
            if (Jm()) return Fm(Tm), Tm.packForGame(em, fm, Jm)
          })) : async function(mm) {
            await sm.b.indexedDbValuesAreLoaded();
            const Tm = await Im.userContextManager.getCurrentUserContext(),
              fm = (0, Om.n)(mm);
            let hm;
            try {
              hm = await Vm.d.getGame(Tm, fm, !0)
            } catch (xm) {
              return void console.error("Failed to get game", xm)
            }
            const Am = hm.customTexturePackKey;
            if (!Am) return void(sm.b.isUsingTemporaryTexturePack() && ((0, km.reloadBloxd)(), await new Promise((() => {}))));
            if (sm.b.isUsingTemporaryTexturePack() && sm.b.getTemporaryTexturePackSource() === Am) return;
            const am = Rm.NotificationProvider.showCustomPopup({
              body: mm => (0, tm.jsx)(TT, {
                schematicId: fm,
                texturePackKey: Am,
                onClose: mm
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await am.getResult()
          }(em), Tm = wm;
          wm = mm.catch((mm => {
            console.error("Failed to check for custom texture pack", mm)
          })).then((() => Tm))
        }
        const ym = null !== zm.current;
        zm.current = null, (0, wT.d)(null);
        const Cm = () => {
          Qm ? (0, im.navigateToHomePage)() : (Zm.current = ym, hm(-1))
        };
        let rm = !1;
        const lm = fm.pathname + fm.search,
          Mm = () => !rm && Km.current === lm;
        return wm.then((mm => {
          let {
            shouldMatchmake: fm,
            discordContext: am
          } = mm;
          Mm() && (fm ? qT(null !== am && void 0 !== am ? am : xm.lobbyName, am ? "classic" : xm.gameNameWithVariation, xm.directJoinVmUrl).then((mm => {
            if (null !== mm && Mm())
              if (mm.isError()) {
                var fm;
                const am = mm.asError(),
                  wm = null !== (fm = am.debugResult.severity) && void 0 !== fm ? fm : "high";
                if ((0, RT.c)(am.debugResult.error)) return void RT.e.reload();
                if (am.code === Em.k.SHADER_PACK) return void(0, hT.e)(am.message, hm);
                const im = Am.c.get("gameEntrySource"),
                  pm = am.code === Em.k.INITIALISE_WEBGL ? (0, Gm.e)() : null,
                  {
                    error: om
                  } = am.debugResult;
                let Om;
                if (nm(Tm, am)) Om = Promise.resolve(!1);
                else if (null !== pm) Om = (0, Gm.l)(pm);
                else if (om instanceof Pm.l) Om = (0, Xm.g)(om);
                else {
                  let mm;
                  switch (wm) {
                    case "low":
                      mm = "face-diagonal-mouth";
                      break;
                    case "medium":
                      mm = "face-worried";
                      break;
                    case "high":
                      mm = "face-dizzy"
                  }
                  Om = Rm.NotificationProvider.showPromptPopup({
                    icon: mm,
                    title: Em.x[am.code],
                    subtitle: (0, tm.jsxs)(tm.Fragment, {
                      children: [am.debugResult.gameServerUnreachable ? Tm((0, bm.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : am.message, am.debugResult.error instanceof Error && (0, tm.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, tm.jsx)(Nm.b, {
                          errorString: am.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Tm("general:tryAgain"),
                    cancelText: Tm("general:cancel")
                  }).getResult().then((mm => !0 === mm))
                }
                Om.then((mm => {
                  if (mm) {
                    (0, Am.l)(im);
                    const mm = (0, Hm.e)(xm.gameNameWithVariation, xm.lobbyName);
                    "low" === wm ? hm(mm) : (0, km.reloadBloxd)(mm)
                  }
                })), Dm.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Cm()
              } else {
                const {
                  gameNameWithVariation: Tm,
                  lobbyName: fm
                } = mm.getValue();
                zm.current = {
                  gameNameWithVariation: Tm,
                  lobbyName: fm
                };
                const Am = (0, Hm.e)(Tm, fm);
                hm(Am, {
                  replace: !0
                })
              }
          })).catch((mm => {
            if (!Mm()) return;
            Rm.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, tm.jsxs)(tm.Fragment, {
                children: [Tm("homePage:pleaseCopyError"), (0, tm.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, tm.jsx)(Nm.b, {
                    errorString: mm.stack
                  })
                })]
              }),
              confirmText: Tm("general:tryAgain"),
              cancelText: Tm("general:cancel")
            }).getResult().then((mm => {
              !0 === mm && (0, km.reloadBloxd)((0, Hm.e)(xm.gameNameWithVariation, xm.lobbyName))
            })), Cm()
          })) : hm(-1))
        })), () => {
          rm = !0
        }
      }), [om, fm.search, fm.pathname]), (0, xm.useEffect)((() => {
        Jm.disableFullscreen && (0, em.i)() ? (0, em.o)() : !Jm.disableFullscreen && (0, em.l)() && (0, em.w)()
      }), [Qm, Jm]), (0, xm.useEffect)((() => {
        "inGame" === Qm && oT()
      }), [Qm, Jm]), (0, xm.useEffect)((() => {
        "inGame" !== Qm && Am.c.set({
          openInGameMenuName: null
        })
      }), [Qm]);
      const Cm = function(mm) {
        const Tm = (0, Am.i)(mm),
          [fm, hm] = (0, xm.useState)(0),
          [am, Dm] = (0, xm.useState)(!1);
        (0, wm.g)("gameJoined", (() => {
          (0, Am.i)(Am.c.get("gameState")) && (hm((mm => mm + 1)), Dm(!0))
        })), (0, xm.useEffect)((() => {
          Tm || Dm(!1)
        }), [Tm]);
        const im = "inGame" === mm;
        return {
          mounted: im || Tm && am,
          shown: im,
          key: fm
        }
      }(Qm);
      return (0, tm.jsx)(tm.Fragment, {
        children: Cm.mounted && (0, tm.jsx)(am.InGameUi, {
          shown: Cm.shown
        }, Cm.key)
      })
    }
  },
  4938: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(1214);
    async function Am(mm) {
      const Tm = await fetch(`${hm.clientSideServerUrls.s3Url}/${mm}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Tm.status || 403 === Tm.status) return null;
      if (!Tm.ok) throw new Error(`Failed to download the texture pack (${Tm.status})`);
      return await Tm.json()
    }
  },
  8868: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(1329),
      Am = fm(1235),
      am = fm(653);

    function xm(mm) {
      return mm = function(mm, Tm) {
        var fm;
        const hm = new URLSearchParams(Tm),
          Am = hm.get("lobby"),
          am = hm.get("vm"),
          xm = null !== (fm = Am) && void 0 !== fm ? fm : mm.lobbyName,
          wm = null !== am && void 0 !== am ? am : mm.directJoinVmUrl;
        if (xm === mm.lobbyName && wm === mm.directJoinVmUrl) return mm;
        return {
          ...mm,
          lobbyName: xm,
          directJoinVmUrl: wm
        }
      }(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), mm = function(mm) {
        if ((0, am.H)(mm.directJoinVmUrl)) return mm;
        const Tm = (0, Am.S)(mm.directJoinVmUrl);
        null === Tm && (mm.directJoinVmUrl = void 0);
        return mm
      }(mm = function(mm) {
        if ((0, am.H)(mm.gameNameWithVariation)) return mm;
        return mm.gameNameWithVariation = (0, hm.m)(mm.gameNameWithVariation), mm
      }(mm))
    }
  },
  8866: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      g: () => Am
    });
    let hm = !1;

    function Am() {
      hm = !0
    }

    function am() {
      return hm
    }
  },
  8858: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      c: () => Em,
      e: () => Om
    });
    var hm = fm(3148),
      Am = fm(2253),
      am = fm(2114),
      xm = fm(4581),
      wm = fm(3505),
      Dm = fm(8866);
    let im = null;

    function Rm() {
      return Promise.all([fm.e(74), fm.e(77), fm.e(89), fm.e(211), fm.e(76), fm.e(210), fm.e(134), fm.e(196), fm.e(139), fm.e(87), fm.e(218), fm.e(63)]).then((() => fm(40755)))
    }

    function pm() {
      Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(89), fm.e(86), fm.e(269), fm.e(189), fm.e(223), fm.e(247), fm.e(218), fm.e(46)]).then((() => fm(41069))).catch((() => {}))
    }

    function Em() {
      return xm.c.cancelDownloadForJoin(), (0, wm.e)(), (0, Am.i)(), (0, Dm.g)(), (0, am.h)(), pm(), Promise.all([fm.e(77), fm.e(89), fm.e(211), fm.e(210), fm.e(134), fm.e(139), fm.e(58)]).then((() => fm(41116))).then((mm => {
        let {
          startJoinLoad: Tm
        } = mm;
        Tm()
      }), (() => {})), im ??= Rm().then((mm => (mm.startWasmPlay(), mm.followPageUiPack((mm => {
        hm.b.showGamePack(mm)
      })), mm)), (mm => {
        throw im = null, mm
      })), im
    }

    function om() {
      return pm(), fm.e(271).then((() => fm(41120))).catch((() => {})), Rm().then((() => {}))
    }

    function Om() {
      return Rm().then((mm => {
        mm.startWasmPreviews(), mm.prefetchWasmPreviews()
      }))
    }
  },
  8854: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => xm,
      h: () => wm,
      i: () => im,
      m: () => Dm
    });
    var hm = fm(198),
      Am = fm(4564);

    function am(mm) {
      return xm(mm) === hm.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function xm(mm) {
      return "object" === typeof mm && null !== mm ? mm.code : void 0
    }

    function wm(mm) {
      var Tm;
      return null !== (Tm = Object.keys(Am.e).find((Tm => Am.e[Tm] === mm))) && void 0 !== Tm ? Tm : null
    }

    function Dm(mm) {
      return "notWhitelisted" === mm ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const im = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);