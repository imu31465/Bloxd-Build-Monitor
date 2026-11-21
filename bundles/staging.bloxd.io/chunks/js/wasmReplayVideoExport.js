export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  36605: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => kQ
    });
    var LQ = wQ(22);
    const qQ = 1500,
      oQ = 1e3,
      DQ = {
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
      };

    function kQ(QQ) {
      var FQ;
      const wQ = null !== (FQ = QQ.timeoutMs) && void 0 !== FQ ? FQ : "Error" === QQ.type ? qQ : oQ;
      LQ.l.GA("showBottomMessage", {
        message: QQ.text,
        timeoutLength: wQ,
        type: QQ.type
      })
    }
  },
  36614: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      g: () => qQ
    });
    const LQ = "data-replay-ui-active",
      qQ = [{
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
  36619: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => HQ,
      g: () => uQ
    });
    var LQ = wQ(17),
      qQ = wQ(22),
      oQ = wQ(36614);

    function DQ() {
      const QQ = {};
      for (const {
          group: FQ
        }
        of oQ.g) QQ[FQ] = !0;
      return QQ
    }
    let kQ = DQ();

    function vQ() {
      qQ.l.GA("replayViewer|uiVisibilityChanged")
    }

    function mQ() {
      return kQ
    }

    function uQ(QQ, FQ) {
      kQ[QQ] !== FQ && (kQ = {
        ...kQ,
        [QQ]: FQ
      }, "nametag" === QQ && LQ.c.set({
        areNametagsHidden: !FQ
      }), vQ())
    }

    function HQ() {
      kQ = DQ(), LQ.c.set({
        areNametagsHidden: !1
      }), vQ()
    }
  },
  38776: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => rQ
    });
    var LQ = wQ(1739),
      qQ = wQ(1362),
      oQ = wQ(53),
      DQ = wQ(1070),
      kQ = wQ.n(DQ),
      vQ = wQ(1451),
      mQ = wQ(96);
    const uQ = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      HQ = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function bQ(QQ) {
      return "webm" === QQ ? uQ : HQ
    }

    function YQ(QQ) {
      for (const FQ of QQ)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(FQ)) return FQ;
      return null
    }

    function xQ(QQ) {
      return null !== YQ(bQ(QQ))
    }
    var AQ = wQ(1107);
    const tQ = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function eQ() {
      return xQ("webm") ? "webm" : xQ("mp4") ? "mp4" : "webm"
    }

    function MQ(QQ) {
      let {
        cards: FQ
      } = QQ;
      return (0, AQ.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: FQ.map((QQ => (0, AQ.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, AQ.jsx)("div", {
            className: kQ()("ReplayVideoExportOptionCard", {
              Selected: QQ.selected,
              Disabled: QQ.disabled
            }),
            onClick: () => {
              QQ.disabled || QQ.onSelect()
            },
            children: (0, AQ.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, AQ.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: QQ.label
              }), (0, AQ.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: QQ.description
              })]
            })
          }), QQ.disabled && QQ.disabledReason && (0, AQ.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: QQ.disabledReason
          })]
        }, QQ.id)))
      })
    }
    const GQ = (0, oQ.memo)((function(QQ) {
      let {
        hasPlaybackMark: FQ,
        canIncludeUi: wQ,
        includeUiDisabledReason: LQ,
        selectionRef: qQ,
        closePopup: DQ
      } = QQ;
      const kQ = xQ("webm") || xQ("mp4"),
        [uQ, HQ] = (0, oQ.useState)(eQ),
        [bQ, YQ] = (0, oQ.useState)(wQ),
        GQ = kQ && xQ(uQ);
      if (!kQ) {
        const QQ = (0, mQ.isMobile)() ? "screen recording" : "OBS";
        return (0, AQ.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, AQ.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, AQ.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${QQ}.`
          }), (0, AQ.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, AQ.jsx)(vQ.F, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                qQ.options = null, DQ()
              },
              children: "Close"
            })
          })]
        })
      }
      const pQ = FQ ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        cQ = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !bQ,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            YQ(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: bQ,
          disabled: !wQ,
          disabledReason: LQ,
          onSelect: () => {
            YQ(!0)
          }
        }],
        CQ = tQ.map((QQ => {
          const FQ = xQ(QQ.id);
          return {
            id: QQ.id,
            label: QQ.label,
            description: QQ.description,
            selected: uQ === QQ.id,
            disabled: !FQ,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              HQ(QQ.id)
            }
          }
        }));
      return (0, AQ.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, AQ.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, AQ.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: pQ
        }), (0, AQ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, AQ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, AQ.jsx)(MQ, {
            cards: cQ
          })]
        }), (0, AQ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, AQ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, AQ.jsx)(MQ, {
            cards: CQ
          })]
        }), (0, AQ.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, AQ.jsx)(vQ.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !GQ,
            onClick: () => {
              qQ.options = {
                format: uQ,
                includeUi: wQ && bQ
              }, DQ()
            },
            children: "Export"
          }), (0, AQ.jsx)(vQ.F, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              qQ.options = null, DQ()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var pQ = wQ(4694),
      cQ = wQ(36614),
      CQ = wQ(36619);
    let SQ = null;

    function iQ() {
      return function() {
        const QQ = (0, CQ.b)();
        for (const {
            group: FQ,
            dataAttr: wQ
          }
          of cQ.g)
          if (wQ && QQ[FQ]) return !0;
        return !1
      }() ? function() {
        var QQ;
        return "function" === typeof(null === (QQ = navigator.mediaDevices) || void 0 === QQ ? void 0 : QQ.getDisplayMedia)
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
    async function WQ(QQ, FQ, wQ) {
      return QQ ? async function() {
        const QQ = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const FQ of QQ.getAudioTracks()) FQ.stop(), QQ.removeTrack(FQ);
        return QQ
      }(): FQ().captureStream(Math.max(1, Math.round(wQ)))
    }
    var RQ = wQ(38620);
    let OQ = !1;

    function sQ(QQ) {
      QQ.holdInput(!1), (0, RQ.e)(!1)
    }
    async function rQ(QQ) {
      var FQ, wQ;
      if ((0, RQ.d)() || OQ) return;
      const oQ = QQ();
      if (!oQ) return;
      OQ = !0;
      let DQ = null;
      const kQ = oQ.playbackMarkInTick,
        {
          canIncludeUi: vQ,
          includeUiDisabledReason: mQ
        } = iQ();
      try {
        DQ = await async function(QQ) {
          let {
            hasPlaybackMark: FQ,
            canIncludeUi: wQ,
            includeUiDisabledReason: LQ
          } = QQ;
          const oQ = {
              options: null
            },
            DQ = qQ.NotificationProvider.showCustomPopup({
              body: QQ => (0, AQ.jsx)(GQ, {
                hasPlaybackMark: FQ,
                canIncludeUi: wQ,
                includeUiDisabledReason: LQ,
                selectionRef: oQ,
                closePopup: QQ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await DQ.getResult() ? null : oQ.options
        }({
          hasPlaybackMark: null !== kQ,
          canIncludeUi: vQ,
          includeUiDisabledReason: mQ
        })
      } finally {
        OQ = !1
      }
      if (!DQ) return;
      const uQ = null !== (FQ = null === (wQ = oQ.startFailure) || void 0 === wQ ? void 0 : wQ.call(oQ)) && void 0 !== FQ ? FQ : null;
      if (null !== uQ) return void qQ.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: uQ
      });
      if (! function(QQ) {
          return !(0, RQ.d)() && ((0, RQ.e)(!0), QQ.holdInput(!0), !0)
        }(oQ)) return;
      let HQ = null;
      try {
        HQ = await WQ(DQ.includeUi, (() => oQ.canvas()), oQ.mN)
      } catch (IQ) {
        return console.error("Failed to create video stream for export", IQ), sQ(oQ), void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: IQ instanceof Error ? IQ.message : "Could not start capture."
        })
      }
      let xQ = null;
      const tQ = [];
      let eQ = null,
        MQ = null;
      try {
        var cQ, CQ, rQ;
        xQ = oQ.playbackSpeed(), oQ.closeViewer(), oQ.setPlaybackSpeed(1), oQ.pause(), oQ.seekToTick(null !== kQ && void 0 !== kQ ? kQ : 0);
        const QQ = await async function() {
          const QQ = pQ.Howler.masterGain;
          if (!pQ.Howler.ctx || !QQ) return null;
          await pQ.Howler.ctx.resume();
          const FQ = pQ.Howler.ctx.createMediaStreamDestination();
          QQ.connect(FQ), SQ = FQ;
          const [wQ] = FQ.stream.getAudioTracks();
          return null !== wQ && void 0 !== wQ ? wQ : null
        }();
        MQ = new MediaStream;
        for (const LQ of HQ.getVideoTracks()) MQ.addTrack(LQ);
        QQ && MQ.addTrack(QQ);
        const FQ = function(QQ) {
          const FQ = YQ(bQ(QQ));
          if (!FQ) throw new Error(`No MediaRecorder mime type available for ${QQ}`);
          return FQ
        }(DQ.format);
        eQ = new MediaRecorder(MQ, {
          mimeType: FQ,
          videoBitsPerSecond: 8e6
        }), eQ.ondataavailable = QQ => {
          QQ.data.size > 0 && tQ.push(QQ.data)
        };
        const wQ = new Promise((QQ => {
          eQ.onstop = () => {
            QQ()
          }
        }));
        await (null === (cQ = oQ.seekSettled) || void 0 === cQ ? void 0 : cQ.call(oQ));
        const [vQ] = HQ.getVideoTracks();
        eQ.start(250), oQ.play();
        const mQ = await
        function(QQ, FQ, wQ) {
          return new Promise((LQ => {
            let qQ = !1;
            const oQ = QQ => {
                qQ || (qQ = !0, kQ(), FQ.removeEventListener("ended", DQ), LQ(QQ))
              },
              DQ = () => {
                oQ("captureLost")
              },
              kQ = QQ.watchPlayback((() => {
                QQ.isPlaying() || oQ("completed")
              }));
            FQ.addEventListener("ended", DQ), wQ.onerror = () => {
              oQ("recorderError")
            }, "ended" !== FQ.readyState ? QQ.isPlaying() || oQ("completed") : oQ("captureLost")
          }))
        }(oQ, vQ, eQ);
        if (oQ.pause(), "inactive" !== eQ.state && eQ.stop(), await wQ, "captureLost" === mQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === mQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const uQ = null !== (CQ = null === (rQ = oQ.playbackFailure) || void 0 === rQ ? void 0 : rQ.call(oQ)) && void 0 !== CQ ? CQ : null;
        if (null !== uQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${uQ} Nothing was saved.`
        });
        const AQ = new Blob(tQ, {
          type: FQ
        });
        AQ.size > 0 ? (0, LQ.e)(AQ, function(QQ, FQ) {
          const wQ = function(QQ) {
            return "mp4" === QQ ? "mp4" : "webm"
          }(FQ);
          if (QQ) return `${QQ.replace(/\.bloxdreplay$/i,"")}.${wQ}`;
          return `bloxd-replay-${Date.now()}.${wQ}`
        }(oQ.fileName(), DQ.format)) : qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (IQ) {
        console.error("Replay video export failed", IQ), qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: IQ instanceof Error ? IQ.message : "Something went wrong while exporting."
        })
      } finally {
        if (eQ && "inactive" !== eQ.state) try {
          eQ.stop()
        } catch (IQ) {
          console.error("Failed to stop MediaRecorder", IQ)
        }! function() {
          const QQ = pQ.Howler.masterGain;
          if (SQ && QQ) {
            try {
              QQ.disconnect(SQ)
            } catch (IQ) {
              console.error("Failed to disconnect Howler export tee", IQ)
            }
            SQ = null
          } else SQ = null
        }();
        for (const QQ of HQ.getTracks()) QQ.stop();
        if (MQ)
          for (const QQ of MQ.getTracks()) QQ.stop();
        null !== xQ && oQ.setPlaybackSpeed(xQ), oQ.pause(), sQ(oQ), oQ.reopenViewer()
      }
    }
  },
  4694: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => xQ,
      readyAudioContext: () => AQ
    });
    var LQ, qQ = wQ(4702),
      oQ = wQ(4494);
    const DQ = qQ.Howler;

    function kQ() {
      var QQ, FQ;
      if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
      const wQ = navigator.audioSession;
      let LQ;
      "auto" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && (wQ.type = "ambient");
      try {
        LQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = LQ.createGain();
      qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
    }
    DQ._mobileUnloaded = !0;
    const vQ = DQ.volume.bind(qQ.Howler);
    DQ.volume = function() {
      return kQ(), vQ(...arguments)
    };
    const mQ = DQ.mute.bind(qQ.Howler);
    DQ.mute = QQ => (kQ(), mQ(QQ));
    const uQ = qQ.Howl.prototype,
      HQ = uQ.init;
    uQ.init = function(QQ) {
      return kQ(), HQ.call(this, QQ)
    };
    let bQ = 0;
    const YQ = null === (LQ = DQ._autoSuspend) || void 0 === LQ ? void 0 : LQ.bind(qQ.Howler);

    function xQ() {
      AQ();
      const {
        ctx: QQ,
        masterGain: FQ
      } = DQ;
      return QQ && FQ ? {
        ctx: QQ,
        destination: FQ,
        holdAwake: QQ => {
          var FQ, wQ;
          (bQ += QQ ? 1 : -1, QQ) ? null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ): null === (wQ = DQ._autoSuspend) || void 0 === wQ || wQ.call(DQ)
        },
        wake: () => {
          var FQ;
          "running" !== QQ.state && (null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function AQ() {
      var QQ;
      (DQ.volume(), DQ.ctx && DQ.autoUnlock) && (null === (QQ = DQ._unlockAudio) || void 0 === QQ || QQ.call(DQ))
    }
    YQ && (DQ._autoSuspend = () => bQ > 0 ? qQ.Howler : YQ())
  },
  41962: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      d: () => qQ
    });
    const LQ = ["recording", "freecam", "keyframe"];

    function qQ() {
      const QQ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(QQ[1]) << 32n | BigInt(QQ[0])
    }
  },
  41999: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      HOLD_TIMEOUT_MS: () => kQ,
      ReplayViewer: () => mQ
    });
    var LQ = wQ(36605),
      qQ = wQ(36619),
      oQ = wQ(4632),
      DQ = wQ(41962);
    const kQ = 1e4,
      vQ = new Set(["JY"]);
    class mQ {
      constructor(QQ) {
        var FQ;
        this.deps = QQ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (FQ = QQ.now) && void 0 !== FQ ? FQ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== oQ.Uc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ym() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? LQ.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(QQ, FQ) {
        var wQ, qQ, DQ, kQ;
        const {
          client: vQ
        } = this.deps;
        if (!this.playback) {
          if (!vQ.setPlayback(!0)) throw new Error(LQ.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const mQ = this.epoch;
        let uQ;
        try {
          uQ = await vQ.open(QQ)
        } finally {
          this.loadingOpens--
        }
        if (mQ !== this.epoch) throw new Error(LQ.c.coreStopped.text);
        if ("opening" !== uQ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const QQ = function(QQ) {
            switch (QQ) {
              case "reloading":
                return null;
              case "stopped":
              case oQ.Oc.ModuleTrap:
                return LQ.c.coreStopped;
              case oQ.Oc.ModuleLoad:
                return LQ.c.viewerLoadFailed;
              case oQ.Oc.TooLarge:
                return LQ.c.cantOpen
            }
          }(uQ);
          if (null === QQ) return;
          throw new Error(QQ.text)
        }
        return this.rejectSave(new Error(LQ.c.saveClosed.text)), this.fileName = null !== (wQ = null !== (qQ = FQ.fileName) && void 0 !== qQ ? qQ : null === (DQ = FQ.fileHandle) || void 0 === DQ ? void 0 : DQ.name) && void 0 !== wQ ? wQ : null, this.fileHandle = null !== (kQ = FQ.fileHandle) && void 0 !== kQ ? kQ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((QQ, FQ) => {
          this.pendingOpen = {
            resolve: QQ,
            reject: FQ
          }
        }))
      }
      play() {
        this.holds.has("JY") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("JY")
      }
      seek(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this.lastView;
        null !== wQ && (FQ || QQ < wQ.fH) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(QQ, FQ)
      }
      setSpeed(QQ) {
        this.deps.client.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.client.setCameraMode(QQ)
      }
      cycleCameraMode() {
        const QQ = this.lastView;
        null !== QQ && QQ.state !== oQ.Uc.None && this.setCameraMode(DQ.c[(DQ.c.indexOf(QQ.cameraMode) + 1) % DQ.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(QQ) {
        this.edited(this.deps.client.setKeyframe(QQ))
      }
      moveKeyframe(QQ, FQ) {
        this.edited(this.deps.client.moveKeyframe(QQ, FQ))
      }
      deleteKeyframes(QQ, FQ) {
        this.edited(this.deps.client.deleteKeyframes(QQ, FQ))
      }
      setMark(QQ) {
        this.edited(this.deps.client.setMark(QQ))
      }
      crop(QQ, FQ) {
        return !(FQ <= QQ) && (null !== this.pendingSave ? (this.deps.notify(LQ.c.saveBusy), !1) : !!this.deps.client.crop(QQ, FQ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(LQ.c.saveBusy.text)) : new Promise(((QQ, FQ) => {
          const wQ = {
            resolve: QQ,
            reject: FQ
          };
          this.pendingSave = wQ, this.editsAtSave = this.edits, this.deps.client.save((0, DQ.d)()).then((QQ => {
            this.pendingSave === wQ && this.saveStarted(QQ)
          }), (QQ => {
            this.pendingSave === wQ && this.rejectSave(QQ instanceof Error ? QQ : new Error(String(QQ)))
          }))
        }))
      }
      saveStarted(QQ) {
        switch (QQ) {
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
      markSaved(QQ, FQ) {
        var wQ, LQ;
        this.fileHandle = QQ, this.fileName = null !== (wQ = null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.name) && void 0 !== LQ ? LQ : FQ) && void 0 !== wQ ? wQ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(LQ.c.coreStopped.text)), this.rejectSave(new Error(LQ.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var QQ, FQ, wQ;
        const LQ = this.deps.client.view(),
          DQ = LQ !== this.lastView;
        this.lastView = LQ, this.opening && null !== LQ && LQ.state !== oQ.Uc.None && LQ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, qQ.f)()), this.cropAsked ? (this.cropAsked = !1, null !== LQ && LQ.state === oQ.Uc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== LQ && LQ.state !== oQ.Uc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const mQ = 0 === this.settleFrames && 0 === (null !== (QQ = null === (FQ = (wQ = this.deps).meshPending) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && mQ && this.release("opening"), this.holds.has("seek") && mQ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && mQ && this.release("crop");
        const uQ = this.now();
        for (const [qQ, oQ] of this.holds) !vQ.has(qQ) && uQ - oQ >= kQ && (this.release(qQ), "opening" === qQ && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), DQ && this.deps.onChange()
      }
      cropped() {
        (0, qQ.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(QQ) {
        switch (QQ.reason) {
          case oQ.Oc.TooLarge:
            break;
          case oQ.Oc.Open:
          case oQ.Oc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(LQ.c.cantOpen), this.settleOpen(new Error(LQ.c.cantOpen.text));
            break;
          case oQ.Oc.Crop:
            if (QQ.code === oQ.Kc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(LQ.c.cropFailed);
            break;
          case oQ.Oc.ModuleTrap:
          case oQ.Oc.ModuleLoad:
          case oQ.Oc.Port:
            this.moduleEnded(QQ.reason === oQ.Oc.ModuleTrap ? LQ.c.coreStopped : LQ.c.cantOpen);
            break;
          case oQ.Oc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${QQ.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(QQ) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(QQ), this.settleOpen(new Error(QQ.text))
      }
      saveDone(QQ) {
        const FQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === FQ || void 0 === FQ || FQ.resolve(QQ)
      }
      saveFailed(QQ) {
        this.rejectSave(new Error(QQ ? LQ.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(QQ) {
        QQ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(LQ.c.cropBusy.text)) : this.deps.notify(LQ.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(QQ) {
        const FQ = this.pendingOpen;
        this.pendingOpen = null, null === QQ ? null === FQ || void 0 === FQ || FQ.resolve() : null === FQ || void 0 === FQ || FQ.reject(QQ)
      }
      rejectSave(QQ) {
        const FQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === FQ || void 0 === FQ || FQ.reject(QQ)
      }
      hold(QQ) {
        const FQ = 0 === this.holds.size;
        this.holds.set(QQ, this.now()), FQ && this.deps.setHoldDraws(!0)
      }
      release(QQ) {
        this.holds.delete(QQ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41990: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      MESH_TAIL_MS: () => mQ,
      PLAY_START_TIMEOUT_MS: () => kQ,
      startWasmReplayVideoExport: () => HQ
    });
    var LQ = wQ(38776),
      qQ = wQ(41999),
      oQ = wQ(4632),
      DQ = wQ(2327);
    const kQ = qQ.HOLD_TIMEOUT_MS + 5e3,
      vQ = 50,
      mQ = 200;

    function uQ(QQ) {
      var FQ;
      return (null === (FQ = QQ.view) || void 0 === FQ ? void 0 : FQ.state) === oQ.Uc.Cropping || QQ.ym.includes("crop")
    }

    function HQ(QQ) {
      return (0, LQ.b)((() => function(QQ) {
        var FQ, wQ, LQ, qQ, HQ, bQ;
        const YQ = QQ.viewer(),
          xQ = null !== (FQ = null === YQ || void 0 === YQ ? void 0 : YQ.view) && void 0 !== FQ ? FQ : null,
          AQ = QQ.canvas();
        if (!YQ || !xQ || xQ.state === oQ.Uc.None || 0 === xQ.totalTicks || !AQ || uQ(YQ)) return null;
        const tQ = null !== (wQ = QQ.now) && void 0 !== wQ ? wQ : () => performance.now(),
          eQ = YQ.id,
          MQ = () => {
            const FQ = QQ.viewer();
            return FQ === YQ && FQ.id === eQ && FQ.isOpen ? FQ : null
          },
          GQ = Math.min(null !== (LQ = null === (qQ = xQ.mark) || void 0 === qQ ? void 0 : qQ.outTick) && void 0 !== LQ ? LQ : 1 / 0, xQ.totalTicks - 1);
        let pQ = null,
          cQ = !1;
        const CQ = () => {
          var QQ, FQ;
          return (null === (QQ = MQ()) || void 0 === QQ || null === (FQ = QQ.view) || void 0 === FQ ? void 0 : FQ.state) === oQ.Uc.Playing
        };
        return {
          mN: oQ.cd,
          playbackMarkInTick: null !== (HQ = null === (bQ = xQ.mark) || void 0 === bQ ? void 0 : bQ.inTick) && void 0 !== HQ ? HQ : null,
          startFailure: () => {
            const QQ = MQ();
            return null === QQ ? "Another replay opened. Export it again from there." : uQ(QQ) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var QQ, FQ;
            return null !== (QQ = null === (FQ = MQ()) || void 0 === FQ ? void 0 : FQ.fileName) && void 0 !== QQ ? QQ : null
          },
          playbackSpeed: () => {
            var QQ, FQ, wQ;
            return null !== (QQ = null === (FQ = MQ()) || void 0 === FQ || null === (wQ = FQ.view) || void 0 === wQ ? void 0 : wQ.speed) && void 0 !== QQ ? QQ : 1
          },
          setPlaybackSpeed: QQ => {
            var FQ;
            null === (FQ = MQ()) || void 0 === FQ || FQ.setSpeed(QQ)
          },
          play: () => {
            var QQ;
            cQ = !1, pQ = tQ(), null === (QQ = MQ()) || void 0 === QQ || QQ.play()
          },
          pause: () => {
            var QQ;
            null === (QQ = MQ()) || void 0 === QQ || QQ.pause()
          },
          seekToTick: QQ => {
            var FQ;
            null === (FQ = MQ()) || void 0 === FQ || FQ.seek(QQ, !0)
          },
          seekSettled: () => new Promise((QQ => {
            const FQ = setInterval((() => {
              const wQ = MQ();
              null === wQ ? (clearInterval(FQ), QQ()) : wQ.ym.includes("seek") || (clearInterval(FQ), setTimeout(QQ, mQ))
            }), vQ)
          })),
          isPlaying: () => {
            var QQ, FQ, wQ;
            return null !== pQ && null !== MQ() && (!!CQ() || !cQ && (null !== (QQ = null === (FQ = MQ()) || void 0 === FQ || null === (wQ = FQ.view) || void 0 === wQ ? void 0 : wQ.fH) && void 0 !== QQ ? QQ : 0) < GQ && tQ() - pQ < kQ)
          },
          watchPlayback: FQ => {
            const wQ = QQ.watchViewer((() => {
                cQ ||= null !== pQ && CQ(), FQ()
              })),
              LQ = setTimeout(FQ, kQ + 1);
            return () => {
              clearTimeout(LQ), wQ()
            }
          },
          playbackFailure: () => {
            var QQ, FQ;
            const wQ = MQ();
            return null === wQ ? "The replay closed before the video finished." : (null !== (QQ = null === (FQ = wQ.view) || void 0 === FQ ? void 0 : FQ.fH) && void 0 !== QQ ? QQ : 0) >= GQ ? null : cQ ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => AQ,
          closeViewer: () => {
            QQ.requestViewer("close")
          },
          reopenViewer: () => {
            QQ.requestViewer("open")
          },
          holdInput: DQ.e
        }
      }(QQ)))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);