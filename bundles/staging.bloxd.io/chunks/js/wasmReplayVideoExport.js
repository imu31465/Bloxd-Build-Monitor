export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37084: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      e: () => LT
    });
    var WT = mT(653),
      zT = mT(44),
      MT = mT(37042);
    const gT = "replayFileKeptForReload",
      nT = "replayFileKeptForReloadAt",
      HT = "replayFileKeptForReloadTab",
      kT = 3e5,
      jT = 5e3;
    async function lT(TT, UT) {
      const mT = Date.now(),
        MT = {
          at: mT,
          bytes: TT,
          source: UT
        },
        kT = await Promise.race([(async () => await zT.h.setItem(nT, mT) && zT.h.setItem(gT, MT))(), (0, WT.G)(jT).then((() => !1))]);
      kT || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const lT = {
        at: mT,
        Jp: kT
      };
      zT.m.setItem(HT, lT)
    }
    async function LT() {
      var TT;
      const UT = zT.m.getItem(HT);
      null !== UT && zT.m.removeItem(HT);
      const mT = Date.now(),
        WT = await zT.h.getItem(nT),
        jT = null !== UT && mT - UT.at <= kT,
        lT = null !== UT && WT === UT.at;
      let LT = null;
      if (null !== WT && (lT || ("number" !== typeof WT || mT - WT > kT)) && (LT = jT && lT && UT.Jp ? await zT.h.getItem(gT) : null, await Promise.all([zT.h.removeItem(nT), zT.h.removeItem(gT)])), !jT) return null;
      if ((null === (TT = LT) || void 0 === TT ? void 0 : TT.at) !== UT.at) throw new Error(MT.c.replayNotKept.text);
      return {
        bytes: LT.bytes,
        source: LT.source
      }
    }
  },
  37076: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      g: () => MT,
      i: () => zT
    });
    const WT = [9];

    function zT(TT) {
      return WT.includes(TT)
    }

    function MT(TT) {
      return null !== TT && TT >= 3 && TT < WT[0]
    }
  },
  37042: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      d: () => kT,
      h: () => HT
    });
    var WT = mT(31);
    const zT = 1500,
      MT = 1e3,
      gT = {
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
      nT = new Set(Object.values(gT).filter((TT => "Error" === TT.type)).map((TT => TT.text)));

    function HT(TT) {
      return TT instanceof Error && nT.has(TT.message) ? TT.message : void 0
    }

    function kT(TT) {
      var UT;
      const mT = null !== (UT = TT.timeoutMs) && void 0 !== UT ? UT : "Error" === TT.type ? zT : MT;
      WT.j.EZ("showBottomMessage", {
        message: TT.text,
        timeoutLength: mT,
        type: TT.type
      })
    }
  },
  37090: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      g: () => zT
    });
    const WT = "data-replay-ui-active",
      zT = [{
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
  37095: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      f: () => lT,
      i: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(37090);

    function gT() {
      const TT = {};
      for (const {
          group: UT
        }
        of MT.g) TT[UT] = !0;
      return TT
    }
    let nT = gT();

    function HT() {
      zT.j.EZ("replayViewer|uiVisibilityChanged")
    }

    function kT() {
      return nT
    }

    function jT(TT, UT) {
      nT[TT] !== UT && (nT = {
        ...nT,
        [TT]: UT
      }, "nametag" === TT && WT.b.set({
        areNametagsHidden: !UT
      }), HT())
    }

    function lT() {
      nT = gT(), WT.b.set({
        areNametagsHidden: !1
      }), HT()
    }
  },
  39370: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => tT
    });
    var WT = mT(1876),
      zT = mT(1457),
      MT = mT(63),
      gT = mT(1126),
      nT = mT.n(gT),
      HT = mT(1569),
      kT = mT(102);
    const jT = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      lT = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function LT(TT) {
      return "webm" === TT ? jT : lT
    }

    function pT(TT) {
      for (const UT of TT)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(UT)) return UT;
      return null
    }

    function BT(TT) {
      return null !== pT(LT(TT))
    }
    var ZT = mT(1188);
    const cT = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function vT() {
      return BT("webm") ? "webm" : BT("mp4") ? "mp4" : "webm"
    }

    function fT(TT) {
      let {
        cards: UT
      } = TT;
      return (0, ZT.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: UT.map((TT => (0, ZT.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, ZT.jsx)("div", {
            className: nT()("ReplayVideoExportOptionCard", {
              Selected: TT.selected,
              Disabled: TT.disabled
            }),
            onClick: () => {
              TT.disabled || TT.onSelect()
            },
            children: (0, ZT.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, ZT.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: TT.label
              }), (0, ZT.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: TT.description
              })]
            })
          }), TT.disabled && TT.disabledReason && (0, ZT.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: TT.disabledReason
          })]
        }, TT.id)))
      })
    }
    const qT = (0, MT.memo)((function(TT) {
      let {
        hasPlaybackMark: UT,
        canIncludeUi: mT,
        includeUiDisabledReason: WT,
        selectionRef: zT,
        closePopup: gT
      } = TT;
      const nT = BT("webm") || BT("mp4"),
        [jT, lT] = (0, MT.useState)(vT),
        [LT, pT] = (0, MT.useState)(mT),
        qT = nT && BT(jT);
      if (!nT) {
        const TT = (0, kT.isMobile)() ? "screen recording" : "OBS";
        return (0, ZT.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, ZT.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, ZT.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${TT}.`
          }), (0, ZT.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, ZT.jsx)(HT.I, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                zT.options = null, gT()
              },
              children: "Close"
            })
          })]
        })
      }
      const iT = UT ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        bT = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !LT,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            pT(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: LT,
          disabled: !mT,
          disabledReason: WT,
          onSelect: () => {
            pT(!0)
          }
        }],
        OT = cT.map((TT => {
          const UT = BT(TT.id);
          return {
            id: TT.id,
            label: TT.label,
            description: TT.description,
            selected: jT === TT.id,
            disabled: !UT,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              lT(TT.id)
            }
          }
        }));
      return (0, ZT.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, ZT.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, ZT.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: iT
        }), (0, ZT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ZT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, ZT.jsx)(fT, {
            cards: bT
          })]
        }), (0, ZT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, ZT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, ZT.jsx)(fT, {
            cards: OT
          })]
        }), (0, ZT.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, ZT.jsx)(HT.l, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !qT,
            onClick: () => {
              zT.options = {
                format: jT,
                includeUi: mT && LT
              }, gT()
            },
            children: "Export"
          }), (0, ZT.jsx)(HT.I, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              zT.options = null, gT()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var iT = mT(4959),
      bT = mT(37090),
      OT = mT(37095);
    let eT = null;

    function YT() {
      return function() {
        const TT = (0, OT.e)();
        for (const {
            group: UT,
            dataAttr: mT
          }
          of bT.g)
          if (mT && TT[UT]) return !0;
        return !1
      }() ? function() {
        var TT;
        return "function" === typeof(null === (TT = navigator.mediaDevices) || void 0 === TT ? void 0 : TT.getDisplayMedia)
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
    async function JT(TT, UT, mT) {
      return TT ? async function() {
        const TT = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const UT of TT.getAudioTracks()) UT.stop(), TT.removeTrack(UT);
        return TT
      }(): UT().captureStream(Math.max(1, Math.round(mT)))
    }
    var xT = mT(39233);
    let dT = !1;

    function wT(TT) {
      TT.holdInput(!1), (0, xT.f)(!1)
    }
    async function tT(TT) {
      var UT, mT;
      if ((0, xT.d)() || dT) return;
      const MT = TT();
      if (!MT) return;
      dT = !0;
      let gT = null;
      const nT = MT.playbackMarkInTick,
        {
          canIncludeUi: HT,
          includeUiDisabledReason: kT
        } = YT();
      try {
        gT = await async function(TT) {
          let {
            hasPlaybackMark: UT,
            canIncludeUi: mT,
            includeUiDisabledReason: WT
          } = TT;
          const MT = {
              options: null
            },
            gT = zT.NotificationProvider.showCustomPopup({
              body: TT => (0, ZT.jsx)(qT, {
                hasPlaybackMark: UT,
                canIncludeUi: mT,
                includeUiDisabledReason: WT,
                selectionRef: MT,
                closePopup: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await gT.getResult() ? null : MT.options
        }({
          hasPlaybackMark: null !== nT,
          canIncludeUi: HT,
          includeUiDisabledReason: kT
        })
      } finally {
        dT = !1
      }
      if (!gT) return;
      const jT = null !== (UT = null === (mT = MT.startFailure) || void 0 === mT ? void 0 : mT.call(MT)) && void 0 !== UT ? UT : null;
      if (null !== jT) return void zT.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: jT
      });
      if (! function(TT) {
          return !(0, xT.d)() && ((0, xT.f)(!0), TT.holdInput(!0), !0)
        }(MT)) return;
      let lT = null;
      try {
        lT = await JT(gT.includeUi, (() => MT.canvas()), MT.sF)
      } catch (aT) {
        return console.error("Failed to create video stream for export", aT), wT(MT), void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: aT instanceof Error ? aT.message : "Could not start capture."
        })
      }
      let BT = null;
      const cT = [];
      let vT = null,
        fT = null;
      try {
        var bT, OT, tT;
        BT = MT.playbackSpeed(), MT.closeViewer(), MT.setPlaybackSpeed(1), MT.pause(), MT.seekToTick(null !== nT && void 0 !== nT ? nT : 0);
        const TT = await async function() {
          const TT = iT.Howler.masterGain;
          if (!iT.Howler.ctx || !TT) return null;
          await iT.Howler.ctx.resume();
          const UT = iT.Howler.ctx.createMediaStreamDestination();
          TT.connect(UT), eT = UT;
          const [mT] = UT.stream.getAudioTracks();
          return null !== mT && void 0 !== mT ? mT : null
        }();
        fT = new MediaStream;
        for (const WT of lT.getVideoTracks()) fT.addTrack(WT);
        TT && fT.addTrack(TT);
        const UT = function(TT) {
          const UT = pT(LT(TT));
          if (!UT) throw new Error(`No MediaRecorder mime type available for ${TT}`);
          return UT
        }(gT.format);
        vT = new MediaRecorder(fT, {
          mimeType: UT,
          videoBitsPerSecond: 8e6
        }), vT.ondataavailable = TT => {
          TT.data.size > 0 && cT.push(TT.data)
        };
        const mT = new Promise((TT => {
          vT.onstop = () => {
            TT()
          }
        }));
        await (null === (bT = MT.seekSettled) || void 0 === bT ? void 0 : bT.call(MT));
        const [HT] = lT.getVideoTracks();
        vT.start(250), MT.play();
        const kT = await
        function(TT, UT, mT) {
          return new Promise((WT => {
            let zT = !1;
            const MT = TT => {
                zT || (zT = !0, nT(), UT.removeEventListener("ended", gT), WT(TT))
              },
              gT = () => {
                MT("captureLost")
              },
              nT = TT.watchPlayback((() => {
                TT.isPlaying() || MT("completed")
              }));
            UT.addEventListener("ended", gT), mT.onerror = () => {
              MT("recorderError")
            }, "ended" !== UT.readyState ? TT.isPlaying() || MT("completed") : MT("captureLost")
          }))
        }(MT, HT, vT);
        if (MT.pause(), "inactive" !== vT.state && vT.stop(), await mT, "captureLost" === kT) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === kT) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const jT = null !== (OT = null === (tT = MT.playbackFailure) || void 0 === tT ? void 0 : tT.call(MT)) && void 0 !== OT ? OT : null;
        if (null !== jT) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${jT} Nothing was saved.`
        });
        const ZT = new Blob(cT, {
          type: UT
        });
        ZT.size > 0 ? (0, WT.c)(ZT, function(TT, UT) {
          const mT = function(TT) {
            return "mp4" === TT ? "mp4" : "webm"
          }(UT);
          if (TT) return `${TT.replace(/\.bloxdreplay$/i,"")}.${mT}`;
          return `bloxd-replay-${Date.now()}.${mT}`
        }(MT.fileName(), gT.format)) : zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (aT) {
        console.error("Replay video export failed", aT), zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: aT instanceof Error ? aT.message : "Something went wrong while exporting."
        })
      } finally {
        if (vT && "inactive" !== vT.state) try {
          vT.stop()
        } catch (aT) {
          console.error("Failed to stop MediaRecorder", aT)
        }! function() {
          const TT = iT.Howler.masterGain;
          if (eT && TT) {
            try {
              TT.disconnect(eT)
            } catch (aT) {
              console.error("Failed to disconnect Howler export tee", aT)
            }
            eT = null
          } else eT = null
        }();
        for (const TT of lT.getTracks()) TT.stop();
        if (fT)
          for (const TT of fT.getTracks()) TT.stop();
        null !== BT && MT.setPlaybackSpeed(BT), MT.pause(), wT(MT), MT.reopenViewer()
      }
    }
  },
  4959: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      musicOutput: () => cT,
      readyAudioContext: () => vT
    });
    var WT, zT = mT(4966),
      MT = mT(3536),
      gT = mT(4741);
    const nT = zT.Howler;

    function HT() {
      var TT, UT;
      if (nT.ctx || !nT.usingWebAudio || "undefined" === typeof AudioContext || !(0, gT.j)()) return;
      const mT = navigator.audioSession;
      let WT;
      "auto" === (null === mT || void 0 === mT ? void 0 : mT.type) && (mT.type = "ambient");
      try {
        WT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = WT.createGain();
      zT.gain.setValueAtTime(nT._muted ? 0 : null !== (TT = nT._volume) && void 0 !== TT ? TT : 1, WT.currentTime), zT.connect(WT.destination), nT.ctx = WT, nT.masterGain = zT, null === (UT = nT._setup) || void 0 === UT || UT.call(nT)
    }
    nT._mobileUnloaded = !0;
    const kT = nT.volume.bind(zT.Howler);
    nT.volume = function() {
      return HT(), kT(...arguments)
    };
    const jT = nT.mute.bind(zT.Howler);
    nT.mute = TT => (HT(), jT(TT));
    const lT = zT.Howl.prototype,
      LT = lT.init;

    function pT() {
      for (; nT._html5AudioPool.length < nT.html5PoolSize;) {
        const TT = new Audio;
        TT._unlocked = !0, nT._releaseHtml5Audio(TT)
      }
      for (const UT of nT._howls)
        if (!UT._webAudio)
          for (const mT of UT._getSoundIds()) {
            var TT;
            const WT = null === (TT = UT._soundById(mT)) || void 0 === TT ? void 0 : TT._node;
            WT && !WT._unlocked && (WT._unlocked = !0, WT.load())
          }
    }
    lT.init = function(TT) {
      return HT(), LT.call(this, TT)
    }, (0, gT.j)() && (nT._unlockAudio = () => {
      const TT = nT.ctx;
      if (nT._audioUnlocked || !TT) return;
      nT.autoUnlock = !1;
      const UT = TT.createBuffer(1, 1, 22050);
      nT._scratchBuffer = UT;
      const mT = new AbortController;
      let WT = "afterPaint";
      const zT = () => {
          var WT;
          if (nT._audioUnlocked) return;
          null === (WT = nT._autoResume) || void 0 === WT || WT.call(nT);
          const zT = TT.createBufferSource();
          zT.buffer = UT, zT.connect(TT.destination), zT.start(0), TT.resume().catch((() => {})), zT.onended = () => {
            zT.disconnect(0), nT._audioUnlocked = !0, mT.abort();
            for (const TT of nT._howls) TT._emit("unlock")
          }
        },
        HT = () => {
          pT(), zT()
        },
        kT = UT => {
          if (pT(), "inTap" === WT) {
            if ("running" === TT.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), zT()
          } else "afterPaint" === WT && (WT = "queued", (0, MT.e)(UT.timeStamp, (() => {
            WT = "inTap", zT()
          })))
        };
      for (const MT of ["touchstart", "touchend"]) document.addEventListener(MT, HT, {
        capture: !0,
        signal: mT.signal
      });
      for (const MT of gT.c) document.addEventListener(MT, kT, {
        capture: !0,
        signal: mT.signal
      })
    });
    let BT = 0;
    const ZT = null === (WT = nT._autoSuspend) || void 0 === WT ? void 0 : WT.bind(zT.Howler);

    function cT() {
      vT();
      const {
        ctx: TT,
        masterGain: UT
      } = nT;
      return TT && UT ? {
        ctx: TT,
        destination: UT,
        holdAwake: TT => {
          var UT, mT;
          (BT += TT ? 1 : -1, TT) ? null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT): null === (mT = nT._autoSuspend) || void 0 === mT || mT.call(nT)
        },
        wake: () => {
          var UT;
          "running" !== TT.state && (null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function vT() {
      var TT;
      (nT.volume(), nT.ctx && nT.autoUnlock) && (null === (TT = nT._unlockAudio) || void 0 === TT || TT.call(nT))
    }
    ZT && (nT._autoSuspend = () => BT > 0 ? zT.Howler : ZT())
  },
  42746: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      e: () => zT
    });
    const WT = ["recording", "freecam", "keyframe"];

    function zT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  60490: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      HOLD_TIMEOUT_MS: () => kT,
      ReplayViewer: () => lT
    });
    var WT = mT(37042),
      zT = mT(37084),
      MT = mT(37076),
      gT = mT(37095),
      nT = mT(4895),
      HT = mT(42746);
    const kT = 1e4,
      jT = new Set(["Np"]);
    class lT {
      constructor(TT) {
        var UT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (UT = TT.now) && void 0 !== UT ? UT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== nT.qd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get fn() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? WT.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, UT) {
        var mT, MT, gT, HT;
        const {
          client: kT
        } = this.deps;
        if (!this.playback) {
          if (!kT.setPlayback(!0)) throw new Error(WT.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const jT = this.epoch;
        let lT;
        try {
          lT = await kT.open(TT, (() => (0, zT.d)(TT, UT)))
        } finally {
          this.loadingOpens--
        }
        if (jT !== this.epoch && "reloading" !== lT) throw new Error(WT.c.coreStopped.text);
        if ("opening" !== lT) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case nT.dd.ModuleTrap:
                return WT.c.coreStopped;
              case nT.dd.ModuleLoad:
                return WT.c.viewerLoadFailed;
              case nT.dd.TooLarge:
                return WT.c.cantOpen
            }
          }(lT);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(WT.c.saveClosed.text)), this.fileName = null !== (mT = null !== (MT = UT.fileName) && void 0 !== MT ? MT : null === (gT = UT.fileHandle) || void 0 === gT ? void 0 : gT.name) && void 0 !== mT ? mT : null, this.fileHandle = null !== (HT = UT.fileHandle) && void 0 !== HT ? HT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, UT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: UT
          }
        }))
      }
      play() {
        this.holds.has("Np") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Np")
      }
      seek(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const mT = this.lastView;
        null !== mT && (UT || TT < mT.Cl) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, UT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== nT.qd.None && this.setCameraMode(HT.c[(HT.c.indexOf(TT.cameraMode) + 1) % HT.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, UT) {
        this.edited(this.deps.client.moveKeyframe(TT, UT))
      }
      deleteKeyframes(TT, UT) {
        this.edited(this.deps.client.deleteKeyframes(TT, UT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, UT) {
        return !(UT <= TT) && (null !== this.pendingSave ? (this.deps.notify(WT.c.saveBusy), !1) : !!this.deps.client.crop(TT, UT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(WT.c.saveBusy.text)) : new Promise(((TT, UT) => {
          const mT = {
            resolve: TT,
            reject: UT
          };
          this.pendingSave = mT, this.editsAtSave = this.edits, this.deps.client.save((0, HT.e)()).then((TT => {
            this.pendingSave === mT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === mT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
          }))
        }))
      }
      saveStarted(TT) {
        switch (TT) {
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
      markSaved(TT, UT) {
        var mT, WT;
        this.fileHandle = TT, this.fileName = null !== (mT = null !== (WT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== WT ? WT : UT) && void 0 !== mT ? mT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(WT.c.coreStopped.text)), this.rejectSave(new Error(WT.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, UT, mT;
        const WT = this.deps.client.view(),
          zT = WT !== this.lastView;
        this.lastView = WT, this.opening && null !== WT && WT.state !== nT.qd.None && WT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, gT.f)()), this.cropAsked ? (this.cropAsked = !1, null !== WT && WT.state === nT.qd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== WT && WT.state !== nT.qd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const MT = 0 === this.settleFrames && 0 === (null !== (TT = null === (UT = (mT = this.deps).meshPending) || void 0 === UT ? void 0 : UT.call(mT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && MT && this.release("opening"), this.holds.has("seek") && MT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && MT && this.release("crop");
        const HT = this.now();
        for (const [gT, nT] of this.holds) !jT.has(gT) && HT - nT >= kT && this.release(gT);
        this.saveRefused && !this.cropping && this.saveFailed(!1), zT && this.deps.onChange()
      }
      cropped() {
        (0, gT.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case nT.dd.TooLarge:
            break;
          case nT.dd.Open:
          case nT.dd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const UT = (0, MT.g)(TT.version) ? WT.c.replayTooOld : WT.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(UT), this.settleOpen(new Error(UT.text));
            break
          }
          case nT.dd.Crop:
            if (TT.code === nT.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(WT.c.cropFailed);
            break;
          case nT.dd.ModuleTrap:
          case nT.dd.ModuleLoad:
          case nT.dd.Port:
            this.moduleEnded(TT.reason === nT.dd.ModuleTrap ? WT.c.coreStopped : WT.c.cantOpen);
            break;
          case nT.dd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${TT.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(TT) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(TT), this.settleOpen(new Error(TT.text))
      }
      saveDone(TT) {
        const UT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === UT || void 0 === UT || UT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? WT.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(WT.c.cropBusy.text)) : this.deps.notify(WT.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const UT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === UT || void 0 === UT || UT.resolve() : null === UT || void 0 === UT || UT.reject(TT)
      }
      rejectSave(TT) {
        const UT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === UT || void 0 === UT || UT.reject(TT)
      }
      hold(TT) {
        const UT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), UT && this.deps.setHoldDraws(!0)
      }
      release(TT) {
        this.holds.delete(TT) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60488: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      MESH_TAIL_MS: () => kT,
      PLAY_START_TIMEOUT_MS: () => nT,
      startWasmReplayVideoExport: () => lT
    });
    var WT = mT(39370),
      zT = mT(60490),
      MT = mT(4895),
      gT = mT(2534);
    const nT = zT.HOLD_TIMEOUT_MS + 5e3,
      HT = 50,
      kT = 200;

    function jT(TT) {
      var UT;
      return (null === (UT = TT.view) || void 0 === UT ? void 0 : UT.state) === MT.qd.Cropping || TT.fn.includes("crop")
    }

    function lT(TT) {
      return (0, WT.c)((() => function(TT) {
        var UT, mT, WT, zT, lT, LT;
        const pT = TT.viewer(),
          BT = null !== (UT = null === pT || void 0 === pT ? void 0 : pT.view) && void 0 !== UT ? UT : null,
          ZT = TT.canvas();
        if (!pT || !BT || BT.state === MT.qd.None || 0 === BT.totalTicks || !ZT || jT(pT)) return null;
        const cT = null !== (mT = TT.now) && void 0 !== mT ? mT : () => performance.now(),
          vT = pT.id,
          fT = () => {
            const UT = TT.viewer();
            return UT === pT && UT.id === vT && UT.isOpen ? UT : null
          },
          qT = Math.min(null !== (WT = null === (zT = BT.mark) || void 0 === zT ? void 0 : zT.outTick) && void 0 !== WT ? WT : 1 / 0, BT.totalTicks - 1);
        let iT = null,
          bT = !1;
        const OT = () => {
          var TT, UT;
          return (null === (TT = fT()) || void 0 === TT || null === (UT = TT.view) || void 0 === UT ? void 0 : UT.state) === MT.qd.Playing
        };
        return {
          sF: MT.Md,
          playbackMarkInTick: null !== (lT = null === (LT = BT.mark) || void 0 === LT ? void 0 : LT.inTick) && void 0 !== lT ? lT : null,
          startFailure: () => {
            const TT = fT();
            return null === TT ? "Another replay opened. Export it again from there." : jT(TT) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var TT, UT;
            return null !== (TT = null === (UT = fT()) || void 0 === UT ? void 0 : UT.fileName) && void 0 !== TT ? TT : null
          },
          playbackSpeed: () => {
            var TT, UT, mT;
            return null !== (TT = null === (UT = fT()) || void 0 === UT || null === (mT = UT.view) || void 0 === mT ? void 0 : mT.speed) && void 0 !== TT ? TT : 1
          },
          setPlaybackSpeed: TT => {
            var UT;
            null === (UT = fT()) || void 0 === UT || UT.setSpeed(TT)
          },
          play: () => {
            var TT;
            bT = !1, iT = cT(), null === (TT = fT()) || void 0 === TT || TT.play()
          },
          pause: () => {
            var TT;
            null === (TT = fT()) || void 0 === TT || TT.pause()
          },
          seekToTick: TT => {
            var UT;
            null === (UT = fT()) || void 0 === UT || UT.seek(TT, !0)
          },
          seekSettled: () => new Promise((TT => {
            const UT = setInterval((() => {
              const mT = fT();
              null === mT ? (clearInterval(UT), TT()) : mT.fn.includes("seek") || (clearInterval(UT), setTimeout(TT, kT))
            }), HT)
          })),
          isPlaying: () => {
            var TT, UT, mT;
            return null !== iT && null !== fT() && (!!OT() || !bT && (null !== (TT = null === (UT = fT()) || void 0 === UT || null === (mT = UT.view) || void 0 === mT ? void 0 : mT.Cl) && void 0 !== TT ? TT : 0) < qT && cT() - iT < nT)
          },
          watchPlayback: UT => {
            const mT = TT.watchViewer((() => {
                bT ||= null !== iT && OT(), UT()
              })),
              WT = setTimeout(UT, nT + 1);
            return () => {
              clearTimeout(WT), mT()
            }
          },
          playbackFailure: () => {
            var TT, UT;
            const mT = fT();
            return null === mT ? "The replay closed before the video finished." : (null !== (TT = null === (UT = mT.view) || void 0 === UT ? void 0 : UT.Cl) && void 0 !== TT ? TT : 0) >= qT ? null : bT ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => ZT,
          closeViewer: () => {
            TT.requestViewer("close")
          },
          reopenViewer: () => {
            TT.requestViewer("open")
          },
          holdInput: gT.d
        }
      }(TT)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);