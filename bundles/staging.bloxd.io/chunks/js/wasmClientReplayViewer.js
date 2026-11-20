export const id = 57;
export const ids = [57];
export const modules = {
  36570: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      g: () => Wb
    });
    const kb = "data-replay-ui-active",
      Wb = [{
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
  36573: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      d: () => Mb,
      h: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(36570);

    function Tb() {
      const bb = {};
      for (const {
          group: cb
        }
        of ab.g) bb[cb] = !0;
      return bb
    }
    let Ub = Tb();

    function Ib() {
      Wb.j.QQ("replayViewer|uiVisibilityChanged")
    }

    function Hb() {
      return Ub
    }

    function fb(bb, cb) {
      Ub[bb] !== cb && (Ub = {
        ...Ub,
        [bb]: cb
      }, "nametag" === bb && kb.d.set({
        areNametagsHidden: !cb
      }), Ib())
    }

    function Mb() {
      Ub = Tb(), kb.d.set({
        areNametagsHidden: !1
      }), Ib()
    }
  },
  41968: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      HOLD_TIMEOUT_MS: () => Ub,
      ReplayViewer: () => Hb
    });
    var kb = sb(36564),
      Wb = sb(36573),
      ab = sb(4512),
      Tb = sb(41939);
    const Ub = 1e4,
      Ib = new Set(["Qm"]);
    class Hb {
      constructor(bb) {
        var cb;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (cb = bb.now) && void 0 !== cb ? cb : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ab.ud.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get qU() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? kb.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, cb) {
        var sb, Wb, Tb, Ub;
        const {
          client: Ib
        } = this.deps;
        if (!this.playback) {
          if (!Ib.setPlayback(!0)) throw new Error(kb.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Hb = this.epoch;
        let fb;
        try {
          fb = await Ib.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (Hb !== this.epoch) throw new Error(kb.d.coreStopped.text);
        if ("opening" !== fb) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case ab.id.ModuleTrap:
                return kb.d.coreStopped;
              case ab.id.ModuleLoad:
                return kb.d.viewerLoadFailed;
              case ab.id.TooLarge:
                return kb.d.cantOpen
            }
          }(fb);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(kb.d.saveClosed.text)), this.fileName = null !== (sb = null !== (Wb = cb.fileName) && void 0 !== Wb ? Wb : null === (Tb = cb.fileHandle) || void 0 === Tb ? void 0 : Tb.name) && void 0 !== sb ? sb : null, this.fileHandle = null !== (Ub = cb.fileHandle) && void 0 !== Ub ? Ub : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, cb) => {
          this.pendingOpen = {
            resolve: bb,
            reject: cb
          }
        }))
      }
      play() {
        this.holds.has("Qm") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Qm")
      }
      seek(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this.lastView;
        null !== sb && (cb || bb < sb.aX) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, cb)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== ab.ud.None && this.setCameraMode(Tb.b[(Tb.b.indexOf(bb.cameraMode) + 1) % Tb.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, cb) {
        this.edited(this.deps.client.moveKeyframe(bb, cb))
      }
      deleteKeyframes(bb, cb) {
        this.edited(this.deps.client.deleteKeyframes(bb, cb))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, cb) {
        return !(cb <= bb) && (null !== this.pendingSave ? (this.deps.notify(kb.d.saveBusy), !1) : !!this.deps.client.crop(bb, cb) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(kb.d.saveBusy.text)) : new Promise(((bb, cb) => {
          const sb = {
            resolve: bb,
            reject: cb
          };
          this.pendingSave = sb, this.editsAtSave = this.edits, this.deps.client.save((0, Tb.e)()).then((bb => {
            this.pendingSave === sb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === sb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
          }))
        }))
      }
      saveStarted(bb) {
        switch (bb) {
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
      markSaved(bb, cb) {
        var sb, kb;
        this.fileHandle = bb, this.fileName = null !== (sb = null !== (kb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== kb ? kb : cb) && void 0 !== sb ? sb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(kb.d.coreStopped.text)), this.rejectSave(new Error(kb.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, cb, sb;
        const kb = this.deps.client.view(),
          Tb = kb !== this.lastView;
        this.lastView = kb, this.opening && null !== kb && kb.state !== ab.ud.None && kb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Wb.d)()), this.cropAsked ? (this.cropAsked = !1, null !== kb && kb.state === ab.ud.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== kb && kb.state !== ab.ud.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Hb = 0 === this.settleFrames && 0 === (null !== (bb = null === (cb = (sb = this.deps).meshPending) || void 0 === cb ? void 0 : cb.call(sb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Hb && this.release("opening"), this.holds.has("seek") && Hb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Hb && this.release("crop");
        const fb = this.now();
        for (const [Wb, ab] of this.holds) !Ib.has(Wb) && fb - ab >= Ub && (this.release(Wb), "opening" === Wb && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Tb && this.deps.onChange()
      }
      cropped() {
        (0, Wb.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case ab.id.TooLarge:
            break;
          case ab.id.Open:
          case ab.id.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(kb.d.cantOpen), this.settleOpen(new Error(kb.d.cantOpen.text));
            break;
          case ab.id.Crop:
            if (bb.code === ab.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(kb.d.cropFailed);
            break;
          case ab.id.ModuleTrap:
          case ab.id.ModuleLoad:
          case ab.id.Port:
            this.moduleEnded(bb.reason === ab.id.ModuleTrap ? kb.d.coreStopped : kb.d.cantOpen);
            break;
          case ab.id.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(bb) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(bb), this.settleOpen(new Error(bb.text))
      }
      saveDone(bb) {
        const cb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cb || void 0 === cb || cb.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? kb.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(kb.d.cropBusy.text)) : this.deps.notify(kb.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const cb = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === cb || void 0 === cb || cb.resolve() : null === cb || void 0 === cb || cb.reject(bb)
      }
      rejectSave(bb) {
        const cb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cb || void 0 === cb || cb.reject(bb)
      }
      hold(bb) {
        const cb = 0 === this.holds.size;
        this.holds.set(bb, this.now()), cb && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);