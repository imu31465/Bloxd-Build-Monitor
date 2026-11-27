export const id = 79;
export const ids = [73, 79, 110];
export const modules = {
  38101: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => KR,
      g: () => wR
    });
    var yR = GR(679),
      tR = GR(46),
      uR = GR(38053);
    const ZR = "replayFileKeptForReload",
      qR = "replayFileKeptForReloadAt",
      iR = "replayFileKeptForReloadTab",
      fR = 3e5,
      VR = 5e3;
    async function KR(RR, JR) {
      const GR = Date.now(),
        uR = {
          at: GR,
          bytes: RR,
          source: JR
        },
        fR = await Promise.race([(async () => await tR.g.setItem(qR, GR) && tR.g.setItem(ZR, uR))(), (0, yR.T)(VR).then((() => !1))]);
      fR || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const KR = {
        at: GR,
        tK: fR
      };
      tR.k.setItem(iR, KR)
    }
    async function wR() {
      var RR;
      const JR = tR.k.getItem(iR);
      null !== JR && tR.k.removeItem(iR);
      const GR = Date.now(),
        yR = await tR.g.getItem(qR),
        VR = null !== JR && GR - JR.at <= fR,
        KR = null !== JR && yR === JR.at;
      let wR = null;
      if (null !== yR && (KR || ("number" !== typeof yR || GR - yR > fR)) && (wR = VR && KR && JR.tK ? await tR.g.getItem(ZR) : null, await Promise.all([tR.g.removeItem(qR), tR.g.removeItem(ZR)])), !VR) return null;
      if ((null === (RR = wR) || void 0 === RR ? void 0 : RR.at) !== JR.at) throw new Error(uR.d.replayNotKept.text);
      return {
        bytes: wR.bytes,
        source: wR.source
      }
    }
  },
  38094: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      g: () => uR,
      k: () => tR
    });
    const yR = [9];

    function tR(RR) {
      return yR.includes(RR)
    }

    function uR(RR) {
      return null !== RR && RR >= 3 && RR < yR[0]
    }
  },
  38053: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => fR,
      i: () => iR
    });
    var yR = GR(32);
    const tR = 1500,
      uR = 1e3,
      ZR = {
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
      qR = new Set(Object.values(ZR).filter((RR => "Error" === RR.type)).map((RR => RR.text)));

    function iR(RR) {
      return RR instanceof Error && qR.has(RR.message) ? RR.message : void 0
    }

    function fR(RR) {
      var JR;
      const GR = null !== (JR = RR.timeoutMs) && void 0 !== JR ? JR : "Error" === RR.type ? tR : uR;
      yR.n.JK("showBottomMessage", {
        message: RR.text,
        timeoutLength: GR,
        type: RR.type
      })
    }
  },
  38112: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      h: () => tR
    });
    const yR = "data-replay-ui-active",
      tR = [{
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
  38116: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      f: () => KR,
      i: () => VR
    });
    var yR = GR(25),
      tR = GR(32),
      uR = GR(38112);

    function ZR() {
      const RR = {};
      for (const {
          group: JR
        }
        of uR.h) RR[JR] = !0;
      return RR
    }
    let qR = ZR();

    function iR() {
      tR.n.JK("replayViewer|uiVisibilityChanged")
    }

    function fR() {
      return qR
    }

    function VR(RR, JR) {
      qR[RR] !== JR && (qR = {
        ...qR,
        [RR]: JR
      }, "nametag" === RR && yR.d.set({
        areNametagsHidden: !JR
      }), iR())
    }

    function KR() {
      qR = ZR(), yR.d.set({
        areNametagsHidden: !1
      }), iR()
    }
  },
  40530: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => vR
    });
    var yR = GR(1963),
      tR = GR(1493),
      uR = GR(66),
      ZR = GR(1163),
      qR = GR.n(ZR),
      iR = GR(1590),
      fR = GR(103);
    const VR = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      KR = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function wR(RR) {
      return "webm" === RR ? VR : KR
    }

    function rR(RR) {
      for (const JR of RR)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(JR)) return JR;
      return null
    }

    function eR(RR) {
      return null !== rR(wR(RR))
    }
    var aR = GR(1378);
    const LR = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function nR() {
      return eR("webm") ? "webm" : eR("mp4") ? "mp4" : "webm"
    }

    function UR(RR) {
      let {
        cards: JR
      } = RR;
      return (0, aR.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: JR.map((RR => (0, aR.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, aR.jsx)("div", {
            className: qR()("ReplayVideoExportOptionCard", {
              Selected: RR.selected,
              Disabled: RR.disabled
            }),
            onClick: () => {
              RR.disabled || RR.onSelect()
            },
            children: (0, aR.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, aR.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: RR.label
              }), (0, aR.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: RR.description
              })]
            })
          }), RR.disabled && RR.disabledReason && (0, aR.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: RR.disabledReason
          })]
        }, RR.id)))
      })
    }
    const WR = (0, uR.memo)((function(RR) {
      let {
        hasPlaybackMark: JR,
        canIncludeUi: GR,
        includeUiDisabledReason: yR,
        selectionRef: tR,
        closePopup: ZR
      } = RR;
      const qR = eR("webm") || eR("mp4"),
        [VR, KR] = (0, uR.useState)(nR),
        [wR, rR] = (0, uR.useState)(GR),
        WR = qR && eR(VR);
      if (!qR) {
        const RR = (0, fR.isMobile)() ? "screen recording" : "OBS";
        return (0, aR.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, aR.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, aR.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${RR}.`
          }), (0, aR.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, aR.jsx)(iR.M, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                tR.options = null, ZR()
              },
              children: "Close"
            })
          })]
        })
      }
      const AR = JR ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        CR = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !wR,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            rR(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: wR,
          disabled: !GR,
          disabledReason: yR,
          onSelect: () => {
            rR(!0)
          }
        }],
        XR = LR.map((RR => {
          const JR = eR(RR.id);
          return {
            id: RR.id,
            label: RR.label,
            description: RR.description,
            selected: VR === RR.id,
            disabled: !JR,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              KR(RR.id)
            }
          }
        }));
      return (0, aR.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, aR.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, aR.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: AR
        }), (0, aR.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, aR.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, aR.jsx)(UR, {
            cards: CR
          })]
        }), (0, aR.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, aR.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, aR.jsx)(UR, {
            cards: XR
          })]
        }), (0, aR.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, aR.jsx)(iR.n, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !WR,
            onClick: () => {
              tR.options = {
                format: VR,
                includeUi: GR && wR
              }, ZR()
            },
            children: "Export"
          }), (0, aR.jsx)(iR.M, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              tR.options = null, ZR()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var AR = GR(5742),
      CR = GR(38112),
      XR = GR(38116);
    let MR = null;

    function BR() {
      return function() {
        const RR = (0, XR.e)();
        for (const {
            group: JR,
            dataAttr: GR
          }
          of CR.h)
          if (GR && RR[JR]) return !0;
        return !1
      }() ? function() {
        var RR;
        return "function" === typeof(null === (RR = navigator.mediaDevices) || void 0 === RR ? void 0 : RR.getDisplayMedia)
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
    async function lR(RR, JR, GR) {
      return RR ? async function() {
        const RR = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const JR of RR.getAudioTracks()) JR.stop(), RR.removeTrack(JR);
        return RR
      }(): JR().captureStream(Math.max(1, Math.round(GR)))
    }
    var pR = GR(40333);
    let gR = !1;

    function bR(RR) {
      RR.holdInput(!1), (0, pR.f)(!1)
    }
    async function vR(RR) {
      var JR, GR;
      if ((0, pR.b)() || gR) return;
      const uR = RR();
      if (!uR) return;
      gR = !0;
      let ZR = null;
      const qR = uR.playbackMarkInTick,
        {
          canIncludeUi: iR,
          includeUiDisabledReason: fR
        } = BR();
      try {
        ZR = await async function(RR) {
          let {
            hasPlaybackMark: JR,
            canIncludeUi: GR,
            includeUiDisabledReason: yR
          } = RR;
          const uR = {
              options: null
            },
            ZR = tR.NotificationProvider.showCustomPopup({
              body: RR => (0, aR.jsx)(WR, {
                hasPlaybackMark: JR,
                canIncludeUi: GR,
                includeUiDisabledReason: yR,
                selectionRef: uR,
                closePopup: RR
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await ZR.getResult() ? null : uR.options
        }({
          hasPlaybackMark: null !== qR,
          canIncludeUi: iR,
          includeUiDisabledReason: fR
        })
      } finally {
        gR = !1
      }
      if (!ZR) return;
      const VR = null !== (JR = null === (GR = uR.startFailure) || void 0 === GR ? void 0 : GR.call(uR)) && void 0 !== JR ? JR : null;
      if (null !== VR) return void tR.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: VR
      });
      if (! function(RR) {
          return !(0, pR.b)() && ((0, pR.f)(!0), RR.holdInput(!0), !0)
        }(uR)) return;
      let KR = null;
      try {
        KR = await lR(ZR.includeUi, (() => uR.canvas()), uR.lH)
      } catch (OR) {
        return console.error("Failed to create video stream for export", OR), bR(uR), void tR.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: OR instanceof Error ? OR.message : "Could not start capture."
        })
      }
      let eR = null;
      const LR = [];
      let nR = null,
        UR = null;
      try {
        var CR, XR, vR;
        eR = uR.playbackSpeed(), uR.closeViewer(), uR.setPlaybackSpeed(1), uR.pause(), uR.seekToTick(null !== qR && void 0 !== qR ? qR : 0);
        const RR = await async function() {
          const RR = AR.Howler.masterGain;
          if (!AR.Howler.ctx || !RR) return null;
          await AR.Howler.ctx.resume();
          const JR = AR.Howler.ctx.createMediaStreamDestination();
          RR.connect(JR), MR = JR;
          const [GR] = JR.stream.getAudioTracks();
          return null !== GR && void 0 !== GR ? GR : null
        }();
        UR = new MediaStream;
        for (const yR of KR.getVideoTracks()) UR.addTrack(yR);
        RR && UR.addTrack(RR);
        const JR = function(RR) {
          const JR = rR(wR(RR));
          if (!JR) throw new Error(`No MediaRecorder mime type available for ${RR}`);
          return JR
        }(ZR.format);
        nR = new MediaRecorder(UR, {
          mimeType: JR,
          videoBitsPerSecond: 8e6
        }), nR.ondataavailable = RR => {
          RR.data.size > 0 && LR.push(RR.data)
        };
        const GR = new Promise((RR => {
          nR.onstop = () => {
            RR()
          }
        }));
        await (null === (CR = uR.seekSettled) || void 0 === CR ? void 0 : CR.call(uR));
        const [iR] = KR.getVideoTracks();
        nR.start(250), uR.play();
        const fR = await
        function(RR, JR, GR) {
          return new Promise((yR => {
            let tR = !1;
            const uR = RR => {
                tR || (tR = !0, qR(), JR.removeEventListener("ended", ZR), yR(RR))
              },
              ZR = () => {
                uR("captureLost")
              },
              qR = RR.watchPlayback((() => {
                RR.isPlaying() || uR("completed")
              }));
            JR.addEventListener("ended", ZR), GR.onerror = () => {
              uR("recorderError")
            }, "ended" !== JR.readyState ? RR.isPlaying() || uR("completed") : uR("captureLost")
          }))
        }(uR, iR, nR);
        if (uR.pause(), "inactive" !== nR.state && nR.stop(), await GR, "captureLost" === fR) return void tR.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === fR) return void tR.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const VR = null !== (XR = null === (vR = uR.playbackFailure) || void 0 === vR ? void 0 : vR.call(uR)) && void 0 !== XR ? XR : null;
        if (null !== VR) return void tR.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${VR} Nothing was saved.`
        });
        const aR = new Blob(LR, {
          type: JR
        });
        aR.size > 0 ? (0, yR.e)(aR, function(RR, JR) {
          const GR = function(RR) {
            return "mp4" === RR ? "mp4" : "webm"
          }(JR);
          if (RR) return `${RR.replace(/\.bloxdreplay$/i,"")}.${GR}`;
          return `bloxd-replay-${Date.now()}.${GR}`
        }(uR.fileName(), ZR.format)) : tR.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (OR) {
        console.error("Replay video export failed", OR), tR.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: OR instanceof Error ? OR.message : "Something went wrong while exporting."
        })
      } finally {
        if (nR && "inactive" !== nR.state) try {
          nR.stop()
        } catch (OR) {
          console.error("Failed to stop MediaRecorder", OR)
        }! function() {
          const RR = AR.Howler.masterGain;
          if (MR && RR) {
            try {
              RR.disconnect(MR)
            } catch (OR) {
              console.error("Failed to disconnect Howler export tee", OR)
            }
            MR = null
          } else MR = null
        }();
        for (const RR of KR.getTracks()) RR.stop();
        if (UR)
          for (const RR of UR.getTracks()) RR.stop();
        null !== eR && uR.setPlaybackSpeed(eR), uR.pause(), bR(uR), uR.reopenViewer()
      }
    }
  },
  5742: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Howl: () => tR.Howl,
      Howler: () => tR.Howler,
      musicOutput: () => LR,
      readyAudioContext: () => nR
    });
    var yR, tR = GR(5744),
      uR = GR(4757),
      ZR = GR(5456);
    const qR = tR.Howler;

    function iR() {
      var RR, JR;
      if (qR.ctx || !qR.usingWebAudio || "undefined" === typeof AudioContext || !(0, ZR.h)()) return;
      const GR = navigator.audioSession;
      let yR;
      "auto" === (null === GR || void 0 === GR ? void 0 : GR.type) && (GR.type = "ambient");
      try {
        yR = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tR = yR.createGain();
      tR.gain.setValueAtTime(qR._muted ? 0 : null !== (RR = qR._volume) && void 0 !== RR ? RR : 1, yR.currentTime), tR.connect(yR.destination), qR.ctx = yR, qR.masterGain = tR, null === (JR = qR._setup) || void 0 === JR || JR.call(qR)
    }
    qR._mobileUnloaded = !0;
    const fR = qR.volume.bind(tR.Howler);
    qR.volume = function() {
      return iR(), fR(...arguments)
    };
    const VR = qR.mute.bind(tR.Howler);
    qR.mute = RR => (iR(), VR(RR));
    const KR = tR.Howl.prototype,
      wR = KR.init;

    function rR() {
      for (; qR._html5AudioPool.length < qR.html5PoolSize;) {
        const RR = new Audio;
        RR._unlocked = !0, qR._releaseHtml5Audio(RR)
      }
      for (const JR of qR._howls)
        if (!JR._webAudio)
          for (const GR of JR._getSoundIds()) {
            var RR;
            const yR = null === (RR = JR._soundById(GR)) || void 0 === RR ? void 0 : RR._node;
            yR && !yR._unlocked && (yR._unlocked = !0, yR.load())
          }
    }
    KR.init = function(RR) {
      return iR(), wR.call(this, RR)
    }, (0, ZR.h)() && (qR._unlockAudio = () => {
      const RR = qR.ctx;
      if (qR._audioUnlocked || !RR) return;
      qR.autoUnlock = !1;
      const JR = RR.createBuffer(1, 1, 22050);
      qR._scratchBuffer = JR;
      const GR = new AbortController;
      let yR = "afterPaint";
      const tR = () => {
          var yR;
          if (qR._audioUnlocked) return;
          null === (yR = qR._autoResume) || void 0 === yR || yR.call(qR);
          const tR = RR.createBufferSource();
          tR.buffer = JR, tR.connect(RR.destination), tR.start(0), RR.resume().catch((() => {})), tR.onended = () => {
            tR.disconnect(0), qR._audioUnlocked = !0, GR.abort();
            for (const RR of qR._howls) RR._emit("unlock")
          }
        },
        iR = () => {
          rR(), tR()
        },
        fR = JR => {
          if (rR(), "inTap" === yR) {
            if ("running" === RR.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), tR()
          } else "afterPaint" === yR && (yR = "queued", (0, uR.d)(JR.timeStamp, (() => {
            yR = "inTap", tR()
          })))
        };
      for (const uR of ["touchstart", "touchend"]) document.addEventListener(uR, iR, {
        capture: !0,
        signal: GR.signal
      });
      for (const uR of ZR.b) document.addEventListener(uR, fR, {
        capture: !0,
        signal: GR.signal
      })
    });
    let eR = 0;
    const aR = null === (yR = qR._autoSuspend) || void 0 === yR ? void 0 : yR.bind(tR.Howler);

    function LR() {
      nR();
      const {
        ctx: RR,
        masterGain: JR
      } = qR;
      return RR && JR ? {
        ctx: RR,
        destination: JR,
        holdAwake: RR => {
          var JR, GR;
          (eR += RR ? 1 : -1, RR) ? null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR): null === (GR = qR._autoSuspend) || void 0 === GR || GR.call(qR)
        },
        wake: () => {
          var JR;
          "running" !== RR.state && (null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR), RR.resume().catch((() => {})))
        }
      } : null
    }

    function nR() {
      var RR;
      (qR.volume(), qR.ctx && qR.autoUnlock) && (null === (RR = qR._unlockAudio) || void 0 === RR || RR.call(qR))
    }
    aR && (qR._autoSuspend = () => eR > 0 ? tR.Howler : aR())
  },
  54582: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      g: () => tR
    });
    const yR = ["recording", "freecam", "keyframe"];

    function tR() {
      const RR = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(RR[1]) << 32n | BigInt(RR[0])
    }
  },
  64119: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      HOLD_TIMEOUT_MS: () => fR,
      ReplayViewer: () => KR
    });
    var yR = GR(38053),
      tR = GR(38101),
      uR = GR(38094),
      ZR = GR(38116),
      qR = GR(5676),
      iR = GR(54582);
    const fR = 1e4,
      VR = new Set(["Be"]);
    class KR {
      constructor(RR) {
        var JR;
        this.deps = RR, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (JR = RR.now) && void 0 !== JR ? JR : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== qR.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Qq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? yR.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(RR, JR) {
        var GR, uR, ZR, iR;
        const {
          client: fR
        } = this.deps;
        if (!this.playback) {
          if (!fR.setPlayback(!0)) throw new Error(yR.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const VR = this.epoch;
        let KR;
        try {
          KR = await fR.open(RR, (() => (0, tR.c)(RR, JR)))
        } finally {
          this.loadingOpens--
        }
        if (VR !== this.epoch && "reloading" !== KR) throw new Error(yR.d.coreStopped.text);
        if ("opening" !== KR) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const RR = function(RR) {
            switch (RR) {
              case "reloading":
                return null;
              case "stopped":
              case qR.cd.ModuleTrap:
                return yR.d.coreStopped;
              case qR.cd.ModuleLoad:
                return yR.d.viewerLoadFailed;
              case qR.cd.TooLarge:
                return yR.d.cantOpen
            }
          }(KR);
          if (null === RR) return;
          throw new Error(RR.text)
        }
        return this.rejectSave(new Error(yR.d.saveClosed.text)), this.fileName = null !== (GR = null !== (uR = JR.fileName) && void 0 !== uR ? uR : null === (ZR = JR.fileHandle) || void 0 === ZR ? void 0 : ZR.name) && void 0 !== GR ? GR : null, this.fileHandle = null !== (iR = JR.fileHandle) && void 0 !== iR ? iR : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((RR, JR) => {
          this.pendingOpen = {
            resolve: RR,
            reject: JR
          }
        }))
      }
      play() {
        this.holds.has("Be") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Be")
      }
      seek(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this.lastView;
        null !== GR && (JR || RR < GR.gK) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(RR, JR)
      }
      setSpeed(RR) {
        this.deps.client.setSpeed(RR)
      }
      setCameraMode(RR) {
        this.deps.client.setCameraMode(RR)
      }
      cycleCameraMode() {
        const RR = this.lastView;
        null !== RR && RR.state !== qR.ld.None && this.setCameraMode(iR.d[(iR.d.indexOf(RR.cameraMode) + 1) % iR.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(RR) {
        this.edited(this.deps.client.setKeyframe(RR))
      }
      moveKeyframe(RR, JR) {
        this.edited(this.deps.client.moveKeyframe(RR, JR))
      }
      deleteKeyframes(RR, JR) {
        this.edited(this.deps.client.deleteKeyframes(RR, JR))
      }
      setMark(RR) {
        this.edited(this.deps.client.setMark(RR))
      }
      crop(RR, JR) {
        return !(JR <= RR) && (null !== this.pendingSave ? (this.deps.notify(yR.d.saveBusy), !1) : !!this.deps.client.crop(RR, JR) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(yR.d.saveBusy.text)) : new Promise(((RR, JR) => {
          const GR = {
            resolve: RR,
            reject: JR
          };
          this.pendingSave = GR, this.editsAtSave = this.edits, this.deps.client.save((0, iR.g)()).then((RR => {
            this.pendingSave === GR && this.saveStarted(RR)
          }), (RR => {
            this.pendingSave === GR && this.rejectSave(RR instanceof Error ? RR : new Error(String(RR)))
          }))
        }))
      }
      saveStarted(RR) {
        switch (RR) {
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
      markSaved(RR, JR) {
        var GR, yR;
        this.fileHandle = RR, this.fileName = null !== (GR = null !== (yR = null === RR || void 0 === RR ? void 0 : RR.name) && void 0 !== yR ? yR : JR) && void 0 !== GR ? GR : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(yR.d.coreStopped.text)), this.rejectSave(new Error(yR.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var RR, JR, GR;
        const yR = this.deps.client.view(),
          tR = yR !== this.lastView;
        this.lastView = yR, this.opening && null !== yR && yR.state !== qR.ld.None && yR.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, ZR.f)()), this.cropAsked ? (this.cropAsked = !1, null !== yR && yR.state === qR.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== yR && yR.state !== qR.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const uR = 0 === this.settleFrames && 0 === (null !== (RR = null === (JR = (GR = this.deps).meshPending) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && uR && this.release("opening"), this.holds.has("seek") && uR && this.release("seek"), this.holds.has("crop") && !this.cropRunning && uR && this.release("crop");
        const iR = this.now();
        for (const [ZR, qR] of this.holds) !VR.has(ZR) && iR - qR >= fR && this.release(ZR);
        this.saveRefused && !this.cropping && this.saveFailed(!1), tR && this.deps.onChange()
      }
      cropped() {
        (0, ZR.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(RR) {
        switch (RR.reason) {
          case qR.cd.TooLarge:
            break;
          case qR.cd.Open:
          case qR.cd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const JR = (0, uR.g)(RR.version) ? yR.d.replayTooOld : yR.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(JR), this.settleOpen(new Error(JR.text));
            break
          }
          case qR.cd.Crop:
            if (RR.code === qR.ad.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(yR.d.cropFailed);
            break;
          case qR.cd.ModuleTrap:
          case qR.cd.ModuleLoad:
          case qR.cd.Port:
            this.moduleEnded(RR.reason === qR.cd.ModuleTrap ? yR.d.coreStopped : yR.d.cantOpen);
            break;
          case qR.cd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${RR.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(RR) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(RR), this.settleOpen(new Error(RR.text))
      }
      saveDone(RR) {
        const JR = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === JR || void 0 === JR || JR.resolve(RR)
      }
      saveFailed(RR) {
        this.rejectSave(new Error(RR ? yR.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(RR) {
        RR && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(yR.d.cropBusy.text)) : this.deps.notify(yR.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(RR) {
        const JR = this.pendingOpen;
        this.pendingOpen = null, null === RR ? null === JR || void 0 === JR || JR.resolve() : null === JR || void 0 === JR || JR.reject(RR)
      }
      rejectSave(RR) {
        const JR = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === JR || void 0 === JR || JR.reject(RR)
      }
      hold(RR) {
        const JR = 0 === this.holds.size;
        this.holds.set(RR, this.now()), JR && this.deps.setHoldDraws(!0)
      }
      release(RR) {
        this.holds.delete(RR) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64117: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      MESH_TAIL_MS: () => fR,
      PLAY_START_TIMEOUT_MS: () => qR,
      startWasmReplayVideoExport: () => KR
    });
    var yR = GR(40530),
      tR = GR(64119),
      uR = GR(5676),
      ZR = GR(3441);
    const qR = tR.HOLD_TIMEOUT_MS + 5e3,
      iR = 50,
      fR = 200;

    function VR(RR) {
      var JR;
      return (null === (JR = RR.view) || void 0 === JR ? void 0 : JR.state) === uR.ld.Cropping || RR.Qq.includes("crop")
    }

    function KR(RR) {
      return (0, yR.e)((() => function(RR) {
        var JR, GR, yR, tR, KR, wR;
        const rR = RR.viewer(),
          eR = null !== (JR = null === rR || void 0 === rR ? void 0 : rR.view) && void 0 !== JR ? JR : null,
          aR = RR.canvas();
        if (!rR || !eR || eR.state === uR.ld.None || 0 === eR.totalTicks || !aR || VR(rR)) return null;
        const LR = null !== (GR = RR.now) && void 0 !== GR ? GR : () => performance.now(),
          nR = rR.id,
          UR = () => {
            const JR = RR.viewer();
            return JR === rR && JR.id === nR && JR.isOpen ? JR : null
          },
          WR = Math.min(null !== (yR = null === (tR = eR.mark) || void 0 === tR ? void 0 : tR.outTick) && void 0 !== yR ? yR : 1 / 0, eR.totalTicks - 1);
        let AR = null,
          CR = !1;
        const XR = () => {
          var RR, JR;
          return (null === (RR = UR()) || void 0 === RR || null === (JR = RR.view) || void 0 === JR ? void 0 : JR.state) === uR.ld.Playing
        };
        return {
          lH: uR.Bd,
          playbackMarkInTick: null !== (KR = null === (wR = eR.mark) || void 0 === wR ? void 0 : wR.inTick) && void 0 !== KR ? KR : null,
          startFailure: () => {
            const RR = UR();
            return null === RR ? "Another replay opened. Export it again from there." : VR(RR) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var RR, JR;
            return null !== (RR = null === (JR = UR()) || void 0 === JR ? void 0 : JR.fileName) && void 0 !== RR ? RR : null
          },
          playbackSpeed: () => {
            var RR, JR, GR;
            return null !== (RR = null === (JR = UR()) || void 0 === JR || null === (GR = JR.view) || void 0 === GR ? void 0 : GR.speed) && void 0 !== RR ? RR : 1
          },
          setPlaybackSpeed: RR => {
            var JR;
            null === (JR = UR()) || void 0 === JR || JR.setSpeed(RR)
          },
          play: () => {
            var RR;
            CR = !1, AR = LR(), null === (RR = UR()) || void 0 === RR || RR.play()
          },
          pause: () => {
            var RR;
            null === (RR = UR()) || void 0 === RR || RR.pause()
          },
          seekToTick: RR => {
            var JR;
            null === (JR = UR()) || void 0 === JR || JR.seek(RR, !0)
          },
          seekSettled: () => new Promise((RR => {
            const JR = setInterval((() => {
              const GR = UR();
              null === GR ? (clearInterval(JR), RR()) : GR.Qq.includes("seek") || (clearInterval(JR), setTimeout(RR, fR))
            }), iR)
          })),
          isPlaying: () => {
            var RR, JR, GR;
            return null !== AR && null !== UR() && (!!XR() || !CR && (null !== (RR = null === (JR = UR()) || void 0 === JR || null === (GR = JR.view) || void 0 === GR ? void 0 : GR.gK) && void 0 !== RR ? RR : 0) < WR && LR() - AR < qR)
          },
          watchPlayback: JR => {
            const GR = RR.watchViewer((() => {
                CR ||= null !== AR && XR(), JR()
              })),
              yR = setTimeout(JR, qR + 1);
            return () => {
              clearTimeout(yR), GR()
            }
          },
          playbackFailure: () => {
            var RR, JR;
            const GR = UR();
            return null === GR ? "The replay closed before the video finished." : (null !== (RR = null === (JR = GR.view) || void 0 === JR ? void 0 : JR.gK) && void 0 !== RR ? RR : 0) >= WR ? null : CR ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => aR,
          closeViewer: () => {
            RR.requestViewer("close")
          },
          reopenViewer: () => {
            RR.requestViewer("open")
          },
          holdInput: ZR.g
        }
      }(RR)))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);