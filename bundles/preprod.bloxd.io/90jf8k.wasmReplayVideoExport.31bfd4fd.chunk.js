export const id = 55;
export const ids = [49, 55, 76];
export const modules = {
  35461: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      e: () => bW
    });
    var CF = SF(20);
    const AF = 1500,
      uF = 1e3,
      hF = {
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

    function bW(FF) {
      var WF;
      const SF = null !== (WF = FF.timeoutMs) && void 0 !== WF ? WF : "Error" === FF.type ? AF : uF;
      CF.j.Uu("showBottomMessage", {
        message: FF.text,
        timeoutLength: SF,
        type: FF.type
      })
    }
  },
  35472: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      e: () => AF
    });
    const CF = "data-replay-ui-active",
      AF = [{
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
  35478: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      g: () => iW,
      h: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(35472);

    function hF() {
      const FF = {};
      for (const {
          group: WF
        }
        of uF.e) FF[WF] = !0;
      return FF
    }
    let bW = hF();

    function dF() {
      AF.j.Uu("replayViewer|uiVisibilityChanged")
    }

    function PF() {
      return bW
    }

    function RF(FF, WF) {
      bW[FF] !== WF && (bW = {
        ...bW,
        [FF]: WF
      }, "nametag" === FF && CF.b.set({
        areNametagsHidden: !WF
      }), dF())
    }

    function iW() {
      bW = hF(), CF.b.set({
        areNametagsHidden: !1
      }), dF()
    }
  },
  37567: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => ZF
    });
    var CF = SF(1526),
      AF = SF(1189),
      uF = SF(46),
      hF = SF(918),
      bW = SF.n(hF),
      dF = SF(1266),
      PF = SF(89);
    const RF = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      iW = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function eF(FF) {
      return "webm" === FF ? RF : iW
    }

    function EF(FF) {
      for (const WF of FF)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(WF)) return WF;
      return null
    }

    function QF(FF) {
      return null !== EF(eF(FF))
    }
    var rW = SF(971);
    const gW = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function tW() {
      return QF("webm") ? "webm" : QF("mp4") ? "mp4" : "webm"
    }

    function TF(FF) {
      let {
        cards: WF
      } = FF;
      return (0, rW.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: WF.map((FF => (0, rW.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, rW.jsx)("div", {
            className: bW()("ReplayVideoExportOptionCard", {
              Selected: FF.selected,
              Disabled: FF.disabled
            }),
            onClick: () => {
              FF.disabled || FF.onSelect()
            },
            children: (0, rW.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, rW.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: FF.label
              }), (0, rW.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: FF.description
              })]
            })
          }), FF.disabled && FF.disabledReason && (0, rW.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: FF.disabledReason
          })]
        }, FF.id)))
      })
    }
    const aW = (0, uF.memo)((function(FF) {
      let {
        hasPlaybackMark: WF,
        canIncludeUi: SF,
        includeUiDisabledReason: CF,
        selectionRef: AF,
        closePopup: hF
      } = FF;
      const bW = QF("webm") || QF("mp4"),
        [RF, iW] = (0, uF.useState)(tW),
        [eF, EF] = (0, uF.useState)(SF),
        aW = bW && QF(RF);
      if (!bW) {
        const FF = (0, PF.isMobile)() ? "screen recording" : "OBS";
        return (0, rW.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, rW.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, rW.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${FF}.`
          }), (0, rW.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, rW.jsx)(dF.E, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                AF.options = null, hF()
              },
              children: "Close"
            })
          })]
        })
      }
      const kW = WF ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        qW = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !eF,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            EF(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: eF,
          disabled: !SF,
          disabledReason: CF,
          onSelect: () => {
            EF(!0)
          }
        }],
        VF = gW.map((FF => {
          const WF = QF(FF.id);
          return {
            id: FF.id,
            label: FF.label,
            description: FF.description,
            selected: RF === FF.id,
            disabled: !WF,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              iW(FF.id)
            }
          }
        }));
      return (0, rW.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, rW.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, rW.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: kW
        }), (0, rW.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, rW.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, rW.jsx)(TF, {
            cards: qW
          })]
        }), (0, rW.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, rW.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, rW.jsx)(TF, {
            cards: VF
          })]
        }), (0, rW.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, rW.jsx)(dF.k, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !aW,
            onClick: () => {
              AF.options = {
                format: RF,
                includeUi: SF && eF
              }, hF()
            },
            children: "Export"
          }), (0, rW.jsx)(dF.E, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              AF.options = null, hF()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var kW = SF(3855),
      qW = SF(35472),
      VF = SF(35478);
    let NF = null;

    function DF() {
      return function() {
        const FF = (0, VF.e)();
        for (const {
            group: WF,
            dataAttr: SF
          }
          of qW.e)
          if (SF && FF[WF]) return !0;
        return !1
      }() ? function() {
        var FF;
        return "function" === typeof(null === (FF = navigator.mediaDevices) || void 0 === FF ? void 0 : FF.getDisplayMedia)
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
    async function LF(FF, WF, SF) {
      return FF ? async function() {
        const FF = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const WF of FF.getAudioTracks()) WF.stop(), FF.removeTrack(WF);
        return FF
      }(): WF().captureStream(Math.max(1, Math.round(SF)))
    }
    var mW = SF(37454);
    let OF = !1;

    function xW(FF) {
      FF.holdInput(!1), (0, mW.e)(!1)
    }
    async function ZF(FF) {
      var WF, SF;
      if ((0, mW.c)() || OF) return;
      const uF = FF();
      if (!uF) return;
      OF = !0;
      let hF = null;
      const bW = uF.playbackMarkInTick,
        {
          canIncludeUi: dF,
          includeUiDisabledReason: PF
        } = DF();
      try {
        hF = await async function(FF) {
          let {
            hasPlaybackMark: WF,
            canIncludeUi: SF,
            includeUiDisabledReason: CF
          } = FF;
          const uF = {
              options: null
            },
            hF = AF.NotificationProvider.showCustomPopup({
              body: FF => (0, rW.jsx)(aW, {
                hasPlaybackMark: WF,
                canIncludeUi: SF,
                includeUiDisabledReason: CF,
                selectionRef: uF,
                closePopup: FF
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await hF.getResult() ? null : uF.options
        }({
          hasPlaybackMark: null !== bW,
          canIncludeUi: dF,
          includeUiDisabledReason: PF
        })
      } finally {
        OF = !1
      }
      if (!hF) return;
      const RF = null !== (WF = null === (SF = uF.startFailure) || void 0 === SF ? void 0 : SF.call(uF)) && void 0 !== WF ? WF : null;
      if (null !== RF) return void AF.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: RF
      });
      if (! function(FF) {
          return !(0, mW.c)() && ((0, mW.e)(!0), FF.holdInput(!0), !0)
        }(uF)) return;
      let iW = null;
      try {
        iW = await LF(hF.includeUi, (() => uF.canvas()), uF.LWF)
      } catch (oF) {
        return console.error("Failed to create video stream for export", oF), xW(uF), void AF.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: oF instanceof Error ? oF.message : "Could not start capture."
        })
      }
      let QF = null;
      const gW = [];
      let tW = null,
        TF = null;
      try {
        var qW, VF, ZF;
        QF = uF.playbackSpeed(), uF.closeViewer(), uF.setPlaybackSpeed(1), uF.pause(), uF.seekToTick(null !== bW && void 0 !== bW ? bW : 0);
        const FF = await async function() {
          const FF = kW.c.masterGain;
          if (!kW.c.ctx || !FF) return null;
          await kW.c.ctx.resume();
          const WF = kW.c.ctx.createMediaStreamDestination();
          FF.connect(WF), NF = WF;
          const [SF] = WF.stream.getAudioTracks();
          return null !== SF && void 0 !== SF ? SF : null
        }();
        TF = new MediaStream;
        for (const CF of iW.getVideoTracks()) TF.addTrack(CF);
        FF && TF.addTrack(FF);
        const WF = function(FF) {
          const WF = EF(eF(FF));
          if (!WF) throw new Error(`No MediaRecorder mime type available for ${FF}`);
          return WF
        }(hF.format);
        tW = new MediaRecorder(TF, {
          mimeType: WF,
          videoBitsPerSecond: 8e6
        }), tW.ondataavailable = FF => {
          FF.data.size > 0 && gW.push(FF.data)
        };
        const SF = new Promise((FF => {
          tW.onstop = () => {
            FF()
          }
        }));
        await (null === (qW = uF.seekSettled) || void 0 === qW ? void 0 : qW.call(uF));
        const [dF] = iW.getVideoTracks();
        tW.start(250), uF.play();
        const PF = await
        function(FF, WF, SF) {
          return new Promise((CF => {
            let AF = !1;
            const uF = FF => {
                AF || (AF = !0, bW(), WF.removeEventListener("ended", hF), CF(FF))
              },
              hF = () => {
                uF("captureLost")
              },
              bW = FF.watchPlayback((() => {
                FF.isPlaying() || uF("completed")
              }));
            WF.addEventListener("ended", hF), SF.onerror = () => {
              uF("recorderError")
            }, "ended" !== WF.readyState ? FF.isPlaying() || uF("completed") : uF("captureLost")
          }))
        }(uF, dF, tW);
        if (uF.pause(), "inactive" !== tW.state && tW.stop(), await SF, "captureLost" === PF) return void AF.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === PF) return void AF.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const RF = null !== (VF = null === (ZF = uF.playbackFailure) || void 0 === ZF ? void 0 : ZF.call(uF)) && void 0 !== VF ? VF : null;
        if (null !== RF) return void AF.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${RF} Nothing was saved.`
        });
        const rW = new Blob(gW, {
          type: WF
        });
        rW.size > 0 ? (0, CF.b)(rW, function(FF, WF) {
          const SF = function(FF) {
            return "mp4" === FF ? "mp4" : "webm"
          }(WF);
          if (FF) return `${FF.replace(/\.bloxdreplay$/i,"")}.${SF}`;
          return `bloxd-replay-${Date.now()}.${SF}`
        }(uF.fileName(), hF.format)) : AF.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (oF) {
        console.error("Replay video export failed", oF), AF.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: oF instanceof Error ? oF.message : "Something went wrong while exporting."
        })
      } finally {
        if (tW && "inactive" !== tW.state) try {
          tW.stop()
        } catch (oF) {
          console.error("Failed to stop MediaRecorder", oF)
        }! function() {
          const FF = kW.c.masterGain;
          if (NF && FF) {
            try {
              FF.disconnect(NF)
            } catch (oF) {
              console.error("Failed to disconnect Howler export tee", oF)
            }
            NF = null
          } else NF = null
        }();
        for (const FF of iW.getTracks()) FF.stop();
        if (TF)
          for (const FF of TF.getTracks()) FF.stop();
        null !== QF && uF.setPlaybackSpeed(QF), uF.pause(), xW(uF), uF.reopenViewer()
      }
    }
  },
  3855: (FF, WF, SF) => {
    SF.d(WF, {
      Howl: () => CF.Howl,
      c: () => CF.Howler
    });
    var CF = SF(3863);
    CF.Howler._mobileUnloaded = !0
  },
  40438: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      e: () => AF
    });
    const CF = ["recording", "freecam", "keyframe"];

    function AF() {
      const FF = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(FF[1]) << 32n | BigInt(FF[0])
    }
  },
  40473: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      HOLD_TIMEOUT_MS: () => bW,
      ReplayViewer: () => PF
    });
    var CF = SF(35461),
      AF = SF(35478),
      uF = SF(3786),
      hF = SF(40438);
    const bW = 1e4,
      dF = new Set(["CC"]);
    class PF {
      constructor(FF) {
        var WF;
        this.deps = FF, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (WF = FF.now) && void 0 !== WF ? WF : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== uF.Lc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get yS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? CF.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(FF, WF) {
        var SF, AF, hF, bW;
        const {
          client: dF
        } = this.deps;
        if (!this.playback) {
          if (!dF.setPlayback(!0)) throw new Error(CF.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const PF = this.epoch;
        let RF;
        try {
          RF = await dF.open(FF)
        } finally {
          this.loadingOpens--
        }
        if (PF !== this.epoch) throw new Error(CF.d.coreStopped.text);
        if ("opening" !== RF) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const FF = function(FF) {
            switch (FF) {
              case "reloading":
                return null;
              case "stopped":
              case uF.zc.ModuleTrap:
                return CF.d.coreStopped;
              case uF.zc.ModuleLoad:
                return CF.d.viewerLoadFailed;
              case uF.zc.TooLarge:
                return CF.d.cantOpen
            }
          }(RF);
          if (null === FF) return;
          throw new Error(FF.text)
        }
        return this.rejectSave(new Error(CF.d.saveClosed.text)), this.fileName = null !== (SF = null !== (AF = WF.fileName) && void 0 !== AF ? AF : null === (hF = WF.fileHandle) || void 0 === hF ? void 0 : hF.name) && void 0 !== SF ? SF : null, this.fileHandle = null !== (bW = WF.fileHandle) && void 0 !== bW ? bW : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((FF, WF) => {
          this.pendingOpen = {
            resolve: FF,
            reject: WF
          }
        }))
      }
      play() {
        this.holds.has("CC") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("CC")
      }
      seek(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this.lastView;
        null !== SF && (WF || FF < SF.lF) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(FF, WF)
      }
      setSpeed(FF) {
        this.deps.client.setSpeed(FF)
      }
      setCameraMode(FF) {
        this.deps.client.setCameraMode(FF)
      }
      cycleCameraMode() {
        const FF = this.lastView;
        null !== FF && FF.state !== uF.Lc.None && this.setCameraMode(hF.c[(hF.c.indexOf(FF.cameraMode) + 1) % hF.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(FF) {
        this.edited(this.deps.client.setKeyframe(FF))
      }
      moveKeyframe(FF, WF) {
        this.edited(this.deps.client.moveKeyframe(FF, WF))
      }
      deleteKeyframes(FF, WF) {
        this.edited(this.deps.client.deleteKeyframes(FF, WF))
      }
      setMark(FF) {
        this.edited(this.deps.client.setMark(FF))
      }
      crop(FF, WF) {
        return !(WF <= FF) && (null !== this.pendingSave ? (this.deps.notify(CF.d.saveBusy), !1) : !!this.deps.client.crop(FF, WF) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(CF.d.saveBusy.text)) : new Promise(((FF, WF) => {
          const SF = {
            resolve: FF,
            reject: WF
          };
          this.pendingSave = SF, this.editsAtSave = this.edits, this.deps.client.save((0, hF.e)()).then((FF => {
            this.pendingSave === SF && this.saveStarted(FF)
          }), (FF => {
            this.pendingSave === SF && this.rejectSave(FF instanceof Error ? FF : new Error(String(FF)))
          }))
        }))
      }
      saveStarted(FF) {
        switch (FF) {
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
      markSaved(FF, WF) {
        var SF, CF;
        this.fileHandle = FF, this.fileName = null !== (SF = null !== (CF = null === FF || void 0 === FF ? void 0 : FF.name) && void 0 !== CF ? CF : WF) && void 0 !== SF ? SF : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(CF.d.coreStopped.text)), this.rejectSave(new Error(CF.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var FF, WF, SF;
        const CF = this.deps.client.view(),
          hF = CF !== this.lastView;
        this.lastView = CF, this.opening && null !== CF && CF.state !== uF.Lc.None && CF.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AF.g)()), this.cropAsked ? (this.cropAsked = !1, null !== CF && CF.state === uF.Lc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== CF && CF.state !== uF.Lc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const PF = 0 === this.settleFrames && 0 === (null !== (FF = null === (WF = (SF = this.deps).meshPending) || void 0 === WF ? void 0 : WF.call(SF)) && void 0 !== FF ? FF : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && PF && this.release("opening"), this.holds.has("seek") && PF && this.release("seek"), this.holds.has("crop") && !this.cropRunning && PF && this.release("crop");
        const RF = this.now();
        for (const [AF, uF] of this.holds) !dF.has(AF) && RF - uF >= bW && (this.release(AF), "opening" === AF && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), hF && this.deps.onChange()
      }
      cropped() {
        (0, AF.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(FF) {
        switch (FF.reason) {
          case uF.zc.TooLarge:
            break;
          case uF.zc.Open:
          case uF.zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(CF.d.cantOpen), this.settleOpen(new Error(CF.d.cantOpen.text));
            break;
          case uF.zc.Crop:
            if (FF.code === uF.vc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(CF.d.cropFailed);
            break;
          case uF.zc.ModuleTrap:
          case uF.zc.ModuleLoad:
          case uF.zc.Port:
            this.moduleEnded(FF.reason === uF.zc.ModuleTrap ? CF.d.coreStopped : CF.d.cantOpen);
            break;
          case uF.zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${FF.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(FF) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(FF), this.settleOpen(new Error(FF.text))
      }
      saveDone(FF) {
        const WF = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WF || void 0 === WF || WF.resolve(FF)
      }
      saveFailed(FF) {
        this.rejectSave(new Error(FF ? CF.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(FF) {
        FF && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(CF.d.cropBusy.text)) : this.deps.notify(CF.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(FF) {
        const WF = this.pendingOpen;
        this.pendingOpen = null, null === FF ? null === WF || void 0 === WF || WF.resolve() : null === WF || void 0 === WF || WF.reject(FF)
      }
      rejectSave(FF) {
        const WF = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === WF || void 0 === WF || WF.reject(FF)
      }
      hold(FF) {
        const WF = 0 === this.holds.size;
        this.holds.set(FF, this.now()), WF && this.deps.setHoldDraws(!0)
      }
      release(FF) {
        this.holds.delete(FF) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  40465: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      MESH_TAIL_MS: () => PF,
      PLAY_START_TIMEOUT_MS: () => bW,
      startWasmReplayVideoExport: () => iW
    });
    var CF = SF(37567),
      AF = SF(40473),
      uF = SF(3786),
      hF = SF(1949);
    const bW = AF.HOLD_TIMEOUT_MS + 5e3,
      dF = 50,
      PF = 200;

    function RF(FF) {
      var WF;
      return (null === (WF = FF.view) || void 0 === WF ? void 0 : WF.state) === uF.Lc.Cropping || FF.yS.includes("crop")
    }

    function iW(FF) {
      return (0, CF.b)((() => function(FF) {
        var WF, SF, CF, AF, iW, eF;
        const EF = FF.viewer(),
          QF = null !== (WF = null === EF || void 0 === EF ? void 0 : EF.view) && void 0 !== WF ? WF : null,
          rW = FF.canvas();
        if (!EF || !QF || QF.state === uF.Lc.None || 0 === QF.totalTicks || !rW || RF(EF)) return null;
        const gW = null !== (SF = FF.now) && void 0 !== SF ? SF : () => performance.now(),
          tW = EF.id,
          TF = () => {
            const WF = FF.viewer();
            return WF === EF && WF.id === tW && WF.isOpen ? WF : null
          },
          aW = Math.min(null !== (CF = null === (AF = QF.mark) || void 0 === AF ? void 0 : AF.outTick) && void 0 !== CF ? CF : 1 / 0, QF.totalTicks - 1);
        let kW = null,
          qW = !1;
        const VF = () => {
          var FF, WF;
          return (null === (FF = TF()) || void 0 === FF || null === (WF = FF.view) || void 0 === WF ? void 0 : WF.state) === uF.Lc.Playing
        };
        return {
          LWF: uF.Xc,
          playbackMarkInTick: null !== (iW = null === (eF = QF.mark) || void 0 === eF ? void 0 : eF.inTick) && void 0 !== iW ? iW : null,
          startFailure: () => {
            const FF = TF();
            return null === FF ? "Another replay opened. Export it again from there." : RF(FF) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var FF, WF;
            return null !== (FF = null === (WF = TF()) || void 0 === WF ? void 0 : WF.fileName) && void 0 !== FF ? FF : null
          },
          playbackSpeed: () => {
            var FF, WF, SF;
            return null !== (FF = null === (WF = TF()) || void 0 === WF || null === (SF = WF.view) || void 0 === SF ? void 0 : SF.speed) && void 0 !== FF ? FF : 1
          },
          setPlaybackSpeed: FF => {
            var WF;
            null === (WF = TF()) || void 0 === WF || WF.setSpeed(FF)
          },
          play: () => {
            var FF;
            qW = !1, kW = gW(), null === (FF = TF()) || void 0 === FF || FF.play()
          },
          pause: () => {
            var FF;
            null === (FF = TF()) || void 0 === FF || FF.pause()
          },
          seekToTick: FF => {
            var WF;
            null === (WF = TF()) || void 0 === WF || WF.seek(FF, !0)
          },
          seekSettled: () => new Promise((FF => {
            const WF = setInterval((() => {
              const SF = TF();
              null === SF ? (clearInterval(WF), FF()) : SF.yS.includes("seek") || (clearInterval(WF), setTimeout(FF, PF))
            }), dF)
          })),
          isPlaying: () => {
            var FF, WF, SF;
            return null !== kW && null !== TF() && (!!VF() || !qW && (null !== (FF = null === (WF = TF()) || void 0 === WF || null === (SF = WF.view) || void 0 === SF ? void 0 : SF.lF) && void 0 !== FF ? FF : 0) < aW && gW() - kW < bW)
          },
          watchPlayback: WF => {
            const SF = FF.watchViewer((() => {
                qW ||= null !== kW && VF(), WF()
              })),
              CF = setTimeout(WF, bW + 1);
            return () => {
              clearTimeout(CF), SF()
            }
          },
          playbackFailure: () => {
            var FF, WF;
            const SF = TF();
            return null === SF ? "The replay closed before the video finished." : (null !== (FF = null === (WF = SF.view) || void 0 === WF ? void 0 : WF.lF) && void 0 !== FF ? FF : 0) >= aW ? null : qW ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => rW,
          closeViewer: () => {
            FF.requestViewer("close")
          },
          reopenViewer: () => {
            FF.requestViewer("open")
          },
          holdInput: hF.e
        }
      }(FF)))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);