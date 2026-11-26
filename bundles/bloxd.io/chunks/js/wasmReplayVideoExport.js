export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  37685: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      c: () => zB
    });
    var YB = GB(641),
      DB = GB(31),
      QB = GB(37641);
    const oB = "replayFileKeptForReload",
      jB = "replayFileKeptForReloadAt",
      yB = "replayFileKeptForReloadTab",
      JB = 3e5,
      MB = 5e3;
    async function PB(BB, OB) {
      const GB = Date.now(),
        QB = {
          at: GB,
          bytes: BB,
          source: OB
        },
        JB = await Promise.race([(async () => await DB.d.setItem(jB, GB) && DB.d.setItem(oB, QB))(), (0, YB.U)(MB).then((() => !1))]);
      JB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const PB = {
        at: GB,
        GP: JB
      };
      DB.i.setItem(yB, PB)
    }
    async function zB() {
      var BB;
      const OB = DB.i.getItem(yB);
      null !== OB && DB.i.removeItem(yB);
      const GB = Date.now(),
        YB = await DB.d.getItem(jB),
        MB = null !== OB && GB - OB.at <= JB,
        PB = null !== OB && YB === OB.at;
      let zB = null;
      if (null !== YB && (PB || ("number" !== typeof YB || GB - YB > JB)) && (zB = MB && PB && OB.GP ? await DB.d.getItem(oB) : null, await Promise.all([DB.d.removeItem(jB), DB.d.removeItem(oB)])), !MB) return null;
      if ((null === (BB = zB) || void 0 === BB ? void 0 : BB.at) !== OB.at) throw new Error(QB.e.replayNotKept.text);
      return {
        bytes: zB.bytes,
        source: zB.source
      }
    }
  },
  37682: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      g: () => QB,
      k: () => DB
    });
    const YB = [9];

    function DB(BB) {
      return YB.includes(BB)
    }

    function QB(BB) {
      return null !== BB && BB >= 3 && BB < YB[0]
    }
  },
  37641: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => JB,
      j: () => yB
    });
    var YB = GB(25);
    const DB = 1500,
      QB = 1e3,
      oB = {
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
      jB = new Set(Object.values(oB).filter((BB => "Error" === BB.type)).map((BB => BB.text)));

    function yB(BB) {
      return BB instanceof Error && jB.has(BB.message) ? BB.message : void 0
    }

    function JB(BB) {
      var OB;
      const GB = null !== (OB = BB.timeoutMs) && void 0 !== OB ? OB : "Error" === BB.type ? DB : QB;
      YB.o.tM("showBottomMessage", {
        message: BB.text,
        timeoutLength: GB,
        type: BB.type
      })
    }
  },
  37692: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => DB
    });
    const YB = "data-replay-ui-active",
      DB = [{
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
  37694: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB,
      f: () => PB,
      i: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(37692);

    function oB() {
      const BB = {};
      for (const {
          group: OB
        }
        of QB.c) BB[OB] = !0;
      return BB
    }
    let jB = oB();

    function yB() {
      DB.o.tM("replayViewer|uiVisibilityChanged")
    }

    function JB() {
      return jB
    }

    function MB(BB, OB) {
      jB[BB] !== OB && (jB = {
        ...jB,
        [BB]: OB
      }, "nametag" === BB && YB.c.set({
        areNametagsHidden: !OB
      }), yB())
    }

    function PB() {
      jB = oB(), YB.c.set({
        areNametagsHidden: !1
      }), yB()
    }
  },
  39965: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => uB
    });
    var YB = GB(1834),
      DB = GB(1400),
      QB = GB(56),
      oB = GB(1090),
      jB = GB.n(oB),
      yB = GB(1485),
      JB = GB(92);
    const MB = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      PB = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function zB(BB) {
      return "webm" === BB ? MB : PB
    }

    function lB(BB) {
      for (const OB of BB)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(OB)) return OB;
      return null
    }

    function pB(BB) {
      return null !== lB(zB(BB))
    }
    var qB = GB(1282);
    const ZB = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function NB() {
      return pB("webm") ? "webm" : pB("mp4") ? "mp4" : "webm"
    }

    function RB(BB) {
      let {
        cards: OB
      } = BB;
      return (0, qB.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: OB.map((BB => (0, qB.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, qB.jsx)("div", {
            className: jB()("ReplayVideoExportOptionCard", {
              Selected: BB.selected,
              Disabled: BB.disabled
            }),
            onClick: () => {
              BB.disabled || BB.onSelect()
            },
            children: (0, qB.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, qB.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: BB.label
              }), (0, qB.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: BB.description
              })]
            })
          }), BB.disabled && BB.disabledReason && (0, qB.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: BB.disabledReason
          })]
        }, BB.id)))
      })
    }
    const WB = (0, QB.memo)((function(BB) {
      let {
        hasPlaybackMark: OB,
        canIncludeUi: GB,
        includeUiDisabledReason: YB,
        selectionRef: DB,
        closePopup: oB
      } = BB;
      const jB = pB("webm") || pB("mp4"),
        [MB, PB] = (0, QB.useState)(NB),
        [zB, lB] = (0, QB.useState)(GB),
        WB = jB && pB(MB);
      if (!jB) {
        const BB = (0, JB.isMobile)() ? "screen recording" : "OBS";
        return (0, qB.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, qB.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, qB.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${BB}.`
          }), (0, qB.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, qB.jsx)(yB.Q, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                DB.options = null, oB()
              },
              children: "Close"
            })
          })]
        })
      }
      const AB = OB ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        VB = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !zB,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            lB(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: zB,
          disabled: !GB,
          disabledReason: YB,
          onSelect: () => {
            lB(!0)
          }
        }],
        SB = ZB.map((BB => {
          const OB = pB(BB.id);
          return {
            id: BB.id,
            label: BB.label,
            description: BB.description,
            selected: MB === BB.id,
            disabled: !OB,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              PB(BB.id)
            }
          }
        }));
      return (0, qB.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, qB.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, qB.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: AB
        }), (0, qB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, qB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, qB.jsx)(RB, {
            cards: VB
          })]
        }), (0, qB.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, qB.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, qB.jsx)(RB, {
            cards: SB
          })]
        }), (0, qB.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, qB.jsx)(yB.q, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !WB,
            onClick: () => {
              DB.options = {
                format: MB,
                includeUi: GB && zB
              }, oB()
            },
            children: "Export"
          }), (0, qB.jsx)(yB.Q, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              DB.options = null, oB()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var AB = GB(5353),
      VB = GB(37692),
      SB = GB(37694);
    let nB = null;

    function UB() {
      return function() {
        const BB = (0, SB.c)();
        for (const {
            group: OB,
            dataAttr: GB
          }
          of VB.c)
          if (GB && BB[OB]) return !0;
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
    async function fB(BB, OB, GB) {
      return BB ? async function() {
        const BB = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const OB of BB.getAudioTracks()) OB.stop(), BB.removeTrack(OB);
        return BB
      }(): OB().captureStream(Math.max(1, Math.round(GB)))
    }
    var kB = GB(39782);
    let dB = !1;

    function KB(BB) {
      BB.holdInput(!1), (0, kB.e)(!1)
    }
    async function uB(BB) {
      var OB, GB;
      if ((0, kB.b)() || dB) return;
      const QB = BB();
      if (!QB) return;
      dB = !0;
      let oB = null;
      const jB = QB.playbackMarkInTick,
        {
          canIncludeUi: yB,
          includeUiDisabledReason: JB
        } = UB();
      try {
        oB = await async function(BB) {
          let {
            hasPlaybackMark: OB,
            canIncludeUi: GB,
            includeUiDisabledReason: YB
          } = BB;
          const QB = {
              options: null
            },
            oB = DB.NotificationProvider.showCustomPopup({
              body: BB => (0, qB.jsx)(WB, {
                hasPlaybackMark: OB,
                canIncludeUi: GB,
                includeUiDisabledReason: YB,
                selectionRef: QB,
                closePopup: BB
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await oB.getResult() ? null : QB.options
        }({
          hasPlaybackMark: null !== jB,
          canIncludeUi: yB,
          includeUiDisabledReason: JB
        })
      } finally {
        dB = !1
      }
      if (!oB) return;
      const MB = null !== (OB = null === (GB = QB.startFailure) || void 0 === GB ? void 0 : GB.call(QB)) && void 0 !== OB ? OB : null;
      if (null !== MB) return void DB.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: MB
      });
      if (! function(BB) {
          return !(0, kB.b)() && ((0, kB.e)(!0), BB.holdInput(!0), !0)
        }(QB)) return;
      let PB = null;
      try {
        PB = await fB(oB.includeUi, (() => QB.canvas()), QB.pI)
      } catch (mB) {
        return console.error("Failed to create video stream for export", mB), KB(QB), void DB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: mB instanceof Error ? mB.message : "Could not start capture."
        })
      }
      let pB = null;
      const ZB = [];
      let NB = null,
        RB = null;
      try {
        var VB, SB, uB;
        pB = QB.playbackSpeed(), QB.closeViewer(), QB.setPlaybackSpeed(1), QB.pause(), QB.seekToTick(null !== jB && void 0 !== jB ? jB : 0);
        const BB = await async function() {
          const BB = AB.Howler.masterGain;
          if (!AB.Howler.ctx || !BB) return null;
          await AB.Howler.ctx.resume();
          const OB = AB.Howler.ctx.createMediaStreamDestination();
          BB.connect(OB), nB = OB;
          const [GB] = OB.stream.getAudioTracks();
          return null !== GB && void 0 !== GB ? GB : null
        }();
        RB = new MediaStream;
        for (const YB of PB.getVideoTracks()) RB.addTrack(YB);
        BB && RB.addTrack(BB);
        const OB = function(BB) {
          const OB = lB(zB(BB));
          if (!OB) throw new Error(`No MediaRecorder mime type available for ${BB}`);
          return OB
        }(oB.format);
        NB = new MediaRecorder(RB, {
          mimeType: OB,
          videoBitsPerSecond: 8e6
        }), NB.ondataavailable = BB => {
          BB.data.size > 0 && ZB.push(BB.data)
        };
        const GB = new Promise((BB => {
          NB.onstop = () => {
            BB()
          }
        }));
        await (null === (VB = QB.seekSettled) || void 0 === VB ? void 0 : VB.call(QB));
        const [yB] = PB.getVideoTracks();
        NB.start(250), QB.play();
        const JB = await
        function(BB, OB, GB) {
          return new Promise((YB => {
            let DB = !1;
            const QB = BB => {
                DB || (DB = !0, jB(), OB.removeEventListener("ended", oB), YB(BB))
              },
              oB = () => {
                QB("captureLost")
              },
              jB = BB.watchPlayback((() => {
                BB.isPlaying() || QB("completed")
              }));
            OB.addEventListener("ended", oB), GB.onerror = () => {
              QB("recorderError")
            }, "ended" !== OB.readyState ? BB.isPlaying() || QB("completed") : QB("captureLost")
          }))
        }(QB, yB, NB);
        if (QB.pause(), "inactive" !== NB.state && NB.stop(), await GB, "captureLost" === JB) return void DB.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === JB) return void DB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const MB = null !== (SB = null === (uB = QB.playbackFailure) || void 0 === uB ? void 0 : uB.call(QB)) && void 0 !== SB ? SB : null;
        if (null !== MB) return void DB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${MB} Nothing was saved.`
        });
        const qB = new Blob(ZB, {
          type: OB
        });
        qB.size > 0 ? (0, YB.c)(qB, function(BB, OB) {
          const GB = function(BB) {
            return "mp4" === BB ? "mp4" : "webm"
          }(OB);
          if (BB) return `${BB.replace(/\.bloxdreplay$/i,"")}.${GB}`;
          return `bloxd-replay-${Date.now()}.${GB}`
        }(QB.fileName(), oB.format)) : DB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (mB) {
        console.error("Replay video export failed", mB), DB.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: mB instanceof Error ? mB.message : "Something went wrong while exporting."
        })
      } finally {
        if (NB && "inactive" !== NB.state) try {
          NB.stop()
        } catch (mB) {
          console.error("Failed to stop MediaRecorder", mB)
        }! function() {
          const BB = AB.Howler.masterGain;
          if (nB && BB) {
            try {
              BB.disconnect(nB)
            } catch (mB) {
              console.error("Failed to disconnect Howler export tee", mB)
            }
            nB = null
          } else nB = null
        }();
        for (const BB of PB.getTracks()) BB.stop();
        if (RB)
          for (const BB of RB.getTracks()) BB.stop();
        null !== pB && QB.setPlaybackSpeed(pB), QB.pause(), KB(QB), QB.reopenViewer()
      }
    }
  },
  5353: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Howl: () => DB.Howl,
      Howler: () => DB.Howler,
      musicOutput: () => ZB,
      readyAudioContext: () => NB
    });
    var YB, DB = GB(5362),
      QB = GB(3873),
      oB = GB(5073);
    const jB = DB.Howler;

    function yB() {
      var BB, OB;
      if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
      const GB = navigator.audioSession;
      let YB;
      "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
      try {
        YB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const DB = YB.createGain();
      DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
    }
    jB._mobileUnloaded = !0;
    const JB = jB.volume.bind(DB.Howler);
    jB.volume = function() {
      return yB(), JB(...arguments)
    };
    const MB = jB.mute.bind(DB.Howler);
    jB.mute = BB => (yB(), MB(BB));
    const PB = DB.Howl.prototype,
      zB = PB.init;

    function lB() {
      for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, jB._releaseHtml5Audio(BB)
      }
      for (const OB of jB._howls)
        if (!OB._webAudio)
          for (const GB of OB._getSoundIds()) {
            var BB;
            const YB = null === (BB = OB._soundById(GB)) || void 0 === BB ? void 0 : BB._node;
            YB && !YB._unlocked && (YB._unlocked = !0, YB.load())
          }
    }
    PB.init = function(BB) {
      return yB(), zB.call(this, BB)
    }, (0, oB.h)() && (jB._unlockAudio = () => {
      const BB = jB.ctx;
      if (jB._audioUnlocked || !BB) return;
      jB.autoUnlock = !1;
      const OB = BB.createBuffer(1, 1, 22050);
      jB._scratchBuffer = OB;
      const GB = new AbortController;
      let YB = "afterPaint";
      const DB = () => {
          var YB;
          if (jB._audioUnlocked) return;
          null === (YB = jB._autoResume) || void 0 === YB || YB.call(jB);
          const DB = BB.createBufferSource();
          DB.buffer = OB, DB.connect(BB.destination), DB.start(0), BB.resume().catch((() => {})), DB.onended = () => {
            DB.disconnect(0), jB._audioUnlocked = !0, GB.abort();
            for (const BB of jB._howls) BB._emit("unlock")
          }
        },
        yB = () => {
          lB(), DB()
        },
        JB = OB => {
          if (lB(), "inTap" === YB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), DB()
          } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
            YB = "inTap", DB()
          })))
        };
      for (const QB of ["touchstart", "touchend"]) document.addEventListener(QB, yB, {
        capture: !0,
        signal: GB.signal
      });
      for (const QB of oB.c) document.addEventListener(QB, JB, {
        capture: !0,
        signal: GB.signal
      })
    });
    let pB = 0;
    const qB = null === (YB = jB._autoSuspend) || void 0 === YB ? void 0 : YB.bind(DB.Howler);

    function ZB() {
      NB();
      const {
        ctx: BB,
        masterGain: OB
      } = jB;
      return BB && OB ? {
        ctx: BB,
        destination: OB,
        holdAwake: BB => {
          var OB, GB;
          (pB += BB ? 1 : -1, BB) ? null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB): null === (GB = jB._autoSuspend) || void 0 === GB || GB.call(jB)
        },
        wake: () => {
          var OB;
          "running" !== BB.state && (null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function NB() {
      var BB;
      (jB.volume(), jB.ctx && jB.autoUnlock) && (null === (BB = jB._unlockAudio) || void 0 === BB || BB.call(jB))
    }
    qB && (jB._autoSuspend = () => pB > 0 ? DB.Howler : qB())
  },
  53993: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      d: () => DB
    });
    const YB = ["recording", "freecam", "keyframe"];

    function DB() {
      const BB = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(BB[1]) << 32n | BigInt(BB[0])
    }
  },
  63857: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      HOLD_TIMEOUT_MS: () => JB,
      ReplayViewer: () => PB
    });
    var YB = GB(37641),
      DB = GB(37685),
      QB = GB(37682),
      oB = GB(37694),
      jB = GB(5281),
      yB = GB(53993);
    const JB = 1e4,
      MB = new Set(["zp"]);
    class PB {
      constructor(BB) {
        var OB;
        this.deps = BB, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (OB = BB.now) && void 0 !== OB ? OB : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== jB.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? YB.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(BB, OB) {
        var GB, QB, oB, yB;
        const {
          client: JB
        } = this.deps;
        if (!this.playback) {
          if (!JB.setPlayback(!0)) throw new Error(YB.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const MB = this.epoch;
        let PB;
        try {
          PB = await JB.open(BB, (() => (0, DB.b)(BB, OB)))
        } finally {
          this.loadingOpens--
        }
        if (MB !== this.epoch && "reloading" !== PB) throw new Error(YB.e.coreStopped.text);
        if ("opening" !== PB) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const BB = function(BB) {
            switch (BB) {
              case "reloading":
                return null;
              case "stopped":
              case jB.jd.ModuleTrap:
                return YB.e.coreStopped;
              case jB.jd.ModuleLoad:
                return YB.e.viewerLoadFailed;
              case jB.jd.TooLarge:
                return YB.e.cantOpen
            }
          }(PB);
          if (null === BB) return;
          throw new Error(BB.text)
        }
        return this.rejectSave(new Error(YB.e.saveClosed.text)), this.fileName = null !== (GB = null !== (QB = OB.fileName) && void 0 !== QB ? QB : null === (oB = OB.fileHandle) || void 0 === oB ? void 0 : oB.name) && void 0 !== GB ? GB : null, this.fileHandle = null !== (yB = OB.fileHandle) && void 0 !== yB ? yB : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((BB, OB) => {
          this.pendingOpen = {
            resolve: BB,
            reject: OB
          }
        }))
      }
      play() {
        this.holds.has("zp") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zp")
      }
      seek(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this.lastView;
        null !== GB && (OB || BB < GB.kP) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(BB, OB)
      }
      setSpeed(BB) {
        this.deps.client.setSpeed(BB)
      }
      setCameraMode(BB) {
        this.deps.client.setCameraMode(BB)
      }
      cycleCameraMode() {
        const BB = this.lastView;
        null !== BB && BB.state !== jB.sd.None && this.setCameraMode(yB.b[(yB.b.indexOf(BB.cameraMode) + 1) % yB.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(BB) {
        this.edited(this.deps.client.setKeyframe(BB))
      }
      moveKeyframe(BB, OB) {
        this.edited(this.deps.client.moveKeyframe(BB, OB))
      }
      deleteKeyframes(BB, OB) {
        this.edited(this.deps.client.deleteKeyframes(BB, OB))
      }
      setMark(BB) {
        this.edited(this.deps.client.setMark(BB))
      }
      crop(BB, OB) {
        return !(OB <= BB) && (null !== this.pendingSave ? (this.deps.notify(YB.e.saveBusy), !1) : !!this.deps.client.crop(BB, OB) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(YB.e.saveBusy.text)) : new Promise(((BB, OB) => {
          const GB = {
            resolve: BB,
            reject: OB
          };
          this.pendingSave = GB, this.editsAtSave = this.edits, this.deps.client.save((0, yB.d)()).then((BB => {
            this.pendingSave === GB && this.saveStarted(BB)
          }), (BB => {
            this.pendingSave === GB && this.rejectSave(BB instanceof Error ? BB : new Error(String(BB)))
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
      markSaved(BB, OB) {
        var GB, YB;
        this.fileHandle = BB, this.fileName = null !== (GB = null !== (YB = null === BB || void 0 === BB ? void 0 : BB.name) && void 0 !== YB ? YB : OB) && void 0 !== GB ? GB : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(YB.e.coreStopped.text)), this.rejectSave(new Error(YB.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var BB, OB, GB;
        const YB = this.deps.client.view(),
          DB = YB !== this.lastView;
        this.lastView = YB, this.opening && null !== YB && YB.state !== jB.sd.None && YB.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, oB.f)()), this.cropAsked ? (this.cropAsked = !1, null !== YB && YB.state === jB.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== YB && YB.state !== jB.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const QB = 0 === this.settleFrames && 0 === (null !== (BB = null === (OB = (GB = this.deps).meshPending) || void 0 === OB ? void 0 : OB.call(GB)) && void 0 !== BB ? BB : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && QB && this.release("opening"), this.holds.has("seek") && QB && this.release("seek"), this.holds.has("crop") && !this.cropRunning && QB && this.release("crop");
        const yB = this.now();
        for (const [oB, jB] of this.holds) !MB.has(oB) && yB - jB >= JB && this.release(oB);
        this.saveRefused && !this.cropping && this.saveFailed(!1), DB && this.deps.onChange()
      }
      cropped() {
        (0, oB.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(BB) {
        switch (BB.reason) {
          case jB.jd.TooLarge:
            break;
          case jB.jd.Open:
          case jB.jd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const OB = (0, QB.g)(BB.version) ? YB.e.replayTooOld : YB.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(OB), this.settleOpen(new Error(OB.text));
            break
          }
          case jB.jd.Crop:
            if (BB.code === jB.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(YB.e.cropFailed);
            break;
          case jB.jd.ModuleTrap:
          case jB.jd.ModuleLoad:
          case jB.jd.Port:
            this.moduleEnded(BB.reason === jB.jd.ModuleTrap ? YB.e.coreStopped : YB.e.cantOpen);
            break;
          case jB.jd.NotLive:
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
        const OB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === OB || void 0 === OB || OB.resolve(BB)
      }
      saveFailed(BB) {
        this.rejectSave(new Error(BB ? YB.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(BB) {
        BB && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(YB.e.cropBusy.text)) : this.deps.notify(YB.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(BB) {
        const OB = this.pendingOpen;
        this.pendingOpen = null, null === BB ? null === OB || void 0 === OB || OB.resolve() : null === OB || void 0 === OB || OB.reject(BB)
      }
      rejectSave(BB) {
        const OB = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === OB || void 0 === OB || OB.reject(BB)
      }
      hold(BB) {
        const OB = 0 === this.holds.size;
        this.holds.set(BB, this.now()), OB && this.deps.setHoldDraws(!0)
      }
      release(BB) {
        this.holds.delete(BB) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  63849: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      MESH_TAIL_MS: () => JB,
      PLAY_START_TIMEOUT_MS: () => jB,
      startWasmReplayVideoExport: () => PB
    });
    var YB = GB(39965),
      DB = GB(63857),
      QB = GB(5281),
      oB = GB(2626);
    const jB = DB.HOLD_TIMEOUT_MS + 5e3,
      yB = 50,
      JB = 200;

    function MB(BB) {
      var OB;
      return (null === (OB = BB.view) || void 0 === OB ? void 0 : OB.state) === QB.sd.Cropping || BB.sJ.includes("crop")
    }

    function PB(BB) {
      return (0, YB.c)((() => function(BB) {
        var OB, GB, YB, DB, PB, zB;
        const lB = BB.viewer(),
          pB = null !== (OB = null === lB || void 0 === lB ? void 0 : lB.view) && void 0 !== OB ? OB : null,
          qB = BB.canvas();
        if (!lB || !pB || pB.state === QB.sd.None || 0 === pB.totalTicks || !qB || MB(lB)) return null;
        const ZB = null !== (GB = BB.now) && void 0 !== GB ? GB : () => performance.now(),
          NB = lB.id,
          RB = () => {
            const OB = BB.viewer();
            return OB === lB && OB.id === NB && OB.isOpen ? OB : null
          },
          WB = Math.min(null !== (YB = null === (DB = pB.mark) || void 0 === DB ? void 0 : DB.outTick) && void 0 !== YB ? YB : 1 / 0, pB.totalTicks - 1);
        let AB = null,
          VB = !1;
        const SB = () => {
          var BB, OB;
          return (null === (BB = RB()) || void 0 === BB || null === (OB = BB.view) || void 0 === OB ? void 0 : OB.state) === QB.sd.Playing
        };
        return {
          pI: QB.Cd,
          playbackMarkInTick: null !== (PB = null === (zB = pB.mark) || void 0 === zB ? void 0 : zB.inTick) && void 0 !== PB ? PB : null,
          startFailure: () => {
            const BB = RB();
            return null === BB ? "Another replay opened. Export it again from there." : MB(BB) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var BB, OB;
            return null !== (BB = null === (OB = RB()) || void 0 === OB ? void 0 : OB.fileName) && void 0 !== BB ? BB : null
          },
          playbackSpeed: () => {
            var BB, OB, GB;
            return null !== (BB = null === (OB = RB()) || void 0 === OB || null === (GB = OB.view) || void 0 === GB ? void 0 : GB.speed) && void 0 !== BB ? BB : 1
          },
          setPlaybackSpeed: BB => {
            var OB;
            null === (OB = RB()) || void 0 === OB || OB.setSpeed(BB)
          },
          play: () => {
            var BB;
            VB = !1, AB = ZB(), null === (BB = RB()) || void 0 === BB || BB.play()
          },
          pause: () => {
            var BB;
            null === (BB = RB()) || void 0 === BB || BB.pause()
          },
          seekToTick: BB => {
            var OB;
            null === (OB = RB()) || void 0 === OB || OB.seek(BB, !0)
          },
          seekSettled: () => new Promise((BB => {
            const OB = setInterval((() => {
              const GB = RB();
              null === GB ? (clearInterval(OB), BB()) : GB.sJ.includes("seek") || (clearInterval(OB), setTimeout(BB, JB))
            }), yB)
          })),
          isPlaying: () => {
            var BB, OB, GB;
            return null !== AB && null !== RB() && (!!SB() || !VB && (null !== (BB = null === (OB = RB()) || void 0 === OB || null === (GB = OB.view) || void 0 === GB ? void 0 : GB.kP) && void 0 !== BB ? BB : 0) < WB && ZB() - AB < jB)
          },
          watchPlayback: OB => {
            const GB = BB.watchViewer((() => {
                VB ||= null !== AB && SB(), OB()
              })),
              YB = setTimeout(OB, jB + 1);
            return () => {
              clearTimeout(YB), GB()
            }
          },
          playbackFailure: () => {
            var BB, OB;
            const GB = RB();
            return null === GB ? "The replay closed before the video finished." : (null !== (BB = null === (OB = GB.view) || void 0 === OB ? void 0 : OB.kP) && void 0 !== BB ? BB : 0) >= WB ? null : VB ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => qB,
          closeViewer: () => {
            BB.requestViewer("close")
          },
          reopenViewer: () => {
            BB.requestViewer("open")
          },
          holdInput: oB.g
        }
      }(BB)))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);