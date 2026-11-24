export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37062: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      f: () => rB
    });
    var QB = zB(658),
      nB = zB(41),
      dB = zB(37012);
    const IB = "replayFileKeptForReload",
      NB = "replayFileKeptForReloadAt",
      uB = "replayFileKeptForReloadTab",
      UB = 3e5,
      aB = 5e3;
    async function pB(BB, jB) {
      const zB = Date.now(),
        dB = {
          at: zB,
          bytes: BB,
          source: jB
        },
        UB = await Promise.race([(async () => await nB.g.setItem(NB, zB) && nB.g.setItem(IB, dB))(), (0, QB.M)(aB).then((() => !1))]);
      UB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pB = {
        at: zB,
        Cs: UB
      };
      nB.k.setItem(uB, pB)
    }
    async function rB() {
      var BB;
      const jB = nB.k.getItem(uB);
      null !== jB && nB.k.removeItem(uB);
      const zB = Date.now(),
        QB = await nB.g.getItem(NB),
        aB = null !== jB && zB - jB.at <= UB,
        pB = null !== jB && QB === jB.at;
      let rB = null;
      if (null !== QB && (pB || ("number" !== typeof QB || zB - QB > UB)) && (rB = aB && pB && jB.Cs ? await nB.g.getItem(IB) : null, await Promise.all([nB.g.removeItem(NB), nB.g.removeItem(IB)])), !aB) return null;
      if ((null === (BB = rB) || void 0 === BB ? void 0 : BB.at) !== jB.at) throw new Error(dB.d.replayNotKept.text);
      return {
        bytes: rB.bytes,
        source: rB.source
      }
    }
  },
  37059: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      f: () => dB,
      j: () => nB
    });
    const QB = [9];

    function nB(BB) {
      return QB.includes(BB)
    }

    function dB(BB) {
      return null !== BB && BB >= 3 && BB < QB[0]
    }
  },
  37012: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => UB,
      j: () => uB
    });
    var QB = zB(31);
    const nB = 1500,
      dB = 1e3,
      IB = {
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
      NB = new Set(Object.values(IB).filter((BB => "Error" === BB.type)).map((BB => BB.text)));

    function uB(BB) {
      return BB instanceof Error && NB.has(BB.message) ? BB.message : void 0
    }

    function UB(BB) {
      var jB;
      const zB = null !== (jB = BB.timeoutMs) && void 0 !== jB ? jB : "Error" === BB.type ? nB : dB;
      QB.n.Ly("showBottomMessage", {
        message: BB.text,
        timeoutLength: zB,
        type: BB.type
      })
    }
  },
  37073: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      f: () => nB
    });
    const QB = "data-replay-ui-active",
      nB = [{
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
  37082: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      g: () => pB,
      k: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(37073);

    function IB() {
      const BB = {};
      for (const {
          group: jB
        }
        of dB.f) BB[jB] = !0;
      return BB
    }
    let NB = IB();

    function uB() {
      nB.n.Ly("replayViewer|uiVisibilityChanged")
    }

    function UB() {
      return NB
    }

    function aB(BB, jB) {
      NB[BB] !== jB && (NB = {
        ...NB,
        [BB]: jB
      }, "nametag" === BB && QB.c.set({
        areNametagsHidden: !jB
      }), uB())
    }

    function pB() {
      NB = IB(), QB.c.set({
        areNametagsHidden: !1
      }), uB()
    }
  },
  39343: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => HB
    });
    var QB = zB(1794),
      nB = zB(1381),
      dB = zB(62),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(1478),
      UB = zB(106);
    const aB = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      pB = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function rB(BB) {
      return "webm" === BB ? aB : pB
    }

    function sB(BB) {
      for (const jB of BB)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(jB)) return jB;
      return null
    }

    function JB(BB) {
      return null !== sB(rB(BB))
    }
    var mB = zB(1148);
    const yB = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function kB() {
      return JB("webm") ? "webm" : JB("mp4") ? "mp4" : "webm"
    }

    function GB(BB) {
      let {
        cards: jB
      } = BB;
      return (0, mB.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: jB.map((BB => (0, mB.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, mB.jsx)("div", {
            className: NB()("ReplayVideoExportOptionCard", {
              Selected: BB.selected,
              Disabled: BB.disabled
            }),
            onClick: () => {
              BB.disabled || BB.onSelect()
            },
            children: (0, mB.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, mB.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: BB.label
              }), (0, mB.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: BB.description
              })]
            })
          }), BB.disabled && BB.disabledReason && (0, mB.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: BB.disabledReason
          })]
        }, BB.id)))
      })
    }
    const LB = (0, dB.memo)((function(BB) {
      let {
        hasPlaybackMark: jB,
        canIncludeUi: zB,
        includeUiDisabledReason: QB,
        selectionRef: nB,
        closePopup: IB
      } = BB;
      const NB = JB("webm") || JB("mp4"),
        [aB, pB] = (0, dB.useState)(kB),
        [rB, sB] = (0, dB.useState)(zB),
        LB = NB && JB(aB);
      if (!NB) {
        const BB = (0, UB.isMobile)() ? "screen recording" : "OBS";
        return (0, mB.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, mB.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, mB.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
          }), (0, mB.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, mB.jsx)(uB.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                nB.options = null, IB()
              },
              children: "Close"
            })
          })]
        })
      }
      const gB = jB ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        tB = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !rB,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            sB(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: rB,
          disabled: !zB,
          disabledReason: QB,
          onSelect: () => {
            sB(!0)
          }
        }],
        SB = yB.map((BB => {
          const jB = JB(BB.id);
          return {
            id: BB.id,
            label: BB.label,
            description: BB.description,
            selected: aB === BB.id,
            disabled: !jB,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              pB(BB.id)
            }
          }
        }));
      return (0, mB.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, mB.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, mB.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: gB
        }), (0, mB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, mB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, mB.jsx)(GB, {
            cards: tB
          })]
        }), (0, mB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, mB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, mB.jsx)(GB, {
            cards: SB
          })]
        }), (0, mB.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, mB.jsx)(uB.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !LB,
            onClick: () => {
              nB.options = {
                format: aB,
                includeUi: zB && rB
              }, IB()
            },
            children: "Export"
          }), (0, mB.jsx)(uB.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              nB.options = null, IB()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var gB = zB(4950),
      tB = zB(37073),
      SB = zB(37082);
    let MB = null;

    function EB() {
      return function() {
        const BB = (0, SB.d)();
        for (const {
            group: jB,
            dataAttr: zB
          }
          of tB.f)
          if (zB && BB[jB]) return !0;
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
    async function iB(BB, jB, zB) {
      return BB ? async function() {
        const BB = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const jB of BB.getAudioTracks()) jB.stop(), BB.removeTrack(jB);
        return BB
      }(): jB().captureStream(Math.max(1, Math.round(zB)))
    }
    var qB = zB(39179);
    let fB = !1;

    function oB(BB) {
      BB.holdInput(!1), (0, qB.f)(!1)
    }
    async function HB(BB) {
      var jB, zB;
      if ((0, qB.d)() || fB) return;
      const dB = BB();
      if (!dB) return;
      fB = !0;
      let IB = null;
      const NB = dB.playbackMarkInTick,
        {
          canIncludeUi: uB,
          includeUiDisabledReason: UB
        } = EB();
      try {
        IB = await async function(BB) {
          let {
            hasPlaybackMark: jB,
            canIncludeUi: zB,
            includeUiDisabledReason: QB
          } = BB;
          const dB = {
              options: null
            },
            IB = nB.NotificationProvider.showCustomPopup({
              body: BB => (0, mB.jsx)(LB, {
                hasPlaybackMark: jB,
                canIncludeUi: zB,
                includeUiDisabledReason: QB,
                selectionRef: dB,
                closePopup: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await IB.getResult() ? null : dB.options
        }({
          hasPlaybackMark: null !== NB,
          canIncludeUi: uB,
          includeUiDisabledReason: UB
        })
      } finally {
        fB = !1
      }
      if (!IB) return;
      const aB = null !== (jB = null === (zB = dB.startFailure) || void 0 === zB ? void 0 : zB.call(dB)) && void 0 !== jB ? jB : null;
      if (null !== aB) return void nB.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: aB
      });
      if (! function(BB) {
          return !(0, qB.d)() && ((0, qB.f)(!0), BB.holdInput(!0), !0)
        }(dB)) return;
      let pB = null;
      try {
        pB = await iB(IB.includeUi, (() => dB.canvas()), dB.KF)
      } catch (DB) {
        return console.error("Failed to create video stream for export", DB), oB(dB), void nB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: DB instanceof Error ? DB.message : "Could not start capture."
        })
      }
      let JB = null;
      const yB = [];
      let kB = null,
        GB = null;
      try {
        var tB, SB, HB;
        JB = dB.playbackSpeed(), dB.closeViewer(), dB.setPlaybackSpeed(1), dB.pause(), dB.seekToTick(null !== NB && void 0 !== NB ? NB : 0);
        const BB = await async function() {
          const BB = gB.Howler.masterGain;
          if (!gB.Howler.ctx || !BB) return null;
          await gB.Howler.ctx.resume();
          const jB = gB.Howler.ctx.createMediaStreamDestination();
          BB.connect(jB), MB = jB;
          const [zB] = jB.stream.getAudioTracks();
          return null !== zB && void 0 !== zB ? zB : null
        }();
        GB = new MediaStream;
        for (const QB of pB.getVideoTracks()) GB.addTrack(QB);
        BB && GB.addTrack(BB);
        const jB = function(BB) {
          const jB = sB(rB(BB));
          if (!jB) throw new Error(`No MediaRecorder mime type available for ${BB}`);
          return jB
        }(IB.format);
        kB = new MediaRecorder(GB, {
          mimeType: jB,
          videoBitsPerSecond: 8e6
        }), kB.ondataavailable = BB => {
          BB.data.size > 0 && yB.push(BB.data)
        };
        const zB = new Promise((BB => {
          kB.onstop = () => {
            BB()
          }
        }));
        await (null === (tB = dB.seekSettled) || void 0 === tB ? void 0 : tB.call(dB));
        const [uB] = pB.getVideoTracks();
        kB.start(250), dB.play();
        const UB = await
        function(BB, jB, zB) {
          return new Promise((QB => {
            let nB = !1;
            const dB = BB => {
                nB || (nB = !0, NB(), jB.removeEventListener("ended", IB), QB(BB))
              },
              IB = () => {
                dB("captureLost")
              },
              NB = BB.watchPlayback((() => {
                BB.isPlaying() || dB("completed")
              }));
            jB.addEventListener("ended", IB), zB.onerror = () => {
              dB("recorderError")
            }, "ended" !== jB.readyState ? BB.isPlaying() || dB("completed") : dB("captureLost")
          }))
        }(dB, uB, kB);
        if (dB.pause(), "inactive" !== kB.state && kB.stop(), await zB, "captureLost" === UB) return void nB.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === UB) return void nB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const aB = null !== (SB = null === (HB = dB.playbackFailure) || void 0 === HB ? void 0 : HB.call(dB)) && void 0 !== SB ? SB : null;
        if (null !== aB) return void nB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${aB} Nothing was saved.`
        });
        const mB = new Blob(yB, {
          type: jB
        });
        mB.size > 0 ? (0, QB.e)(mB, function(BB, jB) {
          const zB = function(BB) {
            return "mp4" === BB ? "mp4" : "webm"
          }(jB);
          if (BB) return `${BB.replace(/\.bloxdreplay$/i,"")}.${zB}`;
          return `bloxd-replay-${Date.now()}.${zB}`
        }(dB.fileName(), IB.format)) : nB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (DB) {
        console.error("Replay video export failed", DB), nB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: DB instanceof Error ? DB.message : "Something went wrong while exporting."
        })
      } finally {
        if (kB && "inactive" !== kB.state) try {
          kB.stop()
        } catch (DB) {
          console.error("Failed to stop MediaRecorder", DB)
        }! function() {
          const BB = gB.Howler.masterGain;
          if (MB && BB) {
            try {
              BB.disconnect(MB)
            } catch (DB) {
              console.error("Failed to disconnect Howler export tee", DB)
            }
            MB = null
          } else MB = null
        }();
        for (const BB of pB.getTracks()) BB.stop();
        if (GB)
          for (const BB of GB.getTracks()) BB.stop();
        null !== JB && dB.setPlaybackSpeed(JB), dB.pause(), oB(dB), dB.reopenViewer()
      }
    }
  },
  4950: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Howl: () => nB.Howl,
      Howler: () => nB.Howler,
      musicOutput: () => yB,
      readyAudioContext: () => kB
    });
    var QB, nB = zB(4958),
      dB = zB(3551),
      IB = zB(4741);
    const NB = nB.Howler;

    function uB() {
      var BB, jB;
      if (NB.ctx || !NB.usingWebAudio || "undefined" === typeof AudioContext || !(0, IB.h)()) return;
      const zB = navigator.audioSession;
      let QB;
      "auto" === (null === zB || void 0 === zB ? void 0 : zB.type) && (zB.type = "ambient");
      try {
        QB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nB = QB.createGain();
      nB.gain.setValueAtTime(NB._muted ? 0 : null !== (BB = NB._volume) && void 0 !== BB ? BB : 1, QB.currentTime), nB.connect(QB.destination), NB.ctx = QB, NB.masterGain = nB, null === (jB = NB._setup) || void 0 === jB || jB.call(NB)
    }
    NB._mobileUnloaded = !0;
    const UB = NB.volume.bind(nB.Howler);
    NB.volume = function() {
      return uB(), UB(...arguments)
    };
    const aB = NB.mute.bind(nB.Howler);
    NB.mute = BB => (uB(), aB(BB));
    const pB = nB.Howl.prototype,
      rB = pB.init;

    function sB() {
      for (; NB._html5AudioPool.length < NB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, NB._releaseHtml5Audio(BB)
      }
      for (const jB of NB._howls)
        if (!jB._webAudio)
          for (const zB of jB._getSoundIds()) {
            var BB;
            const QB = null === (BB = jB._soundById(zB)) || void 0 === BB ? void 0 : BB._node;
            QB && !QB._unlocked && (QB._unlocked = !0, QB.load())
          }
    }
    pB.init = function(BB) {
      return uB(), rB.call(this, BB)
    }, (0, IB.h)() && (NB._unlockAudio = () => {
      const BB = NB.ctx;
      if (NB._audioUnlocked || !BB) return;
      NB.autoUnlock = !1;
      const jB = BB.createBuffer(1, 1, 22050);
      NB._scratchBuffer = jB;
      const zB = new AbortController;
      let QB = "afterPaint";
      const nB = () => {
          var QB;
          if (NB._audioUnlocked) return;
          null === (QB = NB._autoResume) || void 0 === QB || QB.call(NB);
          const nB = BB.createBufferSource();
          nB.buffer = jB, nB.connect(BB.destination), nB.start(0), BB.resume().catch((() => {})), nB.onended = () => {
            nB.disconnect(0), NB._audioUnlocked = !0, zB.abort();
            for (const BB of NB._howls) BB._emit("unlock")
          }
        },
        uB = () => {
          sB(), nB()
        },
        UB = jB => {
          if (sB(), "inTap" === QB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), nB()
          } else "afterPaint" === QB && (QB = "queued", (0, dB.b)(jB.timeStamp, (() => {
            QB = "inTap", nB()
          })))
        };
      for (const dB of ["touchstart", "touchend"]) document.addEventListener(dB, uB, {
        capture: !0,
        signal: zB.signal
      });
      for (const dB of IB.d) document.addEventListener(dB, UB, {
        capture: !0,
        signal: zB.signal
      })
    });
    let JB = 0;
    const mB = null === (QB = NB._autoSuspend) || void 0 === QB ? void 0 : QB.bind(nB.Howler);

    function yB() {
      kB();
      const {
        ctx: BB,
        masterGain: jB
      } = NB;
      return BB && jB ? {
        ctx: BB,
        destination: jB,
        holdAwake: BB => {
          var jB, zB;
          (JB += BB ? 1 : -1, BB) ? null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB): null === (zB = NB._autoSuspend) || void 0 === zB || zB.call(NB)
        },
        wake: () => {
          var jB;
          "running" !== BB.state && (null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function kB() {
      var BB;
      (NB.volume(), NB.ctx && NB.autoUnlock) && (null === (BB = NB._unlockAudio) || void 0 === BB || BB.call(NB))
    }
    mB && (NB._autoSuspend = () => JB > 0 ? nB.Howler : mB())
  },
  42723: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      c: () => nB
    });
    const QB = ["recording", "freecam", "keyframe"];

    function nB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  60764: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      HOLD_TIMEOUT_MS: () => UB,
      ReplayViewer: () => pB
    });
    var QB = zB(37012),
      nB = zB(37062),
      dB = zB(37059),
      IB = zB(37082),
      NB = zB(4887),
      uB = zB(42723);
    const UB = 1e4,
      aB = new Set(["mJ"]);
    class pB {
      constructor(BB) {
        var jB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (jB = BB.now) && void 0 !== jB ? jB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== NB.gd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get DN() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? QB.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, jB) {
        var zB, dB, IB, uB;
        const {
          client: UB
        } = this.deps;
        if (!this.playback) {
          if (!UB.setPlayback(!0)) throw new Error(QB.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const aB = this.epoch;
        let pB;
        try {
          pB = await UB.open(BB, (() => (0, nB.b)(BB, jB)))
        } finally {
          this.loadingOpens--
        }
        if (aB !== this.epoch && "reloading" !== pB) throw new Error(QB.d.coreStopped.text);
        if ("opening" !== pB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case NB.Xc.ModuleTrap:
                return QB.d.coreStopped;
              case NB.Xc.ModuleLoad:
                return QB.d.viewerLoadFailed;
              case NB.Xc.TooLarge:
                return QB.d.cantOpen
            }
          }(pB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(QB.d.saveClosed.text)), this.fileName = null !== (zB = null !== (dB = jB.fileName) && void 0 !== dB ? dB : null === (IB = jB.fileHandle) || void 0 === IB ? void 0 : IB.name) && void 0 !== zB ? zB : null, this.fileHandle = null !== (uB = jB.fileHandle) && void 0 !== uB ? uB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, jB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: jB
          }
        }))
      }
      play() {
        this.holds.has("mJ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("mJ")
      }
      seek(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this.lastView;
        null !== zB && (jB || BB < zB.vp) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, jB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== NB.gd.None && this.setCameraMode(uB.b[(uB.b.indexOf(BB.cameraMode) + 1) % uB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, jB) {
        this.edited(this.deps.client.moveKeyframe(BB, jB))
      }
      deleteKeyframes(BB, jB) {
        this.edited(this.deps.client.deleteKeyframes(BB, jB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, jB) {
        return !(jB <= BB) && (null !== this.pendingSave ? (this.deps.notify(QB.d.saveBusy), !1) : !!this.deps.client.crop(BB, jB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(QB.d.saveBusy.text)) : new Promise(((BB, jB) => {
          const zB = {
            resolve: BB,
            reject: jB
          };
          this.pendingSave = zB, this.editsAtSave = this.edits, this.deps.client.save((0, uB.c)()).then((BB => {
            this.pendingSave === zB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === zB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
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
      markSaved(BB, jB) {
        var zB, QB;
        this.fileHandle = BB, this.fileName = null !== (zB = null !== (QB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== QB ? QB : jB) && void 0 !== zB ? zB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(QB.d.coreStopped.text)), this.rejectSave(new Error(QB.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, jB, zB;
        const QB = this.deps.client.view(),
          nB = QB !== this.lastView;
        this.lastView = QB, this.opening && null !== QB && QB.state !== NB.gd.None && QB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, IB.g)()), this.cropAsked ? (this.cropAsked = !1, null !== QB && QB.state === NB.gd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== QB && QB.state !== NB.gd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const dB = 0 === this.settleFrames && 0 === (null !== (BB = null === (jB = (zB = this.deps).meshPending) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && dB && this.release("opening"), this.holds.has("seek") && dB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && dB && this.release("crop");
        const uB = this.now();
        for (const [IB, NB] of this.holds) !aB.has(IB) && uB - NB >= UB && this.release(IB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), nB && this.deps.onChange()
      }
      cropped() {
        (0, IB.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case NB.Xc.TooLarge:
            break;
          case NB.Xc.Open:
          case NB.Xc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const jB = (0, dB.f)(BB.version) ? QB.d.replayTooOld : QB.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(jB), this.settleOpen(new Error(jB.text));
            break
          }
          case NB.Xc.Crop:
            if (BB.code === NB.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(QB.d.cropFailed);
            break;
          case NB.Xc.ModuleTrap:
          case NB.Xc.ModuleLoad:
          case NB.Xc.Port:
            this.moduleEnded(BB.reason === NB.Xc.ModuleTrap ? QB.d.coreStopped : QB.d.cantOpen);
            break;
          case NB.Xc.NotLive:
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
        const jB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === jB || void 0 === jB || jB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? QB.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(QB.d.cropBusy.text)) : this.deps.notify(QB.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const jB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === jB || void 0 === jB || jB.resolve() : null === jB || void 0 === jB || jB.reject(BB)
      }
      rejectSave(BB) {
        const jB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === jB || void 0 === jB || jB.reject(BB)
      }
      hold(BB) {
        const jB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), jB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60755: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      MESH_TAIL_MS: () => UB,
      PLAY_START_TIMEOUT_MS: () => NB,
      startWasmReplayVideoExport: () => pB
    });
    var QB = zB(39343),
      nB = zB(60764),
      dB = zB(4887),
      IB = zB(2493);
    const NB = nB.HOLD_TIMEOUT_MS + 5e3,
      uB = 50,
      UB = 200;

    function aB(BB) {
      var jB;
      return (null === (jB = BB.view) || void 0 === jB ? void 0 : jB.state) === dB.gd.Cropping || BB.DN.includes("crop")
    }

    function pB(BB) {
      return (0, QB.e)((() => function(BB) {
        var jB, zB, QB, nB, pB, rB;
        const sB = BB.viewer(),
          JB = null !== (jB = null === sB || void 0 === sB ? void 0 : sB.view) && void 0 !== jB ? jB : null,
          mB = BB.canvas();
        if (!sB || !JB || JB.state === dB.gd.None || 0 === JB.totalTicks || !mB || aB(sB)) return null;
        const yB = null !== (zB = BB.now) && void 0 !== zB ? zB : () => performance.now(),
          kB = sB.id,
          GB = () => {
            const jB = BB.viewer();
            return jB === sB && jB.id === kB && jB.isOpen ? jB : null
          },
          LB = Math.min(null !== (QB = null === (nB = JB.mark) || void 0 === nB ? void 0 : nB.outTick) && void 0 !== QB ? QB : 1 / 0, JB.totalTicks - 1);
        let gB = null,
          tB = !1;
        const SB = () => {
          var BB, jB;
          return (null === (BB = GB()) || void 0 === BB || null === (jB = BB.view) || void 0 === jB ? void 0 : jB.state) === dB.gd.Playing
        };
        return {
          KF: dB.qd,
          playbackMarkInTick: null !== (pB = null === (rB = JB.mark) || void 0 === rB ? void 0 : rB.inTick) && void 0 !== pB ? pB : null,
          startFailure: () => {
            const BB = GB();
            return null === BB ? "Another replay opened. Export it again from there." : aB(BB) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var BB, jB;
            return null !== (BB = null === (jB = GB()) || void 0 === jB ? void 0 : jB.fileName) && void 0 !== BB ? BB : null
          },
          playbackSpeed: () => {
            var BB, jB, zB;
            return null !== (BB = null === (jB = GB()) || void 0 === jB || null === (zB = jB.view) || void 0 === zB ? void 0 : zB.speed) && void 0 !== BB ? BB : 1
          },
          setPlaybackSpeed: BB => {
            var jB;
            null === (jB = GB()) || void 0 === jB || jB.setSpeed(BB)
          },
          play: () => {
            var BB;
            tB = !1, gB = yB(), null === (BB = GB()) || void 0 === BB || BB.play()
          },
          pause: () => {
            var BB;
            null === (BB = GB()) || void 0 === BB || BB.pause()
          },
          seekToTick: BB => {
            var jB;
            null === (jB = GB()) || void 0 === jB || jB.seek(BB, !0)
          },
          seekSettled: () => new Promise((BB => {
            const jB = setInterval((() => {
              const zB = GB();
              null === zB ? (clearInterval(jB), BB()) : zB.DN.includes("seek") || (clearInterval(jB), setTimeout(BB, UB))
            }), uB)
          })),
          isPlaying: () => {
            var BB, jB, zB;
            return null !== gB && null !== GB() && (!!SB() || !tB && (null !== (BB = null === (jB = GB()) || void 0 === jB || null === (zB = jB.view) || void 0 === zB ? void 0 : zB.vp) && void 0 !== BB ? BB : 0) < LB && yB() - gB < NB)
          },
          watchPlayback: jB => {
            const zB = BB.watchViewer((() => {
                tB ||= null !== gB && SB(), jB()
              })),
              QB = setTimeout(jB, NB + 1);
            return () => {
              clearTimeout(QB), zB()
            }
          },
          playbackFailure: () => {
            var BB, jB;
            const zB = GB();
            return null === zB ? "The replay closed before the video finished." : (null !== (BB = null === (jB = zB.view) || void 0 === jB ? void 0 : jB.vp) && void 0 !== BB ? BB : 0) >= LB ? null : tB ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => mB,
          closeViewer: () => {
            BB.requestViewer("close")
          },
          reopenViewer: () => {
            BB.requestViewer("open")
          },
          holdInput: IB.d
        }
      }(BB)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);