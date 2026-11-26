export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  38165: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      e: () => vV
    });
    var JV = xV(657),
      YV = xV(40),
      UV = xV(38125);
    const yV = "replayFileKeptForReload",
      pV = "replayFileKeptForReloadAt",
      QV = "replayFileKeptForReloadTab",
      nV = 3e5,
      wV = 5e3;
    async function ZV(VV, eV) {
      const xV = Date.now(),
        UV = {
          at: xV,
          bytes: VV,
          source: eV
        },
        nV = await Promise.race([(async () => await YV.i.setItem(pV, xV) && YV.i.setItem(yV, UV))(), (0, JV.R)(wV).then((() => !1))]);
      nV || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const ZV = {
        at: xV,
        ZZ: nV
      };
      YV.q.setItem(QV, ZV)
    }
    async function vV() {
      var VV;
      const eV = YV.q.getItem(QV);
      null !== eV && YV.q.removeItem(QV);
      const xV = Date.now(),
        JV = await YV.i.getItem(pV),
        wV = null !== eV && xV - eV.at <= nV,
        ZV = null !== eV && JV === eV.at;
      let vV = null;
      if (null !== JV && (ZV || ("number" !== typeof JV || xV - JV > nV)) && (vV = wV && ZV && eV.ZZ ? await YV.i.getItem(yV) : null, await Promise.all([YV.i.removeItem(pV), YV.i.removeItem(yV)])), !wV) return null;
      if ((null === (VV = vV) || void 0 === VV ? void 0 : VV.at) !== eV.at) throw new Error(UV.b.replayNotKept.text);
      return {
        bytes: vV.bytes,
        source: vV.source
      }
    }
  },
  38161: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      e: () => UV,
      i: () => YV
    });
    const JV = [9];

    function YV(VV) {
      return JV.includes(VV)
    }

    function UV(VV) {
      return null !== VV && VV >= 3 && VV < JV[0]
    }
  },
  38125: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => nV,
      j: () => QV
    });
    var JV = xV(32);
    const YV = 1500,
      UV = 1e3,
      yV = {
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
      pV = new Set(Object.values(yV).filter((VV => "Error" === VV.type)).map((VV => VV.text)));

    function QV(VV) {
      return VV instanceof Error && pV.has(VV.message) ? VV.message : void 0
    }

    function nV(VV) {
      var eV;
      const xV = null !== (eV = VV.timeoutMs) && void 0 !== eV ? eV : "Error" === VV.type ? YV : UV;
      JV.h.QZ("showBottomMessage", {
        message: VV.text,
        timeoutLength: xV,
        type: VV.type
      })
    }
  },
  38172: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      c: () => YV
    });
    const JV = "data-replay-ui-active",
      YV = [{
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
  38174: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      g: () => ZV,
      k: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(38172);

    function yV() {
      const VV = {};
      for (const {
          group: eV
        }
        of UV.c) VV[eV] = !0;
      return VV
    }
    let pV = yV();

    function QV() {
      YV.h.QZ("replayViewer|uiVisibilityChanged")
    }

    function nV() {
      return pV
    }

    function wV(VV, eV) {
      pV[VV] !== eV && (pV = {
        ...pV,
        [VV]: eV
      }, "nametag" === VV && JV.b.set({
        areNametagsHidden: !eV
      }), QV())
    }

    function ZV() {
      pV = yV(), JV.b.set({
        areNametagsHidden: !1
      }), QV()
    }
  },
  40479: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => GV
    });
    var JV = xV(1846),
      YV = xV(1439),
      UV = xV(62),
      yV = xV(1146),
      pV = xV.n(yV),
      QV = xV(1551),
      nV = xV(99);
    const wV = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      ZV = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function vV(VV) {
      return "webm" === VV ? wV : ZV
    }

    function rV(VV) {
      for (const eV of VV)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(eV)) return eV;
      return null
    }

    function kV(VV) {
      return null !== rV(vV(VV))
    }
    var bV = xV(1321);
    const EV = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function BV() {
      return kV("webm") ? "webm" : kV("mp4") ? "mp4" : "webm"
    }

    function jV(VV) {
      let {
        cards: eV
      } = VV;
      return (0, bV.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: eV.map((VV => (0, bV.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, bV.jsx)("div", {
            className: pV()("ReplayVideoExportOptionCard", {
              Selected: VV.selected,
              Disabled: VV.disabled
            }),
            onClick: () => {
              VV.disabled || VV.onSelect()
            },
            children: (0, bV.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, bV.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: VV.label
              }), (0, bV.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: VV.description
              })]
            })
          }), VV.disabled && VV.disabledReason && (0, bV.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: VV.disabledReason
          })]
        }, VV.id)))
      })
    }
    const qV = (0, UV.memo)((function(VV) {
      let {
        hasPlaybackMark: eV,
        canIncludeUi: xV,
        includeUiDisabledReason: JV,
        selectionRef: YV,
        closePopup: yV
      } = VV;
      const pV = kV("webm") || kV("mp4"),
        [wV, ZV] = (0, UV.useState)(BV),
        [vV, rV] = (0, UV.useState)(xV),
        qV = pV && kV(wV);
      if (!pV) {
        const VV = (0, nV.isMobile)() ? "screen recording" : "OBS";
        return (0, bV.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, bV.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, bV.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${VV}.`
          }), (0, bV.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, bV.jsx)(QV.E, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                YV.options = null, yV()
              },
              children: "Close"
            })
          })]
        })
      }
      const tV = eV ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        FV = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !vV,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            rV(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: vV,
          disabled: !xV,
          disabledReason: JV,
          onSelect: () => {
            rV(!0)
          }
        }],
        TV = EV.map((VV => {
          const eV = kV(VV.id);
          return {
            id: VV.id,
            label: VV.label,
            description: VV.description,
            selected: wV === VV.id,
            disabled: !eV,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              ZV(VV.id)
            }
          }
        }));
      return (0, bV.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, bV.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, bV.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: tV
        }), (0, bV.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, bV.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, bV.jsx)(jV, {
            cards: FV
          })]
        }), (0, bV.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, bV.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, bV.jsx)(jV, {
            cards: TV
          })]
        }), (0, bV.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, bV.jsx)(QV.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !qV,
            onClick: () => {
              YV.options = {
                format: wV,
                includeUi: xV && vV
              }, yV()
            },
            children: "Export"
          }), (0, bV.jsx)(QV.E, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              YV.options = null, yV()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var tV = xV(5353),
      FV = xV(38172),
      TV = xV(38174);
    let PV = null;

    function AV() {
      return function() {
        const VV = (0, TV.d)();
        for (const {
            group: eV,
            dataAttr: xV
          }
          of FV.c)
          if (xV && VV[eV]) return !0;
        return !1
      }() ? function() {
        var VV;
        return "function" === typeof(null === (VV = navigator.mediaDevices) || void 0 === VV ? void 0 : VV.getDisplayMedia)
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
    async function NV(VV, eV, xV) {
      return VV ? async function() {
        const VV = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const eV of VV.getAudioTracks()) eV.stop(), VV.removeTrack(eV);
        return VV
      }(): eV().captureStream(Math.max(1, Math.round(xV)))
    }
    var XV = xV(40285);
    let MV = !1;

    function zV(VV) {
      VV.holdInput(!1), (0, XV.f)(!1)
    }
    async function GV(VV) {
      var eV, xV;
      if ((0, XV.c)() || MV) return;
      const UV = VV();
      if (!UV) return;
      MV = !0;
      let yV = null;
      const pV = UV.playbackMarkInTick,
        {
          canIncludeUi: QV,
          includeUiDisabledReason: nV
        } = AV();
      try {
        yV = await async function(VV) {
          let {
            hasPlaybackMark: eV,
            canIncludeUi: xV,
            includeUiDisabledReason: JV
          } = VV;
          const UV = {
              options: null
            },
            yV = YV.NotificationProvider.showCustomPopup({
              body: VV => (0, bV.jsx)(qV, {
                hasPlaybackMark: eV,
                canIncludeUi: xV,
                includeUiDisabledReason: JV,
                selectionRef: UV,
                closePopup: VV
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await yV.getResult() ? null : UV.options
        }({
          hasPlaybackMark: null !== pV,
          canIncludeUi: QV,
          includeUiDisabledReason: nV
        })
      } finally {
        MV = !1
      }
      if (!yV) return;
      const wV = null !== (eV = null === (xV = UV.startFailure) || void 0 === xV ? void 0 : xV.call(UV)) && void 0 !== eV ? eV : null;
      if (null !== wV) return void YV.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: wV
      });
      if (! function(VV) {
          return !(0, XV.c)() && ((0, XV.f)(!0), VV.holdInput(!0), !0)
        }(UV)) return;
      let ZV = null;
      try {
        ZV = await NV(yV.includeUi, (() => UV.canvas()), UV.KD)
      } catch (WV) {
        return console.error("Failed to create video stream for export", WV), zV(UV), void YV.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: WV instanceof Error ? WV.message : "Could not start capture."
        })
      }
      let kV = null;
      const EV = [];
      let BV = null,
        jV = null;
      try {
        var FV, TV, GV;
        kV = UV.playbackSpeed(), UV.closeViewer(), UV.setPlaybackSpeed(1), UV.pause(), UV.seekToTick(null !== pV && void 0 !== pV ? pV : 0);
        const VV = await async function() {
          const VV = tV.Howler.masterGain;
          if (!tV.Howler.ctx || !VV) return null;
          await tV.Howler.ctx.resume();
          const eV = tV.Howler.ctx.createMediaStreamDestination();
          VV.connect(eV), PV = eV;
          const [xV] = eV.stream.getAudioTracks();
          return null !== xV && void 0 !== xV ? xV : null
        }();
        jV = new MediaStream;
        for (const JV of ZV.getVideoTracks()) jV.addTrack(JV);
        VV && jV.addTrack(VV);
        const eV = function(VV) {
          const eV = rV(vV(VV));
          if (!eV) throw new Error(`No MediaRecorder mime type available for ${VV}`);
          return eV
        }(yV.format);
        BV = new MediaRecorder(jV, {
          mimeType: eV,
          videoBitsPerSecond: 8e6
        }), BV.ondataavailable = VV => {
          VV.data.size > 0 && EV.push(VV.data)
        };
        const xV = new Promise((VV => {
          BV.onstop = () => {
            VV()
          }
        }));
        await (null === (FV = UV.seekSettled) || void 0 === FV ? void 0 : FV.call(UV));
        const [QV] = ZV.getVideoTracks();
        BV.start(250), UV.play();
        const nV = await
        function(VV, eV, xV) {
          return new Promise((JV => {
            let YV = !1;
            const UV = VV => {
                YV || (YV = !0, pV(), eV.removeEventListener("ended", yV), JV(VV))
              },
              yV = () => {
                UV("captureLost")
              },
              pV = VV.watchPlayback((() => {
                VV.isPlaying() || UV("completed")
              }));
            eV.addEventListener("ended", yV), xV.onerror = () => {
              UV("recorderError")
            }, "ended" !== eV.readyState ? VV.isPlaying() || UV("completed") : UV("captureLost")
          }))
        }(UV, QV, BV);
        if (UV.pause(), "inactive" !== BV.state && BV.stop(), await xV, "captureLost" === nV) return void YV.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === nV) return void YV.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const wV = null !== (TV = null === (GV = UV.playbackFailure) || void 0 === GV ? void 0 : GV.call(UV)) && void 0 !== TV ? TV : null;
        if (null !== wV) return void YV.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${wV} Nothing was saved.`
        });
        const bV = new Blob(EV, {
          type: eV
        });
        bV.size > 0 ? (0, JV.c)(bV, function(VV, eV) {
          const xV = function(VV) {
            return "mp4" === VV ? "mp4" : "webm"
          }(eV);
          if (VV) return `${VV.replace(/\.bloxdreplay$/i,"")}.${xV}`;
          return `bloxd-replay-${Date.now()}.${xV}`
        }(UV.fileName(), yV.format)) : YV.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (WV) {
        console.error("Replay video export failed", WV), YV.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: WV instanceof Error ? WV.message : "Something went wrong while exporting."
        })
      } finally {
        if (BV && "inactive" !== BV.state) try {
          BV.stop()
        } catch (WV) {
          console.error("Failed to stop MediaRecorder", WV)
        }! function() {
          const VV = tV.Howler.masterGain;
          if (PV && VV) {
            try {
              VV.disconnect(PV)
            } catch (WV) {
              console.error("Failed to disconnect Howler export tee", WV)
            }
            PV = null
          } else PV = null
        }();
        for (const VV of ZV.getTracks()) VV.stop();
        if (jV)
          for (const VV of jV.getTracks()) VV.stop();
        null !== kV && UV.setPlaybackSpeed(kV), UV.pause(), zV(UV), UV.reopenViewer()
      }
    }
  },
  5353: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Howl: () => YV.Howl,
      Howler: () => YV.Howler,
      musicOutput: () => EV,
      readyAudioContext: () => BV
    });
    var JV, YV = xV(5357),
      UV = xV(3886),
      yV = xV(5137);
    const pV = YV.Howler;

    function QV() {
      var VV, eV;
      if (pV.ctx || !pV.usingWebAudio || "undefined" === typeof AudioContext || !(0, yV.i)()) return;
      const xV = navigator.audioSession;
      let JV;
      "auto" === (null === xV || void 0 === xV ? void 0 : xV.type) && (xV.type = "ambient");
      try {
        JV = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const YV = JV.createGain();
      YV.gain.setValueAtTime(pV._muted ? 0 : null !== (VV = pV._volume) && void 0 !== VV ? VV : 1, JV.currentTime), YV.connect(JV.destination), pV.ctx = JV, pV.masterGain = YV, null === (eV = pV._setup) || void 0 === eV || eV.call(pV)
    }
    pV._mobileUnloaded = !0;
    const nV = pV.volume.bind(YV.Howler);
    pV.volume = function() {
      return QV(), nV(...arguments)
    };
    const wV = pV.mute.bind(YV.Howler);
    pV.mute = VV => (QV(), wV(VV));
    const ZV = YV.Howl.prototype,
      vV = ZV.init;

    function rV() {
      for (; pV._html5AudioPool.length < pV.html5PoolSize;) {
        const VV = new Audio;
        VV._unlocked = !0, pV._releaseHtml5Audio(VV)
      }
      for (const eV of pV._howls)
        if (!eV._webAudio)
          for (const xV of eV._getSoundIds()) {
            var VV;
            const JV = null === (VV = eV._soundById(xV)) || void 0 === VV ? void 0 : VV._node;
            JV && !JV._unlocked && (JV._unlocked = !0, JV.load())
          }
    }
    ZV.init = function(VV) {
      return QV(), vV.call(this, VV)
    }, (0, yV.i)() && (pV._unlockAudio = () => {
      const VV = pV.ctx;
      if (pV._audioUnlocked || !VV) return;
      pV.autoUnlock = !1;
      const eV = VV.createBuffer(1, 1, 22050);
      pV._scratchBuffer = eV;
      const xV = new AbortController;
      let JV = "afterPaint";
      const YV = () => {
          var JV;
          if (pV._audioUnlocked) return;
          null === (JV = pV._autoResume) || void 0 === JV || JV.call(pV);
          const YV = VV.createBufferSource();
          YV.buffer = eV, YV.connect(VV.destination), YV.start(0), VV.resume().catch((() => {})), YV.onended = () => {
            YV.disconnect(0), pV._audioUnlocked = !0, xV.abort();
            for (const VV of pV._howls) VV._emit("unlock")
          }
        },
        QV = () => {
          rV(), YV()
        },
        nV = eV => {
          if (rV(), "inTap" === JV) {
            if ("running" === VV.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), YV()
          } else "afterPaint" === JV && (JV = "queued", (0, UV.c)(eV.timeStamp, (() => {
            JV = "inTap", YV()
          })))
        };
      for (const UV of ["touchstart", "touchend"]) document.addEventListener(UV, QV, {
        capture: !0,
        signal: xV.signal
      });
      for (const UV of yV.c) document.addEventListener(UV, nV, {
        capture: !0,
        signal: xV.signal
      })
    });
    let kV = 0;
    const bV = null === (JV = pV._autoSuspend) || void 0 === JV ? void 0 : JV.bind(YV.Howler);

    function EV() {
      BV();
      const {
        ctx: VV,
        masterGain: eV
      } = pV;
      return VV && eV ? {
        ctx: VV,
        destination: eV,
        holdAwake: VV => {
          var eV, xV;
          (kV += VV ? 1 : -1, VV) ? null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV): null === (xV = pV._autoSuspend) || void 0 === xV || xV.call(pV)
        },
        wake: () => {
          var eV;
          "running" !== VV.state && (null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV), VV.resume().catch((() => {})))
        }
      } : null
    }

    function BV() {
      var VV;
      (pV.volume(), pV.ctx && pV.autoUnlock) && (null === (VV = pV._unlockAudio) || void 0 === VV || VV.call(pV))
    }
    bV && (pV._autoSuspend = () => kV > 0 ? YV.Howler : bV())
  },
  53866: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      g: () => YV
    });
    const JV = ["recording", "freecam", "keyframe"];

    function YV() {
      const VV = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(VV[1]) << 32n | BigInt(VV[0])
    }
  },
  63638: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      HOLD_TIMEOUT_MS: () => nV,
      ReplayViewer: () => ZV
    });
    var JV = xV(38125),
      YV = xV(38165),
      UV = xV(38161),
      yV = xV(38174),
      pV = xV(5297),
      QV = xV(53866);
    const nV = 1e4,
      wV = new Set(["Xk"]);
    class ZV {
      constructor(VV) {
        var eV;
        this.deps = VV, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (eV = VV.now) && void 0 !== eV ? eV : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== pV.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get hn() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? JV.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(VV, eV) {
        var xV, UV, yV, QV;
        const {
          client: nV
        } = this.deps;
        if (!this.playback) {
          if (!nV.setPlayback(!0)) throw new Error(JV.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const wV = this.epoch;
        let ZV;
        try {
          ZV = await nV.open(VV, (() => (0, YV.d)(VV, eV)))
        } finally {
          this.loadingOpens--
        }
        if (wV !== this.epoch && "reloading" !== ZV) throw new Error(JV.b.coreStopped.text);
        if ("opening" !== ZV) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const VV = function(VV) {
            switch (VV) {
              case "reloading":
                return null;
              case "stopped":
              case pV.fd.ModuleTrap:
                return JV.b.coreStopped;
              case pV.fd.ModuleLoad:
                return JV.b.viewerLoadFailed;
              case pV.fd.TooLarge:
                return JV.b.cantOpen
            }
          }(ZV);
          if (null === VV) return;
          throw new Error(VV.text)
        }
        return this.rejectSave(new Error(JV.b.saveClosed.text)), this.fileName = null !== (xV = null !== (UV = eV.fileName) && void 0 !== UV ? UV : null === (yV = eV.fileHandle) || void 0 === yV ? void 0 : yV.name) && void 0 !== xV ? xV : null, this.fileHandle = null !== (QV = eV.fileHandle) && void 0 !== QV ? QV : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((VV, eV) => {
          this.pendingOpen = {
            resolve: VV,
            reject: eV
          }
        }))
      }
      play() {
        this.holds.has("Xk") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Xk")
      }
      seek(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = this.lastView;
        null !== xV && (eV || VV < xV.iZ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(VV, eV)
      }
      setSpeed(VV) {
        this.deps.client.setSpeed(VV)
      }
      setCameraMode(VV) {
        this.deps.client.setCameraMode(VV)
      }
      cycleCameraMode() {
        const VV = this.lastView;
        null !== VV && VV.state !== pV.qd.None && this.setCameraMode(QV.e[(QV.e.indexOf(VV.cameraMode) + 1) % QV.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(VV) {
        this.edited(this.deps.client.setKeyframe(VV))
      }
      moveKeyframe(VV, eV) {
        this.edited(this.deps.client.moveKeyframe(VV, eV))
      }
      deleteKeyframes(VV, eV) {
        this.edited(this.deps.client.deleteKeyframes(VV, eV))
      }
      setMark(VV) {
        this.edited(this.deps.client.setMark(VV))
      }
      crop(VV, eV) {
        return !(eV <= VV) && (null !== this.pendingSave ? (this.deps.notify(JV.b.saveBusy), !1) : !!this.deps.client.crop(VV, eV) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(JV.b.saveBusy.text)) : new Promise(((VV, eV) => {
          const xV = {
            resolve: VV,
            reject: eV
          };
          this.pendingSave = xV, this.editsAtSave = this.edits, this.deps.client.save((0, QV.g)()).then((VV => {
            this.pendingSave === xV && this.saveStarted(VV)
          }), (VV => {
            this.pendingSave === xV && this.rejectSave(VV instanceof Error ? VV : new Error(String(VV)))
          }))
        }))
      }
      saveStarted(VV) {
        switch (VV) {
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
      markSaved(VV, eV) {
        var xV, JV;
        this.fileHandle = VV, this.fileName = null !== (xV = null !== (JV = null === VV || void 0 === VV ? void 0 : VV.name) && void 0 !== JV ? JV : eV) && void 0 !== xV ? xV : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(JV.b.coreStopped.text)), this.rejectSave(new Error(JV.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var VV, eV, xV;
        const JV = this.deps.client.view(),
          YV = JV !== this.lastView;
        this.lastView = JV, this.opening && null !== JV && JV.state !== pV.qd.None && JV.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yV.g)()), this.cropAsked ? (this.cropAsked = !1, null !== JV && JV.state === pV.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== JV && JV.state !== pV.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const UV = 0 === this.settleFrames && 0 === (null !== (VV = null === (eV = (xV = this.deps).meshPending) || void 0 === eV ? void 0 : eV.call(xV)) && void 0 !== VV ? VV : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && UV && this.release("opening"), this.holds.has("seek") && UV && this.release("seek"), this.holds.has("crop") && !this.cropRunning && UV && this.release("crop");
        const QV = this.now();
        for (const [yV, pV] of this.holds) !wV.has(yV) && QV - pV >= nV && this.release(yV);
        this.saveRefused && !this.cropping && this.saveFailed(!1), YV && this.deps.onChange()
      }
      cropped() {
        (0, yV.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(VV) {
        switch (VV.reason) {
          case pV.fd.TooLarge:
            break;
          case pV.fd.Open:
          case pV.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const eV = (0, UV.e)(VV.version) ? JV.b.replayTooOld : JV.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(eV), this.settleOpen(new Error(eV.text));
            break
          }
          case pV.fd.Crop:
            if (VV.code === pV.ed.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(JV.b.cropFailed);
            break;
          case pV.fd.ModuleTrap:
          case pV.fd.ModuleLoad:
          case pV.fd.Port:
            this.moduleEnded(VV.reason === pV.fd.ModuleTrap ? JV.b.coreStopped : JV.b.cantOpen);
            break;
          case pV.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${VV.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(VV) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(VV), this.settleOpen(new Error(VV.text))
      }
      saveDone(VV) {
        const eV = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === eV || void 0 === eV || eV.resolve(VV)
      }
      saveFailed(VV) {
        this.rejectSave(new Error(VV ? JV.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(VV) {
        VV && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(JV.b.cropBusy.text)) : this.deps.notify(JV.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(VV) {
        const eV = this.pendingOpen;
        this.pendingOpen = null, null === VV ? null === eV || void 0 === eV || eV.resolve() : null === eV || void 0 === eV || eV.reject(VV)
      }
      rejectSave(VV) {
        const eV = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === eV || void 0 === eV || eV.reject(VV)
      }
      hold(VV) {
        const eV = 0 === this.holds.size;
        this.holds.set(VV, this.now()), eV && this.deps.setHoldDraws(!0)
      }
      release(VV) {
        this.holds.delete(VV) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  63636: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      MESH_TAIL_MS: () => nV,
      PLAY_START_TIMEOUT_MS: () => pV,
      startWasmReplayVideoExport: () => ZV
    });
    var JV = xV(40479),
      YV = xV(63638),
      UV = xV(5297),
      yV = xV(2665);
    const pV = YV.HOLD_TIMEOUT_MS + 5e3,
      QV = 50,
      nV = 200;

    function wV(VV) {
      var eV;
      return (null === (eV = VV.view) || void 0 === eV ? void 0 : eV.state) === UV.qd.Cropping || VV.hn.includes("crop")
    }

    function ZV(VV) {
      return (0, JV.b)((() => function(VV) {
        var eV, xV, JV, YV, ZV, vV;
        const rV = VV.viewer(),
          kV = null !== (eV = null === rV || void 0 === rV ? void 0 : rV.view) && void 0 !== eV ? eV : null,
          bV = VV.canvas();
        if (!rV || !kV || kV.state === UV.qd.None || 0 === kV.totalTicks || !bV || wV(rV)) return null;
        const EV = null !== (xV = VV.now) && void 0 !== xV ? xV : () => performance.now(),
          BV = rV.id,
          jV = () => {
            const eV = VV.viewer();
            return eV === rV && eV.id === BV && eV.isOpen ? eV : null
          },
          qV = Math.min(null !== (JV = null === (YV = kV.mark) || void 0 === YV ? void 0 : YV.outTick) && void 0 !== JV ? JV : 1 / 0, kV.totalTicks - 1);
        let tV = null,
          FV = !1;
        const TV = () => {
          var VV, eV;
          return (null === (VV = jV()) || void 0 === VV || null === (eV = VV.view) || void 0 === eV ? void 0 : eV.state) === UV.qd.Playing
        };
        return {
          KD: UV.Cd,
          playbackMarkInTick: null !== (ZV = null === (vV = kV.mark) || void 0 === vV ? void 0 : vV.inTick) && void 0 !== ZV ? ZV : null,
          startFailure: () => {
            const VV = jV();
            return null === VV ? "Another replay opened. Export it again from there." : wV(VV) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var VV, eV;
            return null !== (VV = null === (eV = jV()) || void 0 === eV ? void 0 : eV.fileName) && void 0 !== VV ? VV : null
          },
          playbackSpeed: () => {
            var VV, eV, xV;
            return null !== (VV = null === (eV = jV()) || void 0 === eV || null === (xV = eV.view) || void 0 === xV ? void 0 : xV.speed) && void 0 !== VV ? VV : 1
          },
          setPlaybackSpeed: VV => {
            var eV;
            null === (eV = jV()) || void 0 === eV || eV.setSpeed(VV)
          },
          play: () => {
            var VV;
            FV = !1, tV = EV(), null === (VV = jV()) || void 0 === VV || VV.play()
          },
          pause: () => {
            var VV;
            null === (VV = jV()) || void 0 === VV || VV.pause()
          },
          seekToTick: VV => {
            var eV;
            null === (eV = jV()) || void 0 === eV || eV.seek(VV, !0)
          },
          seekSettled: () => new Promise((VV => {
            const eV = setInterval((() => {
              const xV = jV();
              null === xV ? (clearInterval(eV), VV()) : xV.hn.includes("seek") || (clearInterval(eV), setTimeout(VV, nV))
            }), QV)
          })),
          isPlaying: () => {
            var VV, eV, xV;
            return null !== tV && null !== jV() && (!!TV() || !FV && (null !== (VV = null === (eV = jV()) || void 0 === eV || null === (xV = eV.view) || void 0 === xV ? void 0 : xV.iZ) && void 0 !== VV ? VV : 0) < qV && EV() - tV < pV)
          },
          watchPlayback: eV => {
            const xV = VV.watchViewer((() => {
                FV ||= null !== tV && TV(), eV()
              })),
              JV = setTimeout(eV, pV + 1);
            return () => {
              clearTimeout(JV), xV()
            }
          },
          playbackFailure: () => {
            var VV, eV;
            const xV = jV();
            return null === xV ? "The replay closed before the video finished." : (null !== (VV = null === (eV = xV.view) || void 0 === eV ? void 0 : eV.iZ) && void 0 !== VV ? VV : 0) >= qV ? null : FV ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => bV,
          closeViewer: () => {
            VV.requestViewer("close")
          },
          reopenViewer: () => {
            VV.requestViewer("open")
          },
          holdInput: yV.c
        }
      }(VV)))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);