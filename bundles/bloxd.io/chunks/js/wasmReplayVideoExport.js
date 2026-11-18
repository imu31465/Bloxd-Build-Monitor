export const id = 59;
export const ids = [53, 59, 85];
export const modules = {
  35941: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      h: () => JB
    });
    var VB = dB(24);
    const yB = 1500,
      pB = 1e3,
      lB = {
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

    function JB(BB) {
      var TB;
      const dB = null !== (TB = BB.timeoutMs) && void 0 !== TB ? TB : "Error" === BB.type ? yB : pB;
      VB.h.yH("showBottomMessage", {
        message: BB.text,
        timeoutLength: dB,
        type: BB.type
      })
    }
  },
  35950: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = "data-replay-ui-active",
      yB = [{
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
  35959: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      e: () => kB,
      g: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(35950);

    function lB() {
      const BB = {};
      for (const {
          group: TB
        }
        of pB.g) BB[TB] = !0;
      return BB
    }
    let JB = lB();

    function YB() {
      yB.h.yH("replayViewer|uiVisibilityChanged")
    }

    function gB() {
      return JB
    }

    function oB(BB, TB) {
      JB[BB] !== TB && (JB = {
        ...JB,
        [BB]: TB
      }, "nametag" === BB && VB.d.set({
        areNametagsHidden: !TB
      }), YB())
    }

    function kB() {
      JB = lB(), VB.d.set({
        areNametagsHidden: !1
      }), YB()
    }
  },
  38176: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => FB
    });
    var VB = dB(1612),
      yB = dB(1235),
      pB = dB(62),
      lB = dB(933),
      JB = dB.n(lB),
      YB = dB(1324),
      gB = dB(95);
    const oB = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      kB = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function LB(BB) {
      return "webm" === BB ? oB : kB
    }

    function OB(BB) {
      for (const TB of BB)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(TB)) return TB;
      return null
    }

    function DB(BB) {
      return null !== OB(LB(BB))
    }
    var uB = dB(980);
    const HB = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function EB() {
      return DB("webm") ? "webm" : DB("mp4") ? "mp4" : "webm"
    }

    function vB(BB) {
      let {
        cards: TB
      } = BB;
      return (0, uB.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: TB.map((BB => (0, uB.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, uB.jsx)("div", {
            className: JB()("ReplayVideoExportOptionCard", {
              Selected: BB.selected,
              Disabled: BB.disabled
            }),
            onClick: () => {
              BB.disabled || BB.onSelect()
            },
            children: (0, uB.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, uB.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: BB.label
              }), (0, uB.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: BB.description
              })]
            })
          }), BB.disabled && BB.disabledReason && (0, uB.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: BB.disabledReason
          })]
        }, BB.id)))
      })
    }
    const mB = (0, pB.memo)((function(BB) {
      let {
        hasPlaybackMark: TB,
        canIncludeUi: dB,
        includeUiDisabledReason: VB,
        selectionRef: yB,
        closePopup: lB
      } = BB;
      const JB = DB("webm") || DB("mp4"),
        [oB, kB] = (0, pB.useState)(EB),
        [LB, OB] = (0, pB.useState)(dB),
        mB = JB && DB(oB);
      if (!JB) {
        const BB = (0, gB.isMobile)() ? "screen recording" : "OBS";
        return (0, uB.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, uB.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, uB.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
          }), (0, uB.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, uB.jsx)(YB.K, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                yB.options = null, lB()
              },
              children: "Close"
            })
          })]
        })
      }
      const iB = TB ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        NB = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !LB,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            OB(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: LB,
          disabled: !dB,
          disabledReason: VB,
          onSelect: () => {
            OB(!0)
          }
        }],
        tB = HB.map((BB => {
          const TB = DB(BB.id);
          return {
            id: BB.id,
            label: BB.label,
            description: BB.description,
            selected: oB === BB.id,
            disabled: !TB,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              kB(BB.id)
            }
          }
        }));
      return (0, uB.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, uB.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, uB.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: iB
        }), (0, uB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, uB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, uB.jsx)(vB, {
            cards: NB
          })]
        }), (0, uB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, uB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, uB.jsx)(vB, {
            cards: tB
          })]
        }), (0, uB.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, uB.jsx)(YB.k, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !mB,
            onClick: () => {
              yB.options = {
                format: oB,
                includeUi: dB && LB
              }, lB()
            },
            children: "Export"
          }), (0, uB.jsx)(YB.K, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              yB.options = null, lB()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var iB = dB(4258),
      NB = dB(35950),
      tB = dB(35959);
    let fB = null;

    function sB() {
      return function() {
        const BB = (0, tB.d)();
        for (const {
            group: TB,
            dataAttr: dB
          }
          of NB.g)
          if (dB && BB[TB]) return !0;
        return !1
      }() ? function() {
        var BB;
        return "function" === typeof(null === (BB = navigator.mediaDevices) || void 0 === BB ? void 0 : BB.getDisplayMedia)
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
    async function MB(BB, TB, dB) {
      return BB ? async function() {
        const BB = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const TB of BB.getAudioTracks()) TB.stop(), BB.removeTrack(TB);
        return BB
      }(): TB().captureStream(Math.max(1, Math.round(dB)))
    }
    var zB = dB(38028);
    let wB = !1;

    function UB(BB) {
      BB.holdInput(!1), (0, zB.f)(!1)
    }
    async function FB(BB) {
      var TB, dB;
      if ((0, zB.c)() || wB) return;
      const pB = BB();
      if (!pB) return;
      wB = !0;
      let lB = null;
      const JB = pB.playbackMarkInTick,
        {
          canIncludeUi: YB,
          includeUiDisabledReason: gB
        } = sB();
      try {
        lB = await async function(BB) {
          let {
            hasPlaybackMark: TB,
            canIncludeUi: dB,
            includeUiDisabledReason: VB
          } = BB;
          const pB = {
              options: null
            },
            lB = yB.NotificationProvider.showCustomPopup({
              body: BB => (0, uB.jsx)(mB, {
                hasPlaybackMark: TB,
                canIncludeUi: dB,
                includeUiDisabledReason: VB,
                selectionRef: pB,
                closePopup: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await lB.getResult() ? null : pB.options
        }({
          hasPlaybackMark: null !== JB,
          canIncludeUi: YB,
          includeUiDisabledReason: gB
        })
      } finally {
        wB = !1
      }
      if (!lB) return;
      const oB = null !== (TB = null === (dB = pB.startFailure) || void 0 === dB ? void 0 : dB.call(pB)) && void 0 !== TB ? TB : null;
      if (null !== oB) return void yB.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: oB
      });
      if (! function(BB) {
          return !(0, zB.c)() && ((0, zB.f)(!0), BB.holdInput(!0), !0)
        }(pB)) return;
      let kB = null;
      try {
        kB = await MB(lB.includeUi, (() => pB.canvas()), pB.WU)
      } catch (KB) {
        return console.error("Failed to create video stream for export", KB), UB(pB), void yB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: KB instanceof Error ? KB.message : "Could not start capture."
        })
      }
      let DB = null;
      const HB = [];
      let EB = null,
        vB = null;
      try {
        var NB, tB, FB;
        DB = pB.playbackSpeed(), pB.closeViewer(), pB.setPlaybackSpeed(1), pB.pause(), pB.seekToTick(null !== JB && void 0 !== JB ? JB : 0);
        const BB = await async function() {
          const BB = iB.b.masterGain;
          if (!iB.b.ctx || !BB) return null;
          await iB.b.ctx.resume();
          const TB = iB.b.ctx.createMediaStreamDestination();
          BB.connect(TB), fB = TB;
          const [dB] = TB.stream.getAudioTracks();
          return null !== dB && void 0 !== dB ? dB : null
        }();
        vB = new MediaStream;
        for (const VB of kB.getVideoTracks()) vB.addTrack(VB);
        BB && vB.addTrack(BB);
        const TB = function(BB) {
          const TB = OB(LB(BB));
          if (!TB) throw new Error(`No MediaRecorder mime type available for ${BB}`);
          return TB
        }(lB.format);
        EB = new MediaRecorder(vB, {
          mimeType: TB,
          videoBitsPerSecond: 8e6
        }), EB.ondataavailable = BB => {
          BB.data.size > 0 && HB.push(BB.data)
        };
        const dB = new Promise((BB => {
          EB.onstop = () => {
            BB()
          }
        }));
        await (null === (NB = pB.seekSettled) || void 0 === NB ? void 0 : NB.call(pB));
        const [YB] = kB.getVideoTracks();
        EB.start(250), pB.play();
        const gB = await
        function(BB, TB, dB) {
          return new Promise((VB => {
            let yB = !1;
            const pB = BB => {
                yB || (yB = !0, JB(), TB.removeEventListener("ended", lB), VB(BB))
              },
              lB = () => {
                pB("captureLost")
              },
              JB = BB.watchPlayback((() => {
                BB.isPlaying() || pB("completed")
              }));
            TB.addEventListener("ended", lB), dB.onerror = () => {
              pB("recorderError")
            }, "ended" !== TB.readyState ? BB.isPlaying() || pB("completed") : pB("captureLost")
          }))
        }(pB, YB, EB);
        if (pB.pause(), "inactive" !== EB.state && EB.stop(), await dB, "captureLost" === gB) return void yB.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === gB) return void yB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const oB = null !== (tB = null === (FB = pB.playbackFailure) || void 0 === FB ? void 0 : FB.call(pB)) && void 0 !== tB ? tB : null;
        if (null !== oB) return void yB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${oB} Nothing was saved.`
        });
        const uB = new Blob(HB, {
          type: TB
        });
        uB.size > 0 ? (0, VB.c)(uB, function(BB, TB) {
          const dB = function(BB) {
            return "mp4" === BB ? "mp4" : "webm"
          }(TB);
          if (BB) return `${BB.replace(/\.bloxdreplay$/i,"")}.${dB}`;
          return `bloxd-replay-${Date.now()}.${dB}`
        }(pB.fileName(), lB.format)) : yB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (KB) {
        console.error("Replay video export failed", KB), yB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: KB instanceof Error ? KB.message : "Something went wrong while exporting."
        })
      } finally {
        if (EB && "inactive" !== EB.state) try {
          EB.stop()
        } catch (KB) {
          console.error("Failed to stop MediaRecorder", KB)
        }! function() {
          const BB = iB.b.masterGain;
          if (fB && BB) {
            try {
              BB.disconnect(fB)
            } catch (KB) {
              console.error("Failed to disconnect Howler export tee", KB)
            }
            fB = null
          } else fB = null
        }();
        for (const BB of kB.getTracks()) BB.stop();
        if (vB)
          for (const BB of vB.getTracks()) BB.stop();
        null !== DB && pB.setPlaybackSpeed(DB), pB.pause(), UB(pB), pB.reopenViewer()
      }
    }
  },
  4258: (BB, TB, dB) => {
    dB.d(TB, {
      Howl: () => VB.Howl,
      b: () => VB.Howler,
      readyAudioContext: () => yB
    });
    var VB = dB(4262);

    function yB() {
      const BB = VB.Howler;
      var TB;
      (BB.volume(), BB.ctx && BB.autoUnlock) && (null === (TB = BB._unlockAudio) || void 0 === TB || TB.call(BB))
    }
    VB.Howler._mobileUnloaded = !0
  },
  41274: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      d: () => yB
    });
    const VB = ["recording", "freecam", "keyframe"];

    function yB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  41304: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      HOLD_TIMEOUT_MS: () => JB,
      ReplayViewer: () => gB
    });
    var VB = dB(35941),
      yB = dB(35959),
      pB = dB(4186),
      lB = dB(41274);
    const JB = 1e4,
      YB = new Set(["pD"]);
    class gB {
      constructor(BB) {
        var TB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (TB = BB.now) && void 0 !== TB ? TB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== pB.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Dg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? VB.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, TB) {
        var dB, yB, lB, JB;
        const {
          client: YB
        } = this.deps;
        if (!this.playback) {
          if (!YB.setPlayback(!0)) throw new Error(VB.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const gB = this.epoch;
        let oB;
        try {
          oB = await YB.open(BB)
        } finally {
          this.loadingOpens--
        }
        if (gB !== this.epoch) throw new Error(VB.d.coreStopped.text);
        if ("opening" !== oB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case pB.Wc.ModuleTrap:
                return VB.d.coreStopped;
              case pB.Wc.ModuleLoad:
                return VB.d.viewerLoadFailed;
              case pB.Wc.TooLarge:
                return VB.d.cantOpen
            }
          }(oB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(VB.d.saveClosed.text)), this.fileName = null !== (dB = null !== (yB = TB.fileName) && void 0 !== yB ? yB : null === (lB = TB.fileHandle) || void 0 === lB ? void 0 : lB.name) && void 0 !== dB ? dB : null, this.fileHandle = null !== (JB = TB.fileHandle) && void 0 !== JB ? JB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, TB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: TB
          }
        }))
      }
      play() {
        this.holds.has("pD") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("pD")
      }
      seek(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this.lastView;
        null !== dB && (TB || BB < dB.dL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, TB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== pB.hd.None && this.setCameraMode(lB.b[(lB.b.indexOf(BB.cameraMode) + 1) % lB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, TB) {
        this.edited(this.deps.client.moveKeyframe(BB, TB))
      }
      deleteKeyframes(BB, TB) {
        this.edited(this.deps.client.deleteKeyframes(BB, TB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, TB) {
        return !(TB <= BB) && (null !== this.pendingSave ? (this.deps.notify(VB.d.saveBusy), !1) : !!this.deps.client.crop(BB, TB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(VB.d.saveBusy.text)) : new Promise(((BB, TB) => {
          const dB = {
            resolve: BB,
            reject: TB
          };
          this.pendingSave = dB, this.editsAtSave = this.edits, this.deps.client.save((0, lB.d)()).then((BB => {
            this.pendingSave === dB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === dB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
          }))
        }))
      }
      saveStarted(BB) {
        switch (BB) {
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
      markSaved(BB, TB) {
        var dB, VB;
        this.fileHandle = BB, this.fileName = null !== (dB = null !== (VB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== VB ? VB : TB) && void 0 !== dB ? dB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(VB.d.coreStopped.text)), this.rejectSave(new Error(VB.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, TB, dB;
        const VB = this.deps.client.view(),
          lB = VB !== this.lastView;
        this.lastView = VB, this.opening && null !== VB && VB.state !== pB.hd.None && VB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yB.e)()), this.cropAsked ? (this.cropAsked = !1, null !== VB && VB.state === pB.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== VB && VB.state !== pB.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const gB = 0 === this.settleFrames && 0 === (null !== (BB = null === (TB = (dB = this.deps).meshPending) || void 0 === TB ? void 0 : TB.call(dB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && gB && this.release("opening"), this.holds.has("seek") && gB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && gB && this.release("crop");
        const oB = this.now();
        for (const [yB, pB] of this.holds) !YB.has(yB) && oB - pB >= JB && (this.release(yB), "opening" === yB && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), lB && this.deps.onChange()
      }
      cropped() {
        (0, yB.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case pB.Wc.TooLarge:
            break;
          case pB.Wc.Open:
          case pB.Wc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(VB.d.cantOpen), this.settleOpen(new Error(VB.d.cantOpen.text));
            break;
          case pB.Wc.Crop:
            if (BB.code === pB.Tc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(VB.d.cropFailed);
            break;
          case pB.Wc.ModuleTrap:
          case pB.Wc.ModuleLoad:
          case pB.Wc.Port:
            this.moduleEnded(BB.reason === pB.Wc.ModuleTrap ? VB.d.coreStopped : VB.d.cantOpen);
            break;
          case pB.Wc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${BB.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(BB) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(BB), this.settleOpen(new Error(BB.text))
      }
      saveDone(BB) {
        const TB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === TB || void 0 === TB || TB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? VB.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(VB.d.cropBusy.text)) : this.deps.notify(VB.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const TB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === TB || void 0 === TB || TB.resolve() : null === TB || void 0 === TB || TB.reject(BB)
      }
      rejectSave(BB) {
        const TB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === TB || void 0 === TB || TB.reject(BB)
      }
      hold(BB) {
        const TB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), TB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41299: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      MESH_TAIL_MS: () => gB,
      PLAY_START_TIMEOUT_MS: () => JB,
      startWasmReplayVideoExport: () => kB
    });
    var VB = dB(38176),
      yB = dB(41304),
      pB = dB(4186),
      lB = dB(2117);
    const JB = yB.HOLD_TIMEOUT_MS + 5e3,
      YB = 50,
      gB = 200;

    function oB(BB) {
      var TB;
      return (null === (TB = BB.view) || void 0 === TB ? void 0 : TB.state) === pB.hd.Cropping || BB.Dg.includes("crop")
    }

    function kB(BB) {
      return (0, VB.d)((() => function(BB) {
        var TB, dB, VB, yB, kB, LB;
        const OB = BB.viewer(),
          DB = null !== (TB = null === OB || void 0 === OB ? void 0 : OB.view) && void 0 !== TB ? TB : null,
          uB = BB.canvas();
        if (!OB || !DB || DB.state === pB.hd.None || 0 === DB.totalTicks || !uB || oB(OB)) return null;
        const HB = null !== (dB = BB.now) && void 0 !== dB ? dB : () => performance.now(),
          EB = OB.id,
          vB = () => {
            const TB = BB.viewer();
            return TB === OB && TB.id === EB && TB.isOpen ? TB : null
          },
          mB = Math.min(null !== (VB = null === (yB = DB.mark) || void 0 === yB ? void 0 : yB.outTick) && void 0 !== VB ? VB : 1 / 0, DB.totalTicks - 1);
        let iB = null,
          NB = !1;
        const tB = () => {
          var BB, TB;
          return (null === (BB = vB()) || void 0 === BB || null === (TB = BB.view) || void 0 === TB ? void 0 : TB.state) === pB.hd.Playing
        };
        return {
          WU: pB.ud,
          playbackMarkInTick: null !== (kB = null === (LB = DB.mark) || void 0 === LB ? void 0 : LB.inTick) && void 0 !== kB ? kB : null,
          startFailure: () => {
            const BB = vB();
            return null === BB ? "Another replay opened. Export it again from there." : oB(BB) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var BB, TB;
            return null !== (BB = null === (TB = vB()) || void 0 === TB ? void 0 : TB.fileName) && void 0 !== BB ? BB : null
          },
          playbackSpeed: () => {
            var BB, TB, dB;
            return null !== (BB = null === (TB = vB()) || void 0 === TB || null === (dB = TB.view) || void 0 === dB ? void 0 : dB.speed) && void 0 !== BB ? BB : 1
          },
          setPlaybackSpeed: BB => {
            var TB;
            null === (TB = vB()) || void 0 === TB || TB.setSpeed(BB)
          },
          play: () => {
            var BB;
            NB = !1, iB = HB(), null === (BB = vB()) || void 0 === BB || BB.play()
          },
          pause: () => {
            var BB;
            null === (BB = vB()) || void 0 === BB || BB.pause()
          },
          seekToTick: BB => {
            var TB;
            null === (TB = vB()) || void 0 === TB || TB.seek(BB, !0)
          },
          seekSettled: () => new Promise((BB => {
            const TB = setInterval((() => {
              const dB = vB();
              null === dB ? (clearInterval(TB), BB()) : dB.Dg.includes("seek") || (clearInterval(TB), setTimeout(BB, gB))
            }), YB)
          })),
          isPlaying: () => {
            var BB, TB, dB;
            return null !== iB && null !== vB() && (!!tB() || !NB && (null !== (BB = null === (TB = vB()) || void 0 === TB || null === (dB = TB.view) || void 0 === dB ? void 0 : dB.dL) && void 0 !== BB ? BB : 0) < mB && HB() - iB < JB)
          },
          watchPlayback: TB => {
            const dB = BB.watchViewer((() => {
                NB ||= null !== iB && tB(), TB()
              })),
              VB = setTimeout(TB, JB + 1);
            return () => {
              clearTimeout(VB), dB()
            }
          },
          playbackFailure: () => {
            var BB, TB;
            const dB = vB();
            return null === dB ? "The replay closed before the video finished." : (null !== (BB = null === (TB = dB.view) || void 0 === TB ? void 0 : TB.dL) && void 0 !== BB ? BB : 0) >= mB ? null : NB ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => uB,
          closeViewer: () => {
            BB.requestViewer("close")
          },
          reopenViewer: () => {
            BB.requestViewer("open")
          },
          holdInput: lB.d
        }
      }(BB)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);