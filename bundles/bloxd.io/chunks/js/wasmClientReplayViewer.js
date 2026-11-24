export const id = 61;
export const ids = [61];
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
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);