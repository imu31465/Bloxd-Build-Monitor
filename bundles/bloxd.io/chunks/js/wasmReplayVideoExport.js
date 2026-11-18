export const id = 59;
export const ids = [53, 59, 85];
export const modules = {
  35998: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => AJ
    });
    var FJ = ZJ(17);
    const UJ = 1500,
      eJ = 1e3,
      XJ = {
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

    function AJ(JJ) {
      var cJ;
      const ZJ = null !== (cJ = JJ.timeoutMs) && void 0 !== cJ ? cJ : "Error" === JJ.type ? UJ : eJ;
      FJ.i.Uf("showBottomMessage", {
        message: JJ.text,
        timeoutLength: ZJ,
        type: JJ.type
      })
    }
  },
  36009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      e: () => UJ
    });
    const FJ = "data-replay-ui-active",
      UJ = [{
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
  36014: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      e: () => hJ,
      h: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(36009);

    function XJ() {
      const JJ = {};
      for (const {
          group: cJ
        }
        of eJ.e) JJ[cJ] = !0;
      return JJ
    }
    let AJ = XJ();

    function qJ() {
      UJ.i.Uf("replayViewer|uiVisibilityChanged")
    }

    function jJ() {
      return AJ
    }

    function YJ(JJ, cJ) {
      AJ[JJ] !== cJ && (AJ = {
        ...AJ,
        [JJ]: cJ
      }, "nametag" === JJ && FJ.d.set({
        areNametagsHidden: !cJ
      }), qJ())
    }

    function hJ() {
      AJ = XJ(), FJ.d.set({
        areNametagsHidden: !1
      }), qJ()
    }
  },
  38196: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => bJ
    });
    var FJ = ZJ(1620),
      UJ = ZJ(1247),
      eJ = ZJ(47),
      XJ = ZJ(926),
      AJ = ZJ.n(XJ),
      qJ = ZJ(1329),
      jJ = ZJ(80);
    const YJ = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      hJ = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function DJ(JJ) {
      return "webm" === JJ ? YJ : hJ
    }

    function sJ(JJ) {
      for (const cJ of JJ)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(cJ)) return cJ;
      return null
    }

    function nJ(JJ) {
      return null !== sJ(DJ(JJ))
    }
    var GJ = ZJ(990);
    const fJ = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function xJ() {
      return nJ("webm") ? "webm" : nJ("mp4") ? "mp4" : "webm"
    }

    function rJ(JJ) {
      let {
        cards: cJ
      } = JJ;
      return (0, GJ.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: cJ.map((JJ => (0, GJ.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, GJ.jsx)("div", {
            className: AJ()("ReplayVideoExportOptionCard", {
              Selected: JJ.selected,
              Disabled: JJ.disabled
            }),
            onClick: () => {
              JJ.disabled || JJ.onSelect()
            },
            children: (0, GJ.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, GJ.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: JJ.label
              }), (0, GJ.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: JJ.description
              })]
            })
          }), JJ.disabled && JJ.disabledReason && (0, GJ.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: JJ.disabledReason
          })]
        }, JJ.id)))
      })
    }
    const vJ = (0, eJ.memo)((function(JJ) {
      let {
        hasPlaybackMark: cJ,
        canIncludeUi: ZJ,
        includeUiDisabledReason: FJ,
        selectionRef: UJ,
        closePopup: XJ
      } = JJ;
      const AJ = nJ("webm") || nJ("mp4"),
        [YJ, hJ] = (0, eJ.useState)(xJ),
        [DJ, sJ] = (0, eJ.useState)(ZJ),
        vJ = AJ && nJ(YJ);
      if (!AJ) {
        const JJ = (0, jJ.isMobile)() ? "screen recording" : "OBS";
        return (0, GJ.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, GJ.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, GJ.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${JJ}.`
          }), (0, GJ.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, GJ.jsx)(qJ.I, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                UJ.options = null, XJ()
              },
              children: "Close"
            })
          })]
        })
      }
      const mJ = cJ ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        QJ = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !DJ,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            sJ(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: DJ,
          disabled: !ZJ,
          disabledReason: FJ,
          onSelect: () => {
            sJ(!0)
          }
        }],
        EJ = fJ.map((JJ => {
          const cJ = nJ(JJ.id);
          return {
            id: JJ.id,
            label: JJ.label,
            description: JJ.description,
            selected: YJ === JJ.id,
            disabled: !cJ,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              hJ(JJ.id)
            }
          }
        }));
      return (0, GJ.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, GJ.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, GJ.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: mJ
        }), (0, GJ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, GJ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, GJ.jsx)(rJ, {
            cards: QJ
          })]
        }), (0, GJ.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, GJ.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, GJ.jsx)(rJ, {
            cards: EJ
          })]
        }), (0, GJ.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, GJ.jsx)(qJ.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !vJ,
            onClick: () => {
              UJ.options = {
                format: YJ,
                includeUi: ZJ && DJ
              }, XJ()
            },
            children: "Export"
          }), (0, GJ.jsx)(qJ.I, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              UJ.options = null, XJ()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var mJ = ZJ(4259),
      QJ = ZJ(36009),
      EJ = ZJ(36014);
    let VJ = null;

    function KJ() {
      return function() {
        const JJ = (0, EJ.b)();
        for (const {
            group: cJ,
            dataAttr: ZJ
          }
          of QJ.e)
          if (ZJ && JJ[cJ]) return !0;
        return !1
      }() ? function() {
        var JJ;
        return "function" === typeof(null === (JJ = navigator.mediaDevices) || void 0 === JJ ? void 0 : JJ.getDisplayMedia)
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
    async function yJ(JJ, cJ, ZJ) {
      return JJ ? async function() {
        const JJ = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const cJ of JJ.getAudioTracks()) cJ.stop(), JJ.removeTrack(cJ);
        return JJ
      }(): cJ().captureStream(Math.max(1, Math.round(ZJ)))
    }
    var SJ = ZJ(38033);
    let IJ = !1;

    function MJ(JJ) {
      JJ.holdInput(!1), (0, SJ.f)(!1)
    }
    async function bJ(JJ) {
      var cJ, ZJ;
      if ((0, SJ.c)() || IJ) return;
      const eJ = JJ();
      if (!eJ) return;
      IJ = !0;
      let XJ = null;
      const AJ = eJ.playbackMarkInTick,
        {
          canIncludeUi: qJ,
          includeUiDisabledReason: jJ
        } = KJ();
      try {
        XJ = await async function(JJ) {
          let {
            hasPlaybackMark: cJ,
            canIncludeUi: ZJ,
            includeUiDisabledReason: FJ
          } = JJ;
          const eJ = {
              options: null
            },
            XJ = UJ.NotificationProvider.showCustomPopup({
              body: JJ => (0, GJ.jsx)(vJ, {
                hasPlaybackMark: cJ,
                canIncludeUi: ZJ,
                includeUiDisabledReason: FJ,
                selectionRef: eJ,
                closePopup: JJ
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await XJ.getResult() ? null : eJ.options
        }({
          hasPlaybackMark: null !== AJ,
          canIncludeUi: qJ,
          includeUiDisabledReason: jJ
        })
      } finally {
        IJ = !1
      }
      if (!XJ) return;
      const YJ = null !== (cJ = null === (ZJ = eJ.startFailure) || void 0 === ZJ ? void 0 : ZJ.call(eJ)) && void 0 !== cJ ? cJ : null;
      if (null !== YJ) return void UJ.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: YJ
      });
      if (! function(JJ) {
          return !(0, SJ.c)() && ((0, SJ.f)(!0), JJ.holdInput(!0), !0)
        }(eJ)) return;
      let hJ = null;
      try {
        hJ = await yJ(XJ.includeUi, (() => eJ.canvas()), eJ.Gy)
      } catch (wJ) {
        return console.error("Failed to create video stream for export", wJ), MJ(eJ), void UJ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: wJ instanceof Error ? wJ.message : "Could not start capture."
        })
      }
      let nJ = null;
      const fJ = [];
      let xJ = null,
        rJ = null;
      try {
        var QJ, EJ, bJ;
        nJ = eJ.playbackSpeed(), eJ.closeViewer(), eJ.setPlaybackSpeed(1), eJ.pause(), eJ.seekToTick(null !== AJ && void 0 !== AJ ? AJ : 0);
        const JJ = await async function() {
          const JJ = mJ.b.masterGain;
          if (!mJ.b.ctx || !JJ) return null;
          await mJ.b.ctx.resume();
          const cJ = mJ.b.ctx.createMediaStreamDestination();
          JJ.connect(cJ), VJ = cJ;
          const [ZJ] = cJ.stream.getAudioTracks();
          return null !== ZJ && void 0 !== ZJ ? ZJ : null
        }();
        rJ = new MediaStream;
        for (const FJ of hJ.getVideoTracks()) rJ.addTrack(FJ);
        JJ && rJ.addTrack(JJ);
        const cJ = function(JJ) {
          const cJ = sJ(DJ(JJ));
          if (!cJ) throw new Error(`No MediaRecorder mime type available for ${JJ}`);
          return cJ
        }(XJ.format);
        xJ = new MediaRecorder(rJ, {
          mimeType: cJ,
          videoBitsPerSecond: 8e6
        }), xJ.ondataavailable = JJ => {
          JJ.data.size > 0 && fJ.push(JJ.data)
        };
        const ZJ = new Promise((JJ => {
          xJ.onstop = () => {
            JJ()
          }
        }));
        await (null === (QJ = eJ.seekSettled) || void 0 === QJ ? void 0 : QJ.call(eJ));
        const [qJ] = hJ.getVideoTracks();
        xJ.start(250), eJ.play();
        const jJ = await
        function(JJ, cJ, ZJ) {
          return new Promise((FJ => {
            let UJ = !1;
            const eJ = JJ => {
                UJ || (UJ = !0, AJ(), cJ.removeEventListener("ended", XJ), FJ(JJ))
              },
              XJ = () => {
                eJ("captureLost")
              },
              AJ = JJ.watchPlayback((() => {
                JJ.isPlaying() || eJ("completed")
              }));
            cJ.addEventListener("ended", XJ), ZJ.onerror = () => {
              eJ("recorderError")
            }, "ended" !== cJ.readyState ? JJ.isPlaying() || eJ("completed") : eJ("captureLost")
          }))
        }(eJ, qJ, xJ);
        if (eJ.pause(), "inactive" !== xJ.state && xJ.stop(), await ZJ, "captureLost" === jJ) return void UJ.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === jJ) return void UJ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const YJ = null !== (EJ = null === (bJ = eJ.playbackFailure) || void 0 === bJ ? void 0 : bJ.call(eJ)) && void 0 !== EJ ? EJ : null;
        if (null !== YJ) return void UJ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${YJ} Nothing was saved.`
        });
        const GJ = new Blob(fJ, {
          type: cJ
        });
        GJ.size > 0 ? (0, FJ.d)(GJ, function(JJ, cJ) {
          const ZJ = function(JJ) {
            return "mp4" === JJ ? "mp4" : "webm"
          }(cJ);
          if (JJ) return `${JJ.replace(/\.bloxdreplay$/i,"")}.${ZJ}`;
          return `bloxd-replay-${Date.now()}.${ZJ}`
        }(eJ.fileName(), XJ.format)) : UJ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (wJ) {
        console.error("Replay video export failed", wJ), UJ.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: wJ instanceof Error ? wJ.message : "Something went wrong while exporting."
        })
      } finally {
        if (xJ && "inactive" !== xJ.state) try {
          xJ.stop()
        } catch (wJ) {
          console.error("Failed to stop MediaRecorder", wJ)
        }! function() {
          const JJ = mJ.b.masterGain;
          if (VJ && JJ) {
            try {
              JJ.disconnect(VJ)
            } catch (wJ) {
              console.error("Failed to disconnect Howler export tee", wJ)
            }
            VJ = null
          } else VJ = null
        }();
        for (const JJ of hJ.getTracks()) JJ.stop();
        if (rJ)
          for (const JJ of rJ.getTracks()) JJ.stop();
        null !== nJ && eJ.setPlaybackSpeed(nJ), eJ.pause(), MJ(eJ), eJ.reopenViewer()
      }
    }
  },
  4259: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Howl: () => FJ.Howl,
      b: () => FJ.Howler,
      readyAudioContext: () => UJ
    });
    var FJ = ZJ(4267);

    function UJ() {
      const JJ = FJ.Howler;
      var cJ;
      (JJ.volume(), JJ.ctx && JJ.autoUnlock) && (null === (cJ = JJ._unlockAudio) || void 0 === cJ || cJ.call(JJ))
    }
    FJ.Howler._mobileUnloaded = !0
  },
  41240: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      d: () => UJ
    });
    const FJ = ["recording", "freecam", "keyframe"];

    function UJ() {
      const JJ = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(JJ[1]) << 32n | BigInt(JJ[0])
    }
  },
  41272: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      HOLD_TIMEOUT_MS: () => AJ,
      ReplayViewer: () => jJ
    });
    var FJ = ZJ(35998),
      UJ = ZJ(36014),
      eJ = ZJ(4189),
      XJ = ZJ(41240);
    const AJ = 1e4,
      qJ = new Set(["Jn"]);
    class jJ {
      constructor(JJ) {
        var cJ;
        this.deps = JJ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (cJ = JJ.now) && void 0 !== cJ ? cJ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== eJ.cd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get hj() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? FJ.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(JJ, cJ) {
        var ZJ, UJ, XJ, AJ;
        const {
          client: qJ
        } = this.deps;
        if (!this.playback) {
          if (!qJ.setPlayback(!0)) throw new Error(FJ.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const jJ = this.epoch;
        let YJ;
        try {
          YJ = await qJ.open(JJ)
        } finally {
          this.loadingOpens--
        }
        if (jJ !== this.epoch) throw new Error(FJ.d.coreStopped.text);
        if ("opening" !== YJ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const JJ = function(JJ) {
            switch (JJ) {
              case "reloading":
                return null;
              case "stopped":
              case eJ.Sc.ModuleTrap:
                return FJ.d.coreStopped;
              case eJ.Sc.ModuleLoad:
                return FJ.d.viewerLoadFailed;
              case eJ.Sc.TooLarge:
                return FJ.d.cantOpen
            }
          }(YJ);
          if (null === JJ) return;
          throw new Error(JJ.text)
        }
        return this.rejectSave(new Error(FJ.d.saveClosed.text)), this.fileName = null !== (ZJ = null !== (UJ = cJ.fileName) && void 0 !== UJ ? UJ : null === (XJ = cJ.fileHandle) || void 0 === XJ ? void 0 : XJ.name) && void 0 !== ZJ ? ZJ : null, this.fileHandle = null !== (AJ = cJ.fileHandle) && void 0 !== AJ ? AJ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((JJ, cJ) => {
          this.pendingOpen = {
            resolve: JJ,
            reject: cJ
          }
        }))
      }
      play() {
        this.holds.has("Jn") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Jn")
      }
      seek(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this.lastView;
        null !== ZJ && (cJ || JJ < ZJ.Hh) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(JJ, cJ)
      }
      setSpeed(JJ) {
        this.deps.client.setSpeed(JJ)
      }
      setCameraMode(JJ) {
        this.deps.client.setCameraMode(JJ)
      }
      cycleCameraMode() {
        const JJ = this.lastView;
        null !== JJ && JJ.state !== eJ.cd.None && this.setCameraMode(XJ.b[(XJ.b.indexOf(JJ.cameraMode) + 1) % XJ.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(JJ) {
        this.edited(this.deps.client.setKeyframe(JJ))
      }
      moveKeyframe(JJ, cJ) {
        this.edited(this.deps.client.moveKeyframe(JJ, cJ))
      }
      deleteKeyframes(JJ, cJ) {
        this.edited(this.deps.client.deleteKeyframes(JJ, cJ))
      }
      setMark(JJ) {
        this.edited(this.deps.client.setMark(JJ))
      }
      crop(JJ, cJ) {
        return !(cJ <= JJ) && (null !== this.pendingSave ? (this.deps.notify(FJ.d.saveBusy), !1) : !!this.deps.client.crop(JJ, cJ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(FJ.d.saveBusy.text)) : new Promise(((JJ, cJ) => {
          const ZJ = {
            resolve: JJ,
            reject: cJ
          };
          this.pendingSave = ZJ, this.editsAtSave = this.edits, this.deps.client.save((0, XJ.d)()).then((JJ => {
            this.pendingSave === ZJ && this.saveStarted(JJ)
          }), (JJ => {
            this.pendingSave === ZJ && this.rejectSave(JJ instanceof Error ? JJ : new Error(String(JJ)))
          }))
        }))
      }
      saveStarted(JJ) {
        switch (JJ) {
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
      markSaved(JJ, cJ) {
        var ZJ, FJ;
        this.fileHandle = JJ, this.fileName = null !== (ZJ = null !== (FJ = null === JJ || void 0 === JJ ? void 0 : JJ.name) && void 0 !== FJ ? FJ : cJ) && void 0 !== ZJ ? ZJ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(FJ.d.coreStopped.text)), this.rejectSave(new Error(FJ.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var JJ, cJ, ZJ;
        const FJ = this.deps.client.view(),
          XJ = FJ !== this.lastView;
        this.lastView = FJ, this.opening && null !== FJ && FJ.state !== eJ.cd.None && FJ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, UJ.e)()), this.cropAsked ? (this.cropAsked = !1, null !== FJ && FJ.state === eJ.cd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== FJ && FJ.state !== eJ.cd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const jJ = 0 === this.settleFrames && 0 === (null !== (JJ = null === (cJ = (ZJ = this.deps).meshPending) || void 0 === cJ ? void 0 : cJ.call(ZJ)) && void 0 !== JJ ? JJ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && jJ && this.release("opening"), this.holds.has("seek") && jJ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && jJ && this.release("crop");
        const YJ = this.now();
        for (const [UJ, eJ] of this.holds) !qJ.has(UJ) && YJ - eJ >= AJ && (this.release(UJ), "opening" === UJ && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), XJ && this.deps.onChange()
      }
      cropped() {
        (0, UJ.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(JJ) {
        switch (JJ.reason) {
          case eJ.Sc.TooLarge:
            break;
          case eJ.Sc.Open:
          case eJ.Sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(FJ.d.cantOpen), this.settleOpen(new Error(FJ.d.cantOpen.text));
            break;
          case eJ.Sc.Crop:
            if (JJ.code === eJ.Oc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(FJ.d.cropFailed);
            break;
          case eJ.Sc.ModuleTrap:
          case eJ.Sc.ModuleLoad:
          case eJ.Sc.Port:
            this.moduleEnded(JJ.reason === eJ.Sc.ModuleTrap ? FJ.d.coreStopped : FJ.d.cantOpen);
            break;
          case eJ.Sc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${JJ.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(JJ) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(JJ), this.settleOpen(new Error(JJ.text))
      }
      saveDone(JJ) {
        const cJ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cJ || void 0 === cJ || cJ.resolve(JJ)
      }
      saveFailed(JJ) {
        this.rejectSave(new Error(JJ ? FJ.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(JJ) {
        JJ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(FJ.d.cropBusy.text)) : this.deps.notify(FJ.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(JJ) {
        const cJ = this.pendingOpen;
        this.pendingOpen = null, null === JJ ? null === cJ || void 0 === cJ || cJ.resolve() : null === cJ || void 0 === cJ || cJ.reject(JJ)
      }
      rejectSave(JJ) {
        const cJ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cJ || void 0 === cJ || cJ.reject(JJ)
      }
      hold(JJ) {
        const cJ = 0 === this.holds.size;
        this.holds.set(JJ, this.now()), cJ && this.deps.setHoldDraws(!0)
      }
      release(JJ) {
        this.holds.delete(JJ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41265: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      MESH_TAIL_MS: () => jJ,
      PLAY_START_TIMEOUT_MS: () => AJ,
      startWasmReplayVideoExport: () => hJ
    });
    var FJ = ZJ(38196),
      UJ = ZJ(41272),
      eJ = ZJ(4189),
      XJ = ZJ(2161);
    const AJ = UJ.HOLD_TIMEOUT_MS + 5e3,
      qJ = 50,
      jJ = 200;

    function YJ(JJ) {
      var cJ;
      return (null === (cJ = JJ.view) || void 0 === cJ ? void 0 : cJ.state) === eJ.cd.Cropping || JJ.hj.includes("crop")
    }

    function hJ(JJ) {
      return (0, FJ.d)((() => function(JJ) {
        var cJ, ZJ, FJ, UJ, hJ, DJ;
        const sJ = JJ.viewer(),
          nJ = null !== (cJ = null === sJ || void 0 === sJ ? void 0 : sJ.view) && void 0 !== cJ ? cJ : null,
          GJ = JJ.canvas();
        if (!sJ || !nJ || nJ.state === eJ.cd.None || 0 === nJ.totalTicks || !GJ || YJ(sJ)) return null;
        const fJ = null !== (ZJ = JJ.now) && void 0 !== ZJ ? ZJ : () => performance.now(),
          xJ = sJ.id,
          rJ = () => {
            const cJ = JJ.viewer();
            return cJ === sJ && cJ.id === xJ && cJ.isOpen ? cJ : null
          },
          vJ = Math.min(null !== (FJ = null === (UJ = nJ.mark) || void 0 === UJ ? void 0 : UJ.outTick) && void 0 !== FJ ? FJ : 1 / 0, nJ.totalTicks - 1);
        let mJ = null,
          QJ = !1;
        const EJ = () => {
          var JJ, cJ;
          return (null === (JJ = rJ()) || void 0 === JJ || null === (cJ = JJ.view) || void 0 === cJ ? void 0 : cJ.state) === eJ.cd.Playing
        };
        return {
          Gy: eJ.rd,
          playbackMarkInTick: null !== (hJ = null === (DJ = nJ.mark) || void 0 === DJ ? void 0 : DJ.inTick) && void 0 !== hJ ? hJ : null,
          startFailure: () => {
            const JJ = rJ();
            return null === JJ ? "Another replay opened. Export it again from there." : YJ(JJ) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var JJ, cJ;
            return null !== (JJ = null === (cJ = rJ()) || void 0 === cJ ? void 0 : cJ.fileName) && void 0 !== JJ ? JJ : null
          },
          playbackSpeed: () => {
            var JJ, cJ, ZJ;
            return null !== (JJ = null === (cJ = rJ()) || void 0 === cJ || null === (ZJ = cJ.view) || void 0 === ZJ ? void 0 : ZJ.speed) && void 0 !== JJ ? JJ : 1
          },
          setPlaybackSpeed: JJ => {
            var cJ;
            null === (cJ = rJ()) || void 0 === cJ || cJ.setSpeed(JJ)
          },
          play: () => {
            var JJ;
            QJ = !1, mJ = fJ(), null === (JJ = rJ()) || void 0 === JJ || JJ.play()
          },
          pause: () => {
            var JJ;
            null === (JJ = rJ()) || void 0 === JJ || JJ.pause()
          },
          seekToTick: JJ => {
            var cJ;
            null === (cJ = rJ()) || void 0 === cJ || cJ.seek(JJ, !0)
          },
          seekSettled: () => new Promise((JJ => {
            const cJ = setInterval((() => {
              const ZJ = rJ();
              null === ZJ ? (clearInterval(cJ), JJ()) : ZJ.hj.includes("seek") || (clearInterval(cJ), setTimeout(JJ, jJ))
            }), qJ)
          })),
          isPlaying: () => {
            var JJ, cJ, ZJ;
            return null !== mJ && null !== rJ() && (!!EJ() || !QJ && (null !== (JJ = null === (cJ = rJ()) || void 0 === cJ || null === (ZJ = cJ.view) || void 0 === ZJ ? void 0 : ZJ.Hh) && void 0 !== JJ ? JJ : 0) < vJ && fJ() - mJ < AJ)
          },
          watchPlayback: cJ => {
            const ZJ = JJ.watchViewer((() => {
                QJ ||= null !== mJ && EJ(), cJ()
              })),
              FJ = setTimeout(cJ, AJ + 1);
            return () => {
              clearTimeout(FJ), ZJ()
            }
          },
          playbackFailure: () => {
            var JJ, cJ;
            const ZJ = rJ();
            return null === ZJ ? "The replay closed before the video finished." : (null !== (JJ = null === (cJ = ZJ.view) || void 0 === cJ ? void 0 : cJ.Hh) && void 0 !== JJ ? JJ : 0) >= vJ ? null : QJ ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => GJ,
          closeViewer: () => {
            JJ.requestViewer("close")
          },
          reopenViewer: () => {
            JJ.requestViewer("open")
          },
          holdInput: XJ.d
        }
      }(JJ)))
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);