export const id = 78;
export const ids = [72, 78, 108];
export const modules = {
  37913: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      h: () => mM
    });
    var OM = iM(625),
      SM = iM(30),
      jM = iM(37872);
    const aM = "replayFileKeptForReload",
      PM = "replayFileKeptForReloadAt",
      nM = "replayFileKeptForReloadTab",
      QM = 3e5,
      zM = 5e3;
    async function LM(MM, rM) {
      const iM = Date.now(),
        jM = {
          at: iM,
          bytes: MM,
          source: rM
        },
        QM = await Promise.race([(async () => await SM.f.setItem(PM, iM) && SM.f.setItem(aM, jM))(), (0, OM.Q)(zM).then((() => !1))]);
      QM || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const LM = {
        at: iM,
        ML: QM
      };
      SM.k.setItem(nM, LM)
    }
    async function mM() {
      var MM;
      const rM = SM.k.getItem(nM);
      null !== rM && SM.k.removeItem(nM);
      const iM = Date.now(),
        OM = await SM.f.getItem(PM),
        zM = null !== rM && iM - rM.at <= QM,
        LM = null !== rM && OM === rM.at;
      let mM = null;
      if (null !== OM && (LM || ("number" !== typeof OM || iM - OM > QM)) && (mM = zM && LM && rM.ML ? await SM.f.getItem(aM) : null, await Promise.all([SM.f.removeItem(PM), SM.f.removeItem(aM)])), !zM) return null;
      if ((null === (MM = mM) || void 0 === MM ? void 0 : MM.at) !== rM.at) throw new Error(jM.c.replayNotKept.text);
      return {
        bytes: mM.bytes,
        source: mM.source
      }
    }
  },
  37905: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => jM,
      i: () => SM
    });
    const OM = [9];

    function SM(MM) {
      return OM.includes(MM)
    }

    function jM(MM) {
      return null !== MM && MM >= 3 && MM < OM[0]
    }
  },
  37872: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => QM,
      f: () => nM
    });
    var OM = iM(22);
    const SM = 1500,
      jM = 1e3,
      aM = {
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
      PM = new Set(Object.values(aM).filter((MM => "Error" === MM.type)).map((MM => MM.text)));

    function nM(MM) {
      return MM instanceof Error && PM.has(MM.message) ? MM.message : void 0
    }

    function QM(MM) {
      var rM;
      const iM = null !== (rM = MM.timeoutMs) && void 0 !== rM ? rM : "Error" === MM.type ? SM : jM;
      OM.i.Tz("showBottomMessage", {
        message: MM.text,
        timeoutLength: iM,
        type: MM.type
      })
    }
  },
  37926: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => SM
    });
    const OM = "data-replay-ui-active",
      SM = [{
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
  37935: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM,
      f: () => LM,
      g: () => zM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(37926);

    function aM() {
      const MM = {};
      for (const {
          group: rM
        }
        of jM.c) MM[rM] = !0;
      return MM
    }
    let PM = aM();

    function nM() {
      SM.i.Tz("replayViewer|uiVisibilityChanged")
    }

    function QM() {
      return PM
    }

    function zM(MM, rM) {
      PM[MM] !== rM && (PM = {
        ...PM,
        [MM]: rM
      }, "nametag" === MM && OM.d.set({
        areNametagsHidden: !rM
      }), nM())
    }

    function LM() {
      PM = aM(), OM.d.set({
        areNametagsHidden: !1
      }), nM()
    }
  },
  40338: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => RM
    });
    var OM = iM(1845),
      SM = iM(1429),
      jM = iM(44),
      aM = iM(1116),
      PM = iM.n(aM),
      nM = iM(1520),
      QM = iM(83);
    const zM = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      LM = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function mM(MM) {
      return "webm" === MM ? zM : LM
    }

    function HM(MM) {
      for (const rM of MM)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(rM)) return rM;
      return null
    }

    function hM(MM) {
      return null !== HM(mM(MM))
    }
    var JM = iM(1303);
    const dM = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function yM() {
      return hM("webm") ? "webm" : hM("mp4") ? "mp4" : "webm"
    }

    function lM(MM) {
      let {
        cards: rM
      } = MM;
      return (0, JM.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: rM.map((MM => (0, JM.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, JM.jsx)("div", {
            className: PM()("ReplayVideoExportOptionCard", {
              Selected: MM.selected,
              Disabled: MM.disabled
            }),
            onClick: () => {
              MM.disabled || MM.onSelect()
            },
            children: (0, JM.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, JM.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: MM.label
              }), (0, JM.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: MM.description
              })]
            })
          }), MM.disabled && MM.disabledReason && (0, JM.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: MM.disabledReason
          })]
        }, MM.id)))
      })
    }
    const EM = (0, jM.memo)((function(MM) {
      let {
        hasPlaybackMark: rM,
        canIncludeUi: iM,
        includeUiDisabledReason: OM,
        selectionRef: SM,
        closePopup: aM
      } = MM;
      const PM = hM("webm") || hM("mp4"),
        [zM, LM] = (0, jM.useState)(yM),
        [mM, HM] = (0, jM.useState)(iM),
        EM = PM && hM(zM);
      if (!PM) {
        const MM = (0, QM.isMobile)() ? "screen recording" : "OBS";
        return (0, JM.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, JM.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, JM.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${MM}.`
          }), (0, JM.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, JM.jsx)(nM.J, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                SM.options = null, aM()
              },
              children: "Close"
            })
          })]
        })
      }
      const UM = rM ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        GM = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !mM,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            HM(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: mM,
          disabled: !iM,
          disabledReason: OM,
          onSelect: () => {
            HM(!0)
          }
        }],
        CM = dM.map((MM => {
          const rM = hM(MM.id);
          return {
            id: MM.id,
            label: MM.label,
            description: MM.description,
            selected: zM === MM.id,
            disabled: !rM,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              LM(MM.id)
            }
          }
        }));
      return (0, JM.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, JM.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, JM.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: UM
        }), (0, JM.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, JM.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, JM.jsx)(lM, {
            cards: GM
          })]
        }), (0, JM.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, JM.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, JM.jsx)(lM, {
            cards: CM
          })]
        }), (0, JM.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, JM.jsx)(nM.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !EM,
            onClick: () => {
              SM.options = {
                format: zM,
                includeUi: iM && mM
              }, aM()
            },
            children: "Export"
          }), (0, JM.jsx)(nM.J, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              SM.options = null, aM()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var UM = iM(5265),
      GM = iM(37926),
      CM = iM(37935);
    let eM = null;

    function bM() {
      return function() {
        const MM = (0, CM.c)();
        for (const {
            group: rM,
            dataAttr: iM
          }
          of GM.c)
          if (iM && MM[rM]) return !0;
        return !1
      }() ? function() {
        var MM;
        return "function" === typeof(null === (MM = navigator.mediaDevices) || void 0 === MM ? void 0 : MM.getDisplayMedia)
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
    async function wM(MM, rM, iM) {
      return MM ? async function() {
        const MM = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const rM of MM.getAudioTracks()) rM.stop(), MM.removeTrack(rM);
        return MM
      }(): rM().captureStream(Math.max(1, Math.round(iM)))
    }
    var tM = iM(40118);
    let gM = !1;

    function uM(MM) {
      MM.holdInput(!1), (0, tM.h)(!1)
    }
    async function RM(MM) {
      var rM, iM;
      if ((0, tM.d)() || gM) return;
      const jM = MM();
      if (!jM) return;
      gM = !0;
      let aM = null;
      const PM = jM.playbackMarkInTick,
        {
          canIncludeUi: nM,
          includeUiDisabledReason: QM
        } = bM();
      try {
        aM = await async function(MM) {
          let {
            hasPlaybackMark: rM,
            canIncludeUi: iM,
            includeUiDisabledReason: OM
          } = MM;
          const jM = {
              options: null
            },
            aM = SM.NotificationProvider.showCustomPopup({
              body: MM => (0, JM.jsx)(EM, {
                hasPlaybackMark: rM,
                canIncludeUi: iM,
                includeUiDisabledReason: OM,
                selectionRef: jM,
                closePopup: MM
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await aM.getResult() ? null : jM.options
        }({
          hasPlaybackMark: null !== PM,
          canIncludeUi: nM,
          includeUiDisabledReason: QM
        })
      } finally {
        gM = !1
      }
      if (!aM) return;
      const zM = null !== (rM = null === (iM = jM.startFailure) || void 0 === iM ? void 0 : iM.call(jM)) && void 0 !== rM ? rM : null;
      if (null !== zM) return void SM.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: zM
      });
      if (! function(MM) {
          return !(0, tM.d)() && ((0, tM.h)(!0), MM.holdInput(!0), !0)
        }(jM)) return;
      let LM = null;
      try {
        LM = await wM(aM.includeUi, (() => jM.canvas()), jM.zk)
      } catch (pM) {
        return console.error("Failed to create video stream for export", pM), uM(jM), void SM.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: pM instanceof Error ? pM.message : "Could not start capture."
        })
      }
      let hM = null;
      const dM = [];
      let yM = null,
        lM = null;
      try {
        var GM, CM, RM;
        hM = jM.playbackSpeed(), jM.closeViewer(), jM.setPlaybackSpeed(1), jM.pause(), jM.seekToTick(null !== PM && void 0 !== PM ? PM : 0);
        const MM = await async function() {
          const MM = UM.Howler.masterGain;
          if (!UM.Howler.ctx || !MM) return null;
          await UM.Howler.ctx.resume();
          const rM = UM.Howler.ctx.createMediaStreamDestination();
          MM.connect(rM), eM = rM;
          const [iM] = rM.stream.getAudioTracks();
          return null !== iM && void 0 !== iM ? iM : null
        }();
        lM = new MediaStream;
        for (const OM of LM.getVideoTracks()) lM.addTrack(OM);
        MM && lM.addTrack(MM);
        const rM = function(MM) {
          const rM = HM(mM(MM));
          if (!rM) throw new Error(`No MediaRecorder mime type available for ${MM}`);
          return rM
        }(aM.format);
        yM = new MediaRecorder(lM, {
          mimeType: rM,
          videoBitsPerSecond: 8e6
        }), yM.ondataavailable = MM => {
          MM.data.size > 0 && dM.push(MM.data)
        };
        const iM = new Promise((MM => {
          yM.onstop = () => {
            MM()
          }
        }));
        await (null === (GM = jM.seekSettled) || void 0 === GM ? void 0 : GM.call(jM));
        const [nM] = LM.getVideoTracks();
        yM.start(250), jM.play();
        const QM = await
        function(MM, rM, iM) {
          return new Promise((OM => {
            let SM = !1;
            const jM = MM => {
                SM || (SM = !0, PM(), rM.removeEventListener("ended", aM), OM(MM))
              },
              aM = () => {
                jM("captureLost")
              },
              PM = MM.watchPlayback((() => {
                MM.isPlaying() || jM("completed")
              }));
            rM.addEventListener("ended", aM), iM.onerror = () => {
              jM("recorderError")
            }, "ended" !== rM.readyState ? MM.isPlaying() || jM("completed") : jM("captureLost")
          }))
        }(jM, nM, yM);
        if (jM.pause(), "inactive" !== yM.state && yM.stop(), await iM, "captureLost" === QM) return void SM.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === QM) return void SM.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const zM = null !== (CM = null === (RM = jM.playbackFailure) || void 0 === RM ? void 0 : RM.call(jM)) && void 0 !== CM ? CM : null;
        if (null !== zM) return void SM.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${zM} Nothing was saved.`
        });
        const JM = new Blob(dM, {
          type: rM
        });
        JM.size > 0 ? (0, OM.c)(JM, function(MM, rM) {
          const iM = function(MM) {
            return "mp4" === MM ? "mp4" : "webm"
          }(rM);
          if (MM) return `${MM.replace(/\.bloxdreplay$/i,"")}.${iM}`;
          return `bloxd-replay-${Date.now()}.${iM}`
        }(jM.fileName(), aM.format)) : SM.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (pM) {
        console.error("Replay video export failed", pM), SM.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: pM instanceof Error ? pM.message : "Something went wrong while exporting."
        })
      } finally {
        if (yM && "inactive" !== yM.state) try {
          yM.stop()
        } catch (pM) {
          console.error("Failed to stop MediaRecorder", pM)
        }! function() {
          const MM = UM.Howler.masterGain;
          if (eM && MM) {
            try {
              MM.disconnect(eM)
            } catch (pM) {
              console.error("Failed to disconnect Howler export tee", pM)
            }
            eM = null
          } else eM = null
        }();
        for (const MM of LM.getTracks()) MM.stop();
        if (lM)
          for (const MM of lM.getTracks()) MM.stop();
        null !== hM && jM.setPlaybackSpeed(hM), jM.pause(), uM(jM), jM.reopenViewer()
      }
    }
  },
  5265: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Howl: () => SM.Howl,
      Howler: () => SM.Howler,
      musicOutput: () => dM,
      readyAudioContext: () => yM
    });
    var OM, SM = iM(5269),
      jM = iM(3839),
      aM = iM(5026);
    const PM = SM.Howler;

    function nM() {
      var MM, rM;
      if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
      const iM = navigator.audioSession;
      let OM;
      "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
      try {
        OM = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SM = OM.createGain();
      SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
    }
    PM._mobileUnloaded = !0;
    const QM = PM.volume.bind(SM.Howler);
    PM.volume = function() {
      return nM(), QM(...arguments)
    };
    const zM = PM.mute.bind(SM.Howler);
    PM.mute = MM => (nM(), zM(MM));
    const LM = SM.Howl.prototype,
      mM = LM.init;

    function HM() {
      for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
        const MM = new Audio;
        MM._unlocked = !0, PM._releaseHtml5Audio(MM)
      }
      for (const rM of PM._howls)
        if (!rM._webAudio)
          for (const iM of rM._getSoundIds()) {
            var MM;
            const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
            OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
          }
    }
    LM.init = function(MM) {
      return nM(), mM.call(this, MM)
    }, (0, aM.k)() && (PM._unlockAudio = () => {
      const MM = PM.ctx;
      if (PM._audioUnlocked || !MM) return;
      PM.autoUnlock = !1;
      const rM = MM.createBuffer(1, 1, 22050);
      PM._scratchBuffer = rM;
      const iM = new AbortController;
      let OM = "afterPaint";
      const SM = () => {
          var OM;
          if (PM._audioUnlocked) return;
          null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
          const SM = MM.createBufferSource();
          SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
            SM.disconnect(0), PM._audioUnlocked = !0, iM.abort();
            for (const MM of PM._howls) MM._emit("unlock")
          }
        },
        nM = () => {
          HM(), SM()
        },
        QM = rM => {
          if (HM(), "inTap" === OM) {
            if ("running" === MM.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SM()
          } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
            OM = "inTap", SM()
          })))
        };
      for (const jM of ["touchstart", "touchend"]) document.addEventListener(jM, nM, {
        capture: !0,
        signal: iM.signal
      });
      for (const jM of aM.e) document.addEventListener(jM, QM, {
        capture: !0,
        signal: iM.signal
      })
    });
    let hM = 0;
    const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);

    function dM() {
      yM();
      const {
        ctx: MM,
        masterGain: rM
      } = PM;
      return MM && rM ? {
        ctx: MM,
        destination: rM,
        holdAwake: MM => {
          var rM, iM;
          (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
        },
        wake: () => {
          var rM;
          "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
        }
      } : null
    }

    function yM() {
      var MM;
      (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
    }
    JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
  },
  53658: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      e: () => SM
    });
    const OM = ["recording", "freecam", "keyframe"];

    function SM() {
      const MM = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(MM[1]) << 32n | BigInt(MM[0])
    }
  },
  63239: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      HOLD_TIMEOUT_MS: () => QM,
      ReplayViewer: () => LM
    });
    var OM = iM(37872),
      SM = iM(37913),
      jM = iM(37905),
      aM = iM(37935),
      PM = iM(5198),
      nM = iM(53658);
    const QM = 1e4,
      zM = new Set(["nh"]);
    class LM {
      constructor(MM) {
        var rM;
        this.deps = MM, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (rM = MM.now) && void 0 !== rM ? rM : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== PM.hd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sQ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? OM.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(MM, rM) {
        var iM, jM, aM, nM;
        const {
          client: QM
        } = this.deps;
        if (!this.playback) {
          if (!QM.setPlayback(!0)) throw new Error(OM.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const zM = this.epoch;
        let LM;
        try {
          LM = await QM.open(MM, (() => (0, SM.d)(MM, rM)))
        } finally {
          this.loadingOpens--
        }
        if (zM !== this.epoch && "reloading" !== LM) throw new Error(OM.c.coreStopped.text);
        if ("opening" !== LM) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const MM = function(MM) {
            switch (MM) {
              case "reloading":
                return null;
              case "stopped":
              case PM.Zc.ModuleTrap:
                return OM.c.coreStopped;
              case PM.Zc.ModuleLoad:
                return OM.c.viewerLoadFailed;
              case PM.Zc.TooLarge:
                return OM.c.cantOpen
            }
          }(LM);
          if (null === MM) return;
          throw new Error(MM.text)
        }
        return this.rejectSave(new Error(OM.c.saveClosed.text)), this.fileName = null !== (iM = null !== (jM = rM.fileName) && void 0 !== jM ? jM : null === (aM = rM.fileHandle) || void 0 === aM ? void 0 : aM.name) && void 0 !== iM ? iM : null, this.fileHandle = null !== (nM = rM.fileHandle) && void 0 !== nM ? nM : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((MM, rM) => {
          this.pendingOpen = {
            resolve: MM,
            reject: rM
          }
        }))
      }
      play() {
        this.holds.has("nh") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("nh")
      }
      seek(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this.lastView;
        null !== iM && (rM || MM < iM.bL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(MM, rM)
      }
      setSpeed(MM) {
        this.deps.client.setSpeed(MM)
      }
      setCameraMode(MM) {
        this.deps.client.setCameraMode(MM)
      }
      cycleCameraMode() {
        const MM = this.lastView;
        null !== MM && MM.state !== PM.hd.None && this.setCameraMode(nM.c[(nM.c.indexOf(MM.cameraMode) + 1) % nM.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(MM) {
        this.edited(this.deps.client.setKeyframe(MM))
      }
      moveKeyframe(MM, rM) {
        this.edited(this.deps.client.moveKeyframe(MM, rM))
      }
      deleteKeyframes(MM, rM) {
        this.edited(this.deps.client.deleteKeyframes(MM, rM))
      }
      setMark(MM) {
        this.edited(this.deps.client.setMark(MM))
      }
      crop(MM, rM) {
        return !(rM <= MM) && (null !== this.pendingSave ? (this.deps.notify(OM.c.saveBusy), !1) : !!this.deps.client.crop(MM, rM) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(OM.c.saveBusy.text)) : new Promise(((MM, rM) => {
          const iM = {
            resolve: MM,
            reject: rM
          };
          this.pendingSave = iM, this.editsAtSave = this.edits, this.deps.client.save((0, nM.e)()).then((MM => {
            this.pendingSave === iM && this.saveStarted(MM)
          }), (MM => {
            this.pendingSave === iM && this.rejectSave(MM instanceof Error ? MM : new Error(String(MM)))
          }))
        }))
      }
      saveStarted(MM) {
        switch (MM) {
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
      markSaved(MM, rM) {
        var iM, OM;
        this.fileHandle = MM, this.fileName = null !== (iM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.name) && void 0 !== OM ? OM : rM) && void 0 !== iM ? iM : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(OM.c.coreStopped.text)), this.rejectSave(new Error(OM.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var MM, rM, iM;
        const OM = this.deps.client.view(),
          SM = OM !== this.lastView;
        this.lastView = OM, this.opening && null !== OM && OM.state !== PM.hd.None && OM.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, aM.f)()), this.cropAsked ? (this.cropAsked = !1, null !== OM && OM.state === PM.hd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== OM && OM.state !== PM.hd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const jM = 0 === this.settleFrames && 0 === (null !== (MM = null === (rM = (iM = this.deps).meshPending) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && jM && this.release("opening"), this.holds.has("seek") && jM && this.release("seek"), this.holds.has("crop") && !this.cropRunning && jM && this.release("crop");
        const nM = this.now();
        for (const [aM, PM] of this.holds) !zM.has(aM) && nM - PM >= QM && this.release(aM);
        this.saveRefused && !this.cropping && this.saveFailed(!1), SM && this.deps.onChange()
      }
      cropped() {
        (0, aM.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(MM) {
        switch (MM.reason) {
          case PM.Zc.TooLarge:
            break;
          case PM.Zc.Open:
          case PM.Zc.NothingStaged: {
            this.opening = !1, this.release("opening");
            const rM = (0, jM.h)(MM.version) ? OM.c.replayTooOld : OM.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(rM), this.settleOpen(new Error(rM.text));
            break
          }
          case PM.Zc.Crop:
            if (MM.code === PM.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(OM.c.cropFailed);
            break;
          case PM.Zc.ModuleTrap:
          case PM.Zc.ModuleLoad:
          case PM.Zc.Port:
            this.moduleEnded(MM.reason === PM.Zc.ModuleTrap ? OM.c.coreStopped : OM.c.cantOpen);
            break;
          case PM.Zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${MM.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(MM) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(MM), this.settleOpen(new Error(MM.text))
      }
      saveDone(MM) {
        const rM = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rM || void 0 === rM || rM.resolve(MM)
      }
      saveFailed(MM) {
        this.rejectSave(new Error(MM ? OM.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(MM) {
        MM && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(OM.c.cropBusy.text)) : this.deps.notify(OM.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(MM) {
        const rM = this.pendingOpen;
        this.pendingOpen = null, null === MM ? null === rM || void 0 === rM || rM.resolve() : null === rM || void 0 === rM || rM.reject(MM)
      }
      rejectSave(MM) {
        const rM = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rM || void 0 === rM || rM.reject(MM)
      }
      hold(MM) {
        const rM = 0 === this.holds.size;
        this.holds.set(MM, this.now()), rM && this.deps.setHoldDraws(!0)
      }
      release(MM) {
        this.holds.delete(MM) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  63231: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      MESH_TAIL_MS: () => QM,
      PLAY_START_TIMEOUT_MS: () => PM,
      startWasmReplayVideoExport: () => LM
    });
    var OM = iM(40338),
      SM = iM(63239),
      jM = iM(5198),
      aM = iM(2624);
    const PM = SM.HOLD_TIMEOUT_MS + 5e3,
      nM = 50,
      QM = 200;

    function zM(MM) {
      var rM;
      return (null === (rM = MM.view) || void 0 === rM ? void 0 : rM.state) === jM.hd.Cropping || MM.sQ.includes("crop")
    }

    function LM(MM) {
      return (0, OM.c)((() => function(MM) {
        var rM, iM, OM, SM, LM, mM;
        const HM = MM.viewer(),
          hM = null !== (rM = null === HM || void 0 === HM ? void 0 : HM.view) && void 0 !== rM ? rM : null,
          JM = MM.canvas();
        if (!HM || !hM || hM.state === jM.hd.None || 0 === hM.totalTicks || !JM || zM(HM)) return null;
        const dM = null !== (iM = MM.now) && void 0 !== iM ? iM : () => performance.now(),
          yM = HM.id,
          lM = () => {
            const rM = MM.viewer();
            return rM === HM && rM.id === yM && rM.isOpen ? rM : null
          },
          EM = Math.min(null !== (OM = null === (SM = hM.mark) || void 0 === SM ? void 0 : SM.outTick) && void 0 !== OM ? OM : 1 / 0, hM.totalTicks - 1);
        let UM = null,
          GM = !1;
        const CM = () => {
          var MM, rM;
          return (null === (MM = lM()) || void 0 === MM || null === (rM = MM.view) || void 0 === rM ? void 0 : rM.state) === jM.hd.Playing
        };
        return {
          zk: jM.ud,
          playbackMarkInTick: null !== (LM = null === (mM = hM.mark) || void 0 === mM ? void 0 : mM.inTick) && void 0 !== LM ? LM : null,
          startFailure: () => {
            const MM = lM();
            return null === MM ? "Another replay opened. Export it again from there." : zM(MM) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var MM, rM;
            return null !== (MM = null === (rM = lM()) || void 0 === rM ? void 0 : rM.fileName) && void 0 !== MM ? MM : null
          },
          playbackSpeed: () => {
            var MM, rM, iM;
            return null !== (MM = null === (rM = lM()) || void 0 === rM || null === (iM = rM.view) || void 0 === iM ? void 0 : iM.speed) && void 0 !== MM ? MM : 1
          },
          setPlaybackSpeed: MM => {
            var rM;
            null === (rM = lM()) || void 0 === rM || rM.setSpeed(MM)
          },
          play: () => {
            var MM;
            GM = !1, UM = dM(), null === (MM = lM()) || void 0 === MM || MM.play()
          },
          pause: () => {
            var MM;
            null === (MM = lM()) || void 0 === MM || MM.pause()
          },
          seekToTick: MM => {
            var rM;
            null === (rM = lM()) || void 0 === rM || rM.seek(MM, !0)
          },
          seekSettled: () => new Promise((MM => {
            const rM = setInterval((() => {
              const iM = lM();
              null === iM ? (clearInterval(rM), MM()) : iM.sQ.includes("seek") || (clearInterval(rM), setTimeout(MM, QM))
            }), nM)
          })),
          isPlaying: () => {
            var MM, rM, iM;
            return null !== UM && null !== lM() && (!!CM() || !GM && (null !== (MM = null === (rM = lM()) || void 0 === rM || null === (iM = rM.view) || void 0 === iM ? void 0 : iM.bL) && void 0 !== MM ? MM : 0) < EM && dM() - UM < PM)
          },
          watchPlayback: rM => {
            const iM = MM.watchViewer((() => {
                GM ||= null !== UM && CM(), rM()
              })),
              OM = setTimeout(rM, PM + 1);
            return () => {
              clearTimeout(OM), iM()
            }
          },
          playbackFailure: () => {
            var MM, rM;
            const iM = lM();
            return null === iM ? "The replay closed before the video finished." : (null !== (MM = null === (rM = iM.view) || void 0 === rM ? void 0 : rM.bL) && void 0 !== MM ? MM : 0) >= EM ? null : GM ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => JM,
          closeViewer: () => {
            MM.requestViewer("close")
          },
          reopenViewer: () => {
            MM.requestViewer("open")
          },
          holdInput: aM.e
        }
      }(MM)))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);