export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  37033: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      f: () => xq
    });
    var Yq = gq(31);
    const lq = 1500,
      Oq = 1e3,
      mq = {
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

    function xq(qq) {
      var Eq;
      const gq = null !== (Eq = qq.timeoutMs) && void 0 !== Eq ? Eq : "Error" === qq.type ? lq : Oq;
      Yq.i.TV("showBottomMessage", {
        message: qq.text,
        timeoutLength: gq,
        type: qq.type
      })
    }
  },
  37050: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      e: () => lq
    });
    const Yq = "data-replay-ui-active",
      lq = [{
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
  37054: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      e: () => Bq,
      i: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(37050);

    function mq() {
      const qq = {};
      for (const {
          group: Eq
        }
        of Oq.e) qq[Eq] = !0;
      return qq
    }
    let xq = mq();

    function Aq() {
      lq.i.TV("replayViewer|uiVisibilityChanged")
    }

    function cq() {
      return xq
    }

    function uq(qq, Eq) {
      xq[qq] !== Eq && (xq = {
        ...xq,
        [qq]: Eq
      }, "nametag" === qq && Yq.b.set({
        areNametagsHidden: !Eq
      }), Aq())
    }

    function Bq() {
      xq = mq(), Yq.b.set({
        areNametagsHidden: !1
      }), Aq()
    }
  },
  39183: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => iq
    });
    var Yq = gq(1725),
      lq = gq(1336),
      Oq = gq(57),
      mq = gq(1018),
      xq = gq.n(mq),
      Aq = gq(1422),
      cq = gq(96);
    const uq = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Bq = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Wq(qq) {
      return "webm" === qq ? uq : Bq
    }

    function Nq(qq) {
      for (const Eq of qq)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Eq)) return Eq;
      return null
    }

    function aq(qq) {
      return null !== Nq(Wq(qq))
    }
    var Vq = gq(1070);
    const dq = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function jq() {
      return aq("webm") ? "webm" : aq("mp4") ? "mp4" : "webm"
    }

    function Hq(qq) {
      let {
        cards: Eq
      } = qq;
      return (0, Vq.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Eq.map((qq => (0, Vq.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Vq.jsx)("div", {
            className: xq()("ReplayVideoExportOptionCard", {
              Selected: qq.selected,
              Disabled: qq.disabled
            }),
            onClick: () => {
              qq.disabled || qq.onSelect()
            },
            children: (0, Vq.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Vq.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: qq.label
              }), (0, Vq.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: qq.description
              })]
            })
          }), qq.disabled && qq.disabledReason && (0, Vq.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: qq.disabledReason
          })]
        }, qq.id)))
      })
    }
    const oq = (0, Oq.memo)((function(qq) {
      let {
        hasPlaybackMark: Eq,
        canIncludeUi: gq,
        includeUiDisabledReason: Yq,
        selectionRef: lq,
        closePopup: mq
      } = qq;
      const xq = aq("webm") || aq("mp4"),
        [uq, Bq] = (0, Oq.useState)(jq),
        [Wq, Nq] = (0, Oq.useState)(gq),
        oq = xq && aq(uq);
      if (!xq) {
        const qq = (0, cq.isMobile)() ? "screen recording" : "OBS";
        return (0, Vq.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Vq.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Vq.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${qq}.`
          }), (0, Vq.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Vq.jsx)(Aq.K, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                lq.options = null, mq()
              },
              children: "Close"
            })
          })]
        })
      }
      const Pq = Eq ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Qq = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Wq,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Nq(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Wq,
          disabled: !gq,
          disabledReason: Yq,
          onSelect: () => {
            Nq(!0)
          }
        }],
        yq = dq.map((qq => {
          const Eq = aq(qq.id);
          return {
            id: qq.id,
            label: qq.label,
            description: qq.description,
            selected: uq === qq.id,
            disabled: !Eq,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Bq(qq.id)
            }
          }
        }));
      return (0, Vq.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Vq.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Vq.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Pq
        }), (0, Vq.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Vq.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Vq.jsx)(Hq, {
            cards: Qq
          })]
        }), (0, Vq.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Vq.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Vq.jsx)(Hq, {
            cards: yq
          })]
        }), (0, Vq.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Vq.jsx)(Aq.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !oq,
            onClick: () => {
              lq.options = {
                format: uq,
                includeUi: gq && Wq
              }, mq()
            },
            children: "Export"
          }), (0, Vq.jsx)(Aq.K, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              lq.options = null, mq()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Pq = gq(4684),
      Qq = gq(37050),
      yq = gq(37054);
    let tq = null;

    function rq() {
      return function() {
        const qq = (0, yq.c)();
        for (const {
            group: Eq,
            dataAttr: gq
          }
          of Qq.e)
          if (gq && qq[Eq]) return !0;
        return !1
      }() ? function() {
        var qq;
        return "function" === typeof(null === (qq = navigator.mediaDevices) || void 0 === qq ? void 0 : qq.getDisplayMedia)
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
    async function vq(qq, Eq, gq) {
      return qq ? async function() {
        const qq = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Eq of qq.getAudioTracks()) Eq.stop(), qq.removeTrack(Eq);
        return qq
      }(): Eq().captureStream(Math.max(1, Math.round(gq)))
    }
    var hq = gq(39024);
    let nq = !1;

    function bq(qq) {
      qq.holdInput(!1), (0, hq.c)(!1)
    }
    async function iq(qq) {
      var Eq, gq;
      if ((0, hq.b)() || nq) return;
      const Oq = qq();
      if (!Oq) return;
      nq = !0;
      let mq = null;
      const xq = Oq.playbackMarkInTick,
        {
          canIncludeUi: Aq,
          includeUiDisabledReason: cq
        } = rq();
      try {
        mq = await async function(qq) {
          let {
            hasPlaybackMark: Eq,
            canIncludeUi: gq,
            includeUiDisabledReason: Yq
          } = qq;
          const Oq = {
              options: null
            },
            mq = lq.NotificationProvider.showCustomPopup({
              body: qq => (0, Vq.jsx)(oq, {
                hasPlaybackMark: Eq,
                canIncludeUi: gq,
                includeUiDisabledReason: Yq,
                selectionRef: Oq,
                closePopup: qq
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await mq.getResult() ? null : Oq.options
        }({
          hasPlaybackMark: null !== xq,
          canIncludeUi: Aq,
          includeUiDisabledReason: cq
        })
      } finally {
        nq = !1
      }
      if (!mq) return;
      const uq = null !== (Eq = null === (gq = Oq.startFailure) || void 0 === gq ? void 0 : gq.call(Oq)) && void 0 !== Eq ? Eq : null;
      if (null !== uq) return void lq.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: uq
      });
      if (! function(qq) {
          return !(0, hq.b)() && ((0, hq.c)(!0), qq.holdInput(!0), !0)
        }(Oq)) return;
      let Bq = null;
      try {
        Bq = await vq(mq.includeUi, (() => Oq.canvas()), Oq.bJ)
      } catch (Zq) {
        return console.error("Failed to create video stream for export", Zq), bq(Oq), void lq.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Zq instanceof Error ? Zq.message : "Could not start capture."
        })
      }
      let aq = null;
      const dq = [];
      let jq = null,
        Hq = null;
      try {
        var Qq, yq, iq;
        aq = Oq.playbackSpeed(), Oq.closeViewer(), Oq.setPlaybackSpeed(1), Oq.pause(), Oq.seekToTick(null !== xq && void 0 !== xq ? xq : 0);
        const qq = await async function() {
          const qq = Pq.Howler.masterGain;
          if (!Pq.Howler.ctx || !qq) return null;
          await Pq.Howler.ctx.resume();
          const Eq = Pq.Howler.ctx.createMediaStreamDestination();
          qq.connect(Eq), tq = Eq;
          const [gq] = Eq.stream.getAudioTracks();
          return null !== gq && void 0 !== gq ? gq : null
        }();
        Hq = new MediaStream;
        for (const Yq of Bq.getVideoTracks()) Hq.addTrack(Yq);
        qq && Hq.addTrack(qq);
        const Eq = function(qq) {
          const Eq = Nq(Wq(qq));
          if (!Eq) throw new Error(`No MediaRecorder mime type available for ${qq}`);
          return Eq
        }(mq.format);
        jq = new MediaRecorder(Hq, {
          mimeType: Eq,
          videoBitsPerSecond: 8e6
        }), jq.ondataavailable = qq => {
          qq.data.size > 0 && dq.push(qq.data)
        };
        const gq = new Promise((qq => {
          jq.onstop = () => {
            qq()
          }
        }));
        await (null === (Qq = Oq.seekSettled) || void 0 === Qq ? void 0 : Qq.call(Oq));
        const [Aq] = Bq.getVideoTracks();
        jq.start(250), Oq.play();
        const cq = await
        function(qq, Eq, gq) {
          return new Promise((Yq => {
            let lq = !1;
            const Oq = qq => {
                lq || (lq = !0, xq(), Eq.removeEventListener("ended", mq), Yq(qq))
              },
              mq = () => {
                Oq("captureLost")
              },
              xq = qq.watchPlayback((() => {
                qq.isPlaying() || Oq("completed")
              }));
            Eq.addEventListener("ended", mq), gq.onerror = () => {
              Oq("recorderError")
            }, "ended" !== Eq.readyState ? qq.isPlaying() || Oq("completed") : Oq("captureLost")
          }))
        }(Oq, Aq, jq);
        if (Oq.pause(), "inactive" !== jq.state && jq.stop(), await gq, "captureLost" === cq) return void lq.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === cq) return void lq.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const uq = null !== (yq = null === (iq = Oq.playbackFailure) || void 0 === iq ? void 0 : iq.call(Oq)) && void 0 !== yq ? yq : null;
        if (null !== uq) return void lq.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${uq} Nothing was saved.`
        });
        const Vq = new Blob(dq, {
          type: Eq
        });
        Vq.size > 0 ? (0, Yq.e)(Vq, function(qq, Eq) {
          const gq = function(qq) {
            return "mp4" === qq ? "mp4" : "webm"
          }(Eq);
          if (qq) return `${qq.replace(/\.bloxdreplay$/i,"")}.${gq}`;
          return `bloxd-replay-${Date.now()}.${gq}`
        }(Oq.fileName(), mq.format)) : lq.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Zq) {
        console.error("Replay video export failed", Zq), lq.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Zq instanceof Error ? Zq.message : "Something went wrong while exporting."
        })
      } finally {
        if (jq && "inactive" !== jq.state) try {
          jq.stop()
        } catch (Zq) {
          console.error("Failed to stop MediaRecorder", Zq)
        }! function() {
          const qq = Pq.Howler.masterGain;
          if (tq && qq) {
            try {
              qq.disconnect(tq)
            } catch (Zq) {
              console.error("Failed to disconnect Howler export tee", Zq)
            }
            tq = null
          } else tq = null
        }();
        for (const qq of Bq.getTracks()) qq.stop();
        if (Hq)
          for (const qq of Hq.getTracks()) qq.stop();
        null !== aq && Oq.setPlaybackSpeed(aq), Oq.pause(), bq(Oq), Oq.reopenViewer()
      }
    }
  },
  4684: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Howl: () => lq.Howl,
      Howler: () => lq.Howler,
      musicOutput: () => aq,
      readyAudioContext: () => Vq
    });
    var Yq, lq = gq(4692),
      Oq = gq(4477);
    const mq = lq.Howler;

    function xq() {
      var qq, Eq;
      if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
      const gq = navigator.audioSession;
      let Yq;
      "auto" === (null === gq || void 0 === gq ? void 0 : gq.type) && (gq.type = "ambient");
      try {
        Yq = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const lq = Yq.createGain();
      lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
    }
    mq._mobileUnloaded = !0;
    const Aq = mq.volume.bind(lq.Howler);
    mq.volume = function() {
      return xq(), Aq(...arguments)
    };
    const cq = mq.mute.bind(lq.Howler);
    mq.mute = qq => (xq(), cq(qq));
    const uq = lq.Howl.prototype,
      Bq = uq.init;
    uq.init = function(qq) {
      return xq(), Bq.call(this, qq)
    };
    let Wq = 0;
    const Nq = null === (Yq = mq._autoSuspend) || void 0 === Yq ? void 0 : Yq.bind(lq.Howler);

    function aq() {
      Vq();
      const {
        ctx: qq,
        masterGain: Eq
      } = mq;
      return qq && Eq ? {
        ctx: qq,
        destination: Eq,
        holdAwake: qq => {
          var Eq, gq;
          (Wq += qq ? 1 : -1, qq) ? null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq): null === (gq = mq._autoSuspend) || void 0 === gq || gq.call(mq)
        },
        wake: () => {
          var Eq;
          "running" !== qq.state && (null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq), qq.resume().catch((() => {})))
        }
      } : null
    }

    function Vq() {
      var qq;
      (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
    }
    Nq && (mq._autoSuspend = () => Wq > 0 ? lq.Howler : Nq())
  },
  42344: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      i: () => lq
    });
    const Yq = ["recording", "freecam", "keyframe"];

    function lq() {
      const qq = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(qq[1]) << 32n | BigInt(qq[0])
    }
  },
  42375: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      HOLD_TIMEOUT_MS: () => xq,
      ReplayViewer: () => cq
    });
    var Yq = gq(37033),
      lq = gq(37054),
      Oq = gq(4622),
      mq = gq(42344);
    const xq = 1e4,
      Aq = new Set(["pN"]);
    class cq {
      constructor(qq) {
        var Eq;
        this.deps = qq, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Eq = qq.now) && void 0 !== Eq ? Eq : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Oq.rd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Fc() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Yq.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(qq, Eq) {
        var gq, lq, mq, xq;
        const {
          client: Aq
        } = this.deps;
        if (!this.playback) {
          if (!Aq.setPlayback(!0)) throw new Error(Yq.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const cq = this.epoch;
        let uq;
        try {
          uq = await Aq.open(qq)
        } finally {
          this.loadingOpens--
        }
        if (cq !== this.epoch) throw new Error(Yq.d.coreStopped.text);
        if ("opening" !== uq) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const qq = function(qq) {
            switch (qq) {
              case "reloading":
                return null;
              case "stopped":
              case Oq.gd.ModuleTrap:
                return Yq.d.coreStopped;
              case Oq.gd.ModuleLoad:
                return Yq.d.viewerLoadFailed;
              case Oq.gd.TooLarge:
                return Yq.d.cantOpen
            }
          }(uq);
          if (null === qq) return;
          throw new Error(qq.text)
        }
        return this.rejectSave(new Error(Yq.d.saveClosed.text)), this.fileName = null !== (gq = null !== (lq = Eq.fileName) && void 0 !== lq ? lq : null === (mq = Eq.fileHandle) || void 0 === mq ? void 0 : mq.name) && void 0 !== gq ? gq : null, this.fileHandle = null !== (xq = Eq.fileHandle) && void 0 !== xq ? xq : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((qq, Eq) => {
          this.pendingOpen = {
            resolve: qq,
            reject: Eq
          }
        }))
      }
      play() {
        this.holds.has("pN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("pN")
      }
      seek(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = this.lastView;
        null !== gq && (Eq || qq < gq.SB) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(qq, Eq)
      }
      setSpeed(qq) {
        this.deps.client.setSpeed(qq)
      }
      setCameraMode(qq) {
        this.deps.client.setCameraMode(qq)
      }
      cycleCameraMode() {
        const qq = this.lastView;
        null !== qq && qq.state !== Oq.rd.None && this.setCameraMode(mq.e[(mq.e.indexOf(qq.cameraMode) + 1) % mq.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(qq) {
        this.edited(this.deps.client.setKeyframe(qq))
      }
      moveKeyframe(qq, Eq) {
        this.edited(this.deps.client.moveKeyframe(qq, Eq))
      }
      deleteKeyframes(qq, Eq) {
        this.edited(this.deps.client.deleteKeyframes(qq, Eq))
      }
      setMark(qq) {
        this.edited(this.deps.client.setMark(qq))
      }
      crop(qq, Eq) {
        return !(Eq <= qq) && (null !== this.pendingSave ? (this.deps.notify(Yq.d.saveBusy), !1) : !!this.deps.client.crop(qq, Eq) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Yq.d.saveBusy.text)) : new Promise(((qq, Eq) => {
          const gq = {
            resolve: qq,
            reject: Eq
          };
          this.pendingSave = gq, this.editsAtSave = this.edits, this.deps.client.save((0, mq.i)()).then((qq => {
            this.pendingSave === gq && this.saveStarted(qq)
          }), (qq => {
            this.pendingSave === gq && this.rejectSave(qq instanceof Error ? qq : new Error(String(qq)))
          }))
        }))
      }
      saveStarted(qq) {
        switch (qq) {
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
      markSaved(qq, Eq) {
        var gq, Yq;
        this.fileHandle = qq, this.fileName = null !== (gq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.name) && void 0 !== Yq ? Yq : Eq) && void 0 !== gq ? gq : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Yq.d.coreStopped.text)), this.rejectSave(new Error(Yq.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var qq, Eq, gq;
        const Yq = this.deps.client.view(),
          mq = Yq !== this.lastView;
        this.lastView = Yq, this.opening && null !== Yq && Yq.state !== Oq.rd.None && Yq.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, lq.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Yq && Yq.state === Oq.rd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Yq && Yq.state !== Oq.rd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const cq = 0 === this.settleFrames && 0 === (null !== (qq = null === (Eq = (gq = this.deps).meshPending) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && cq && this.release("opening"), this.holds.has("seek") && cq && this.release("seek"), this.holds.has("crop") && !this.cropRunning && cq && this.release("crop");
        const uq = this.now();
        for (const [lq, Oq] of this.holds) !Aq.has(lq) && uq - Oq >= xq && (this.release(lq), "opening" === lq && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), mq && this.deps.onChange()
      }
      cropped() {
        (0, lq.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(qq) {
        switch (qq.reason) {
          case Oq.gd.TooLarge:
            break;
          case Oq.gd.Open:
          case Oq.gd.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Yq.d.cantOpen), this.settleOpen(new Error(Yq.d.cantOpen.text));
            break;
          case Oq.gd.Crop:
            if (qq.code === Oq.dd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Yq.d.cropFailed);
            break;
          case Oq.gd.ModuleTrap:
          case Oq.gd.ModuleLoad:
          case Oq.gd.Port:
            this.moduleEnded(qq.reason === Oq.gd.ModuleTrap ? Yq.d.coreStopped : Yq.d.cantOpen);
            break;
          case Oq.gd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${qq.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(qq) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(qq), this.settleOpen(new Error(qq.text))
      }
      saveDone(qq) {
        const Eq = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eq || void 0 === Eq || Eq.resolve(qq)
      }
      saveFailed(qq) {
        this.rejectSave(new Error(qq ? Yq.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(qq) {
        qq && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Yq.d.cropBusy.text)) : this.deps.notify(Yq.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(qq) {
        const Eq = this.pendingOpen;
        this.pendingOpen = null, null === qq ? null === Eq || void 0 === Eq || Eq.resolve() : null === Eq || void 0 === Eq || Eq.reject(qq)
      }
      rejectSave(qq) {
        const Eq = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eq || void 0 === Eq || Eq.reject(qq)
      }
      hold(qq) {
        const Eq = 0 === this.holds.size;
        this.holds.set(qq, this.now()), Eq && this.deps.setHoldDraws(!0)
      }
      release(qq) {
        this.holds.delete(qq) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42373: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      MESH_TAIL_MS: () => cq,
      PLAY_START_TIMEOUT_MS: () => xq,
      startWasmReplayVideoExport: () => Bq
    });
    var Yq = gq(39183),
      lq = gq(42375),
      Oq = gq(4622),
      mq = gq(2371);
    const xq = lq.HOLD_TIMEOUT_MS + 5e3,
      Aq = 50,
      cq = 200;

    function uq(qq) {
      var Eq;
      return (null === (Eq = qq.view) || void 0 === Eq ? void 0 : Eq.state) === Oq.rd.Cropping || qq.Fc.includes("crop")
    }

    function Bq(qq) {
      return (0, Yq.b)((() => function(qq) {
        var Eq, gq, Yq, lq, Bq, Wq;
        const Nq = qq.viewer(),
          aq = null !== (Eq = null === Nq || void 0 === Nq ? void 0 : Nq.view) && void 0 !== Eq ? Eq : null,
          Vq = qq.canvas();
        if (!Nq || !aq || aq.state === Oq.rd.None || 0 === aq.totalTicks || !Vq || uq(Nq)) return null;
        const dq = null !== (gq = qq.now) && void 0 !== gq ? gq : () => performance.now(),
          jq = Nq.id,
          Hq = () => {
            const Eq = qq.viewer();
            return Eq === Nq && Eq.id === jq && Eq.isOpen ? Eq : null
          },
          oq = Math.min(null !== (Yq = null === (lq = aq.mark) || void 0 === lq ? void 0 : lq.outTick) && void 0 !== Yq ? Yq : 1 / 0, aq.totalTicks - 1);
        let Pq = null,
          Qq = !1;
        const yq = () => {
          var qq, Eq;
          return (null === (qq = Hq()) || void 0 === qq || null === (Eq = qq.view) || void 0 === Eq ? void 0 : Eq.state) === Oq.rd.Playing
        };
        return {
          bJ: Oq.Fd,
          playbackMarkInTick: null !== (Bq = null === (Wq = aq.mark) || void 0 === Wq ? void 0 : Wq.inTick) && void 0 !== Bq ? Bq : null,
          startFailure: () => {
            const qq = Hq();
            return null === qq ? "Another replay opened. Export it again from there." : uq(qq) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = Hq()) || void 0 === Eq ? void 0 : Eq.fileName) && void 0 !== qq ? qq : null
          },
          playbackSpeed: () => {
            var qq, Eq, gq;
            return null !== (qq = null === (Eq = Hq()) || void 0 === Eq || null === (gq = Eq.view) || void 0 === gq ? void 0 : gq.speed) && void 0 !== qq ? qq : 1
          },
          setPlaybackSpeed: qq => {
            var Eq;
            null === (Eq = Hq()) || void 0 === Eq || Eq.setSpeed(qq)
          },
          play: () => {
            var qq;
            Qq = !1, Pq = dq(), null === (qq = Hq()) || void 0 === qq || qq.play()
          },
          pause: () => {
            var qq;
            null === (qq = Hq()) || void 0 === qq || qq.pause()
          },
          seekToTick: qq => {
            var Eq;
            null === (Eq = Hq()) || void 0 === Eq || Eq.seek(qq, !0)
          },
          seekSettled: () => new Promise((qq => {
            const Eq = setInterval((() => {
              const gq = Hq();
              null === gq ? (clearInterval(Eq), qq()) : gq.Fc.includes("seek") || (clearInterval(Eq), setTimeout(qq, cq))
            }), Aq)
          })),
          isPlaying: () => {
            var qq, Eq, gq;
            return null !== Pq && null !== Hq() && (!!yq() || !Qq && (null !== (qq = null === (Eq = Hq()) || void 0 === Eq || null === (gq = Eq.view) || void 0 === gq ? void 0 : gq.SB) && void 0 !== qq ? qq : 0) < oq && dq() - Pq < xq)
          },
          watchPlayback: Eq => {
            const gq = qq.watchViewer((() => {
                Qq ||= null !== Pq && yq(), Eq()
              })),
              Yq = setTimeout(Eq, xq + 1);
            return () => {
              clearTimeout(Yq), gq()
            }
          },
          playbackFailure: () => {
            var qq, Eq;
            const gq = Hq();
            return null === gq ? "The replay closed before the video finished." : (null !== (qq = null === (Eq = gq.view) || void 0 === Eq ? void 0 : Eq.SB) && void 0 !== qq ? qq : 0) >= oq ? null : Qq ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Vq,
          closeViewer: () => {
            qq.requestViewer("close")
          },
          reopenViewer: () => {
            qq.requestViewer("open")
          },
          holdInput: mq.d
        }
      }(qq)))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);