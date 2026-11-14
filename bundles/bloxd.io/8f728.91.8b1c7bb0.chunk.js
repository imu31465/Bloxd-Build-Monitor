export const id = 91;
export const ids = [91];
export const modules = {
  7800: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => MB
    });
    var Vc = nc(1344),
      Ic = nc(27),
      rB = nc(3740),
      uc = nc(73),
      sc = nc(1566),
      Mc = nc(1330),
      Pc = nc(1194),
      qB = nc(1051),
      Oc = nc(3999);
    const Tc = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var fc = nc(3690),
      mB = nc(152),
      ec = nc(988),
      tB = nc(35),
      Sc = nc(1114),
      yB = nc(1495),
      zB = nc(1164),
      pc = nc(1246),
      hc = nc(3643),
      aB = nc(3536),
      lc = nc(107),
      Yc = nc(957);
    const Lc = "https://discord.gg/playbloxd";

    function gB(cB) {
      let {
        failure: Bc
      } = cB;
      const {
        t: nc
      } = (0, qB.x)(), Vc = lc.featureFlags.useDiscord ? Bc.customPack ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Bc.customPack ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Yc.jsxs)(Yc.Fragment, {
        children: [nc(Vc, {
          code: Bc.code
        }), lc.featureFlags.useDiscord && (0, Yc.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Yc.jsx)("a", {
            href: Lc,
            target: "_blank",
            rel: "noreferrer",
            children: nc("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var Uc = nc(2418),
      bB = nc(1900),
      Zc = nc(1373),
      Qc = nc(623),
      Cc = nc(1094),
      vB = nc(867),
      Dc = nc(1314),
      Nc = nc(1090),
      Ec = nc(2458),
      oc = nc(2329),
      Wc = nc(1199),
      wc = nc(1188),
      kB = nc(4031),
      Xc = nc(7809),
      Hc = nc(2244);

    function Fc(cB) {
      let {
        onApply: Bc,
        onSkip: nc
      } = cB;
      const {
        t: Vc
      } = (0, qB.x)();
      return (0, uc.useEffect)((() => {
        Hc.f.skipPlayWait()
      }), []), (0, Yc.jsx)(Wc.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Yc.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Vc("customTexturePack:downloadPrompt"), (0, Yc.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Vc("customTexturePack:authorWarning")
          }), (0, Yc.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Vc("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Bc
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: nc
        }
      })
    }
    async function Jc() {
      let cB = !1;
      const Bc = Pc.NotificationProvider.showCustomPopup({
        body: Bc => (0, Yc.jsx)(Fc, {
          onApply: () => {
            cB = !0, Bc()
          },
          onSkip: Bc
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Bc.getResult(), cB
    }
    let jB = {
      wanted: !1
    };
    let Rc = null;

    function iB(cB) {
      cB.setGamePackConfirm(Jc), Rc = cB
    }
    var Kc = nc(2659);

    function xB(cB) {
      let {
        schematicId: Bc,
        texturePackKey: nc,
        onClose: Vc
      } = cB;
      const [Ic, rB] = (0, uc.useState)("prompt"), [sc, Mc] = (0, uc.useState)(null), Pc = (0, Kc.e)();

      function qB() {
        Vc()
      }
      return "prompt" === Ic ? (0, Yc.jsx)(Fc, {
        onApply: async function() {
          rB("downloading");
          try {
            const cB = await async function(cB, Bc) {
              const nc = await (0, kB.b)(Bc);
              if (nc) return {
                pack: nc,
                key: Bc
              };
              const Vc = await ec.userContextManager.getCurrentUserContext(),
                Ic = (await Dc.e.getGame(Vc, cB, !0)).customTexturePackKey;
              if (!Ic) return null;
              const rB = await (0, kB.b)(Ic);
              if (!rB) throw new Error("The texture pack could not be found");
              return {
                pack: rB,
                key: Ic
              }
            }(Bc, nc);
            if (!Pc.current) return;
            if (!cB) return void Vc();
            if ((0, Ec.f)(cB.pack)) return void rB("refused");
            oc.c.setFromJson(cB.pack, "customGame"), await oc.c.saveTemporaryTexturePack(cB.key), Pc.current && (0, yB.reloadBloxd)()
          } catch (cB) {
            Mc(cB instanceof Error ? cB.message : String(cB)), rB("error")
          }
        },
        onSkip: qB
      }) : "downloading" === Ic ? (0, Yc.jsx)(Wc.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Yc.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Yc.jsx)(wc.e, {
            showFace: !0
          })
        })
      }) : "error" === Ic ? (0, Yc.jsx)(Wc.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: sc,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: qB
        }
      }) : "refused" === Ic ? (0, Yc.jsx)(Wc.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: qB
        }
      }) : null
    }
    var dc = nc(7811),
      Ac = nc(3515),
      Gc = nc(3517),
      cn = nc(2399),
      BB = nc(2633),
      nB = nc(3756),
      VB = nc(1152),
      IB = nc(263),
      rn = nc(299);

    function uB() {
      const cB = Ic.d.get("clientEscMenuOptions");
      sc.gameBridge.send("setLookSensitivity", Ic.d.get("isTouchScreen") ? (0, rn.j)(cB) : cB.mouseSensitivity)
    }
    async function sB(cB, Bc, nc) {
      const Vc = (0, nB.O)(Bc);
      async function uc(cB, Bc, nc, Vc) {
        var uc;
        if (Vc.aborted) return null;
        null === Ic.d.get("gameEntrySource") && (0, Ic.h)("directPlayUrl"), IB.l && (0, Xc.e)().catch((() => {})), Ic.d.set({
          gameState: "findingLobby"
        }), tB.i.Vu("loadingScreenState", "loadingPage:findingLobby");
        const Mc = await ec.userContextManager.getCurrentUserContext();
        sc.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Bc,
          discordContext: cB instanceof Cc.f ? cB.getSerialisableParams() : null
        }), (0, Gc.c)();
        const Pc = await async function(cB, Bc, nc, Vc, Ic) {
          try {
            await rB.reqLibsLoadedPromise
          } catch (uc) {
            return Sc.d.errorWithCode(uc.toString(), mB.h.LOAD_REQUIRED_LIBS, {
              error: uc,
              severity: "medium"
            })
          }
          return tB.i.Vu("matchmakeAndPlayStepCompleted", {
            step: mB.h.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, rB.matchmakeAndPlayMaybeUnloaded)(cB, Bc, nc, Vc, Ic)
        }(cB, Bc, nc, Mc, Vc), qB = Pc.isError() ? Pc.asError() : null;
        if (qB && !qB.debugResult.gs && (console.log("Failed to join lobby:", qB.message), (0, cn.h)("matchmake_failed", qB.message, mB.h[qB.code])), Vc.aborted) return sc.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== qB && void 0 !== qB && qB.debugResult.gs) return console.log("Join cancelled:", qB.message), null;
        if (qB) return Pc;
        const {
          gameNameWithVariation: Oc,
          lobbyName: Tc,
          addLobbyToRecentlyPlayed: fc
        } = Pc.getValue();
        let yB;
        uB(), (0, VB.m)().setGameViewShown(!0);
        const pc = null === (uc = Qc.e[Oc]) || void 0 === uc ? void 0 : uc.recentlyPlayedAs;
        return yB = (0, vB.k)(Oc) ? {
          type: "custom",
          name: "",
          schematicId: (0, vB.r)(Oc),
          recentLobbies: []
        } : "classic" !== Oc || (0, Nc.F)(Tc) ? pc ? {
          type: "bloxd",
          gameNameWithVariation: pc,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Oc,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, Dc.e.addRecentlyPlayedGame(Mc, yB, fc && !pc ? Tc : void 0).then((cB => {
          Mc.setRecentlyPlayedGames(cB)
        })).catch((cB => {
          console.error("Failed to record recently played game", cB)
        })), (0, zB.Q)(), Pc
      }
      return Vc && (0, Ic.h)("updateRejoin"), (0, BB.k)((async Ic => {
        try {
          let sc = cB,
            Mc = await uc(sc, Bc, nc, Ic);
          for (let cB = 0; Vc && cB < nB.l; cB++) {
            var rB;
            if (null === (rB = Mc) || void 0 === rB || !rB.isError() || Mc.asError().code !== mB.h.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, nB.Q)((0, nB.w)(cB), Ic)) return Mc;
            sc = (0, nB.z)(sc, cB + 1, "string" === typeof sc && (0, Nc.F)(sc)), Mc = await uc(sc, Bc, nc, Ic)
          }
          return Mc
        } catch (Mc) {
          if ((0, cn.h)("matchmake_failed", Mc, "unexpected"), sc.gameBridge.send("leaveGame", {
              reloadPath: Ic.aborted ? null : "/"
            }), Ic.aborted) return null;
          throw Mc
        }
      }), (async () => {
        var cB;
        Vc || (null !== (cB = Qc.e[Bc]) && void 0 !== cB && cB.playAdBeforeMatchmaking ? (Hc.f.skipPlayWait(), await new Promise((cB => {
          (0, zB.cb)((() => {
            cB(!0)
          }), "video_start")
        }))) : (0, zB.cb)((() => {}), "video_start"))
      }))
    }

    function MB() {
      const {
        t: cB
      } = (0, qB.x)(), Bc = (0, Mc.useNavigatePreserveSearch)(), nc = (0, Vc.s)(), tB = (0, Vc.z)(), Sc = (0, uc.useRef)({
        t: cB,
        navigate: Bc
      });
      Sc.current = {
        t: cB,
        navigate: Bc
      };
      const {
        gameState: lc,
        clientEscMenuOptions: Lc
      } = (0, Ic.j)(["gameState", "clientEscMenuOptions"]), Qc = (0, uc.useRef)(null), Cc = (0, uc.useRef)(null);
      var Ec;
      return (0, BB.o)(), (0, BB.p)(), Ec = IB.l, (0, uc.useEffect)((() => {
        if (!Ec) return;
        let cB = !0;
        return (0, Xc.e)().then((Bc => {
          cB && iB(Bc)
        })).catch((() => {})), () => {
          var Bc;
          cB = !1, jB.wanted = !1, null === (Bc = Rc) || void 0 === Bc || Bc.setGamePackConfirm(null), Rc = null
        }
      }), [Ec]), (0, uc.useEffect)((() => {
        var cB;
        (0, rB.needGameClientNow)();
        const {
          t: Bc,
          navigate: Vc
        } = Sc.current, uc = (0, dc.e)(tB, nc.search);
        if (tB.lobbyName && !new URLSearchParams(nc.search).has("lobby")) return void Vc((0, Zc.e)(uc.gameNameWithVariation, uc.lobbyName), {
          replace: !0
        });
        let Mc = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === nc.pathname) {
          const cB = Ic.d.get("discordContext");
          if (!cB) return void Vc("/");
          Mc = fc.c.setupDiscordLobby(cB, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: cB
          }))).catch((Bc => (console.error("Failed to setup discord lobby", Bc), {
            shouldMatchmake: !1,
            discordContext: cB
          })))
        } else if (!uc.gameNameWithVariation || !(0, Nc.B)(uc.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${uc.gameNameWithVariation}`), void Vc(-1);
        if (uc.gameNameWithVariation === Qc.current && uc.lobbyName === Cc.current) return;
        if (sc.gameBridge.latest("connectedGame").replay) return void(0, BB.i)(null);
        (0, zB.K)(), Ic.d.set({
          gameState: "loadingScreen"
        });
        const qB = function() {
          jB.wanted = !1;
          const cB = {
            wanted: !0
          };
          return jB = cB, () => cB.wanted
        }();
        if ("releaseCountdown" === (null === (cB = (0, bB.e)(uc.gameNameWithVariation)) || void 0 === cB ? void 0 : cB.type)) return console.error(`Game hasn't been released yet: ${uc.gameNameWithVariation}`), void Vc(-1);
        const pc = uc.gameNameWithVariation;
        if (pc && (IB.l || (0, vB.k)(pc))) {
          const cB = IB.l ? Promise.all([(0, Xc.e)(), ec.userContextManager.getCurrentUserContext()]).then((cB => {
            let [Bc, nc] = cB;
            if (qB()) return iB(Bc), Bc.packForGame(pc, nc, qB)
          })) : async function(cB) {
            await oc.c.indexedDbValuesAreLoaded();
            const Bc = await ec.userContextManager.getCurrentUserContext(),
              nc = (0, vB.r)(cB);
            let Vc;
            try {
              Vc = await Dc.e.getGame(Bc, nc, !0)
            } catch (uc) {
              return void console.error("Failed to get game", uc)
            }
            const Ic = Vc.customTexturePackKey;
            if (!Ic) return void(oc.c.isUsingTemporaryTexturePack() && ((0, yB.reloadBloxd)(), await new Promise((() => {}))));
            if (oc.c.isUsingTemporaryTexturePack() && oc.c.getTemporaryTexturePackSource() === Ic) return;
            const rB = Pc.NotificationProvider.showCustomPopup({
              body: cB => (0, Yc.jsx)(xB, {
                schematicId: nc,
                texturePackKey: Ic,
                onClose: cB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await rB.getResult()
          }(pc), Bc = Mc;
          Mc = cB.catch((cB => {
            console.error("Failed to check for custom texture pack", cB)
          })).then((() => Bc))
        }(0, BB.i)(null);
        let lc = !0;
        return Mc.then((cB => {
          let {
            shouldMatchmake: nc,
            discordContext: rB
          } = cB;
          lc && (nc ? sB(null !== rB && void 0 !== rB ? rB : uc.lobbyName, rB ? "classic" : uc.gameNameWithVariation, uc.directJoinVmUrl).then((cB => {
            var nc, rB;
            if (null !== cB && lc)
              if (cB.isError()) {
                var Mc;
                const qB = cB.asError(),
                  fc = null !== (Mc = qB.debugResult.severity) && void 0 !== Mc ? Mc : "high";
                if (qB.code === mB.h.SHADER_PACK) return void(0, Ac.b)(qB.message, Vc);
                const ec = Ic.d.get("gameEntrySource"),
                  tB = qB.code === mB.h.INITIALISE_WEBGL ? (0, aB.e)() : null,
                  {
                    error: Sc
                  } = qB.debugResult,
                  zB = qB.code === mB.h.REQUEST_TO_MATCHMAKING ? function(cB) {
                    var Bc;
                    return null !== (Bc = Object.keys(Oc.b).find((Bc => Oc.b[Bc] === cB))) && void 0 !== Bc ? Bc : null
                  }(qB.message) : null;
                let pc;
                if (null !== zB) Pc.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: Bc((rB = zB, "notWhitelisted" === rB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: Bc(Tc[zB]),
                  confirmText: Bc("general:ok"),
                  cancelText: ""
                }), pc = Promise.resolve(!1);
                else if (null !== tB) pc = (0, aB.j)(tB);
                else if (Sc instanceof Uc.p) nc = Sc, pc = Pc.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Yc.jsx)(gB, {
                    failure: nc
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((cB => !0 === cB));
                else {
                  let cB;
                  switch (fc) {
                    case "low":
                      cB = "face-diagonal-mouth";
                      break;
                    case "medium":
                      cB = "face-worried";
                      break;
                    case "high":
                      cB = "face-dizzy"
                  }
                  pc = Pc.NotificationProvider.showPromptPopup({
                    icon: cB,
                    title: mB.r[qB.code],
                    subtitle: (0, Yc.jsxs)(Yc.Fragment, {
                      children: [qB.message, qB.debugResult.error instanceof Error && (0, Yc.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Yc.jsx)(hc.e, {
                          errorString: qB.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: Bc("general:tryAgain"),
                    cancelText: Bc("general:cancel")
                  }).getResult().then((cB => !0 === cB))
                }
                pc.then((cB => {
                  if (cB) {
                    (0, Ic.h)(ec);
                    const cB = (0, Zc.e)(uc.gameNameWithVariation, uc.lobbyName);
                    "low" === fc ? Vc(cB) : (0, yB.reloadBloxd)(cB)
                  }
                })), sc.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Vc(-1)
              } else {
                Qc.current = cB.getValue().gameNameWithVariation, Cc.current = cB.getValue().lobbyName;
                const Bc = (0, Zc.e)(Qc.current, cB.getValue().lobbyName);
                Vc(Bc, {
                  replace: !0
                })
              }
          })).catch((cB => {
            if (!lc) return;
            Pc.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Yc.jsxs)(Yc.Fragment, {
                children: [Bc("homePage:pleaseCopyError"), (0, Yc.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Yc.jsx)(hc.e, {
                    errorString: cB.stack
                  })
                })]
              }),
              confirmText: Bc("general:tryAgain"),
              cancelText: Bc("general:cancel")
            }).getResult().then((cB => {
              !0 === cB && (0, yB.reloadBloxd)((0, Zc.e)(uc.gameNameWithVariation, uc.lobbyName))
            })), Vc(-1)
          })) : Vc(-1))
        })), () => {
          lc = !1
        }
      }), [tB, nc.search, nc.pathname]), (0, uc.useEffect)((() => {
        Lc.disableFullscreen && (0, pc.c)() ? (0, pc.f)() : !Lc.disableFullscreen && (0, pc.e)() && (0, pc.l)()
      }), [lc, Lc]), (0, uc.useEffect)((() => {
        "inGame" === lc && uB()
      }), [lc, Lc]), (0, uc.useEffect)((() => {
        "inGame" !== lc && Ic.d.set({
          openInGameMenuName: null
        })
      }), [lc]), (0, Yc.jsx)(Yc.Fragment, {
        children: "inGame" === lc && (0, Yc.jsx)(rB.InGameUi, {})
      })
    }
  },
  4031: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(1062);
    async function Ic(cB) {
      const Bc = await fetch(`${Vc.clientSideServerUrls.s3Url}/${cB}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Bc.status || 403 === Bc.status) return null;
      if (!Bc.ok) throw new Error(`Failed to download the texture pack (${Bc.status})`);
      return await Bc.json()
    }
  },
  7811: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(1373),
      Ic = nc(1090),
      rB = nc(569);

    function uc(cB) {
      return cB = function(cB, Bc) {
        var nc;
        const Vc = new URLSearchParams(Bc),
          Ic = Vc.get("lobby"),
          rB = Vc.get("vm"),
          uc = null !== (nc = Ic) && void 0 !== nc ? nc : cB.lobbyName,
          sc = null !== rB && void 0 !== rB ? rB : cB.directJoinVmUrl;
        if (uc === cB.lobbyName && sc === cB.directJoinVmUrl) return cB;
        return {
          ...cB,
          lobbyName: uc,
          directJoinVmUrl: sc
        }
      }(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), cB = function(cB) {
        if ((0, rB.E)(cB.directJoinVmUrl)) return cB;
        const Bc = (0, Ic.W)(cB.directJoinVmUrl);
        null === Bc && (cB.directJoinVmUrl = void 0);
        return cB
      }(cB = function(cB) {
        if ((0, rB.E)(cB.gameNameWithVariation)) return cB;
        return cB.gameNameWithVariation = (0, Vc.j)(cB.gameNameWithVariation), cB
      }(cB))
    }
  },
  7809: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => Mc,
      j: () => sc
    });
    var Vc = nc(2329);
    let Ic = null,
      rB = !1;

    function uc() {
      return rB = !0, Promise.all([nc.e(60), nc.e(63), nc.e(62), nc.e(61), nc.e(73), nc.e(72), nc.e(224), nc.e(199), nc.e(222), nc.e(223), nc.e(41)]).then((() => nc(38690))).catch((() => {})), Promise.all([nc.e(123), nc.e(122), nc.e(48)]).then((() => nc(38773))).then((cB => {
        let {
          startJoinLoad: Bc
        } = cB;
        Bc()
      }), (() => {})), Ic ??= Promise.all([nc.e(62), nc.e(123), nc.e(73), nc.e(176), nc.e(122), nc.e(74), nc.e(118), nc.e(223), nc.e(53)]).then((() => nc(38833))).then((cB => (cB.startWasmPlay(), cB.followPageUiPack((cB => {
        Vc.c.showGamePack(cB)
      })), cB)), (cB => {
        throw Ic = null, cB
      })), Ic
    }

    function sc() {
      return rB
    }

    function Mc() {
      return Promise.all([nc.e(62), nc.e(123), nc.e(73), nc.e(176), nc.e(122), nc.e(74), nc.e(118), nc.e(223), nc.e(53)]).then((() => nc(38833))).then((cB => {
        cB.startWasmPreviews(), cB.prefetchWasmPreviews()
      }))
    }
  },
  3999: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      f: () => Ic,
      h: () => Pc,
      k: () => sc,
      o: () => Vc,
      q: () => uc,
      t: () => Mc
    });
    const Vc = ["public", "unlisted", "private"],
      Ic = {
        public: "Public",
        unlisted: "Unlisted",
        private: "Private"
      },
      rB = {
        adminLocked: "Lobby was locked by a Bloxd admin.",
        banned: "Banned from lobby.",
        private: "Lobby was locked by owner.",
        notWhitelisted: "Only players on this world's whitelist can join."
      },
      uc = ["survival", "peaceful", "creative", "survivaladventure", "peacefuladventure", "spectator"],
      sc = ["default", "customSchematic"],
      Mc = ["default", "flat", "twoDimensions", "skyGrid", "customSchematic"],
      Pc = ["global", "perLobby", "none"]
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);