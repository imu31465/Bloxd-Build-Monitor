export const id = 69;
export const ids = [63, 69, 98];
export const modules = {
  37260: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ,
      f: () => rQ
    });
    var wQ = XQ(663),
      qQ = XQ(43),
      TQ = XQ(37221);
    const zQ = "replayFileKeptForReload",
      sQ = "replayFileKeptForReloadAt",
      FQ = "replayFileKeptForReloadTab",
      PQ = 3e5,
      gQ = 5e3;
    async function JQ(QQ, WQ) {
      const XQ = Date.now(),
        TQ = {
          at: XQ,
          bytes: QQ,
          source: WQ
        },
        PQ = await Promise.race([(async () => await qQ.f.setItem(sQ, XQ) && qQ.f.setItem(zQ, TQ))(), (0, wQ.L)(gQ).then((() => !1))]);
      PQ || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const JQ = {
        at: XQ,
        HI: PQ
      };
      qQ.m.setItem(FQ, JQ)
    }
    async function rQ() {
      var QQ;
      const WQ = qQ.m.getItem(FQ);
      null !== WQ && qQ.m.removeItem(FQ);
      const XQ = Date.now(),
        wQ = await qQ.f.getItem(sQ),
        gQ = null !== WQ && XQ - WQ.at <= PQ,
        JQ = null !== WQ && wQ === WQ.at;
      let rQ = null;
      if (null !== wQ && (JQ || ("number" !== typeof wQ || XQ - wQ > PQ)) && (rQ = gQ && JQ && WQ.HI ? await qQ.f.getItem(zQ) : null, await Promise.all([qQ.f.removeItem(sQ), qQ.f.removeItem(zQ)])), !gQ) return null;
      if ((null === (QQ = rQ) || void 0 === QQ ? void 0 : QQ.at) !== WQ.at) throw new Error(TQ.b.replayNotKept.text);
      return {
        bytes: rQ.bytes,
        source: rQ.source
      }
    }
  },
  37254: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      f: () => TQ,
      g: () => qQ
    });
    const wQ = [9];

    function qQ(QQ) {
      return wQ.includes(QQ)
    }

    function TQ(QQ) {
      return null !== QQ && QQ >= 3 && QQ < wQ[0]
    }
  },
  37221: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => PQ,
      i: () => FQ
    });
    var wQ = XQ(31);
    const qQ = 1500,
      TQ = 1e3,
      zQ = {
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
      sQ = new Set(Object.values(zQ).filter((QQ => "Error" === QQ.type)).map((QQ => QQ.text)));

    function FQ(QQ) {
      return QQ instanceof Error && sQ.has(QQ.message) ? QQ.message : void 0
    }

    function PQ(QQ) {
      var WQ;
      const XQ = null !== (WQ = QQ.timeoutMs) && void 0 !== WQ ? WQ : "Error" === QQ.type ? qQ : TQ;
      wQ.k.mB("showBottomMessage", {
        message: QQ.text,
        timeoutLength: XQ,
        type: QQ.type
      })
    }
  },
  37269: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ
    });
    const wQ = "data-replay-ui-active",
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
  37275: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ,
      g: () => JQ,
      i: () => gQ
    });
    var wQ = XQ(26),
      qQ = XQ(31),
      TQ = XQ(37269);

    function zQ() {
      const QQ = {};
      for (const {
          group: WQ
        }
        of TQ.e) QQ[WQ] = !0;
      return QQ
    }
    let sQ = zQ();

    function FQ() {
      qQ.k.mB("replayViewer|uiVisibilityChanged")
    }

    function PQ() {
      return sQ
    }

    function gQ(QQ, WQ) {
      sQ[QQ] !== WQ && (sQ = {
        ...sQ,
        [QQ]: WQ
      }, "nametag" === QQ && wQ.b.set({
        areNametagsHidden: !WQ
      }), FQ())
    }

    function JQ() {
      sQ = zQ(), wQ.b.set({
        areNametagsHidden: !1
      }), FQ()
    }
  },
  39542: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => iQ
    });
    var wQ = XQ(1812),
      qQ = XQ(1404),
      TQ = XQ(61),
      zQ = XQ(1081),
      sQ = XQ.n(zQ),
      FQ = XQ(1507),
      PQ = XQ(105);
    const gQ = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      JQ = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function rQ(QQ) {
      return "webm" === QQ ? gQ : JQ
    }

    function IQ(QQ) {
      for (const WQ of QQ)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(WQ)) return WQ;
      return null
    }

    function jQ(QQ) {
      return null !== IQ(rQ(QQ))
    }
    var BQ = XQ(1145);
    const yQ = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function VQ() {
      return jQ("webm") ? "webm" : jQ("mp4") ? "mp4" : "webm"
    }

    function DQ(QQ) {
      let {
        cards: WQ
      } = QQ;
      return (0, BQ.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: WQ.map((QQ => (0, BQ.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, BQ.jsx)("div", {
            className: sQ()("ReplayVideoExportOptionCard", {
              Selected: QQ.selected,
              Disabled: QQ.disabled
            }),
            onClick: () => {
              QQ.disabled || QQ.onSelect()
            },
            children: (0, BQ.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, BQ.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: QQ.label
              }), (0, BQ.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: QQ.description
              })]
            })
          }), QQ.disabled && QQ.disabledReason && (0, BQ.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: QQ.disabledReason
          })]
        }, QQ.id)))
      })
    }
    const pQ = (0, TQ.memo)((function(QQ) {
      let {
        hasPlaybackMark: WQ,
        canIncludeUi: XQ,
        includeUiDisabledReason: wQ,
        selectionRef: qQ,
        closePopup: zQ
      } = QQ;
      const sQ = jQ("webm") || jQ("mp4"),
        [gQ, JQ] = (0, TQ.useState)(VQ),
        [rQ, IQ] = (0, TQ.useState)(XQ),
        pQ = sQ && jQ(gQ);
      if (!sQ) {
        const QQ = (0, PQ.isMobile)() ? "screen recording" : "OBS";
        return (0, BQ.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, BQ.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, BQ.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${QQ}.`
          }), (0, BQ.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, BQ.jsx)(FQ.P, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                qQ.options = null, zQ()
              },
              children: "Close"
            })
          })]
        })
      }
      const GQ = WQ ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        UQ = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !rQ,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            IQ(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: rQ,
          disabled: !XQ,
          disabledReason: wQ,
          onSelect: () => {
            IQ(!0)
          }
        }],
        bQ = yQ.map((QQ => {
          const WQ = jQ(QQ.id);
          return {
            id: QQ.id,
            label: QQ.label,
            description: QQ.description,
            selected: gQ === QQ.id,
            disabled: !WQ,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              JQ(QQ.id)
            }
          }
        }));
      return (0, BQ.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, BQ.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, BQ.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: GQ
        }), (0, BQ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, BQ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, BQ.jsx)(DQ, {
            cards: UQ
          })]
        }), (0, BQ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, BQ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, BQ.jsx)(DQ, {
            cards: bQ
          })]
        }), (0, BQ.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, BQ.jsx)(FQ.s, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !pQ,
            onClick: () => {
              qQ.options = {
                format: gQ,
                includeUi: XQ && rQ
              }, zQ()
            },
            children: "Export"
          }), (0, BQ.jsx)(FQ.P, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              qQ.options = null, zQ()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var GQ = XQ(5212),
      UQ = XQ(37269),
      bQ = XQ(37275);
    let vQ = null;

    function dQ() {
      return function() {
        const QQ = (0, bQ.d)();
        for (const {
            group: WQ,
            dataAttr: XQ
          }
          of UQ.e)
          if (XQ && QQ[WQ]) return !0;
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
    async function HQ(QQ, WQ, XQ) {
      return QQ ? async function() {
        const QQ = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const WQ of QQ.getAudioTracks()) WQ.stop(), QQ.removeTrack(WQ);
        return QQ
      }(): WQ().captureStream(Math.max(1, Math.round(XQ)))
    }
    var aQ = XQ(39354);
    let lQ = !1;

    function hQ(QQ) {
      QQ.holdInput(!1), (0, aQ.g)(!1)
    }
    async function iQ(QQ) {
      var WQ, XQ;
      if ((0, aQ.d)() || lQ) return;
      const TQ = QQ();
      if (!TQ) return;
      lQ = !0;
      let zQ = null;
      const sQ = TQ.playbackMarkInTick,
        {
          canIncludeUi: FQ,
          includeUiDisabledReason: PQ
        } = dQ();
      try {
        zQ = await async function(QQ) {
          let {
            hasPlaybackMark: WQ,
            canIncludeUi: XQ,
            includeUiDisabledReason: wQ
          } = QQ;
          const TQ = {
              options: null
            },
            zQ = qQ.NotificationProvider.showCustomPopup({
              body: QQ => (0, BQ.jsx)(pQ, {
                hasPlaybackMark: WQ,
                canIncludeUi: XQ,
                includeUiDisabledReason: wQ,
                selectionRef: TQ,
                closePopup: QQ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await zQ.getResult() ? null : TQ.options
        }({
          hasPlaybackMark: null !== sQ,
          canIncludeUi: FQ,
          includeUiDisabledReason: PQ
        })
      } finally {
        lQ = !1
      }
      if (!zQ) return;
      const gQ = null !== (WQ = null === (XQ = TQ.startFailure) || void 0 === XQ ? void 0 : XQ.call(TQ)) && void 0 !== WQ ? WQ : null;
      if (null !== gQ) return void qQ.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: gQ
      });
      if (! function(QQ) {
          return !(0, aQ.d)() && ((0, aQ.g)(!0), QQ.holdInput(!0), !0)
        }(TQ)) return;
      let JQ = null;
      try {
        JQ = await HQ(zQ.includeUi, (() => TQ.canvas()), TQ.qE)
      } catch (cQ) {
        return console.error("Failed to create video stream for export", cQ), hQ(TQ), void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: cQ instanceof Error ? cQ.message : "Could not start capture."
        })
      }
      let jQ = null;
      const yQ = [];
      let VQ = null,
        DQ = null;
      try {
        var UQ, bQ, iQ;
        jQ = TQ.playbackSpeed(), TQ.closeViewer(), TQ.setPlaybackSpeed(1), TQ.pause(), TQ.seekToTick(null !== sQ && void 0 !== sQ ? sQ : 0);
        const QQ = await async function() {
          const QQ = GQ.Howler.masterGain;
          if (!GQ.Howler.ctx || !QQ) return null;
          await GQ.Howler.ctx.resume();
          const WQ = GQ.Howler.ctx.createMediaStreamDestination();
          QQ.connect(WQ), vQ = WQ;
          const [XQ] = WQ.stream.getAudioTracks();
          return null !== XQ && void 0 !== XQ ? XQ : null
        }();
        DQ = new MediaStream;
        for (const wQ of JQ.getVideoTracks()) DQ.addTrack(wQ);
        QQ && DQ.addTrack(QQ);
        const WQ = function(QQ) {
          const WQ = IQ(rQ(QQ));
          if (!WQ) throw new Error(`No MediaRecorder mime type available for ${QQ}`);
          return WQ
        }(zQ.format);
        VQ = new MediaRecorder(DQ, {
          mimeType: WQ,
          videoBitsPerSecond: 8e6
        }), VQ.ondataavailable = QQ => {
          QQ.data.size > 0 && yQ.push(QQ.data)
        };
        const XQ = new Promise((QQ => {
          VQ.onstop = () => {
            QQ()
          }
        }));
        await (null === (UQ = TQ.seekSettled) || void 0 === UQ ? void 0 : UQ.call(TQ));
        const [FQ] = JQ.getVideoTracks();
        VQ.start(250), TQ.play();
        const PQ = await
        function(QQ, WQ, XQ) {
          return new Promise((wQ => {
            let qQ = !1;
            const TQ = QQ => {
                qQ || (qQ = !0, sQ(), WQ.removeEventListener("ended", zQ), wQ(QQ))
              },
              zQ = () => {
                TQ("captureLost")
              },
              sQ = QQ.watchPlayback((() => {
                QQ.isPlaying() || TQ("completed")
              }));
            WQ.addEventListener("ended", zQ), XQ.onerror = () => {
              TQ("recorderError")
            }, "ended" !== WQ.readyState ? QQ.isPlaying() || TQ("completed") : TQ("captureLost")
          }))
        }(TQ, FQ, VQ);
        if (TQ.pause(), "inactive" !== VQ.state && VQ.stop(), await XQ, "captureLost" === PQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === PQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const gQ = null !== (bQ = null === (iQ = TQ.playbackFailure) || void 0 === iQ ? void 0 : iQ.call(TQ)) && void 0 !== bQ ? bQ : null;
        if (null !== gQ) return void qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${gQ} Nothing was saved.`
        });
        const BQ = new Blob(yQ, {
          type: WQ
        });
        BQ.size > 0 ? (0, wQ.e)(BQ, function(QQ, WQ) {
          const XQ = function(QQ) {
            return "mp4" === QQ ? "mp4" : "webm"
          }(WQ);
          if (QQ) return `${QQ.replace(/\.bloxdreplay$/i,"")}.${XQ}`;
          return `bloxd-replay-${Date.now()}.${XQ}`
        }(TQ.fileName(), zQ.format)) : qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (cQ) {
        console.error("Replay video export failed", cQ), qQ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: cQ instanceof Error ? cQ.message : "Something went wrong while exporting."
        })
      } finally {
        if (VQ && "inactive" !== VQ.state) try {
          VQ.stop()
        } catch (cQ) {
          console.error("Failed to stop MediaRecorder", cQ)
        }! function() {
          const QQ = GQ.Howler.masterGain;
          if (vQ && QQ) {
            try {
              QQ.disconnect(vQ)
            } catch (cQ) {
              console.error("Failed to disconnect Howler export tee", cQ)
            }
            vQ = null
          } else vQ = null
        }();
        for (const QQ of JQ.getTracks()) QQ.stop();
        if (DQ)
          for (const QQ of DQ.getTracks()) QQ.stop();
        null !== jQ && TQ.setPlaybackSpeed(jQ), TQ.pause(), hQ(TQ), TQ.reopenViewer()
      }
    }
  },
  5212: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => yQ,
      readyAudioContext: () => VQ
    });
    var wQ, qQ = XQ(5216),
      TQ = XQ(3699),
      zQ = XQ(4969);
    const sQ = qQ.Howler;

    function FQ() {
      var QQ, WQ;
      if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
      const XQ = navigator.audioSession;
      let wQ;
      "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
      try {
        wQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = wQ.createGain();
      qQ.gain.setValueAtTime(sQ._muted ? 0 : null !== (QQ = sQ._volume) && void 0 !== QQ ? QQ : 1, wQ.currentTime), qQ.connect(wQ.destination), sQ.ctx = wQ, sQ.masterGain = qQ, null === (WQ = sQ._setup) || void 0 === WQ || WQ.call(sQ)
    }
    sQ._mobileUnloaded = !0;
    const PQ = sQ.volume.bind(qQ.Howler);
    sQ.volume = function() {
      return FQ(), PQ(...arguments)
    };
    const gQ = sQ.mute.bind(qQ.Howler);
    sQ.mute = QQ => (FQ(), gQ(QQ));
    const JQ = qQ.Howl.prototype,
      rQ = JQ.init;

    function IQ() {
      for (; sQ._html5AudioPool.length < sQ.html5PoolSize;) {
        const QQ = new Audio;
        QQ._unlocked = !0, sQ._releaseHtml5Audio(QQ)
      }
      for (const WQ of sQ._howls)
        if (!WQ._webAudio)
          for (const XQ of WQ._getSoundIds()) {
            var QQ;
            const wQ = null === (QQ = WQ._soundById(XQ)) || void 0 === QQ ? void 0 : QQ._node;
            wQ && !wQ._unlocked && (wQ._unlocked = !0, wQ.load())
          }
    }
    JQ.init = function(QQ) {
      return FQ(), rQ.call(this, QQ)
    }, (0, zQ.f)() && (sQ._unlockAudio = () => {
      const QQ = sQ.ctx;
      if (sQ._audioUnlocked || !QQ) return;
      sQ.autoUnlock = !1;
      const WQ = QQ.createBuffer(1, 1, 22050);
      sQ._scratchBuffer = WQ;
      const XQ = new AbortController;
      let wQ = "afterPaint";
      const qQ = () => {
          var wQ;
          if (sQ._audioUnlocked) return;
          null === (wQ = sQ._autoResume) || void 0 === wQ || wQ.call(sQ);
          const qQ = QQ.createBufferSource();
          qQ.buffer = WQ, qQ.connect(QQ.destination), qQ.start(0), QQ.resume().catch((() => {})), qQ.onended = () => {
            qQ.disconnect(0), sQ._audioUnlocked = !0, XQ.abort();
            for (const QQ of sQ._howls) QQ._emit("unlock")
          }
        },
        FQ = () => {
          IQ(), qQ()
        },
        PQ = WQ => {
          if (IQ(), "inTap" === wQ) {
            if ("running" === QQ.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qQ()
          } else "afterPaint" === wQ && (wQ = "queued", (0, TQ.c)(WQ.timeStamp, (() => {
            wQ = "inTap", qQ()
          })))
        };
      for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
        capture: !0,
        signal: XQ.signal
      });
      for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
        capture: !0,
        signal: XQ.signal
      })
    });
    let jQ = 0;
    const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);

    function yQ() {
      VQ();
      const {
        ctx: QQ,
        masterGain: WQ
      } = sQ;
      return QQ && WQ ? {
        ctx: QQ,
        destination: WQ,
        holdAwake: QQ => {
          var WQ, XQ;
          (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
        },
        wake: () => {
          var WQ;
          "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function VQ() {
      var QQ;
      (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
    }
    BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
  },
  42867: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ,
      i: () => qQ
    });
    const wQ = ["recording", "freecam", "keyframe"];

    function qQ() {
      const QQ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(QQ[1]) << 32n | BigInt(QQ[0])
    }
  },
  60861: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      HOLD_TIMEOUT_MS: () => PQ,
      ReplayViewer: () => JQ
    });
    var wQ = XQ(37221),
      qQ = XQ(37260),
      TQ = XQ(37254),
      zQ = XQ(37275),
      sQ = XQ(5134),
      FQ = XQ(42867);
    const PQ = 1e4,
      gQ = new Set(["xI"]);
    class JQ {
      constructor(QQ) {
        var WQ;
        this.deps = QQ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (WQ = QQ.now) && void 0 !== WQ ? WQ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== sQ.td.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ds() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wQ.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(QQ, WQ) {
        var XQ, TQ, zQ, FQ;
        const {
          client: PQ
        } = this.deps;
        if (!this.playback) {
          if (!PQ.setPlayback(!0)) throw new Error(wQ.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const gQ = this.epoch;
        let JQ;
        try {
          JQ = await PQ.open(QQ, (() => (0, qQ.e)(QQ, WQ)))
        } finally {
          this.loadingOpens--
        }
        if (gQ !== this.epoch && "reloading" !== JQ) throw new Error(wQ.b.coreStopped.text);
        if ("opening" !== JQ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const QQ = function(QQ) {
            switch (QQ) {
              case "reloading":
                return null;
              case "stopped":
              case sQ.id.ModuleTrap:
                return wQ.b.coreStopped;
              case sQ.id.ModuleLoad:
                return wQ.b.viewerLoadFailed;
              case sQ.id.TooLarge:
                return wQ.b.cantOpen
            }
          }(JQ);
          if (null === QQ) return;
          throw new Error(QQ.text)
        }
        return this.rejectSave(new Error(wQ.b.saveClosed.text)), this.fileName = null !== (XQ = null !== (TQ = WQ.fileName) && void 0 !== TQ ? TQ : null === (zQ = WQ.fileHandle) || void 0 === zQ ? void 0 : zQ.name) && void 0 !== XQ ? XQ : null, this.fileHandle = null !== (FQ = WQ.fileHandle) && void 0 !== FQ ? FQ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((QQ, WQ) => {
          this.pendingOpen = {
            resolve: QQ,
            reject: WQ
          }
        }))
      }
      play() {
        this.holds.has("xI") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("xI")
      }
      seek(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this.lastView;
        null !== XQ && (WQ || QQ < XQ.fJ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(QQ, WQ)
      }
      setSpeed(QQ) {
        this.deps.client.setSpeed(QQ)
      }
      setCameraMode(QQ) {
        this.deps.client.setCameraMode(QQ)
      }
      cycleCameraMode() {
        const QQ = this.lastView;
        null !== QQ && QQ.state !== sQ.td.None && this.setCameraMode(FQ.e[(FQ.e.indexOf(QQ.cameraMode) + 1) % FQ.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(QQ) {
        this.edited(this.deps.client.setKeyframe(QQ))
      }
      moveKeyframe(QQ, WQ) {
        this.edited(this.deps.client.moveKeyframe(QQ, WQ))
      }
      deleteKeyframes(QQ, WQ) {
        this.edited(this.deps.client.deleteKeyframes(QQ, WQ))
      }
      setMark(QQ) {
        this.edited(this.deps.client.setMark(QQ))
      }
      crop(QQ, WQ) {
        return !(WQ <= QQ) && (null !== this.pendingSave ? (this.deps.notify(wQ.b.saveBusy), !1) : !!this.deps.client.crop(QQ, WQ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wQ.b.saveBusy.text)) : new Promise(((QQ, WQ) => {
          const XQ = {
            resolve: QQ,
            reject: WQ
          };
          this.pendingSave = XQ, this.editsAtSave = this.edits, this.deps.client.save((0, FQ.i)()).then((QQ => {
            this.pendingSave === XQ && this.saveStarted(QQ)
          }), (QQ => {
            this.pendingSave === XQ && this.rejectSave(QQ instanceof Error ? QQ : new Error(String(QQ)))
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
      markSaved(QQ, WQ) {
        var XQ, wQ;
        this.fileHandle = QQ, this.fileName = null !== (XQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.name) && void 0 !== wQ ? wQ : WQ) && void 0 !== XQ ? XQ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wQ.b.coreStopped.text)), this.rejectSave(new Error(wQ.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var QQ, WQ, XQ;
        const wQ = this.deps.client.view(),
          qQ = wQ !== this.lastView;
        this.lastView = wQ, this.opening && null !== wQ && wQ.state !== sQ.td.None && wQ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, zQ.g)()), this.cropAsked ? (this.cropAsked = !1, null !== wQ && wQ.state === sQ.td.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wQ && wQ.state !== sQ.td.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const TQ = 0 === this.settleFrames && 0 === (null !== (QQ = null === (WQ = (XQ = this.deps).meshPending) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && TQ && this.release("opening"), this.holds.has("seek") && TQ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && TQ && this.release("crop");
        const FQ = this.now();
        for (const [zQ, sQ] of this.holds) !gQ.has(zQ) && FQ - sQ >= PQ && this.release(zQ);
        this.saveRefused && !this.cropping && this.saveFailed(!1), qQ && this.deps.onChange()
      }
      cropped() {
        (0, zQ.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(QQ) {
        switch (QQ.reason) {
          case sQ.id.TooLarge:
            break;
          case sQ.id.Open:
          case sQ.id.NothingStaged: {
            this.opening = !1, this.release("opening");
            const WQ = (0, TQ.f)(QQ.version) ? wQ.b.replayTooOld : wQ.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(WQ), this.settleOpen(new Error(WQ.text));
            break
          }
          case sQ.id.Crop:
            if (QQ.code === sQ.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wQ.b.cropFailed);
            break;
          case sQ.id.ModuleTrap:
          case sQ.id.ModuleLoad:
          case sQ.id.Port:
            this.moduleEnded(QQ.reason === sQ.id.ModuleTrap ? wQ.b.coreStopped : wQ.b.cantOpen);
            break;
          case sQ.id.NotLive:
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
        const WQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WQ || void 0 === WQ || WQ.resolve(QQ)
      }
      saveFailed(QQ) {
        this.rejectSave(new Error(QQ ? wQ.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(QQ) {
        QQ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wQ.b.cropBusy.text)) : this.deps.notify(wQ.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(QQ) {
        const WQ = this.pendingOpen;
        this.pendingOpen = null, null === QQ ? null === WQ || void 0 === WQ || WQ.resolve() : null === WQ || void 0 === WQ || WQ.reject(QQ)
      }
      rejectSave(QQ) {
        const WQ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WQ || void 0 === WQ || WQ.reject(QQ)
      }
      hold(QQ) {
        const WQ = 0 === this.holds.size;
        this.holds.set(QQ, this.now()), WQ && this.deps.setHoldDraws(!0)
      }
      release(QQ) {
        this.holds.delete(QQ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60859: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      MESH_TAIL_MS: () => PQ,
      PLAY_START_TIMEOUT_MS: () => sQ,
      startWasmReplayVideoExport: () => JQ
    });
    var wQ = XQ(39542),
      qQ = XQ(60861),
      TQ = XQ(5134),
      zQ = XQ(2518);
    const sQ = qQ.HOLD_TIMEOUT_MS + 5e3,
      FQ = 50,
      PQ = 200;

    function gQ(QQ) {
      var WQ;
      return (null === (WQ = QQ.view) || void 0 === WQ ? void 0 : WQ.state) === TQ.td.Cropping || QQ.Ds.includes("crop")
    }

    function JQ(QQ) {
      return (0, wQ.d)((() => function(QQ) {
        var WQ, XQ, wQ, qQ, JQ, rQ;
        const IQ = QQ.viewer(),
          jQ = null !== (WQ = null === IQ || void 0 === IQ ? void 0 : IQ.view) && void 0 !== WQ ? WQ : null,
          BQ = QQ.canvas();
        if (!IQ || !jQ || jQ.state === TQ.td.None || 0 === jQ.totalTicks || !BQ || gQ(IQ)) return null;
        const yQ = null !== (XQ = QQ.now) && void 0 !== XQ ? XQ : () => performance.now(),
          VQ = IQ.id,
          DQ = () => {
            const WQ = QQ.viewer();
            return WQ === IQ && WQ.id === VQ && WQ.isOpen ? WQ : null
          },
          pQ = Math.min(null !== (wQ = null === (qQ = jQ.mark) || void 0 === qQ ? void 0 : qQ.outTick) && void 0 !== wQ ? wQ : 1 / 0, jQ.totalTicks - 1);
        let GQ = null,
          UQ = !1;
        const bQ = () => {
          var QQ, WQ;
          return (null === (QQ = DQ()) || void 0 === QQ || null === (WQ = QQ.view) || void 0 === WQ ? void 0 : WQ.state) === TQ.td.Playing
        };
        return {
          qE: TQ.Kd,
          playbackMarkInTick: null !== (JQ = null === (rQ = jQ.mark) || void 0 === rQ ? void 0 : rQ.inTick) && void 0 !== JQ ? JQ : null,
          startFailure: () => {
            const QQ = DQ();
            return null === QQ ? "Another replay opened. Export it again from there." : gQ(QQ) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var QQ, WQ;
            return null !== (QQ = null === (WQ = DQ()) || void 0 === WQ ? void 0 : WQ.fileName) && void 0 !== QQ ? QQ : null
          },
          playbackSpeed: () => {
            var QQ, WQ, XQ;
            return null !== (QQ = null === (WQ = DQ()) || void 0 === WQ || null === (XQ = WQ.view) || void 0 === XQ ? void 0 : XQ.speed) && void 0 !== QQ ? QQ : 1
          },
          setPlaybackSpeed: QQ => {
            var WQ;
            null === (WQ = DQ()) || void 0 === WQ || WQ.setSpeed(QQ)
          },
          play: () => {
            var QQ;
            UQ = !1, GQ = yQ(), null === (QQ = DQ()) || void 0 === QQ || QQ.play()
          },
          pause: () => {
            var QQ;
            null === (QQ = DQ()) || void 0 === QQ || QQ.pause()
          },
          seekToTick: QQ => {
            var WQ;
            null === (WQ = DQ()) || void 0 === WQ || WQ.seek(QQ, !0)
          },
          seekSettled: () => new Promise((QQ => {
            const WQ = setInterval((() => {
              const XQ = DQ();
              null === XQ ? (clearInterval(WQ), QQ()) : XQ.Ds.includes("seek") || (clearInterval(WQ), setTimeout(QQ, PQ))
            }), FQ)
          })),
          isPlaying: () => {
            var QQ, WQ, XQ;
            return null !== GQ && null !== DQ() && (!!bQ() || !UQ && (null !== (QQ = null === (WQ = DQ()) || void 0 === WQ || null === (XQ = WQ.view) || void 0 === XQ ? void 0 : XQ.fJ) && void 0 !== QQ ? QQ : 0) < pQ && yQ() - GQ < sQ)
          },
          watchPlayback: WQ => {
            const XQ = QQ.watchViewer((() => {
                UQ ||= null !== GQ && bQ(), WQ()
              })),
              wQ = setTimeout(WQ, sQ + 1);
            return () => {
              clearTimeout(wQ), XQ()
            }
          },
          playbackFailure: () => {
            var QQ, WQ;
            const XQ = DQ();
            return null === XQ ? "The replay closed before the video finished." : (null !== (QQ = null === (WQ = XQ.view) || void 0 === WQ ? void 0 : WQ.fJ) && void 0 !== QQ ? QQ : 0) >= pQ ? null : UQ ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => BQ,
          closeViewer: () => {
            QQ.requestViewer("close")
          },
          reopenViewer: () => {
            QQ.requestViewer("open")
          },
          holdInput: zQ.e
        }
      }(QQ)))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);