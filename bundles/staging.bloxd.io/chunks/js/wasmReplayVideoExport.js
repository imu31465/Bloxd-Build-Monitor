export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36515: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => TU
    });
    var tU = gU(24);
    const pU = 1500,
      EU = 1e3,
      PU = {
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

    function TU(UU) {
      var RU;
      const gU = null !== (RU = UU.timeoutMs) && void 0 !== RU ? RU : "Error" === UU.type ? pU : EU;
      tU.p.yh("showBottomMessage", {
        message: UU.text,
        timeoutLength: gU,
        type: UU.type
      })
    }
  },
  36524: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      h: () => pU
    });
    const tU = "data-replay-ui-active",
      pU = [{
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
  36527: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      f: () => GU,
      g: () => cU
    });
    var tU = gU(21),
      pU = gU(24),
      EU = gU(36524);

    function PU() {
      const UU = {};
      for (const {
          group: RU
        }
        of EU.h) UU[RU] = !0;
      return UU
    }
    let TU = PU();

    function qU() {
      pU.p.yh("replayViewer|uiVisibilityChanged")
    }

    function KU() {
      return TU
    }

    function cU(UU, RU) {
      TU[UU] !== RU && (TU = {
        ...TU,
        [UU]: RU
      }, "nametag" === UU && tU.b.set({
        areNametagsHidden: !RU
      }), qU())
    }

    function GU() {
      TU = PU(), tU.b.set({
        areNametagsHidden: !1
      }), qU()
    }
  },
  38779: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => aU
    });
    var tU = gU(1648),
      pU = gU(1333),
      EU = gU(56),
      PU = gU(1037),
      TU = gU.n(PU),
      qU = gU(1412),
      KU = gU(96);
    const cU = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      GU = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function jU(UU) {
      return "webm" === UU ? cU : GU
    }

    function uU(UU) {
      for (const RU of UU)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(RU)) return RU;
      return null
    }

    function CU(UU) {
      return null !== uU(jU(UU))
    }
    var hU = gU(1090);
    const QU = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function eU() {
      return CU("webm") ? "webm" : CU("mp4") ? "mp4" : "webm"
    }

    function WU(UU) {
      let {
        cards: RU
      } = UU;
      return (0, hU.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: RU.map((UU => (0, hU.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, hU.jsx)("div", {
            className: TU()("ReplayVideoExportOptionCard", {
              Selected: UU.selected,
              Disabled: UU.disabled
            }),
            onClick: () => {
              UU.disabled || UU.onSelect()
            },
            children: (0, hU.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, hU.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: UU.label
              }), (0, hU.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: UU.description
              })]
            })
          }), UU.disabled && UU.disabledReason && (0, hU.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: UU.disabledReason
          })]
        }, UU.id)))
      })
    }
    const fU = (0, EU.memo)((function(UU) {
      let {
        hasPlaybackMark: RU,
        canIncludeUi: gU,
        includeUiDisabledReason: tU,
        selectionRef: pU,
        closePopup: PU
      } = UU;
      const TU = CU("webm") || CU("mp4"),
        [cU, GU] = (0, EU.useState)(eU),
        [jU, uU] = (0, EU.useState)(gU),
        fU = TU && CU(cU);
      if (!TU) {
        const UU = (0, KU.isMobile)() ? "screen recording" : "OBS";
        return (0, hU.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, hU.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, hU.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${UU}.`
          }), (0, hU.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, hU.jsx)(qU.E, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                pU.options = null, PU()
              },
              children: "Close"
            })
          })]
        })
      }
      const xU = RU ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        mU = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !jU,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            uU(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: jU,
          disabled: !gU,
          disabledReason: tU,
          onSelect: () => {
            uU(!0)
          }
        }],
        IU = QU.map((UU => {
          const RU = CU(UU.id);
          return {
            id: UU.id,
            label: UU.label,
            description: UU.description,
            selected: cU === UU.id,
            disabled: !RU,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              GU(UU.id)
            }
          }
        }));
      return (0, hU.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, hU.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, hU.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: xU
        }), (0, hU.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, hU.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, hU.jsx)(WU, {
            cards: mU
          })]
        }), (0, hU.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, hU.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, hU.jsx)(WU, {
            cards: IU
          })]
        }), (0, hU.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, hU.jsx)(qU.j, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !fU,
            onClick: () => {
              pU.options = {
                format: cU,
                includeUi: gU && jU
              }, PU()
            },
            children: "Export"
          }), (0, hU.jsx)(qU.E, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              pU.options = null, PU()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var xU = gU(4512),
      mU = gU(36524),
      IU = gU(36527);
    let JU = null;

    function wU() {
      return function() {
        const UU = (0, IU.c)();
        for (const {
            group: RU,
            dataAttr: gU
          }
          of mU.h)
          if (gU && UU[RU]) return !0;
        return !1
      }() ? function() {
        var UU;
        return "function" === typeof(null === (UU = navigator.mediaDevices) || void 0 === UU ? void 0 : UU.getDisplayMedia)
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
    async function nU(UU, RU, gU) {
      return UU ? async function() {
        const UU = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const RU of UU.getAudioTracks()) RU.stop(), UU.removeTrack(RU);
        return UU
      }(): RU().captureStream(Math.max(1, Math.round(gU)))
    }
    var bU = gU(38631);
    let oU = !1;

    function ZU(UU) {
      UU.holdInput(!1), (0, bU.f)(!1)
    }
    async function aU(UU) {
      var RU, gU;
      if ((0, bU.b)() || oU) return;
      const EU = UU();
      if (!EU) return;
      oU = !0;
      let PU = null;
      const TU = EU.playbackMarkInTick,
        {
          canIncludeUi: qU,
          includeUiDisabledReason: KU
        } = wU();
      try {
        PU = await async function(UU) {
          let {
            hasPlaybackMark: RU,
            canIncludeUi: gU,
            includeUiDisabledReason: tU
          } = UU;
          const EU = {
              options: null
            },
            PU = pU.NotificationProvider.showCustomPopup({
              body: UU => (0, hU.jsx)(fU, {
                hasPlaybackMark: RU,
                canIncludeUi: gU,
                includeUiDisabledReason: tU,
                selectionRef: EU,
                closePopup: UU
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await PU.getResult() ? null : EU.options
        }({
          hasPlaybackMark: null !== TU,
          canIncludeUi: qU,
          includeUiDisabledReason: KU
        })
      } finally {
        oU = !1
      }
      if (!PU) return;
      const cU = null !== (RU = null === (gU = EU.startFailure) || void 0 === gU ? void 0 : gU.call(EU)) && void 0 !== RU ? RU : null;
      if (null !== cU) return void pU.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: cU
      });
      if (! function(UU) {
          return !(0, bU.b)() && ((0, bU.f)(!0), UU.holdInput(!0), !0)
        }(EU)) return;
      let GU = null;
      try {
        GU = await nU(PU.includeUi, (() => EU.canvas()), EU.bZ)
      } catch (YU) {
        return console.error("Failed to create video stream for export", YU), ZU(EU), void pU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: YU instanceof Error ? YU.message : "Could not start capture."
        })
      }
      let CU = null;
      const QU = [];
      let eU = null,
        WU = null;
      try {
        var mU, IU, aU;
        CU = EU.playbackSpeed(), EU.closeViewer(), EU.setPlaybackSpeed(1), EU.pause(), EU.seekToTick(null !== TU && void 0 !== TU ? TU : 0);
        const UU = await async function() {
          const UU = xU.Howler.masterGain;
          if (!xU.Howler.ctx || !UU) return null;
          await xU.Howler.ctx.resume();
          const RU = xU.Howler.ctx.createMediaStreamDestination();
          UU.connect(RU), JU = RU;
          const [gU] = RU.stream.getAudioTracks();
          return null !== gU && void 0 !== gU ? gU : null
        }();
        WU = new MediaStream;
        for (const tU of GU.getVideoTracks()) WU.addTrack(tU);
        UU && WU.addTrack(UU);
        const RU = function(UU) {
          const RU = uU(jU(UU));
          if (!RU) throw new Error(`No MediaRecorder mime type available for ${UU}`);
          return RU
        }(PU.format);
        eU = new MediaRecorder(WU, {
          mimeType: RU,
          videoBitsPerSecond: 8e6
        }), eU.ondataavailable = UU => {
          UU.data.size > 0 && QU.push(UU.data)
        };
        const gU = new Promise((UU => {
          eU.onstop = () => {
            UU()
          }
        }));
        await (null === (mU = EU.seekSettled) || void 0 === mU ? void 0 : mU.call(EU));
        const [qU] = GU.getVideoTracks();
        eU.start(250), EU.play();
        const KU = await
        function(UU, RU, gU) {
          return new Promise((tU => {
            let pU = !1;
            const EU = UU => {
                pU || (pU = !0, TU(), RU.removeEventListener("ended", PU), tU(UU))
              },
              PU = () => {
                EU("captureLost")
              },
              TU = UU.watchPlayback((() => {
                UU.isPlaying() || EU("completed")
              }));
            RU.addEventListener("ended", PU), gU.onerror = () => {
              EU("recorderError")
            }, "ended" !== RU.readyState ? UU.isPlaying() || EU("completed") : EU("captureLost")
          }))
        }(EU, qU, eU);
        if (EU.pause(), "inactive" !== eU.state && eU.stop(), await gU, "captureLost" === KU) return void pU.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === KU) return void pU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const cU = null !== (IU = null === (aU = EU.playbackFailure) || void 0 === aU ? void 0 : aU.call(EU)) && void 0 !== IU ? IU : null;
        if (null !== cU) return void pU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${cU} Nothing was saved.`
        });
        const hU = new Blob(QU, {
          type: RU
        });
        hU.size > 0 ? (0, tU.d)(hU, function(UU, RU) {
          const gU = function(UU) {
            return "mp4" === UU ? "mp4" : "webm"
          }(RU);
          if (UU) return `${UU.replace(/\.bloxdreplay$/i,"")}.${gU}`;
          return `bloxd-replay-${Date.now()}.${gU}`
        }(EU.fileName(), PU.format)) : pU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (YU) {
        console.error("Replay video export failed", YU), pU.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: YU instanceof Error ? YU.message : "Something went wrong while exporting."
        })
      } finally {
        if (eU && "inactive" !== eU.state) try {
          eU.stop()
        } catch (YU) {
          console.error("Failed to stop MediaRecorder", YU)
        }! function() {
          const UU = xU.Howler.masterGain;
          if (JU && UU) {
            try {
              UU.disconnect(JU)
            } catch (YU) {
              console.error("Failed to disconnect Howler export tee", YU)
            }
            JU = null
          } else JU = null
        }();
        for (const UU of GU.getTracks()) UU.stop();
        if (WU)
          for (const UU of WU.getTracks()) UU.stop();
        null !== CU && EU.setPlaybackSpeed(CU), EU.pause(), ZU(EU), EU.reopenViewer()
      }
    }
  },
  4512: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Howl: () => pU.Howl,
      Howler: () => pU.Howler,
      iosAudio: () => qU,
      musicOutput: () => QU,
      readyAudioContext: () => eU
    });
    var tU, pU = gU(4518),
      EU = gU(96);
    const PU = pU.Howler;
    let TU;

    function qU() {
      return TU ??= "ios" === (0, EU.getOperatingSystem)(), TU
    }

    function KU() {
      var UU, RU;
      if (PU.ctx || !PU.usingWebAudio || "undefined" === typeof AudioContext || !qU()) return;
      const gU = navigator.audioSession;
      let tU;
      "auto" === (null === gU || void 0 === gU ? void 0 : gU.type) && (gU.type = "ambient");
      try {
        tU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pU = tU.createGain();
      pU.gain.setValueAtTime(PU._muted ? 0 : null !== (UU = PU._volume) && void 0 !== UU ? UU : 1, tU.currentTime), pU.connect(tU.destination), PU.ctx = tU, PU.masterGain = pU, null === (RU = PU._setup) || void 0 === RU || RU.call(PU)
    }
    PU._mobileUnloaded = !0;
    const cU = PU.volume.bind(pU.Howler);
    PU.volume = function() {
      return KU(), cU(...arguments)
    };
    const GU = PU.mute.bind(pU.Howler);
    PU.mute = UU => (KU(), GU(UU));
    const jU = pU.Howl.prototype,
      uU = jU.init;
    jU.init = function(UU) {
      return KU(), uU.call(this, UU)
    };
    let CU = 0;
    const hU = null === (tU = PU._autoSuspend) || void 0 === tU ? void 0 : tU.bind(pU.Howler);

    function QU() {
      eU();
      const {
        ctx: UU,
        masterGain: RU
      } = PU;
      return UU && RU ? {
        ctx: UU,
        destination: RU,
        holdAwake: UU => {
          var RU, gU;
          (CU += UU ? 1 : -1, UU) ? null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU): null === (gU = PU._autoSuspend) || void 0 === gU || gU.call(PU)
        },
        wake: () => {
          var RU;
          "running" !== UU.state && (null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function eU() {
      var UU;
      (PU.volume(), PU.ctx && PU.autoUnlock) && (null === (UU = PU._unlockAudio) || void 0 === UU || UU.call(PU))
    }
    hU && (PU._autoSuspend = () => CU > 0 ? pU.Howler : hU())
  },
  41923: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => pU
    });
    const tU = ["recording", "freecam", "keyframe"];

    function pU() {
      const UU = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(UU[1]) << 32n | BigInt(UU[0])
    }
  },
  41963: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      HOLD_TIMEOUT_MS: () => TU,
      ReplayViewer: () => KU
    });
    var tU = gU(36515),
      pU = gU(36527),
      EU = gU(4449),
      PU = gU(41923);
    const TU = 1e4,
      qU = new Set(["Fu"]);
    class KU {
      constructor(UU) {
        var RU;
        this.deps = UU, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (RU = UU.now) && void 0 !== RU ? RU : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== EU.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get WT() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? tU.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(UU, RU) {
        var gU, pU, PU, TU;
        const {
          client: qU
        } = this.deps;
        if (!this.playback) {
          if (!qU.setPlayback(!0)) throw new Error(tU.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const KU = this.epoch;
        let cU;
        try {
          cU = await qU.open(UU)
        } finally {
          this.loadingOpens--
        }
        if (KU !== this.epoch) throw new Error(tU.b.coreStopped.text);
        if ("opening" !== cU) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const UU = function(UU) {
            switch (UU) {
              case "reloading":
                return null;
              case "stopped":
              case EU.Zc.ModuleTrap:
                return tU.b.coreStopped;
              case EU.Zc.ModuleLoad:
                return tU.b.viewerLoadFailed;
              case EU.Zc.TooLarge:
                return tU.b.cantOpen
            }
          }(cU);
          if (null === UU) return;
          throw new Error(UU.text)
        }
        return this.rejectSave(new Error(tU.b.saveClosed.text)), this.fileName = null !== (gU = null !== (pU = RU.fileName) && void 0 !== pU ? pU : null === (PU = RU.fileHandle) || void 0 === PU ? void 0 : PU.name) && void 0 !== gU ? gU : null, this.fileHandle = null !== (TU = RU.fileHandle) && void 0 !== TU ? TU : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((UU, RU) => {
          this.pendingOpen = {
            resolve: UU,
            reject: RU
          }
        }))
      }
      play() {
        this.holds.has("Fu") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fu")
      }
      seek(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this.lastView;
        null !== gU && (RU || UU < gU.HG) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(UU, RU)
      }
      setSpeed(UU) {
        this.deps.client.setSpeed(UU)
      }
      setCameraMode(UU) {
        this.deps.client.setCameraMode(UU)
      }
      cycleCameraMode() {
        const UU = this.lastView;
        null !== UU && UU.state !== EU.kd.None && this.setCameraMode(PU.b[(PU.b.indexOf(UU.cameraMode) + 1) % PU.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(UU) {
        this.edited(this.deps.client.setKeyframe(UU))
      }
      moveKeyframe(UU, RU) {
        this.edited(this.deps.client.moveKeyframe(UU, RU))
      }
      deleteKeyframes(UU, RU) {
        this.edited(this.deps.client.deleteKeyframes(UU, RU))
      }
      setMark(UU) {
        this.edited(this.deps.client.setMark(UU))
      }
      crop(UU, RU) {
        return !(RU <= UU) && (null !== this.pendingSave ? (this.deps.notify(tU.b.saveBusy), !1) : !!this.deps.client.crop(UU, RU) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(tU.b.saveBusy.text)) : new Promise(((UU, RU) => {
          const gU = {
            resolve: UU,
            reject: RU
          };
          this.pendingSave = gU, this.editsAtSave = this.edits, this.deps.client.save((0, PU.f)()).then((UU => {
            this.pendingSave === gU && this.saveStarted(UU)
          }), (UU => {
            this.pendingSave === gU && this.rejectSave(UU instanceof Error ? UU : new Error(String(UU)))
          }))
        }))
      }
      saveStarted(UU) {
        switch (UU) {
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
      markSaved(UU, RU) {
        var gU, tU;
        this.fileHandle = UU, this.fileName = null !== (gU = null !== (tU = null === UU || void 0 === UU ? void 0 : UU.name) && void 0 !== tU ? tU : RU) && void 0 !== gU ? gU : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(tU.b.coreStopped.text)), this.rejectSave(new Error(tU.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var UU, RU, gU;
        const tU = this.deps.client.view(),
          PU = tU !== this.lastView;
        this.lastView = tU, this.opening && null !== tU && tU.state !== EU.kd.None && tU.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, pU.f)()), this.cropAsked ? (this.cropAsked = !1, null !== tU && tU.state === EU.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== tU && tU.state !== EU.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const KU = 0 === this.settleFrames && 0 === (null !== (UU = null === (RU = (gU = this.deps).meshPending) || void 0 === RU ? void 0 : RU.call(gU)) && void 0 !== UU ? UU : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && KU && this.release("opening"), this.holds.has("seek") && KU && this.release("seek"), this.holds.has("crop") && !this.cropRunning && KU && this.release("crop");
        const cU = this.now();
        for (const [pU, EU] of this.holds) !qU.has(pU) && cU - EU >= TU && (this.release(pU), "opening" === pU && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), PU && this.deps.onChange()
      }
      cropped() {
        (0, pU.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(UU) {
        switch (UU.reason) {
          case EU.Zc.TooLarge:
            break;
          case EU.Zc.Open:
          case EU.Zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(tU.b.cantOpen), this.settleOpen(new Error(tU.b.cantOpen.text));
            break;
          case EU.Zc.Crop:
            if (UU.code === EU.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(tU.b.cropFailed);
            break;
          case EU.Zc.ModuleTrap:
          case EU.Zc.ModuleLoad:
          case EU.Zc.Port:
            this.moduleEnded(UU.reason === EU.Zc.ModuleTrap ? tU.b.coreStopped : tU.b.cantOpen);
            break;
          case EU.Zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${UU.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(UU) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(UU), this.settleOpen(new Error(UU.text))
      }
      saveDone(UU) {
        const RU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RU || void 0 === RU || RU.resolve(UU)
      }
      saveFailed(UU) {
        this.rejectSave(new Error(UU ? tU.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(UU) {
        UU && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(tU.b.cropBusy.text)) : this.deps.notify(tU.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(UU) {
        const RU = this.pendingOpen;
        this.pendingOpen = null, null === UU ? null === RU || void 0 === RU || RU.resolve() : null === RU || void 0 === RU || RU.reject(UU)
      }
      rejectSave(UU) {
        const RU = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RU || void 0 === RU || RU.reject(UU)
      }
      hold(UU) {
        const RU = 0 === this.holds.size;
        this.holds.set(UU, this.now()), RU && this.deps.setHoldDraws(!0)
      }
      release(UU) {
        this.holds.delete(UU) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41958: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      MESH_TAIL_MS: () => KU,
      PLAY_START_TIMEOUT_MS: () => TU,
      startWasmReplayVideoExport: () => GU
    });
    var tU = gU(38779),
      pU = gU(41963),
      EU = gU(4449),
      PU = gU(2246);
    const TU = pU.HOLD_TIMEOUT_MS + 5e3,
      qU = 50,
      KU = 200;

    function cU(UU) {
      var RU;
      return (null === (RU = UU.view) || void 0 === RU ? void 0 : RU.state) === EU.kd.Cropping || UU.WT.includes("crop")
    }

    function GU(UU) {
      return (0, tU.e)((() => function(UU) {
        var RU, gU, tU, pU, GU, jU;
        const uU = UU.viewer(),
          CU = null !== (RU = null === uU || void 0 === uU ? void 0 : uU.view) && void 0 !== RU ? RU : null,
          hU = UU.canvas();
        if (!uU || !CU || CU.state === EU.kd.None || 0 === CU.totalTicks || !hU || cU(uU)) return null;
        const QU = null !== (gU = UU.now) && void 0 !== gU ? gU : () => performance.now(),
          eU = uU.id,
          WU = () => {
            const RU = UU.viewer();
            return RU === uU && RU.id === eU && RU.isOpen ? RU : null
          },
          fU = Math.min(null !== (tU = null === (pU = CU.mark) || void 0 === pU ? void 0 : pU.outTick) && void 0 !== tU ? tU : 1 / 0, CU.totalTicks - 1);
        let xU = null,
          mU = !1;
        const IU = () => {
          var UU, RU;
          return (null === (UU = WU()) || void 0 === UU || null === (RU = UU.view) || void 0 === RU ? void 0 : RU.state) === EU.kd.Playing
        };
        return {
          bZ: EU.xd,
          playbackMarkInTick: null !== (GU = null === (jU = CU.mark) || void 0 === jU ? void 0 : jU.inTick) && void 0 !== GU ? GU : null,
          startFailure: () => {
            const UU = WU();
            return null === UU ? "Another replay opened. Export it again from there." : cU(UU) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var UU, RU;
            return null !== (UU = null === (RU = WU()) || void 0 === RU ? void 0 : RU.fileName) && void 0 !== UU ? UU : null
          },
          playbackSpeed: () => {
            var UU, RU, gU;
            return null !== (UU = null === (RU = WU()) || void 0 === RU || null === (gU = RU.view) || void 0 === gU ? void 0 : gU.speed) && void 0 !== UU ? UU : 1
          },
          setPlaybackSpeed: UU => {
            var RU;
            null === (RU = WU()) || void 0 === RU || RU.setSpeed(UU)
          },
          play: () => {
            var UU;
            mU = !1, xU = QU(), null === (UU = WU()) || void 0 === UU || UU.play()
          },
          pause: () => {
            var UU;
            null === (UU = WU()) || void 0 === UU || UU.pause()
          },
          seekToTick: UU => {
            var RU;
            null === (RU = WU()) || void 0 === RU || RU.seek(UU, !0)
          },
          seekSettled: () => new Promise((UU => {
            const RU = setInterval((() => {
              const gU = WU();
              null === gU ? (clearInterval(RU), UU()) : gU.WT.includes("seek") || (clearInterval(RU), setTimeout(UU, KU))
            }), qU)
          })),
          isPlaying: () => {
            var UU, RU, gU;
            return null !== xU && null !== WU() && (!!IU() || !mU && (null !== (UU = null === (RU = WU()) || void 0 === RU || null === (gU = RU.view) || void 0 === gU ? void 0 : gU.HG) && void 0 !== UU ? UU : 0) < fU && QU() - xU < TU)
          },
          watchPlayback: RU => {
            const gU = UU.watchViewer((() => {
                mU ||= null !== xU && IU(), RU()
              })),
              tU = setTimeout(RU, TU + 1);
            return () => {
              clearTimeout(tU), gU()
            }
          },
          playbackFailure: () => {
            var UU, RU;
            const gU = WU();
            return null === gU ? "The replay closed before the video finished." : (null !== (UU = null === (RU = gU.view) || void 0 === RU ? void 0 : RU.HG) && void 0 !== UU ? UU : 0) >= fU ? null : mU ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => hU,
          closeViewer: () => {
            UU.requestViewer("close")
          },
          reopenViewer: () => {
            UU.requestViewer("open")
          },
          holdInput: PU.i
        }
      }(UU)))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);