export const id = 79;
export const ids = [73, 79, 110];
export const modules = {
  38146: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW,
      d: () => xW
    });
    var mW = OW(643),
      EW = OW(39),
      NW = OW(38105);
    const PW = "replayFileKeptForReload",
      LW = "replayFileKeptForReloadAt",
      cW = "replayFileKeptForReloadTab",
      wW = 3e5,
      tW = 5e3;
    async function ZW(WW, iW) {
      const OW = Date.now(),
        NW = {
          at: OW,
          bytes: WW,
          source: iW
        },
        wW = await Promise.race([(async () => await EW.f.setItem(LW, OW) && EW.f.setItem(PW, NW))(), (0, mW.R)(tW).then((() => !1))]);
      wW || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const ZW = {
        at: OW,
        EZ: wW
      };
      EW.j.setItem(cW, ZW)
    }
    async function xW() {
      var WW;
      const iW = EW.j.getItem(cW);
      null !== iW && EW.j.removeItem(cW);
      const OW = Date.now(),
        mW = await EW.f.getItem(LW),
        tW = null !== iW && OW - iW.at <= wW,
        ZW = null !== iW && mW === iW.at;
      let xW = null;
      if (null !== mW && (ZW || ("number" !== typeof mW || OW - mW > wW)) && (xW = tW && ZW && iW.EZ ? await EW.f.getItem(PW) : null, await Promise.all([EW.f.removeItem(LW), EW.f.removeItem(PW)])), !tW) return null;
      if ((null === (WW = xW) || void 0 === WW ? void 0 : WW.at) !== iW.at) throw new Error(NW.e.replayNotKept.text);
      return {
        bytes: xW.bytes,
        source: xW.source
      }
    }
  },
  38142: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      c: () => NW,
      g: () => EW
    });
    const mW = [9];

    function EW(WW) {
      return mW.includes(WW)
    }

    function NW(WW) {
      return null !== WW && WW >= 3 && WW < mW[0]
    }
  },
  38105: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      i: () => wW,
      m: () => cW
    });
    var mW = OW(27);
    const EW = 1500,
      NW = 1e3,
      PW = {
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
      LW = new Set(Object.values(PW).filter((WW => "Error" === WW.type)).map((WW => WW.text)));

    function cW(WW) {
      return WW instanceof Error && LW.has(WW.message) ? WW.message : void 0
    }

    function wW(WW) {
      var iW;
      const OW = null !== (iW = WW.timeoutMs) && void 0 !== iW ? iW : "Error" === WW.type ? EW : NW;
      mW.l.iZ("showBottomMessage", {
        message: WW.text,
        timeoutLength: OW,
        type: WW.type
      })
    }
  },
  38153: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      c: () => EW
    });
    const mW = "data-replay-ui-active",
      EW = [{
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
  38159: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      i: () => ZW,
      k: () => tW
    });
    var mW = OW(25),
      EW = OW(27),
      NW = OW(38153);

    function PW() {
      const WW = {};
      for (const {
          group: iW
        }
        of NW.c) WW[iW] = !0;
      return WW
    }
    let LW = PW();

    function cW() {
      EW.l.iZ("replayViewer|uiVisibilityChanged")
    }

    function wW() {
      return LW
    }

    function tW(WW, iW) {
      LW[WW] !== iW && (LW = {
        ...LW,
        [WW]: iW
      }, "nametag" === WW && mW.d.set({
        areNametagsHidden: !iW
      }), cW())
    }

    function ZW() {
      LW = PW(), mW.d.set({
        areNametagsHidden: !1
      }), cW()
    }
  },
  40482: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => nW
    });
    var mW = OW(1876),
      EW = OW(1422),
      NW = OW(62),
      PW = OW(1089),
      LW = OW.n(PW),
      cW = OW(1532),
      wW = OW(100);
    const tW = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      ZW = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function xW(WW) {
      return "webm" === WW ? tW : ZW
    }

    function lW(WW) {
      for (const iW of WW)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(iW)) return iW;
      return null
    }

    function AW(WW) {
      return null !== lW(xW(WW))
    }
    var bW = OW(1283);
    const jW = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function UW() {
      return AW("webm") ? "webm" : AW("mp4") ? "mp4" : "webm"
    }

    function kW(WW) {
      let {
        cards: iW
      } = WW;
      return (0, bW.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: iW.map((WW => (0, bW.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, bW.jsx)("div", {
            className: LW()("ReplayVideoExportOptionCard", {
              Selected: WW.selected,
              Disabled: WW.disabled
            }),
            onClick: () => {
              WW.disabled || WW.onSelect()
            },
            children: (0, bW.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, bW.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: WW.label
              }), (0, bW.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: WW.description
              })]
            })
          }), WW.disabled && WW.disabledReason && (0, bW.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: WW.disabledReason
          })]
        }, WW.id)))
      })
    }
    const sW = (0, NW.memo)((function(WW) {
      let {
        hasPlaybackMark: iW,
        canIncludeUi: OW,
        includeUiDisabledReason: mW,
        selectionRef: EW,
        closePopup: PW
      } = WW;
      const LW = AW("webm") || AW("mp4"),
        [tW, ZW] = (0, NW.useState)(UW),
        [xW, lW] = (0, NW.useState)(OW),
        sW = LW && AW(tW);
      if (!LW) {
        const WW = (0, wW.isMobile)() ? "screen recording" : "OBS";
        return (0, bW.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, bW.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, bW.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${WW}.`
          }), (0, bW.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, bW.jsx)(cW.O, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                EW.options = null, PW()
              },
              children: "Close"
            })
          })]
        })
      }
      const MW = iW ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        KW = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !xW,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            lW(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: xW,
          disabled: !OW,
          disabledReason: mW,
          onSelect: () => {
            lW(!0)
          }
        }],
        SW = jW.map((WW => {
          const iW = AW(WW.id);
          return {
            id: WW.id,
            label: WW.label,
            description: WW.description,
            selected: tW === WW.id,
            disabled: !iW,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              ZW(WW.id)
            }
          }
        }));
      return (0, bW.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, bW.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, bW.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: MW
        }), (0, bW.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, bW.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, bW.jsx)(kW, {
            cards: KW
          })]
        }), (0, bW.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, bW.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, bW.jsx)(kW, {
            cards: SW
          })]
        }), (0, bW.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, bW.jsx)(cW.n, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !sW,
            onClick: () => {
              EW.options = {
                format: tW,
                includeUi: OW && xW
              }, PW()
            },
            children: "Export"
          }), (0, bW.jsx)(cW.O, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              EW.options = null, PW()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var MW = OW(5615),
      KW = OW(38153),
      SW = OW(38159);
    let YW = null;

    function yW() {
      return function() {
        const WW = (0, SW.e)();
        for (const {
            group: iW,
            dataAttr: OW
          }
          of KW.c)
          if (OW && WW[iW]) return !0;
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
    async function TW(WW, iW, OW) {
      return WW ? async function() {
        const WW = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const iW of WW.getAudioTracks()) iW.stop(), WW.removeTrack(iW);
        return WW
      }(): iW().captureStream(Math.max(1, Math.round(OW)))
    }
    var JW = OW(40287);
    let hW = !1;

    function HW(WW) {
      WW.holdInput(!1), (0, JW.d)(!1)
    }
    async function nW(WW) {
      var iW, OW;
      if ((0, JW.b)() || hW) return;
      const NW = WW();
      if (!NW) return;
      hW = !0;
      let PW = null;
      const LW = NW.playbackMarkInTick,
        {
          canIncludeUi: cW,
          includeUiDisabledReason: wW
        } = yW();
      try {
        PW = await async function(WW) {
          let {
            hasPlaybackMark: iW,
            canIncludeUi: OW,
            includeUiDisabledReason: mW
          } = WW;
          const NW = {
              options: null
            },
            PW = EW.NotificationProvider.showCustomPopup({
              body: WW => (0, bW.jsx)(sW, {
                hasPlaybackMark: iW,
                canIncludeUi: OW,
                includeUiDisabledReason: mW,
                selectionRef: NW,
                closePopup: WW
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await PW.getResult() ? null : NW.options
        }({
          hasPlaybackMark: null !== LW,
          canIncludeUi: cW,
          includeUiDisabledReason: wW
        })
      } finally {
        hW = !1
      }
      if (!PW) return;
      const tW = null !== (iW = null === (OW = NW.startFailure) || void 0 === OW ? void 0 : OW.call(NW)) && void 0 !== iW ? iW : null;
      if (null !== tW) return void EW.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: tW
      });
      if (! function(WW) {
          return !(0, JW.b)() && ((0, JW.d)(!0), WW.holdInput(!0), !0)
        }(NW)) return;
      let ZW = null;
      try {
        ZW = await TW(PW.includeUi, (() => NW.canvas()), NW.Fv)
      } catch (uW) {
        return console.error("Failed to create video stream for export", uW), HW(NW), void EW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: uW instanceof Error ? uW.message : "Could not start capture."
        })
      }
      let AW = null;
      const jW = [];
      let UW = null,
        kW = null;
      try {
        var KW, SW, nW;
        AW = NW.playbackSpeed(), NW.closeViewer(), NW.setPlaybackSpeed(1), NW.pause(), NW.seekToTick(null !== LW && void 0 !== LW ? LW : 0);
        const WW = await async function() {
          const WW = MW.Howler.masterGain;
          if (!MW.Howler.ctx || !WW) return null;
          await MW.Howler.ctx.resume();
          const iW = MW.Howler.ctx.createMediaStreamDestination();
          WW.connect(iW), YW = iW;
          const [OW] = iW.stream.getAudioTracks();
          return null !== OW && void 0 !== OW ? OW : null
        }();
        kW = new MediaStream;
        for (const mW of ZW.getVideoTracks()) kW.addTrack(mW);
        WW && kW.addTrack(WW);
        const iW = function(WW) {
          const iW = lW(xW(WW));
          if (!iW) throw new Error(`No MediaRecorder mime type available for ${WW}`);
          return iW
        }(PW.format);
        UW = new MediaRecorder(kW, {
          mimeType: iW,
          videoBitsPerSecond: 8e6
        }), UW.ondataavailable = WW => {
          WW.data.size > 0 && jW.push(WW.data)
        };
        const OW = new Promise((WW => {
          UW.onstop = () => {
            WW()
          }
        }));
        await (null === (KW = NW.seekSettled) || void 0 === KW ? void 0 : KW.call(NW));
        const [cW] = ZW.getVideoTracks();
        UW.start(250), NW.play();
        const wW = await
        function(WW, iW, OW) {
          return new Promise((mW => {
            let EW = !1;
            const NW = WW => {
                EW || (EW = !0, LW(), iW.removeEventListener("ended", PW), mW(WW))
              },
              PW = () => {
                NW("captureLost")
              },
              LW = WW.watchPlayback((() => {
                WW.isPlaying() || NW("completed")
              }));
            iW.addEventListener("ended", PW), OW.onerror = () => {
              NW("recorderError")
            }, "ended" !== iW.readyState ? WW.isPlaying() || NW("completed") : NW("captureLost")
          }))
        }(NW, cW, UW);
        if (NW.pause(), "inactive" !== UW.state && UW.stop(), await OW, "captureLost" === wW) return void EW.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === wW) return void EW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const tW = null !== (SW = null === (nW = NW.playbackFailure) || void 0 === nW ? void 0 : nW.call(NW)) && void 0 !== SW ? SW : null;
        if (null !== tW) return void EW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${tW} Nothing was saved.`
        });
        const bW = new Blob(jW, {
          type: iW
        });
        bW.size > 0 ? (0, mW.e)(bW, function(WW, iW) {
          const OW = function(WW) {
            return "mp4" === WW ? "mp4" : "webm"
          }(iW);
          if (WW) return `${WW.replace(/\.bloxdreplay$/i,"")}.${OW}`;
          return `bloxd-replay-${Date.now()}.${OW}`
        }(NW.fileName(), PW.format)) : EW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (uW) {
        console.error("Replay video export failed", uW), EW.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: uW instanceof Error ? uW.message : "Something went wrong while exporting."
        })
      } finally {
        if (UW && "inactive" !== UW.state) try {
          UW.stop()
        } catch (uW) {
          console.error("Failed to stop MediaRecorder", uW)
        }! function() {
          const WW = MW.Howler.masterGain;
          if (YW && WW) {
            try {
              WW.disconnect(YW)
            } catch (uW) {
              console.error("Failed to disconnect Howler export tee", uW)
            }
            YW = null
          } else YW = null
        }();
        for (const WW of ZW.getTracks()) WW.stop();
        if (kW)
          for (const WW of kW.getTracks()) WW.stop();
        null !== AW && NW.setPlaybackSpeed(AW), NW.pause(), HW(NW), NW.reopenViewer()
      }
    }
  },
  5615: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Howl: () => EW.Howl,
      Howler: () => EW.Howler,
      musicOutput: () => jW,
      readyAudioContext: () => UW
    });
    var mW, EW = OW(5618),
      NW = OW(4653),
      PW = OW(5356);
    const LW = EW.Howler;

    function cW() {
      var WW, iW;
      if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
      const OW = navigator.audioSession;
      let mW;
      "auto" === (null === OW || void 0 === OW ? void 0 : OW.type) && (OW.type = "ambient");
      try {
        mW = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const EW = mW.createGain();
      EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
    }
    LW._mobileUnloaded = !0;
    const wW = LW.volume.bind(EW.Howler);
    LW.volume = function() {
      return cW(), wW(...arguments)
    };
    const tW = LW.mute.bind(EW.Howler);
    LW.mute = WW => (cW(), tW(WW));
    const ZW = EW.Howl.prototype,
      xW = ZW.init;

    function lW() {
      for (; LW._html5AudioPool.length < LW.html5PoolSize;) {
        const WW = new Audio;
        WW._unlocked = !0, LW._releaseHtml5Audio(WW)
      }
      for (const iW of LW._howls)
        if (!iW._webAudio)
          for (const OW of iW._getSoundIds()) {
            var WW;
            const mW = null === (WW = iW._soundById(OW)) || void 0 === WW ? void 0 : WW._node;
            mW && !mW._unlocked && (mW._unlocked = !0, mW.load())
          }
    }
    ZW.init = function(WW) {
      return cW(), xW.call(this, WW)
    }, (0, PW.k)() && (LW._unlockAudio = () => {
      const WW = LW.ctx;
      if (LW._audioUnlocked || !WW) return;
      LW.autoUnlock = !1;
      const iW = WW.createBuffer(1, 1, 22050);
      LW._scratchBuffer = iW;
      const OW = new AbortController;
      let mW = "afterPaint";
      const EW = () => {
          var mW;
          if (LW._audioUnlocked) return;
          null === (mW = LW._autoResume) || void 0 === mW || mW.call(LW);
          const EW = WW.createBufferSource();
          EW.buffer = iW, EW.connect(WW.destination), EW.start(0), WW.resume().catch((() => {})), EW.onended = () => {
            EW.disconnect(0), LW._audioUnlocked = !0, OW.abort();
            for (const WW of LW._howls) WW._emit("unlock")
          }
        },
        cW = () => {
          lW(), EW()
        },
        wW = iW => {
          if (lW(), "inTap" === mW) {
            if ("running" === WW.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), EW()
          } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
            mW = "inTap", EW()
          })))
        };
      for (const NW of ["touchstart", "touchend"]) document.addEventListener(NW, cW, {
        capture: !0,
        signal: OW.signal
      });
      for (const NW of PW.d) document.addEventListener(NW, wW, {
        capture: !0,
        signal: OW.signal
      })
    });
    let AW = 0;
    const bW = null === (mW = LW._autoSuspend) || void 0 === mW ? void 0 : mW.bind(EW.Howler);

    function jW() {
      UW();
      const {
        ctx: WW,
        masterGain: iW
      } = LW;
      return WW && iW ? {
        ctx: WW,
        destination: iW,
        holdAwake: WW => {
          var iW, OW;
          (AW += WW ? 1 : -1, WW) ? null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW): null === (OW = LW._autoSuspend) || void 0 === OW || OW.call(LW)
        },
        wake: () => {
          var iW;
          "running" !== WW.state && (null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW), WW.resume().catch((() => {})))
        }
      } : null
    }

    function UW() {
      var WW;
      (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
    }
    bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
  },
  54737: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      e: () => EW
    });
    const mW = ["recording", "freecam", "keyframe"];

    function EW() {
      const WW = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(WW[1]) << 32n | BigInt(WW[0])
    }
  },
  64370: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      HOLD_TIMEOUT_MS: () => wW,
      ReplayViewer: () => ZW
    });
    var mW = OW(38105),
      EW = OW(38146),
      NW = OW(38142),
      PW = OW(38159),
      LW = OW(5546),
      cW = OW(54737);
    const wW = 1e4,
      tW = new Set(["kA"]);
    class ZW {
      constructor(WW) {
        var iW;
        this.deps = WW, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (iW = WW.now) && void 0 !== iW ? iW : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== LW.td.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get BL() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? mW.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(WW, iW) {
        var OW, NW, PW, cW;
        const {
          client: wW
        } = this.deps;
        if (!this.playback) {
          if (!wW.setPlayback(!0)) throw new Error(mW.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const tW = this.epoch;
        let ZW;
        try {
          ZW = await wW.open(WW, (() => (0, EW.b)(WW, iW)))
        } finally {
          this.loadingOpens--
        }
        if (tW !== this.epoch && "reloading" !== ZW) throw new Error(mW.e.coreStopped.text);
        if ("opening" !== ZW) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const WW = function(WW) {
            switch (WW) {
              case "reloading":
                return null;
              case "stopped":
              case LW.gd.ModuleTrap:
                return mW.e.coreStopped;
              case LW.gd.ModuleLoad:
                return mW.e.viewerLoadFailed;
              case LW.gd.TooLarge:
                return mW.e.cantOpen
            }
          }(ZW);
          if (null === WW) return;
          throw new Error(WW.text)
        }
        return this.rejectSave(new Error(mW.e.saveClosed.text)), this.fileName = null !== (OW = null !== (NW = iW.fileName) && void 0 !== NW ? NW : null === (PW = iW.fileHandle) || void 0 === PW ? void 0 : PW.name) && void 0 !== OW ? OW : null, this.fileHandle = null !== (cW = iW.fileHandle) && void 0 !== cW ? cW : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((WW, iW) => {
          this.pendingOpen = {
            resolve: WW,
            reject: iW
          }
        }))
      }
      play() {
        this.holds.has("kA") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("kA")
      }
      seek(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this.lastView;
        null !== OW && (iW || WW < OW.hZ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(WW, iW)
      }
      setSpeed(WW) {
        this.deps.client.setSpeed(WW)
      }
      setCameraMode(WW) {
        this.deps.client.setCameraMode(WW)
      }
      cycleCameraMode() {
        const WW = this.lastView;
        null !== WW && WW.state !== LW.td.None && this.setCameraMode(cW.b[(cW.b.indexOf(WW.cameraMode) + 1) % cW.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(WW) {
        this.edited(this.deps.client.setKeyframe(WW))
      }
      moveKeyframe(WW, iW) {
        this.edited(this.deps.client.moveKeyframe(WW, iW))
      }
      deleteKeyframes(WW, iW) {
        this.edited(this.deps.client.deleteKeyframes(WW, iW))
      }
      setMark(WW) {
        this.edited(this.deps.client.setMark(WW))
      }
      crop(WW, iW) {
        return !(iW <= WW) && (null !== this.pendingSave ? (this.deps.notify(mW.e.saveBusy), !1) : !!this.deps.client.crop(WW, iW) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(mW.e.saveBusy.text)) : new Promise(((WW, iW) => {
          const OW = {
            resolve: WW,
            reject: iW
          };
          this.pendingSave = OW, this.editsAtSave = this.edits, this.deps.client.save((0, cW.e)()).then((WW => {
            this.pendingSave === OW && this.saveStarted(WW)
          }), (WW => {
            this.pendingSave === OW && this.rejectSave(WW instanceof Error ? WW : new Error(String(WW)))
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
      markSaved(WW, iW) {
        var OW, mW;
        this.fileHandle = WW, this.fileName = null !== (OW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.name) && void 0 !== mW ? mW : iW) && void 0 !== OW ? OW : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(mW.e.coreStopped.text)), this.rejectSave(new Error(mW.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var WW, iW, OW;
        const mW = this.deps.client.view(),
          EW = mW !== this.lastView;
        this.lastView = mW, this.opening && null !== mW && mW.state !== LW.td.None && mW.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, PW.i)()), this.cropAsked ? (this.cropAsked = !1, null !== mW && mW.state === LW.td.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== mW && mW.state !== LW.td.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const NW = 0 === this.settleFrames && 0 === (null !== (WW = null === (iW = (OW = this.deps).meshPending) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && NW && this.release("opening"), this.holds.has("seek") && NW && this.release("seek"), this.holds.has("crop") && !this.cropRunning && NW && this.release("crop");
        const cW = this.now();
        for (const [PW, LW] of this.holds) !tW.has(PW) && cW - LW >= wW && this.release(PW);
        this.saveRefused && !this.cropping && this.saveFailed(!1), EW && this.deps.onChange()
      }
      cropped() {
        (0, PW.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(WW) {
        switch (WW.reason) {
          case LW.gd.TooLarge:
            break;
          case LW.gd.Open:
          case LW.gd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const iW = (0, NW.c)(WW.version) ? mW.e.replayTooOld : mW.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(iW), this.settleOpen(new Error(iW.text));
            break
          }
          case LW.gd.Crop:
            if (WW.code === LW.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(mW.e.cropFailed);
            break;
          case LW.gd.ModuleTrap:
          case LW.gd.ModuleLoad:
          case LW.gd.Port:
            this.moduleEnded(WW.reason === LW.gd.ModuleTrap ? mW.e.coreStopped : mW.e.cantOpen);
            break;
          case LW.gd.NotLive:
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
        const iW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === iW || void 0 === iW || iW.resolve(WW)
      }
      saveFailed(WW) {
        this.rejectSave(new Error(WW ? mW.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(WW) {
        WW && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(mW.e.cropBusy.text)) : this.deps.notify(mW.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(WW) {
        const iW = this.pendingOpen;
        this.pendingOpen = null, null === WW ? null === iW || void 0 === iW || iW.resolve() : null === iW || void 0 === iW || iW.reject(WW)
      }
      rejectSave(WW) {
        const iW = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === iW || void 0 === iW || iW.reject(WW)
      }
      hold(WW) {
        const iW = 0 === this.holds.size;
        this.holds.set(WW, this.now()), iW && this.deps.setHoldDraws(!0)
      }
      release(WW) {
        this.holds.delete(WW) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64363: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      MESH_TAIL_MS: () => wW,
      PLAY_START_TIMEOUT_MS: () => LW,
      startWasmReplayVideoExport: () => ZW
    });
    var mW = OW(40482),
      EW = OW(64370),
      NW = OW(5546),
      PW = OW(3310);
    const LW = EW.HOLD_TIMEOUT_MS + 5e3,
      cW = 50,
      wW = 200;

    function tW(WW) {
      var iW;
      return (null === (iW = WW.view) || void 0 === iW ? void 0 : iW.state) === NW.td.Cropping || WW.BL.includes("crop")
    }

    function ZW(WW) {
      return (0, mW.d)((() => function(WW) {
        var iW, OW, mW, EW, ZW, xW;
        const lW = WW.viewer(),
          AW = null !== (iW = null === lW || void 0 === lW ? void 0 : lW.view) && void 0 !== iW ? iW : null,
          bW = WW.canvas();
        if (!lW || !AW || AW.state === NW.td.None || 0 === AW.totalTicks || !bW || tW(lW)) return null;
        const jW = null !== (OW = WW.now) && void 0 !== OW ? OW : () => performance.now(),
          UW = lW.id,
          kW = () => {
            const iW = WW.viewer();
            return iW === lW && iW.id === UW && iW.isOpen ? iW : null
          },
          sW = Math.min(null !== (mW = null === (EW = AW.mark) || void 0 === EW ? void 0 : EW.outTick) && void 0 !== mW ? mW : 1 / 0, AW.totalTicks - 1);
        let MW = null,
          KW = !1;
        const SW = () => {
          var WW, iW;
          return (null === (WW = kW()) || void 0 === WW || null === (iW = WW.view) || void 0 === iW ? void 0 : iW.state) === NW.td.Playing
        };
        return {
          Fv: NW.Jd,
          playbackMarkInTick: null !== (ZW = null === (xW = AW.mark) || void 0 === xW ? void 0 : xW.inTick) && void 0 !== ZW ? ZW : null,
          startFailure: () => {
            const WW = kW();
            return null === WW ? "Another replay opened. Export it again from there." : tW(WW) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var WW, iW;
            return null !== (WW = null === (iW = kW()) || void 0 === iW ? void 0 : iW.fileName) && void 0 !== WW ? WW : null
          },
          playbackSpeed: () => {
            var WW, iW, OW;
            return null !== (WW = null === (iW = kW()) || void 0 === iW || null === (OW = iW.view) || void 0 === OW ? void 0 : OW.speed) && void 0 !== WW ? WW : 1
          },
          setPlaybackSpeed: WW => {
            var iW;
            null === (iW = kW()) || void 0 === iW || iW.setSpeed(WW)
          },
          play: () => {
            var WW;
            KW = !1, MW = jW(), null === (WW = kW()) || void 0 === WW || WW.play()
          },
          pause: () => {
            var WW;
            null === (WW = kW()) || void 0 === WW || WW.pause()
          },
          seekToTick: WW => {
            var iW;
            null === (iW = kW()) || void 0 === iW || iW.seek(WW, !0)
          },
          seekSettled: () => new Promise((WW => {
            const iW = setInterval((() => {
              const OW = kW();
              null === OW ? (clearInterval(iW), WW()) : OW.BL.includes("seek") || (clearInterval(iW), setTimeout(WW, wW))
            }), cW)
          })),
          isPlaying: () => {
            var WW, iW, OW;
            return null !== MW && null !== kW() && (!!SW() || !KW && (null !== (WW = null === (iW = kW()) || void 0 === iW || null === (OW = iW.view) || void 0 === OW ? void 0 : OW.hZ) && void 0 !== WW ? WW : 0) < sW && jW() - MW < LW)
          },
          watchPlayback: iW => {
            const OW = WW.watchViewer((() => {
                KW ||= null !== MW && SW(), iW()
              })),
              mW = setTimeout(iW, LW + 1);
            return () => {
              clearTimeout(mW), OW()
            }
          },
          playbackFailure: () => {
            var WW, iW;
            const OW = kW();
            return null === OW ? "The replay closed before the video finished." : (null !== (WW = null === (iW = OW.view) || void 0 === iW ? void 0 : iW.hZ) && void 0 !== WW ? WW : 0) >= sW ? null : KW ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => bW,
          closeViewer: () => {
            WW.requestViewer("close")
          },
          reopenViewer: () => {
            WW.requestViewer("open")
          },
          holdInput: PW.g
        }
      }(WW)))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);