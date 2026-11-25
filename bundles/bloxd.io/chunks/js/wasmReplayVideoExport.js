export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37353: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      d: () => fG
    });
    var wG = ZG(604),
      SG = ZG(29),
      LG = ZG(37301);
    const yG = "replayFileKeptForReload",
      kG = "replayFileKeptForReloadAt",
      UG = "replayFileKeptForReloadTab",
      YG = 3e5,
      VG = 5e3;
    async function pG(GG, bG) {
      const ZG = Date.now(),
        LG = {
          at: ZG,
          bytes: GG,
          source: bG
        },
        YG = await Promise.race([(async () => await SG.e.setItem(kG, ZG) && SG.e.setItem(yG, LG))(), (0, wG.R)(VG).then((() => !1))]);
      YG || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pG = {
        at: ZG,
        vQ: YG
      };
      SG.l.setItem(UG, pG)
    }
    async function fG() {
      var GG;
      const bG = SG.l.getItem(UG);
      null !== bG && SG.l.removeItem(UG);
      const ZG = Date.now(),
        wG = await SG.e.getItem(kG),
        VG = null !== bG && ZG - bG.at <= YG,
        pG = null !== bG && wG === bG.at;
      let fG = null;
      if (null !== wG && (pG || ("number" !== typeof wG || ZG - wG > YG)) && (fG = VG && pG && bG.vQ ? await SG.e.getItem(yG) : null, await Promise.all([SG.e.removeItem(kG), SG.e.removeItem(yG)])), !VG) return null;
      if ((null === (GG = fG) || void 0 === GG ? void 0 : GG.at) !== bG.at) throw new Error(LG.e.replayNotKept.text);
      return {
        bytes: fG.bytes,
        source: fG.source
      }
    }
  },
  37348: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      g: () => LG,
      k: () => SG
    });
    const wG = [9];

    function SG(GG) {
      return wG.includes(GG)
    }

    function LG(GG) {
      return null !== GG && GG >= 3 && GG < wG[0]
    }
  },
  37301: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      g: () => YG,
      i: () => UG
    });
    var wG = ZG(19);
    const SG = 1500,
      LG = 1e3,
      yG = {
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
      kG = new Set(Object.values(yG).filter((GG => "Error" === GG.type)).map((GG => GG.text)));

    function UG(GG) {
      return GG instanceof Error && kG.has(GG.message) ? GG.message : void 0
    }

    function YG(GG) {
      var bG;
      const ZG = null !== (bG = GG.timeoutMs) && void 0 !== bG ? bG : "Error" === GG.type ? SG : LG;
      wG.l.xh("showBottomMessage", {
        message: GG.text,
        timeoutLength: ZG,
        type: GG.type
      })
    }
  },
  37363: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      f: () => SG
    });
    const wG = "data-replay-ui-active",
      SG = [{
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
  37368: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => YG,
      f: () => pG,
      h: () => VG
    });
    var wG = ZG(17),
      SG = ZG(19),
      LG = ZG(37363);

    function yG() {
      const GG = {};
      for (const {
          group: bG
        }
        of LG.f) GG[bG] = !0;
      return GG
    }
    let kG = yG();

    function UG() {
      SG.l.xh("replayViewer|uiVisibilityChanged")
    }

    function YG() {
      return kG
    }

    function VG(GG, bG) {
      kG[GG] !== bG && (kG = {
        ...kG,
        [GG]: bG
      }, "nametag" === GG && wG.e.set({
        areNametagsHidden: !bG
      }), UG())
    }

    function pG() {
      kG = yG(), wG.e.set({
        areNametagsHidden: !1
      }), UG()
    }
  },
  39671: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => FG
    });
    var wG = ZG(1721),
      SG = ZG(1311),
      LG = ZG(51),
      yG = ZG(1006),
      kG = ZG.n(yG),
      UG = ZG(1393),
      YG = ZG(80);
    const VG = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      pG = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function fG(GG) {
      return "webm" === GG ? VG : pG
    }

    function QG(GG) {
      for (const bG of GG)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(bG)) return bG;
      return null
    }

    function KG(GG) {
      return null !== QG(fG(GG))
    }
    var hG = ZG(1067);
    const dG = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function JG() {
      return KG("webm") ? "webm" : KG("mp4") ? "mp4" : "webm"
    }

    function rG(GG) {
      let {
        cards: bG
      } = GG;
      return (0, hG.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: bG.map((GG => (0, hG.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, hG.jsx)("div", {
            className: kG()("ReplayVideoExportOptionCard", {
              Selected: GG.selected,
              Disabled: GG.disabled
            }),
            onClick: () => {
              GG.disabled || GG.onSelect()
            },
            children: (0, hG.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, hG.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: GG.label
              }), (0, hG.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: GG.description
              })]
            })
          }), GG.disabled && GG.disabledReason && (0, hG.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: GG.disabledReason
          })]
        }, GG.id)))
      })
    }
    const zG = (0, LG.memo)((function(GG) {
      let {
        hasPlaybackMark: bG,
        canIncludeUi: ZG,
        includeUiDisabledReason: wG,
        selectionRef: SG,
        closePopup: yG
      } = GG;
      const kG = KG("webm") || KG("mp4"),
        [VG, pG] = (0, LG.useState)(JG),
        [fG, QG] = (0, LG.useState)(ZG),
        zG = kG && KG(VG);
      if (!kG) {
        const GG = (0, YG.isMobile)() ? "screen recording" : "OBS";
        return (0, hG.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, hG.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, hG.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${GG}.`
          }), (0, hG.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, hG.jsx)(UG.C, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                SG.options = null, yG()
              },
              children: "Close"
            })
          })]
        })
      }
      const EG = bG ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        oG = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !fG,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            QG(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: fG,
          disabled: !ZG,
          disabledReason: wG,
          onSelect: () => {
            QG(!0)
          }
        }],
        XG = dG.map((GG => {
          const bG = KG(GG.id);
          return {
            id: GG.id,
            label: GG.label,
            description: GG.description,
            selected: VG === GG.id,
            disabled: !bG,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              pG(GG.id)
            }
          }
        }));
      return (0, hG.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, hG.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, hG.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: EG
        }), (0, hG.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, hG.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, hG.jsx)(rG, {
            cards: oG
          })]
        }), (0, hG.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, hG.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, hG.jsx)(rG, {
            cards: XG
          })]
        }), (0, hG.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, hG.jsx)(UG.k, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !zG,
            onClick: () => {
              SG.options = {
                format: VG,
                includeUi: ZG && fG
              }, yG()
            },
            children: "Export"
          }), (0, hG.jsx)(UG.C, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              SG.options = null, yG()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var EG = ZG(4883),
      oG = ZG(37363),
      XG = ZG(37368);
    let uG = null;

    function iG() {
      return function() {
        const GG = (0, XG.b)();
        for (const {
            group: bG,
            dataAttr: ZG
          }
          of oG.f)
          if (ZG && GG[bG]) return !0;
        return !1
      }() ? function() {
        var GG;
        return "function" === typeof(null === (GG = navigator.mediaDevices) || void 0 === GG ? void 0 : GG.getDisplayMedia)
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
    async function CG(GG, bG, ZG) {
      return GG ? async function() {
        const GG = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const bG of GG.getAudioTracks()) bG.stop(), GG.removeTrack(bG);
        return GG
      }(): bG().captureStream(Math.max(1, Math.round(ZG)))
    }
    var WG = ZG(39487);
    let mG = !1;

    function IG(GG) {
      GG.holdInput(!1), (0, WG.g)(!1)
    }
    async function FG(GG) {
      var bG, ZG;
      if ((0, WG.c)() || mG) return;
      const LG = GG();
      if (!LG) return;
      mG = !0;
      let yG = null;
      const kG = LG.playbackMarkInTick,
        {
          canIncludeUi: UG,
          includeUiDisabledReason: YG
        } = iG();
      try {
        yG = await async function(GG) {
          let {
            hasPlaybackMark: bG,
            canIncludeUi: ZG,
            includeUiDisabledReason: wG
          } = GG;
          const LG = {
              options: null
            },
            yG = SG.NotificationProvider.showCustomPopup({
              body: GG => (0, hG.jsx)(zG, {
                hasPlaybackMark: bG,
                canIncludeUi: ZG,
                includeUiDisabledReason: wG,
                selectionRef: LG,
                closePopup: GG
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await yG.getResult() ? null : LG.options
        }({
          hasPlaybackMark: null !== kG,
          canIncludeUi: UG,
          includeUiDisabledReason: YG
        })
      } finally {
        mG = !1
      }
      if (!yG) return;
      const VG = null !== (bG = null === (ZG = LG.startFailure) || void 0 === ZG ? void 0 : ZG.call(LG)) && void 0 !== bG ? bG : null;
      if (null !== VG) return void SG.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: VG
      });
      if (! function(GG) {
          return !(0, WG.c)() && ((0, WG.g)(!0), GG.holdInput(!0), !0)
        }(LG)) return;
      let pG = null;
      try {
        pG = await CG(yG.includeUi, (() => LG.canvas()), LG.Fv)
      } catch (vG) {
        return console.error("Failed to create video stream for export", vG), IG(LG), void SG.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: vG instanceof Error ? vG.message : "Could not start capture."
        })
      }
      let KG = null;
      const dG = [];
      let JG = null,
        rG = null;
      try {
        var oG, XG, FG;
        KG = LG.playbackSpeed(), LG.closeViewer(), LG.setPlaybackSpeed(1), LG.pause(), LG.seekToTick(null !== kG && void 0 !== kG ? kG : 0);
        const GG = await async function() {
          const GG = EG.Howler.masterGain;
          if (!EG.Howler.ctx || !GG) return null;
          await EG.Howler.ctx.resume();
          const bG = EG.Howler.ctx.createMediaStreamDestination();
          GG.connect(bG), uG = bG;
          const [ZG] = bG.stream.getAudioTracks();
          return null !== ZG && void 0 !== ZG ? ZG : null
        }();
        rG = new MediaStream;
        for (const wG of pG.getVideoTracks()) rG.addTrack(wG);
        GG && rG.addTrack(GG);
        const bG = function(GG) {
          const bG = QG(fG(GG));
          if (!bG) throw new Error(`No MediaRecorder mime type available for ${GG}`);
          return bG
        }(yG.format);
        JG = new MediaRecorder(rG, {
          mimeType: bG,
          videoBitsPerSecond: 8e6
        }), JG.ondataavailable = GG => {
          GG.data.size > 0 && dG.push(GG.data)
        };
        const ZG = new Promise((GG => {
          JG.onstop = () => {
            GG()
          }
        }));
        await (null === (oG = LG.seekSettled) || void 0 === oG ? void 0 : oG.call(LG));
        const [UG] = pG.getVideoTracks();
        JG.start(250), LG.play();
        const YG = await
        function(GG, bG, ZG) {
          return new Promise((wG => {
            let SG = !1;
            const LG = GG => {
                SG || (SG = !0, kG(), bG.removeEventListener("ended", yG), wG(GG))
              },
              yG = () => {
                LG("captureLost")
              },
              kG = GG.watchPlayback((() => {
                GG.isPlaying() || LG("completed")
              }));
            bG.addEventListener("ended", yG), ZG.onerror = () => {
              LG("recorderError")
            }, "ended" !== bG.readyState ? GG.isPlaying() || LG("completed") : LG("captureLost")
          }))
        }(LG, UG, JG);
        if (LG.pause(), "inactive" !== JG.state && JG.stop(), await ZG, "captureLost" === YG) return void SG.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === YG) return void SG.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const VG = null !== (XG = null === (FG = LG.playbackFailure) || void 0 === FG ? void 0 : FG.call(LG)) && void 0 !== XG ? XG : null;
        if (null !== VG) return void SG.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${VG} Nothing was saved.`
        });
        const hG = new Blob(dG, {
          type: bG
        });
        hG.size > 0 ? (0, wG.b)(hG, function(GG, bG) {
          const ZG = function(GG) {
            return "mp4" === GG ? "mp4" : "webm"
          }(bG);
          if (GG) return `${GG.replace(/\.bloxdreplay$/i,"")}.${ZG}`;
          return `bloxd-replay-${Date.now()}.${ZG}`
        }(LG.fileName(), yG.format)) : SG.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (vG) {
        console.error("Replay video export failed", vG), SG.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: vG instanceof Error ? vG.message : "Something went wrong while exporting."
        })
      } finally {
        if (JG && "inactive" !== JG.state) try {
          JG.stop()
        } catch (vG) {
          console.error("Failed to stop MediaRecorder", vG)
        }! function() {
          const GG = EG.Howler.masterGain;
          if (uG && GG) {
            try {
              GG.disconnect(uG)
            } catch (vG) {
              console.error("Failed to disconnect Howler export tee", vG)
            }
            uG = null
          } else uG = null
        }();
        for (const GG of pG.getTracks()) GG.stop();
        if (rG)
          for (const GG of rG.getTracks()) GG.stop();
        null !== KG && LG.setPlaybackSpeed(KG), LG.pause(), IG(LG), LG.reopenViewer()
      }
    }
  },
  4883: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Howl: () => SG.Howl,
      Howler: () => SG.Howler,
      musicOutput: () => dG,
      readyAudioContext: () => JG
    });
    var wG, SG = ZG(4889),
      LG = ZG(3423),
      yG = ZG(4672);
    const kG = SG.Howler;

    function UG() {
      var GG, bG;
      if (kG.ctx || !kG.usingWebAudio || "undefined" === typeof AudioContext || !(0, yG.h)()) return;
      const ZG = navigator.audioSession;
      let wG;
      "auto" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && (ZG.type = "ambient");
      try {
        wG = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SG = wG.createGain();
      SG.gain.setValueAtTime(kG._muted ? 0 : null !== (GG = kG._volume) && void 0 !== GG ? GG : 1, wG.currentTime), SG.connect(wG.destination), kG.ctx = wG, kG.masterGain = SG, null === (bG = kG._setup) || void 0 === bG || bG.call(kG)
    }
    kG._mobileUnloaded = !0;
    const YG = kG.volume.bind(SG.Howler);
    kG.volume = function() {
      return UG(), YG(...arguments)
    };
    const VG = kG.mute.bind(SG.Howler);
    kG.mute = GG => (UG(), VG(GG));
    const pG = SG.Howl.prototype,
      fG = pG.init;

    function QG() {
      for (; kG._html5AudioPool.length < kG.html5PoolSize;) {
        const GG = new Audio;
        GG._unlocked = !0, kG._releaseHtml5Audio(GG)
      }
      for (const bG of kG._howls)
        if (!bG._webAudio)
          for (const ZG of bG._getSoundIds()) {
            var GG;
            const wG = null === (GG = bG._soundById(ZG)) || void 0 === GG ? void 0 : GG._node;
            wG && !wG._unlocked && (wG._unlocked = !0, wG.load())
          }
    }
    pG.init = function(GG) {
      return UG(), fG.call(this, GG)
    }, (0, yG.h)() && (kG._unlockAudio = () => {
      const GG = kG.ctx;
      if (kG._audioUnlocked || !GG) return;
      kG.autoUnlock = !1;
      const bG = GG.createBuffer(1, 1, 22050);
      kG._scratchBuffer = bG;
      const ZG = new AbortController;
      let wG = "afterPaint";
      const SG = () => {
          var wG;
          if (kG._audioUnlocked) return;
          null === (wG = kG._autoResume) || void 0 === wG || wG.call(kG);
          const SG = GG.createBufferSource();
          SG.buffer = bG, SG.connect(GG.destination), SG.start(0), GG.resume().catch((() => {})), SG.onended = () => {
            SG.disconnect(0), kG._audioUnlocked = !0, ZG.abort();
            for (const GG of kG._howls) GG._emit("unlock")
          }
        },
        UG = () => {
          QG(), SG()
        },
        YG = bG => {
          if (QG(), "inTap" === wG) {
            if ("running" === GG.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SG()
          } else "afterPaint" === wG && (wG = "queued", (0, LG.d)(bG.timeStamp, (() => {
            wG = "inTap", SG()
          })))
        };
      for (const LG of ["touchstart", "touchend"]) document.addEventListener(LG, UG, {
        capture: !0,
        signal: ZG.signal
      });
      for (const LG of yG.d) document.addEventListener(LG, YG, {
        capture: !0,
        signal: ZG.signal
      })
    });
    let KG = 0;
    const hG = null === (wG = kG._autoSuspend) || void 0 === wG ? void 0 : wG.bind(SG.Howler);

    function dG() {
      JG();
      const {
        ctx: GG,
        masterGain: bG
      } = kG;
      return GG && bG ? {
        ctx: GG,
        destination: bG,
        holdAwake: GG => {
          var bG, ZG;
          (KG += GG ? 1 : -1, GG) ? null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG): null === (ZG = kG._autoSuspend) || void 0 === ZG || ZG.call(kG)
        },
        wake: () => {
          var bG;
          "running" !== GG.state && (null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG), GG.resume().catch((() => {})))
        }
      } : null
    }

    function JG() {
      var GG;
      (kG.volume(), kG.ctx && kG.autoUnlock) && (null === (GG = kG._unlockAudio) || void 0 === GG || GG.call(kG))
    }
    hG && (kG._autoSuspend = () => KG > 0 ? SG.Howler : hG())
  },
  43029: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      d: () => SG
    });
    const wG = ["recording", "freecam", "keyframe"];

    function SG() {
      const GG = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(GG[1]) << 32n | BigInt(GG[0])
    }
  },
  61147: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      HOLD_TIMEOUT_MS: () => YG,
      ReplayViewer: () => pG
    });
    var wG = ZG(37301),
      SG = ZG(37353),
      LG = ZG(37348),
      yG = ZG(37368),
      kG = ZG(4810),
      UG = ZG(43029);
    const YG = 1e4,
      VG = new Set(["OQ"]);
    class pG {
      constructor(GG) {
        var bG;
        this.deps = GG, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (bG = GG.now) && void 0 !== bG ? bG : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== kG.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Ik() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? wG.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(GG, bG) {
        var ZG, LG, yG, UG;
        const {
          client: YG
        } = this.deps;
        if (!this.playback) {
          if (!YG.setPlayback(!0)) throw new Error(wG.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const VG = this.epoch;
        let pG;
        try {
          pG = await YG.open(GG, (() => (0, SG.c)(GG, bG)))
        } finally {
          this.loadingOpens--
        }
        if (VG !== this.epoch && "reloading" !== pG) throw new Error(wG.e.coreStopped.text);
        if ("opening" !== pG) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const GG = function(GG) {
            switch (GG) {
              case "reloading":
                return null;
              case "stopped":
              case kG.ld.ModuleTrap:
                return wG.e.coreStopped;
              case kG.ld.ModuleLoad:
                return wG.e.viewerLoadFailed;
              case kG.ld.TooLarge:
                return wG.e.cantOpen
            }
          }(pG);
          if (null === GG) return;
          throw new Error(GG.text)
        }
        return this.rejectSave(new Error(wG.e.saveClosed.text)), this.fileName = null !== (ZG = null !== (LG = bG.fileName) && void 0 !== LG ? LG : null === (yG = bG.fileHandle) || void 0 === yG ? void 0 : yG.name) && void 0 !== ZG ? ZG : null, this.fileHandle = null !== (UG = bG.fileHandle) && void 0 !== UG ? UG : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((GG, bG) => {
          this.pendingOpen = {
            resolve: GG,
            reject: bG
          }
        }))
      }
      play() {
        this.holds.has("OQ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("OQ")
      }
      seek(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this.lastView;
        null !== ZG && (bG || GG < ZG.Tp) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(GG, bG)
      }
      setSpeed(GG) {
        this.deps.client.setSpeed(GG)
      }
      setCameraMode(GG) {
        this.deps.client.setCameraMode(GG)
      }
      cycleCameraMode() {
        const GG = this.lastView;
        null !== GG && GG.state !== kG.sd.None && this.setCameraMode(UG.b[(UG.b.indexOf(GG.cameraMode) + 1) % UG.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(GG) {
        this.edited(this.deps.client.setKeyframe(GG))
      }
      moveKeyframe(GG, bG) {
        this.edited(this.deps.client.moveKeyframe(GG, bG))
      }
      deleteKeyframes(GG, bG) {
        this.edited(this.deps.client.deleteKeyframes(GG, bG))
      }
      setMark(GG) {
        this.edited(this.deps.client.setMark(GG))
      }
      crop(GG, bG) {
        return !(bG <= GG) && (null !== this.pendingSave ? (this.deps.notify(wG.e.saveBusy), !1) : !!this.deps.client.crop(GG, bG) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(wG.e.saveBusy.text)) : new Promise(((GG, bG) => {
          const ZG = {
            resolve: GG,
            reject: bG
          };
          this.pendingSave = ZG, this.editsAtSave = this.edits, this.deps.client.save((0, UG.d)()).then((GG => {
            this.pendingSave === ZG && this.saveStarted(GG)
          }), (GG => {
            this.pendingSave === ZG && this.rejectSave(GG instanceof Error ? GG : new Error(String(GG)))
          }))
        }))
      }
      saveStarted(GG) {
        switch (GG) {
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
      markSaved(GG, bG) {
        var ZG, wG;
        this.fileHandle = GG, this.fileName = null !== (ZG = null !== (wG = null === GG || void 0 === GG ? void 0 : GG.name) && void 0 !== wG ? wG : bG) && void 0 !== ZG ? ZG : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(wG.e.coreStopped.text)), this.rejectSave(new Error(wG.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var GG, bG, ZG;
        const wG = this.deps.client.view(),
          SG = wG !== this.lastView;
        this.lastView = wG, this.opening && null !== wG && wG.state !== kG.sd.None && wG.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yG.f)()), this.cropAsked ? (this.cropAsked = !1, null !== wG && wG.state === kG.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== wG && wG.state !== kG.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const LG = 0 === this.settleFrames && 0 === (null !== (GG = null === (bG = (ZG = this.deps).meshPending) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && LG && this.release("opening"), this.holds.has("seek") && LG && this.release("seek"), this.holds.has("crop") && !this.cropRunning && LG && this.release("crop");
        const UG = this.now();
        for (const [yG, kG] of this.holds) !VG.has(yG) && UG - kG >= YG && this.release(yG);
        this.saveRefused && !this.cropping && this.saveFailed(!1), SG && this.deps.onChange()
      }
      cropped() {
        (0, yG.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(GG) {
        switch (GG.reason) {
          case kG.ld.TooLarge:
            break;
          case kG.ld.Open:
          case kG.ld.NothingStaged: {
            this.opening = !1, this.release("opening");
            const bG = (0, LG.g)(GG.version) ? wG.e.replayTooOld : wG.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(bG), this.settleOpen(new Error(bG.text));
            break
          }
          case kG.ld.Crop:
            if (GG.code === kG.id.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(wG.e.cropFailed);
            break;
          case kG.ld.ModuleTrap:
          case kG.ld.ModuleLoad:
          case kG.ld.Port:
            this.moduleEnded(GG.reason === kG.ld.ModuleTrap ? wG.e.coreStopped : wG.e.cantOpen);
            break;
          case kG.ld.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${GG.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(GG) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(GG), this.settleOpen(new Error(GG.text))
      }
      saveDone(GG) {
        const bG = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bG || void 0 === bG || bG.resolve(GG)
      }
      saveFailed(GG) {
        this.rejectSave(new Error(GG ? wG.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(GG) {
        GG && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(wG.e.cropBusy.text)) : this.deps.notify(wG.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(GG) {
        const bG = this.pendingOpen;
        this.pendingOpen = null, null === GG ? null === bG || void 0 === bG || bG.resolve() : null === bG || void 0 === bG || bG.reject(GG)
      }
      rejectSave(GG) {
        const bG = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bG || void 0 === bG || bG.reject(GG)
      }
      hold(GG) {
        const bG = 0 === this.holds.size;
        this.holds.set(GG, this.now()), bG && this.deps.setHoldDraws(!0)
      }
      release(GG) {
        this.holds.delete(GG) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  61141: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      MESH_TAIL_MS: () => YG,
      PLAY_START_TIMEOUT_MS: () => kG,
      startWasmReplayVideoExport: () => pG
    });
    var wG = ZG(39671),
      SG = ZG(61147),
      LG = ZG(4810),
      yG = ZG(2391);
    const kG = SG.HOLD_TIMEOUT_MS + 5e3,
      UG = 50,
      YG = 200;

    function VG(GG) {
      var bG;
      return (null === (bG = GG.view) || void 0 === bG ? void 0 : bG.state) === LG.sd.Cropping || GG.Ik.includes("crop")
    }

    function pG(GG) {
      return (0, wG.d)((() => function(GG) {
        var bG, ZG, wG, SG, pG, fG;
        const QG = GG.viewer(),
          KG = null !== (bG = null === QG || void 0 === QG ? void 0 : QG.view) && void 0 !== bG ? bG : null,
          hG = GG.canvas();
        if (!QG || !KG || KG.state === LG.sd.None || 0 === KG.totalTicks || !hG || VG(QG)) return null;
        const dG = null !== (ZG = GG.now) && void 0 !== ZG ? ZG : () => performance.now(),
          JG = QG.id,
          rG = () => {
            const bG = GG.viewer();
            return bG === QG && bG.id === JG && bG.isOpen ? bG : null
          },
          zG = Math.min(null !== (wG = null === (SG = KG.mark) || void 0 === SG ? void 0 : SG.outTick) && void 0 !== wG ? wG : 1 / 0, KG.totalTicks - 1);
        let EG = null,
          oG = !1;
        const XG = () => {
          var GG, bG;
          return (null === (GG = rG()) || void 0 === GG || null === (bG = GG.view) || void 0 === bG ? void 0 : bG.state) === LG.sd.Playing
        };
        return {
          Fv: LG.Hd,
          playbackMarkInTick: null !== (pG = null === (fG = KG.mark) || void 0 === fG ? void 0 : fG.inTick) && void 0 !== pG ? pG : null,
          startFailure: () => {
            const GG = rG();
            return null === GG ? "Another replay opened. Export it again from there." : VG(GG) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var GG, bG;
            return null !== (GG = null === (bG = rG()) || void 0 === bG ? void 0 : bG.fileName) && void 0 !== GG ? GG : null
          },
          playbackSpeed: () => {
            var GG, bG, ZG;
            return null !== (GG = null === (bG = rG()) || void 0 === bG || null === (ZG = bG.view) || void 0 === ZG ? void 0 : ZG.speed) && void 0 !== GG ? GG : 1
          },
          setPlaybackSpeed: GG => {
            var bG;
            null === (bG = rG()) || void 0 === bG || bG.setSpeed(GG)
          },
          play: () => {
            var GG;
            oG = !1, EG = dG(), null === (GG = rG()) || void 0 === GG || GG.play()
          },
          pause: () => {
            var GG;
            null === (GG = rG()) || void 0 === GG || GG.pause()
          },
          seekToTick: GG => {
            var bG;
            null === (bG = rG()) || void 0 === bG || bG.seek(GG, !0)
          },
          seekSettled: () => new Promise((GG => {
            const bG = setInterval((() => {
              const ZG = rG();
              null === ZG ? (clearInterval(bG), GG()) : ZG.Ik.includes("seek") || (clearInterval(bG), setTimeout(GG, YG))
            }), UG)
          })),
          isPlaying: () => {
            var GG, bG, ZG;
            return null !== EG && null !== rG() && (!!XG() || !oG && (null !== (GG = null === (bG = rG()) || void 0 === bG || null === (ZG = bG.view) || void 0 === ZG ? void 0 : ZG.Tp) && void 0 !== GG ? GG : 0) < zG && dG() - EG < kG)
          },
          watchPlayback: bG => {
            const ZG = GG.watchViewer((() => {
                oG ||= null !== EG && XG(), bG()
              })),
              wG = setTimeout(bG, kG + 1);
            return () => {
              clearTimeout(wG), ZG()
            }
          },
          playbackFailure: () => {
            var GG, bG;
            const ZG = rG();
            return null === ZG ? "The replay closed before the video finished." : (null !== (GG = null === (bG = ZG.view) || void 0 === bG ? void 0 : bG.Tp) && void 0 !== GG ? GG : 0) >= zG ? null : oG ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => hG,
          closeViewer: () => {
            GG.requestViewer("close")
          },
          reopenViewer: () => {
            GG.requestViewer("open")
          },
          holdInput: yG.g
        }
      }(GG)))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);