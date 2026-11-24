export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  36964: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => AD,
      f: () => UD
    });
    var pD = wD(619),
      sD = wD(35),
      KD = wD(36910);
    const rD = "replayFileKeptForReload",
      LD = "replayFileKeptForReloadAt",
      cD = "replayFileKeptForReloadTab",
      gD = 3e5,
      RD = 5e3;
    async function AD(DD, zD) {
      const wD = Date.now(),
        KD = {
          at: wD,
          bytes: DD,
          source: zD
        },
        gD = await Promise.race([(async () => await sD.g.setItem(LD, wD) && sD.g.setItem(rD, KD))(), (0, pD.H)(RD).then((() => !1))]);
      gD || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const AD = {
        at: wD,
        Nf: gD
      };
      sD.k.setItem(cD, AD)
    }
    async function UD() {
      var DD;
      const zD = sD.k.getItem(cD);
      null !== zD && sD.k.removeItem(cD);
      const wD = Date.now(),
        pD = await sD.g.getItem(LD),
        RD = null !== zD && wD - zD.at <= gD,
        AD = null !== zD && pD === zD.at;
      let UD = null;
      if (null !== pD && (AD || ("number" !== typeof pD || wD - pD > gD)) && (UD = RD && AD && zD.Nf ? await sD.g.getItem(rD) : null, await Promise.all([sD.g.removeItem(LD), sD.g.removeItem(rD)])), !RD) return null;
      if ((null === (DD = UD) || void 0 === DD ? void 0 : DD.at) !== zD.at) throw new Error(KD.e.replayNotKept.text);
      return {
        bytes: UD.bytes,
        source: UD.source
      }
    }
  },
  36956: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      f: () => KD,
      j: () => sD
    });
    const pD = [9];

    function sD(DD) {
      return pD.includes(DD)
    }

    function KD(DD) {
      return null !== DD && DD >= 3 && DD < pD[0]
    }
  },
  36910: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      f: () => gD,
      g: () => cD
    });
    var pD = wD(25);
    const sD = 1500,
      KD = 1e3,
      rD = {
        recordingStarted: {
          text: "Started recording",
          type: "Success"
        },
        recordingStopped: {
          text: "Stopped recording",
          type: "Success"
        },
        recordingSaved: {
          text: "Recording saved",
          type: "Success"
        },
        clipSaved: {
          text: "Clip saved",
          type: "Success"
        },
        limitReached: {
          text: "Your recording reached its size limit, so it was saved.",
          type: "Warning"
        },
        recordingDiscarded: {
          text: "Your recording stopped and couldn't be saved.",
          type: "Error"
        },
        recordingTurnedOff: {
          text: "This game turned off recording, so your recording was discarded",
          type: "Error",
          timeoutMs: 3e3
        },
        recordingFailed: {
          text: "Your recording couldn't be saved, so try again.",
          type: "Error"
        },
        clipFailed: {
          text: "Your clip couldn't be saved, so try again.",
          type: "Error"
        },
        clipEmpty: {
          text: "Clip buffer is empty",
          type: "Error"
        },
        clippingNotOn: {
          text: "Clipping is not enabled",
          type: "Error"
        },
        disallowed: {
          text: "Recording is turned off in this game",
          type: "Error"
        },
        closeViewerFirst: {
          text: "Close Replay Mode to start recording",
          type: "Error"
        },
        saveBusy: {
          text: "Wait for the last save to finish, then try again.",
          type: "Error"
        },
        saveClosed: {
          text: "The replay closed or changed before it was saved, so save it again.",
          type: "Error"
        },
        cantOpen: {
          text: "This replay can't be opened, so try a different file.",
          type: "Error"
        },
        replayTooOld: {
          text: "This replay was made with an older version of Bloxd and can't be opened.",
          type: "Error"
        },
        replayNotKept: {
          text: "Bloxd updated as your replay opened, so open it again.",
          type: "Error"
        },
        cropFailed: {
          text: "The crop didn't work, so try again.",
          type: "Error"
        },
        cropBusy: {
          text: "Wait for the crop to finish, then try again.",
          type: "Error"
        },
        viewerLoadFailed: {
          text: "The replay viewer didn't load, so try again.",
          type: "Error"
        },
        coreStopped: {
          text: "Reload the page to watch another replay.",
          type: "Error"
        }
      },
      LD = new Set(Object.values(rD).filter((DD => "Error" === DD.type)).map((DD => DD.text)));

    function cD(DD) {
      return DD instanceof Error && LD.has(DD.message) ? DD.message : void 0
    }

    function gD(DD) {
      var zD;
      const wD = null !== (zD = DD.timeoutMs) && void 0 !== zD ? zD : "Error" === DD.type ? sD : KD;
      pD.l.KG("showBottomMessage", {
        message: DD.text,
        timeoutLength: wD,
        type: DD.type
      })
    }
  },
  36975: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      f: () => sD
    });
    const pD = "data-replay-ui-active",
      sD = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  36981: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      f: () => AD,
      j: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(36975);

    function rD() {
      const DD = {};
      for (const {
          group: zD
        }
        of KD.f) DD[zD] = !0;
      return DD
    }
    let LD = rD();

    function cD() {
      sD.l.KG("replayViewer|uiVisibilityChanged")
    }

    function gD() {
      return LD
    }

    function RD(DD, zD) {
      LD[DD] !== zD && (LD = {
        ...LD,
        [DD]: zD
      }, "nametag" === DD && pD.e.set({
        areNametagsHidden: !zD
      }), cD())
    }

    function AD() {
      LD = rD(), pD.e.set({
        areNametagsHidden: !1
      }), cD()
    }
  },
  39216: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => TD
    });
    var pD = wD(1753),
      sD = wD(1355),
      KD = wD(58),
      rD = wD(1044),
      LD = wD.n(rD),
      cD = wD(1447),
      gD = wD(103);
    const RD = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      AD = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function UD(DD) {
      return "webm" === DD ? RD : AD
    }

    function fD(DD) {
      for (const zD of DD)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(zD)) return zD;
      return null
    }

    function ID(DD) {
      return null !== fD(UD(DD))
    }
    var BD = wD(1096);
    const GD = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function hD() {
      return ID("webm") ? "webm" : ID("mp4") ? "mp4" : "webm"
    }

    function nD(DD) {
      let {
        cards: zD
      } = DD;
      return (0, BD.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: zD.map((DD => (0, BD.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, BD.jsx)("div", {
            className: LD()("ReplayVideoExportOptionCard", {
              Selected: DD.selected,
              Disabled: DD.disabled
            }),
            onClick: () => {
              DD.disabled || DD.onSelect()
            },
            children: (0, BD.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, BD.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: DD.label
              }), (0, BD.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: DD.description
              })]
            })
          }), DD.disabled && DD.disabledReason && (0, BD.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: DD.disabledReason
          })]
        }, DD.id)))
      })
    }
    const MD = (0, KD.memo)((function(DD) {
      let {
        hasPlaybackMark: zD,
        canIncludeUi: wD,
        includeUiDisabledReason: pD,
        selectionRef: sD,
        closePopup: rD
      } = DD;
      const LD = ID("webm") || ID("mp4"),
        [RD, AD] = (0, KD.useState)(hD),
        [UD, fD] = (0, KD.useState)(wD),
        MD = LD && ID(RD);
      if (!LD) {
        const DD = (0, gD.isMobile)() ? "screen recording" : "OBS";
        return (0, BD.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, BD.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, BD.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${DD}.`
          }), (0, BD.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, BD.jsx)(cD.R, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                sD.options = null, rD()
              },
              children: "Close"
            })
          })]
        })
      }
      const OD = zD ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        JD = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !UD,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            fD(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: UD,
          disabled: !wD,
          disabledReason: pD,
          onSelect: () => {
            fD(!0)
          }
        }],
        ED = GD.map((DD => {
          const zD = ID(DD.id);
          return {
            id: DD.id,
            label: DD.label,
            description: DD.description,
            selected: RD === DD.id,
            disabled: !zD,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              AD(DD.id)
            }
          }
        }));
      return (0, BD.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, BD.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, BD.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: OD
        }), (0, BD.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, BD.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, BD.jsx)(nD, {
            cards: JD
          })]
        }), (0, BD.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, BD.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, BD.jsx)(nD, {
            cards: ED
          })]
        }), (0, BD.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, BD.jsx)(cD.o, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !MD,
            onClick: () => {
              sD.options = {
                format: RD,
                includeUi: wD && UD
              }, rD()
            },
            children: "Export"
          }), (0, BD.jsx)(cD.R, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              sD.options = null, rD()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var OD = wD(4875),
      JD = wD(36975),
      ED = wD(36981);
    let QD = null;

    function XD() {
      return function() {
        const DD = (0, ED.c)();
        for (const {
            group: zD,
            dataAttr: wD
          }
          of JD.f)
          if (wD && DD[zD]) return !0;
        return !1
      }() ? function() {
        var DD;
        return "function" === typeof(null === (DD = navigator.mediaDevices) || void 0 === DD ? void 0 : DD.getDisplayMedia)
      }() ? {
        canIncludeUi: !0,
        includeUiDisabledReason: null
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "Not supported on this device"
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "No UI to include"
      }
    }
    async function VD(DD, zD, wD) {
      return DD ? async function() {
        const DD = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const zD of DD.getAudioTracks()) zD.stop(), DD.removeTrack(zD);
        return DD
      }(): zD().captureStream(Math.max(1, Math.round(wD)))
    }
    var PD = wD(39055);
    let CD = !1;

    function xD(DD) {
      DD.holdInput(!1), (0, PD.h)(!1)
    }
    async function TD(DD) {
      var zD, wD;
      if ((0, PD.e)() || CD) return;
      const KD = DD();
      if (!KD) return;
      CD = !0;
      let rD = null;
      const LD = KD.playbackMarkInTick,
        {
          canIncludeUi: cD,
          includeUiDisabledReason: gD
        } = XD();
      try {
        rD = await async function(DD) {
          let {
            hasPlaybackMark: zD,
            canIncludeUi: wD,
            includeUiDisabledReason: pD
          } = DD;
          const KD = {
              options: null
            },
            rD = sD.NotificationProvider.showCustomPopup({
              body: DD => (0, BD.jsx)(MD, {
                hasPlaybackMark: zD,
                canIncludeUi: wD,
                includeUiDisabledReason: pD,
                selectionRef: KD,
                closePopup: DD
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await rD.getResult() ? null : KD.options
        }({
          hasPlaybackMark: null !== LD,
          canIncludeUi: cD,
          includeUiDisabledReason: gD
        })
      } finally {
        CD = !1
      }
      if (!rD) return;
      const RD = null !== (zD = null === (wD = KD.startFailure) || void 0 === wD ? void 0 : wD.call(KD)) && void 0 !== zD ? zD : null;
      if (null !== RD) return void sD.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: RD
      });
      if (! function(DD) {
          return !(0, PD.e)() && ((0, PD.h)(!0), DD.holdInput(!0), !0)
        }(KD)) return;
      let AD = null;
      try {
        AD = await VD(rD.includeUi, (() => KD.canvas()), KD.Rl)
      } catch (bD) {
        return console.error("Failed to create video stream for export", bD), xD(KD), void sD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: bD instanceof Error ? bD.message : "Could not start capture."
        })
      }
      let ID = null;
      const GD = [];
      let hD = null,
        nD = null;
      try {
        var JD, ED, TD;
        ID = KD.playbackSpeed(), KD.closeViewer(), KD.setPlaybackSpeed(1), KD.pause(), KD.seekToTick(null !== LD && void 0 !== LD ? LD : 0);
        const DD = await async function() {
          const DD = OD.Howler.masterGain;
          if (!OD.Howler.ctx || !DD) return null;
          await OD.Howler.ctx.resume();
          const zD = OD.Howler.ctx.createMediaStreamDestination();
          DD.connect(zD), QD = zD;
          const [wD] = zD.stream.getAudioTracks();
          return null !== wD && void 0 !== wD ? wD : null
        }();
        nD = new MediaStream;
        for (const pD of AD.getVideoTracks()) nD.addTrack(pD);
        DD && nD.addTrack(DD);
        const zD = function(DD) {
          const zD = fD(UD(DD));
          if (!zD) throw new Error(`No MediaRecorder mime type available for ${DD}`);
          return zD
        }(rD.format);
        hD = new MediaRecorder(nD, {
          mimeType: zD,
          videoBitsPerSecond: 8e6
        }), hD.ondataavailable = DD => {
          DD.data.size > 0 && GD.push(DD.data)
        };
        const wD = new Promise((DD => {
          hD.onstop = () => {
            DD()
          }
        }));
        await (null === (JD = KD.seekSettled) || void 0 === JD ? void 0 : JD.call(KD));
        const [cD] = AD.getVideoTracks();
        hD.start(250), KD.play();
        const gD = await
        function(DD, zD, wD) {
          return new Promise((pD => {
            let sD = !1;
            const KD = DD => {
                sD || (sD = !0, LD(), zD.removeEventListener("ended", rD), pD(DD))
              },
              rD = () => {
                KD("captureLost")
              },
              LD = DD.watchPlayback((() => {
                DD.isPlaying() || KD("completed")
              }));
            zD.addEventListener("ended", rD), wD.onerror = () => {
              KD("recorderError")
            }, "ended" !== zD.readyState ? DD.isPlaying() || KD("completed") : KD("captureLost")
          }))
        }(KD, cD, hD);
        if (KD.pause(), "inactive" !== hD.state && hD.stop(), await wD, "captureLost" === gD) return void sD.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === gD) return void sD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const RD = null !== (ED = null === (TD = KD.playbackFailure) || void 0 === TD ? void 0 : TD.call(KD)) && void 0 !== ED ? ED : null;
        if (null !== RD) return void sD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${RD} Nothing was saved.`
        });
        const BD = new Blob(GD, {
          type: zD
        });
        BD.size > 0 ? (0, pD.b)(BD, function(DD, zD) {
          const wD = function(DD) {
            return "mp4" === DD ? "mp4" : "webm"
          }(zD);
          if (DD) return `${DD.replace(/\.bloxdreplay$/i,"")}.${wD}`;
          return `bloxd-replay-${Date.now()}.${wD}`
        }(KD.fileName(), rD.format)) : sD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (bD) {
        console.error("Replay video export failed", bD), sD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: bD instanceof Error ? bD.message : "Something went wrong while exporting."
        })
      } finally {
        if (hD && "inactive" !== hD.state) try {
          hD.stop()
        } catch (bD) {
          console.error("Failed to stop MediaRecorder", bD)
        }! function() {
          const DD = OD.Howler.masterGain;
          if (QD && DD) {
            try {
              DD.disconnect(QD)
            } catch (bD) {
              console.error("Failed to disconnect Howler export tee", bD)
            }
            QD = null
          } else QD = null
        }();
        for (const DD of AD.getTracks()) DD.stop();
        if (nD)
          for (const DD of nD.getTracks()) DD.stop();
        null !== ID && KD.setPlaybackSpeed(ID), KD.pause(), xD(KD), KD.reopenViewer()
      }
    }
  },
  4875: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Howl: () => sD.Howl,
      Howler: () => sD.Howler,
      musicOutput: () => GD,
      readyAudioContext: () => hD
    });
    var pD, sD = wD(4877),
      KD = wD(3444),
      rD = wD(4682);
    const LD = sD.Howler;

    function cD() {
      var DD, zD;
      if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
      const wD = navigator.audioSession;
      let pD;
      "auto" === (null === wD || void 0 === wD ? void 0 : wD.type) && (wD.type = "ambient");
      try {
        pD = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const sD = pD.createGain();
      sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
    }
    LD._mobileUnloaded = !0;
    const gD = LD.volume.bind(sD.Howler);
    LD.volume = function() {
      return cD(), gD(...arguments)
    };
    const RD = LD.mute.bind(sD.Howler);
    LD.mute = DD => (cD(), RD(DD));
    const AD = sD.Howl.prototype,
      UD = AD.init;

    function fD() {
      for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
        const DD = new Audio;
        DD._unlocked = !0, LD._releaseHtml5Audio(DD)
      }
      for (const zD of LD._howls)
        if (!zD._webAudio)
          for (const wD of zD._getSoundIds()) {
            var DD;
            const pD = null === (DD = zD._soundById(wD)) || void 0 === DD ? void 0 : DD._node;
            pD && !pD._unlocked && (pD._unlocked = !0, pD.load())
          }
    }
    AD.init = function(DD) {
      return cD(), UD.call(this, DD)
    }, (0, rD.l)() && (LD._unlockAudio = () => {
      const DD = LD.ctx;
      if (LD._audioUnlocked || !DD) return;
      LD.autoUnlock = !1;
      const zD = DD.createBuffer(1, 1, 22050);
      LD._scratchBuffer = zD;
      const wD = new AbortController;
      let pD = "afterPaint";
      const sD = () => {
          var pD;
          if (LD._audioUnlocked) return;
          null === (pD = LD._autoResume) || void 0 === pD || pD.call(LD);
          const sD = DD.createBufferSource();
          sD.buffer = zD, sD.connect(DD.destination), sD.start(0), DD.resume().catch((() => {})), sD.onended = () => {
            sD.disconnect(0), LD._audioUnlocked = !0, wD.abort();
            for (const DD of LD._howls) DD._emit("unlock")
          }
        },
        cD = () => {
          fD(), sD()
        },
        gD = zD => {
          if (fD(), "inTap" === pD) {
            if ("running" === DD.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), sD()
          } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
            pD = "inTap", sD()
          })))
        };
      for (const KD of ["touchstart", "touchend"]) document.addEventListener(KD, cD, {
        capture: !0,
        signal: wD.signal
      });
      for (const KD of rD.d) document.addEventListener(KD, gD, {
        capture: !0,
        signal: wD.signal
      })
    });
    let ID = 0;
    const BD = null === (pD = LD._autoSuspend) || void 0 === pD ? void 0 : pD.bind(sD.Howler);

    function GD() {
      hD();
      const {
        ctx: DD,
        masterGain: zD
      } = LD;
      return DD && zD ? {
        ctx: DD,
        destination: zD,
        holdAwake: DD => {
          var zD, wD;
          (ID += DD ? 1 : -1, DD) ? null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD): null === (wD = LD._autoSuspend) || void 0 === wD || wD.call(LD)
        },
        wake: () => {
          var zD;
          "running" !== DD.state && (null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD), DD.resume().catch((() => {})))
        }
      } : null
    }

    function hD() {
      var DD;
      (LD.volume(), LD.ctx && LD.autoUnlock) && (null === (DD = LD._unlockAudio) || void 0 === DD || DD.call(LD))
    }
    BD && (LD._autoSuspend = () => ID > 0 ? sD.Howler : BD())
  },
  42450: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      e: () => sD
    });
    const pD = ["recording", "freecam", "keyframe"];

    function sD() {
      const DD = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(DD[1]) << 32n | BigInt(DD[0])
    }
  },
  60390: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      HOLD_TIMEOUT_MS: () => gD,
      ReplayViewer: () => AD
    });
    var pD = wD(36910),
      sD = wD(36964),
      KD = wD(36956),
      rD = wD(36981),
      LD = wD(4817),
      cD = wD(42450);
    const gD = 1e4,
      RD = new Set(["KI"]);
    class AD {
      constructor(DD) {
        var zD;
        this.deps = DD, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zD = DD.now) && void 0 !== zD ? zD : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== LD.nd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Qg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? pD.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(DD, zD) {
        var wD, KD, rD, cD;
        const {
          client: gD
        } = this.deps;
        if (!this.playback) {
          if (!gD.setPlayback(!0)) throw new Error(pD.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const RD = this.epoch;
        let AD;
        try {
          AD = await gD.open(DD, (() => (0, sD.c)(DD, zD)))
        } finally {
          this.loadingOpens--
        }
        if (RD !== this.epoch && "reloading" !== AD) throw new Error(pD.e.coreStopped.text);
        if ("opening" !== AD) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const DD = function(DD) {
            switch (DD) {
              case "reloading":
                return null;
              case "stopped":
              case LD.fd.ModuleTrap:
                return pD.e.coreStopped;
              case LD.fd.ModuleLoad:
                return pD.e.viewerLoadFailed;
              case LD.fd.TooLarge:
                return pD.e.cantOpen
            }
          }(AD);
          if (null === DD) return;
          throw new Error(DD.text)
        }
        return this.rejectSave(new Error(pD.e.saveClosed.text)), this.fileName = null !== (wD = null !== (KD = zD.fileName) && void 0 !== KD ? KD : null === (rD = zD.fileHandle) || void 0 === rD ? void 0 : rD.name) && void 0 !== wD ? wD : null, this.fileHandle = null !== (cD = zD.fileHandle) && void 0 !== cD ? cD : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((DD, zD) => {
          this.pendingOpen = {
            resolve: DD,
            reject: zD
          }
        }))
      }
      play() {
        this.holds.has("KI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("KI")
      }
      seek(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this.lastView;
        null !== wD && (zD || DD < wD.DU) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(DD, zD)
      }
      setSpeed(DD) {
        this.deps.client.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.client.setCameraMode(DD)
      }
      cycleCameraMode() {
        const DD = this.lastView;
        null !== DD && DD.state !== LD.nd.None && this.setCameraMode(cD.c[(cD.c.indexOf(DD.cameraMode) + 1) % cD.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(DD) {
        this.edited(this.deps.client.setKeyframe(DD))
      }
      moveKeyframe(DD, zD) {
        this.edited(this.deps.client.moveKeyframe(DD, zD))
      }
      deleteKeyframes(DD, zD) {
        this.edited(this.deps.client.deleteKeyframes(DD, zD))
      }
      setMark(DD) {
        this.edited(this.deps.client.setMark(DD))
      }
      crop(DD, zD) {
        return !(zD <= DD) && (null !== this.pendingSave ? (this.deps.notify(pD.e.saveBusy), !1) : !!this.deps.client.crop(DD, zD) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(pD.e.saveBusy.text)) : new Promise(((DD, zD) => {
          const wD = {
            resolve: DD,
            reject: zD
          };
          this.pendingSave = wD, this.editsAtSave = this.edits, this.deps.client.save((0, cD.e)()).then((DD => {
            this.pendingSave === wD && this.saveStarted(DD)
          }), (DD => {
            this.pendingSave === wD && this.rejectSave(DD instanceof Error ? DD : new Error(String(DD)))
          }))
        }))
      }
      saveStarted(DD) {
        switch (DD) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(DD, zD) {
        var wD, pD;
        this.fileHandle = DD, this.fileName = null !== (wD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.name) && void 0 !== pD ? pD : zD) && void 0 !== wD ? wD : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pD.e.coreStopped.text)), this.rejectSave(new Error(pD.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var DD, zD, wD;
        const pD = this.deps.client.view(),
          sD = pD !== this.lastView;
        this.lastView = pD, this.opening && null !== pD && pD.state !== LD.nd.None && pD.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, rD.f)()), this.cropAsked ? (this.cropAsked = !1, null !== pD && pD.state === LD.nd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== pD && pD.state !== LD.nd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const KD = 0 === this.settleFrames && 0 === (null !== (DD = null === (zD = (wD = this.deps).meshPending) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && KD && this.release("opening"), this.holds.has("seek") && KD && this.release("seek"), this.holds.has("crop") && !this.cropRunning && KD && this.release("crop");
        const cD = this.now();
        for (const [rD, LD] of this.holds) !RD.has(rD) && cD - LD >= gD && this.release(rD);
        this.saveRefused && !this.cropping && this.saveFailed(!1), sD && this.deps.onChange()
      }
      cropped() {
        (0, rD.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(DD) {
        switch (DD.reason) {
          case LD.fd.TooLarge:
            break;
          case LD.fd.Open:
          case LD.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const zD = (0, KD.f)(DD.version) ? pD.e.replayTooOld : pD.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(zD), this.settleOpen(new Error(zD.text));
            break
          }
          case LD.fd.Crop:
            if (DD.code === LD.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pD.e.cropFailed);
            break;
          case LD.fd.ModuleTrap:
          case LD.fd.ModuleLoad:
          case LD.fd.Port:
            this.moduleEnded(DD.reason === LD.fd.ModuleTrap ? pD.e.coreStopped : pD.e.cantOpen);
            break;
          case LD.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${DD.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(DD) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(DD), this.settleOpen(new Error(DD.text))
      }
      saveDone(DD) {
        const zD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zD || void 0 === zD || zD.resolve(DD)
      }
      saveFailed(DD) {
        this.rejectSave(new Error(DD ? pD.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(DD) {
        DD && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pD.e.cropBusy.text)) : this.deps.notify(pD.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(DD) {
        const zD = this.pendingOpen;
        this.pendingOpen = null, null === DD ? null === zD || void 0 === zD || zD.resolve() : null === zD || void 0 === zD || zD.reject(DD)
      }
      rejectSave(DD) {
        const zD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zD || void 0 === zD || zD.reject(DD)
      }
      hold(DD) {
        const zD = 0 === this.holds.size;
        this.holds.set(DD, this.now()), zD && this.deps.setHoldDraws(!0)
      }
      release(DD) {
        this.holds.delete(DD) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60386: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      MESH_TAIL_MS: () => gD,
      PLAY_START_TIMEOUT_MS: () => LD,
      startWasmReplayVideoExport: () => AD
    });
    var pD = wD(39216),
      sD = wD(60390),
      KD = wD(4817),
      rD = wD(2394);
    const LD = sD.HOLD_TIMEOUT_MS + 5e3,
      cD = 50,
      gD = 200;

    function RD(DD) {
      var zD;
      return (null === (zD = DD.view) || void 0 === zD ? void 0 : zD.state) === KD.nd.Cropping || DD.Qg.includes("crop")
    }

    function AD(DD) {
      return (0, pD.c)((() => function(DD) {
        var zD, wD, pD, sD, AD, UD;
        const fD = DD.viewer(),
          ID = null !== (zD = null === fD || void 0 === fD ? void 0 : fD.view) && void 0 !== zD ? zD : null,
          BD = DD.canvas();
        if (!fD || !ID || ID.state === KD.nd.None || 0 === ID.totalTicks || !BD || RD(fD)) return null;
        const GD = null !== (wD = DD.now) && void 0 !== wD ? wD : () => performance.now(),
          hD = fD.id,
          nD = () => {
            const zD = DD.viewer();
            return zD === fD && zD.id === hD && zD.isOpen ? zD : null
          },
          MD = Math.min(null !== (pD = null === (sD = ID.mark) || void 0 === sD ? void 0 : sD.outTick) && void 0 !== pD ? pD : 1 / 0, ID.totalTicks - 1);
        let OD = null,
          JD = !1;
        const ED = () => {
          var DD, zD;
          return (null === (DD = nD()) || void 0 === DD || null === (zD = DD.view) || void 0 === zD ? void 0 : zD.state) === KD.nd.Playing
        };
        return {
          Rl: KD.Ed,
          playbackMarkInTick: null !== (AD = null === (UD = ID.mark) || void 0 === UD ? void 0 : UD.inTick) && void 0 !== AD ? AD : null,
          startFailure: () => {
            const DD = nD();
            return null === DD ? "Another replay opened. Export it again from there." : RD(DD) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var DD, zD;
            return null !== (DD = null === (zD = nD()) || void 0 === zD ? void 0 : zD.fileName) && void 0 !== DD ? DD : null
          },
          playbackSpeed: () => {
            var DD, zD, wD;
            return null !== (DD = null === (zD = nD()) || void 0 === zD || null === (wD = zD.view) || void 0 === wD ? void 0 : wD.speed) && void 0 !== DD ? DD : 1
          },
          setPlaybackSpeed: DD => {
            var zD;
            null === (zD = nD()) || void 0 === zD || zD.setSpeed(DD)
          },
          play: () => {
            var DD;
            JD = !1, OD = GD(), null === (DD = nD()) || void 0 === DD || DD.play()
          },
          pause: () => {
            var DD;
            null === (DD = nD()) || void 0 === DD || DD.pause()
          },
          seekToTick: DD => {
            var zD;
            null === (zD = nD()) || void 0 === zD || zD.seek(DD, !0)
          },
          seekSettled: () => new Promise((DD => {
            const zD = setInterval((() => {
              const wD = nD();
              null === wD ? (clearInterval(zD), DD()) : wD.Qg.includes("seek") || (clearInterval(zD), setTimeout(DD, gD))
            }), cD)
          })),
          isPlaying: () => {
            var DD, zD, wD;
            return null !== OD && null !== nD() && (!!ED() || !JD && (null !== (DD = null === (zD = nD()) || void 0 === zD || null === (wD = zD.view) || void 0 === wD ? void 0 : wD.DU) && void 0 !== DD ? DD : 0) < MD && GD() - OD < LD)
          },
          watchPlayback: zD => {
            const wD = DD.watchViewer((() => {
                JD ||= null !== OD && ED(), zD()
              })),
              pD = setTimeout(zD, LD + 1);
            return () => {
              clearTimeout(pD), wD()
            }
          },
          playbackFailure: () => {
            var DD, zD;
            const wD = nD();
            return null === wD ? "The replay closed before the video finished." : (null !== (DD = null === (zD = wD.view) || void 0 === zD ? void 0 : zD.DU) && void 0 !== DD ? DD : 0) >= MD ? null : JD ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => BD,
          closeViewer: () => {
            DD.requestViewer("close")
          },
          reopenViewer: () => {
            DD.requestViewer("open")
          },
          holdInput: rD.f
        }
      }(DD)))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);