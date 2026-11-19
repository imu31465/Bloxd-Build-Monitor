export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36359: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      f: () => bD
    });
    var ID = cD(20);
    const pD = 1500,
      iD = 1e3,
      fD = {
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

    function bD(DD) {
      var CD;
      const cD = null !== (CD = DD.timeoutMs) && void 0 !== CD ? CD : "Error" === DD.type ? pD : iD;
      ID.i.Uo("showBottomMessage", {
        message: DD.text,
        timeoutLength: cD,
        type: DD.type
      })
    }
  },
  36375: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      f: () => pD
    });
    const ID = "data-replay-ui-active",
      pD = [{
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
  36379: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      d: () => BD,
      h: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(36375);

    function fD() {
      const DD = {};
      for (const {
          group: CD
        }
        of iD.f) DD[CD] = !0;
      return DD
    }
    let bD = fD();

    function QD() {
      pD.i.Uo("replayViewer|uiVisibilityChanged")
    }

    function wD() {
      return bD
    }

    function SD(DD, CD) {
      bD[DD] !== CD && (bD = {
        ...bD,
        [DD]: CD
      }, "nametag" === DD && ID.d.set({
        areNametagsHidden: !CD
      }), QD())
    }

    function BD() {
      bD = fD(), ID.d.set({
        areNametagsHidden: !1
      }), QD()
    }
  },
  38552: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => JD
    });
    var ID = cD(1728),
      pD = cD(1340),
      iD = cD(53),
      fD = cD(1049),
      bD = cD.n(fD),
      QD = cD(1442),
      wD = cD(90);
    const SD = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      BD = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function yD(DD) {
      return "webm" === DD ? SD : BD
    }

    function MD(DD) {
      for (const CD of DD)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(CD)) return CD;
      return null
    }

    function tD(DD) {
      return null !== MD(yD(DD))
    }
    var ZD = cD(1093);
    const oD = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function vD() {
      return tD("webm") ? "webm" : tD("mp4") ? "mp4" : "webm"
    }

    function ND(DD) {
      let {
        cards: CD
      } = DD;
      return (0, ZD.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: CD.map((DD => (0, ZD.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, ZD.jsx)("div", {
            className: bD()("ReplayVideoExportOptionCard", {
              Selected: DD.selected,
              Disabled: DD.disabled
            }),
            onClick: () => {
              DD.disabled || DD.onSelect()
            },
            children: (0, ZD.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, ZD.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: DD.label
              }), (0, ZD.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: DD.description
              })]
            })
          }), DD.disabled && DD.disabledReason && (0, ZD.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: DD.disabledReason
          })]
        }, DD.id)))
      })
    }
    const gD = (0, iD.memo)((function(DD) {
      let {
        hasPlaybackMark: CD,
        canIncludeUi: cD,
        includeUiDisabledReason: ID,
        selectionRef: pD,
        closePopup: fD
      } = DD;
      const bD = tD("webm") || tD("mp4"),
        [SD, BD] = (0, iD.useState)(vD),
        [yD, MD] = (0, iD.useState)(cD),
        gD = bD && tD(SD);
      if (!bD) {
        const DD = (0, wD.isMobile)() ? "screen recording" : "OBS";
        return (0, ZD.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, ZD.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, ZD.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${DD}.`
          }), (0, ZD.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, ZD.jsx)(QD.J, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                pD.options = null, fD()
              },
              children: "Close"
            })
          })]
        })
      }
      const XD = CD ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        mD = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !yD,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            MD(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: yD,
          disabled: !cD,
          disabledReason: ID,
          onSelect: () => {
            MD(!0)
          }
        }],
        nD = oD.map((DD => {
          const CD = tD(DD.id);
          return {
            id: DD.id,
            label: DD.label,
            description: DD.description,
            selected: SD === DD.id,
            disabled: !CD,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              BD(DD.id)
            }
          }
        }));
      return (0, ZD.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, ZD.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, ZD.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: XD
        }), (0, ZD.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ZD.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, ZD.jsx)(ND, {
            cards: mD
          })]
        }), (0, ZD.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ZD.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, ZD.jsx)(ND, {
            cards: nD
          })]
        }), (0, ZD.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, ZD.jsx)(QD.o, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !gD,
            onClick: () => {
              pD.options = {
                format: SD,
                includeUi: cD && yD
              }, fD()
            },
            children: "Export"
          }), (0, ZD.jsx)(QD.J, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              pD.options = null, fD()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var XD = cD(4621),
      mD = cD(36375),
      nD = cD(36379);
    let OD = null;

    function PD() {
      return function() {
        const DD = (0, nD.c)();
        for (const {
            group: CD,
            dataAttr: cD
          }
          of mD.f)
          if (cD && DD[CD]) return !0;
        return !1
      }() ? function() {
        var DD;
        return "function" === typeof(null === (DD = navigator.mediaDevices) || void 0 === DD ? void 0 : DD.getDisplayMedia)
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
    async function HD(DD, CD, cD) {
      return DD ? async function() {
        const DD = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const CD of DD.getAudioTracks()) CD.stop(), DD.removeTrack(CD);
        return DD
      }(): CD().captureStream(Math.max(1, Math.round(cD)))
    }
    var UD = cD(38431);
    let xD = !1;

    function qD(DD) {
      DD.holdInput(!1), (0, UD.h)(!1)
    }
    async function JD(DD) {
      var CD, cD;
      if ((0, UD.d)() || xD) return;
      const iD = DD();
      if (!iD) return;
      xD = !0;
      let fD = null;
      const bD = iD.playbackMarkInTick,
        {
          canIncludeUi: QD,
          includeUiDisabledReason: wD
        } = PD();
      try {
        fD = await async function(DD) {
          let {
            hasPlaybackMark: CD,
            canIncludeUi: cD,
            includeUiDisabledReason: ID
          } = DD;
          const iD = {
              options: null
            },
            fD = pD.NotificationProvider.showCustomPopup({
              body: DD => (0, ZD.jsx)(gD, {
                hasPlaybackMark: CD,
                canIncludeUi: cD,
                includeUiDisabledReason: ID,
                selectionRef: iD,
                closePopup: DD
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await fD.getResult() ? null : iD.options
        }({
          hasPlaybackMark: null !== bD,
          canIncludeUi: QD,
          includeUiDisabledReason: wD
        })
      } finally {
        xD = !1
      }
      if (!fD) return;
      const SD = null !== (CD = null === (cD = iD.startFailure) || void 0 === cD ? void 0 : cD.call(iD)) && void 0 !== CD ? CD : null;
      if (null !== SD) return void pD.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: SD
      });
      if (! function(DD) {
          return !(0, UD.d)() && ((0, UD.h)(!0), DD.holdInput(!0), !0)
        }(iD)) return;
      let BD = null;
      try {
        BD = await HD(fD.includeUi, (() => iD.canvas()), iD.Yq)
      } catch (KD) {
        return console.error("Failed to create video stream for export", KD), qD(iD), void pD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: KD instanceof Error ? KD.message : "Could not start capture."
        })
      }
      let tD = null;
      const oD = [];
      let vD = null,
        ND = null;
      try {
        var mD, nD, JD;
        tD = iD.playbackSpeed(), iD.closeViewer(), iD.setPlaybackSpeed(1), iD.pause(), iD.seekToTick(null !== bD && void 0 !== bD ? bD : 0);
        const DD = await async function() {
          const DD = XD.Howler.masterGain;
          if (!XD.Howler.ctx || !DD) return null;
          await XD.Howler.ctx.resume();
          const CD = XD.Howler.ctx.createMediaStreamDestination();
          DD.connect(CD), OD = CD;
          const [cD] = CD.stream.getAudioTracks();
          return null !== cD && void 0 !== cD ? cD : null
        }();
        ND = new MediaStream;
        for (const ID of BD.getVideoTracks()) ND.addTrack(ID);
        DD && ND.addTrack(DD);
        const CD = function(DD) {
          const CD = MD(yD(DD));
          if (!CD) throw new Error(`No MediaRecorder mime type available for ${DD}`);
          return CD
        }(fD.format);
        vD = new MediaRecorder(ND, {
          mimeType: CD,
          videoBitsPerSecond: 8e6
        }), vD.ondataavailable = DD => {
          DD.data.size > 0 && oD.push(DD.data)
        };
        const cD = new Promise((DD => {
          vD.onstop = () => {
            DD()
          }
        }));
        await (null === (mD = iD.seekSettled) || void 0 === mD ? void 0 : mD.call(iD));
        const [QD] = BD.getVideoTracks();
        vD.start(250), iD.play();
        const wD = await
        function(DD, CD, cD) {
          return new Promise((ID => {
            let pD = !1;
            const iD = DD => {
                pD || (pD = !0, bD(), CD.removeEventListener("ended", fD), ID(DD))
              },
              fD = () => {
                iD("captureLost")
              },
              bD = DD.watchPlayback((() => {
                DD.isPlaying() || iD("completed")
              }));
            CD.addEventListener("ended", fD), cD.onerror = () => {
              iD("recorderError")
            }, "ended" !== CD.readyState ? DD.isPlaying() || iD("completed") : iD("captureLost")
          }))
        }(iD, QD, vD);
        if (iD.pause(), "inactive" !== vD.state && vD.stop(), await cD, "captureLost" === wD) return void pD.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === wD) return void pD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const SD = null !== (nD = null === (JD = iD.playbackFailure) || void 0 === JD ? void 0 : JD.call(iD)) && void 0 !== nD ? nD : null;
        if (null !== SD) return void pD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${SD} Nothing was saved.`
        });
        const ZD = new Blob(oD, {
          type: CD
        });
        ZD.size > 0 ? (0, ID.c)(ZD, function(DD, CD) {
          const cD = function(DD) {
            return "mp4" === DD ? "mp4" : "webm"
          }(CD);
          if (DD) return `${DD.replace(/\.bloxdreplay$/i,"")}.${cD}`;
          return `bloxd-replay-${Date.now()}.${cD}`
        }(iD.fileName(), fD.format)) : pD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (KD) {
        console.error("Replay video export failed", KD), pD.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: KD instanceof Error ? KD.message : "Something went wrong while exporting."
        })
      } finally {
        if (vD && "inactive" !== vD.state) try {
          vD.stop()
        } catch (KD) {
          console.error("Failed to stop MediaRecorder", KD)
        }! function() {
          const DD = XD.Howler.masterGain;
          if (OD && DD) {
            try {
              DD.disconnect(OD)
            } catch (KD) {
              console.error("Failed to disconnect Howler export tee", KD)
            }
            OD = null
          } else OD = null
        }();
        for (const DD of BD.getTracks()) DD.stop();
        if (ND)
          for (const DD of ND.getTracks()) DD.stop();
        null !== tD && iD.setPlaybackSpeed(tD), iD.pause(), qD(iD), iD.reopenViewer()
      }
    }
  },
  4621: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Howl: () => pD.Howl,
      Howler: () => pD.Howler,
      iosAudio: () => QD,
      musicOutput: () => oD,
      readyAudioContext: () => vD
    });
    var ID, pD = cD(4626),
      iD = cD(90);
    const fD = pD.Howler;
    let bD;

    function QD() {
      return bD ??= "ios" === (0, iD.getOperatingSystem)(), bD
    }

    function wD() {
      var DD, CD;
      if (fD.ctx || !fD.usingWebAudio || "undefined" === typeof AudioContext || !QD()) return;
      const cD = navigator.audioSession;
      let ID;
      "auto" === (null === cD || void 0 === cD ? void 0 : cD.type) && (cD.type = "ambient");
      try {
        ID = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pD = ID.createGain();
      pD.gain.setValueAtTime(fD._muted ? 0 : null !== (DD = fD._volume) && void 0 !== DD ? DD : 1, ID.currentTime), pD.connect(ID.destination), fD.ctx = ID, fD.masterGain = pD, null === (CD = fD._setup) || void 0 === CD || CD.call(fD)
    }
    fD._mobileUnloaded = !0;
    const SD = fD.volume.bind(pD.Howler);
    fD.volume = function() {
      return wD(), SD(...arguments)
    };
    const BD = fD.mute.bind(pD.Howler);
    fD.mute = DD => (wD(), BD(DD));
    const yD = pD.Howl.prototype,
      MD = yD.init;
    yD.init = function(DD) {
      return wD(), MD.call(this, DD)
    };
    let tD = 0;
    const ZD = null === (ID = fD._autoSuspend) || void 0 === ID ? void 0 : ID.bind(pD.Howler);

    function oD() {
      vD();
      const {
        ctx: DD,
        masterGain: CD
      } = fD;
      return DD && CD ? {
        ctx: DD,
        destination: CD,
        holdAwake: DD => {
          var CD, cD;
          (tD += DD ? 1 : -1, DD) ? null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD): null === (cD = fD._autoSuspend) || void 0 === cD || cD.call(fD)
        },
        wake: () => {
          var CD;
          "running" !== DD.state && (null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD), DD.resume().catch((() => {})))
        }
      } : null
    }

    function vD() {
      var DD;
      (fD.volume(), fD.ctx && fD.autoUnlock) && (null === (DD = fD._unlockAudio) || void 0 === DD || DD.call(fD))
    }
    ZD && (fD._autoSuspend = () => tD > 0 ? pD.Howler : ZD())
  },
  41735: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      f: () => pD
    });
    const ID = ["recording", "freecam", "keyframe"];

    function pD() {
      const DD = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(DD[1]) << 32n | BigInt(DD[0])
    }
  },
  41764: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      HOLD_TIMEOUT_MS: () => bD,
      ReplayViewer: () => wD
    });
    var ID = cD(36359),
      pD = cD(36379),
      iD = cD(4581),
      fD = cD(41735);
    const bD = 1e4,
      QD = new Set(["gt"]);
    class wD {
      constructor(DD) {
        var CD;
        this.deps = DD, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (CD = DD.now) && void 0 !== CD ? CD : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== iD.ad.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Lb() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? ID.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(DD, CD) {
        var cD, pD, fD, bD;
        const {
          client: QD
        } = this.deps;
        if (!this.playback) {
          if (!QD.setPlayback(!0)) throw new Error(ID.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const wD = this.epoch;
        let SD;
        try {
          SD = await QD.open(DD)
        } finally {
          this.loadingOpens--
        }
        if (wD !== this.epoch) throw new Error(ID.c.coreStopped.text);
        if ("opening" !== SD) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const DD = function(DD) {
            switch (DD) {
              case "reloading":
                return null;
              case "stopped":
              case iD.Tc.ModuleTrap:
                return ID.c.coreStopped;
              case iD.Tc.ModuleLoad:
                return ID.c.viewerLoadFailed;
              case iD.Tc.TooLarge:
                return ID.c.cantOpen
            }
          }(SD);
          if (null === DD) return;
          throw new Error(DD.text)
        }
        return this.rejectSave(new Error(ID.c.saveClosed.text)), this.fileName = null !== (cD = null !== (pD = CD.fileName) && void 0 !== pD ? pD : null === (fD = CD.fileHandle) || void 0 === fD ? void 0 : fD.name) && void 0 !== cD ? cD : null, this.fileHandle = null !== (bD = CD.fileHandle) && void 0 !== bD ? bD : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((DD, CD) => {
          this.pendingOpen = {
            resolve: DD,
            reject: CD
          }
        }))
      }
      play() {
        this.holds.has("gt") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("gt")
      }
      seek(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this.lastView;
        null !== cD && (CD || DD < cD.wy) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(DD, CD)
      }
      setSpeed(DD) {
        this.deps.client.setSpeed(DD)
      }
      setCameraMode(DD) {
        this.deps.client.setCameraMode(DD)
      }
      cycleCameraMode() {
        const DD = this.lastView;
        null !== DD && DD.state !== iD.ad.None && this.setCameraMode(fD.b[(fD.b.indexOf(DD.cameraMode) + 1) % fD.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(DD) {
        this.edited(this.deps.client.setKeyframe(DD))
      }
      moveKeyframe(DD, CD) {
        this.edited(this.deps.client.moveKeyframe(DD, CD))
      }
      deleteKeyframes(DD, CD) {
        this.edited(this.deps.client.deleteKeyframes(DD, CD))
      }
      setMark(DD) {
        this.edited(this.deps.client.setMark(DD))
      }
      crop(DD, CD) {
        return !(CD <= DD) && (null !== this.pendingSave ? (this.deps.notify(ID.c.saveBusy), !1) : !!this.deps.client.crop(DD, CD) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(ID.c.saveBusy.text)) : new Promise(((DD, CD) => {
          const cD = {
            resolve: DD,
            reject: CD
          };
          this.pendingSave = cD, this.editsAtSave = this.edits, this.deps.client.save((0, fD.f)()).then((DD => {
            this.pendingSave === cD && this.saveStarted(DD)
          }), (DD => {
            this.pendingSave === cD && this.rejectSave(DD instanceof Error ? DD : new Error(String(DD)))
          }))
        }))
      }
      saveStarted(DD) {
        switch (DD) {
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
      markSaved(DD, CD) {
        var cD, ID;
        this.fileHandle = DD, this.fileName = null !== (cD = null !== (ID = null === DD || void 0 === DD ? void 0 : DD.name) && void 0 !== ID ? ID : CD) && void 0 !== cD ? cD : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(ID.c.coreStopped.text)), this.rejectSave(new Error(ID.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var DD, CD, cD;
        const ID = this.deps.client.view(),
          fD = ID !== this.lastView;
        this.lastView = ID, this.opening && null !== ID && ID.state !== iD.ad.None && ID.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, pD.d)()), this.cropAsked ? (this.cropAsked = !1, null !== ID && ID.state === iD.ad.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== ID && ID.state !== iD.ad.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const wD = 0 === this.settleFrames && 0 === (null !== (DD = null === (CD = (cD = this.deps).meshPending) || void 0 === CD ? void 0 : CD.call(cD)) && void 0 !== DD ? DD : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && wD && this.release("opening"), this.holds.has("seek") && wD && this.release("seek"), this.holds.has("crop") && !this.cropRunning && wD && this.release("crop");
        const SD = this.now();
        for (const [pD, iD] of this.holds) !QD.has(pD) && SD - iD >= bD && (this.release(pD), "opening" === pD && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), fD && this.deps.onChange()
      }
      cropped() {
        (0, pD.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(DD) {
        switch (DD.reason) {
          case iD.Tc.TooLarge:
            break;
          case iD.Tc.Open:
          case iD.Tc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(ID.c.cantOpen), this.settleOpen(new Error(ID.c.cantOpen.text));
            break;
          case iD.Tc.Crop:
            if (DD.code === iD.Qc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(ID.c.cropFailed);
            break;
          case iD.Tc.ModuleTrap:
          case iD.Tc.ModuleLoad:
          case iD.Tc.Port:
            this.moduleEnded(DD.reason === iD.Tc.ModuleTrap ? ID.c.coreStopped : ID.c.cantOpen);
            break;
          case iD.Tc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${DD.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(DD) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(DD), this.settleOpen(new Error(DD.text))
      }
      saveDone(DD) {
        const CD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === CD || void 0 === CD || CD.resolve(DD)
      }
      saveFailed(DD) {
        this.rejectSave(new Error(DD ? ID.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(DD) {
        DD && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(ID.c.cropBusy.text)) : this.deps.notify(ID.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(DD) {
        const CD = this.pendingOpen;
        this.pendingOpen = null, null === DD ? null === CD || void 0 === CD || CD.resolve() : null === CD || void 0 === CD || CD.reject(DD)
      }
      rejectSave(DD) {
        const CD = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === CD || void 0 === CD || CD.reject(DD)
      }
      hold(DD) {
        const CD = 0 === this.holds.size;
        this.holds.set(DD, this.now()), CD && this.deps.setHoldDraws(!0)
      }
      release(DD) {
        this.holds.delete(DD) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41755: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      MESH_TAIL_MS: () => wD,
      PLAY_START_TIMEOUT_MS: () => bD,
      startWasmReplayVideoExport: () => BD
    });
    var ID = cD(38552),
      pD = cD(41764),
      iD = cD(4581),
      fD = cD(2347);
    const bD = pD.HOLD_TIMEOUT_MS + 5e3,
      QD = 50,
      wD = 200;

    function SD(DD) {
      var CD;
      return (null === (CD = DD.view) || void 0 === CD ? void 0 : CD.state) === iD.ad.Cropping || DD.Lb.includes("crop")
    }

    function BD(DD) {
      return (0, ID.e)((() => function(DD) {
        var CD, cD, ID, pD, BD, yD;
        const MD = DD.viewer(),
          tD = null !== (CD = null === MD || void 0 === MD ? void 0 : MD.view) && void 0 !== CD ? CD : null,
          ZD = DD.canvas();
        if (!MD || !tD || tD.state === iD.ad.None || 0 === tD.totalTicks || !ZD || SD(MD)) return null;
        const oD = null !== (cD = DD.now) && void 0 !== cD ? cD : () => performance.now(),
          vD = MD.id,
          ND = () => {
            const CD = DD.viewer();
            return CD === MD && CD.id === vD && CD.isOpen ? CD : null
          },
          gD = Math.min(null !== (ID = null === (pD = tD.mark) || void 0 === pD ? void 0 : pD.outTick) && void 0 !== ID ? ID : 1 / 0, tD.totalTicks - 1);
        let XD = null,
          mD = !1;
        const nD = () => {
          var DD, CD;
          return (null === (DD = ND()) || void 0 === DD || null === (CD = DD.view) || void 0 === CD ? void 0 : CD.state) === iD.ad.Playing
        };
        return {
          Yq: iD.nd,
          playbackMarkInTick: null !== (BD = null === (yD = tD.mark) || void 0 === yD ? void 0 : yD.inTick) && void 0 !== BD ? BD : null,
          startFailure: () => {
            const DD = ND();
            return null === DD ? "Another replay opened. Export it again from there." : SD(DD) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var DD, CD;
            return null !== (DD = null === (CD = ND()) || void 0 === CD ? void 0 : CD.fileName) && void 0 !== DD ? DD : null
          },
          playbackSpeed: () => {
            var DD, CD, cD;
            return null !== (DD = null === (CD = ND()) || void 0 === CD || null === (cD = CD.view) || void 0 === cD ? void 0 : cD.speed) && void 0 !== DD ? DD : 1
          },
          setPlaybackSpeed: DD => {
            var CD;
            null === (CD = ND()) || void 0 === CD || CD.setSpeed(DD)
          },
          play: () => {
            var DD;
            mD = !1, XD = oD(), null === (DD = ND()) || void 0 === DD || DD.play()
          },
          pause: () => {
            var DD;
            null === (DD = ND()) || void 0 === DD || DD.pause()
          },
          seekToTick: DD => {
            var CD;
            null === (CD = ND()) || void 0 === CD || CD.seek(DD, !0)
          },
          seekSettled: () => new Promise((DD => {
            const CD = setInterval((() => {
              const cD = ND();
              null === cD ? (clearInterval(CD), DD()) : cD.Lb.includes("seek") || (clearInterval(CD), setTimeout(DD, wD))
            }), QD)
          })),
          isPlaying: () => {
            var DD, CD, cD;
            return null !== XD && null !== ND() && (!!nD() || !mD && (null !== (DD = null === (CD = ND()) || void 0 === CD || null === (cD = CD.view) || void 0 === cD ? void 0 : cD.wy) && void 0 !== DD ? DD : 0) < gD && oD() - XD < bD)
          },
          watchPlayback: CD => {
            const cD = DD.watchViewer((() => {
                mD ||= null !== XD && nD(), CD()
              })),
              ID = setTimeout(CD, bD + 1);
            return () => {
              clearTimeout(ID), cD()
            }
          },
          playbackFailure: () => {
            var DD, CD;
            const cD = ND();
            return null === cD ? "The replay closed before the video finished." : (null !== (DD = null === (CD = cD.view) || void 0 === CD ? void 0 : CD.wy) && void 0 !== DD ? DD : 0) >= gD ? null : mD ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => ZD,
          closeViewer: () => {
            DD.requestViewer("close")
          },
          reopenViewer: () => {
            DD.requestViewer("open")
          },
          holdInput: fD.e
        }
      }(DD)))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);