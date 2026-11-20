export const id = 57;
export const ids = [57];
export const modules = {
  36329: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Mb
    });
    const Ab = "data-replay-ui-active",
      Mb = [{
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
  36334: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      i: () => Lb,
      k: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(36329);

    function Eb() {
      const bb = {};
      for (const {
          group: ab
        }
        of Tb.d) bb[ab] = !0;
      return bb
    }
    let Yb = Eb();

    function Bb() {
      Mb.m.IR("replayViewer|uiVisibilityChanged")
    }

    function eb() {
      return Yb
    }

    function vb(bb, ab) {
      Yb[bb] !== ab && (Yb = {
        ...Yb,
        [bb]: ab
      }, "nametag" === bb && Ab.c.set({
        areNametagsHidden: !ab
      }), Bb())
    }

    function Lb() {
      Yb = Eb(), Ab.c.set({
        areNametagsHidden: !1
      }), Bb()
    }
  },
  41700: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      HOLD_TIMEOUT_MS: () => Yb,
      ReplayViewer: () => eb
    });
    var Ab = Ub(36321),
      Mb = Ub(36334),
      Tb = Ub(4479),
      Eb = Ub(41671);
    const Yb = 1e4,
      Bb = new Set(["QX"]);
    class eb {
      constructor(bb) {
        var ab;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ab = bb.now) && void 0 !== ab ? ab : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Tb.$c.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get PY() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ab.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, ab) {
        var Ub, Mb, Eb, Yb;
        const {
          client: Bb
        } = this.deps;
        if (!this.playback) {
          if (!Bb.setPlayback(!0)) throw new Error(Ab.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const eb = this.epoch;
        let vb;
        try {
          vb = await Bb.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (eb !== this.epoch) throw new Error(Ab.c.coreStopped.text);
        if ("opening" !== vb) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case Tb.Sc.ModuleTrap:
                return Ab.c.coreStopped;
              case Tb.Sc.ModuleLoad:
                return Ab.c.viewerLoadFailed;
              case Tb.Sc.TooLarge:
                return Ab.c.cantOpen
            }
          }(vb);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(Ab.c.saveClosed.text)), this.fileName = null !== (Ub = null !== (Mb = ab.fileName) && void 0 !== Mb ? Mb : null === (Eb = ab.fileHandle) || void 0 === Eb ? void 0 : Eb.name) && void 0 !== Ub ? Ub : null, this.fileHandle = null !== (Yb = ab.fileHandle) && void 0 !== Yb ? Yb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, ab) => {
          this.pendingOpen = {
            resolve: bb,
            reject: ab
          }
        }))
      }
      play() {
        this.holds.has("QX") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("QX")
      }
      seek(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this.lastView;
        null !== Ub && (ab || bb < Ub.qL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, ab)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== Tb.$c.None && this.setCameraMode(Eb.b[(Eb.b.indexOf(bb.cameraMode) + 1) % Eb.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, ab) {
        this.edited(this.deps.client.moveKeyframe(bb, ab))
      }
      deleteKeyframes(bb, ab) {
        this.edited(this.deps.client.deleteKeyframes(bb, ab))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, ab) {
        return !(ab <= bb) && (null !== this.pendingSave ? (this.deps.notify(Ab.c.saveBusy), !1) : !!this.deps.client.crop(bb, ab) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ab.c.saveBusy.text)) : new Promise(((bb, ab) => {
          const Ub = {
            resolve: bb,
            reject: ab
          };
          this.pendingSave = Ub, this.editsAtSave = this.edits, this.deps.client.save((0, Eb.c)()).then((bb => {
            this.pendingSave === Ub && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === Ub && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
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
      markSaved(bb, ab) {
        var Ub, Ab;
        this.fileHandle = bb, this.fileName = null !== (Ub = null !== (Ab = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== Ab ? Ab : ab) && void 0 !== Ub ? Ub : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ab.c.coreStopped.text)), this.rejectSave(new Error(Ab.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, ab, Ub;
        const Ab = this.deps.client.view(),
          Eb = Ab !== this.lastView;
        this.lastView = Ab, this.opening && null !== Ab && Ab.state !== Tb.$c.None && Ab.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Mb.i)()), this.cropAsked ? (this.cropAsked = !1, null !== Ab && Ab.state === Tb.$c.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ab && Ab.state !== Tb.$c.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const eb = 0 === this.settleFrames && 0 === (null !== (bb = null === (ab = (Ub = this.deps).meshPending) || void 0 === ab ? void 0 : ab.call(Ub)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && eb && this.release("opening"), this.holds.has("seek") && eb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && eb && this.release("crop");
        const vb = this.now();
        for (const [Mb, Tb] of this.holds) !Bb.has(Mb) && vb - Tb >= Yb && (this.release(Mb), "opening" === Mb && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Eb && this.deps.onChange()
      }
      cropped() {
        (0, Mb.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case Tb.Sc.TooLarge:
            break;
          case Tb.Sc.Open:
          case Tb.Sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Ab.c.cantOpen), this.settleOpen(new Error(Ab.c.cantOpen.text));
            break;
          case Tb.Sc.Crop:
            if (bb.code === Tb.Rc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ab.c.cropFailed);
            break;
          case Tb.Sc.ModuleTrap:
          case Tb.Sc.ModuleLoad:
          case Tb.Sc.Port:
            this.moduleEnded(bb.reason === Tb.Sc.ModuleTrap ? Ab.c.coreStopped : Ab.c.cantOpen);
            break;
          case Tb.Sc.NotLive:
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
        const ab = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ab || void 0 === ab || ab.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? Ab.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ab.c.cropBusy.text)) : this.deps.notify(Ab.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const ab = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === ab || void 0 === ab || ab.resolve() : null === ab || void 0 === ab || ab.reject(bb)
      }
      rejectSave(bb) {
        const ab = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ab || void 0 === ab || ab.reject(bb)
      }
      hold(bb) {
        const ab = 0 === this.holds.size;
        this.holds.set(bb, this.now()), ab && this.deps.setHoldDraws(!0)
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