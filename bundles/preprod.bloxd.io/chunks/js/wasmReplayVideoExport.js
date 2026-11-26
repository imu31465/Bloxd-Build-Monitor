export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  37853: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => GH
    });
    var AH = LH(619),
      rH = LH(30),
      SH = LH(37809);
    const hH = "replayFileKeptForReload",
      tH = "replayFileKeptForReloadAt",
      zH = "replayFileKeptForReloadTab",
      CH = 3e5,
      EH = 5e3;
    async function XH(HH, BH) {
      const LH = Date.now(),
        SH = {
          at: LH,
          bytes: HH,
          source: BH
        },
        CH = await Promise.race([(async () => await rH.c.setItem(tH, LH) && rH.c.setItem(hH, SH))(), (0, AH.Q)(EH).then((() => !1))]);
      CH || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const XH = {
        at: LH,
        hX: CH
      };
      rH.f.setItem(zH, XH)
    }
    async function GH() {
      var HH;
      const BH = rH.f.getItem(zH);
      null !== BH && rH.f.removeItem(zH);
      const LH = Date.now(),
        AH = await rH.c.getItem(tH),
        EH = null !== BH && LH - BH.at <= CH,
        XH = null !== BH && AH === BH.at;
      let GH = null;
      if (null !== AH && (XH || ("number" !== typeof AH || LH - AH > CH)) && (GH = EH && XH && BH.hX ? await rH.c.getItem(hH) : null, await Promise.all([rH.c.removeItem(tH), rH.c.removeItem(hH)])), !EH) return null;
      if ((null === (HH = GH) || void 0 === HH ? void 0 : HH.at) !== BH.at) throw new Error(SH.e.replayNotKept.text);
      return {
        bytes: GH.bytes,
        source: GH.source
      }
    }
  },
  37844: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH,
      i: () => SH,
      m: () => rH
    });
    const AH = [9];

    function rH(HH) {
      return AH.includes(HH)
    }

    function SH(HH) {
      return null !== HH && HH >= 3 && HH < AH[0]
    }
  },
  37809: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      i: () => CH,
      j: () => zH
    });
    var AH = LH(18);
    const rH = 1500,
      SH = 1e3,
      hH = {
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
      tH = new Set(Object.values(hH).filter((HH => "Error" === HH.type)).map((HH => HH.text)));

    function zH(HH) {
      return HH instanceof Error && tH.has(HH.message) ? HH.message : void 0
    }

    function CH(HH) {
      var BH;
      const LH = null !== (BH = HH.timeoutMs) && void 0 !== BH ? BH : "Error" === HH.type ? rH : SH;
      AH.k.AX("showBottomMessage", {
        message: HH.text,
        timeoutLength: LH,
        type: HH.type
      })
    }
  },
  37864: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      f: () => rH
    });
    const AH = "data-replay-ui-active",
      rH = [{
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
  37869: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => XH,
      i: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(37864);

    function hH() {
      const HH = {};
      for (const {
          group: BH
        }
        of SH.f) HH[BH] = !0;
      return HH
    }
    let tH = hH();

    function zH() {
      rH.k.AX("replayViewer|uiVisibilityChanged")
    }

    function CH() {
      return tH
    }

    function EH(HH, BH) {
      tH[HH] !== BH && (tH = {
        ...tH,
        [HH]: BH
      }, "nametag" === HH && AH.c.set({
        areNametagsHidden: !BH
      }), zH())
    }

    function XH() {
      tH = hH(), AH.c.set({
        areNametagsHidden: !1
      }), zH()
    }
  },
  40224: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => IH
    });
    var AH = LH(1807),
      rH = LH(1352),
      SH = LH(45),
      hH = LH(1038),
      tH = LH.n(hH),
      zH = LH(1455),
      CH = LH(81);
    const EH = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      XH = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function GH(HH) {
      return "webm" === HH ? EH : XH
    }

    function YH(HH) {
      for (const BH of HH)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(BH)) return BH;
      return null
    }

    function uH(HH) {
      return null !== YH(GH(HH))
    }
    var QH = LH(1225);
    const WH = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function MH() {
      return uH("webm") ? "webm" : uH("mp4") ? "mp4" : "webm"
    }

    function xH(HH) {
      let {
        cards: BH
      } = HH;
      return (0, QH.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: BH.map((HH => (0, QH.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, QH.jsx)("div", {
            className: tH()("ReplayVideoExportOptionCard", {
              Selected: HH.selected,
              Disabled: HH.disabled
            }),
            onClick: () => {
              HH.disabled || HH.onSelect()
            },
            children: (0, QH.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, QH.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: HH.label
              }), (0, QH.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: HH.description
              })]
            })
          }), HH.disabled && HH.disabledReason && (0, QH.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: HH.disabledReason
          })]
        }, HH.id)))
      })
    }
    const vH = (0, SH.memo)((function(HH) {
      let {
        hasPlaybackMark: BH,
        canIncludeUi: LH,
        includeUiDisabledReason: AH,
        selectionRef: rH,
        closePopup: hH
      } = HH;
      const tH = uH("webm") || uH("mp4"),
        [EH, XH] = (0, SH.useState)(MH),
        [GH, YH] = (0, SH.useState)(LH),
        vH = tH && uH(EH);
      if (!tH) {
        const HH = (0, CH.isMobile)() ? "screen recording" : "OBS";
        return (0, QH.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, QH.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, QH.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${HH}.`
          }), (0, QH.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, QH.jsx)(zH.O, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                rH.options = null, hH()
              },
              children: "Close"
            })
          })]
        })
      }
      const PH = BH ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        TH = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !GH,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            YH(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: GH,
          disabled: !LH,
          disabledReason: AH,
          onSelect: () => {
            YH(!0)
          }
        }],
        UH = WH.map((HH => {
          const BH = uH(HH.id);
          return {
            id: HH.id,
            label: HH.label,
            description: HH.description,
            selected: EH === HH.id,
            disabled: !BH,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              XH(HH.id)
            }
          }
        }));
      return (0, QH.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, QH.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, QH.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: PH
        }), (0, QH.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, QH.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, QH.jsx)(xH, {
            cards: TH
          })]
        }), (0, QH.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, QH.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, QH.jsx)(xH, {
            cards: UH
          })]
        }), (0, QH.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, QH.jsx)(zH.u, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !vH,
            onClick: () => {
              rH.options = {
                format: EH,
                includeUi: LH && GH
              }, hH()
            },
            children: "Export"
          }), (0, QH.jsx)(zH.O, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              rH.options = null, hH()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var PH = LH(5335),
      TH = LH(37864),
      UH = LH(37869);
    let VH = null;

    function OH() {
      return function() {
        const HH = (0, UH.d)();
        for (const {
            group: BH,
            dataAttr: LH
          }
          of TH.f)
          if (LH && HH[BH]) return !0;
        return !1
      }() ? function() {
        var HH;
        return "function" === typeof(null === (HH = navigator.mediaDevices) || void 0 === HH ? void 0 : HH.getDisplayMedia)
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
    async function bH(HH, BH, LH) {
      return HH ? async function() {
        const HH = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const BH of HH.getAudioTracks()) BH.stop(), HH.removeTrack(BH);
        return HH
      }(): BH().captureStream(Math.max(1, Math.round(LH)))
    }
    var kH = LH(40018);
    let mH = !1;

    function oH(HH) {
      HH.holdInput(!1), (0, kH.h)(!1)
    }
    async function IH(HH) {
      var BH, LH;
      if ((0, kH.e)() || mH) return;
      const SH = HH();
      if (!SH) return;
      mH = !0;
      let hH = null;
      const tH = SH.playbackMarkInTick,
        {
          canIncludeUi: zH,
          includeUiDisabledReason: CH
        } = OH();
      try {
        hH = await async function(HH) {
          let {
            hasPlaybackMark: BH,
            canIncludeUi: LH,
            includeUiDisabledReason: AH
          } = HH;
          const SH = {
              options: null
            },
            hH = rH.NotificationProvider.showCustomPopup({
              body: HH => (0, QH.jsx)(vH, {
                hasPlaybackMark: BH,
                canIncludeUi: LH,
                includeUiDisabledReason: AH,
                selectionRef: SH,
                closePopup: HH
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await hH.getResult() ? null : SH.options
        }({
          hasPlaybackMark: null !== tH,
          canIncludeUi: zH,
          includeUiDisabledReason: CH
        })
      } finally {
        mH = !1
      }
      if (!hH) return;
      const EH = null !== (BH = null === (LH = SH.startFailure) || void 0 === LH ? void 0 : LH.call(SH)) && void 0 !== BH ? BH : null;
      if (null !== EH) return void rH.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: EH
      });
      if (! function(HH) {
          return !(0, kH.e)() && ((0, kH.h)(!0), HH.holdInput(!0), !0)
        }(SH)) return;
      let XH = null;
      try {
        XH = await bH(hH.includeUi, (() => SH.canvas()), SH.oN)
      } catch (fH) {
        return console.error("Failed to create video stream for export", fH), oH(SH), void rH.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: fH instanceof Error ? fH.message : "Could not start capture."
        })
      }
      let uH = null;
      const WH = [];
      let MH = null,
        xH = null;
      try {
        var TH, UH, IH;
        uH = SH.playbackSpeed(), SH.closeViewer(), SH.setPlaybackSpeed(1), SH.pause(), SH.seekToTick(null !== tH && void 0 !== tH ? tH : 0);
        const HH = await async function() {
          const HH = PH.Howler.masterGain;
          if (!PH.Howler.ctx || !HH) return null;
          await PH.Howler.ctx.resume();
          const BH = PH.Howler.ctx.createMediaStreamDestination();
          HH.connect(BH), VH = BH;
          const [LH] = BH.stream.getAudioTracks();
          return null !== LH && void 0 !== LH ? LH : null
        }();
        xH = new MediaStream;
        for (const AH of XH.getVideoTracks()) xH.addTrack(AH);
        HH && xH.addTrack(HH);
        const BH = function(HH) {
          const BH = YH(GH(HH));
          if (!BH) throw new Error(`No MediaRecorder mime type available for ${HH}`);
          return BH
        }(hH.format);
        MH = new MediaRecorder(xH, {
          mimeType: BH,
          videoBitsPerSecond: 8e6
        }), MH.ondataavailable = HH => {
          HH.data.size > 0 && WH.push(HH.data)
        };
        const LH = new Promise((HH => {
          MH.onstop = () => {
            HH()
          }
        }));
        await (null === (TH = SH.seekSettled) || void 0 === TH ? void 0 : TH.call(SH));
        const [zH] = XH.getVideoTracks();
        MH.start(250), SH.play();
        const CH = await
        function(HH, BH, LH) {
          return new Promise((AH => {
            let rH = !1;
            const SH = HH => {
                rH || (rH = !0, tH(), BH.removeEventListener("ended", hH), AH(HH))
              },
              hH = () => {
                SH("captureLost")
              },
              tH = HH.watchPlayback((() => {
                HH.isPlaying() || SH("completed")
              }));
            BH.addEventListener("ended", hH), LH.onerror = () => {
              SH("recorderError")
            }, "ended" !== BH.readyState ? HH.isPlaying() || SH("completed") : SH("captureLost")
          }))
        }(SH, zH, MH);
        if (SH.pause(), "inactive" !== MH.state && MH.stop(), await LH, "captureLost" === CH) return void rH.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === CH) return void rH.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const EH = null !== (UH = null === (IH = SH.playbackFailure) || void 0 === IH ? void 0 : IH.call(SH)) && void 0 !== UH ? UH : null;
        if (null !== EH) return void rH.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${EH} Nothing was saved.`
        });
        const QH = new Blob(WH, {
          type: BH
        });
        QH.size > 0 ? (0, AH.e)(QH, function(HH, BH) {
          const LH = function(HH) {
            return "mp4" === HH ? "mp4" : "webm"
          }(BH);
          if (HH) return `${HH.replace(/\.bloxdreplay$/i,"")}.${LH}`;
          return `bloxd-replay-${Date.now()}.${LH}`
        }(SH.fileName(), hH.format)) : rH.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (fH) {
        console.error("Replay video export failed", fH), rH.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: fH instanceof Error ? fH.message : "Something went wrong while exporting."
        })
      } finally {
        if (MH && "inactive" !== MH.state) try {
          MH.stop()
        } catch (fH) {
          console.error("Failed to stop MediaRecorder", fH)
        }! function() {
          const HH = PH.Howler.masterGain;
          if (VH && HH) {
            try {
              HH.disconnect(VH)
            } catch (fH) {
              console.error("Failed to disconnect Howler export tee", fH)
            }
            VH = null
          } else VH = null
        }();
        for (const HH of XH.getTracks()) HH.stop();
        if (xH)
          for (const HH of xH.getTracks()) HH.stop();
        null !== uH && SH.setPlaybackSpeed(uH), SH.pause(), oH(SH), SH.reopenViewer()
      }
    }
  },
  5335: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Howl: () => rH.Howl,
      Howler: () => rH.Howler,
      musicOutput: () => WH,
      readyAudioContext: () => MH
    });
    var AH, rH = LH(5343),
      SH = LH(3811),
      hH = LH(5067);
    const tH = rH.Howler;

    function zH() {
      var HH, BH;
      if (tH.ctx || !tH.usingWebAudio || "undefined" === typeof AudioContext || !(0, hH.i)()) return;
      const LH = navigator.audioSession;
      let AH;
      "auto" === (null === LH || void 0 === LH ? void 0 : LH.type) && (LH.type = "ambient");
      try {
        AH = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const rH = AH.createGain();
      rH.gain.setValueAtTime(tH._muted ? 0 : null !== (HH = tH._volume) && void 0 !== HH ? HH : 1, AH.currentTime), rH.connect(AH.destination), tH.ctx = AH, tH.masterGain = rH, null === (BH = tH._setup) || void 0 === BH || BH.call(tH)
    }
    tH._mobileUnloaded = !0;
    const CH = tH.volume.bind(rH.Howler);
    tH.volume = function() {
      return zH(), CH(...arguments)
    };
    const EH = tH.mute.bind(rH.Howler);
    tH.mute = HH => (zH(), EH(HH));
    const XH = rH.Howl.prototype,
      GH = XH.init;

    function YH() {
      for (; tH._html5AudioPool.length < tH.html5PoolSize;) {
        const HH = new Audio;
        HH._unlocked = !0, tH._releaseHtml5Audio(HH)
      }
      for (const BH of tH._howls)
        if (!BH._webAudio)
          for (const LH of BH._getSoundIds()) {
            var HH;
            const AH = null === (HH = BH._soundById(LH)) || void 0 === HH ? void 0 : HH._node;
            AH && !AH._unlocked && (AH._unlocked = !0, AH.load())
          }
    }
    XH.init = function(HH) {
      return zH(), GH.call(this, HH)
    }, (0, hH.i)() && (tH._unlockAudio = () => {
      const HH = tH.ctx;
      if (tH._audioUnlocked || !HH) return;
      tH.autoUnlock = !1;
      const BH = HH.createBuffer(1, 1, 22050);
      tH._scratchBuffer = BH;
      const LH = new AbortController;
      let AH = "afterPaint";
      const rH = () => {
          var AH;
          if (tH._audioUnlocked) return;
          null === (AH = tH._autoResume) || void 0 === AH || AH.call(tH);
          const rH = HH.createBufferSource();
          rH.buffer = BH, rH.connect(HH.destination), rH.start(0), HH.resume().catch((() => {})), rH.onended = () => {
            rH.disconnect(0), tH._audioUnlocked = !0, LH.abort();
            for (const HH of tH._howls) HH._emit("unlock")
          }
        },
        zH = () => {
          YH(), rH()
        },
        CH = BH => {
          if (YH(), "inTap" === AH) {
            if ("running" === HH.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), rH()
          } else "afterPaint" === AH && (AH = "queued", (0, SH.c)(BH.timeStamp, (() => {
            AH = "inTap", rH()
          })))
        };
      for (const SH of ["touchstart", "touchend"]) document.addEventListener(SH, zH, {
        capture: !0,
        signal: LH.signal
      });
      for (const SH of hH.d) document.addEventListener(SH, CH, {
        capture: !0,
        signal: LH.signal
      })
    });
    let uH = 0;
    const QH = null === (AH = tH._autoSuspend) || void 0 === AH ? void 0 : AH.bind(rH.Howler);

    function WH() {
      MH();
      const {
        ctx: HH,
        masterGain: BH
      } = tH;
      return HH && BH ? {
        ctx: HH,
        destination: BH,
        holdAwake: HH => {
          var BH, LH;
          (uH += HH ? 1 : -1, HH) ? null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH): null === (LH = tH._autoSuspend) || void 0 === LH || LH.call(tH)
        },
        wake: () => {
          var BH;
          "running" !== HH.state && (null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH), HH.resume().catch((() => {})))
        }
      } : null
    }

    function MH() {
      var HH;
      (tH.volume(), tH.ctx && tH.autoUnlock) && (null === (HH = tH._unlockAudio) || void 0 === HH || HH.call(tH))
    }
    QH && (tH._autoSuspend = () => uH > 0 ? rH.Howler : QH())
  },
  54466: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => rH
    });
    const AH = ["recording", "freecam", "keyframe"];

    function rH() {
      const HH = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(HH[1]) << 32n | BigInt(HH[0])
    }
  },
  64081: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      HOLD_TIMEOUT_MS: () => CH,
      ReplayViewer: () => XH
    });
    var AH = LH(37809),
      rH = LH(37853),
      SH = LH(37844),
      hH = LH(37869),
      tH = LH(5265),
      zH = LH(54466);
    const CH = 1e4,
      EH = new Set(["Cu"]);
    class XH {
      constructor(HH) {
        var BH;
        this.deps = HH, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (BH = HH.now) && void 0 !== BH ? BH : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== tH.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get LX() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? AH.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(HH, BH) {
        var LH, SH, hH, zH;
        const {
          client: CH
        } = this.deps;
        if (!this.playback) {
          if (!CH.setPlayback(!0)) throw new Error(AH.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const EH = this.epoch;
        let XH;
        try {
          XH = await CH.open(HH, (() => (0, rH.e)(HH, BH)))
        } finally {
          this.loadingOpens--
        }
        if (EH !== this.epoch && "reloading" !== XH) throw new Error(AH.e.coreStopped.text);
        if ("opening" !== XH) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const HH = function(HH) {
            switch (HH) {
              case "reloading":
                return null;
              case "stopped":
              case tH.$c.ModuleTrap:
                return AH.e.coreStopped;
              case tH.$c.ModuleLoad:
                return AH.e.viewerLoadFailed;
              case tH.$c.TooLarge:
                return AH.e.cantOpen
            }
          }(XH);
          if (null === HH) return;
          throw new Error(HH.text)
        }
        return this.rejectSave(new Error(AH.e.saveClosed.text)), this.fileName = null !== (LH = null !== (SH = BH.fileName) && void 0 !== SH ? SH : null === (hH = BH.fileHandle) || void 0 === hH ? void 0 : hH.name) && void 0 !== LH ? LH : null, this.fileHandle = null !== (zH = BH.fileHandle) && void 0 !== zH ? zH : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((HH, BH) => {
          this.pendingOpen = {
            resolve: HH,
            reject: BH
          }
        }))
      }
      play() {
        this.holds.has("Cu") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Cu")
      }
      seek(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this.lastView;
        null !== LH && (BH || HH < LH.IX) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(HH, BH)
      }
      setSpeed(HH) {
        this.deps.client.setSpeed(HH)
      }
      setCameraMode(HH) {
        this.deps.client.setCameraMode(HH)
      }
      cycleCameraMode() {
        const HH = this.lastView;
        null !== HH && HH.state !== tH.hd.None && this.setCameraMode(zH.b[(zH.b.indexOf(HH.cameraMode) + 1) % zH.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(HH) {
        this.edited(this.deps.client.setKeyframe(HH))
      }
      moveKeyframe(HH, BH) {
        this.edited(this.deps.client.moveKeyframe(HH, BH))
      }
      deleteKeyframes(HH, BH) {
        this.edited(this.deps.client.deleteKeyframes(HH, BH))
      }
      setMark(HH) {
        this.edited(this.deps.client.setMark(HH))
      }
      crop(HH, BH) {
        return !(BH <= HH) && (null !== this.pendingSave ? (this.deps.notify(AH.e.saveBusy), !1) : !!this.deps.client.crop(HH, BH) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(AH.e.saveBusy.text)) : new Promise(((HH, BH) => {
          const LH = {
            resolve: HH,
            reject: BH
          };
          this.pendingSave = LH, this.editsAtSave = this.edits, this.deps.client.save((0, zH.d)()).then((HH => {
            this.pendingSave === LH && this.saveStarted(HH)
          }), (HH => {
            this.pendingSave === LH && this.rejectSave(HH instanceof Error ? HH : new Error(String(HH)))
          }))
        }))
      }
      saveStarted(HH) {
        switch (HH) {
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
      markSaved(HH, BH) {
        var LH, AH;
        this.fileHandle = HH, this.fileName = null !== (LH = null !== (AH = null === HH || void 0 === HH ? void 0 : HH.name) && void 0 !== AH ? AH : BH) && void 0 !== LH ? LH : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(AH.e.coreStopped.text)), this.rejectSave(new Error(AH.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var HH, BH, LH;
        const AH = this.deps.client.view(),
          rH = AH !== this.lastView;
        this.lastView = AH, this.opening && null !== AH && AH.state !== tH.hd.None && AH.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, hH.f)()), this.cropAsked ? (this.cropAsked = !1, null !== AH && AH.state === tH.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== AH && AH.state !== tH.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const SH = 0 === this.settleFrames && 0 === (null !== (HH = null === (BH = (LH = this.deps).meshPending) || void 0 === BH ? void 0 : BH.call(LH)) && void 0 !== HH ? HH : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && SH && this.release("opening"), this.holds.has("seek") && SH && this.release("seek"), this.holds.has("crop") && !this.cropRunning && SH && this.release("crop");
        const zH = this.now();
        for (const [hH, tH] of this.holds) !EH.has(hH) && zH - tH >= CH && this.release(hH);
        this.saveRefused && !this.cropping && this.saveFailed(!1), rH && this.deps.onChange()
      }
      cropped() {
        (0, hH.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(HH) {
        switch (HH.reason) {
          case tH.$c.TooLarge:
            break;
          case tH.$c.Open:
          case tH.$c.NothingStaged: {
            this.opening = !1, this.release("opening");
            const BH = (0, SH.i)(HH.version) ? AH.e.replayTooOld : AH.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(BH), this.settleOpen(new Error(BH.text));
            break
          }
          case tH.$c.Crop:
            if (HH.code === tH.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(AH.e.cropFailed);
            break;
          case tH.$c.ModuleTrap:
          case tH.$c.ModuleLoad:
          case tH.$c.Port:
            this.moduleEnded(HH.reason === tH.$c.ModuleTrap ? AH.e.coreStopped : AH.e.cantOpen);
            break;
          case tH.$c.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${HH.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(HH) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(HH), this.settleOpen(new Error(HH.text))
      }
      saveDone(HH) {
        const BH = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === BH || void 0 === BH || BH.resolve(HH)
      }
      saveFailed(HH) {
        this.rejectSave(new Error(HH ? AH.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(HH) {
        HH && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(AH.e.cropBusy.text)) : this.deps.notify(AH.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(HH) {
        const BH = this.pendingOpen;
        this.pendingOpen = null, null === HH ? null === BH || void 0 === BH || BH.resolve() : null === BH || void 0 === BH || BH.reject(HH)
      }
      rejectSave(HH) {
        const BH = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === BH || void 0 === BH || BH.reject(HH)
      }
      hold(HH) {
        const BH = 0 === this.holds.size;
        this.holds.set(HH, this.now()), BH && this.deps.setHoldDraws(!0)
      }
      release(HH) {
        this.holds.delete(HH) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64074: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      MESH_TAIL_MS: () => CH,
      PLAY_START_TIMEOUT_MS: () => tH,
      startWasmReplayVideoExport: () => XH
    });
    var AH = LH(40224),
      rH = LH(64081),
      SH = LH(5265),
      hH = LH(2611);
    const tH = rH.HOLD_TIMEOUT_MS + 5e3,
      zH = 50,
      CH = 200;

    function EH(HH) {
      var BH;
      return (null === (BH = HH.view) || void 0 === BH ? void 0 : BH.state) === SH.hd.Cropping || HH.LX.includes("crop")
    }

    function XH(HH) {
      return (0, AH.d)((() => function(HH) {
        var BH, LH, AH, rH, XH, GH;
        const YH = HH.viewer(),
          uH = null !== (BH = null === YH || void 0 === YH ? void 0 : YH.view) && void 0 !== BH ? BH : null,
          QH = HH.canvas();
        if (!YH || !uH || uH.state === SH.hd.None || 0 === uH.totalTicks || !QH || EH(YH)) return null;
        const WH = null !== (LH = HH.now) && void 0 !== LH ? LH : () => performance.now(),
          MH = YH.id,
          xH = () => {
            const BH = HH.viewer();
            return BH === YH && BH.id === MH && BH.isOpen ? BH : null
          },
          vH = Math.min(null !== (AH = null === (rH = uH.mark) || void 0 === rH ? void 0 : rH.outTick) && void 0 !== AH ? AH : 1 / 0, uH.totalTicks - 1);
        let PH = null,
          TH = !1;
        const UH = () => {
          var HH, BH;
          return (null === (HH = xH()) || void 0 === HH || null === (BH = HH.view) || void 0 === BH ? void 0 : BH.state) === SH.hd.Playing
        };
        return {
          oN: SH.wd,
          playbackMarkInTick: null !== (XH = null === (GH = uH.mark) || void 0 === GH ? void 0 : GH.inTick) && void 0 !== XH ? XH : null,
          startFailure: () => {
            const HH = xH();
            return null === HH ? "Another replay opened. Export it again from there." : EH(HH) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var HH, BH;
            return null !== (HH = null === (BH = xH()) || void 0 === BH ? void 0 : BH.fileName) && void 0 !== HH ? HH : null
          },
          playbackSpeed: () => {
            var HH, BH, LH;
            return null !== (HH = null === (BH = xH()) || void 0 === BH || null === (LH = BH.view) || void 0 === LH ? void 0 : LH.speed) && void 0 !== HH ? HH : 1
          },
          setPlaybackSpeed: HH => {
            var BH;
            null === (BH = xH()) || void 0 === BH || BH.setSpeed(HH)
          },
          play: () => {
            var HH;
            TH = !1, PH = WH(), null === (HH = xH()) || void 0 === HH || HH.play()
          },
          pause: () => {
            var HH;
            null === (HH = xH()) || void 0 === HH || HH.pause()
          },
          seekToTick: HH => {
            var BH;
            null === (BH = xH()) || void 0 === BH || BH.seek(HH, !0)
          },
          seekSettled: () => new Promise((HH => {
            const BH = setInterval((() => {
              const LH = xH();
              null === LH ? (clearInterval(BH), HH()) : LH.LX.includes("seek") || (clearInterval(BH), setTimeout(HH, CH))
            }), zH)
          })),
          isPlaying: () => {
            var HH, BH, LH;
            return null !== PH && null !== xH() && (!!UH() || !TH && (null !== (HH = null === (BH = xH()) || void 0 === BH || null === (LH = BH.view) || void 0 === LH ? void 0 : LH.IX) && void 0 !== HH ? HH : 0) < vH && WH() - PH < tH)
          },
          watchPlayback: BH => {
            const LH = HH.watchViewer((() => {
                TH ||= null !== PH && UH(), BH()
              })),
              AH = setTimeout(BH, tH + 1);
            return () => {
              clearTimeout(AH), LH()
            }
          },
          playbackFailure: () => {
            var HH, BH;
            const LH = xH();
            return null === LH ? "The replay closed before the video finished." : (null !== (HH = null === (BH = LH.view) || void 0 === BH ? void 0 : BH.IX) && void 0 !== HH ? HH : 0) >= vH ? null : TH ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => QH,
          closeViewer: () => {
            HH.requestViewer("close")
          },
          reopenViewer: () => {
            HH.requestViewer("open")
          },
          holdInput: hH.g
        }
      }(HH)))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);