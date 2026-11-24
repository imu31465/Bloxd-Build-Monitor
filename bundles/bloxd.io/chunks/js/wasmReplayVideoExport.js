export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37201: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      f: () => Pp
    });
    var Op = cp(640),
      op = cp(44),
      Ip = cp(37156);
    const Sp = "replayFileKeptForReload",
      xp = "replayFileKeptForReloadAt",
      Lp = "replayFileKeptForReloadTab",
      Yp = 3e5,
      Dp = 5e3;
    async function Ap(pp, ip) {
      const cp = Date.now(),
        Ip = {
          at: cp,
          bytes: pp,
          source: ip
        },
        Yp = await Promise.race([(async () => await op.g.setItem(xp, cp) && op.g.setItem(Sp, Ip))(), (0, Op.M)(Dp).then((() => !1))]);
      Yp || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Ap = {
        at: cp,
        aW: Yp
      };
      op.l.setItem(Lp, Ap)
    }
    async function Pp() {
      var pp;
      const ip = op.l.getItem(Lp);
      null !== ip && op.l.removeItem(Lp);
      const cp = Date.now(),
        Op = await op.g.getItem(xp),
        Dp = null !== ip && cp - ip.at <= Yp,
        Ap = null !== ip && Op === ip.at;
      let Pp = null;
      if (null !== Op && (Ap || ("number" !== typeof Op || cp - Op > Yp)) && (Pp = Dp && Ap && ip.aW ? await op.g.getItem(Sp) : null, await Promise.all([op.g.removeItem(xp), op.g.removeItem(Sp)])), !Dp) return null;
      if ((null === (pp = Pp) || void 0 === pp ? void 0 : pp.at) !== ip.at) throw new Error(Ip.c.replayNotKept.text);
      return {
        bytes: Pp.bytes,
        source: Pp.source
      }
    }
  },
  37192: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      g: () => Ip,
      h: () => op
    });
    const Op = [9];

    function op(pp) {
      return Op.includes(pp)
    }

    function Ip(pp) {
      return null !== pp && pp >= 3 && pp < Op[0]
    }
  },
  37156: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp,
      f: () => Yp,
      i: () => Lp
    });
    var Op = cp(34);
    const op = 1500,
      Ip = 1e3,
      Sp = {
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
      xp = new Set(Object.values(Sp).filter((pp => "Error" === pp.type)).map((pp => pp.text)));

    function Lp(pp) {
      return pp instanceof Error && xp.has(pp.message) ? pp.message : void 0
    }

    function Yp(pp) {
      var ip;
      const cp = null !== (ip = pp.timeoutMs) && void 0 !== ip ? ip : "Error" === pp.type ? op : Ip;
      Op.m.GA("showBottomMessage", {
        message: pp.text,
        timeoutLength: cp,
        type: pp.type
      })
    }
  },
  37209: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      h: () => op
    });
    const Op = "data-replay-ui-active",
      op = [{
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
  37215: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      f: () => Ap,
      j: () => Dp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(37209);

    function Sp() {
      const pp = {};
      for (const {
          group: ip
        }
        of Ip.h) pp[ip] = !0;
      return pp
    }
    let xp = Sp();

    function Lp() {
      op.m.GA("replayViewer|uiVisibilityChanged")
    }

    function Yp() {
      return xp
    }

    function Dp(pp, ip) {
      xp[pp] !== ip && (xp = {
        ...xp,
        [pp]: ip
      }, "nametag" === pp && Op.c.set({
        areNametagsHidden: !ip
      }), Lp())
    }

    function Ap() {
      xp = Sp(), Op.c.set({
        areNametagsHidden: !1
      }), Lp()
    }
  },
  39440: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ep
    });
    var Op = cp(1779),
      op = cp(1372),
      Ip = cp(62),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(1480),
      Yp = cp(104);
    const Dp = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Ap = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Pp(pp) {
      return "webm" === pp ? Dp : Ap
    }

    function Wp(pp) {
      for (const ip of pp)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ip)) return ip;
      return null
    }

    function yp(pp) {
      return null !== Wp(Pp(pp))
    }
    var Up = cp(1112);
    const wp = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function vp() {
      return yp("webm") ? "webm" : yp("mp4") ? "mp4" : "webm"
    }

    function tp(pp) {
      let {
        cards: ip
      } = pp;
      return (0, Up.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: ip.map((pp => (0, Up.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Up.jsx)("div", {
            className: xp()("ReplayVideoExportOptionCard", {
              Selected: pp.selected,
              Disabled: pp.disabled
            }),
            onClick: () => {
              pp.disabled || pp.onSelect()
            },
            children: (0, Up.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Up.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: pp.label
              }), (0, Up.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: pp.description
              })]
            })
          }), pp.disabled && pp.disabledReason && (0, Up.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: pp.disabledReason
          })]
        }, pp.id)))
      })
    }
    const Hp = (0, Ip.memo)((function(pp) {
      let {
        hasPlaybackMark: ip,
        canIncludeUi: cp,
        includeUiDisabledReason: Op,
        selectionRef: op,
        closePopup: Sp
      } = pp;
      const xp = yp("webm") || yp("mp4"),
        [Dp, Ap] = (0, Ip.useState)(vp),
        [Pp, Wp] = (0, Ip.useState)(cp),
        Hp = xp && yp(Dp);
      if (!xp) {
        const pp = (0, Yp.isMobile)() ? "screen recording" : "OBS";
        return (0, Up.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Up.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Up.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${pp}.`
          }), (0, Up.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Up.jsx)(Lp.K, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                op.options = null, Sp()
              },
              children: "Close"
            })
          })]
        })
      }
      const dp = ip ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        ep = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Pp,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Wp(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Pp,
          disabled: !cp,
          disabledReason: Op,
          onSelect: () => {
            Wp(!0)
          }
        }],
        jp = wp.map((pp => {
          const ip = yp(pp.id);
          return {
            id: pp.id,
            label: pp.label,
            description: pp.description,
            selected: Dp === pp.id,
            disabled: !ip,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Ap(pp.id)
            }
          }
        }));
      return (0, Up.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Up.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Up.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: dp
        }), (0, Up.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Up.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Up.jsx)(tp, {
            cards: ep
          })]
        }), (0, Up.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Up.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Up.jsx)(tp, {
            cards: jp
          })]
        }), (0, Up.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Up.jsx)(Lp.o, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Hp,
            onClick: () => {
              op.options = {
                format: Dp,
                includeUi: cp && Pp
              }, Sp()
            },
            children: "Export"
          }), (0, Up.jsx)(Lp.K, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              op.options = null, Sp()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var dp = cp(4974),
      ep = cp(37209),
      jp = cp(37215);
    let kp = null;

    function mp() {
      return function() {
        const pp = (0, jp.b)();
        for (const {
            group: ip,
            dataAttr: cp
          }
          of ep.h)
          if (cp && pp[ip]) return !0;
        return !1
      }() ? function() {
        var pp;
        return "function" === typeof(null === (pp = navigator.mediaDevices) || void 0 === pp ? void 0 : pp.getDisplayMedia)
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
    async function Rp(pp, ip, cp) {
      return pp ? async function() {
        const pp = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const ip of pp.getAudioTracks()) ip.stop(), pp.removeTrack(ip);
        return pp
      }(): ip().captureStream(Math.max(1, Math.round(cp)))
    }
    var qp = cp(39261);
    let Mp = !1;

    function Cp(pp) {
      pp.holdInput(!1), (0, qp.e)(!1)
    }
    async function Ep(pp) {
      var ip, cp;
      if ((0, qp.c)() || Mp) return;
      const Ip = pp();
      if (!Ip) return;
      Mp = !0;
      let Sp = null;
      const xp = Ip.playbackMarkInTick,
        {
          canIncludeUi: Lp,
          includeUiDisabledReason: Yp
        } = mp();
      try {
        Sp = await async function(pp) {
          let {
            hasPlaybackMark: ip,
            canIncludeUi: cp,
            includeUiDisabledReason: Op
          } = pp;
          const Ip = {
              options: null
            },
            Sp = op.NotificationProvider.showCustomPopup({
              body: pp => (0, Up.jsx)(Hp, {
                hasPlaybackMark: ip,
                canIncludeUi: cp,
                includeUiDisabledReason: Op,
                selectionRef: Ip,
                closePopup: pp
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Sp.getResult() ? null : Ip.options
        }({
          hasPlaybackMark: null !== xp,
          canIncludeUi: Lp,
          includeUiDisabledReason: Yp
        })
      } finally {
        Mp = !1
      }
      if (!Sp) return;
      const Dp = null !== (ip = null === (cp = Ip.startFailure) || void 0 === cp ? void 0 : cp.call(Ip)) && void 0 !== ip ? ip : null;
      if (null !== Dp) return void op.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Dp
      });
      if (! function(pp) {
          return !(0, qp.c)() && ((0, qp.e)(!0), pp.holdInput(!0), !0)
        }(Ip)) return;
      let Ap = null;
      try {
        Ap = await Rp(Sp.includeUi, (() => Ip.canvas()), Ip.Bl)
      } catch (Xp) {
        return console.error("Failed to create video stream for export", Xp), Cp(Ip), void op.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Xp instanceof Error ? Xp.message : "Could not start capture."
        })
      }
      let yp = null;
      const wp = [];
      let vp = null,
        tp = null;
      try {
        var ep, jp, Ep;
        yp = Ip.playbackSpeed(), Ip.closeViewer(), Ip.setPlaybackSpeed(1), Ip.pause(), Ip.seekToTick(null !== xp && void 0 !== xp ? xp : 0);
        const pp = await async function() {
          const pp = dp.Howler.masterGain;
          if (!dp.Howler.ctx || !pp) return null;
          await dp.Howler.ctx.resume();
          const ip = dp.Howler.ctx.createMediaStreamDestination();
          pp.connect(ip), kp = ip;
          const [cp] = ip.stream.getAudioTracks();
          return null !== cp && void 0 !== cp ? cp : null
        }();
        tp = new MediaStream;
        for (const Op of Ap.getVideoTracks()) tp.addTrack(Op);
        pp && tp.addTrack(pp);
        const ip = function(pp) {
          const ip = Wp(Pp(pp));
          if (!ip) throw new Error(`No MediaRecorder mime type available for ${pp}`);
          return ip
        }(Sp.format);
        vp = new MediaRecorder(tp, {
          mimeType: ip,
          videoBitsPerSecond: 8e6
        }), vp.ondataavailable = pp => {
          pp.data.size > 0 && wp.push(pp.data)
        };
        const cp = new Promise((pp => {
          vp.onstop = () => {
            pp()
          }
        }));
        await (null === (ep = Ip.seekSettled) || void 0 === ep ? void 0 : ep.call(Ip));
        const [Lp] = Ap.getVideoTracks();
        vp.start(250), Ip.play();
        const Yp = await
        function(pp, ip, cp) {
          return new Promise((Op => {
            let op = !1;
            const Ip = pp => {
                op || (op = !0, xp(), ip.removeEventListener("ended", Sp), Op(pp))
              },
              Sp = () => {
                Ip("captureLost")
              },
              xp = pp.watchPlayback((() => {
                pp.isPlaying() || Ip("completed")
              }));
            ip.addEventListener("ended", Sp), cp.onerror = () => {
              Ip("recorderError")
            }, "ended" !== ip.readyState ? pp.isPlaying() || Ip("completed") : Ip("captureLost")
          }))
        }(Ip, Lp, vp);
        if (Ip.pause(), "inactive" !== vp.state && vp.stop(), await cp, "captureLost" === Yp) return void op.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Yp) return void op.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Dp = null !== (jp = null === (Ep = Ip.playbackFailure) || void 0 === Ep ? void 0 : Ep.call(Ip)) && void 0 !== jp ? jp : null;
        if (null !== Dp) return void op.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Dp} Nothing was saved.`
        });
        const Up = new Blob(wp, {
          type: ip
        });
        Up.size > 0 ? (0, Op.c)(Up, function(pp, ip) {
          const cp = function(pp) {
            return "mp4" === pp ? "mp4" : "webm"
          }(ip);
          if (pp) return `${pp.replace(/\.bloxdreplay$/i,"")}.${cp}`;
          return `bloxd-replay-${Date.now()}.${cp}`
        }(Ip.fileName(), Sp.format)) : op.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Xp) {
        console.error("Replay video export failed", Xp), op.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Xp instanceof Error ? Xp.message : "Something went wrong while exporting."
        })
      } finally {
        if (vp && "inactive" !== vp.state) try {
          vp.stop()
        } catch (Xp) {
          console.error("Failed to stop MediaRecorder", Xp)
        }! function() {
          const pp = dp.Howler.masterGain;
          if (kp && pp) {
            try {
              pp.disconnect(kp)
            } catch (Xp) {
              console.error("Failed to disconnect Howler export tee", Xp)
            }
            kp = null
          } else kp = null
        }();
        for (const pp of Ap.getTracks()) pp.stop();
        if (tp)
          for (const pp of tp.getTracks()) pp.stop();
        null !== yp && Ip.setPlaybackSpeed(yp), Ip.pause(), Cp(Ip), Ip.reopenViewer()
      }
    }
  },
  4974: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Howl: () => op.Howl,
      Howler: () => op.Howler,
      musicOutput: () => wp,
      readyAudioContext: () => vp
    });
    var Op, op = cp(4977),
      Ip = cp(3546),
      Sp = cp(4743);
    const xp = op.Howler;

    function Lp() {
      var pp, ip;
      if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
      const cp = navigator.audioSession;
      let Op;
      "auto" === (null === cp || void 0 === cp ? void 0 : cp.type) && (cp.type = "ambient");
      try {
        Op = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const op = Op.createGain();
      op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
    }
    xp._mobileUnloaded = !0;
    const Yp = xp.volume.bind(op.Howler);
    xp.volume = function() {
      return Lp(), Yp(...arguments)
    };
    const Dp = xp.mute.bind(op.Howler);
    xp.mute = pp => (Lp(), Dp(pp));
    const Ap = op.Howl.prototype,
      Pp = Ap.init;

    function Wp() {
      for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
        const pp = new Audio;
        pp._unlocked = !0, xp._releaseHtml5Audio(pp)
      }
      for (const ip of xp._howls)
        if (!ip._webAudio)
          for (const cp of ip._getSoundIds()) {
            var pp;
            const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
            Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
          }
    }
    Ap.init = function(pp) {
      return Lp(), Pp.call(this, pp)
    }, (0, Sp.f)() && (xp._unlockAudio = () => {
      const pp = xp.ctx;
      if (xp._audioUnlocked || !pp) return;
      xp.autoUnlock = !1;
      const ip = pp.createBuffer(1, 1, 22050);
      xp._scratchBuffer = ip;
      const cp = new AbortController;
      let Op = "afterPaint";
      const op = () => {
          var Op;
          if (xp._audioUnlocked) return;
          null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
          const op = pp.createBufferSource();
          op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
            op.disconnect(0), xp._audioUnlocked = !0, cp.abort();
            for (const pp of xp._howls) pp._emit("unlock")
          }
        },
        Lp = () => {
          Wp(), op()
        },
        Yp = ip => {
          if (Wp(), "inTap" === Op) {
            if ("running" === pp.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
          } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
            Op = "inTap", op()
          })))
        };
      for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
        capture: !0,
        signal: cp.signal
      });
      for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
        capture: !0,
        signal: cp.signal
      })
    });
    let yp = 0;
    const Up = null === (Op = xp._autoSuspend) || void 0 === Op ? void 0 : Op.bind(op.Howler);

    function wp() {
      vp();
      const {
        ctx: pp,
        masterGain: ip
      } = xp;
      return pp && ip ? {
        ctx: pp,
        destination: ip,
        holdAwake: pp => {
          var ip, cp;
          (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
        },
        wake: () => {
          var ip;
          "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
        }
      } : null
    }

    function vp() {
      var pp;
      (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
    }
    Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
  },
  42875: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => op
    });
    const Op = ["recording", "freecam", "keyframe"];

    function op() {
      const pp = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(pp[1]) << 32n | BigInt(pp[0])
    }
  },
  60725: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      HOLD_TIMEOUT_MS: () => Yp,
      ReplayViewer: () => Ap
    });
    var Op = cp(37156),
      op = cp(37201),
      Ip = cp(37192),
      Sp = cp(37215),
      xp = cp(4903),
      Lp = cp(42875);
    const Yp = 1e4,
      Dp = new Set(["Dy"]);
    class Ap {
      constructor(pp) {
        var ip;
        this.deps = pp, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ip = pp.now) && void 0 !== ip ? ip : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== xp.jd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get sx() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Op.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(pp, ip) {
        var cp, Ip, Sp, Lp;
        const {
          client: Yp
        } = this.deps;
        if (!this.playback) {
          if (!Yp.setPlayback(!0)) throw new Error(Op.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Dp = this.epoch;
        let Ap;
        try {
          Ap = await Yp.open(pp, (() => (0, op.d)(pp, ip)))
        } finally {
          this.loadingOpens--
        }
        if (Dp !== this.epoch && "reloading" !== Ap) throw new Error(Op.c.coreStopped.text);
        if ("opening" !== Ap) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const pp = function(pp) {
            switch (pp) {
              case "reloading":
                return null;
              case "stopped":
              case xp._c.ModuleTrap:
                return Op.c.coreStopped;
              case xp._c.ModuleLoad:
                return Op.c.viewerLoadFailed;
              case xp._c.TooLarge:
                return Op.c.cantOpen
            }
          }(Ap);
          if (null === pp) return;
          throw new Error(pp.text)
        }
        return this.rejectSave(new Error(Op.c.saveClosed.text)), this.fileName = null !== (cp = null !== (Ip = ip.fileName) && void 0 !== Ip ? Ip : null === (Sp = ip.fileHandle) || void 0 === Sp ? void 0 : Sp.name) && void 0 !== cp ? cp : null, this.fileHandle = null !== (Lp = ip.fileHandle) && void 0 !== Lp ? Lp : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((pp, ip) => {
          this.pendingOpen = {
            resolve: pp,
            reject: ip
          }
        }))
      }
      play() {
        this.holds.has("Dy") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Dy")
      }
      seek(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this.lastView;
        null !== cp && (ip || pp < cp.LP) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(pp, ip)
      }
      setSpeed(pp) {
        this.deps.client.setSpeed(pp)
      }
      setCameraMode(pp) {
        this.deps.client.setCameraMode(pp)
      }
      cycleCameraMode() {
        const pp = this.lastView;
        null !== pp && pp.state !== xp.jd.None && this.setCameraMode(Lp.b[(Lp.b.indexOf(pp.cameraMode) + 1) % Lp.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(pp) {
        this.edited(this.deps.client.setKeyframe(pp))
      }
      moveKeyframe(pp, ip) {
        this.edited(this.deps.client.moveKeyframe(pp, ip))
      }
      deleteKeyframes(pp, ip) {
        this.edited(this.deps.client.deleteKeyframes(pp, ip))
      }
      setMark(pp) {
        this.edited(this.deps.client.setMark(pp))
      }
      crop(pp, ip) {
        return !(ip <= pp) && (null !== this.pendingSave ? (this.deps.notify(Op.c.saveBusy), !1) : !!this.deps.client.crop(pp, ip) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Op.c.saveBusy.text)) : new Promise(((pp, ip) => {
          const cp = {
            resolve: pp,
            reject: ip
          };
          this.pendingSave = cp, this.editsAtSave = this.edits, this.deps.client.save((0, Lp.e)()).then((pp => {
            this.pendingSave === cp && this.saveStarted(pp)
          }), (pp => {
            this.pendingSave === cp && this.rejectSave(pp instanceof Error ? pp : new Error(String(pp)))
          }))
        }))
      }
      saveStarted(pp) {
        switch (pp) {
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
      markSaved(pp, ip) {
        var cp, Op;
        this.fileHandle = pp, this.fileName = null !== (cp = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.name) && void 0 !== Op ? Op : ip) && void 0 !== cp ? cp : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Op.c.coreStopped.text)), this.rejectSave(new Error(Op.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var pp, ip, cp;
        const Op = this.deps.client.view(),
          op = Op !== this.lastView;
        this.lastView = Op, this.opening && null !== Op && Op.state !== xp.jd.None && Op.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Sp.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Op && Op.state === xp.jd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Op && Op.state !== xp.jd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Ip = 0 === this.settleFrames && 0 === (null !== (pp = null === (ip = (cp = this.deps).meshPending) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Ip && this.release("opening"), this.holds.has("seek") && Ip && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Ip && this.release("crop");
        const Lp = this.now();
        for (const [Sp, xp] of this.holds) !Dp.has(Sp) && Lp - xp >= Yp && this.release(Sp);
        this.saveRefused && !this.cropping && this.saveFailed(!1), op && this.deps.onChange()
      }
      cropped() {
        (0, Sp.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(pp) {
        switch (pp.reason) {
          case xp._c.TooLarge:
            break;
          case xp._c.Open:
          case xp._c.NothingStaged: {
            this.opening = !1, this.release("opening");
            const ip = (0, Ip.g)(pp.version) ? Op.c.replayTooOld : Op.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(ip), this.settleOpen(new Error(ip.text));
            break
          }
          case xp._c.Crop:
            if (pp.code === xp.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Op.c.cropFailed);
            break;
          case xp._c.ModuleTrap:
          case xp._c.ModuleLoad:
          case xp._c.Port:
            this.moduleEnded(pp.reason === xp._c.ModuleTrap ? Op.c.coreStopped : Op.c.cantOpen);
            break;
          case xp._c.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${pp.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(pp) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(pp), this.settleOpen(new Error(pp.text))
      }
      saveDone(pp) {
        const ip = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ip || void 0 === ip || ip.resolve(pp)
      }
      saveFailed(pp) {
        this.rejectSave(new Error(pp ? Op.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(pp) {
        pp && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Op.c.cropBusy.text)) : this.deps.notify(Op.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(pp) {
        const ip = this.pendingOpen;
        this.pendingOpen = null, null === pp ? null === ip || void 0 === ip || ip.resolve() : null === ip || void 0 === ip || ip.reject(pp)
      }
      rejectSave(pp) {
        const ip = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ip || void 0 === ip || ip.reject(pp)
      }
      hold(pp) {
        const ip = 0 === this.holds.size;
        this.holds.set(pp, this.now()), ip && this.deps.setHoldDraws(!0)
      }
      release(pp) {
        this.holds.delete(pp) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60722: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      MESH_TAIL_MS: () => Yp,
      PLAY_START_TIMEOUT_MS: () => xp,
      startWasmReplayVideoExport: () => Ap
    });
    var Op = cp(39440),
      op = cp(60725),
      Ip = cp(4903),
      Sp = cp(2468);
    const xp = op.HOLD_TIMEOUT_MS + 5e3,
      Lp = 50,
      Yp = 200;

    function Dp(pp) {
      var ip;
      return (null === (ip = pp.view) || void 0 === ip ? void 0 : ip.state) === Ip.jd.Cropping || pp.sx.includes("crop")
    }

    function Ap(pp) {
      return (0, Op.b)((() => function(pp) {
        var ip, cp, Op, op, Ap, Pp;
        const Wp = pp.viewer(),
          yp = null !== (ip = null === Wp || void 0 === Wp ? void 0 : Wp.view) && void 0 !== ip ? ip : null,
          Up = pp.canvas();
        if (!Wp || !yp || yp.state === Ip.jd.None || 0 === yp.totalTicks || !Up || Dp(Wp)) return null;
        const wp = null !== (cp = pp.now) && void 0 !== cp ? cp : () => performance.now(),
          vp = Wp.id,
          tp = () => {
            const ip = pp.viewer();
            return ip === Wp && ip.id === vp && ip.isOpen ? ip : null
          },
          Hp = Math.min(null !== (Op = null === (op = yp.mark) || void 0 === op ? void 0 : op.outTick) && void 0 !== Op ? Op : 1 / 0, yp.totalTicks - 1);
        let dp = null,
          ep = !1;
        const jp = () => {
          var pp, ip;
          return (null === (pp = tp()) || void 0 === pp || null === (ip = pp.view) || void 0 === ip ? void 0 : ip.state) === Ip.jd.Playing
        };
        return {
          Bl: Ip.xd,
          playbackMarkInTick: null !== (Ap = null === (Pp = yp.mark) || void 0 === Pp ? void 0 : Pp.inTick) && void 0 !== Ap ? Ap : null,
          startFailure: () => {
            const pp = tp();
            return null === pp ? "Another replay opened. Export it again from there." : Dp(pp) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var pp, ip;
            return null !== (pp = null === (ip = tp()) || void 0 === ip ? void 0 : ip.fileName) && void 0 !== pp ? pp : null
          },
          playbackSpeed: () => {
            var pp, ip, cp;
            return null !== (pp = null === (ip = tp()) || void 0 === ip || null === (cp = ip.view) || void 0 === cp ? void 0 : cp.speed) && void 0 !== pp ? pp : 1
          },
          setPlaybackSpeed: pp => {
            var ip;
            null === (ip = tp()) || void 0 === ip || ip.setSpeed(pp)
          },
          play: () => {
            var pp;
            ep = !1, dp = wp(), null === (pp = tp()) || void 0 === pp || pp.play()
          },
          pause: () => {
            var pp;
            null === (pp = tp()) || void 0 === pp || pp.pause()
          },
          seekToTick: pp => {
            var ip;
            null === (ip = tp()) || void 0 === ip || ip.seek(pp, !0)
          },
          seekSettled: () => new Promise((pp => {
            const ip = setInterval((() => {
              const cp = tp();
              null === cp ? (clearInterval(ip), pp()) : cp.sx.includes("seek") || (clearInterval(ip), setTimeout(pp, Yp))
            }), Lp)
          })),
          isPlaying: () => {
            var pp, ip, cp;
            return null !== dp && null !== tp() && (!!jp() || !ep && (null !== (pp = null === (ip = tp()) || void 0 === ip || null === (cp = ip.view) || void 0 === cp ? void 0 : cp.LP) && void 0 !== pp ? pp : 0) < Hp && wp() - dp < xp)
          },
          watchPlayback: ip => {
            const cp = pp.watchViewer((() => {
                ep ||= null !== dp && jp(), ip()
              })),
              Op = setTimeout(ip, xp + 1);
            return () => {
              clearTimeout(Op), cp()
            }
          },
          playbackFailure: () => {
            var pp, ip;
            const cp = tp();
            return null === cp ? "The replay closed before the video finished." : (null !== (pp = null === (ip = cp.view) || void 0 === ip ? void 0 : ip.LP) && void 0 !== pp ? pp : 0) >= Hp ? null : ep ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Up,
          closeViewer: () => {
            pp.requestViewer("close")
          },
          reopenViewer: () => {
            pp.requestViewer("open")
          },
          holdInput: Sp.g
        }
      }(pp)))
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);