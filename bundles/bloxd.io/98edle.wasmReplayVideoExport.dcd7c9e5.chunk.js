export const id = 55;
export const ids = [49, 55, 76];
export const modules = {
  35161: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      e: () => bR
    });
    var wW = MW(33);
    const CW = 1500,
      zR = 1e3,
      AW = {
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

    function bR(WW) {
      var RW;
      const MW = null !== (RW = WW.timeoutMs) && void 0 !== RW ? RW : "Error" === WW.type ? CW : zR;
      wW.k.Sz("showBottomMessage", {
        message: WW.text,
        timeoutLength: MW,
        type: WW.type
      })
    }
  },
  35169: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      f: () => CW
    });
    const wW = "data-replay-ui-active",
      CW = [{
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
  35171: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW,
      g: () => BW,
      k: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(35169);

    function AW() {
      const WW = {};
      for (const {
          group: RW
        }
        of zR.f) WW[RW] = !0;
      return WW
    }
    let bR = AW();

    function yR() {
      CW.k.Sz("replayViewer|uiVisibilityChanged")
    }

    function NW() {
      return bR
    }

    function eW(WW, RW) {
      bR[WW] !== RW && (bR = {
        ...bR,
        [WW]: RW
      }, "nametag" === WW && wW.b.set({
        areNametagsHidden: !RW
      }), yR())
    }

    function BW() {
      bR = AW(), wW.b.set({
        areNametagsHidden: !1
      }), yR()
    }
  },
  37218: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => kR
    });
    var wW = MW(1506),
      CW = MW(1166),
      zR = MW(75),
      AW = MW(897),
      bR = MW.n(AW),
      yR = MW(1255),
      NW = MW(116);
    const eW = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      BW = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function tR(WW) {
      return "webm" === WW ? eW : BW
    }

    function TW(WW) {
      for (const RW of WW)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(RW)) return RW;
      return null
    }

    function gR(WW) {
      return null !== TW(tR(WW))
    }
    var iR = MW(940);
    const YW = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function JW() {
      return gR("webm") ? "webm" : gR("mp4") ? "mp4" : "webm"
    }

    function PW(WW) {
      let {
        cards: RW
      } = WW;
      return (0, iR.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: RW.map((WW => (0, iR.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, iR.jsx)("div", {
            className: bR()("ReplayVideoExportOptionCard", {
              Selected: WW.selected,
              Disabled: WW.disabled
            }),
            onClick: () => {
              WW.disabled || WW.onSelect()
            },
            children: (0, iR.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, iR.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: WW.label
              }), (0, iR.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: WW.description
              })]
            })
          }), WW.disabled && WW.disabledReason && (0, iR.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: WW.disabledReason
          })]
        }, WW.id)))
      })
    }
    const IW = (0, zR.memo)((function(WW) {
      let {
        hasPlaybackMark: RW,
        canIncludeUi: MW,
        includeUiDisabledReason: wW,
        selectionRef: CW,
        closePopup: AW
      } = WW;
      const bR = gR("webm") || gR("mp4"),
        [eW, BW] = (0, zR.useState)(JW),
        [tR, TW] = (0, zR.useState)(MW),
        IW = bR && gR(eW);
      if (!bR) {
        const WW = (0, NW.isMobile)() ? "screen recording" : "OBS";
        return (0, iR.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, iR.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, iR.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${WW}.`
          }), (0, iR.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, iR.jsx)(yR.E, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                CW.options = null, AW()
              },
              children: "Close"
            })
          })]
        })
      }
      const oW = RW ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        lW = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !tR,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            TW(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: tR,
          disabled: !MW,
          disabledReason: wW,
          onSelect: () => {
            TW(!0)
          }
        }],
        FW = YW.map((WW => {
          const RW = gR(WW.id);
          return {
            id: WW.id,
            label: WW.label,
            description: WW.description,
            selected: eW === WW.id,
            disabled: !RW,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              BW(WW.id)
            }
          }
        }));
      return (0, iR.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, iR.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, iR.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: oW
        }), (0, iR.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, iR.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, iR.jsx)(PW, {
            cards: lW
          })]
        }), (0, iR.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, iR.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, iR.jsx)(PW, {
            cards: FW
          })]
        }), (0, iR.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, iR.jsx)(yR.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !IW,
            onClick: () => {
              CW.options = {
                format: eW,
                includeUi: MW && tR
              }, AW()
            },
            children: "Export"
          }), (0, iR.jsx)(yR.E, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              CW.options = null, AW()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var oW = MW(3835),
      lW = MW(35169),
      FW = MW(35171);
    let fW = null;

    function QW() {
      return function() {
        const WW = (0, FW.e)();
        for (const {
            group: RW,
            dataAttr: MW
          }
          of lW.f)
          if (MW && WW[RW]) return !0;
        return !1
      }() ? function() {
        var WW;
        return "function" === typeof(null === (WW = navigator.mediaDevices) || void 0 === WW ? void 0 : WW.getDisplayMedia)
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
    async function rR(WW, RW, MW) {
      return WW ? async function() {
        const WW = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const RW of WW.getAudioTracks()) RW.stop(), WW.removeTrack(RW);
        return WW
      }(): RW().captureStream(Math.max(1, Math.round(MW)))
    }
    var cR = MW(37087);
    let XW = !1;

    function jR(WW) {
      WW.holdInput(!1), (0, cR.c)(!1)
    }
    async function kR(WW) {
      var RW, MW;
      if ((0, cR.b)() || XW) return;
      const zR = WW();
      if (!zR) return;
      XW = !0;
      let AW = null;
      const bR = zR.playbackMarkInTick,
        {
          canIncludeUi: yR,
          includeUiDisabledReason: NW
        } = QW();
      try {
        AW = await async function(WW) {
          let {
            hasPlaybackMark: RW,
            canIncludeUi: MW,
            includeUiDisabledReason: wW
          } = WW;
          const zR = {
              options: null
            },
            AW = CW.NotificationProvider.showCustomPopup({
              body: WW => (0, iR.jsx)(IW, {
                hasPlaybackMark: RW,
                canIncludeUi: MW,
                includeUiDisabledReason: wW,
                selectionRef: zR,
                closePopup: WW
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await AW.getResult() ? null : zR.options
        }({
          hasPlaybackMark: null !== bR,
          canIncludeUi: yR,
          includeUiDisabledReason: NW
        })
      } finally {
        XW = !1
      }
      if (!AW) return;
      const eW = null !== (RW = null === (MW = zR.startFailure) || void 0 === MW ? void 0 : MW.call(zR)) && void 0 !== RW ? RW : null;
      if (null !== eW) return void CW.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: eW
      });
      if (! function(WW) {
          return !(0, cR.b)() && ((0, cR.c)(!0), WW.holdInput(!0), !0)
        }(zR)) return;
      let BW = null;
      try {
        BW = await rR(AW.includeUi, (() => zR.canvas()), zR.FRW)
      } catch (aR) {
        return console.error("Failed to create video stream for export", aR), jR(zR), void CW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: aR instanceof Error ? aR.message : "Could not start capture."
        })
      }
      let gR = null;
      const YW = [];
      let JW = null,
        PW = null;
      try {
        var lW, FW, kR;
        gR = zR.playbackSpeed(), zR.closeViewer(), zR.setPlaybackSpeed(1), zR.pause(), zR.seekToTick(null !== bR && void 0 !== bR ? bR : 0);
        const WW = await async function() {
          const WW = oW.d.masterGain;
          if (!oW.d.ctx || !WW) return null;
          await oW.d.ctx.resume();
          const RW = oW.d.ctx.createMediaStreamDestination();
          WW.connect(RW), fW = RW;
          const [MW] = RW.stream.getAudioTracks();
          return null !== MW && void 0 !== MW ? MW : null
        }();
        PW = new MediaStream;
        for (const wW of BW.getVideoTracks()) PW.addTrack(wW);
        WW && PW.addTrack(WW);
        const RW = function(WW) {
          const RW = TW(tR(WW));
          if (!RW) throw new Error(`No MediaRecorder mime type available for ${WW}`);
          return RW
        }(AW.format);
        JW = new MediaRecorder(PW, {
          mimeType: RW,
          videoBitsPerSecond: 8e6
        }), JW.ondataavailable = WW => {
          WW.data.size > 0 && YW.push(WW.data)
        };
        const MW = new Promise((WW => {
          JW.onstop = () => {
            WW()
          }
        }));
        await (null === (lW = zR.seekSettled) || void 0 === lW ? void 0 : lW.call(zR));
        const [yR] = BW.getVideoTracks();
        JW.start(250), zR.play();
        const NW = await
        function(WW, RW, MW) {
          return new Promise((wW => {
            let CW = !1;
            const zR = WW => {
                CW || (CW = !0, bR(), RW.removeEventListener("ended", AW), wW(WW))
              },
              AW = () => {
                zR("captureLost")
              },
              bR = WW.watchPlayback((() => {
                WW.isPlaying() || zR("completed")
              }));
            RW.addEventListener("ended", AW), MW.onerror = () => {
              zR("recorderError")
            }, "ended" !== RW.readyState ? WW.isPlaying() || zR("completed") : zR("captureLost")
          }))
        }(zR, yR, JW);
        if (zR.pause(), "inactive" !== JW.state && JW.stop(), await MW, "captureLost" === NW) return void CW.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === NW) return void CW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const eW = null !== (FW = null === (kR = zR.playbackFailure) || void 0 === kR ? void 0 : kR.call(zR)) && void 0 !== FW ? FW : null;
        if (null !== eW) return void CW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${eW} Nothing was saved.`
        });
        const iR = new Blob(YW, {
          type: RW
        });
        iR.size > 0 ? (0, wW.c)(iR, function(WW, RW) {
          const MW = function(WW) {
            return "mp4" === WW ? "mp4" : "webm"
          }(RW);
          if (WW) return `${WW.replace(/\.bloxdreplay$/i,"")}.${MW}`;
          return `bloxd-replay-${Date.now()}.${MW}`
        }(zR.fileName(), AW.format)) : CW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (aR) {
        console.error("Replay video export failed", aR), CW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: aR instanceof Error ? aR.message : "Something went wrong while exporting."
        })
      } finally {
        if (JW && "inactive" !== JW.state) try {
          JW.stop()
        } catch (aR) {
          console.error("Failed to stop MediaRecorder", aR)
        }! function() {
          const WW = oW.d.masterGain;
          if (fW && WW) {
            try {
              WW.disconnect(fW)
            } catch (aR) {
              console.error("Failed to disconnect Howler export tee", aR)
            }
            fW = null
          } else fW = null
        }();
        for (const WW of BW.getTracks()) WW.stop();
        if (PW)
          for (const WW of PW.getTracks()) WW.stop();
        null !== gR && zR.setPlaybackSpeed(gR), zR.pause(), jR(zR), zR.reopenViewer()
      }
    }
  },
  3835: (WW, RW, MW) => {
    MW.d(RW, {
      Howl: () => wW.Howl,
      d: () => wW.Howler
    });
    var wW = MW(3843);
    wW.Howler._mobileUnloaded = !0
  },
  40011: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      g: () => CW
    });
    const wW = ["recording", "freecam", "keyframe"];

    function CW() {
      const WW = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(WW[1]) << 32n | BigInt(WW[0])
    }
  },
  40051: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      HOLD_TIMEOUT_MS: () => bR,
      ReplayViewer: () => NW
    });
    var wW = MW(35161),
      CW = MW(35171),
      zR = MW(3773),
      AW = MW(40011);
    const bR = 1e4,
      yR = new Set(["ww"]);
    class NW {
      constructor(WW) {
        var RW;
        this.deps = WW, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (RW = WW.now) && void 0 !== RW ? RW : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== zR.Lc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get mM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wW.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(WW, RW) {
        var MW, CW, AW, bR;
        const {
          client: yR
        } = this.deps;
        if (!this.playback) {
          if (!yR.setPlayback(!0)) throw new Error(wW.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const NW = this.epoch;
        let eW;
        try {
          eW = await yR.open(WW)
        } finally {
          this.loadingOpens--
        }
        if (NW !== this.epoch) throw new Error(wW.d.coreStopped.text);
        if ("opening" !== eW) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const WW = function(WW) {
            switch (WW) {
              case "reloading":
                return null;
              case "stopped":
              case zR.Dc.ModuleTrap:
                return wW.d.coreStopped;
              case zR.Dc.ModuleLoad:
                return wW.d.viewerLoadFailed;
              case zR.Dc.TooLarge:
                return wW.d.cantOpen
            }
          }(eW);
          if (null === WW) return;
          throw new Error(WW.text)
        }
        return this.rejectSave(new Error(wW.d.saveClosed.text)), this.fileName = null !== (MW = null !== (CW = RW.fileName) && void 0 !== CW ? CW : null === (AW = RW.fileHandle) || void 0 === AW ? void 0 : AW.name) && void 0 !== MW ? MW : null, this.fileHandle = null !== (bR = RW.fileHandle) && void 0 !== bR ? bR : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((WW, RW) => {
          this.pendingOpen = {
            resolve: WW,
            reject: RW
          }
        }))
      }
      play() {
        this.holds.has("ww") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ww")
      }
      seek(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = this.lastView;
        null !== MW && (RW || WW < MW.WR) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(WW, RW)
      }
      setSpeed(WW) {
        this.deps.client.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.client.setCameraMode(WW)
      }
      cycleCameraMode() {
        const WW = this.lastView;
        null !== WW && WW.state !== zR.Lc.None && this.setCameraMode(AW.e[(AW.e.indexOf(WW.cameraMode) + 1) % AW.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(WW) {
        this.edited(this.deps.client.setKeyframe(WW))
      }
      moveKeyframe(WW, RW) {
        this.edited(this.deps.client.moveKeyframe(WW, RW))
      }
      deleteKeyframes(WW, RW) {
        this.edited(this.deps.client.deleteKeyframes(WW, RW))
      }
      setMark(WW) {
        this.edited(this.deps.client.setMark(WW))
      }
      crop(WW, RW) {
        return !(RW <= WW) && (null !== this.pendingSave ? (this.deps.notify(wW.d.saveBusy), !1) : !!this.deps.client.crop(WW, RW) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wW.d.saveBusy.text)) : new Promise(((WW, RW) => {
          const MW = {
            resolve: WW,
            reject: RW
          };
          this.pendingSave = MW, this.editsAtSave = this.edits, this.deps.client.save((0, AW.g)()).then((WW => {
            this.pendingSave === MW && this.saveStarted(WW)
          }), (WW => {
            this.pendingSave === MW && this.rejectSave(WW instanceof Error ? WW : new Error(String(WW)))
          }))
        }))
      }
      saveStarted(WW) {
        switch (WW) {
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
      markSaved(WW, RW) {
        var MW, wW;
        this.fileHandle = WW, this.fileName = null !== (MW = null !== (wW = null === WW || void 0 === WW ? void 0 : WW.name) && void 0 !== wW ? wW : RW) && void 0 !== MW ? MW : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wW.d.coreStopped.text)), this.rejectSave(new Error(wW.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var WW, RW, MW;
        const wW = this.deps.client.view(),
          AW = wW !== this.lastView;
        this.lastView = wW, this.opening && null !== wW && wW.state !== zR.Lc.None && wW.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, CW.g)()), this.cropAsked ? (this.cropAsked = !1, null !== wW && wW.state === zR.Lc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wW && wW.state !== zR.Lc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const NW = 0 === this.settleFrames && 0 === (null !== (WW = null === (RW = (MW = this.deps).meshPending) || void 0 === RW ? void 0 : RW.call(MW)) && void 0 !== WW ? WW : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && NW && this.release("opening"), this.holds.has("seek") && NW && this.release("seek"), this.holds.has("crop") && !this.cropRunning && NW && this.release("crop");
        const eW = this.now();
        for (const [CW, zR] of this.holds) !yR.has(CW) && eW - zR >= bR && (this.release(CW), "opening" === CW && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), AW && this.deps.onChange()
      }
      cropped() {
        (0, CW.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(WW) {
        switch (WW.reason) {
          case zR.Dc.TooLarge:
            break;
          case zR.Dc.Open:
          case zR.Dc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(wW.d.cantOpen), this.settleOpen(new Error(wW.d.cantOpen.text));
            break;
          case zR.Dc.Crop:
            if (WW.code === zR.Ac.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wW.d.cropFailed);
            break;
          case zR.Dc.ModuleTrap:
          case zR.Dc.ModuleLoad:
          case zR.Dc.Port:
            this.moduleEnded(WW.reason === zR.Dc.ModuleTrap ? wW.d.coreStopped : wW.d.cantOpen);
            break;
          case zR.Dc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${WW.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(WW) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(WW), this.settleOpen(new Error(WW.text))
      }
      saveDone(WW) {
        const RW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RW || void 0 === RW || RW.resolve(WW)
      }
      saveFailed(WW) {
        this.rejectSave(new Error(WW ? wW.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(WW) {
        WW && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wW.d.cropBusy.text)) : this.deps.notify(wW.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(WW) {
        const RW = this.pendingOpen;
        this.pendingOpen = null, null === WW ? null === RW || void 0 === RW || RW.resolve() : null === RW || void 0 === RW || RW.reject(WW)
      }
      rejectSave(WW) {
        const RW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === RW || void 0 === RW || RW.reject(WW)
      }
      hold(WW) {
        const RW = 0 === this.holds.size;
        this.holds.set(WW, this.now()), RW && this.deps.setHoldDraws(!0)
      }
      release(WW) {
        this.holds.delete(WW) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  40044: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      MESH_TAIL_MS: () => NW,
      PLAY_START_TIMEOUT_MS: () => bR,
      startWasmReplayVideoExport: () => BW
    });
    var wW = MW(37218),
      CW = MW(40051),
      zR = MW(3773),
      AW = MW(1947);
    const bR = CW.HOLD_TIMEOUT_MS + 5e3,
      yR = 50,
      NW = 200;

    function eW(WW) {
      var RW;
      return (null === (RW = WW.view) || void 0 === RW ? void 0 : RW.state) === zR.Lc.Cropping || WW.mM.includes("crop")
    }

    function BW(WW) {
      return (0, wW.c)((() => function(WW) {
        var RW, MW, wW, CW, BW, tR;
        const TW = WW.viewer(),
          gR = null !== (RW = null === TW || void 0 === TW ? void 0 : TW.view) && void 0 !== RW ? RW : null,
          iR = WW.canvas();
        if (!TW || !gR || gR.state === zR.Lc.None || 0 === gR.totalTicks || !iR || eW(TW)) return null;
        const YW = null !== (MW = WW.now) && void 0 !== MW ? MW : () => performance.now(),
          JW = TW.id,
          PW = () => {
            const RW = WW.viewer();
            return RW === TW && RW.id === JW && RW.isOpen ? RW : null
          },
          IW = Math.min(null !== (wW = null === (CW = gR.mark) || void 0 === CW ? void 0 : CW.outTick) && void 0 !== wW ? wW : 1 / 0, gR.totalTicks - 1);
        let oW = null,
          lW = !1;
        const FW = () => {
          var WW, RW;
          return (null === (WW = PW()) || void 0 === WW || null === (RW = WW.view) || void 0 === RW ? void 0 : RW.state) === zR.Lc.Playing
        };
        return {
          FRW: zR._c,
          playbackMarkInTick: null !== (BW = null === (tR = gR.mark) || void 0 === tR ? void 0 : tR.inTick) && void 0 !== BW ? BW : null,
          startFailure: () => {
            const WW = PW();
            return null === WW ? "Another replay opened. Export it again from there." : eW(WW) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var WW, RW;
            return null !== (WW = null === (RW = PW()) || void 0 === RW ? void 0 : RW.fileName) && void 0 !== WW ? WW : null
          },
          playbackSpeed: () => {
            var WW, RW, MW;
            return null !== (WW = null === (RW = PW()) || void 0 === RW || null === (MW = RW.view) || void 0 === MW ? void 0 : MW.speed) && void 0 !== WW ? WW : 1
          },
          setPlaybackSpeed: WW => {
            var RW;
            null === (RW = PW()) || void 0 === RW || RW.setSpeed(WW)
          },
          play: () => {
            var WW;
            lW = !1, oW = YW(), null === (WW = PW()) || void 0 === WW || WW.play()
          },
          pause: () => {
            var WW;
            null === (WW = PW()) || void 0 === WW || WW.pause()
          },
          seekToTick: WW => {
            var RW;
            null === (RW = PW()) || void 0 === RW || RW.seek(WW, !0)
          },
          seekSettled: () => new Promise((WW => {
            const RW = setInterval((() => {
              const MW = PW();
              null === MW ? (clearInterval(RW), WW()) : MW.mM.includes("seek") || (clearInterval(RW), setTimeout(WW, NW))
            }), yR)
          })),
          isPlaying: () => {
            var WW, RW, MW;
            return null !== oW && null !== PW() && (!!FW() || !lW && (null !== (WW = null === (RW = PW()) || void 0 === RW || null === (MW = RW.view) || void 0 === MW ? void 0 : MW.WR) && void 0 !== WW ? WW : 0) < IW && YW() - oW < bR)
          },
          watchPlayback: RW => {
            const MW = WW.watchViewer((() => {
                lW ||= null !== oW && FW(), RW()
              })),
              wW = setTimeout(RW, bR + 1);
            return () => {
              clearTimeout(wW), MW()
            }
          },
          playbackFailure: () => {
            var WW, RW;
            const MW = PW();
            return null === MW ? "The replay closed before the video finished." : (null !== (WW = null === (RW = MW.view) || void 0 === RW ? void 0 : RW.WR) && void 0 !== WW ? WW : 0) >= IW ? null : lW ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => iR,
          closeViewer: () => {
            WW.requestViewer("close")
          },
          reopenViewer: () => {
            WW.requestViewer("open")
          },
          holdInput: AW.g
        }
      }(WW)))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);